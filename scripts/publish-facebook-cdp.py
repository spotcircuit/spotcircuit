#!/usr/bin/env python3
"""publish-facebook-cdp.py — publish a Facebook business page post draft via CDP.

Usage:
    publish-facebook-cdp.py <path-to-markdown> <canonical-url> [teaser-file]

Environment:
    CHROME_CDP_URL        default http://172.20.240.1:9222
    FACEBOOK_PAGE_URL     URL of the business page (e.g.
                          https://www.facebook.com/spotcircuitofficial).
                          Required unless CROSS_POST_DRY_RUN=1.
    CROSS_POST_DRY_RUN    "1" to skip CDP.

Follows the linkedin-scout-cdp.py pattern: connect_over_cdp → navigate to the
page's composer while the user is logged in as the page admin → paste →
save draft.

Emits: {"url": "...", "id": "...", "status": "draft", "canonical": "..."}
"""

from __future__ import annotations

import asyncio
import os
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


def build_teaser(post: dict, canonical: str, teaser_file: str | None) -> str:
    if teaser_file and Path(teaser_file).is_file():
        text = Path(teaser_file).read_text(encoding="utf-8").rstrip()
        if canonical and canonical not in text:
            text += f"\n\n{canonical}"
        return text
    lead = lead_paragraph(post["body"])
    hook = lead.split(". ")[0]
    if len(hook) > 220:
        hook = hook[:217].rstrip() + "…"
    tags = " ".join(f"#{t.replace(' ', '')}" for t in post["tags"][:3])
    parts = [hook + ("" if hook.endswith((".", "!", "?")) else "."), "", lead[:1400], "", canonical]
    if tags:
        parts += ["", tags]
    return "\n".join(parts)[:2000]


async def publish(page_url: str, teaser: str, slug: str, canonical: str) -> dict:
    async with cdp_session() as (_browser, _ctx, page):
        await page.goto(page_url, wait_until="domcontentloaded")

        # Facebook's page composer: "Create post" button opens a modal.
        await page.wait_for_selector(
            'div[role="button"]:has-text("Create post"), '
            'div[role="button"]:has-text("What\'s on your mind"), '
            'div[role="button"]:has-text("Write something")'
        )
        await page.click(
            'div[role="button"]:has-text("Create post"), '
            'div[role="button"]:has-text("What\'s on your mind"), '
            'div[role="button"]:has-text("Write something")'
        )

        body_selector = 'div[contenteditable="true"][role="textbox"], div[aria-label*="What\'s on your mind" i]'
        await page.wait_for_selector(body_selector)
        await page.click(body_selector)
        await page.keyboard.insert_text(teaser)

        # Close the composer — Facebook prompts "Save as draft" on close.
        try:
            await page.click('div[aria-label="Close"], div[role="button"][aria-label="Close"]', timeout=5000)
            await page.click('div[role="button"]:has-text("Save as draft"), div[role="button"]:has-text("Save draft")', timeout=5000)
        except Exception:
            pass

        return {
            "url": page.url,
            "id": slug,
            "status": "draft",
            "canonical": canonical,
        }


def main(argv: list[str]) -> int:
    if len(argv) < 3:
        die("usage: publish-facebook-cdp.py <path-to-markdown> <canonical-url> [teaser-file]")
    input_path = argv[1]
    canonical = argv[2]
    teaser_file = argv[3] if len(argv) >= 4 else None
    if not Path(input_path).is_file():
        die(f"file not found: {input_path}")

    post = read_post(input_path)
    teaser = build_teaser(post, canonical, teaser_file)
    page_url = os.environ.get("FACEBOOK_PAGE_URL", "").strip()

    if DRY_RUN or not page_url:
        note = "CROSS_POST_DRY_RUN=1" if DRY_RUN else "FACEBOOK_PAGE_URL not set"
        url = page_url or f"https://www.facebook.com/drafts/{post['slug']}"
        emit(dry_run_result(url=url, slug=post["slug"], reason=note))
        return 0

    result = asyncio.run(publish(page_url, teaser, post["slug"], canonical))
    emit(result)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
