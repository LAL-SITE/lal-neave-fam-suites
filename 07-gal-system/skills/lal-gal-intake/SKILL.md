---
name: lal-gal-intake
description: "GAL case intake. Use when a new GAL case opens or an Order of Appointment arrives - produces the Case Intake Profile all other GAL skills depend on. Run first on every new matter."
---

## When to use this skill (full trigger reference)

GAL Case Intake processor for Florida Guardian ad Litem matters. Use this skill immediately whenever a new GAL case is opened, an Order of Appointment is uploaded or described, case documents are provided for a new matter, or the user says anything like "I have a new case," "I was just appointed," "here is my appointment order," or "set up a new case file." Also triggers when the user uploads pleadings, a contract, or any initial case documents and asks you to organize or analyze them. This skill produces the structured Case Intake Profile that all other GAL skills depend on — always run it first on any new matter before drafting reports, chronologies, or investigation plans.


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

# GAL Case Intake Skill

## Purpose

This skill processes the initial documents in a new GAL matter and produces a structured
**Case Intake Profile**. That profile becomes the master reference for all downstream
work: investigation tracking, report drafting, collateral interviews, and motions.

The Order of Appointment controls everything. This skill extracts, organizes, and flags
everything the Order establishes — and everything it leaves open.

---

## Triggering This Skill

Run this skill when:
- A new GAL case is opened
- An Order of Appointment (or Agreed Order) is provided
- Initial case documents are uploaded (pleadings, contract, prior orders)
- User says "new case," "I was just appointed," "set up the case file," or similar

---

## Step 1 — Identify and Read Available Documents

Before processing, inventory what has been provided. Check for:

1. **Order of Appointment** (required — controls everything)
2. **GAL Contract / Acceptance of Appointment**
3. **Petition for Dissolution or Modification** (or other initiating pleading)
4. **Pending motions** filed by either party
5. **Prior orders** (temporary, injunctive, or prior GAL orders)
6. **Any existing GAL reports** from a prior appointment

If the Order of Appointment is NOT present, stop and ask for it before proceeding.
Do not generate a profile without it.

---

## Step 2 — Extract Core Case Data

From the Order of Appointment and available documents, extract the following. If any
field cannot be confirmed from the documents, mark it **[NOT FOUND — CONFIRM]**.

### A. Case Identification
- Case number
- Court / Division
- County and Judicial Circuit
- Judge assigned (if stated)
- Date of appointment order
- Date GAL accepted appointment (if Acceptance filed)

### B. The Child(ren)
For each child:
- Full name (used internally only — initials in all court filings)
- Date of birth / Age
- Any special needs, medical conditions, or developmental concerns noted in the order
- Current living situation (if stated)

### C. The Parties
- Petitioner name and role (Mother / Father / Other)
- Respondent name and role
- Petitioner's counsel (name, firm, email if available)
- Respondent's counsel (name, firm, email if available)
- Any self-represented parties

### D. Pending Proceedings
List all pending matters identified in the order or pleadings:
- Primary case (dissolution, modification, paternity, etc.)
- Any companion cases (DCF, injunction, criminal — note case numbers if stated)
- Next scheduled hearing (date, time, purpose)
- Report deadline (10 days prior to hearing unless waived — note if waived)

---

## Step 3 — Extract Scope of Appointment

This is the most critical section. The scope controls what the GAL is authorized to do.

### A. Issues the GAL Is Appointed to Address
List each issue explicitly stated in the order. Common examples:
- Timesharing schedule
- Parental responsibility (sole vs. shared)
- Child's school / educational placement
- Child's therapy or mental health treatment
- Relocation
- Domestic violence allegations
- Substance use allegations
- Specific allegations of abuse or neglect
- Other (state exactly as written)

### B. Scope Limitations
Note any explicit restrictions in the order:
- Geographic limits
- Records the GAL may or may not access
- Persons the GAL may or may not contact
- Any specific exclusions

### C. Scope Gaps / Flags
Flag any issues that appear relevant based on the pleadings but are NOT addressed in
the Order of Appointment. These are not resolved here — they are flagged for the GAL
to confirm with the court or counsel.

