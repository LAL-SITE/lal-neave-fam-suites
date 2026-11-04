---
name: lal-name-change-drafting
description: "Name change drafting engine. Use to draft any Florida 68.07 pleading, consent, UCCJEA affidavit, final judgment, or filing packet from the validated template library (01-23)."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. name change drafting engine. Use whenever a name change pleading, notice, order, consent, or affidavit needs to be drafted, generated, populated, or assembled for a Florida § 68.07 matter. Triggers on: "draft the name change petition," "draft the petition for [client]," "prepare the consent," "draft the UCCJEA affidavit," "prepare the final judgment," "draft the NOA," "generate the name change pleadings," "put together the filing packet," "draft the name change order," "prepare the § 68.07(3)(i) affidavit," or any request to produce a name change document from templates #01–#23. It generates each document from a validated, code-based builder (formatting verified against real PDF exports of the firm's de-identified master templates), populates it from intake, keeps bracketed [PLACEHOLDERS] for anything unconfirmed, assembles companion filings, and saves a court-ready draft for review. Never drafts without this skill.


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

# Neave Family Law Group, P.A. Name Change — Drafting Engine

Produces court-ready **drafts** (never final pleadings) for name change matters. Runs
the state/type logic in **`lal-name-change`**, generates output from the validated
builders in `scripts/` (built on the `docx` npm library per the **`docx`** skill),
and saves through **`lal-file-connector`**. **Every draft requires attorney review
before it is signed, filed, or sent.**

## GATE — do not draft until these are true
- Intake form received (drafting is gated on intake, not on fingerprint results).
- Disqualifier screen clear (or attorney has cleared it).
- Case type + filing county/circuit confirmed.

If intake is missing, stop and route to obtaining it — don't draft from guesses.

## WORKFLOW

1. **Determine the document set** from case type (use `lal-name-change`'s
   `matter-state-map.md` needed/not-needed table):

   | Case type | Core petition | Final Judgment | Also assemble |
   |---|---|---|---|
   | Adult | #01 (12.982(a)) | #13 (12.982(b)) | NOA #05, Email Desig #07 (if separate), Related Cases #08 |
   | Minor | #02 (12.982(c)) | #14 (12.982(e)) | UCCJEA #09, Consent #04 **or** service, NOA #06, Related Cases #08 |
   | Family | #03 (12.982(f)) | #15 (12.982(g)) | UCCJEA #09, consent/service per child, NOA #06, Related Cases #08 |
   | Restoration | #01 + restoration language | #13 | NOA #05, Related Cases #08 — **no fingerprint paragraph gating** |

   Cover Sheet 12.928 is usually portal-generated — note it, don't draft from scratch.
   Sixth Circuit → also prepare standalone § 68.07(3)(i) affidavit #23.

