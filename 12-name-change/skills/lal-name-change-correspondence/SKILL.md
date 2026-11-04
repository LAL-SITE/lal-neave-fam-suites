---
name: lal-name-change-correspondence
description: "Name change client correspondence. Use for fingerprinting instructions, final-hearing instructions, post-judgment next steps, or any client letter on a Florida 68.07 name change matter."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. name change client-correspondence engine. Use whenever a client letter or email for a Florida name change matter needs to be drafted — especially the three core letters: fingerprinting/background instructions (#21), final-hearing instructions (#19), and post-judgment next steps (#22). Triggers on: "draft the fingerprinting letter," "send the client fingerprint instructions," "draft the hearing instructions," "hearing is set — write the client," "draft the post-judgment letter," "what next steps do we send the client," or any request to produce client- facing correspondence on a name change matter. It generates the matching letter from a validated, code-based builder (formatting verified against a real PDF export of the firm's letterhead template), populates it from the matter, keeps bracketed [PLACEHOLDERS] and "confirm live" flags for ORI/vendor/hearing details, applies Neave Family Law Group, P.A. voice, and saves a draft for review before it is sent.


## Neave Family Law Group, P.A. Firm-Wide Conventions (apply to every run of this skill)

These six conventions govern all Neave Family Law Group, P.A. skills and override any narrower instruction
below that conflicts with them.

1. **Environment-flexible.** Complete the task in the environment you are already in
   — chat, Desktop, or Cowork. If a different environment would be materially better,
   say so in one line and keep working. Never block, never redirect, never hand off
   instead of doing the work.
2. **Identity over lanes.** Staff assignments in this skill are defaults, not gates.
   Anyone may run any skill. **Attorneys self-approve** — if the person running this
   skill is Angela R. Neave, they *are* the approving attorney. Never tell an attorney to
   route their own work to an attorney for approval. Approval gates mean an approving-
   attorney action is recorded, not that the user must go find someone.
3. **Just run it.** Prerequisite stages are soft checks, never hard gates. Pause only
   for a physically necessary input, and ask for that specific item by name — never
   "complete Stage X first."
4. **Read files first.** Search the entire matter file — including misnamed and
   misfoldered documents — before declaring anything missing. If the file is
   disorganized, offer a file-organizer cleanup rather than reporting a gap.
5. **Transcripts preferred, never required.** A typed memo or rough notes always
   suffice as input.
6. **Write to the command center.** Every stage completion, deadline, lifecycle move,
   and attorney flag is written to the matter's command center before the run ends.

---

# Neave Family Law Group, P.A. Name Change — Client Correspondence Engine

Drafts client-facing letters/emails for name change matters. **Drafts only —
attorney review before anything is sent; this skill never sends.** Voice and format
follow **`lal-brand-kit`** + **`lal-correspondence`**; content and layout come
from `lal-name-change-drafting/scripts/template-builders.js`'s `buildClientLetter`
function (see that skill's SKILL.md — same validated formatting library used for
pleadings, reused here rather than duplicated).

## Which letter, and when (timing from `lal-name-change` Step 3)

| Letter | Template | Send when | Notes |
|---|---|---|---|
| Fingerprinting / background instructions | **#21** | At engagement / right after filing — **in parallel with the intake request** | Covers adult + parent/guardian; child fingerprinted too. **Skip entirely for restoration.** |
| Final-hearing instructions | **#19** | Once the hearing is set | Zoom logistics + residency-proof; confirm judge procedures live. |
| Post-judgment next steps | **#22** | Once the judge signs the Final Judgment | Certified copies, then SSA → DMV → banks → insurance → employer, in that order. |

Front-load #21: results take 1–3 weeks and only gate the hearing, so starting early
is the point. For **restoration** matters there is no fingerprinting — do not send #21.

## WORKFLOW
1. Identify the letter from the matter's stage (or the explicit request).
2. Generate from `buildClientLetter` in `lal-name-change-drafting/scripts/`
   (pass the letter's `subject`, `bodyParagraphs`, and signer). Don't re-derive
   formatting from a live {{DMS}} read — `read_resource` flattens `.docx`
   formatting (see `lal-file-connector`'s documented limitation) — and never use
   the `EXAMPLE ADULT NAME CHANGE CASE` folder.
3. Populate from the matter. **ORI numbers, vendors, hearing dates, Zoom links, judge
   details:** insert only what's confirmed; otherwise bracket and mark *confirm live*.
   Use `lal-name-change`'s `ori-and-circuits.md` as a starting point, and route
   judge/hearing specifics through `lal-judicial-procedures` (live). Never fabricate.
4. Apply Neave Family Law Group, P.A. voice (`lal-brand-kit`), keep the firm letterhead and the
   confidentiality notice.
5. Save the draft to `CLAUDE OUTPUT` via `lal-file-connector` (versioned filename).
6. Return the draft + a short list of items to confirm before sending. State that
   attorney review + confirmation of local details are required before it goes out.

## RULES
- Draft, don't send. Sending is attorney-gated.
- Never state an ORI number, vendor price, hearing date, or Zoom link as fact unless
  it's confirmed for this matter — bracket and flag instead.
- Restoration → no fingerprinting letter.

*Neave Family Law Group, P.A. Internal Skill — Name Change Practice — Correspondence Engine*
