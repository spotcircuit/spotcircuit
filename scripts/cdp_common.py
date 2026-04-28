"""cdp_common.py — shared helpers for the CDP-based publishers.

Mirrors the linkedin-scout-cdp.py pattern: connect_over_cdp → navigate →
paste → save draft. Each platform-specific publisher (publish-medium-cdp.py,
publish-substack-cdp.py, etc.) imports `read_post`, `emit`, and `cdp_session`
from here to avoid re-inventing the plumbing.

Environment:
    CHROME_CDP_URL      default "http://172.20.240.1:9222" — the debug Chrome
                        the user keeps open with C:\\temp\\chrome-debug.bat
    CROSS_POST_DRY_RUN  when "1", publishers skip CDP and emit a pending URL.
                        Useful in tests / when Chrome isn't running.
    CDP_HEADLESS_TIMEOUT  default 45000 ms — how long to wait for editors to
                          load before giving up.
"""

from __future__ import annotations

import json
import os
import re
import sys
from contextlib import asynccontextmanager
from pathlib import Path

CDP_URL = os.environ.get("CHROME_CDP_URL", "http://172.20.240.1:9222")
DRY_RUN = os.environ.get("CROSS_POST_DRY_RUN", "0") == "1"
DEFAULT_TIMEOUT_MS = int(os.environ.get("CDP_HEADLESS_TIMEOUT", "45000"))


def read_post(path: str) -> dict:
    """Parse a markdown post's frontmatter and body.

    Returns: {title, tags:list[str], body:str, slug, path}
    """
    raw = Path(path).read_text(encoding="utf-8")
    title: str | None = None
    tags: list[str] = []
    body = raw
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n?(.*)\Z", raw, re.DOTALL)
    if m:
        fm, body = m.group(1), m.group(2)
        current_key: str | None = None
        for line in fm.splitlines():
            item = re.match(r"\s*-\s*(.+)$", line)
            if item and current_key == "tags":
                tags.append(item.group(1).strip().strip("\"'"))
                continue
            kv = re.match(r"([A-Za-z0-9_-]+)\s*:\s*(.*)$", line)
            if not kv:
                continue
            key, val = kv.group(1).strip(), kv.group(2).strip()
            current_key = key
            if not val:
                continue
            val = val.strip("\"'")
            if key == "title":
                title = val
            elif key == "tags":
                if val.startswith("[") and val.endswith("]"):
                    inner = val[1:-1]
                    tags = [t.strip().strip("\"'") for t in inner.split(",") if t.strip()]
                else:
                    tags = [t.strip() for t in val.split(",") if t.strip()]
    if not title:
        for line in body.splitlines():
            h = re.match(r"#\s+(.+)$", line.strip())
            if h:
                title = h.group(1).strip()
                break
    return {
        "title": title or Path(path).stem,
        "tags": tags,
        "body": body.strip(),
        "slug": Path(path).stem,
        "path": str(path),
    }


def lead_paragraph(body: str) -> str:
    """Extract the first non-heading paragraph for teaser copy."""
    paras = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip() and not p.lstrip().startswith("#")]
    return re.sub(r"\s+", " ", paras[0]) if paras else ""


def emit(payload: dict) -> None:
    """Emit the final JSON result to stdout (cross-post.sh parses this)."""
    json.dump(payload, sys.stdout)
    sys.stdout.write("\n")
    sys.stdout.flush()


def dry_run_result(url: str, slug: str, reason: str = "dry-run") -> dict:
    return {"url": url, "id": slug, "status": "pending", "note": reason}


def load_playwright():
    """Load patchright if available, otherwise fall back to plain playwright.

    Both expose the same async_api surface, so the CDP flow works identically.
    """
    try:
        from patchright.async_api import async_playwright  # type: ignore

        return async_playwright, "patchright"
    except Exception:
        from playwright.async_api import async_playwright  # type: ignore

        return async_playwright, "playwright"


@asynccontextmanager
async def cdp_session(timeout_ms: int = DEFAULT_TIMEOUT_MS, use_fresh_context: bool = False):
    """Connect to the debug Chrome over CDP and yield (browser, context, page).

    Uses the first existing browser context (the user's logged-in session) so
    no cookies/tokens have to be plumbed through. The caller is responsible
    for navigation and DOM interaction.

    If use_fresh_context=True, creates a new browser context without extensions.
    The user won't be logged in — use this for platforms (like Medium) where
    extensions break the editor. The user will need to log in once in this
    context, and cookies persist for the session.
    """
    async_playwright, _driver = load_playwright()
    pw = await async_playwright().start()
    try:
        browser = await pw.chromium.connect_over_cdp(CDP_URL)
        if use_fresh_context:
            context = await browser.new_context()
        else:
            context = browser.contexts[0] if browser.contexts else await browser.new_context()
        page = await context.new_page()
        page.set_default_timeout(timeout_ms)
        try:
            yield browser, context, page
        finally:
            # Do NOT close the page or browser — leave the draft open
            # so the user can review, fix, and manually save/publish.
            # The CDP connection detaches cleanly without killing tabs.
            try:
                await browser.close()
            except Exception:
                pass
    finally:
        await pw.stop()


def die(msg: str) -> None:
    sys.stderr.write(f"{Path(sys.argv[0]).name}: {msg}\n")
    sys.exit(1)
