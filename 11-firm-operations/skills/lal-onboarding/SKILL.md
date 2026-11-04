---
name: lal-onboarding
description: "Post-hire client onboarding. Use after a client signs and pays - identifies service type, forms, contract terms, strategy, and first pleadings before any work begins."
---

## When to use this skill (full trigger reference)

Post-hire intake and onboarding assistant for Neave Family Law Group, P.A. (Neave Family Law Group, P.A.). Use this skill immediately after a client has signed and paid — when the firm needs to process a new hire into an active, structured case file. Triggers on any request involving: setting up a new client matter, processing a new hire, onboarding a new client, building a case memo for a new client, drafting contract terms for a new matter, figuring out what intake forms to send, mapping out a representation roadmap, or identifying what documents to draft first. Also triggers when staff say things like "we just hired [client]", "new client signed", "what do we do next", "help me set up this case", or "what forms does this client need." Always use this skill before beginning any new client onboarding workflow — it ensures the correct service type, forms, contract terms, case strategy, and initial pleadings are identified before any work begins.


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

# Neave Family Law Group, P.A. New Client Onboarding Skill

## Purpose

Activated **after a client has signed and paid.** This skill runs a fast intake
interview, then produces two outputs:

1. **Internal Case File Memo** (.docx) — saved to {{PM_SYSTEM}}
2. **Client Welcome Email** — sent via portal

Nothing gets drafted, filed, or actioned until these two outputs exist and the attorney
has reviewed the memo.

---

## Step 1: Intake Interview

Ask all questions in **one organized block.** Do not send multiple follow-ups.
Use `[PENDING]` for anything not yet known.

---

### SECTION 1 — CASE DETAILS

1. Client full name and role (Petitioner or Respondent)?
2. Opposing party full name?
3. Case type?
   - Dissolution of Marriage
   - Paternity / Parental Responsibility
   - Supplemental Modification (timesharing, support, parental responsibility, alimony)
   - Contempt / Enforcement
   - Injunction for Protection
   - Chapter 751 (Temporary Custody by Extended Family)
   - Adoption
   - Name Change
   - Other: _______
4. County of filing / venue?
5. Children involved? If yes: names, DOBs, current residence.
6. New case or existing? If existing: case number + any orders already in place.
7. Prior attorneys? Pending substitution of counsel?
8. Florida residency confirmed? How long?
9. Where does the opposing party live?
10. Brief description of what is disputed and what the client wants.
11. Any safety issues: domestic violence, injunctions, DCF/dependency, weapons, substance abuse?
12. Any urgent issues: relocation threat, asset dissipation, loss of housing, medical
    dispute involving a child?

---

### SECTION 2 — REPRESENTATION DETAILS

13. Representation type?
    - Full Representation (hourly retainer)
    - Limited Scope / Unbundled (specific tasks, flat fee)
    - limited-scope coaching Coaching (education only — no representation)
    - Mediation Services
    - Guardian ad Litem
14. Billing structure?
    - Hourly — how much was collected?
    - Flat fee — what is the fee and what does it specifically cover?
    - DIY/coaching — what package or deliverable was purchased?
15. Specific scope or deliverable already promised to the client?
16. Assigned attorney (Angela R. Neave / TBD)?
17. Anticipated resolution path?
    - Likely uncontested / settlement
    - Contested but settlement possible (mediation expected)
    - Litigation-bound (high conflict, trial likely)
    - Unknown

---

### SECTION 3 — DISCOVERY POSTURE

18. Are finances actually in dispute?
    - Paternity parenting-only case → likely no financial discovery needed
    - Modification — parenting only, or does support also change?
    - Divorce — is there a meaningful marital estate?
    - If no financial issues in dispute: note and flag as MINIMAL or NONE
19. Opposing party's financial profile (what client knows or suspects):
    - W-2 employee? Or self-employed / business owner?
    - Suspected hidden income, cash, or lifestyle inconsistent with stated income?
    - Known real property, retirement accounts, investment accounts?
    - Payment apps (Venmo, Zelle, CashApp) or merchant processors?
    - Any recent large transfers, new debt, or sale of assets?
