---
name: lal-trial-order-intake
description: "Trial order intake and deadline control. Use when any order setting trial or evidentiary hearing arrives - Intake Memo, Deadline Ladder, task block, tracker. Runs before other trial-prep skills."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. trial order intake and deadline control skill. Use IMMEDIATELY whenever a trial order, order setting trial, uniform trial order, order setting evidentiary hearing, case management order with disclosure deadlines, or pretrial order arrives or is mentioned. Triggers on: "trial order came in," "order setting trial," "trial is set," "hearing order received," "evidentiary hearing is set," "calendar the trial deadlines," "build the deadline ladder," "set up the trial folder," "what are the deadlines in this order," "parse this order," "UTO," "case management order," "pretrial order review," or any request to extract, calendar, or task out deadlines from an order setting trial or evidentiary hearing. Produces the Intake Memo, Deadline Ladder, {{PM_SYSTEM}} task block, and HTML Trial Tracker; runs the trial-only Pretrial Order Review and Judge Procedures Review; writes the deadline tracker to the command center. Runs before any other trial-prep skill.


## Neave Family Law Group, P.A. Firm-Wide Conventions (apply to every run of this skill)

These six conventions govern all Neave Family Law Group, P.A. skills and override any narrower instruction
below that conflicts with them.

1. **Environment-flexible.** Complete the task in the environment you are already in
   — chat, Desktop, or Cowork. If a different environment would be materially better,
   say so in one line and keep working. Never block, never redirect, never hand off
   instead of doing the work.
2. **Identity over lanes.** Staff assignments in this skill are defaults, not gates.
   Anyone may run any skill. **Attorneys self-approve** — if the person running this
   skill is the approving attorney (Angela R. Neave), they *are* the approving attorney. Never tell an attorney to
   route their own work to an attorney for approval.
3. **Just run it.** Prerequisite stages are soft checks, never hard gates. Pause only
   for a physically necessary input, and ask for that specific item by name.
4. **Read files first.** Search the entire matter file — including misnamed and
   misfoldered documents — before declaring anything missing (the trial order is
   often sitting in the matter root, ORDERS, or NOTICES under a filing-number name).
5. **Transcripts preferred, never required.** A typed summary of the order suffices
   if the PDF is unavailable, but flag that the four corners were not verified.
6. **Write to the command center.** Every deadline, lifecycle move, and attorney
   flag is written to the matter's command center before the run ends.

---

# Neave Family Law Group, P.A. Trial Order Intake + Deadline Control
## Staff Lane: Primary Paralegal (Case Deadline Owner) | Runs in: Cowork or Claude.ai
## Triggers Before: All trial-prep skills (witness/exhibit lists, pretrial stipulation, trial notebook)

This skill operationalizes the firm's **Trial Order Intake + Deadline Control System**
(TRIAL DEADLINES AND EVIDENCE SOP). Its purpose is to stop deadline ambushes:
make trial and evidentiary hearing deadlines impossible to miss. It takes a trial
order, extracts EVERY deadline from the four corners of the order, builds the
Deadline Ladder, creates the standardized Trial/Hearing folder, produces the
{{PM_SYSTEM}} task block and HTML Trial Tracker, runs the trial-only Pretrial Order
Review and Judge Procedures Review, and writes the Trial/Evidentiary Deadline
Tracker to the matter command center — all before any substantive trial prep begins.

**This is how you kill "we didn't know" as a species.**

---

## FIRM ROLES (from the SOP — confirm who is filling each on this matter)

| Role | Default | Duty |
|---|---|---|
| eService Monitor | Jeri | Checks eService daily; same-day forwards every trial/hearing order to handling attorney(s), primary paralegal, and backup. Subject line: "TRIAL ORDER RECEIVED – [Client] – [Date of Trial/Hearing] – DEADLINES INSIDE" |
| Case Deadline Owner | Primary Paralegal | Within 24 hours of receipt: runs this skill, calendars every deadline in {{PM_SYSTEM}}, creates the Deadline Ladder, opens the Trial/Hearing folder, assigns tasks |
| Finance/Discovery Owner | Russ | Tracks MD, subpoenas, financial organization, guideline inputs; ensures updated MD exchange by the order deadline; preps numbers readiness (support worksheets, arrears math, add-on proofs) |
| Attorney Owner | Angela R. Neave | Litigation strategy, witness/exhibit sequencing, settlement posture, exhibit labeling order if pre-marking |

---

## STEP 0 — OCR VERIFICATION (ambient rule: lal-document-intake-rules)