> ⚠️ SCOPE FLAG: [Issue] is raised in [document] but is not addressed in the Order of
> Appointment. Confirm whether this falls within the appointed scope before investigating.

---

## Step 4 — Identify Allegations and Stated Issues

From all available documents, extract and categorize every allegation or stated issue.
Apply strict source tracking and categorization per the issue-categories taxonomy:

| Category | Label to Use |
|----------|-------------|
| Unverified claim by a party | ALLEGATION |
| Statement made by a person | REPORTED STATEMENT |
| Document content | DOCUMENTED |
| Confirmed by multiple sources | CORROBORATED |
| Disputed between parties | DISPUTED |
| Not yet known | UNKNOWN / MISSING |

Do NOT convert allegations into facts. Do NOT adopt either party's narrative.

For each allegation or issue identified:
- State the allegation in neutral terms
- Identify the source
- Apply the correct category label
- Note if there is any corroboration or contradiction already present in the documents

---

## Step 5 — Generate Initial Investigation Checklist

Based on the scope of appointment and the allegations identified, generate a starting
investigation checklist. This is the minimum required based on what is currently known.

### Required Contacts (Standard)
- [ ] Mother — initial interview scheduled / pending
- [ ] Father — initial interview scheduled / pending
- [ ] Child(ren) — interview pending (note age and developmental considerations)
- [ ] Both home visits — pending

### Records to Request (Based on Allegations)
Generate a targeted list based on what the order and pleadings raise:
- [ ] School records (current and prior school years)
- [ ] Medical records (pediatrician, specialists)
- [ ] Mental health records (therapist, psychiatrist)
- [ ] DCF records (if abuse/neglect alleged)
- [ ] Law enforcement records (if DV or criminal matters involved)
- [ ] Substance abuse evaluation / treatment records (if substance use alleged)
- [ ] Prescription monitoring records (if prescription abuse suspected)

### Collateral Sources to Contact (Initial)
List any collaterals already identified in the documents:
- Therapists named
- Teachers or school counselors named
- Family members referenced
- Prior parenting coordinators
- Other professionals named

### Motions / Orders to Review
- [ ] Any pending motions that may affect scope or investigation
- [ ] Any prior temporary orders governing timesharing (note current arrangement)

---

## Step 6 — Generate the Case Intake Profile

Compile all of the above into a single, structured **Case Intake Profile**:

---

### CASE INTAKE PROFILE
**Case:** [Case Number] | **Court:** [Circuit / Division / County] | **Date Generated:** [Today's Date]

---

**CHILDREN**
[Name | DOB | Age | Notes — full names here for internal use only; initials in all filings]

**PARTIES**
[Petitioner | Respondent | Counsel for each]

**APPOINTMENT**
- Order Date:
- Acceptance Filed:
- Report Deadline:
- Hearing Date / Purpose:

**SCOPE OF APPOINTMENT**
Issues Appointed:
1. [List each]

Scope Limitations:
- [Any explicit limits or "None identified"]

⚠️ Scope Flags:
- [Any gaps — or "None identified"]

**PENDING PROCEEDINGS**
- [List all]

**ALLEGATIONS / ISSUES IDENTIFIED**

| Issue | Source | Category |
|-------|--------|----------|
| [Issue] | [Source] | [Category] |

**INITIAL INVESTIGATION CHECKLIST**
- [ ] [Item]

**IMMEDIATE FLAGS**
[Any urgent issues requiring immediate attention — safety concerns, upcoming hearings,
scope conflicts, missing documents]

---

## Output Standards

- Never invent facts. If a field cannot be confirmed, mark it [NOT FOUND — CONFIRM].
- Use neutral language throughout.
- Allegations remain allegations until corroborated.
- Every item in the profile must trace back to a specific document.
- Flag scope issues — do not resolve them.
- This profile is a working document. It will be updated as the investigation develops.
- Children's full names are for the intake profile only — initials in all court filings.

---

## Reference Files

See `references/issue-categories.md` for the full issue tracking taxonomy and
classification labels used across all GAL skills in this project.

See `references/fla-stat-61403-factors.md` for the Florida §61.13 best interest factors
that will govern the final analysis — useful to consult when categorizing initial issues.

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

