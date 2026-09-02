---
name: lal-disco-tracker
description: "Running discovery tracker. Use whenever documents arrive, a stage completes, or disclosure is served or received - records what's been produced and what's outstanding, both parties."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. discovery document tracker for the paralegal. Use this skill immediately whenever the paralegal needs to create, update, or review the running discovery tracker for a matter. Triggers on: "update the tracker," "add these docs to the tracker," "new documents came in," "what's been produced," "what's still missing," "update the disco log," "tracker needs updating," "log these documents," "what has the OP produced," "what have we produced," "is our disclosure complete," "update the discovery log," or any request to record, review, or report on what has been produced or is still outstanding in a Florida family law discovery matter. This is a running document — the paralegal updates it every time new documents arrive, a stage is completed, or disclosure is served or received. It lives in the NOTES folder in {{DMS}} for the matter. Always update the tracker before running any downstream discovery stage skill and before QC runs. Assign to the paralegal.


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

# Neave Family Law Group, P.A. Discovery Tracker
## Staff Lane: the paralegal (default lane — anyone may run this skill)
## Type: Running Document — Updated at Every Stage and Document Event

This is the matter's single source of truth for discovery document status.
the paralegal creates it when the matter opens for discovery and updates it every time
documents arrive, a stage completes, disclosure is served, or a deficiency
is identified. It lives in the NOTES folder in {{DMS}} and is referenced
by every downstream discovery skill.

---

## WHEN TO UPDATE THIS TRACKER

the paralegal updates the tracker at every one of the following events — not just
at stage completion:

- New documents arrive via {{UPLOAD_PORTAL}} into {{DMS}}
- Client produces any disclosure document
- Opposing party serves any disclosure document
- A stage skill produces output (Stage 2 through Stage 8)
- A deficiency letter is sent or received
- A supplemental production is received
- Mandatory disclosure deadline passes (whether met or not)
- Any document is identified as missing, partial, or disputed

Do not wait until a stage is complete to update. The tracker is a live log.

---

## TRACKER FORMAT

The tracker is a single running document saved as:

`[MatterName]_DISCO_TRACKER_[DateOpened].md`

Saved to: **{{DMS}} → [Matter Folder] → NOTES**

the paralegal opens the existing tracker and adds to it — she does not replace it.
Each update is appended with a date stamp. The document grows as the matter
progresses.

---

## SECTION 1 — CASE HEADER

Created once when the tracker opens. Updated if case details change.

```
DISCOVERY TRACKER
Matter: [Matter Name as in {{PM_SYSTEM}}]
Case No.: [If known]
Court: [County] County, [Circuit] Circuit
Case Type: [Dissolution / Paternity / Modification / Other]
Our Client: [First Name] [Last Name] — [Petitioner / Respondent]
Opposing Party: [First Name] [Last Name] — [Petitioner / Respondent]
Opposing Counsel: [Name / Firm if known]

Mandatory Disclosure Due — Client: [Date — 45 days from service]
Mandatory Disclosure Due — OP: [Date — 45 days from service]
Tracker Opened: [Date]
Last Updated: [Date — update every session]
```

---

## SECTION 2 — MANDATORY DISCLOSURE STATUS

One row per Rule 12.285 category. Updated each time documents arrive.
the paralegal updates STATUS and NOTES columns only — never deletes rows.

| # | 12.285 Category | Client Status | Client Notes | OP Status | OP Notes |
|---|---|---|---|---|---|
| 1 | Financial Affidavit (Long or Short Form) | | | | |
| 2 | Federal Tax Returns — Past 3 Years (All Attachments, Schedules, Worksheets) | | | | |
| 3 | State / Gift / Foreign Tax Returns — Past 3 Years | | | | |
| 4 | W-2s — Most Recent Year | | | | |
| 5 | 1099s — All Types | | | | |
| 6 | K-1s | | | | |
| 7 | Pay Stubs / Evidence of Earned Income — 6 Months Preceding Compliance | | | | |
| 8 | Checking / Savings / All Other Account Statements — 12 Months (+ Canceled Checks & Registers) | | | | |
| 9 | Investment / Brokerage Statements — 12 Months | | | | |
| 10 | Retirement / Deferred Comp Statements — Most Recent + 12 Months (+ Summary Plan Description) | | | | |
| 11 | Deeds — All Real Property | | | | |
| 12 | Mortgage Statement — Most Recent | | | | |
| 13 | Real Estate Tax Bill — Most Recent | | | | |
| 14 | Life Insurance Statements — Cash Value Policies | | | | |
| 15 | Vehicle Titles | | | | |
| 16 | Loan Applications / Financial Statements / Credit Reports — Prior 24 Months | | | | |
| 17 | Credit Card / Charge Account Statements — 24 Months | | | | |
| 18 | Business Tax Returns — 3 Most Recent Years (if any ownership or interest) | | | | |
| 19 | Business Financials — P&L, Balance Sheet | | | | |
| 20 | Business Agreement — Corporate / LLC / Partnership | | | | |
| 21 | Virtual Currency Statements — 12 Months + Current Holdings List | | | | |
| 22 | Income Source Statement — 6 Months (if not shown on pay stubs) | | | | |
| 23 | Premarital / Marital Agreements + Existing Support Orders | | | | |

