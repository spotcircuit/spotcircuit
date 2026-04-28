#!/usr/bin/env bash
# cross-post.sh — orchestrate cross-posting a blog post after it lands in
# blog/ready/.
#
# Usage: scripts/cross-post.sh blog/ready/post-slug.md
#
# Pipeline:
#   0. Humanizer gate — scripts/humanizer_scorer.py must return
#      score <= HUMANIZER_THRESHOLD (default 0.3). On failure the post is NOT
#      published anywhere; instead a Paperclip issue is opened so the
#      content-humanizer path can rewrite it, and the post stays in
#      blog/ready/.
#   1. spotcircuit-site repo (publish-site.sh) — copies the post into the
#      site repo, commits, and pushes. Vercel auto-deploys, so
#      https://spotcircuit.com/blog/<slug> goes live without any CMS. This is
#      the canonical URL threaded to all downstream platforms.
#   2. Medium draft — publish-medium-cdp.py (CDP to debug Chrome).
#   3. Substack draft — publish-substack-cdp.py.
#   4. LinkedIn Article draft — publish-linkedin-article-cdp.py.
#   5. LinkedIn post draft — publish-linkedin-post-cdp.py (short teaser).
#   6. Facebook business page draft — publish-facebook-cdp.py.
#   Then: append all URLs to blog/log.md, move source to blog/published/.
#
# All external publishing (steps 2-6) connects to the user's logged-in debug
# Chrome over CDP (CHROME_CDP_URL, default http://172.20.240.1:9222). No API
# keys or OAuth tokens needed — the user is already authenticated. Same
# pattern as linkedin-scout-cdp.py. Set CROSS_POST_DRY_RUN=1 to skip CDP and
# run the pipeline in dev mode.
#
# Paperclip hook: on success/rejection cross-post emits `blog_post_ready` as
# a Paperclip issue assigned to the blog-writer agent.

set -euo pipefail

log() { printf 'cross-post: %s\n' "$*" >&2; }
die() { log "$*"; exit 1; }

command -v jq      >/dev/null 2>&1 || die "jq is required"
command -v curl    >/dev/null 2>&1 || die "curl is required"
command -v python3 >/dev/null 2>&1 || die "python3 is required"

[ $# -eq 1 ] || die "usage: $0 <path-to-markdown>"
INPUT="$1"
[ -f "$INPUT" ] || die "file not found: $INPUT"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/guard-cwd.sh"

ENV_FILE="$REPO_ROOT/.env"
if [ -f "$ENV_FILE" ]; then
  # shellcheck disable=SC1090
  set -a; . "$ENV_FILE"; set +a
fi

HUMANIZER_THRESHOLD="${HUMANIZER_THRESHOLD:-0.3}"
SLUG="$(basename "$INPUT" .md)"
TIMESTAMP="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

# ----- Paperclip hook helper -------------------------------------------------
emit_paperclip_hook() {
  local hook_status="$1" title="$2" description="$3"
  if [ -z "${PAPERCLIP_API_URL:-}" ] || [ -z "${PAPERCLIP_API_KEY:-}" ] || [ -z "${PAPERCLIP_COMPANY_ID:-}" ]; then
    log "paperclip hook skipped — PAPERCLIP_* env not set"
    return 0
  fi
  local assignee="${BLOG_WRITER_AGENT_ID:-${PAPERCLIP_AGENT_ID:-}}"
  if [ -z "$assignee" ]; then
    log "paperclip hook skipped — BLOG_WRITER_AGENT_ID / PAPERCLIP_AGENT_ID not set"
    return 0
  fi
  local payload
  payload="$(
    jq -n \
      --arg title "$title" \
      --arg description "$description" \
      --arg assignee "$assignee" \
      --arg hook_status "$hook_status" \
      --arg slug "$SLUG" \
      '{title:$title, description:$description, assigneeAgentId:$assignee, status:"todo", priority:"high", labels:["blog_post_ready", $hook_status, $slug]}'
  )"
  local resp_file; resp_file="$(mktemp)"
  local code
  code="$(
    curl -sS -o "$resp_file" -w '%{http_code}' \
      -X POST "$PAPERCLIP_API_URL/api/companies/$PAPERCLIP_COMPANY_ID/issues" \
      -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
      -H "Content-Type: application/json" \
      ${PAPERCLIP_RUN_ID:+-H "X-Paperclip-Run-Id: $PAPERCLIP_RUN_ID"} \
      --data "$payload"
  )"
  if [ "$code" != "200" ] && [ "$code" != "201" ]; then
    log "paperclip hook failed HTTP $code: $(cat "$resp_file")"
    rm -f "$resp_file"
    return 1
  fi
  jq -r '.identifier // .id // empty' "$resp_file"
  rm -f "$resp_file"
}

