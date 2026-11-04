---
name: lal-lead-consult-prep
description: "Pre-hire lead prep. Use when a paid consultation is booked - turns the intake form and notes into a branded Consultation Roadmap PDF and the pre-hire project instructions."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. Lead Prep for Consult — reads a lead's intake form and staff notes/call transcripts, then produces a branded Consultation Roadmap & Case Summary PDF for the attorney plus the Pre-Hire Lead Project Instructions block. Use immediately whenever a paid consultation is booked — triggers on: "prep for consult," "consult prep," "consultation is booked, prep the roadmap," "lead form is uploaded, prep it," "new lead, prep the file," or any request to turn lead intake material into attorney-ready consult prep. Pre-hire counterpart to `lal-case-launch` — run this BEFORE the retainer is signed; run `lal-case-launch` after. Conflict checks happen in {{PM_SYSTEM}} only — this skill just confirms one was completed before proceeding.


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

# Neave Family Law Group, P.A. Lead Prep for Consult

## PURPOSE

This skill fires once a paid consultation is booked for a lead — before
any retainer exists. It has two jobs:

1. **Generate the Consultation Roadmap & Case Summary** — a branded PDF
   the attorney reads immediately before walking into the consult. This
   is the attorney-facing deliverable.

2. **Generate the Pre-Hire Lead Project Instructions** — formatted text
   staff copies into this lead's Claude Project instructions field, so
   every future session in this project is context-aware from the start.

This is the pre-hire counterpart to `lal-case-launch`. Once the retainer
is signed, run `lal-case-launch` next — it takes over with the post-hire
Project Instructions and Case Launch Summary. Do not let this skill's
output persist unchanged past that point; it describes a lead, not a
matter.

---

## STEP 0 — CONFIRM THE CONFLICT CHECK (HARD GATE)

Conflict checks run in {{PM_SYSTEM}}, not in Claude. Before doing anything
else, ask:

> "Before I prep this — has the conflict check for this lead already
> been cleared in {{PM_SYSTEM}}?"

- If **yes** — proceed to Step 1.
- If **no** or **unconfirmed** — stop. Do not generate any output. Tell
  staff: "I can't prep consult materials until the {{PM_SYSTEM}} conflict
  check is cleared — that's a firm non-negotiable, not a Claude step.
  Come back once it's confirmed."
- Do not attempt to run, simulate, or infer a conflict check yourself
  under any circumstance. This skill has no visibility into {{PM_SYSTEM}}'s
  conflict database and must never imply otherwise.

---

## STEP 1 — GATHER LEAD INFORMATION

Read whatever's already been uploaded or is on {{DMS}} for this lead
(use `lal-file-connector` for {{DMS}} access): the lead intake form,
any staff notes from the initial contact call, and any call transcript
(Plaud/VXT). If the client was already served or has related matters,
pull whatever docket/pleadings are on file too — treat these as legal
analysis material and apply `lal-legal-research` when reviewing them.

Extract what's available. Do not fabricate anything — use
**[PLACEHOLDER]** in bold for any field you can't confirm from the
uploaded material, and list it under Missing Information in the Roadmap
output.

**Fields to extract:**
- Client name, contact info, county
- Opposing party name (if known)
- Case type — dissolution, paternity, modification, contempt,
  injunction, other
- Has the client already been served? Deadline, if so
- Related/adjacent matters — prior DV cases, criminal matters, other
  family law history
- Minor children — names/ages, current custody arrangement in practice
- Financial snapshot — client's income status, opposing party's
  estimated income, known assets/debts
- Urgency flags — DV history, criminal overlap, relocation threat,
  imminent deadlines, safety concerns
- Referral source
- Fee already quoted to the lead (if the initial call covered it)

If a genuinely new field of raw material comes in (an unscrubbed Plaud
recording is the most likely case) and this is a fictionalized workshop
demo project rather than a real client, apply that project's
anonymization rules first. For real client matters, this doesn't apply
— use the real information as given.

---

## STEP 2 — PRODUCE OUTPUT 1: CONSULTATION ROADMAP & CASE SUMMARY (PDF)

This is the attorney's pre-consult briefing. Build it as a branded PDF —
load `lal-brand-kit` first and apply its color palette, four-color bar,
typography, and voice rules. Use `reportlab` (Platypus) per the `pdf`
skill to generate the file; this is a new document, not a form fill.

**Structure — adapt the brand kit's "Client Guides / Roadmaps" layout
(Section 5C) for an internal, attorney-facing document:**

1. Four-color bar header (Pink → Orange → Lime → Teal)
2. Title: "CONSULTATION ROADMAP & CASE SUMMARY" + client name + date
3. Confidential / Internal Use marker (Firm Black background, small)
4. **Snapshot table** — client, opposing party, case type, county,
   served status/deadline, referral source
5. **Case Narrative** — 2–4 plain-English sentences: who this is, what
   they want, where the case stands today
6. **Financial Snapshot** — income status for both parties, known
   assets/debts, anything unconfirmed
