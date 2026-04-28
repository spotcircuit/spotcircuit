#!/usr/bin/env python3
"""edit-linkedin-article-cdp.py — open an existing LinkedIn Article,
attach a cover image, and republish.

Use case: cross-post.sh published an article but the cover image didn't
attach (CDP was down on first run, retry missed the image arg, etc).
This re-opens the article, uploads the image, clicks Publish.

Usage:
    edit-linkedin-article-cdp.py <article-url> <image-path>

Exit:
    0 on success (prints JSON result)
    non-zero on failure
"""

from __future__ import annotations

import asyncio
import json
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPT_DIR))

from cdp_common import cdp_session, die, emit  # noqa: E402


async def attach_cover_and_republish(article_url: str, image_path: str) -> dict:
    img = Path(image_path).resolve()
    if not img.is_file():
        die(f"image not found: {image_path}")

    async with cdp_session() as (_browser, _ctx, page):
        await page.goto(article_url, wait_until="domcontentloaded")
        await page.wait_for_timeout(4000)

        # Step 1: Find and click the Edit button. LinkedIn surfaces this for
        # the article's author on their own post.
        edit_clicked = False
        for sel in [
            'button:has-text("Edit article")',
            'a:has-text("Edit article")',
            'button[aria-label*="Edit article" i]',
            'button:has-text("Edit")',
            'a[href*="/article/edit/"]',
            'button[aria-label*="Edit" i]',
        ]:
            try:
                el = await page.wait_for_selector(sel, timeout=3000)
                if el:
                    await el.click()
                    edit_clicked = True
                    break
            except Exception:
                continue
        if not edit_clicked:
            die("could not find Edit button on article")
        await page.wait_for_timeout(5000)

        # Step 2: Upload cover image. Same selector set as publish-linkedin-article-cdp.py.
        uploaded = False
        for img_sel in [
            'input[type="file"]',
            'button:has-text("Upload")',
            'button[aria-label*="cover" i]',
            'button[aria-label*="image" i]',
            'div[role="button"]:has-text("cover")',
        ]:
            try:
                el = await page.wait_for_selector(img_sel, timeout=2500)
                if not el:
                    continue
                if img_sel == 'input[type="file"]':
                    await el.set_input_files(str(img))
                else:
                    async with page.expect_file_chooser() as fc_info:
                        await el.click()
                    fc = await fc_info.value
                    await fc.set_files(str(img))
                await page.wait_for_timeout(4000)
                uploaded = True
                break
            except Exception:
                continue
        if not uploaded:
            die("could not upload cover image — no matching upload affordance found")

        # Step 3: Navigate through LinkedIn's republish flow.
        # Next → share screen → Publish. If it's already published, Publish
        # may instead be labeled "Update" or just "Publish" with different
        # confirmation text.
        for sel in [
            'button:has-text("Next")',
            'button[aria-label*="Next" i]',
            'button.artdeco-button--primary:has-text("Next")',
        ]:
            try:
                el = await page.wait_for_selector(sel, timeout=4000)
                if el:
                    await el.click()
                    break
            except Exception:
                continue
        await page.wait_for_timeout(3000)

        # Step 4: Click Publish / Update.
        published = False
        for sel in [
            'button:has-text("Publish")',
            'button:has-text("Update")',
            'button.artdeco-button--primary:has-text("Publish")',
            'button[aria-label*="Publish" i]',
        ]:
            try:
                el = await page.wait_for_selector(sel, timeout=4000)
                if el:
                    await el.click()
                    published = True
                    break
            except Exception:
                continue
        if not published:
            die("could not find Publish/Update button after image upload")
        await page.wait_for_timeout(6000)

        final_url = page.url
        return {
            "url": final_url,
            "status": "republished",
            "image_attached": str(img),
        }


async def main() -> None:
    if len(sys.argv) < 3:
        die("usage: edit-linkedin-article-cdp.py <article-url> <image-path>")
    article_url = sys.argv[1]
    image_path = sys.argv[2]
    result = await attach_cover_and_republish(article_url, image_path)
    emit(result)


if __name__ == "__main__":
    asyncio.run(main())
