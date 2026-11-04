---
name: lal-gal-reports
description: "GAL report drafter - interim, second, subsequent, and final reports. Use whenever a GAL report or section is needed. Run the tracker and chronology first so the report reflects current status."
---

## When to use this skill (full trigger reference)

GAL Report Drafter for Florida Guardian ad Litem matters. Use this skill whenever the GAL needs to draft, generate, or prepare any GAL report — interim, second, third, or final. Triggers on any of the following: "draft the report," "write the interim report," "prepare the final report," "I need to file a report," "draft the GAL report," "it's time to write the report," "prepare the second report," "build the background section," "write up my findings," "draft the recommendations section," or any request to produce a GAL report or a section of one. This skill covers all report types in the GAL practice — interim reports for hearings, second and subsequent reports, and final reports — using the actual Neave Family Law Group, P.A. report templates and the FinalReportTemplate in the project. If the report type is not clear from context, the skill will ask. Always run lal-gal-tracker and lal-gal-chronology before drafting to ensure the report reflects current investigation status and chronology.


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

# GAL Report Drafter

## Purpose

This skill drafts complete GAL reports — or individual sections — using the actual
report templates in the project files. Every draft reflects the GAL's investigation
accurately, separates findings from recommendations strictly, and matches the structure
of the real templates.

The GAL reviews, edits, and signs all drafts. This skill produces working drafts,
not final documents.

---

## FIRM STANDARD CONTACT INFORMATION
**Always use the following — no exceptions:**

```
Angela R. Neave, MS, Esq.
Guardian Ad Litem for the minor child(ren)
2400 E. Commercial Blvd., Suite 826, Fort Lauderdale, FL 33308
Phone: (954) 981-2200
```

---

## Step 1 — Determine Report Type

| Type | When Used |
|------|-----------|
| **INTERIM — FIRST** | First report; investigation not complete; hearing pending |
| **INTERIM — SUBSEQUENT** | Second, third, etc. report before final; builds on prior reports |
| **FINAL** | Investigation complete; all recommendations ready |

If unclear, ask: *"Is this an interim report (investigation still in progress) or a final report
(investigation complete)? If interim, is this the first report or a subsequent report?"*

Also confirm:
- What number report is this? (First, Second, Third, etc.)
- Is there a pending hearing? If yes: date, time, purpose.
- Was the 10-day requirement waived?
- What prior reports exist? (List each with date)

---

## Step 2 — Gather Required Inputs

Pull from existing skills' outputs where possible.

### FROM GAL-CASE-INTAKE
- Case number, court, division, county, judicial circuit
- Petitioner and respondent names and roles
- Children: initials for body, full names only in appointment paragraph and internal profile
- DOBs, ages
- Appointment order date; Acceptance filed date
- Scope of appointment / issues GAL asked to address
- Hearing date (if any); whether 10-day waiver applies

### FROM GAL-INVESTIGATION-TRACKER
- Documents reviewed (for Section II)
- Home visits completed (dates and observations)
- Persons communicated with (for Section II)
- Persons in phone tag / not yet reached
- Report readiness status

### FROM GAL-CHRONOLOGY-BUILDER
- Background / procedural history narrative (FORMAT B output)
- Pattern observations (for Findings section)

### FROM GAL-SOURCE-INTERVIEW-PROCESSOR
- Parent summaries (for Observations section)
- Collateral summaries (for Observations section)
- Child interview summary (for Observations section)

If required inputs are missing: flag specifically what is missing and ask for it.
Do not draft findings or recommendations from incomplete inputs.

---

## Step 3 — Report Routing

---

### ROUTE A: INTERIM — FIRST REPORT

**Governing rule:** Partial investigation report. Investigation is not complete.
Recommendations are TEMPORARY, not final. The report must state investigation is ongoing.

**Full Report Structure:**

```
[COURT CAPTION]

FIRST INTERIM REPORT OF THE GUARDIAN AD LITEM*

COMES NOW, Angela R. Neave, MS, Esq., on her own behalf as Guardian Ad Litem
("GAL") in the above styled cause and who submits this her First Report of the
Guardian Ad Litem and in support thereof states the following:

*This Report does not include everything the GAL has learned from her investigation.
This Report is confidential. Neither this Report nor its contents shall be shared
with the child.

I.   BACKGROUND INFORMATION
II.  GAL'S INVESTIGATION
III. OBSERVATIONS AND INSIGHTS [include only if warranted by investigation status]
IV.  TEMPORARY RECOMMENDATIONS
```

**Section I — Background Information**

