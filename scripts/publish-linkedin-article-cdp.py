#!/usr/bin/env python3
"""publish-linkedin-article-cdp.py — publish a LinkedIn long-form Article
draft via CDP.

Usage:
    publish-linkedin-article-cdp.py <path-to-markdown> <canonical-url>

Follows the linkedin-scout-cdp.py pattern. Navigates to the Publishing
(article) composer in the user's already-logged-in LinkedIn session, pastes
the title + body, and lets LinkedIn autosave the draft.

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
    read_post,
    DRY_RUN,
)

NEW_ARTICLE_URL = "https://www.linkedin.com/article/new/"


async def publish(post: dict, canonical: str) -> dict:
    async with cdp_session() as (_browser, _ctx, page):
        import json as _json

        await page.goto(NEW_ARTICLE_URL, wait_until="domcontentloaded")
        await page.wait_for_timeout(5000)  # LinkedIn article editor is slow

        # Layout: styles up top → image upload box → title → body (all one screen)

        # Step 0: Upload cover image if provided — LinkedIn shows an image
        # upload box above the title
        if post.get("image_path") and Path(post["image_path"]).is_file():
            try:
                for img_sel in [
                    'button:has-text("Upload")',
                    'button[aria-label*="cover" i]',
                    'button[aria-label*="image" i]',
                    'div[role="button"]:has-text("cover")',
                    'input[type="file"]',
                ]:
                    try:
                        el = await page.wait_for_selector(img_sel, timeout=2000)
                        if el:
                            if img_sel == 'input[type="file"]':
                                await el.set_input_files(str(Path(post["image_path"]).resolve()))
                            else:
                                async with page.expect_file_chooser() as fc_info:
                                    await el.click()
                                fc = await fc_info.value
                                await fc.set_files(str(Path(post["image_path"]).resolve()))
                            await page.wait_for_timeout(3000)
                            break
                    except Exception:
                        continue
            except Exception:
                pass  # Cover image is optional

        # Step 1: Title — click the title field and type
        title_typed = False
        for sel in [
            'textarea[aria-label*="Title" i]',
            'textarea[placeholder*="Title" i]',
            'input[aria-label*="Title" i]',
            'h1[contenteditable="true"]',
            '[data-placeholder*="Title" i]',
            'div[contenteditable="true"]:first-of-type',
        ]:
            try:
                el = await page.wait_for_selector(sel, timeout=3000)
                if el:
                    await el.click()
                    await page.keyboard.type(post["title"], delay=15)
                    title_typed = True
                    break
            except Exception:
                continue

        if not title_typed:
            await page.click('[contenteditable="true"]')
            await page.keyboard.type(post["title"], delay=15)

        await page.wait_for_timeout(1000)

        # Step 2: Body — Tab into body area or click it, then clipboard paste
        # Try tabbing from title into body first
        await page.keyboard.press("Tab")
        await page.wait_for_timeout(1000)

        # If Tab didn't land in body, try clicking body selectors
        body_ready = False
        for sel in [
            'div[contenteditable="true"][aria-label*="article" i]',
            'div[contenteditable="true"][role="textbox"]',
            '.ql-editor',
            '.writing-editor__content',
        ]:
            try:
                el = await page.wait_for_selector(sel, timeout=2000)
                if el:
                    await el.click()
                    body_ready = True
                    break
            except Exception:
                continue

        # Clipboard paste the full body (same approach that works for Medium)
        import re as _re
        body = post["body"].strip()
        body = _re.sub(r'^#{1,3}\s+', '', body, flags=_re.MULTILINE)
        body = body.rstrip() + f"\n\nOriginally published at {canonical}"

        await page.evaluate(f'''
            navigator.clipboard.writeText({_json.dumps(body)})
        ''')
        await page.wait_for_timeout(500)
        await page.keyboard.press("Control+v")
        await page.wait_for_timeout(3000)

        # Step 3: Click "Next" to save/preview
        next_clicked = False
        for sel in [
            'button:has-text("Next")',
            'button[aria-label*="Next" i]',
            'button.artdeco-button--primary:has-text("Next")',
            'span:has-text("Next")',
        ]:
            try:
                el = await page.wait_for_selector(sel, timeout=5000)
                if el:
                    await el.click()
                    next_clicked = True
                    break
            except Exception:
                continue

        if next_clicked:
            await page.wait_for_timeout(3000)

            # After Next, LinkedIn shows a share screen with a text box to
            # write a post accompanying the article, then a Publish button.

            # Step 4: Write the accompanying post text
            # Generate a short teaser from the first paragraph
            from cdp_common import lead_paragraph
            teaser = lead_paragraph(post["body"])
            share_text = f"{teaser}\n\nRead the full article below."

            # Find the share/post text area and type the teaser
            for sel in [
                'div[contenteditable="true"][role="textbox"]',
                'div[contenteditable="true"]',
                'textarea',
            ]:
                try:
                    el = await page.wait_for_selector(sel, timeout=5000)
                    if el:
                        await el.click()
                        await page.keyboard.insert_text(share_text)
                        break
                except Exception:
                    continue

            await page.wait_for_timeout(2000)

            # Step 5: Click Publish
            for sel in [
                'button:has-text("Publish")',
                'button[aria-label*="Publish" i]',
                'button.artdeco-button--primary:has-text("Publish")',
                'span:has-text("Publish")',
            ]:
                try:
                    el = await page.wait_for_selector(sel, timeout=5000)
                    if el:
                        await el.click()
                        break
                except Exception:
                    continue

            await page.wait_for_timeout(5000)  # let LinkedIn process the publish

        draft_url = page.url
        draft_id = ""
        if "/pulse/" in draft_url:
            draft_id = draft_url.split("/pulse/")[1].split("/")[0].split("?")[0]
        elif "article/edit/" in draft_url:
            draft_id = draft_url.split("article/edit/")[-1].split("?")[0].rstrip("/")

        return {
            "url": draft_url,
            "id": draft_id or post["slug"],
            "status": "draft",
            "canonical": canonical,
        }


def main(argv: list[str]) -> int:
    if len(argv) < 3:
        die("usage: publish-linkedin-article-cdp.py <path-to-markdown> <canonical-url> [image-path]")
    input_path = argv[1]
    canonical = argv[2]
    image_path = argv[3] if len(argv) >= 4 else None
    if not Path(input_path).is_file():
        die(f"file not found: {input_path}")

    post = read_post(input_path)
    post["image_path"] = image_path

    if DRY_RUN:
        emit(dry_run_result(
            url=f"https://www.linkedin.com/pulse/{post['slug']}?dry=1",
            slug=post["slug"],
            reason="CROSS_POST_DRY_RUN=1",
        ))
        return 0

    result = asyncio.run(publish(post, canonical))
    emit(result)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
