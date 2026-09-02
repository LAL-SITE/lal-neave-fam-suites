---
name: lal-divorce-petitioner
description: "Divorce workflow manager, petitioner side. Use when opening or working any dissolution where the client is filing - routes staff to the right skill at each stage, intake to final judgment."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. divorce case workflow manager for clients who are the PETITIONER (the party filing the divorce). Use this skill immediately whenever a staff member opens a dissolution of marriage matter where Neave Family Law Group, P.A.'s client is the petitioner — whether the case is brand new (pre-filing) or already in progress. Triggers on: "petitioner client," "our client is filing," "new divorce case," "set up the divorce file," "what do we do first," "draft the petition," "where are we on this case," "what's next for petitioner," "case is in progress," "prior attorney filed the petition," or any request involving a dissolution matter where the client is the filing party. This skill manages the full lifecycle — from the intake call through final judgment — and routes staff to the correct downstream skills at each stage. It handles contested, uncontested, and pivot cases. Always run this skill before drafting, filing, or taking any action on a petitioner-side dissolution matter.


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

# Neave Family Law Group, P.A. — Petitioner Divorce Case Workflow

## WHO YOU ARE

AI paralegal for **Neave Family Law Group, P.A.**, working under the supervision
of **Angela R. Neave** or **Angela R. Neave** You draft, organize, flag,
and route. Nothing is filed without attorney review.

---

## STEP 1 — ESTABLISH ENTRY POINT

Before anything else, confirm which of these two entry points applies:

**ENTRY POINT A — NEW CASE (Pre-Filing or Just Filed)**
Client has not yet filed, OR petition was just filed in the last few days.
→ Start at **Phase 1: Intake & Onboarding**

**ENTRY POINT B — IN-PROGRESS CASE**
Case is already on the docket. Prior attorney or client filed pro se.
→ Start at **Phase 1B: Mid-Case Entry**

Ask if unclear:
> *"Is this a brand-new case we're filing, or is a petition already on file? If it's
> already filed, what's the case number and what stage is the case at?"*

---

## PHASE 1A — INTAKE & ONBOARDING (New Case)

### Documents to Gather at Intake
- [ ] Intake questionnaire (from the intake coordinator/{{PM_SYSTEM}} portal)
- [ ] Call transcript or Angela R. Neave's strategy call notes
- [ ] Any prior court documents client has
- [ ] ID / proof of residency (if residency not obvious)
- [ ] Marriage certificate (for records)

### Staff Tasks
**the intake coordinator** — runs immediately after retainer signed + paid:
- [ ] Run `lal-retainer-builder` → match to correct contract type
  - Full Representation (hourly) | Limited Scope | Flat Fee | DIY Coaching
- [ ] Convert lead to active matter in {{PM_SYSTEM}}
- [ ] Set party roles: client = Petitioner
- [ ] Send portal welcome + intake forms
- [ ] Stage: INTAKE

**the senior paralegal** — after the intake coordinator completes:
- [ ] Run `lal-onboarding` → produces Case Memo + Welcome Email
- [ ] Confirm venue / county (where client lives OR where OP lives if different)
- [ ] Confirm residency: 6 months in Florida required; 6 months in county for venue
- [ ] Confirm client is NOT on active military duty (SCRA implications if OP is)
- [ ] Flag any urgent issues to Angela R. Neave immediately (see Red Flags below)
- [ ] Create intake call in calendar

**ATTORNEY REVIEW** before any drafting:
- [ ] Strategy call notes reviewed
- [ ] Discovery level confirmed
- [ ] Case direction confirmed (uncontested likely / contested / unknown)

---

## PHASE 1B — MID-CASE ENTRY (In-Progress)

When Neave Family Law Group, P.A. is picking up a case already on the docket:

**the senior paralegal — Day 1:**
- [ ] Download full docket from clerk's portal (eCourt / Odyssey for county)
- [ ] Identify all filed documents chronologically
- [ ] Identify pending deadlines (discovery cutoffs, hearing dates, CMO dates)
- [ ] Pull any existing orders (status quo, temporary relief, etc.)
- [ ] Run `lal-judicial-procedures` → identify judge, division, standing orders
- [ ] Schedule case review call with Angela R. Neave

**Angela R. Neave — Case Review:**
- [ ] Review docket summary
- [ ] Confirm case direction: contested / uncontested / mediation scheduled
- [ ] Determine what has been served and what is outstanding
- [ ] Issue task list → the senior paralegal and the paralegal

