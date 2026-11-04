---
name: lal-gal-chronology
description: "GAL chronology builder. Use to build, update, or analyze a case timeline - organizes events from all sources into a source-attributed, pattern-revealing chronology that feeds the report."
---

## When to use this skill (full trigger reference)

GAL Chronology Builder for Florida Guardian ad Litem matters. Use this skill whenever the GAL needs to build, update, or analyze a case timeline. Triggers on any of the following: "build the chronology," "put together a timeline," "organize the case history," "I need a timeline of events," "add this to the chronology," "what does the timeline show," "build the background section," "organize what happened," "I need to see the pattern," "update the timeline with this," "draft the procedural history," or any request to sequence, organize, or analyze events across time in a GAL case. Also triggers before report drafting — the chronology feeds the report's Background and Procedural History sections directly. Run this skill whenever raw case information from multiple sources needs to be organized into a coherent, source-attributed, pattern-revealing timeline.


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

# GAL Chronology Builder

## Purpose

This skill takes raw case information from any source — interview notes, pleadings,
records, exhibit logs, source summaries — and builds a structured, source-attributed,
analytically annotated **Case Chronology**.

The chronology serves three functions:
1. **Factual record** — the verified timeline of what happened and when
2. **Pattern detection tool** — reveals escalation, recurrence, and before/after
   behavioral shifts that are invisible when events are viewed in isolation
3. **Report foundation** — feeds directly into the Background, Procedural History,
   and Findings sections of every GAL report

The chronology is a working document. It is built incrementally and updated as
new information arrives.

---

## Two Operating Modes

### MODE A — BUILD / ADD
New information is provided. Add entries, update the chronology, flag patterns.

### MODE B — ANALYZE / REPORT
A chronology exists. Generate pattern analysis, draft the Background section,
or identify gaps and inconsistencies in the timeline.

Determine mode from context. If information is being provided → MODE A.
If analysis or drafting is requested → MODE B. If both → do both.

---

## Step 1 — Entry Classification

Every piece of information added to the chronology must be classified before
it is entered. Use the status labels from `references/event-status-labels.md`.

### Primary Status Labels

| Label | When to Use |
|-------|-------------|
| **DOCUMENTED** | Confirmed by a record, court filing, or direct GAL observation |
| **REPORTED** | Stated by a source; not independently confirmed |
| **ALLEGED** | Claimed by one party; disputed or unverified |
| **CORROBORATED** | Reported by multiple independent sources |
| **DISPUTED** | Sources give conflicting accounts |
| **INFERRED** | Logically follows from documented facts |
| **UNKNOWN** | Cannot be confirmed from available sources |

### Secondary Labels (add as applicable)
`HIGH SIGNIFICANCE` | `CHILD PRESENT` | `CHILD INVOLVED` | `COURT-ORDERED`
`COMPLIANCE — YES` | `COMPLIANCE — NO` | `ESCALATION` | `PROTECTIVE` | `REQUIRES FOLLOW-UP`

### Event Categories (tag each entry)
- `LEGAL` — filings, orders, hearings
- `PARENTING` — timesharing, exchanges, compliance
- `CONFLICT` — incidents between parties, communications
- `CHILD` — child's behavioral, academic, medical, developmental events
- `MENTAL HEALTH` — treatment, evaluations, episodes (parent or child)
- `SUBSTANCE` — substance use incidents, testing, treatment
- `DV` — domestic violence incidents, injunctions, law enforcement
- `PROFESSIONAL` — therapy, school, medical provider contacts and records
- `GAL` — investigation activities (interviews, home visits, record requests)
- `OTHER` — anything not covered above

---

## Step 2 — Entry Format

```
DATE: [MM/DD/YYYY] or [Approx. Month/Year] or [Date Unknown]
STATUS: [PRIMARY LABEL] + [SECONDARY LABEL(S)]
CATEGORIES: [Tag(s)]
EVENT: [Neutral, one-to-three sentence description]
SOURCE: [Specific attribution — document, record, or person]
CROSS-REF: [Any related entry — or "None"]
NOTES: [GAL analytical note if any — clearly labeled as such]
```

**Date conventions:**
- Exact: `MM/DD/YYYY`
- Month/year: `Month YYYY` (mark APPROXIMATE)
- Year only: `YYYY` (mark APPROXIMATE)
- Unknown: `Date Unknown`
- Relative: `Before [event]` / `After [event]` / `Approx. [time period]`

Never fabricate date precision that does not exist.

**Source attribution format:**
- Court filing: `Per [document title] filed [date]`
- Record: `Per [record type] from [provider] dated [date]`
- Party: `Per Mother/Father, interview dated [date]`
- Collateral: `Per [Name, role], contact dated [date]`
- Child: `Per child, [context — home visit / interview], [date]`
- GAL observation: `GAL directly observed, [date and setting]`
- Multiple sources: list each separately

---

## Step 3 — Chronology Sections

Organize entries into four sections. Events may fall in multiple sections —
place them in the most relevant one and cross-reference.

### SECTION 1 — PRE-LITIGATION HISTORY
Events predating any court filing.
- Relationship formation, marriage / cohabitation
- Children born
- Significant pre-litigation events (moves, job changes, health events)
- Onset of conflict and deterioration of relationship
- Separation date