Never extract deadlines from a PDF that has not been OCR-verified. If the order is
a scanned image with no text layer, OCR it first. If any page is unreadable, report
exactly which page and stop deadline extraction for that page — a missed paragraph
is a missed deadline. Never summarize an order you could not actually read.

---

## STEP 1 — CONFIRM ORDER IDENTITY AND CLASSIFY POSTURE

Before extracting anything, confirm from the face of the order:

- **Matter name and case number** (must match the matter folder you are working in)
- **Court**: circuit, county, division
- **Presiding officer**: Circuit Judge vs. General Magistrate vs. Hearing Officer —
  this changes the post-hearing review lane (see Attorney Flags)
- **Order type**: Order Setting Trial / Uniform Trial Order / Order Setting
  Evidentiary Hearing / Case Management Order with disclosure deadlines / Pretrial
  Conference Order / Order of Referral with hearing date
- **POSTURE CLASSIFICATION — TRIAL vs. EVIDENTIARY HEARING.** This drives Step 2A:
  the full Pretrial Order Review runs ONLY for trials (final hearing / non-jury
  trial / multi-day trial settings). Evidentiary hearings (temporary relief,
  contempt, fees, discovery sanctions) get the deadline extraction and ladder but
  NOT the trial-only pretrial review items.
- **Trial or hearing date(s) and time**, number of days reserved
- **Format**: in person / Zoom / hybrid — and the location or link procedure
- **Date order was rendered** and date received (deadlines sometimes run from
  rendition, sometimes from service — read the trigger language for each deadline)
- **What is being heard**: which pleadings/motions the trial or hearing will decide

If the order in hand does not match the matter folder, stop and flag immediately.

---

## STEP 2 — EXTRACT EVERY DEADLINE FROM THE FOUR CORNERS

**Non-negotiable rule: every deadline comes from the text of THIS order, cited to
its page and paragraph. Never assume a deadline exists because other orders
usually have one, and never omit one because it is unusual.** Real orders vary
enormously. Two actual examples from firm matters:

- A Brevard-style Order Setting Non-Jury Trial with a layered ladder: expert witness
  disclosure 60 days before trial; last day to SERVE interrogatories/RFP/RFA 45 days
  before trial; discovery closes 10 days before trial; Pretrial Statement (evidence
  list + witness list) filed and served 10 days before trial; exhibits exchanged
  7 days before trial; fee affidavits exchanged 48 hours before trial; joint personal
  property inventory and joint ED worksheet required; court reporter arrangements;
  remote testimony per Rule 2.530/12.451.
- A Lake-style Domestic Order Requiring Disclosures: ALL trial evidence (every
  individual exhibit specifically identified, every witness with a concise statement
  of expected testimony) disclosed within 30 days of the order, with an express
  inadmissibility sanction — anything not specifically disclosed "will be deemed
  inadmissible at trial," and vague disclosures ("any witness identified during
  discovery," "rebuttal") are treated as nullities.

Sweep the order for every instance of these deadline families (checklist, not a
limit — capture anything else the order imposes):

| Deadline Family | Typical Trigger Language |
|---|---|
| Trial / hearing date(s), calendar call, docket call | "commencing on," "time reserved" |
| Pretrial conference / case management conference | "Pretrial Conference is set for" |
| Pretrial statement or joint pretrial stipulation | "shall file a Pretrial Statement" |
| Witness list (incl. expert disclosure with subject matter) | "no later than __ days prior" |
| Exhibit list and exhibit EXCHANGE (separate deadlines!) | "shall exchange each of the exhibits" |
| Evidence disclosure orders (each exhibit specifically identified) | "written disclosure of all evidence" |
| Discovery close AND last day to serve written discovery (two different dates) | "no ... shall be served later than" |
| Mandatory disclosure / updated financial affidavit (12.285(f), 12.280 supplementation) | "fully executed current financial affidavit" |
| CS guidelines worksheet, ED worksheet, joint personal property inventory | "shall file a Joint ..." |
| Proposed parenting plan / proposed final judgment exchange | "exchange ... proposed final settlement documents" |
| Fee affidavits | "48 hours prior to trial" |
| Mediation completion deadline | "shall complete mediation by" |
| Motions in limine / evidentiary motions cutoff | "all motions in limine shall be heard" |
| Objections to exhibits / deposition designations | |
| Court reporter arrangements, interpreter, remote testimony requests (2.530, 12.451) | |
| Zoom/appearance logistics, notice of current email | "at least 2 days prior" |
| Sanctions / exclusion language | "will be deemed inadmissible," "may be stricken" |

