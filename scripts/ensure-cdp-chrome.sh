#!/usr/bin/env bash
# ensure-cdp-chrome.sh — preflight for CDP-based publishers (cross-post, scout).
#
# Checks whether a Chrome instance is reachable at CHROME_CDP_URL
# (default http://172.20.240.1:9222). If not, launches the Windows-side
# debug Chrome in one of two modes:
#
#   windowed  — starts C:\temp\chrome-debug.bat (visible window, user-friendly
#               when LinkedIn / Medium session expires or hits a CAPTCHA)
#   headless  — starts chrome.exe --headless=new against the SAME user-data-dir
#               so auth cookies persist. Fails silently on session expiry, so
#               use only after you've seeded cookies once via windowed mode.
#
# Usage:
#   bash scripts/ensure-cdp-chrome.sh              # windowed (default)
#   bash scripts/ensure-cdp-chrome.sh --headless   # headless=new
#   bash scripts/ensure-cdp-chrome.sh --check      # probe only, don't launch
#
# Exit codes:
#   0  Chrome is up (either already, or we just launched it)
#   1  Chrome unavailable AND we couldn't launch (return early, let caller skip
#      CDP steps with a clear report)
#
# IMPORTANT: Chrome uses a single user-data-dir at a time. If windowed Chrome
# is already running, do NOT try to start headless on the same profile — this
# script will detect the existing CDP port and reuse it.

set -euo pipefail

CHROME_CDP_URL="${CHROME_CDP_URL:-http://172.20.240.1:9222}"
BAT_PATH='/mnt/c/temp/chrome-debug.bat'
CHROME_EXE='/mnt/c/Program Files/Google/Chrome/Application/chrome.exe'
PROFILE_DIR='C:\temp\chrome-debug'
EXT_DIR='C:\temp\linkedin-scout'
WAIT_TIMEOUT=30

MODE="windowed"
PROBE_ONLY=0
for arg in "$@"; do
  case "$arg" in
    --headless) MODE="headless" ;;
    --windowed) MODE="windowed" ;;
    --check)    PROBE_ONLY=1 ;;
    -h|--help)
      sed -n '3,22p' "$0"; exit 0 ;;
    *) echo "ensure-cdp-chrome: unknown arg: $arg" >&2; exit 1 ;;
  esac
done

probe() {
  curl -fsS --max-time 3 "${CHROME_CDP_URL}/json/version" >/dev/null 2>&1
}

if probe; then
  echo "ensure-cdp-chrome: already up at $CHROME_CDP_URL"
  exit 0
fi

if [ "$PROBE_ONLY" -eq 1 ]; then
  echo "ensure-cdp-chrome: DOWN at $CHROME_CDP_URL" >&2
  exit 1
fi

launch_windowed() {
  [ -f "$BAT_PATH" ] || { echo "ensure-cdp-chrome: $BAT_PATH missing" >&2; return 1; }
  # cmd.exe /c runs the .bat and returns; the .bat backgrounds Chrome itself.
  cmd.exe /c start "" "C:\\temp\\chrome-debug.bat" >/dev/null 2>&1 || true
}

launch_headless() {
  [ -x "$CHROME_EXE" ] || { echo "ensure-cdp-chrome: $CHROME_EXE missing at WSL mount" >&2; return 1; }
  # Kill any prior Chrome holding the profile lock — can't share user-data-dir
  # between two running instances.
  powershell.exe -Command "Get-Process chrome -ErrorAction SilentlyContinue | Stop-Process -Force" >/dev/null 2>&1 || true
  sleep 2
  # netsh portproxy is a one-time setup done by chrome-debug.bat; we assume
  # it persisted. If it didn't, user should run the .bat once.
  #
  # Launch via cmd.exe /c start so it detaches cleanly; headless=new keeps
  # it alive in the background.
  local win_chrome='C:\Program Files\Google\Chrome\Application\chrome.exe'
  cmd.exe /c start "" "$win_chrome" \
    --headless=new \
    --remote-debugging-port=9222 \
    "--user-data-dir=$PROFILE_DIR" \
    "--load-extension=$EXT_DIR" \
    --no-first-run \
    about:blank >/dev/null 2>&1 || return 1
}

echo "ensure-cdp-chrome: launching mode=$MODE ..."
case "$MODE" in
  windowed) launch_windowed || { echo "ensure-cdp-chrome: windowed launch failed" >&2; exit 1; } ;;
  headless) launch_headless || { echo "ensure-cdp-chrome: headless launch failed" >&2; exit 1; } ;;
esac

# Poll up to WAIT_TIMEOUT seconds for CDP to come up.
i=0
while [ "$i" -lt "$WAIT_TIMEOUT" ]; do
  if probe; then
    echo "ensure-cdp-chrome: up at $CHROME_CDP_URL after ${i}s"
    exit 0
  fi
  sleep 1
  i=$((i + 1))
done

echo "ensure-cdp-chrome: still DOWN after ${WAIT_TIMEOUT}s" >&2
exit 1