# ----- Step 0: humanizer gate ------------------------------------------------
HUMANIZER="$SCRIPT_DIR/humanizer_scorer.py"
[ -f "$HUMANIZER" ] || die "missing humanizer_scorer.py at $HUMANIZER — cannot enforce quality gate"

log "step 0: humanizer gate (threshold=$HUMANIZER_THRESHOLD)"
HUMAN_JSON="$(python3 "$HUMANIZER" "$INPUT")" || die "humanizer_scorer.py failed"
SCORE="$(printf '%s' "$HUMAN_JSON" | jq -r '.score')"
OVER="$(awk -v s="$SCORE" -v t="$HUMANIZER_THRESHOLD" 'BEGIN{print (s+0 > t+0) ? "1" : "0"}')"
if [ "$OVER" = "1" ]; then
  log "humanizer gate FAILED — score=$SCORE threshold=$HUMANIZER_THRESHOLD"
  log "post stays in blog/ready/ — routing back for humanization"
  HOOK_DESC="Humanizer score $SCORE exceeded threshold $HUMANIZER_THRESHOLD for \`$INPUT\`."$'\n\n'"Signals:"$'\n```json\n'"$HUMAN_JSON"$'\n```\n\nRewrite with content-humanizer, then re-run `scripts/cross-post.sh '"$INPUT"'`.'
  emit_paperclip_hook "needs_humanize" "blog_post_ready: humanize $SLUG (score $SCORE)" "$HOOK_DESC" || true
  exit 3
fi
log "humanizer gate PASSED — score=$SCORE"

# ----- Step 0b: generate featured image (Gemini) ----------------------------
IMAGE_GEN="$SCRIPT_DIR/generate-blog-image.py"
IMAGE_PATH="${INPUT%.md}.png"
if [ -f "$IMAGE_PATH" ]; then
  log "step 0b: featured image already exists at $IMAGE_PATH"
elif [ -f "$IMAGE_GEN" ]; then
  log "step 0b: generating featured image via Gemini"
  IMAGE_OUT="$(python3 "$IMAGE_GEN" "$INPUT" "$IMAGE_PATH" 2>&1)" || log "  image generation failed (non-fatal): $IMAGE_OUT"
  if [ -f "$IMAGE_PATH" ]; then
    log "  image saved: $IMAGE_PATH ($(wc -c < "$IMAGE_PATH") bytes)"
  fi
else
  log "step 0b: skipping image — generate-blog-image.py not found"
fi

# ----- Step 1: spotcircuit-site repo (Vercel auto-deploy) -------------------
SITE_HELPER="$SCRIPT_DIR/publish-site.sh"
[ -x "$SITE_HELPER" ] || die "missing or non-executable scripts/publish-site.sh"
log "step 1: publishing to spotcircuit-site repo"
SITE_JSON="$("$SITE_HELPER" "$INPUT")" || die "publish-site.sh failed"
SITE_URL="$(printf '%s' "$SITE_JSON" | jq -r '.url')"
SITE_STATUS="$(printf '%s' "$SITE_JSON" | jq -r '.status // empty')"
SITE_COMMIT="$(printf '%s' "$SITE_JSON" | jq -r '.id // empty')"
[ -n "$SITE_URL" ] || die "publish-site returned empty URL"
log "  site URL: $SITE_URL ($SITE_STATUS, commit=$SITE_COMMIT)"

CANONICAL_URL="${CANONICAL_BASE_URL:-$SITE_URL}"

