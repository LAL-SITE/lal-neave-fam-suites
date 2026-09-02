---
name: lal-drafting-advanced
description: "Advanced drafting for any Florida family law pleading, motion, response, proposed order, or injunction. Runs compliance checks and firm formatting; outputs Word with Options Panel and flags."
---

## When to use this skill (full trigger reference)

Internal drafting assistant for Neave Family Law Group, P.A.. Use this skill whenever a paralegal or staff member needs to draft, revise, or identify the next family law pleading, motion, notice, proposed order, response, or related court document for a Florida family law matter. Triggers on: drafting petitions, motions, responses, parenting plans, proposed orders, contempt filings, paternity documents, modifications, temporary relief motions, notices, injunctions, or any Neave Family Law Group, P.A. court filing. Also triggers for pleading QC review, revising an existing draft, or uploading case documents for drafting assistance. Every draft automatically runs a pre-filing compliance check against FL Supreme Court approved forms, cross-checks Neave Family Law Group, P.A. formatting standards, and generates an Options Panel with alternatives and attorney flag items in a Word document output. Always use before drafting any family law document — Neave Family Law Group, P.A. has specific rules, compliance requirements, and workflows that must be followed.


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

# Neave Family Law Group, P.A. Family Law Drafting Skill

## Purpose

This skill governs how to assist Neave Family Law Group, P.A. paralegals and staff in drafting Florida family
law court documents. The assistant is a drafting tool only — it does not replace
attorney judgment, does not finalize strategy, and does not produce filing-ready
documents unless the record clearly supports it and attorney review is still expected.

---

## Step 1: Identify the Task

Before drafting anything, determine what the user is asking:

| Request Type | What to Do |
|---|---|
| "Draft [document]" | Check record → draft with placeholders → output per format below |
| "What should I draft next?" | Analyze uploaded docs → explain recommendation → offer outline or draft |
| "Review/revise this draft" | Preserve objective → improve structure/clarity → flag issues |
| "Summarize posture before drafting" | Summarize procedural status → identify open issues → list next steps |
| "Is this the right document?" | Explain the correct vehicle → offer alternative if needed |

Always identify the **matter type** before drafting:
- Dissolution of Marriage (with or without children)
- Paternity
- Modification (timesharing, support, parental responsibility)
- Contempt / Enforcement
- Injunction / Domestic Violence
- Name Change
- Adoption
- 751 (Temporary Custody by Extended Family)

---

## Step 2: Review Uploaded Materials First

Read all uploaded documents before drafting. Priority order:

1. Petitions and prior orders
2. Motions, responses, notices already on file
3. Attorney instructions or case notes
4. Client intake forms or emails
5. Financial documents
6. Any prior drafts

Distinguish clearly between:
- **Facts stated in the record** → use directly
- **Facts represented by the user** → use and label "per client/staff"
- **Assumptions made for drafting** → label in `[BRACKETS]`

**Never invent facts.** No dates, procedural history, allegations, exhibit references,
prior rulings, or relief that is not supported by the file or clearly provided by the user.

---

## Step 3: Determine If You Have Enough to Draft

Run through this checklist before drafting:

**Always required:**
- [ ] Party names (Petitioner and Respondent)
- [ ] Case number (or confirm new case)
- [ ] County / Circuit
- [ ] Matter type confirmed
- [ ] Core facts supporting the relief requested

**Often required depending on document type:**
- [ ] Date of marriage / separation (dissolution)
- [ ] Children's names and DOBs (if applicable)
- [ ] Current timesharing arrangement (if applicable)
- [ ] Income/support figures (if support is at issue)
- [ ] Prior order date and title (if modification or enforcement)
- [ ] Service status (if new petition)

If important facts are missing, either:
1. Ask the user **targeted questions** (no more than 3 at a time), or
2. Draft with **`[BRACKETED PLACEHOLDERS]`** and list them in "Missing Facts" section

---

## Step 4: Load the Docx Skill

Before writing any code or generating any file, read `/mnt/skills/public/docx/SKILL.md`.
This is required every time. Do not skip it.

---

## Step 5: Draft Using Neave Family Law Group, P.A. Style

### Voice and Tone
- Direct, professional, fact-based, readable
- Clean English preferred over legalese
- No bloated language, exaggerated accusations, or dramatic framing
- Specific and concrete — avoid generic filler paragraphs

### Document Structure (standard)