Paragraph structure (from FinalReportTemplate.docx in project):
1. "I was appointed by an Agreed Order Appointing Guardian Ad Litem ("GAL") dated
   [date] to represent the best interests of the minor child[ren], to wit: [child
   initials], whose date of birth is [DOB]."
2. "An Acceptance of Appointment was filed by the GAL on [date]."
3. Pending proceedings: list each pending motion with file date.
4. Hearing: "A hearing is set in this matter for [purpose] on [date]." OR
   "To the knowledge of this GAL, there are no pending hearings."
5. Waiver: "The parties [did / did not] waive the requirement of the GAL report
   being issued 10 days prior to the hearing."

**Section II — GAL's Investigation**

State investigation clearly as PARTIAL. Use investigation tracker output.

Subsections:
- "To date, this GAL has done the following in her investigation in this matter:"
- "A. Reviewed the following:" [list documents]
- "B. The GAL has completed a home visit of:" [Mother / Father — with date and brief
   observations]
- "C. The GAL has communicated with the following non-parties either in person,
   via telephone, email or text, or a combination thereof:" [list collaterals]
- "D. The GAL or her office has left messages or played 'phone tag' with the
   following non-parties:" [list]
- Closing statement: *"This is an Interim Report as well as a shortened report as
   I have only been GAL for [time period] and I have not completed my investigation.
   However, I am comfortable making the following temporary recommendations in the
   child's best interest:"*

**Section III — Observations and Insights** *(include only if warranted)*

Include parent and child summaries only if the investigation has progressed far
enough to warrant observations. Structure:
- In regard to Mother: [observations, numbered sub-paragraphs]
- In regard to Father: [observations, numbered sub-paragraphs]
- In regard to the Children: [observations]
- Collateral observations (by source)

**Section IV — Temporary Recommendations**

Label clearly as TEMPORARY. Each recommendation:
- Is specific and actionable
- Is tied to a finding or observation stated earlier in the report
- Is labeled as interim and subject to revision
- Uses lettered format (a., b., c.)

Close with: "Other recommendations to be made by the GAL. Any other recommendations
as deemed appropriate by the Court."

---

### ROUTE B: INTERIM — SUBSEQUENT REPORT

**All elements from Route A apply, plus:**

**Section I additions:**
After the appointment paragraph, add:
- "An Interim Report of the Guardian Ad Litem was finalized on [date]. All reports
   were provided to the parties' attorneys and are incorporated herein. They are also
   included at the end of this Report for easy access as follows:
   a. [First] Report of GAL, Exhibit 'A'.
   b. [Second] Report of GAL, Exhibit 'B'." [etc.]
- "This report outlines the portion of the investigation which has occurred since
   the preparation of the last Report."

**Section II:**
Report only what has occurred SINCE the last report.

**Recommendations:**
Label as "UPDATED RECOMMENDATIONS" rather than Temporary Recommendations.
Where a prior recommendation is unchanged, carry it forward.
Where a prior recommendation has changed, state the change and the reason.

---

### ROUTE C: FINAL REPORT

**Governing rule:** Investigation is substantially complete. Final recommendations issued.

**⚠️ Pre-flight — verify from investigation tracker before drafting:**
- [ ] Both parents interviewed
- [ ] Both home visits completed
- [ ] Child(ren) interviewed (or documented developmental reason why not)
- [ ] All HIGH-priority investigation gaps resolved or explained
- [ ] Key records received and reviewed
- [ ] All identified collaterals contacted or documented as non-responsive

If any item is NOT complete, flag it and ask whether to proceed with explicit
acknowledgment of the limitation in the report.

**Full Report Structure (from FinalReportTemplate.docx in project):**

```
[COURT CAPTION]

[ORDINAL] REPORT OF THE GUARDIAN AD LITEM*

COMES NOW, Angela R. Neave, MS, Esq., on her own behalf as Guardian Ad Litem
("GAL") in the above styled cause and who submits this her [ordinal] Report
of the Guardian Ad Litem and in support thereof states the following:

*This Report does not include everything the GAL has learned from her investigation.
This Report is confidential. Neither this Report nor its contents shall be shared
with the child.

I.   BACKGROUND INFORMATION
II.  GAL'S INVESTIGATION
III. OBSERVATIONS AND INSIGHTS
IV.  GAL'S FINDINGS & RECOMMENDATIONS
```

**Section I — Background Information**

Same structure as interim, plus:
- "The GAL has been asked to make recommendations as to the following issues:"
  [list scope items from appointment order]
- Reference all prior reports as exhibits

**Section II — GAL's Investigation**

Complete investigation log. All sources, all records, all contacts. No "ongoing"
language — state investigation as complete (or note any remaining limitations explicitly).

**Section III — Observations and Insights**

