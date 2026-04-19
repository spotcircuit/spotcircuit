---
title: "Two Agents Had a Voice Conversation and Passed the App's Own Grading Rubric"
excerpt: "I built a Playwright test where two AI agents have a voice conversation end-to-end — no human in the loop. The first version passed because I'd stubbed the Web Speech API. Rebuilt it honestly; here's what held up, what didn't, and where it goes next."
date: 2026-04-19
tags: ["AI Testing", "Voice AI", "Playwright", "Agentic Coding", "Claude Code"]
category: "Engineering"
coverImage: "/static/images/two-agents-voice-no-human.png"
---


# Two Agents Had a Voice Conversation and Passed the App's Own Grading Rubric

I've been building a voice roleplay app — you pitch to an AI buyer, the AI pushes back, at the end you get a debrief score. The whole point is that the AI buyer feels real enough to coach you. Which raises a testing problem: **how do you verify a voice app without being the voice?**

You can't click a button for "say hello." Every change might break the loop, and every verification burns a human sitting at a laptop talking to their computer. So I tried something I'd been told wouldn't work: two AI agents having a voice conversation, no human in the room. Then I had the app grade it.

Here's what actually happened, including the version I had to throw away.

## The first test, which was a lie

My first attempt passed on green. It looked like this:

- Rep agent (Claude) generates a pitch
- OpenAI TTS renders it to a WAV
- Chromium launches with `--use-file-for-fake-audio-capture=<wav>` — the fake mic plays the rep's voice
- The app under test uses the Web Speech API to transcribe
- The app generates the buyer's response
- Playwright intercepts `MediaSource.appendBuffer` to capture the response audio
- Whisper transcribes it, closes the loop

Clean diagram. Green test. Lie.

When I read my own code instead of my own diagram, the truth was uglier:

```typescript
// The fake mic plays the WAV; the SR stub cannot hear it — so we emit
// the pitch text directly through the stub to simulate transcription.
await page.evaluate((text) => (window as any).__fakeSR?.emit(text), pitch)
```

The Web Speech API was stubbed. The audio *played* into the fake mic, but the app got the text via a side channel, not via actual transcription. The assertions checked **vocabulary overlap** between rep and buyer — a bar so low both sides can be incoherent and still pass. The conversation that greenlit the first version opened with the rep asking *"what SaaS product am I selling?"* and the buyer — who was an interview-negotiation coach, wrong persona — responding that they weren't here to pitch the rep's product. Two confused agents, one happy test.

That's the version of this post I almost published.

## The second test, which wasn't

I rebuilt the test with one change to the contract: **the app's own grading rubric has to pass the rep**. No more vocabulary overlap, no more "did bytes flow" smoke checks. The app already generates a debrief score at the end of every session. If the test can't make the app say "yes, that was a coherent pitch," then nothing else matters.

The new loop:

- Rep agent gets a concrete scenario (product, target role, pain solved, proof point) so turn 0 is a real opener, not a context request
- Buyer persona is now actually a sales persona (Reluctant Buyer), not an interview coach
- Rep text → real OpenAI TTS → WAV on disk
- Whisper transcribes the WAV — the app only sees what the voice pipeline actually delivered
- WS `pitch_line` to the backend, which streams the buyer response
- Buyer text → `/avatar/tts-stream` → real audio bytes → Whisper transcribes again
- Rep agent receives Whisper's output (not the raw text) as its next input
- After N turns, `end_session` → wait for `debrief_ready` → **assert `debrief.scores.overall >= threshold`**

The stubs are gone. The audio path is real on both legs. The grading is the app's, not mine.

## What it looked like when it ran

```
[turn=0] rep:   "Most engineering teams lose their first month of a new hire's
                 productivity to repeating answers that already exist..."
[turn=0] heard: "Most engineering teams lose their first month of a new hire's
                 productivity to repeating answers that..."
[turn=0] buyer: "That 28-to-9 days story is concrete enough to listen—but tell
                 me specifically: in a 50-person services..."
[turn=0] heard back: "That 28-9 day story is concrete enough to listen, but tell
                      me specifically, in a 50-person services..."

[turn=1] rep:   "The burn splits: ~40% is Slack/onboarding (spec-hunting, "how
                 do we handle X"), ~60% is decision latency..."
[turn=1] buyer: "Now you're talking specifics—the decision rework rate is the
                 one that hits. My question shifts..."

[turn=2] rep:   "The enforcement isn't willpower — it's ROI visibility..."
[turn=2] buyer: "That feedback loop makes sense—I'll take the bait on the
                 diagnostic..."

[debrief] overall=6  ✓  passed in 3.0m
```

This is a real conversation. The buyer engages with specifics, pushes back intelligently, escalates. The rep stays concrete and keeps qualifying. No sycophancy, no "as an AI language model." Whisper loses the em-dashes and strips a tilde, but the meaning survives. The app's debrief scored it 6 out of some-scale-I-haven't-fully-pinned-down and the assertion passed.

**Three real things happened:**

1. TTS rendered audio bytes that really played
2. Whisper really transcribed them
3. The app's own grading logic looked at the full session and said yes

The honest claim the first version was overselling — "two agents had a voice conversation, no human in the room" — is now defensible for this scenario, this persona, at this turn depth.

## What it does not prove yet

I had to pick a threshold of 3 for the debrief score without knowing the actual scale. It came back as 6. I don't yet know if that's a 6/10 or a 6/5 weighted. I know it passed; I don't know by how much. That's embarrassing in a rigor sense — the rubric is the whole point and I'm asserting against an inferred scale. First polish item.

