#!/usr/bin/env python3
"""publish-substack-cdp.py — publish a post to Substack as a draft via CDP.

Usage:
    publish-substack-cdp.py <path-to-markdown> [canonical-url]

Follows the linkedin-scout-cdp.py pattern: connect_over_cdp → navigate →
paste → save draft. The user is already logged into Substack in the debug
Chrome, so no auth is needed.

Environment:
    CHROME_CDP_URL          default http://172.20.240.1:9222
    SUBSTACK_PUBLICATION    publication subdomain, e.g. "mycrew" for
                            https://mycrew.substack.com. Required unless
                            CROSS_POST_DRY_RUN=1.
    CROSS_POST_DRY_RUN      "1" to skip CDP and emit a pending URL.

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
    read_post,
    DRY_RUN,
)


def new_post_url(publication: str) -> str:
    return f"https://{publication}.substack.com/publish/post?type=newsletter"


async def publish(post: dict, publication: str, canonical: str | None) -> dict:
    async with cdp_session() as (_browser, _ctx, page):
        await page.goto(new_post_url(publication), wait_until="domcontentloaded")

        # Substack editor: title is an input with placeholder "Title",
        # body is a ProseMirror contenteditable.
        title_selector = 'textarea[placeholder="Title"], input[placeholder="Title"]'
        body_selector = 'div[contenteditable="true"][data-testid="post-body"], .ProseMirror'

        await page.wait_for_selector(title_selector)
        await page.click(title_selector)
        await page.keyboard.type(post["title"], delay=10)

        await page.wait_for_selector(body_selector)
        await page.click(body_selector)
        await page.keyboard.insert_text(post["body"])

        # Set the canonical URL via the post settings drawer if provided.
        if canonical:
            try:
                await page.click('button[aria-label="Settings"], button:has-text("Settings")', timeout=5000)
                await page.fill(
                    'input[name="canonical_url"], input[placeholder*="canonical" i]',
                    canonical,
                    timeout=5000,
                )
                await page.keyboard.press("Escape")
            except Exception:
                # Canonical wiring is best-effort from the UI — Substack often
                # gates it behind the publish modal. The orchestrator always
                # records the intended canonical in blog/log.md regardless.
                pass

        # Substack autosaves. Wait for the "Saved" pill.
        try:
            await page.wait_for_selector(':text("Saved"), :text("Draft saved")', timeout=15000)
        except Exception:
            pass

        draft_url = page.url
        draft_id = ""
        if "/p/" in draft_url:
            draft_id = draft_url.split("/p/")[1].split("/")[0]
        elif "post/" in draft_url:
            draft_id = draft_url.split("post/")[-1].split("?")[0]

        return {
            "url": draft_url,
            "id": draft_id or post["slug"],
            "status": "draft",
            "canonical": canonical or "",
        }


def main(argv: list[str]) -> int:
    if len(argv) < 2:
        die("usage: publish-substack-cdp.py <path-to-markdown> [canonical-url]")
    input_path = argv[1]
    canonical = argv[2] if len(argv) >= 3 else None
    if not Path(input_path).is_file():
        die(f"file not found: {input_path}")

    post = read_post(input_path)
    publication = os.environ.get("SUBSTACK_PUBLICATION", "").strip()

    if DRY_RUN or not publication:
        note = "CROSS_POST_DRY_RUN=1" if DRY_RUN else "SUBSTACK_PUBLICATION not set"
        url = (
            f"https://{publication}.substack.com/publish/post?dry=1&slug={post['slug']}"
            if publication
            else f"https://substack.com/drafts/{post['slug']}"
        )
        emit(dry_run_result(url=url, slug=post["slug"], reason=note))
        return 0

    result = asyncio.run(publish(post, publication, canonical))
    emit(result)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
