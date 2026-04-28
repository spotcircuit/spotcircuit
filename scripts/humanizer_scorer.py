#!/usr/bin/env python3
"""humanizer_scorer.py — heuristic AI-likeness score for a markdown post.

Usage: scripts/humanizer_scorer.py <path-to-markdown>

Emits JSON on stdout:
    {"score": 0.17, "signals": {...}, "path": "blog/ready/foo.md"}

`score` is in [0, 1]. Higher = more robotic / AI-sounding. The cross-post
orchestrator rejects posts whose score exceeds HUMANIZER_THRESHOLD (default 0.3).

The scorer is intentionally cheap and dependency-free — it runs every time a
post is about to cross-post, so it must not stall the pipeline. Signals are
weighted heuristics, not a model:

  - llm_phrase_rate: frequency of known LLM-boilerplate phrases
  - sentence_length_variance: low variance = monotone / AI-ish
  - hedging_rate: "it is important to note", "delve into", "furthermore" etc.
  - emoji_headers_rate: emoji-in-heading ratio — too high or too low both flag
  - list_density: fraction of lines that are list bullets — very high = listicle spam
"""

from __future__ import annotations

import json
import re
import statistics
import sys
from pathlib import Path


LLM_PHRASES = [
    "in today's fast-paced",
    "in the ever-evolving",
    "it is important to note",
    "it's worth noting",
    "delve into",
    "delves into",
    "navigating the",
    "landscape of",
    "embark on a journey",
    "unlock the power",
    "harness the power",
    "at the end of the day",
    "in conclusion,",
    "furthermore,",
    "moreover,",
    "additionally,",
    "as an ai",
    "as a large language model",
    "revolutionize",
    "revolutionizing",
    "game-changer",
    "cutting-edge",
    "seamlessly",
    "robust solution",
    "leverage the",
    "empower you to",
    "plethora of",
    "myriad of",
]

HEDGE_WORDS = [
    "furthermore",
    "moreover",
    "additionally",
    "notably",
    "importantly",
    "essentially",
    "fundamentally",
    "ultimately",
    "therefore",
    "consequently",
]


def strip_frontmatter(raw: str) -> str:
    m = re.match(r"^---\s*\n.*?\n---\s*\n?(.*)\Z", raw, re.DOTALL)
    return m.group(1) if m else raw


def split_sentences(text: str) -> list[str]:
    # Strip code fences and headings — they distort sentence length stats.
    text = re.sub(r"```.*?```", " ", text, flags=re.DOTALL)
    text = re.sub(r"^#{1,6}.*$", " ", text, flags=re.MULTILINE)
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z0-9\"'(])", text)
    return [p.strip() for p in parts if p.strip()]


def score_text(raw: str) -> dict:
    body = strip_frontmatter(raw)
    lower = body.lower()
    words = re.findall(r"[A-Za-z']+", body)
    total_words = max(len(words), 1)

    llm_hits = sum(lower.count(p) for p in LLM_PHRASES)
    llm_rate = min(llm_hits / max(total_words / 150, 1), 1.0)  # per ~150-word chunk

    hedge_hits = sum(len(re.findall(rf"\b{re.escape(w)}\b", lower)) for w in HEDGE_WORDS)
    hedge_rate = min(hedge_hits / max(total_words / 200, 1), 1.0)

    sentences = split_sentences(body)
    if len(sentences) >= 4:
        lengths = [len(re.findall(r"[A-Za-z']+", s)) for s in sentences]
        mean_len = statistics.mean(lengths) or 1
        stdev = statistics.pstdev(lengths)
        # Normalize stdev against the mean. Humans write with high variance (≥ 0.5).
        variance_ratio = min(stdev / mean_len, 1.0)
        length_signal = max(0.0, 0.5 - variance_ratio) * 2  # 0 when varied, 1 when flat
    else:
        length_signal = 0.0

    # List density
    lines = [ln for ln in body.splitlines() if ln.strip()]
    list_lines = sum(1 for ln in lines if re.match(r"^\s*[-*+]\s+", ln) or re.match(r"^\s*\d+\.\s+", ln))
    list_density = list_lines / max(len(lines), 1)
    list_signal = max(0.0, list_density - 0.5) * 2  # flags >50% bullet content

    # Heading emoji usage (over-emojified headings are a tell).
    headings = re.findall(r"^#{1,6}\s+(.+)$", body, flags=re.MULTILINE)
    emoji_re = re.compile(
        r"[\U0001F300-\U0001FAFF\U00002600-\U000027BF\U0001F000-\U0001FFFF]"
    )
    if headings:
        emoji_heads = sum(1 for h in headings if emoji_re.search(h))
        emoji_head_rate = emoji_heads / len(headings)
        emoji_signal = max(0.0, emoji_head_rate - 0.4) * 2
    else:
        emoji_signal = 0.0

    signals = {
        "llm_phrase_rate": round(llm_rate, 3),
        "hedging_rate": round(hedge_rate, 3),
        "sentence_length_flatness": round(length_signal, 3),
        "list_density": round(list_density, 3),
        "list_signal": round(list_signal, 3),
        "emoji_heading_signal": round(emoji_signal, 3),
        "word_count": total_words,
        "sentence_count": len(sentences),
    }

    # Weighted combination. Weights sum to 1.
    score = (
        0.35 * llm_rate
        + 0.20 * hedge_rate
        + 0.25 * length_signal
        + 0.10 * list_signal
        + 0.10 * emoji_signal
    )
    signals["score"] = round(min(score, 1.0), 3)
    return signals


def main(argv: list[str]) -> int:
    if len(argv) != 2:
        sys.stderr.write("usage: humanizer_scorer.py <path-to-markdown>\n")
        return 2
    path = Path(argv[1])
    if not path.is_file():
        sys.stderr.write(f"file not found: {path}\n")
        return 2
    raw = path.read_text(encoding="utf-8")
    signals = score_text(raw)
    out = {"path": str(path), "score": signals.pop("score"), "signals": signals}
    json.dump(out, sys.stdout)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