# ----- Step 1b: CDP Chrome preflight ----------------------------------------
# Steps 2-6 require a logged-in Chrome reachable at CHROME_CDP_URL. Probe
# first; if down, try to bring it up. CROSS_POST_CDP_MODE=headless|windowed
# picks the launcher. If still down after launch, the CDP steps will skip
# with a clear report instead of ECONNRESETing each one.
CDP_HELPER="$SCRIPT_DIR/ensure-cdp-chrome.sh"
CDP_AVAILABLE=0
if [ -x "$CDP_HELPER" ]; then
  CDP_MODE_FLAG="--${CROSS_POST_CDP_MODE:-windowed}"
  if bash "$CDP_HELPER" "$CDP_MODE_FLAG" >&2; then
    CDP_AVAILABLE=1
  else
    log "  CDP Chrome unavailable — steps 2-6 will be SKIPPED."
    log "  To recover: bash scripts/ensure-cdp-chrome.sh ${CDP_MODE_FLAG#--} (or start C:\\temp\\chrome-debug.bat manually), then re-run."
  fi
else
  log "  ensure-cdp-chrome.sh missing — attempting CDP steps anyway (may fail)."
  CDP_AVAILABLE=1
fi

# ----- run_cdp_publisher helper ---------------------------------------------
# Runs a CDP publisher and returns its JSON blob. CDP helpers may fail because
# the debug Chrome isn't running or a selector drifted; we capture the error
# into the result JSON rather than aborting the whole pipeline — step 1 has
# already committed the canonical post, so partial completion is still useful.
run_cdp_publisher() {
  local label="$1"; shift
  local helper="$1"; shift
  if [ "$CDP_AVAILABLE" != "1" ]; then
    log "  $label SKIPPED — CDP Chrome unavailable"
    jq -n --arg label "$label" '{url:"", id:"", status:"skipped", note:"CDP Chrome unavailable — run scripts/ensure-cdp-chrome.sh"}'
    return 0
  fi
  local out code
  out="$("$helper" "$@" 2>&1)"
  code=$?
  if [ "$code" -ne 0 ]; then
    log "  $label publisher failed (exit $code): $(printf '%s' "$out" | tail -1)"
    jq -n --arg label "$label" --arg err "$out" '{url:"", id:"", status:"error", note:$err}'
    return 0
  fi
  # Last non-empty line is the JSON result. Everything before it is log
  # output written to stderr, which bash already captured into $out.
  local line
  line="$(printf '%s\n' "$out" | awk 'NF{ last=$0 } END{ print last }')"
  if printf '%s' "$line" | jq empty >/dev/null 2>&1; then
    printf '%s' "$line"
  else
    log "  $label publisher returned non-JSON: $line"
    jq -n --arg label "$label" --arg raw "$out" '{url:"", id:"", status:"error", note:("non-json: " + $raw)}'
  fi
}

# ----- Step 2: Medium (CDP) --------------------------------------------------
MEDIUM_HELPER="$SCRIPT_DIR/publish-medium-cdp.py"
[ -x "$MEDIUM_HELPER" ] || die "missing or non-executable scripts/publish-medium-cdp.py"
log "step 2: publishing to Medium via CDP (canonical=$CANONICAL_URL)"
MEDIUM_ARGS=("$INPUT" "$CANONICAL_URL")
[ -f "$IMAGE_PATH" ] && MEDIUM_ARGS+=("$IMAGE_PATH")
MEDIUM_JSON="$(run_cdp_publisher medium "$MEDIUM_HELPER" "${MEDIUM_ARGS[@]}")"
MEDIUM_URL="$(printf '%s' "$MEDIUM_JSON" | jq -r '.url // ""')"
MEDIUM_STATUS="$(printf '%s' "$MEDIUM_JSON" | jq -r '.status // empty')"
log "  medium URL: $MEDIUM_URL ($MEDIUM_STATUS)"