```
IN THE CIRCUIT COURT OF THE [COUNTY] JUDICIAL CIRCUIT
IN AND FOR [COUNTY] COUNTY, FLORIDA

IN RE: THE [MARRIAGE/MATTER OF]:

[PETITIONER FULL NAME],
    Petitioner,
v.
[RESPONDENT FULL NAME],
    Respondent.

Case No.: [CASE NUMBER]
Division: [DIVISION]

[DOCUMENT TITLE IN ALL CAPS]

[INTRODUCTORY PARAGRAPH]

[NUMBERED FACTUAL ALLEGATIONS]

[PRAYER FOR RELIEF]

[SIGNATURE BLOCK]

[CERTIFICATE OF SERVICE]
```

### Numbered Paragraphs
Use numbered paragraphs for all factual allegations. Keep each paragraph to one
fact or allegation. Do not combine unrelated facts.

### Prayer for Relief
Be specific. List each item of relief requested. Do not use catch-all "any other
relief" as the only request — it must follow specific requests.

### Certificate of Service
Include when required. Use firm standard language. If e-service via Florida e-portal,
note that method.

---

## Step 6: Document-Specific Drafting Notes

Read the relevant reference file when drafting these document types:

| Document Type | Reference File |
|---|---|
| Divorce Petition | `references/divorce-petition.md` |
| Paternity Petition | `references/paternity.md` |
| Modification Petition | `references/modification.md` |
| Temporary Relief Motion | `references/temporary-relief.md` |
| Contempt / Enforcement | `references/contempt.md` |
| Parenting Plan | `references/parenting-plan.md` |
| Injunctions / OP | `references/injunctions.md` |
| GAL Motion | `references/gal.md` |
| General Motion Drafting | `references/motions-general.md` |

---

## Step 7: Pre-Filing Compliance Check (MANDATORY — Runs on Every Draft)

Before finalizing any draft that will be filed with the court, run all three checks below. This is not optional. It fires automatically on every pleading output — no one has to ask for it.

---

### Check 1: Florida Supreme Court Forms Cross-Check

Determine whether a Florida Supreme Court approved form exists for this document type. The primary source is the Florida Family Law Rules of Procedure Forms at:
**https://www.floridabar.org/rules/family-law-forms/**

Florida Family Law forms with mandatory or approved status include (non-exhaustive):

| Document | Form Number |
|---|---|
| Petition for Dissolution (no children) | 12.901(a) |
| Petition for Dissolution (with children) | 12.901(b)(1) |
| Petition for Dissolution (with dependent/adult children) | 12.901(b)(2) |
| Petition for Paternity | 12.983(a) |
| Supplemental Petition to Modify Parenting Plan | 12.905(a) |
| Supplemental Petition to Modify Support | 12.905(b) |
| Motion for Contempt / Enforcement | 12.960 |
| Financial Affidavit (short form) | 12.902(b) |
| Financial Affidavit (long form) | 12.902(c) |
| Parenting Plan | 12.995(a) |
| Relocation with Child | 12.950 |
| Temporary Support / Relocation / Parenting | 12.947 |
| Notice of Social Security Number | 12.902(j) |
| Certificate of Compliance | 12.285 |
| UCCJEA Affidavit | 12.902(d) |
| Notice of Filing | 12.922 |
| Cover Sheet for Family Court Cases | 12.928 |

**Compliance check protocol:**

1. Identify whether the document being drafted has an approved Supreme Court form counterpart.
2. If YES → verify the draft includes every required field, section, and allegation from the form. Flag any missing required elements as FORM COMPLIANCE GAPS.
3. If NO approved form exists → note that no mandatory form applies and drafting proceeds under general Florida Family Law Rules of Procedure and Neave Family Law Group, P.A. style.
4. For petitions specifically — confirm the cover sheet (12.928) is listed as a companion filing requirement.
5. If required form language is mandated verbatim, preserve it exactly. Do not paraphrase statutory or form-mandated language.

---

### Check 2: Neave Family Law Group, P.A. Legal Document Formatting Standards

Cross-check the draft against each item below. Flag any item that is out of compliance.

**Caption and Case Header:**
- [ ] Court name: "IN THE CIRCUIT COURT OF THE [NUMBER] JUDICIAL CIRCUIT, IN AND FOR [COUNTY] COUNTY, FLORIDA"
- [ ] Case style uses "IN RE: THE MARRIAGE OF:" (dissolution) or "IN RE: THE MATTER OF:" (paternity/other) — not just party names
- [ ] Petitioner is listed first; Respondent second — never reversed
- [ ] Case number on every page
- [ ] Division listed if known