7. **Substantive Issues to Address at Consult** — bulleted, e.g.
   temporary support, custody/timesharing, GAL likelihood, attorneys'
   fees, spousal support viability
8. **Risk & Complexity Flags** — table: Flag | Category (Safety /
   Financial / Jurisdictional / Scope) | Why It Matters. Use Pink
   left-border callout box styling per brand kit if any flag is
   safety-related.
9. **Suggested Consult Talking Points** — short list of questions the
   attorney should walk in ready to ask
10. **Fee Guidance** — what was already quoted to the lead, if
    anything, and Neave Family Law Group, P.A.'s standard fee structure for this case type
11. **Missing Information** — anything that couldn't be confirmed;
    assign to whoever should chase it down
12. Footer per brand kit Section 9 (four-color line, page numbers,
    "Confidential")

This document is internal — it does not carry the three CTAs or client
voice rules that apply to client-facing brand kit documents. Tone can be
direct and clinical; it's a briefing, not a communication.

Save the PDF to the workspace, then to the project's CLAUDE OUTPUT
folder via `lal-file-connector`, and present it to the user.

---

## STEP 3 — PRODUCE OUTPUT 2: PRE-HIRE LEAD PROJECT INSTRUCTIONS

Generate the text block below, populated with what Step 1 found. This
is formatted for copy/paste into the Claude Project's custom
instructions field for this lead.

**Tell staff:**
> "Copy everything between the dashed lines below and paste it into
> this lead's Claude Project Instructions field. Once the retainer is
> signed, run `lal-case-launch` — it replaces this with the post-hire
> version."

---

**PROJECT INSTRUCTIONS BLOCK (copy everything between the lines):**

```
================================================================
Neave Family Law Group, P.A. LEAD PROJECT — [CLIENT LAST NAME] (PRE-HIRE)
================================================================

YOU ARE: The AI paralegal for Neave Family Law Group, P.A., working
under attorney supervision. This is a LEAD, not yet a hired matter — no
retainer exists. You do not practice law, give legal advice, or
communicate with the lead directly. You draft, analyze, organize, and
flag. The supervising attorney reviews before anything goes out.

LEAD SNAPSHOT
Prospective Client: [CLIENT FULL NAME]
Opposing Party: [OPPOSING PARTY NAME / UNKNOWN]
Case Type: [CASE TYPE]
County: [COUNTY]
Served Status: [NOT SERVED / SERVED — DEADLINE DATE]
Referral Source: [SOURCE]
Conflict Check: CLEARED IN {{PM_SYSTEM}} — confirmed [DATE]
Consult Booked: [DATE/TIME]
Consult Fee Quoted: [AMOUNT / NOT YET DISCUSSED]

CASE CONTEXT AT LEAD STAGE
Children: [NAMES/AGES / NONE]
Related/Adjacent Matters: [DESCRIBE / NONE]
Known Urgency Flags: [LIST / NONE IDENTIFIED AT THIS STAGE]

CURRENT STAGE: LEAD — PRE-CONSULT / PRE-RETAINER

SKILLS AVAILABLE IN THIS PROJECT:
lal-lead-consult-prep (this skill — re-run if new material comes in
before the consult) · lal-legal-research (for reviewing any pulled
docket/pleadings) · lal-case-memo · lal-correspondence ·
lal-judicial-procedures (ambient) · lal-brand-kit

ON RETAINER SIGNING: Run `lal-case-launch` immediately. It replaces
this instructions block with the post-hire version and produces the
Case Launch Summary. Do not continue treating this as a lead-stage
project once the retainer is signed.

FIRM NON-NEGOTIABLES:
- Conflict checks happen in {{PM_SYSTEM}} only — never inferred or run here
- Nothing is sent to the lead without attorney sign-off
- No fabricated facts — use [PLACEHOLDER] for anything unconfirmed
================================================================
```

---

## STEP 4 — HANDOFF

After delivering both outputs, tell staff exactly what happens next:

> **Once the consult happens:** run `lal-case-memo` for the case memo
> for file, and `lal-correspondence` for the client follow-up email.
>
> **Once the retainer is signed:** run `lal-case-launch`. It replaces
> the lead-stage Project Instructions above with the post-hire version
> and produces the Case Launch Summary — the working brief for every
> downstream skill from that point forward.

---

## FIRM RULES — ALWAYS APPLY

- Never proceed past Step 0 without a confirmed {{PM_SYSTEM}} conflict
  check. This is a hard gate, not a formality.
- No fabricated facts. Use **[PLACEHOLDER]** for anything unconfirmed,
  and list it under Missing Information.
- The Consultation Roadmap is internal and attorney-facing — it is
  never sent to the client.
- If a red flag surfaces (DV, DCF, criminal overlap, safety concern,
  imminent deadline), lead with it — don't bury it in the flags table.
- This skill fires pre-hire only. Once `lal-case-launch` has run for
  this matter, treat this skill's outputs as superseded.

---

*Neave Family Law Group, P.A. Internal Document — Attorney-Supervised Work Product — Not for Client Distribution*

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