**Date math rules:**
- Compute each date per Fla. R. Gen. Prac. & Jud. Admin. 2.514 (time computation).
  When a computed deadline lands on a weekend or legal holiday, roll per 2.514 and
  flag the roll in the memo. When the order's trigger is ambiguous (from rendition?
  from service? calendar days vs. business days?), calendar the EARLIER candidate
  date and flag the ambiguity for the attorney — never silently pick the later one.
- Verify all date arithmetic programmatically (compute, don't count on fingers).
- Multi-day trials: every deadline runs from DAY ONE of the trial period.

---

## STEP 2A — PRETRIAL ORDER REVIEW (TRIALS ONLY — skip for evidentiary hearings)

When Step 1 classifies the setting as a TRIAL, run this full compliance review of
the trial/pretrial order beyond bare deadline extraction. Produce a section in the
Intake Memo answering each item with the order's answer and cite:

1. **At-issue check** — is the case actually at issue under Rule 12.440 (pleadings
   closed, motions directed to last pleading disposed of)? If not, flag: the trial
   setting itself may be premature.
2. **Pretrial conference / calendar call** — date, appearance requirements, what
   must be filed BEFORE it, and whether attendance by the client is required.
3. **Pretrial statement / joint stipulation** — required? Joint or separate? Due
   date, required contents (stipulated facts, disputed issues of law and fact,
   witness/exhibit lists attached, demonstrative aids, pending motions, legal
   authority). Route to lal-pretrial-stipulation.
4. **Disclosure regime classification** — Regime A (standard lists with categories
   and reservations permitted) vs. Regime B (strict specificity; catch-alls are
   nullities; exclusion sanction). This classification carries into
   lal-witness-exhibit-lists — record it in the memo and command center.
5. **Exhibit mechanics** — pre-marking required? Court's exhibit form/grid (some
   divisions require the court's Proposed Exhibit List form with Judge / Court
   Reporter header and PLT-PET/DEF-RES ID-EX columns)? Bench copies? Electronic
   upload portal and format? Deadline to deliver exhibits to the JA?
6. **Trial time allocation** — days reserved, time split between sides, whether
   the court imposes a chess-clock; feed into witness sequencing.
7. **Proposed final judgment** — required before trial? Format (Word to JA?),
   exchange requirement.
8. **Motions in limine and evidentiary motions** — cutoff for filing AND hearing;
   are unheard motions waived?
9. **Mediation prerequisite** — must mediation be completed before trial? Deadline?
10. **Continuance standard** — order-specific requirements layered on Rule
    12.460/2.545(e) (e.g., client signature, joint status).
11. **Sanctions exposure map** — quote every exclusion/striking/sanctions clause
    verbatim with cite.

## STEP 2B — JUDGE PROCEDURES REVIEW (trials AND evidentiary hearings)

Invoke **lal-judicial-procedures** for the assigned judge / GM / hearing officer
and division. Confirm with the user before running any live web search (integrity
rule), then check ONLY official court / judicial-circuit sources for:

- Divisional standing orders and trial/hearing procedures that SUPPLEMENT this
  order (exhibit portals, courtesy copy rules, proposed order format, Zoom
  protocols, JA contact and communication rules, check-in procedure)
- Conflicts between the standing procedures and the four corners of this order —
  the order controls, but flag every conflict for the attorney
- Record the sources checked (URL + date checked) in the Intake Memo. Never fill
  gaps from memory — judge procedures change constantly.

---

## STEP 3 — BUILD THE DEADLINE LADDER

For EVERY hard deadline extracted in Step 2, create (per the firm SOP):

1. **Hard deadline event** — the actual due date
2. **Warning event at T-14 days**
3. **Warning event at T-7 days**
4. **Warning event at T-3 days**
5. **Task(s) assigned** to the right owner with internal due dates set BEFORE the
   hard date (internal due date = hard date minus 3 business days as default)

Assign each task to the correct role: finance/discovery items → Russ; pleadings,
lists, stipulations → primary paralegal (drafts) + attorney (review); strategy
items (witness order, exhibit labeling, settlement posture) → Angela R. Neave.

---

## STEP 4 — CREATE THE TRIAL/HEARING FOLDER

Create in the matter folder, named **"YYYY-MM-DD Trial"** or
**"YYYY-MM-DD Evidentiary Hearing"** (date = first day of trial):

```
YYYY-MM-DD Trial/
├── 00 Trial Order + Notices + Pleadings Being Heard
├── 01 Our Evidence (to introduce)
├── 02 Opposing Evidence (their production)
├── 03 Exhibits – Pre-Marked (optional)
├── 04 Worksheets / Calculations (CS / ED / Fees)
└── 05 Court Logistics (zoom link, JA info, courtroom, copies)
```