2. **Generate from the validated builder, not a live {{DMS}} pull.**
   `lal-file-connector`'s `read_resource` cannot return real `.docx` formatting —
   confirmed by direct testing (2026-07-18): it flattens Word documents to plain
   text, stripping bold, indentation, and every other formatting cue. There is no
   tool currently available that returns the actual template binary from
   {{DMS}}. Treating "pull the live template" as achievable was the root cause
   of a prior formatting failure — don't repeat it.

   Instead: use `scripts/helpers.js` + `scripts/template-builders.js`, bundled with
   this skill. These generate the document in code (docx-js), with the firm's exact
   formatting (caption layout, hang-indent numbering, notary block, firm signature
   block, judge-order block, client-letter header) baked in — validated visually
   against real PDF exports of the master templates (see FORMATTING SOURCE OF TRUTH
   below). Call the matching `buildXxx(data)` function with the intake-derived
   fields; unfilled fields automatically fall back to bracketed `[PLACEHOLDERS]`
   rather than fabricating anything.

   **Never** read or copy from the `EXAMPLE ADULT NAME CHANGE CASE` folder — it's a
   real client's file (the Fassbach matter). This applies even for a purely visual
   formatting check — the de-identified master templates (or their PDF exports in
   Project Knowledge) are the only sanctioned formatting reference.

   ### Coverage status (updated 2026-07-18) — all 23 templates now have a builder
   | Template | Builder function | File |
   |---|---|---|
   | #01 Adult Petition | `buildAdultPetition` | `template-builders.js` |
   | #02 Minor Petition | `buildMinorPetition` | `template-builders.js` |
   | #03 Family Petition | `buildFamilyPetition` | `template-builders-2.js` |
   | #04 Consent (non-petitioning parent) | `buildConsent` | `template-builders-2.js` |
   | #05 NOA (Adult) | `buildNOAAdult` | `template-builders.js` |
   | #06 NOA + Email Designation (Minor/Family) | `buildNOAMinorFamily` | `template-builders-2.js` |
   | #07 Email Designation (standalone) | `buildEmailDesignation` | `template-builders-2.js` |
   | #08 Notice of Related Cases | `buildRelatedCases` | `template-builders.js` |
   | #09 UCCJEA Affidavit | `buildUCCJEA` | `template-builders-2.js` — includes a real docx `Table` for the 5-year residence history, not a text placeholder |
   | #10 Notice of Hearing | `buildNoticeOfHearing` | `template-builders.js` |
   | #11 Amended Notice of Hearing | `buildAmendedNoticeOfHearing` | `template-builders-2.js` |
   | #12 Certificate of Service (standalone) | `buildCertOfService` | `template-builders-2.js` |
   | #13 Final Judgment (Adult) | `buildFinalJudgmentAdult` | `template-builders.js` |
   | #14 Final Judgment (Minor) | `buildFinalJudgmentMinor` | `template-builders-2.js` |
   | #15 Final Judgment (Family) | `buildFinalJudgmentFamily` | `template-builders-2.js` |
   | #16 Motion to Correct Scrivener's Error | `buildMotionScrivenersError` | `template-builders-2.js` |
   | #17 Corrected Final Judgment | `buildCorrectedFinalJudgment` | `template-builders-2.js` |
   | #18 Letter to Judge (transmittal) | `buildJudgeTransmittalLetter` | `template-builders-2.js` |
   | #19 Client Letter — hearing instructions | `buildHearingInstructionsLetter` | `template-builders-2.js` |
   | #20 Miami-Dade Special Affidavit | `buildMiamiDadeAffidavit` | `template-builders-2.js` |
   | #21 Client Letter — fingerprinting | `buildFingerprintingLetter` | `template-builders-2.js` |
   | #22 Client Letter — post-judgment | `buildPostJudgmentLetter` | `template-builders-2.js` |
   | #23 Affidavit re § 68.07(3)(i) | `buildAffidavit6807` | `template-builders-2.js` |

   Every function was smoke-tested (actually generates a valid `.docx`) and the
   structural variants were visually re-verified against real template renders
   (pleading caption, no-caption consent, judge-order block, client letter,
   multi-party caption, cross-circuit caption, and now a real table for #09).

   **Bug found and fixed during this pass:** `caption()` and `notaryBlock()` in
   `helpers.js` were not forcing the circuit/county to uppercase — passing
   `county: "Broward"` rendered "IN AND FOR Broward COUNTY" instead of "BROWARD
   COUNTY." Fixed at the source in `helpers.js` (`.toUpperCase()`), so every
   builder benefits, not just the one that surfaced it. This is exactly the kind
   of thing that needs attorney eyes before real filing — automated smoke tests
   confirm the document *generates*, not that every field is *correct*.

   ### Still open
   - **#19/#21/#22 body content** is written from the real template wording but
     hasn't been cross-checked field-by-field against every conditional the real
     letters support (e.g., per-county vendor lists in #21) — verify against the
     matching PDF before high-volume use.
   - **Conditional "[Select one:]" branches** (consent obtained vs. not, prior
     custody proceeding yes/no, restoration vs. non-restoration language) still
     default to one branch per function rather than branching on an intake field.
     Whoever wires this to real intake data needs to add that logic.

   ### FORMATTING SOURCE OF TRUTH
   The master templates in {{DMS}} are the origin, but for verifying exact
   visual formatting, use the PDF exports maintained in this Project's Knowledge
   base (`00`–`23` as `.pdf`, alongside the reference guides) — those retain real
   formatting; the `.docx` copies in Project Knowledge do not (same flattening
   issue as the {{DMS}} connector). **If a master template is ever revised:**
   someone re-exports the revised template to PDF and refreshes the Project
   Knowledge copy, then whoever updates this skill re-validates the corresponding
   `buildXxx` function against the new PDF before trusting its output.

3. **Populate placeholders from the intake.** Map every `[PLACEHOLDER]` to intake
   data. Keep names spelled identically throughout. Anything not confirmed by the
   intake or the file stays bracketed. **Never fabricate** case numbers, ORI numbers,
   judges, division numbers, or hearing details.

4. **Firm formatting is enforced by `scripts/helpers.js`**, not manual effort: Times
   New Roman 12-pt; caption circuit/county/case-no/division; the party name and
   "IN RE:" line in **regular weight, normal case** (not bold/ALL-CAPS); numbered and
   lettered paragraphs **hang-indent**; the sworn-statement + notary block; and the
   firm signature block (Angela R. Neave FBN {{BAR_NO}}; Angela R. Neave, MS,
   Esq. Bar No. {{BAR_NO}}; 2400 E. Commercial Blvd., Suite 826, Fort Lauderdale, FL 33308;
   aneave@neavefamilylaw.com). Use the shared helpers rather than re-deriving formatting —
   that consistency is the entire point of having them.

5. **Self-QC** with `lal-name-change-qc` (or `lal-name-change`'s
   `petition-qc-checklist.md`) before returning. Fix what you can; flag the rest.

6. **Save each draft** to `CLAUDE OUTPUT` via `lal-file-connector`, firm filename
   convention (`MM.DD.YY - LastName - <DocTitle> - v1.docx`, versioned). Return URLs.

7. **Report** the packet produced, any bracketed items still needing confirmation,
   and any attorney flags. State that attorney review is required before filing.

## RULES
- Templates are drafting aids, not final pleadings — attorney reviews/customizes.
- No case law added (per `lal-caselaw-protocol`) unless from firm project files.
- Flag anything out of flat-fee scope (contested service, custody overlap) before
  drafting into it.

*Neave Family Law Group, P.A. Internal Skill — Name Change Practice — Drafting Engine*

---

## AMBIENT STANDARD — Neave Family Law Group, P.A. PLEADING FORMAT & DRAFT-STATE RULES

`lal-pleading-standard` governs every court-bound document this skill produces.
Two rules, from the first keystroke:

1. **Format correctly immediately** — portrait, Times New Roman 12 black, single
   spacing 0pt before/after, left aligned, 1" margins, Neave Family Law Group, P.A. caption (court centered ·
   case/division right · parties left · rule line ending in `/` · title centered
   bold ALL CAPS), numbering I. → 1. → a. → i. continuous. No bullets, no dividers.
   There is no rough-format stage that gets fixed later.
2. **Drafts show their work, highlighted** — attorney notes 🟨, outstanding facts 🟨,
   alternative provisions 🟩 drafted in full. When unclear what the pleading should
   contain, present highlighted ALTERNATIVES — never assume and draft one version
   as if decided. Never strip flags at draft stage; only `lal-finalize-draft`
   strips, after the attorney resolves them.

---

## MANDATORY HANDOFF — PRE-FILING QC GATE

Any document this skill produces that will be **filed with a court, served on a
party, or sent outside the firm** goes to `lal-prefiling-qc` before it reaches
an attorney. This handoff is not optional and is not skippable for urgency.

```
THIS SKILL  →  lal-prefiling-qc  →  ATTORNEY SIGN-OFF  →  FILE / SERVE / SEND
```

- Do not present a draft as "ready for Angela R. Neave" or "ready to file" until the gate has run.
- A **BLOCKED** verdict returns the draft here for correction. Fix and re-run the gate.
- A **CONDITIONAL** verdict goes to the attorney with the findings attached.
- Never resolve a flagged item by deleting the language to make the gate pass.

- After the gate clears, hand the document to `lal-finalize-draft` to produce the
  filing-ready Word file and PDF. That skill enforces portrait, Times New Roman 12,
  all black, single spacing, the Neave Family Law Group, P.A. caption layout, strips every internal artifact,
  and checks `lal-judicial-procedures` for the assigned judge before output.

**Approval behavior:** if the person in the session is an Neave Family Law Group, P.A. attorney (Angela R. Neave or
Angela R. Neave), her instruction IS the sign-off — do not ask her to approve what she just
directed. If staff, every attorney-gated item routes to Angela R. Neave and waits.

---

## OUTPUT DELIVERY — FIRM STANDARD (v2, {{DMS}}-native)

All output from this skill is delivered through `lal-file-connector` (Operation 4).

**Destination:** `Notes/` in the {{DMS}} matter folder
`Last, First - [Matter Type] (####-####)`. There is no `CLAUDE OUTPUT` folder and
no {{DMS}} path. (`GAL Notes/` on GAL matters.)

**Filename:** `MM.DD.YY - LastName - DocTitle - v1.ext` — versioned, never overwritten.

**Delivery depends on where this skill is running:**

- **Claude.ai (chat / Projects)** — Claude cannot write to {{DMS}}. Present the file
  as a **download** and print the destination block: matter folder → `Notes/`, filename,
  version. Never write "saved to {{DMS}}."
- **Cowork (desktop)** — write to the folder designated for the session (ask once at
  first delivery, reuse thereafter), confirm the **actual path written**, and state
  where the file belongs in {{DMS}}.

Nothing is filed or sent without attorney sign-off. Time is tracked in {{PM_SYSTEM}},
including Claude-assisted work.

