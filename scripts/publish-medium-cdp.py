#!/usr/bin/env python3
"""publish-medium-cdp.py — publish a markdown post to Medium as a draft via CDP.

Usage:
    publish-medium-cdp.py <path-to-markdown> [canonical-url] [image-path]

Flow:
    1. Navigate to medium.com/new-story
    2. Clipboard-paste featured image above title (if provided)
    3. Type title
    4. Clipboard-paste body
    5. Click Publish → add topics → set canonical URL in advanced settings
    6. Leave as saved draft

Emits JSON: {"url": "...", "id": "...", "status": "draft", "canonical": "..."}
"""

from __future__ import annotations

import asyncio
import base64
import json
import re
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

NEW_STORY_URL = "https://medium.com/new-story"


async def publish(post: dict, canonical: str | None, image_path: str | None) -> dict:
    async with cdp_session() as (_browser, _ctx, page):
        await page.goto(NEW_STORY_URL, wait_until="networkidle")
        await page.wait_for_timeout(3000)

        # --- Step 1: Paste featured image above the title ---
        if image_path and Path(image_path).is_file():
            try:
                # Click above/before the title area to position cursor there
                # Medium's editor: click the area above title, then paste image
                # from clipboard. We read the image, copy to clipboard as blob,
                # then Ctrl+V.
                img_bytes = Path(image_path).read_bytes()
                img_b64 = base64.b64encode(img_bytes).decode()
                mime = "image/png" if image_path.endswith(".png") else "image/jpeg"

                # Click the title area first to ensure editor is focused
                for sel in [
                    'h3[data-placeholder="Title"]',
                    'p[data-placeholder="Title"]',
                    '[contenteditable="true"]',
                ]:
                    try:
                        el = await page.wait_for_selector(sel, timeout=2000)
                        if el:
                            await el.click()
                            break
                    except Exception:
                        continue

                # Move cursor to the very beginning (before title)
                await page.keyboard.press("Home")
                await page.keyboard.press("ArrowUp")
                await page.keyboard.press("ArrowUp")
                await page.wait_for_timeout(300)

                # Copy image to clipboard and paste
                await page.evaluate(f"""
                    (async () => {{
                        const b64 = "{img_b64}";
                        const binary = atob(b64);
                        const bytes = new Uint8Array(binary.length);
                        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
                        const blob = new Blob([bytes], {{ type: "{mime}" }});
                        const item = new ClipboardItem({{ "{mime}": blob }});
                        await navigator.clipboard.write([item]);
                    }})()
                """)
                await page.wait_for_timeout(500)
                await page.keyboard.press("Control+v")
                await page.wait_for_timeout(5000)  # let image upload/render
            except Exception as e:
                print(f"publish-medium: image paste failed (non-fatal): {e}", file=sys.stderr)

        # --- Step 2: Type title ---
        title_typed = False
        for sel in [
            'h3[data-placeholder="Title"]',
            'p[data-placeholder="Title"]',
            'h3.graf--title',
            '[data-testid="editor-title"]',
            'div[role="textbox"] h3',
            'div[role="textbox"] p:first-child',
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

        # --- Step 3: Move to body and paste ---
        await page.keyboard.press("Enter")
        await page.wait_for_timeout(500)
        await page.keyboard.press("Enter")
        await page.wait_for_timeout(500)

        body = post["body"].strip()
        body = re.sub(r'^#{1,3}\s+', '', body, flags=re.MULTILINE)

        await page.evaluate(f'''
            navigator.clipboard.writeText({json.dumps(body)})
        ''')
        await page.wait_for_timeout(500)
        await page.keyboard.press("Control+v")
        await page.wait_for_timeout(3000)

        # --- Step 4: Click Publish to open publish dialog ---
        await page.wait_for_timeout(2000)
        publish_clicked = False
        for sel in [
            'button:has-text("Publish")',
            'button:has-text("Ready to publish")',
            'button[data-action="show-prepublish"]',
        ]:
            try:
                el = await page.wait_for_selector(sel, timeout=3000)
                if el:
                    await el.click()
                    publish_clicked = True
                    break
            except Exception:
                continue

        if publish_clicked:
            await page.wait_for_timeout(2000)

            # --- Step 5: Add topics (up to 5 from post tags) ---
            tags = post.get("tags", [])[:5]
            if tags:
                try:
                    for tag_sel in [
                        'input[placeholder*="topic" i]',
                        'input[placeholder*="tag" i]',
                        'input[aria-label*="topic" i]',
                    ]:
                        try:
                            tag_input = await page.wait_for_selector(tag_sel, timeout=2000)
                            if tag_input:
                                for tag in tags:
                                    await tag_input.click()
                                    await page.keyboard.type(tag, delay=5)
                                    await page.wait_for_timeout(500)
                                    await page.keyboard.press("Enter")
                                    await page.wait_for_timeout(300)
                                break
                        except Exception:
                            continue
                except Exception:
                    pass

            # --- Step 7: Click the final Publish button to publish ---
            for pub_sel in [
                'button:has-text("Publish now")',
                'button:has-text("Publish")',
                'button[data-action="publish"]',
            ]:
                try:
                    el = await page.wait_for_selector(pub_sel, timeout=3000)
                    if el:
                        await el.click()
                        break
                except Exception:
                    continue
            await page.wait_for_timeout(5000)

            # --- Step 8: Dismiss "Your story has been published" popup ---
            # There's an X button in the corner of the popup
            await page.wait_for_timeout(3000)  # let popup fully render
            for dismiss_sel in [
                'button[aria-label="close"]',
                'button[aria-label="Close"]',
                'button:has(svg path[d*="close" i])',
                'button:has(svg line)',
                'div[role="dialog"] button:first-child',
                'div[role="dialog"] button:has(svg)',
                # X icon is typically an SVG with two crossing lines or an × character
                'button:has-text("×")',
                'button:has-text("✕")',
                'button:has-text("✖")',
            ]:
                try:
                    el = await page.wait_for_selector(dismiss_sel, timeout=2000)
                    if el:
                        await el.click()
                        await page.wait_for_timeout(1000)
                        break
                except Exception:
                    continue
            # Fallback: press Escape to close any modal
            await page.keyboard.press("Escape")
            await page.wait_for_timeout(2000)

            # --- Step 9: Click three dots menu → Story settings for canonical ---
            if canonical:
                try:
                    # Find the three dots / more options button — it's an SVG
                    # with three circles (ellipsis icon), inside a button
                    for dots_sel in [
                        'button:has(svg path[d*="4.385"])',
                        'button:has(svg path[fill-rule="evenodd"])',
                        'button[aria-label="More"]',
                        'button[aria-label="more"]',
                        'button[data-action="show-post-actions"]',
                        '[aria-label="More actions"]',
                        'button:has(svg)',
                    ]:
                        try:
                            el = await page.wait_for_selector(dots_sel, timeout=3000)
                            if el:
                                await el.click()
                                await page.wait_for_timeout(1000)
                                break
                        except Exception:
                            continue

                    # Click "Story settings" or "Settings" from the menu
                    for settings_sel in [
                        'a:has-text("Story settings")',
                        'button:has-text("Story settings")',
                        'a:has-text("Settings")',
                        'a[href*="settings"]',
                    ]:
                        try:
                            el = await page.wait_for_selector(settings_sel, timeout=3000)
                            if el:
                                await el.click()
                                await page.wait_for_timeout(2000)
                                break
                        except Exception:
                            continue

                    # On settings page: find "originally published elsewhere"
                    for canon_sel in [
                        'input[type="checkbox"]',
                        'label:has-text("originally published")',
                        'text="originally published elsewhere"',
                    ]:
                        try:
                            el = await page.wait_for_selector(canon_sel, timeout=2000)
                            if el:
                                await el.click()
                                await page.wait_for_timeout(1000)
                                break
                        except Exception:
                            continue

                    # Paste canonical URL
                    for url_sel in [
                        'input[placeholder*="url" i]',
                        'input[placeholder*="link" i]',
                        'input[type="url"]',
                        'input[name*="canonical" i]',
                    ]:
                        try:
                            el = await page.wait_for_selector(url_sel, timeout=2000)
                            if el:
                                await el.click()
                                await page.keyboard.type(canonical, delay=5)
                                await page.wait_for_timeout(1000)
                                # Save/confirm
                                await page.keyboard.press("Enter")
                                await page.wait_for_timeout(1000)
                                break
                        except Exception:
                            continue
                except Exception as e:
                    print(f"publish-medium: canonical setting failed (non-fatal): {e}", file=sys.stderr)

        draft_url = page.url
        draft_id = ""
        if "/p/" in draft_url:
            draft_id = draft_url.split("/p/")[1].split("/")[0]
        elif "/edit" in draft_url:
            draft_id = draft_url.split("/")[-2] if "/edit" in draft_url else ""

        return {
            "url": draft_url,
            "id": draft_id or post["slug"],
            "status": "draft",
            "canonical": canonical or "",
        }


def main(argv: list[str]) -> int:
    if len(argv) < 2:
        die("usage: publish-medium-cdp.py <path-to-markdown> [canonical-url] [image-path]")
    input_path = argv[1]
    canonical = argv[2] if len(argv) >= 3 else None
    image_path = argv[3] if len(argv) >= 4 else None
    if not Path(input_path).is_file():
        die(f"file not found: {input_path}")

    post = read_post(input_path)

    if DRY_RUN:
        emit(dry_run_result(
            url=f"https://medium.com/new-story?dry=1&slug={post['slug']}",
            slug=post["slug"],
            reason="CROSS_POST_DRY_RUN=1",
        ))
        return 0

    result = asyncio.run(publish(post, canonical, image_path))
    emit(result)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
