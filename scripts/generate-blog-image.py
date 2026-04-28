#!/usr/bin/env python3
"""generate-blog-image.py — Generate a featured image for a blog post via Gemini.

Usage:
    generate-blog-image.py <path-to-markdown> [output-path]

Reads the post title and excerpt from frontmatter, generates a 16:9
blog hero image using Gemini 2.5 Flash, saves it alongside the post
(or to output-path if specified).

Requires: GEMINI_API_KEY in .env or environment.
Based on site-builder's image_generator.py pattern.
"""

import base64
import os
import re
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
REPO_ROOT = SCRIPT_DIR.parent

# Load .env — prefer repo root, fall back to system/.env
for env_file in (REPO_ROOT / ".env", REPO_ROOT / "system" / ".env"):
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())


def read_frontmatter(path: str) -> dict:
    raw = Path(path).read_text(encoding="utf-8")
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n?(.*)\Z", raw, re.DOTALL)
    if not m:
        return {"title": Path(path).stem, "excerpt": "", "tags": []}
    fm_text = m.group(1)
    result = {"title": "", "excerpt": "", "tags": []}
    for line in fm_text.splitlines():
        kv = re.match(r'(\w+)\s*:\s*"?(.+?)"?\s*$', line)
        if kv:
            key, val = kv.group(1), kv.group(2)
            if key == "title":
                result["title"] = val
            elif key == "excerpt":
                result["excerpt"] = val
            elif key == "tags":
                if val.startswith("["):
                    result["tags"] = [t.strip().strip('"\'') for t in val[1:-1].split(",")]
    return result


def build_prompt(title: str, excerpt: str, tags: list) -> str:
    return (
        f"NO WORDS. NO TEXT. NO LETTERS. NO LOGOS. NO LABELS. NO WRITING OF ANY KIND IN THE IMAGE. "
        f"{title}. "
        f"Dark gradient background. Photorealistic, cinematic lighting, 4K detail. "
        f"16:9 aspect ratio."
    )


def generate(title: str, excerpt: str, tags: list, output_path: Path) -> bool:
    api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_GEMINI_API_KEY")
    if not api_key:
        print("generate-blog-image: GEMINI_API_KEY not set, skipping", file=sys.stderr)
        return False

    try:
        from google import genai
        from google.genai import types
    except ImportError:
        print("generate-blog-image: google-genai not installed. pip install google-genai", file=sys.stderr)
        return False

    client = genai.Client(api_key=api_key)
    prompt = build_prompt(title, excerpt, tags)
    print(f"generate-blog-image: generating for '{title}'...", file=sys.stderr)

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash-image",
            contents=[prompt],
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE"],
                image_config=types.ImageConfig(
                    aspect_ratio="16:9",
                    image_size="1K",
                ),
            ),
        )

        for part in response.parts:
            if part.inline_data is not None:
                image_data = part.inline_data.data
                if isinstance(image_data, str):
                    image_data = base64.b64decode(image_data)

                output_path.write_bytes(image_data)
                print(f"generate-blog-image: saved {output_path} ({len(image_data)} bytes)", file=sys.stderr)
                return True

        print("generate-blog-image: no image in Gemini response", file=sys.stderr)
        return False

    except Exception as e:
        print(f"generate-blog-image: failed: {e}", file=sys.stderr)
        return False


def main():
    if len(sys.argv) < 2:
        print("usage: generate-blog-image.py <path-to-markdown> [output-path]", file=sys.stderr)
        sys.exit(1)

    input_path = sys.argv[1]
    if not Path(input_path).is_file():
        print(f"file not found: {input_path}", file=sys.stderr)
        sys.exit(1)

    fm = read_frontmatter(input_path)

    if len(sys.argv) >= 3:
        output = Path(sys.argv[2])
    else:
        # Save next to the post: same name but .png
        output = Path(input_path).with_suffix(".png")

    success = generate(fm["title"], fm["excerpt"], fm["tags"], output)
    if success:
        # Print the output path for the caller to use
        print(str(output))
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