20. What has the client already gathered?
    - Tax returns, pay stubs, bank statements?
    - Business financials, K-1s, profit/loss statements?
    - Any documents already downloaded or organized?

---

## Step 2: Produce Two Outputs

Once intake is complete, produce both outputs. Do not produce one without the other.

---

### OUTPUT 1 — INTERNAL CASE FILE MEMO (.docx)

Generate as a Word document using the docx skill.
Read `/mnt/skills/public/docx/SKILL.md` before writing any code.

**File naming:**
`[ClientLastName]_[CaseType]_CaseMemo_[YYYY-MM-DD].docx`
Example: `Smith_Divorce_CaseMemo_2026-04-20.docx`

**Document formatting:**
- US Letter (12240 x 15840 DXA), 1-inch margins
- Font: Arial, 12pt body
- Header: "Neave Family Law Group, P.A. P.A." — Heading 1
- Document title: "NEW CLIENT CASE FILE MEMO" — Heading 2
- Footer: "Neave Family Law Group, P.A. Internal Document — Not for Distribution"
- All [PLACEHOLDER] values in bold brackets
- Red flags section: light red shading on table cells (fill: "FFE0E0")
- Discovery level: colored badge row — NONE=gray, MINIMAL=blue, STANDARD=orange, AGGRESSIVE=red

---

**MEMO STRUCTURE:**

**Header block (two-column info table):**

| Field | Detail |
|---|---|
| Client Name | [Name] |
| Client Role | [Petitioner / Respondent] |
| Opposing Party | [Name] |
| Case Type | [Type] |
| County / Venue | [County] |
| Case Number | [Number or NEW] |
| Case Status | [New / Existing — open since ___] |
| Prior Attorney | [Name / None / Unknown] |
| Florida Residency | [Confirmed — X months / Unconfirmed] |
| Opposing Party Location | [City, State] |
| Children | [Names, DOBs / None] |
| UCCJEA Home State | [Confirmed / Issue — explain] |
| Assigned Attorney | [Angela R. Neave / TBD] |
| Service Type | [Full Rep / Limited Scope / DIY / Mediation / GAL] |
| Date Opened | [Date] |

---

**SECTION 1 — CASE DETAILS**

Case Summary (2–4 sentences): Who is the client, what do they want, where does the case stand.

---

**SECTION 2 — REPRESENTATION DETAILS**

| Field | Detail |
|---|---|
| Service Type | [Full Rep / Limited Scope / DIY / Mediation / GAL] |
| Billing Structure | [Hourly — $X collected / Flat Fee — $X covers Y / DIY package] |
| Promised Scope | [What was specifically agreed to] |
| Assigned Attorney | [Angela R. Neave / TBD] |
| Anticipated Path | [Uncontested / Contested / Litigation-bound / Unknown] |

Scope Notes: Flag any mismatch between what was sold and what the client seems to expect.
If scope is clear, note it. If ambiguous, flag for attorney clarification before work begins.

---

**SECTION 3 — DISCOVERY WORKFLOW**

Discovery Level Badge: [NONE / MINIMAL / STANDARD / AGGRESSIVE]

Assign level based on:

| Level | When It Applies |
|---|---|
| NONE | DIY/coaching only; client handles everything |
| MINIMAL | Simple income, no business, no real property dispute, settlement expected |
| STANDARD | W-2 income, some assets, settlement likely, cooperative opposing party |
| AGGRESSIVE | Business/self-employment, hidden income suspected, lifestyle inconsistency, litigation-bound |

Rationale: [1–3 sentences explaining the level based on case facts]

Firm responsibilities at this level:
- [List specific tasks and who owns them: Marta Estevez / Russ / Angela R. Neave]

Client responsibilities:
- [Documents the client must provide or gather]