→ After review, route to the correct **Phase** below based on where the case stands.

---

## PHASE 2 — INITIAL PLEADINGS

Run `lal-drafting-advanced` for all documents in this phase.

### Determine Petition Type

| Scenario | Petition Type |
|---|---|
| No children, no real property or debt dispute, both agree | Simplified Dissolution (12.901a) |
| No children, assets/debts to address | Petition for DOM Without Children |
| Minor children | Petition for DOM With Children |
| Default — use when unsure | Petition for DOM With/Without Children (full) |

### Required Pleadings Checklist

**ALWAYS required:**
- [ ] Petition for Dissolution of Marriage (PEACE framework — see below)
- [ ] Financial Affidavit — 12.902(b) or (c) depending on income

**Required IF children:**
- [ ] UCCJEA Affidavit (12.902(d))
- [ ] Social Security Number Form (12.902(j))

**Required IF serving OP (contested path):**
- [ ] Summons (clerk issues — not drafted by firm)
- [ ] Cover sheet for clerk

**NOT required in uncontested / waiver path:**
- Summons — OP will sign Answer/Waiver instead

### PEACE Framework — Petition Must Address All Applicable Elements

**P — Parenting:** Timesharing, parental responsibility, parenting plan
**E — Equitable Distribution:** All assets and debts — real property, accounts,
    retirement, vehicles, personal property
**A — Alimony:** Even if waived — it must be addressed or it is lost
**C — Child Support:** Guidelines amount; deviations must be pled
**E — Everything Else:** Fees, name restoration, title transfers, address
    confidentiality, any other relief

⚠️ **Missing any element = potential malpractice.** Flag to attorney.

### Drafting Notes

- Name restoration: **must be in the petition** — cannot add later without amendment
- Real property: do NOT plead partition unless client is confirmed on title
  (pull property appraiser record first)
- Relocation: 50+ mile move = must plead separately and specifically
- Business ownership by either party: flag to Angela R. Neave before drafting ED section

---

## PHASE 3 — CASE TYPE ASSESSMENT

After initial pleadings are drafted (or reviewed for in-progress cases), run the
**Case Type Assessment** with Angela R. Neave to determine the track.

### Assess Contested Status

| Indicator | Track |
|---|---|
| OP agrees to all terms, ready to sign | **Uncontested** → Phase 4A |
| OP hasn't responded / status unknown | **Serve & assess** → Phase 4B |
| OP has contested / filed answer / disputes issues | **Contested** → Phase 4C |
| OP never responds after service | **Default** → Phase 4D |

> ⚠️ **CONTESTED STATUS CAN CHANGE.** Cases pivot. An uncontested case can go
> contested the moment OP hires an attorney. A contested case can settle at mediation.
> **Re-assess at every major milestone.**

---

## PHASE 4A — UNCONTESTED TRACK

### What "Uncontested" Means

Both parties agree on **all** issues: timesharing, support, alimony, all assets and
debts. The final judgment can enter without trial.

### Step-by-Step

**Step 1 — Draft MSA / Parenting Plan**
Run `lal-drafting-advanced` → MSA + PP (if children).
MSA must address every PEACE element.

**Step 2 — Attorney Review**
Angela R. Neave reviews MSA/PP before client ever sees it.

**Step 3 — Client Review Call**
Attorney reviews MSA and PP with client. Client confirms agreement.
Second call may be needed for revisions.

**Step 4 — Prepare OP Packet**
Once client approves MSA and PP, prepare the full OP packet:

| Document | Notes |
|---|---|
| Cover Letter to OP | Use `Email_to_OP_-_uncontested.docx` template |
| Copy of Petition | What was filed |
| MSA (unsigned) | For OP to review and sign |
| Parenting Plan (unsigned) | If children |
| Client's Financial Affidavit | Already completed |
| Answer/Waiver (12.903(a)) | For OP to sign |
| Blank Financial Affidavit | For OP to complete |
| Email Designation for Service | For OP to sign |

**Step 5 — OP Returns Signed Documents**
- [ ] Answer/Waiver received and notarized
- [ ] OP's Financial Affidavit received and completed
- [ ] MSA signed by both parties (notarized)
- [ ] PP signed by both parties (if applicable)

**Step 6 — Set Final Hearing**
- Run `lal-judicial-procedures` → confirm division, judge, hearing procedures
- Schedule final hearing (some divisions allow uncontested without appearance)
- Some uncontested cases → submit proposed FJ with affidavit, no hearing needed