Full source summaries organized as:
- Mother (numbered paragraphs)
- Father (numbered paragraphs)
- Children (each child separately if multiple)
- Each collateral (professionals first, then lay collaterals)
- Evidence observations (if exhibits were reviewed)

Each entry: attributed to source; observations labeled as observations; allegations
labeled as allegations; contrary/neutral accounts included.

**Section IV — GAL's Findings and Recommendations**

Organized by applicable Florida §61.13(3) factors (per FinalReportTemplate structure).

For each applicable factor:

```
[Factor statutory text]

Relevant Findings:
[What the evidence shows — from investigation — attributed to sources —
factual and neutral — no advocacy language]

Recommendations:
[Specific, actionable, tied to the finding above — explains why it serves
the child's best interest]
```

See `references/findings-recommendations-language.md` for the complete drafting
standard, attribution language quick reference, behavioral specificity standard,
and contra-positive account protocol.

**Summary Recommendations** *(for complex multi-issue cases)*:
After the factor-by-factor analysis, add a numbered summary list of all recommendations.
This supplements — does not replace — the factor-by-factor section.

---

## Step 4 — Style and Language Standards

### Voice and Attribution
- GAL's own observations: "The GAL observed…" / "During the home visit, the GAL noted…"
- What a party said: "Mother reported…" / "Father stated…" / "Father denied…"
- What a collateral said: "According to [Name/Role]…" / "[Name] reported…"
- What a record shows: "School records reflect…" / "The therapist's notes document…"
- An allegation: "Mother alleged…" / "Father contends…"
- A fact in dispute: "The parties' accounts conflict on this point…"
- Corroborated fact: "Both [Source A] and [Source B] independently confirmed…"

### The New Judge Rule
Write every report as though the reader knows nothing about this case except what
the report tells them. A judge new to the case must follow the reasoning from evidence
to findings to recommendations without outside knowledge.

### Findings vs. Recommendations Discipline

| FINDINGS | RECOMMENDATIONS |
|----------|----------------|
| What the evidence shows | What should happen |
| Past and present tense | Future-oriented |
| Attributed to sources | Tied to specific findings |
| Neutral, factual language | Specific and actionable |
| No advocacy | No unsupported conclusions |

**Never put a recommendation in the Findings section.**
**Never put a factual assertion only in the Recommendations section.**

### Contra-Positive Accounts
Address every significant contrary account. If a source's account undermines a finding,
explain why the GAL did not find it credible — or acknowledge it as a factual dispute
for the court to resolve. Do not omit it. That is not an option.

### Behavioral Specificity
Never write labels. Describe specific conduct.
❌ "Father demonstrated a lack of insight."
✅ "Throughout the investigation, when asked specifically what he believed had contributed
to the current conflict, Father consistently identified only Mother's actions and did not
identify any specific way in which his own conduct had affected the dynamic."

### Confidentiality Footnote — Required on Every Report
*"This Report does not include everything the GAL has learned from her investigation.
This Report is confidential. Neither this Report nor its contents shall be shared with the child."*

---

## Step 5 — Closing and Signature Block

```
Respectfully Submitted,

Angela R. Neave, MS, Esq.
Guardian Ad Litem for the minor child(ren)

CERTIFICATE OF SERVICE

I HEREBY CERTIFY that a true copy of the foregoing has been sent by
Email and/or U.S. Mail to [list counsel with email addresses] on [date].

By: _______________________________
    Angela R. Neave, MS, Esq.
    2400 E. Commercial Blvd., Suite 826, Fort Lauderdale, FL 33308
    Phone: (954) 981-2200
```

---

## Step 6 — Interim vs. Final Decision Guidance

| Signal | Likely Report Type |
|--------|--------------------|
| "Hearing is coming up" / deadline pressure | INTERIM |
| "Investigation isn't done yet" | INTERIM |
| "I haven't interviewed [someone] yet" | INTERIM |
| "I'm ready to make final recommendations" | FINAL |
| "Investigation is complete" | FINAL |
| Tracker shows NOT READY or INTERIM ONLY | Force INTERIM |
| Tracker shows READY FOR FINAL | FINAL available |
| Ambiguous | Ask |

**Hard rule:** If the investigation tracker shows any HIGH-priority gap unresolved
AND the GAL has not explicitly acknowledged it, do not route to FINAL. Ask first.

---

## Reference Files

See `references/section-by-section-checklist.md` for the complete pre-filing checklist
for each report type — what every section must contain before the report is ready to file.

See `references/findings-recommendations-language.md` for the complete style guide on
Section IV — factor-by-factor framework, attribution language, behavioral specificity
standard, contra-positive account protocol, and common drafting failures checklist.

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