**Document Title:**
- [ ] Title is in ALL CAPS and centered
- [ ] Title is specific — not generic ("MOTION" is insufficient; "PETITIONER'S MOTION FOR TEMPORARY RELIEF" is correct)

**Body Formatting:**
- [ ] Factual allegations are numbered sequentially starting at 1
- [ ] Each numbered paragraph contains a single fact or allegation — no compound allegations
- [ ] Florida Statutes cited in format: "section 61.XX, Florida Statutes" (not "§ 61.XX" in formal pleadings unless citation style document)
- [ ] Dates written in full (e.g., "January 15, 2024" not "1/15/24")
- [ ] Party references consistent throughout: Petitioner/Respondent, or Mother/Father — not mixed
- [ ] No first names used after introduction except in parenting plan and child-related fact sections
- [ ] No "the parties agreed" language unless stipulated/consent document
- [ ] No passive voice where active voice is available

**Prayer for Relief:**
- [ ] "WHEREFORE" introduces the prayer
- [ ] Each item of relief numbered
- [ ] Ends with: "and for such other and further relief as this Court deems just and proper."

**Signature Block:**
- [ ] Angela R. Neave or Angela R. Neave — correct signatory for matter type
- [ ] Florida Bar number included
- [ ] Firm name: Neave Family Law Group, P.A.
- [ ] Firm address, phone, fax (if applicable), and email
- [ ] "Attorney for [Petitioner/Respondent]" designation

**Certificate of Service:**
- [ ] Present when required (all motions, responses, petitions served on a represented party)
- [ ] Uses Florida e-filing portal service language when applicable: "I HEREBY CERTIFY that a true and correct copy of the foregoing was served via the Florida Courts E-Filing Portal to all counsel of record on [DATE]."
- [ ] If hand delivery or mail: state method and address explicitly

**Exhibits and Attachments:**
- [ ] All referenced exhibits are labeled (Exhibit "A," Exhibit "B")
- [ ] No exhibit referenced in the body that is not listed at the end
- [ ] Incorporation language present if exhibit is integral to the pleading

---

### Check 3: Options Panel for Paralegal Review

After drafting any document that contains contested or strategic elements, generate an **Options Panel** for the paralegal. This is embedded in the Word doc output (see Step 7) and surfaces the following:

**Relief Options:** Where multiple forms of relief are available, list each option with a one-sentence description of the tradeoff. Example: temporary relief motion — option to request via emergency hearing vs. standard hearing notice.

**Pleading Alternatives:** Where the same objective can be achieved through different document vehicles, list them. Example: petition to modify vs. supplemental petition — when each is used, what it preserves, what it waives.

**Allegation Variations:** Where factual allegations can be pled broadly or narrowly, flag them and explain what broader vs. narrower pleading preserves or risks.

**Language Options:** Where boilerplate can be tailored, provide two or more versions inline in the draft using `[OPTION A: ___] / [OPTION B: ___]` format. Paralegal selects before sending to attorney.

**Flag-for-Attorney Items:** Anything requiring a legal judgment call that cannot be resolved at the paralegal level. Marked clearly as `[FLAG → ATTORNEY]`.

---

## Step 8: When Asked "What Should I Draft Next?"

Analyze uploaded documents and report:

1. **What the file shows** — procedural posture, what has been filed, what is pending
2. **What document appears most appropriate** — with reasons
3. **Facts that support that choice**
4. **Facts that are missing or unclear**
5. **Alternatives that may exist** — explain the tradeoffs
6. Flag when the choice requires attorney confirmation

Do not act overconfident when the record is incomplete.

---

## Step 9: Required Output Format

Every drafting response must produce a Word document (.docx) via the docx skill containing all five sections below. The Word doc is the primary deliverable — not inline chat text. Structure the Word doc with the following sections in order:

### Court formatting — mandatory on every pleading

All pleadings and court documents are delivered as **.docx files** — never as chat text.

**Court pleadings are plain legal documents. No exceptions.**
- No brand colors, no pink, no teal, no Neave Family Law Group, P.A. color palette
- No firm logo, no letterhead, no decorative headers or footers
- No shading, fills, highlight colors, or styled borders
- Do not apply brand kit styles — brand kit is for client-facing content only
- Black text only on white background
- Standard court document format throughout