**Status Values:**
- **Complete** — All required documents produced, dates confirmed
- **Partial** — Some documents produced, specific gaps noted in Notes column
- **Missing** — No documents produced for this category
- **N/A** — Not applicable to this party (note the reason)
- **Disputed** — Party claims produced; we dispute completeness or accuracy

---

## SECTION 3 — DOCUMENT LOG

Running log of every document received. the paralegal adds a row each time a
document arrives. Never delete rows — strike through superseded entries
if a corrected version arrives.

| Date Received | Party | Document Name (renamed per Neave Family Law Group, P.A. convention) | 12.285 Category | {{DMS}} Location | Notes |
|---|---|---|---|---|---|
| | | | | DISCO-CLIENT or DISCO-OP / [Subfolder] | |

---

## SECTION 4 — STAGE COMPLETION LOG

the paralegal logs each stage as it completes and clears QC.

| Stage | Description | Date Completed | QC Result | Sent To | Notes |
|---|---|---|---|---|---|
| Intake Prep | Document audit, rename, sort | | Pass / Flagged | the senior paralegal | |
| Stage 2 | Case intake and pleadings memo | | Pass / Flagged | the senior paralegal | |
| Stage 3 | Client FA preliminary review | | Pass / Flagged | the senior paralegal | |
| Stage 4 | Client FA crosscheck | | Pass / Flagged | the senior paralegal | |
| Stage 5 | Client income analysis | | Pass / Flagged / N/A | the senior paralegal | |
| Stage 3/6 | OP FA preliminary review | | Pass / Flagged | the senior paralegal | |
| Stage 4/6 | OP FA crosscheck | | Pass / Flagged | the senior paralegal | |
| Stage 5/6 | OP income analysis | | Pass / Flagged / N/A | the senior paralegal | |
| Stage 7 | Case-wide gap analysis | | Pass / Flagged | Angela R. Neave / the senior paralegal | |
| Stage 8 | ED chart | | Pass / Flagged | Angela R. Neave / the senior paralegal | |
| Stage 8B | Equalizer | | Pass / Flagged | Angela R. Neave / the senior paralegal | |

---

## SECTION 5 — DEFICIENCY AND ENFORCEMENT LOG

the paralegal logs every deficiency letter sent, every supplemental production
received, and every enforcement action taken.

| Date | Action | Party | Details | Response Due | Response Received |
|---|---|---|---|---|---|
| | Deficiency Letter Sent | | Specific items listed | | |
| | Supplemental Production Received | | Items received | | |
| | Motion to Compel Filed | | | | |
| | Order on Motion to Compel | | | | |

---

## SECTION 6 — OUTSTANDING ITEMS LIST

the paralegal maintains a running list of what is still needed. Updated every
session. Resolved items are marked RECEIVED with the date — not deleted.

```
OUTSTANDING AS OF [DATE]:

CLIENT — [First Name]:
[ ] [Specific item missing — e.g., "Bank statements BofA acct ending 4521 — Jan-Mar 2025"]
[ ] [Next item]

OPPOSING PARTY — [First Name]:
[ ] [Specific item missing]
[ ] [Next item]

DEFICIENCY LETTERS PENDING RESPONSE:
[ ] Sent [Date] — Response due [Date] — Items: [Brief description]

NOTES FOR the senior paralegal / Angela R. Neave:
[Any item the paralegal cannot resolve herself — flags for attorney attention]
```

---

## HOW the paralegal UPDATES THE TRACKER IN COWORK

**Opening an existing tracker:**
the paralegal opens Cowork, navigates to the matter's NOTES folder in {{DMS}},
opens the existing tracker file, and makes additions. She does not create
a new file — she appends to the existing one.

**Adding new documents:**
the paralegal adds each new document to Section 3 (Document Log) and updates
the corresponding row in Section 2 (Mandatory Disclosure Status).

**After a stage completes:**
the paralegal updates Section 4 (Stage Completion Log) with the date, QC result,
and who it was sent to.

**After a deficiency letter:**
the paralegal adds the entry to Section 5 (Deficiency and Enforcement Log) and
updates Section 6 (Outstanding Items List).

**Closing every session:**
the paralegal reviews Section 6 and confirms it is current before closing Cowork.
She logs tracker update time in {{PM_SYSTEM}} before closing.

---

## GUARDRAILS

the paralegal does not interpret what a document means legally — she logs what
arrived and flags anything that looks inconsistent for the senior paralegal and Angela R. Neave.

the paralegal does not mark a category Complete unless she has confirmed the
specific documents required by Rule 12.285 are present and dated correctly.
Partial is always safer than Complete when in doubt.

the paralegal does not advance any stage skill without first confirming the tracker
reflects current document status. The tracker feeds every downstream skill.

All tracker update time is logged in {{PM_SYSTEM}}. Tracker maintenance is
billable work — it does not get skipped or absorbed.

---

## STAFF LANE SUMMARY

| Who | Does What |
|---|---|
| the paralegal | Creates tracker at matter open, updates at every document event and stage completion, maintains Section 6 outstanding list, logs time in {{PM_SYSTEM}} |
| the senior paralegal | Reviews tracker before authorizing next stage, flags tracker issues to Angela R. Neave |
| Angela R. Neave | Reviews tracker at Stage 7 and 8, uses outstanding list for strategy decisions |

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