Immediate discovery actions (checkbox):
[ ] Send Mandatory Disclosure link (if applicable)
[ ] Send Financial Affidavit prep sheet (if applicable)
[ ] Send document request list (customized by case type)
[ ] Draft preservation letter (if asset dissipation risk)
[ ] Flag for subpoenas (if third-party records needed)
[ ] Flag for expert engagement — forensic accountant / business valuator (attorney sign-off required)

Note: Discovery does NOT pause for mediation. Flag this to Russ.

Financial Red Flags (shaded table — if any):

| Red Flag | Action Required |
|---|---|
| [Issue] | [Pull deed / subpoena records / flag to Angela R. Neave / etc.] |

---

**SECTION 4 — PARALEGAL NEXT STEPS**

Every task has an owner. Complete in order.

Judith — Immediately after hire:
[ ] Convert lead to active matter in {{PM_SYSTEM}}
[ ] Set party roles, billing, tags, case details
[ ] Assign attorney
[ ] Verify signed retainer is saved in {{PM_SYSTEM}} (do not convert without it)
[ ] Send portal welcome message via Judith template
[ ] Send correct intake forms (based on case type)
[ ] Set stage to INTAKE
[ ] Complete task — triggers handoff to Marta Estevez

Marta Estevez — After Judith's handoff:
[ ] Review Angela R. Neave's strategy call notes
[ ] Confirm service type and case direction
[ ] Download and organize court docket (if existing case)
[ ] Confirm file structure in {{PM_SYSTEM}} is clean
[ ] Input all case information and set deadlines
[ ] Create and assign initial tasks
[ ] Schedule intake call (confirm intake forms are complete first)
[ ] Send Intake Call Prep Letter + Timeline Letter (+ UCCJEA letter if applicable)
[ ] Complete task — triggers handoff to Russ and attorney review

Russ — After intake call is scheduled:
[ ] Assess discovery level and edit workflow accordingly
[ ] Send portal message introducing herself + explain FA-first sequencing to client
[ ] Send Mandatory Disclosure information (if applicable)
[ ] Send Financial Affidavit instructions (if applicable)
[ ] Begin document collection per discovery level
[ ] Flag missing forms or documents immediately

ATTORNEY REVIEW REQUIRED BEFORE DRAFTING BEGINS:
[ ] All red flags in this memo reviewed
[ ] Discovery level confirmed before Russ activates collection
[ ] Scope ambiguities resolved
[ ] Document list approved

---

**SECTION 5 — RED FLAGS & CONCERNS**

Use shaded table. If none, write: "None identified at intake."

| Flag | Category | Action Required |
|---|---|---|
| [Issue] | [Safety / Financial / Jurisdictional / Scope / Client Behavior] | [What to do] |

Auto-escalate to attorney immediately if any of the following exist:
- Active or prior domestic violence / injunctions
- DCF or dependency involvement
- Suspected asset dissipation or hidden income
- Imminent relocation threat with a child
- Non-disclosure of prior family court cases
- Client expectations exceeding contracted scope
- Military status (SCRA implications)
- Requests for relief the court cannot grant
- Unresolved jurisdiction or venue issues
- Opposing party out of state (personal jurisdiction question)

Missing Information (bold — must be resolved before pleadings drafted):
List any [PENDING] fields and who is responsible for obtaining them.

---

### OUTPUT 2 — CLIENT WELCOME EMAIL

Produce as a formatted email draft, ready to copy into the {{PM_SYSTEM}} client portal.

**Tone:** Direct, warm, no fluff. Neave Family Law Group, P.A. voice. Clarity + next steps. No legalese.
Three client promises always present: Clarity, Options, Control.

**Subject:** Welcome to Neave Family Law Group, P.A. — Here's What Happens Next

---

Hi [First Name],

Welcome to Neave Family Law Group, P.A.. We're glad you're here — and we're ready to get to work.

Your file is now open. Here's exactly what happens next.

YOUR NEXT STEPS:

1. Complete your intake forms — you'll receive these in your portal shortly. Fill them out as completely as possible. Accurate information = a stronger case.

2. Watch for document requests — we'll ask you to submit financial records, prior court documents, and other materials through your secure {{UPLOAD_PORTAL}} portal. Links are below. Upload as soon as you have them — your case moves at the speed of your documents.

3. Your intake call — once your intake forms are complete, we'll schedule a call to go through your case in detail, confirm your goals, and map out exactly what happens next.

[ADD IF FINANCIAL MATTER:]
4. Financial Affidavit — this is a court-required financial disclosure form and one of the most important documents in your case. We'll send detailed instructions on how to complete it.

DOCUMENT SUBMISSION:
- General Document Submission: {{UPLOAD_PORTAL_LINK}}
- Evidence Submission: {{UPLOAD_PORTAL_LINK}}
- Mandatory Disclosure (Initial): {{UPLOAD_PORTAL_LINK}}

HOW WE WORK:
- All communication goes through your client portal. Check it regularly.
- If something urgent comes up, call the office — don't wait for a portal message in an emergency.
- Your attorney is [Angela R. Neave]. You'll hear from our team as your file moves forward.

We give you clarity, options, and control. That's our promise to you.

Welcome aboard.

– Neave Family Law Group, P.A.
{{FIRM_WEBSITE}}

---

**Email customization rules:**

- **DIY/Coaching only:** Replace Steps 2–4 with the specific deliverable or first session details.
- **Limited Scope (flat fee):** Add after Step 1:
  "As a reminder, your current agreement covers [specific scope]. If you need anything beyond this, just reach out — we can discuss add-on options."
- **Existing case / prior attorney:** Add:
  "If you have any documents, filings, or correspondence from your prior representation, please upload them to your portal right away — this helps us get up to speed quickly."
- **Urgent red flag present (relocation, DV, dissipation):** Do NOT include in email. Flag to attorney first. Attorney decides what to communicate and how.
- **Mediation Services:** Replace Steps 2–4 with mediation-specific scheduling and preparation language.

---

## Step 3: Deliver Both Outputs

1. Generate the Word doc (.docx) using the docx skill.
2. Present the doc for download.
3. Print the welcome email draft in chat, clearly labeled for staff to copy into the {{PM_SYSTEM}} portal.

Then tell staff:

NEXT STEPS:
1. Save [ClientLastName]_[CaseType]_CaseMemo_[Date].docx to the client's {{PM_SYSTEM}} matter under "Internal Memos."
2. Send the welcome email via the client portal.
3. Route the memo to [Angela R. Neave] for attorney review before any drafting begins.
4. Do not activate Russ's discovery workflow until the attorney confirms the discovery level.

---

## Firm Rules That Apply Here

1. Generate the Word doc. The memo is a file, not a chat message.
2. Do not fabricate facts. Use [PLACEHOLDER] in bold for anything not confirmed.
3. Service type determines everything. Flat fee = finite scope. Do not suggest work outside contracted scope without flagging it.
4. Intake is not clerical. It determines jurisdiction, case type, filing strategy, and billing. If facts are unclear, stop and ask.
5. Every case must have a next step, a deadline, and a clear owner. Angela R. Neave structures it. Marta Estevez builds it. Russ supports it. Angela R. Neave runs it.
6. Scope mismatch is a billing and ethics risk. Flag immediately.
7. Use PII placeholders: [CLIENT_NAME], [OPPOSING_PARTY], [CASE_NUMBER], [COUNTY] for all identifying info in docs.
8. Flag DCF, dependency, or injunction history immediately. These change strategy and require attorney input before work begins.
9. Discovery level must be set at intake. DIY and flat fee files get scoped-down or no discovery. No open-ended discovery on flat fee without an upsell conversation first.
10. This skill ends at the approved plan. Drafting begins in lal-drafting-advanced. Pass the full memo and attorney-confirmed plan as context when handing off.

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