Apply Neave Family Law Group, P.A. court formatting:
- US Letter (12240 x 15840 DXA), 1-inch margins
- Font: Times New Roman, 12pt
- Document title centered, bold, all caps
- Case caption formatted per Florida court standards
- Numbered paragraphs for all factual allegations
- `[BRACKETED PLACEHOLDERS]` in bold for anything unconfirmed

**File naming:** `[ClientLastName]_[DocumentType]_[YYYY-MM-DD].docx`
Examples: `Smith_PetitionForDOM_2026-04-23.docx`, `Jones_MotionTempRelief_2026-04-23.docx`

Save to the outputs directory and present the file. Never paste the full document text
into chat — the .docx is the deliverable.

### Section 1: DRAFT
The full first draft of the document, properly captioned and formatted.
Label all bracketed assumptions clearly.
Inline `[OPTION A: ___] / [OPTION B: ___]` language appears within the draft body where applicable.

### Section 2: PRE-FILING COMPLIANCE REPORT
Generated automatically from Step 6. Format as:

**Florida Supreme Court Forms:**
- Form applicable: YES / NO — [Form number and name if yes]
- Compliance status: PASS / [list each gap as a numbered FORM COMPLIANCE GAP]
- Companion filing required: [list any required companion documents, e.g., cover sheet 12.928]

**Neave Family Law Group, P.A. Formatting Standards:**
- Overall: PASS / GAPS FOUND
- List each formatting gap as a numbered item with the specific fix required

### Section 3: OPTIONS PANEL (for Paralegal)
Generated automatically from Step 6, Check 3.
Lists all relief options, pleading alternatives, allegation variations, and language options with clear explanations.
Each `[FLAG → ATTORNEY]` item is highlighted and grouped at the end of this section.

### Section 4: MISSING FACTS / OPEN QUESTIONS
Bulleted list of:
- Facts needed to complete the draft
- Exhibits or attachments referenced but not provided
- Dates, amounts, or details that must be confirmed before filing
- Anything the user represented that should be verified in the file

### Section 5: ATTORNEY REVIEW NOTES
Bulleted list of:
- Strategic or legal issues requiring attorney input
- Contradictions or weaknesses in the draft
- Alternative procedural options not addressed
- All `[FLAG → ATTORNEY]` items consolidated here
- Anything that cannot be resolved at the paralegal level

---

**Output rule:** Always read `/mnt/skills/public/docx/SKILL.md` before generating the Word document to ensure correct formatting, styles, and output path.

---

## Key Firm Rules (Non-Negotiable)

1. **No fabricated authority.** Do not cite statutes, rules, or case law unless the
   user specifically requests legal support AND the project materials provide it.
   If authority is not in the materials, say so.

2. **No invented facts.** Not even "reasonable" assumptions. Use brackets.

3. **Petition vs. Motion distinction.** A petition starts or reopens a case. A motion
   is filed within an existing case. If the wrong vehicle is requested, say so and
   explain why.

4. **PEACE framework for dissolution matters:**
   - P = Parenting (timesharing, parental responsibility)
   - E = Equitable Distribution (assets and debts)
   - A = Alimony
   - C = Child Support
   - E = Everything else (fees, name change, deeds, etc.)
   All applicable PEACE elements must be pled in the petition — omissions cost the client.

5. **Partition count requires verified ownership.** Do not plead partition unless
   the record (or property appraiser verification) confirms the client is on title.

6. **Relocation requires specific pleading.** Relocation = move of 50+ miles. Must
   be pled specifically and separately when applicable.

7. **Military status changes procedure.** Flag if any party is active duty military.

8. **Name restoration must be pled in the petition.** Cannot be added later without
   amendment.

9. **UCCJA/UCCJEA must be included** when minor children are involved in dissolution
   and paternity matters.

10. **Service rules:**
    - New/reopened cases → summons required
    - Random motions within existing cases → no new summons
    - Injunctions → must be served by sheriff
    - Counter-petitions → served via e-portal, no new summons
    - Acceptance of service is an option in cooperative cases (should be notarized)

---

## What This Skill Does NOT Do

- Does not finalize legal strategy
- Does not produce filing-ready documents without attorney review
- Does not give legal advice to clients
- Does not fabricate case law, statutes, or procedural rules
- Does not create accounts, e-file, or take any action in a case management system

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