`debrief.strengths` and `debrief.weaknesses` came back `undefined`. The field names I'm grabbing don't match what the backend returns. So I'm asserting on the top-line number but not verifying that the narrative output — the thing a real user would actually read — is coherent. Second polish item.

One run isn't a distribution. Score 6 might be typical, or it might be the top of a wide variance range and the rep could just as easily pull a 2 on the next run. I need N=5 with variance bars before I know if this test is a stable gate or a coin flip. Third polish item.

Three turns is a teaser. Real pitches are 6-8 turns; the rep might hold together for three and collapse at six. Fourth item.

One scenario, one persona. There's no evidence the rep does anything when swapped against the CFO Skeptic or the Procurement Gatekeeper — and it probably shouldn't pass every persona, because a discovery-mode rep should lose to Procurement. "AI rep passes every buyer" is a failure state I haven't tested for.

The audio pipeline is unfairly clean. OpenAI's `tts-1` is studio-quality; Whisper transcribes it near-perfectly. A human pitching into an actual laptop mic will send noisier audio, and the app's Web Speech path will make different kinds of errors than Whisper. So this test doesn't stress the voice pipeline the way a real user does — it tests the brain under good audio conditions.

## Where the rebar (framework) mattered

The test didn't come from nowhere. I build in a framework called Rebar that turned this session from "cool one-off script" into "durable harness." Four things it did that I'd otherwise have had to remember manually:

- The test is scope-bound by a spec at `apps/prepitch/specs/CON-playwright-phase1.md`. A worker agent can create `e2e/playwright/**` and touch nothing else — so the test couldn't sneak changes into the backend or frontend to make itself pass. If it passes, it passes against real app code.
- The whole build went through a `/close-loop` cycle: evaluator sub-issue → release-gate regex scan → `/improve` → `/meta-improve` → `/wiki-ingest`. The evaluator PASSed 7/9 strict with 2 partials, but flagged (separately) a security follow-up that blocked a different feature's close-loop at the gate. Design worked both ways — passed what should pass, blocked what should block.
- Every gotcha landed in `expertise.yaml`. The next time someone tries to write a Playwright `addInitScript` stub in this repo, they inherit: *"addInitScript needs plain JS — `.ts` stubs never execute, the global stub never appears."* That cost me 40 minutes the first time. It will cost zero the second time. Framework as memory.
- When the first paperclip worker stalled on CON-120 with zero artifacts for 30 minutes, I cleared the execution lock, took over directly, and posted the completion report back to the same issue. The audit trail stayed intact — `CON-120` went through `in_progress → in_review → done` with the takeover logged inline. Orchestration didn't break because one agent stalled.

## What I took from it

**The bar for "agents can test agents" isn't can the rep play the role perfectly.** The bar is: can the rep drive the app end-to-end and produce a session the app's own rubric considers coherent. Those are very different bars. The first is research; the second is a CI gate.

**Stubbing is fine until you publish.** The stubbed test was useful during the initial build — I needed to know the MediaSource intercept worked, the WS boundary detection was correct, the persona flow was wired up. What I couldn't do was write about that test without cooking the copy. As soon as I tried to describe it honestly, the stub revealed itself as load-bearing, and the description collapsed.

**The app's own grader is the right assertion target.** Any test that uses a probe-quality agent to judge a probe-quality agent is suspect. But the app's debrief logic is the same code every real user hits — if it says the conversation was coherent, that's the same standard a human pitcher faces. Self-consistent.

**Whisper is unfairly good.** I went in thinking audio transcription would be the weak link. It wasn't. OpenAI's TTS + Whisper is tight enough that meaning survives round-trips with minor punctuation loss. The real-world mic path is where this will fall apart, and I haven't stress-tested that yet.

## Where it goes next

Short list, in priority:

1. **Read the debrief rubric, align the assertion.** I'm passing against an inferred threshold. This is the first thing to fix before publishing any result.
2. **N=5 variance bars.** Turn the single run into a distribution. Either the rep is stable or it isn't; a one-shot pass doesn't distinguish those.
3. **Persona sweep with failure expectations.** Reluctant Buyer, CFO Skeptic, Technical Evaluator, Procurement Gatekeeper. Some should pass, some should fail. A test that greens on every persona is a test that tells you nothing.
4. **6-8 turns instead of 3.** See where the rep falls apart. Long tails are where both humans and AIs struggle; I want to know the shape of the collapse.
5. **The human comparison.** Run the same scenario with me pitching into voice mode, 5 times. Run the AI rep, 5 times. Compare distributions. Where does AI outperform humans? Where do humans outperform AI? Does the app's rubric reward the things that matter or the things that are easy to measure?

That last one is the thing worth publishing. Everything above it is mechanical.

## Discussion

If you've tried this and have an answer, I want to hear it:

- **When is probe-quality good enough, and when does it bite you?** The rep doesn't need to be Shakespeare to drive the app, but the moment I use the rep to *judge* the buyer, the test is judging itself. I'm currently holding the line at "app grades, agents drive." Is that the right line, or is it too conservative?
- **Studio TTS is too clean.** What's the right way to introduce realistic audio degradation — Docker with PulseAudio + noise injection? Phone-codec round-trip? A recorded backing track under the rep's voice? I haven't solved this and suspect someone has.
- **Should a test that passes every buyer persona be rejected on principle?** A sales test that can't fail is a sales test that doesn't mean anything. I think the answer is yes, but I haven't seen anyone argue it explicitly.

If you have scars from any of these, tell me. The test runs, the framework remembers, and the next person building voice E2E in this kind of app doesn't start from zero.
