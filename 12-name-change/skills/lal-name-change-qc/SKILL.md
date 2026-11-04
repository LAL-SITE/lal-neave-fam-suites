---
name: lal-name-change-qc
description: "Name change QC engine. Use to review any drafted name change document before filing or sending - cross-checks against the 12.982 forms, intake, and firm format. Never auto-approves."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. name change quality-control engine. Use to review ANY drafted name change document before it is filed or sent — petitions, consents, NOAs, UCCJEA affidavits, final judgments, § 68.07(3)(i) affidavits, and client letters. Triggers on: "QC the name change petition," "review this name change draft," "check the petition before filing," "is this name change filing ready," "review the final judgment," "check the consent," "does this match the intake," "review the fingerprinting letter," "check this before it goes out," or any request to verify, check, or validate a name change work product. It cross-checks the draft against the matching Florida 12.982 form, the client's intake, and the firm's formatting standard, then returns a concrete correction list and attorney flags — it never auto-approves. Also used by lal-name-change-drafting (self-check) and lal-name-change-start-case (reviewing drafts found in the file). Depends on lal-name-change and lal-file-connector.


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

# Neave Family Law Group, P.A. Name Change — QC Engine

Reviews a name change draft and returns corrections. **Never auto-approves — attorney
review and sign-off still gate filing/sending.** Runs the checklist in
**`lal-name-change`** (`references/petition-qc-checklist.md`) and pulls comparison
sources via **`lal-file-connector`**.

## WORKFLOW
1. **Identify** the document type and case type.
2. **Pull comparison sources:** the matching de-identified master template (#01–#23)
   and the client's intake form (via `lal-file-connector`) for **content/wording**
   comparison — that path returns text only (confirmed limitation, see
   `lal-file-connector`), which is fine for checking paragraph structure and
   required disclosures. For **visual formatting** checks (bold/indent/caption
   layout), compare against the PDF exports of the master templates (Project
   Knowledge `00`–`23`.pdf) instead — the `.docx` versions don't retain real
   formatting. Never use the `EXAMPLE ADULT NAME CHANGE CASE` folder.
3. **Run the checks** (see below), producing PASS / FIX per item with the specific
   correction.
4. **Report:** a correction list (ordered, actionable), then attorney flags
   (scope issues, disqualifier concerns, anything needing legal judgment).

## Pleadings — checklist (from `petition-qc-checklist.md`)
- **Right form:** case type ↔ template (#01/#02/#03; FJ #13/#14/#15); UCCJEA #09 for
  minor/family; Consent #04 or a set service posture; companions (#05/#06/#07/#08);
  cover sheet accounted for; Sixth Circuit standalone #23.
- **Caption & formatting:** correct circuit/county/venue; case no./division bracketed
  if unassigned; party name + "IN RE:" line regular weight, normal case; paragraphs
  hang-indent; Times New Roman 12-pt.
- **§ 68.07 content complete:** present/proposed name; residence; DOB + place +
  Exhibit A; parents incl. mother's maiden name; residence history since birth;
  family; former names; occupation + 5-yr employment; business; profession;
  education; criminal history; **§ 68.07(3)(i) disclosure**; bankruptcy; creditor
  judgments; fingerprints/records-check paragraph (omit only for restoration);
  no-ulterior-purpose + civil-rights; prayer names the exact proposed name.
- **Signature/verification:** sworn line; petitioner signature + notary; firm
  signature block (Angela R. Neave FBN {{BAR_NO}} / Angela R. Neave Bar No. {{BAR_NO}}); Certificate of Service where
  the other parent is served.
- **Consistency/integrity:** every data point matches the intake; no fabricated
  case/ORI/judge/hearing details; unknowns bracketed; no case law unless from firm
  files (`lal-caselaw-protocol`).
- **Scope:** out-of-scope work flagged to the attorney.

## Letters (#19/#21/#22) — checklist
- Correct letter for the stage; restoration → no #21.
- All placeholders filled or bracketed; no ORI/vendor/hearing detail stated as fact
  unless confirmed (else flag *confirm live*).
- Firm letterhead + confidentiality notice present; Neave Family Law Group, P.A. voice (`lal-brand-kit`).

## RULES
- QC surfaces issues; it does not sign off. Attorney approval is the gate.
- If any case citation appears anywhere in the draft, stop and route to
  `lal-caselaw-protocol`.

*Neave Family Law Group, P.A. Internal Skill — Name Change Practice — QC Engine*

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

