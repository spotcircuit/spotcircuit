#!/usr/bin/env python3
"""publish-linkedin-post-cdp.py — publish a short LinkedIn feed post via CDP.

Usage:
    publish-linkedin-post-cdp.py <path-to-markdown> <canonical-url> [teaser-file]

Builds a short hook + link teaser from the markdown post (or reads one from
teaser-file, typically the LinkedIn teaser that blog-to-social.sh wrote) and
pastes it into LinkedIn's feed share composer. Saves the draft so the user
can review before publishing.

Follows the linkedin-scout-cdp.py pattern.

Emits: {"url": "...", "id": "...", "status": "draft", "canonical": "..."}
"""

from __future__ import annotations

import asyncio
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPT_DIR))

from cdp_common import (  # noqa: E402
    cdp_session,
    die,
    dry_run_result,
    emit,
    lead_paragraph,
    read_post,
    DRY_RUN,
)

FEED_URL = "https://www.linkedin.com/feed/"


def build_teaser(post: dict, canonical: str, teaser_file: str | None) -> str:
    if teaser_file and Path(teaser_file).is_file():
        text = Path(teaser_file).read_text(encoding="utf-8").rstrip()
        if canonical and canonical not in text:
            text += f"\n\n{canonical}"
        return text
    lead = lead_paragraph(post["body"])
    tags = " ".join(f"#{t.replace(' ', '')}" for t in post["tags"][:5])
    parts = [post["title"], "", lead[:1200], "", f"Read the full post → {canonical}"]
    if tags:
        parts += ["", tags]
    return "\n".join(parts)[:3000]


async def publish(teaser: str, slug: str, canonical: str) -> dict:
    async with cdp_session() as (_browser, _ctx, page):
        await page.goto(FEED_URL, wait_until="domcontentloaded")

        # Open the share composer from the feed header.
        await page.wait_for_selector('button:has-text("Start a post"), button[aria-label*="Start a post" i]')
        await page.click('button:has-text("Start a post"), button[aria-label*="Start a post" i]')

        # The composer opens in a modal — the editor is a ProseMirror div.
        body_selector = 'div[role="textbox"][contenteditable="true"], .ql-editor, div[aria-label*="Text editor" i]'
        await page.wait_for_selector(body_selector)
        await page.click(body_selector)
        await page.keyboard.insert_text(teaser)

        # Save draft rather than posting. LinkedIn surfaces the close "X" which
        # prompts "Save as draft" — click it, then confirm.
        try:
            await page.click('button[aria-label="Dismiss"], button[aria-label="Close"]', timeout=5000)
            await page.click('button:has-text("Save as draft"), button:has-text("Save")', timeout=5000)
        except Exception:
            pass

        draft_url = page.url
        return {
            "url": draft_url,
            "id": slug,
            "status": "draft",
            "canonical": canonical,
        }


def main(argv: list[str]) -> int:
    if len(argv) < 3:
        die("usage: publish-linkedin-post-cdp.py <path-to-markdown> <canonical-url> [teaser-file]")
    input_path = argv[1]
    canonical = argv[2]
    teaser_file = argv[3] if len(argv) >= 4 else None
    if not Path(input_path).is_file():
        die(f"file not found: {input_path}")

    post = read_post(input_path)
    teaser = build_teaser(post, canonical, teaser_file)

    if DRY_RUN:
        emit(dry_run_result(
            url=f"https://www.linkedin.com/feed/?dry=1&slug={post['slug']}",
            slug=post["slug"],
            reason="CROSS_POST_DRY_RUN=1",
        ))
        return 0

    result = asyncio.run(publish(teaser, post["slug"], canonical))
    emit(result)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