# ----- Step 3: Substack (CDP) -----------------------------------------------
SUBSTACK_HELPER="$SCRIPT_DIR/publish-substack-cdp.py"
[ -x "$SUBSTACK_HELPER" ] || die "missing or non-executable scripts/publish-substack-cdp.py"
log "step 3: publishing to Substack via CDP (canonical=$CANONICAL_URL)"
SUBSTACK_JSON="$(run_cdp_publisher substack "$SUBSTACK_HELPER" "$INPUT" "$CANONICAL_URL")"
SUBSTACK_URL="$(printf '%s' "$SUBSTACK_JSON" | jq -r '.url // ""')"
SUBSTACK_STATUS="$(printf '%s' "$SUBSTACK_JSON" | jq -r '.status // empty')"
log "  substack URL: $SUBSTACK_URL ($SUBSTACK_STATUS)"

# ----- Step 4: LinkedIn Article (CDP) ---------------------------------------
LI_ARTICLE_HELPER="$SCRIPT_DIR/publish-linkedin-article-cdp.py"
[ -x "$LI_ARTICLE_HELPER" ] || die "missing or non-executable scripts/publish-linkedin-article-cdp.py"
log "step 4: publishing LinkedIn Article via CDP (canonical=$CANONICAL_URL)"
LI_ARTICLE_ARGS=("$INPUT" "$CANONICAL_URL")
[ -f "$IMAGE_PATH" ] && LI_ARTICLE_ARGS+=("$IMAGE_PATH")
LI_ARTICLE_JSON="$(run_cdp_publisher linkedin-article "$LI_ARTICLE_HELPER" "${LI_ARTICLE_ARGS[@]}")"
LI_ARTICLE_URL="$(printf '%s' "$LI_ARTICLE_JSON" | jq -r '.url // ""')"
LI_ARTICLE_STATUS="$(printf '%s' "$LI_ARTICLE_JSON" | jq -r '.status // empty')"
log "  linkedin article URL: $LI_ARTICLE_URL ($LI_ARTICLE_STATUS)"

# ----- blog-to-social (teaser copy) + steps 5/6 ------------------------------
# blog-to-social.sh writes linkedin.md and facebook.md teasers; the CDP post
# publishers read those files so the teaser copy is auditable / editable
# before it hits the composer.
SOCIAL_HELPER="$SCRIPT_DIR/blog-to-social.sh"
[ -x "$SOCIAL_HELPER" ] || die "missing or non-executable scripts/blog-to-social.sh"
log "generating short-form teaser copy"
SOCIAL_JSON="$("$SOCIAL_HELPER" "$INPUT" "$CANONICAL_URL")" || die "blog-to-social.sh failed"
TEASER_LINKEDIN="$(printf '%s' "$SOCIAL_JSON" | jq -r '.linkedin')"
TEASER_FACEBOOK="$(printf '%s' "$SOCIAL_JSON" | jq -r '.facebook')"

LI_POST_HELPER="$SCRIPT_DIR/publish-linkedin-post-cdp.py"
[ -x "$LI_POST_HELPER" ] || die "missing or non-executable scripts/publish-linkedin-post-cdp.py"
log "step 5: publishing LinkedIn post via CDP"
LI_POST_JSON="$(run_cdp_publisher linkedin-post "$LI_POST_HELPER" "$INPUT" "$CANONICAL_URL" "$TEASER_LINKEDIN")"
LI_POST_URL="$(printf '%s' "$LI_POST_JSON" | jq -r '.url // ""')"
LI_POST_STATUS="$(printf '%s' "$LI_POST_JSON" | jq -r '.status // empty')"
log "  linkedin post URL: $LI_POST_URL ($LI_POST_STATUS)"

FB_HELPER="$SCRIPT_DIR/publish-facebook-cdp.py"
[ -x "$FB_HELPER" ] || die "missing or non-executable scripts/publish-facebook-cdp.py"
log "step 6: publishing Facebook page post via CDP"
FB_JSON="$(run_cdp_publisher facebook "$FB_HELPER" "$INPUT" "$CANONICAL_URL" "$TEASER_FACEBOOK")"
FB_URL="$(printf '%s' "$FB_JSON" | jq -r '.url // ""')"
FB_STATUS="$(printf '%s' "$FB_JSON" | jq -r '.status // empty')"
log "  facebook URL: $FB_URL ($FB_STATUS)"