Copy the trial order itself into 00 immediately, along with the operative
pleadings/motions being heard. Do not move originals out of ORDERS/FILED folders
— copy.

---

## STEP 5 — PRODUCE THE OUTPUTS

### Output A — Trial Order Intake Memo (Word)

Court-neutral internal memo (this is NOT a filing — brand per firm memo standard):

```
TRIAL ORDER INTAKE MEMO — [Matter Name] — [Date]
Prepared by: [User] | Order: [title, filing #, rendered date, judge/GM]

1. HEARING SNAPSHOT — date(s), time, days reserved, format, location/Zoom,
   presiding officer, pleadings being heard, TRIAL vs. EVIDENTIARY HEARING
2. DEADLINE TABLE — one row per deadline:
   Due Date | Deadline | Order Cite (¶/page) | Owner | Internal Due | Notes/Ambiguity
3. PRETRIAL ORDER REVIEW (trials only — Step 2A items 1–11 with cites)
4. JUDGE PROCEDURES REVIEW — divisional/standing-order findings, sources + dates
   checked, conflicts with the order flagged
5. FILING/EXCHANGE CHECKLIST (from firm SOP — mark each Required/N-A per this order):
   [ ] Witness list filed (or confirm "parties only")
   [ ] Exhibit list filed (if anything outside MD)
   [ ] Exhibits exchanged by deadline
   [ ] Guidelines worksheets filed (if support issue)
   [ ] ED schedule filed (if ED issue)
   [ ] Proposed parenting plan filed (if timesharing issue)
   [ ] Redaction compliance confirmed (Rules 2.420 / 2.425)
   [ ] Copies/prep for in-person OR upload rules for remote confirmed
6. ATTORNEY FLAGS (Step 6)
7. AMBIGUITIES REQUIRING ATTORNEY CALL
```

### Output B — Deadline Ladder (Excel)

One row per calendar event (hard deadlines AND T-14/T-7/T-3 warnings AND internal
task due dates), columns: Date | Event Type (Hard/Warn-14/Warn-7/Warn-3/Task) |
Description | Owner | Order Cite | {{PM_SYSTEM}} Entered (Y/N). Sorted by date.

### Output C — {{PM_SYSTEM}} Task Block (copy-paste)

Plain-text block, one line per {{PM_SYSTEM}} entry, formatted for direct entry:

```
{{PM_SYSTEM}} — [Matter] — TRIAL DEADLINES
[MM/DD/YY] | EVENT | Trial Day 1 — [format/location]
[MM/DD/YY] | TASK  | [Owner] — [deadline description] (Order ¶_)
[MM/DD/YY] | TASK  | [Owner] — WARNING T-14: [deadline]
... every ladder entry ...
```

Set the matter's {{PM_SYSTEM}} **Stage** to "Trial bound" or "Evidentiary hearing
scheduled" per the SOP, and note the stage change in the memo.

### Output D — HTML Trial Tracker (internal reference artifact)

Populate the firm's **LAL_Trial_Tracker_TEMPLATE.html** (Exhibits / Witnesses /
Deadlines tabs — located in TRAINING RESOURCES/this skill's references/ folder) with the
matter header and the full Deadlines tab pre-filled from the ladder. This is the
living internal reference:

- Save the populated HTML to the Trial/Hearing folder root AND to the matter's
  Claude Project knowledge so both surfaces share one tracker.
- The template auto-saves in-browser and exports JSON/CSV snapshots — instruct the
  paralegal to export a JSON snapshot back to the Trial/Hearing folder after every
  working session.
- If the template file cannot be located, say so and generate a fresh copy with
  the same three-tab structure — never claim a file exists that was not found
  (integrity rule).

---

## STEP 6 — ATTORNEY FLAGS (always evaluate; include only what applies)

- **Exclusion/sanctions language** — quote verbatim any "deemed inadmissible,"
  "stricken," or "may be excluded" clauses. These make the disclosure deadlines
  case-dispositive.
- **GM / Hearing Officer posture** — if before a General Magistrate or Hearing
  Officer: post-hearing review is by motion to vacate / exceptions under Rule
  12.490 (10-day clock from service of the recommended order) and a TRANSCRIPT is
  ordinarily required to support review. Flag court-reporter arrangements NOW —
  GM proceedings are often only electronically recorded. Objection-to-referral
  window may also still be open.