### SECTION 2 — LEGAL / PROCEDURAL HISTORY
All court proceedings and legal events.
- Original petition filed
- Temporary orders
- Each significant hearing
- Prior GAL appointments (if any)
- Prior parenting coordinators
- DCF investigations (companion cases)
- DV/injunction cases
- This GAL's appointment
- GAL investigation activities (logged here under `GAL` tag)

### SECTION 3 — PARENTING AND CONFLICT HISTORY
Co-parenting relationship and conflict events.
- Parenting plan changes
- Timesharing compliance and violations
- Communication incidents
- Interference with child-parent relationship
- Third-party involvement in conflict

### SECTION 4 — CHILD HISTORY
Events centered on each child's experience and functioning.
- Developmental milestones and concerns
- School history (school changes, academic performance, behavioral issues)
- Medical history (relevant diagnoses, treatments)
- Therapy / mental health treatment
- Behavioral pattern changes (flag before/after context)
- Child's stated preferences (with date and context)
- Child's disclosures (with date, setting, and source)

---

## Step 4 — Pattern Detection (Run on Every Build or Update)

After entries are organized, run all pattern checks. Each check produces a
finding or "No pattern identified." These are observations — not conclusions.

### P1 — ESCALATION
Are incidents increasing in frequency, severity, or proximity to the children?
→ Flag any category where the pattern is worsening.

### P2 — BEFORE / AFTER BEHAVIORAL SHIFTS
Are there child behavioral changes that correspond to identifiable case events?
→ Look for correlation between child behavior and contact with a specific parent,
  litigation events, or custody changes.
⚠️ Correlation is not causation. Document the pattern; do not state the cause.
Language: *"A pattern is noted: [child behavior] appears in records to have [increased /
emerged] during the period when [event]. The GAL notes this correlation for further investigation."*

### P3 — RECURRENCE
For mental health and substance concerns: is this a new onset or a recurrence?
- Establish first documented episode
- Identify any intervening period of stability
- Note whether treatment was continuous, interrupted, or absent

### P4 — LITIGATION CORRELATION
Do incidents cluster around litigation events (hearings, evaluations, report deadlines)?
⚠️ Document the correlation only. Do not characterize motive.

### P5 — CONVERGENCE / DIVERGENCE
Where do multiple independent sources agree? Where do they conflict?
- Flag events where Mother, Father, and a collateral all independently describe the same sequence
- Flag events where party accounts are irreconcilable
- Note what records favor which account

### P6 — MISSING TIMELINE SEGMENTS
Are there significant time gaps with no documented events?
- Flag any gap longer than 6 months in a high-conflict history as a potential investigation gap

### P7 — PROVIDER TURNOVER
How many therapists, evaluators, and other professionals have cycled through?
- Note any provider who ended involvement due to conflict with a party
- High turnover is itself a pattern worth noting

---

## Step 5 — Output Formats

### FORMAT A — FULL WORKING CHRONOLOGY
All entries in all sections, full source attribution, status labels, categories,
cross-references, and pattern analysis.
Use: GAL working file across the investigation.

### FORMAT B — CONDENSED BACKGROUND NARRATIVE
Prose version suitable for insertion into the Background and Procedural History
sections of a GAL report.
- Past tense, neutral tone
- Documented facts stated directly; allegations attributed to source
- Organized chronologically within paragraphs
- No pattern analysis (analysis belongs in Findings)
- Write as though the reader knows nothing about the case except what is stated here

Opening language:
> *"The parties were [relationship status] for [X] years prior to separation.
> [Children — use initials] were born to the parties on [dates].
> The parties separated in [approximate date]. The following procedural and
> factual history is relevant to the GAL's investigation."*

### FORMAT C — PATTERN SUMMARY MEMO
Standalone analytical memo for GAL's internal use before drafting findings.
- Lists each active pattern by type (P1–P7)
- Identifies which §61.13 factors each pattern bears on
- Lists evidence supporting each pattern finding
- Lists what additional investigation each pattern warrants

---

## Step 6 — Update Protocol

Each time new information is added:
1. Classify each new event by status label and category
2. Insert at correct chronological position
3. Update any existing entries now corroborated, disputed, or clarified
4. Re-run affected pattern checks
5. Update Cross-ref fields for newly connected entries
6. Note the date of the update at the top of the chronology

---

## Critical Rules

- **Never invent dates.** Approximate rather than fabricate precision.
- **Never convert allegations to facts.** Status labels are permanent until corroboration is documented.
- **Never merge disputed accounts.** Contested events get a DISPUTED entry capturing both versions, attributed separately.
- **Source every entry.** An unsourced chronology entry cannot be used in a report.
- **Pattern observations are not findings.** Use "A pattern is noted" language, not "The evidence establishes."
- **Write for a new judge.** Every reader must understand the timeline without outside knowledge.

---

## Reference Files

See `references/event-status-labels.md` for the complete label taxonomy with
dating conventions, source attribution formats, and chronology section organization.

See `references/pattern-analysis-guide.md` for detailed guidance on each pattern
check, including documentation templates and behavioral specificity standards.

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