# ----- Log -------------------------------------------------------------------
LOG_FILE="$REPO_ROOT/blog/log.md"
mkdir -p "$(dirname "$LOG_FILE")"
if [ ! -f "$LOG_FILE" ]; then
  printf '# Blog publish log\n\n' > "$LOG_FILE"
fi
{
  printf -- '- %s | cross-post | %s\n' "$TIMESTAMP" "$SLUG"
  printf -- '  - humanizer_score: %s (threshold %s)\n' "$SCORE" "$HUMANIZER_THRESHOLD"
  printf -- '  - site: %s (%s, commit %s)\n' "$SITE_URL" "${SITE_STATUS:-unknown}" "${SITE_COMMIT:-unknown}"
  printf -- '  - medium: %s (%s)\n' "$MEDIUM_URL" "${MEDIUM_STATUS:-unknown}"
  printf -- '  - substack: %s (%s)\n' "$SUBSTACK_URL" "${SUBSTACK_STATUS:-unknown}"
  printf -- '  - linkedin_article: %s (%s)\n' "$LI_ARTICLE_URL" "${LI_ARTICLE_STATUS:-unknown}"
  printf -- '  - linkedin_post: %s (%s)\n' "$LI_POST_URL" "${LI_POST_STATUS:-unknown}"
  printf -- '  - facebook_post: %s (%s)\n' "$FB_URL" "${FB_STATUS:-unknown}"
  printf -- '  - teaser_linkedin: %s\n' "${TEASER_LINKEDIN#"$REPO_ROOT/"}"
  printf -- '  - teaser_facebook: %s\n' "${TEASER_FACEBOOK#"$REPO_ROOT/"}"
  printf -- '  - canonical: %s\n' "$CANONICAL_URL"
} >> "$LOG_FILE"

# ----- Move ------------------------------------------------------------------
if [ "${CROSS_POST_DRY_RUN:-0}" = "1" ]; then
  log "dry-run: skipping move to blog/published/ — source stays in blog/ready/"
else
  PUBLISHED_DIR="$REPO_ROOT/blog/published"
  mkdir -p "$PUBLISHED_DIR"
  DEST="$PUBLISHED_DIR/$(basename "$INPUT")"
  if [ -e "$DEST" ]; then
    DEST="$PUBLISHED_DIR/$(date -u +%Y%m%dT%H%M%SZ)-$(basename "$INPUT")"
  fi
  mv "$INPUT" "$DEST"
  # Move the image alongside the post if it exists
  if [ -f "$IMAGE_PATH" ]; then
    IMAGE_DEST="$PUBLISHED_DIR/$(basename "$IMAGE_PATH")"
    mv "$IMAGE_PATH" "$IMAGE_DEST"
    log "moved image to ${IMAGE_DEST#"$REPO_ROOT/"}"
  fi
  log "moved source to ${DEST#"$REPO_ROOT/"}"
fi

# ----- Paperclip hook: blog_post_ready --------------------------------------
HOOK_BODY="Cross-post pipeline complete for \`$SLUG\`."$'\n\n'\
"- Site (canonical): $SITE_URL (commit $SITE_COMMIT)"$'\n'\
"- Medium:           $MEDIUM_URL ($MEDIUM_STATUS)"$'\n'\
"- Substack:         $SUBSTACK_URL ($SUBSTACK_STATUS)"$'\n'\
"- LinkedIn Article: $LI_ARTICLE_URL ($LI_ARTICLE_STATUS)"$'\n'\
"- LinkedIn post:    $LI_POST_URL ($LI_POST_STATUS)"$'\n'\
"- Facebook post:    $FB_URL ($FB_STATUS)"$'\n'\
"- Humanizer score:  $SCORE (≤ $HUMANIZER_THRESHOLD)"
HOOK_ID="$(emit_paperclip_hook "ready" "blog_post_ready: $SLUG" "$HOOK_BODY" || true)"
if [ -n "${HOOK_ID:-}" ]; then
  log "paperclip hook emitted: $HOOK_ID"
fi

log "done: $SLUG"
