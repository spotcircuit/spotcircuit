#!/usr/bin/env bash
# publish-site.sh — publish a blog post by committing + pushing it to the
# spotcircuit-site repo. Vercel auto-deploys the push, so the canonical URL
# https://spotcircuit.com/blog/<slug> goes live without any CMS.
#
# Usage: scripts/publish-site.sh <path-to-markdown>
#
# Emits JSON on stdout:
#   {"url":"https://spotcircuit.com/blog/<slug>","id":"<commit-sha>","status":"pushed"}
#
# Environment (all from .env unless overridden):
#   SPOTCIRCUIT_SITE_REPO     absolute path to a local checkout of the
#                             spotcircuit-site repo. Required for real runs;
#                             if unset we drop to dry-run mode.
#   SPOTCIRCUIT_SITE_BLOG_DIR path within the repo where posts live.
#                             Default: blog
#   SPOTCIRCUIT_SITE_BRANCH   branch to push to. Default: main
#   SPOTCIRCUIT_SITE_REMOTE   remote name. Default: origin
#   SPOTCIRCUIT_PUBLIC_URL    public base URL. Default: https://spotcircuit.com
#   SPOTCIRCUIT_SITE_NO_PUSH  when "1", commits but skips the push (useful for
#                             dry-runs against a local clone).
#
# Never moves or mutates the source file — the orchestrator owns that. Safe to
# re-run on the same input: a no-op commit is avoided by checking git status
# before committing.

set -euo pipefail

die() { printf 'publish-site: %s\n' "$*" >&2; exit 1; }
log() { printf 'publish-site: %s\n' "$*" >&2; }

command -v git >/dev/null 2>&1 || die "git is required"
command -v jq  >/dev/null 2>&1 || die "jq is required"

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

SLUG="$(basename "$INPUT" .md)"
PUBLIC_URL="${SPOTCIRCUIT_PUBLIC_URL:-https://spotcircuit.com}"
PUBLIC_URL="${PUBLIC_URL%/}"
CANONICAL="$PUBLIC_URL/blog/$SLUG"

SITE_REPO="${SPOTCIRCUIT_SITE_REPO:-}"
BLOG_DIR="${SPOTCIRCUIT_SITE_BLOG_DIR:-blog}"
BRANCH="${SPOTCIRCUIT_SITE_BRANCH:-main}"
REMOTE="${SPOTCIRCUIT_SITE_REMOTE:-origin}"

if [ -z "$SITE_REPO" ]; then
  # Dry-run: no site-repo configured. Still report the canonical so downstream
  # steps (Medium/Substack/LinkedIn Article/social teasers) can thread it.
  printf '{"url":"%s","id":"%s","status":"pending","note":"site-repo-not-configured"}\n' \
    "$CANONICAL" "$SLUG"
  exit 0
fi

[ -d "$SITE_REPO/.git" ] || die "SPOTCIRCUIT_SITE_REPO=$SITE_REPO is not a git repository"

DEST_DIR="$SITE_REPO/$BLOG_DIR"
DEST_FILE="$DEST_DIR/$SLUG.md"
mkdir -p "$DEST_DIR"
cp "$INPUT" "$DEST_FILE"

# Run git ops inside the site repo.
pushd "$SITE_REPO" >/dev/null

# Make sure we're on the target branch. If the current branch already matches
# we stay put; otherwise switch. Use -q so dry-runs against test repos stay
# quiet.
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")"
if [ "$CURRENT_BRANCH" != "$BRANCH" ]; then
  git checkout -q "$BRANCH" 2>/dev/null || die "cannot checkout branch '$BRANCH' in $SITE_REPO"
fi

# Stage just the target file so we don't accidentally sweep in unrelated work.
git add -- "$BLOG_DIR/$SLUG.md"

# Check whether there's anything to commit. `git diff --cached --quiet` exits
# 0 when the index matches HEAD.
if git diff --cached --quiet; then
  log "no changes to commit — $BLOG_DIR/$SLUG.md is already up to date"
  COMMIT_SHA="$(git rev-parse HEAD)"
else
  COMMIT_MSG="blog: publish $SLUG"
  git -c user.name="${GIT_AUTHOR_NAME:-blog-writer}" \
      -c user.email="${GIT_AUTHOR_EMAIL:-blog-writer@spotcircuit.com}" \
      commit -q -m "$COMMIT_MSG"
  COMMIT_SHA="$(git rev-parse HEAD)"
  log "committed $COMMIT_SHA ($COMMIT_MSG)"
fi

PUSH_STATUS="pushed"
if [ "${SPOTCIRCUIT_SITE_NO_PUSH:-0}" = "1" ]; then
  PUSH_STATUS="local"
  log "SPOTCIRCUIT_SITE_NO_PUSH=1 — skipping push"
else
  if ! git push -q "$REMOTE" "$BRANCH"; then
    popd >/dev/null
    die "git push to $REMOTE/$BRANCH failed"
  fi
  log "pushed to $REMOTE/$BRANCH"
fi

popd >/dev/null

printf '{"url":"%s","id":"%s","status":"%s"}\n' "$CANONICAL" "$COMMIT_SHA" "$PUSH_STATUS"
