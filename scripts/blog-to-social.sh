#!/usr/bin/env bash
# blog-to-social.sh — generate short social posts (LinkedIn + Facebook) from a
# published blog post.
#
# Usage: scripts/blog-to-social.sh <path-to-markdown> <canonical-url> [out-dir]
#
# Writes two files to out-dir (default: blog/social/<slug>/):
#   linkedin.md  — ≤3000-char teaser with link + hashtags
#   facebook.md  — ≤2000-char Facebook post with link
#
# Emits JSON on stdout:
#   {"linkedin": "...", "facebook": "...", "title": "...", "canonical": "..."}
#
# The long-form LinkedIn Article is handled separately by
# scripts/publish-linkedin-article.sh — this script only generates the short
# social teaser copy that a human (or downstream scheduler) posts.
#
# Safe to re-run; overwrites existing outputs.

set -euo pipefail

die() { printf 'blog-to-social: %s\n' "$*" >&2; exit 1; }

command -v python3 >/dev/null 2>&1 || die "python3 is required"

[ $# -ge 2 ] || die "usage: $0 <path-to-markdown> <canonical-url> [out-dir]"
INPUT="$1"
CANONICAL="$2"
[ -f "$INPUT" ] || die "file not found: $INPUT"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

SLUG="$(basename "$INPUT" .md)"
OUT_DIR="${3:-$REPO_ROOT/blog/social/$SLUG}"
mkdir -p "$OUT_DIR"

FRONT_INPUT="$INPUT" CANONICAL="$CANONICAL" OUT_DIR="$OUT_DIR" python3 - <<'PY'
import json, os, re, sys
from pathlib import Path

path = Path(os.environ["FRONT_INPUT"])
canonical = os.environ["CANONICAL"]
out_dir = Path(os.environ["OUT_DIR"])

raw = path.read_text(encoding="utf-8")

title = None
tags = []
body = raw
m = re.match(r"^---\s*\n(.*?)\n---\s*\n?(.*)\Z", raw, re.DOTALL)
if m:
    fm, body = m.group(1), m.group(2)
    current_key = None
    for line in fm.splitlines():
        item = re.match(r"\s*-\s*(.+)$", line)
        if item and current_key == "tags":
            tags.append(item.group(1).strip().strip('"\''))
            continue
        kv = re.match(r"([A-Za-z0-9_-]+)\s*:\s*(.*)$", line)
        if not kv:
            continue
        k, v = kv.group(1).strip(), kv.group(2).strip().strip('"\'')
        current_key = k
        if k == "title":
            title = v
        elif k == "tags" and v:
            if v.startswith("[") and v.endswith("]"):
                tags = [t.strip().strip('"\'') for t in v[1:-1].split(",") if t.strip()]
            else:
                tags = [t.strip() for t in v.split(",") if t.strip()]

if not title:
    for line in body.splitlines():
        h = re.match(r"#\s+(.+)$", line.strip())
        if h:
            title = h.group(1).strip()
            break
title = title or path.stem

paragraphs = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip() and not p.lstrip().startswith("#")]
lead = paragraphs[0] if paragraphs else title
lead = re.sub(r"\s+", " ", lead)

hashtags = [t.replace(" ", "") for t in tags[:5] if t]
li_tag_line = " ".join(f"#{t}" for t in hashtags)
fb_tag_line = " ".join(f"#{t}" for t in hashtags[:3])  # Facebook: fewer hashtags read better

# LinkedIn post — 3000 char cap, three paragraphs + CTA + tags.
linkedin = [title, "", lead[:1200], "", f"Read the full post → {canonical}"]
if li_tag_line:
    linkedin += ["", li_tag_line]
linkedin_text = "\n".join(linkedin)[:3000]

# Facebook post — conversational lead + link; 2000-char soft cap.
hook = lead.split(". ")[0]
if len(hook) > 220:
    hook = hook[:217].rstrip() + "…"
facebook = [hook + "." if not hook.endswith((".", "!", "?")) else hook, "", lead[:1400], "", canonical]
if fb_tag_line:
    facebook += ["", fb_tag_line]
facebook_text = "\n".join(facebook)[:2000]

(out_dir / "linkedin.md").write_text(linkedin_text + "\n", encoding="utf-8")
(out_dir / "facebook.md").write_text(facebook_text + "\n", encoding="utf-8")

json.dump({
    "linkedin": str(out_dir / "linkedin.md"),
    "facebook": str(out_dir / "facebook.md"),
    "title": title,
    "canonical": canonical,
}, sys.stdout)
sys.stdout.write("\n")
PY