- **Child testimony** — if any child witness is contemplated: Rule 12.407 requires
  prior court order on good cause before a child is deposed, subpoenaed, or attends;
  applies to remote hearings too. A separate motion and hearing lead time is needed.
- **Remote testimony** — out-of-area witnesses require compliance with Rule 2.530
  and Rule 12.451; calendar the request deadline if the order sets one.
- **Continuance standard** — continuances are governed by Rule 12.460 / Rule
  2.545(e): written motion, signed by the client except for good cause, stating the
  reason, opposing party's position, and when the case will be ready.
- **Supplementation duty** — Rules 12.280 and 12.285(f) require supplementing
  discovery and filing a current financial affidavit; stale FAs are a standing risk.
- **Redaction/confidentiality** — Rules 2.420/2.425 compliance on every exhibit
  containing account numbers, SSNs, or minors' information.
- **Notice for Trial posture (our side)** — if the matter is NOT yet set and the
  task is getting it set: Rule 12.440 (action at issue; notice for trial contents;
  court sets trial and pretrial conference per Rule 12.200).
- **Judicial notice** — Rule 12.4501 / §§ 90.201–.207 where records of other
  proceedings will be used.

**Caselaw protocol (ambient):** cite no caselaw from memory. Rules and statutes
above come from the firm's rule files; anything beyond them is flagged for
attorney research.

---

## STEP 7 — COMMAND CENTER: TRIAL/EVIDENTIARY DEADLINE TRACKER (mandatory)

The matter command center (lal-command-center) gets a dedicated
**TRIAL/EVIDENTIARY DEADLINE TRACKER** section on every run — this is a standing
command-center component for any matter with a set trial or evidentiary hearing:

```
TRIAL/EVIDENTIARY DEADLINE TRACKER — [set/updated MM.DD.YY]
Setting: [Trial | Evidentiary Hearing] | Date(s): ___ | Judge/GM: ___ | Format: ___
Disclosure regime: [A standard | B strict — exclusion sanction]
NEXT 3 DEADLINES: [date — item — owner — status]
FULL LADDER: [count] deadlines | {{PM_SYSTEM}} entered: Y/N | HTML tracker: [location]
Pretrial Order Review: [Complete / N-A (hearing)] | Judge Procedures Review: [date checked]
OPEN ATTORNEY FLAGS: [list]
```

Every downstream trial-prep skill updates this tracker section when it completes a
deadline item. Lifecycle status moves to "Trial bound" / "Evidentiary hearing
scheduled."

---

## STEP 8 — QC + LANE + SESSION CLOSE

Before the run ends:

- [ ] Every deadline in the memo has an order cite (¶/page) — no uncited dates
- [ ] Date math verified programmatically; weekend/holiday rolls flagged
- [ ] Deadline count matches: memo table = ladder rows (hard) = {{PM_SYSTEM}} block =
      HTML tracker Deadlines tab
- [ ] Trials: Pretrial Order Review section complete (items 1–11); hearings: marked N/A
- [ ] Judge Procedures Review recorded with sources and check date
- [ ] Trial/Hearing folder created with all six subfolders; order copied into 00
- [ ] HTML tracker populated and saved to Trial/Hearing folder + Claude Project
- [ ] Command center Trial/Evidentiary Deadline Tracker section written
- [ ] Ambiguities listed — none silently resolved
- [ ] Output saved to **Notes/** in the matter folder as
      `MM.DD.YY - LastName - Trial Order Intake - v1` (memo), plus the Excel ladder;
      versioned, never overwritten
- [ ] Memo routed to Marta Estevez for review and to the Attorney Owner (flags section)
- [ ] Time logged in {{PM_SYSTEM}} (order review, deadline extraction, calendaring)

**Output delivery:** in Cowork, write to the session's matter folder and state
where each file belongs in {{DMS}}. In Claude.ai, present files as downloads
with the destination block — never claim "saved to {{DMS}}."

Nothing is filed or served from this skill. This skill produces internal control
documents only; every downstream filing goes through drafting skills,
lal-prefiling-qc, and attorney sign-off.

---

## STAFF LANE SUMMARY

| Who | Does What |
|---|---|
| Jeri | Forwards the order same-day (eService Monitor) |
| Primary Paralegal | Runs this skill within 24 hours; enters {{PM_SYSTEM}} events; owns the ladder + HTML tracker |
| Russ | Owns finance/discovery deadline tasks (MD update, subpoenas, worksheets) |
| Marta Estevez | Reviews the Intake Memo before it advances |
| Angela R. Neave | Review Attorney Flags + Pretrial Order Review; own strategy tasks; approve any continuance decision |