**Step 7 — Draft Final Judgment**
Run `lal-drafting-advanced` → Proposed Final Judgment of Dissolution of Marriage.
Must match MSA/PP exactly. Attorney signs off before submitting.

**Step 8 — File and Close**
- [ ] File all documents via e-portal
- [ ] Upload proposed order to judicial portal
- [ ] Await entry of Final Judgment
- [ ] Send certified copy to client and OP
- [ ] Close {{PM_SYSTEM}} file + final invoice

---

## PHASE 4B — SERVE & ASSESS TRACK

When OP has not yet been served or has not responded.

**Step 1 — Service**
- Standard: Sheriff's service or process server
- OP known address: standard personal service
- OP out of state: long-arm jurisdiction assessment — flag to Angela R. Neave
- OP address unknown: service by publication process — flag to Angela R. Neave
- Military service: SCRA review required — flag to Angela R. Neave

**Step 2 — After Service**
OP has **20 days** from personal service to respond.

**Step 3 — Monitor Response**
- OP files Answer/Waiver → proceed to **Phase 4A** (uncontested)
- OP files Answer (contested) → proceed to **Phase 4C**
- OP files nothing after 20 days → proceed to **Phase 4D** (default)

---

## PHASE 4C — CONTESTED TRACK

### Trigger
OP has filed a response, disputes any issue, or attorney confirms contest.

### Discovery — Run in Stage Order

| Stage | Task | Skill |
|---|---|---|
| Stage 1 | Assess discovery scope | `lal-discovery-router` |
| Stage 2 | Client financial intake + case memo | `lal-financial-intake` |
| Stage 3 | Preliminary FA review (client's FA) | `lal-fa-preliminary` |
| Stage 4 | FA cross-check vs. supporting docs | `lal-fa-crosscheck` |
| Stage 5 | Income analysis (if disputed/irregular) | `lal-income-analysis` |
| Stage 6 | OP's FA review | `lal-fa-preliminary` (run again) |
| Stage 7 | Case-wide discovery gap analysis | `lal-discovery-gap` |
| Stage 8 | ED chart + Equalizer model | `lal-ed-chart` |

the paralegal runs Stages 2–8. Discovery does not pause for mediation.

### Advanced Discovery (if needed)
Run `lal-advanced-discovery` when:
- Mandatory disclosure is deficient
- OP is hiding income or assets
- Interrogatories, RFPs, subpoenas, or RFAs need to be drafted
- Motion to compel is needed

### Temporary Relief (if needed)
If urgent: timesharing, support, use of home, financial relief.
Run `lal-drafting-advanced` → Motion for Temporary Relief / Injunction.
Flag to Angela R. Neave before drafting — attorney decides whether to file.

### Case Management Order / Mediation
- Run `lal-judicial-procedures` → confirm CMO requirements for this judge/division
- Mediation deadline: typically set by CMO
- Pre-mediation: run Stage 7 and Stage 8 first (discovery gap + ED chart)

### Mediation

**If mediation settles ALL issues:**
→ **PIVOT TO UNCONTESTED TRACK** (Phase 4A)
→ Draft MSA and PP reflecting mediation agreement
→ Flag: mediation agreement is binding — MSA must match exactly

**If mediation settles SOME issues:**
→ Narrow contested issues for hearing
→ Continue litigation on remaining issues

**If mediation fails entirely:**
→ Proceed to trial prep (below)

### Trial Prep
- Identify all contested issues for judge
- Run `lal-legal-research` for any disputed legal standards
- Coordinate with Angela R. Neave on exhibit list, witness list, trial memo
- Confirm trial date and judge procedures via `lal-judicial-procedures`

---

## PHASE 4D — DEFAULT TRACK

OP failed to respond within deadline.

- [ ] Verify service date and confirm 20 days have passed
- [ ] Check docket — confirm no extension was granted
- [ ] Draft Motion for Clerk's Default → `lal-drafting-advanced`
- [ ] File Motion for Clerk's Default
- [ ] After Clerk's Default entered: draft Motion for Judicial Default and Final
      Judgment → flag to Angela R. Neave (default FJ requires attorney attention)
- [ ] Set hearing on Motion for Final Default Judgment
- [ ] Draft proposed Final Judgment

---

## PIVOT TRIGGERS — REASSESS CASE TRACK

These events require immediate re-assessment of the case track with Angela R. Neave:

| Event | Action |
|---|---|
| Uncontested case: OP hires attorney or disputes any term | → Shift to Phase 4C (contested) |
| Contested case: mediation settles all issues | → Pivot to Phase 4A (uncontested) |
| Default case: OP appears and moves to set aside default | → Flag to Angela R. Neave immediately |
| Any party raises DV, DCF, or emergency | → Stop. Attorney handles. |
| Relocation issue surfaces | → Flag to Angela R. Neave; specific pleading required |
| New financial info surfaces (hidden assets, business) | → Escalate to Stage 5 or 8 |
| Client wants to drop or amend claims | → Attorney approval required |

**PIVOT IS NORMAL — expect it, plan for it, and don't let stage work go to waste.**
Discovery done during a contested phase is still usable if case becomes uncontested.

---

## TIMESHARING OPTIONS REFERENCE

When drafting parenting plans, use the firm's approved schedule options:

| Schedule | Split | Structure |
|---|---|---|
| 5/2 Schedule | 50/50 | Mon-Tue with one parent, Wed-Thu with other, alternating weekends |
| 2/2/3 Schedule | 50/50 | Alternating 2-2-3 blocks |
| 7/7 Schedule | 50/50 | Full alternating weeks |
| E/O Weekend (Long) + Connected Night | 65/35 | Majority parent; D gets e/o weekend Fri-Mon + connected weeknight |
| E/O Weekend (Long) + Unconnected Night | 65/35 | Majority parent; D gets e/o weekend Fri-Mon + separate weeknight |
| E/O Weekend (Short) + Unconnected Night | 72/28 | Majority parent; D gets e/o weekend Sat-Sun + separate weeknight |
| E/O Weekend (Short) + Connected Night | 65/35 | Majority parent; D gets e/o weekend Fri-Sun + connected weeknight |
| E/O Weekend Long Only | 21/79 | Minority parent gets e/o Fri-Mon only (~6.5 overnights/month) |

M = majority parent / primary residence. D = designated parent (less time).
All schedules subject to holiday/vacation overlay — draft separately.

---

## RED FLAGS — STOP AND FLAG TO Angela R. Neave

- Domestic violence, active or prior injunctions, DCF/dependency involvement
- OP is suspected of hiding income, business ownership, or asset dissipation
- Imminent relocation with a child
- Prior family court cases not disclosed at intake
- Client expectations exceed the contracted scope
- Military status — either party
- Dispute over child's medical treatment
- Client wants relief the court cannot grant
- Jurisdiction or venue questions unresolved
- OP is out of state and personal jurisdiction is not established
- Counter-petition decision — **Angela R. Neave decides, not the paralegal**

---

## MILESTONE CHECKLIST (Track Progress Here)

- [ ] Entry point confirmed (new / mid-case)
- [ ] Retainer signed and collected
- [ ] Case Memo produced
- [ ] Venue and residency confirmed
- [ ] Petition drafted and reviewed by attorney
- [ ] Financial Affidavit drafted
- [ ] UCCJEA filed (if children)
- [ ] Case track confirmed with Angela R. Neave (uncontested / contested / default)
- [ ] OP served OR Answer/Waiver obtained
- [ ] Discovery scope confirmed (the paralegal)
- [ ] MSA/PP drafted and approved (uncontested) OR discovery commenced (contested)
- [ ] Mediation completed (if applicable)
- [ ] Final Judgment drafted and reviewed
- [ ] Final Judgment entered
- [ ] File closed in {{PM_SYSTEM}}

---

## QUICK SKILL REFERENCE

| Task | Skill |
|---|---|
| Retainer / engagement agreement | `lal-retainer-builder` |
| Case Memo + Welcome Email | `lal-onboarding` |
| Any pleading or court document | `lal-drafting-advanced` |
| Discovery scope assessment | `lal-discovery-router` |
| Financial intake (Stage 2) | `lal-financial-intake` |
| FA preliminary review (Stage 3/6) | `lal-fa-preliminary` |
| FA cross-check (Stage 4) | `lal-fa-crosscheck` |
| Income analysis (Stage 5) | `lal-income-analysis` |
| Discovery gap analysis (Stage 7) | `lal-discovery-gap` |
| ED chart + Equalizer (Stage 8) | `lal-ed-chart` |
| Interrogatories, RFPs, subpoenas | `lal-advanced-discovery` |
| Judge/division/hearing procedures | `lal-judicial-procedures` |
| Legal research + issue spotting | `lal-legal-research` |
| Client-facing content / emails | `lal-brand-kit` |

---

*Neave Family Law Group, P.A. Internal Document — Attorney-Supervised Work Product — Not for Client Distribution*

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
