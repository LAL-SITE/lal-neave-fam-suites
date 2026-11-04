---
name: lal-trial-charts-summaries
description: "Trial charts, summaries, and demonstrative exhibits. Use to condense voluminous records into charts, timelines, or calculations for court - enforces 90.956 notice and disclosure rules."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. trial charts, summaries, composite and demonstrative exhibits skill. Use IMMEDIATELY whenever a chart, summary, composite exhibit, timeline, arrears calculation, income comparison, spreadsheet exhibit, or demonstrative aid is needed for a trial or evidentiary hearing. Triggers on: "build a composite exhibit," "income summary chart," "summarize the bank statements for trial," "arrears chart," "expense summary," "timeline exhibit," "demonstrative," "summary exhibit," "90.956," "chart for the judge," "comparison chart," "prepare the trial charts," or any request to condense voluminous records into a chart, summary, or calculation for use in court. Enforces § 90.956 (written notice + qualified witness + underlying data made available), the disclosure deadlines from the trial order, and the firm's composite-exhibit practice. Internal analysis charts are separate — this skill governs anything shown to the court.


## Neave Family Law Group, P.A. Firm-Wide Conventions (apply to every run of this skill)

1. **Environment-flexible.** Complete the task where you are; suggest a better surface
   in one line if warranted, but keep working.
2. **Identity over lanes.** Staff assignments are defaults. Attorneys self-approve.
3. **Just run it.** Ask only for physically necessary inputs by name.
4. **Read files first.** The underlying records live in the DISCO folders, the FA
   crosscheck charts, the income analysis, and the ED chart. Build from what exists —
   never re-key numbers that a stage skill already extracted and QC'd.
5. **Transcripts preferred, never required.**
6. **Write to the command center.** Log the chart, its § 90.956 notice status, and
   its exchange status in the Trial/Evidentiary Deadline Tracker.

**Ambient rules:** lal-document-intake-rules (OCR every source PDF before using its
numbers), lal-draft-versioning, lal-caselaw-protocol, lal-output-standards.

---

# Neave Family Law Group, P.A. Trial Charts, Summaries & Demonstratives
## Staff Lane: Russ builds financial charts | Paralegal builds timelines | Marta Estevez reviews | Angela R. Neave approve use
## Runs After: lal-trial-order-intake (deadlines) · uses lal-fa-crosscheck / lal-income-analysis / lal-ed-chart / lal-cs-worksheet data

Charts win family trials — the judge remembers the one-page income comparison, not
the 400 pages of statements behind it. But a chart shown to the court is EVIDENCE
or a DEMONSTRATIVE, and each has rules. This skill governs anything displayed to
or filed with the court. Internal analysis spreadsheets (stage charts, crosschecks)
stay internal and are not governed by this skill.

---

## STEP 0 — CLASSIFY THE CHART (this decides everything)

**Type 1 — § 90.956 SUMMARY EVIDENCE (admitted as an exhibit).** A chart, summary,
or calculation presenting the contents of voluminous writings/records that are not
convenient to examine in court. Statutory requirements (Fla. Stat. § 90.956,
verbatim elements):
1. **Qualified witness** — someone must sponsor it (who compiled it or supervised;
   for firm-built financial composites this is typically the client or the records
   themselves via business-records certs — ATTORNEY CALL on sponsorship);
2. **Timely WRITTEN NOTICE of intent to use the summary, with proof of notice FILED
   with the court** — this is the malpractice trap; calendar it the day the chart
   is planned, not the week of trial;
3. **Underlying originals/duplicates made available to the other side for
   examination/copying at a reasonable time and place** — the underlying records
   must themselves be admissible (business-records predicates per
   90.803(6)/90.902(11)); the court may order production of the originals in court.

**Type 2 — DEMONSTRATIVE AID (not admitted; illustrates testimony).** Timelines,
enlargements, annotated maps/schedules. No 90.956 notice, BUT: must fairly
illustrate admissible testimony, must be disclosed if the trial order or pretrial
stipulation requires demonstrative disclosure (the firm's stipulation master has a
demonstratives section — keep it consistent), and the court may reject misleading
or argumentative demonstratives.

**Type 3 — REQUIRED WORKSHEET FILINGS.** CS guidelines worksheet (§ 61.30 /
lal-cs-worksheet), ED worksheet / joint personal property inventory (per the
trial order), fee affidavits. These follow the order's own deadlines — they are
compliance filings, not 90.956 summaries.

If the user is unsure, classify conservatively: treat it as Type 1 and give notice.

## STEP 1 — SOURCE DATA DISCIPLINE

- Pull numbers ONLY from QC'd sources: FA crosscheck chart, income analysis, ED
  chart, disco tracker, or the underlying statements themselves (OCR-verified).
- Every figure in the chart carries a source tag in the working version: document
  name + page (e.g., "BofA stmt Mar2025 p.2"). The court version drops the tags;
  the working version goes in the trial notebook so cross-examination on any number
  can be answered in seconds.
- Verify totals programmatically. A chart with a math error is impeachment of our
  whole financial case.
- Mixed periods, missing months, or estimated figures: mark clearly and flag to the
  attorney — never silently interpolate.

## STEP 2 — FIRM CHART LIBRARY (build from these patterns)

| Chart | Contents | Typical sponsor / basis |
|---|---|---|
| Composite income exhibit (firm exemplar practice) | Party's income from all sources by month/year: paystubs, deposits, 1099s, K-1s side by side vs. FA claims | Client or records custodian certs; pairs with CS worksheet |
| Income comparison chart | Our income figure vs. their FA figure vs. documents, with variance column | Ties to lal-income-analysis |
| Arrears / payment history | Ordered amount vs. paid (date, amount, source), running arrearage | Payment records, depository records |
| Expense / add-on summary | Child care, insurance, extracurricular, uncovered medical — by month with receipts index | Client + receipts |
| ED schedule / equalizer | Assets & liabilities, character, value, proposed distribution | From lal-ed-chart — court version per order's joint-worksheet requirement |
| Timeline (demonstrative) | Key events with record cites (filings, incidents, communications) | Illustrates testimony — Type 2 |
| Fee summary | Hours/amounts by phase, retainer/invoice index | Fee affidavit + retainer/invoices exhibits |

**Format standards (lal-output-standards + court reality):** one page per chart
wherever possible; landscape allowed; Arial; black-and-white readable (courtroom
printers); no decorative branding on COURT-FACING versions — court exhibits are
neutral documents, the Neave Family Law Group, P.A. brand kit applies only to internal versions; every
column labeled with period and unit; totals row; exhibit label space top-right.

## STEP 3 — DEADLINE & DISCLOSURE INTEGRATION (non-negotiable)

From the Trial Order Intake Memo / Deadline Ladder:
- The chart itself goes ON THE EXHIBIT LIST as a specifically identified exhibit
  ("Composite Exhibit: Respondent's income summary Jan2024–Jun2026 with underlying
  statements") — under strict-disclosure (Regime B) orders, an undisclosed summary
  is inadmissible regardless of 90.956 compliance.
- Calendar THREE dates per Type 1 chart: (1) written 90.956 notice served + proof
  filed; (2) underlying records made available (tie to exhibit-exchange deadline);
  (3) exchange of the chart itself.
- Underlying-records admissibility work (certs under 90.902(11), § 92.605;
  subpoenas via lal-witness-subpoenas) must complete BEFORE the exchange deadline.
- Update the Exhibit Tracker (HTML/Excel) — the chart is a row with foundation
  "90.956 summary + underlying business records," and each underlying record set
  is its own row or a noted composite.

## STEP 4 — OUTPUTS

1. **Court version** (Excel or PDF per what will be used in court; Word for
   worksheet-style filings) — neutral, clean, exhibit-label space.
2. **Working version** with source tags — trial notebook + folder 04.
3. **§ 90.956 Notice of Intent to Use Summary** (Type 1) — drafted for attorney
   review via lal-family-law-drafting patterns, routed through lal-prefiling-qc;
   attorney serves/files. Never served from this skill.
4. Exhibit Tracker + command center updates; deadlines logged; time in {{PM_SYSTEM}}.

## STEP 5 — ATTORNEY FLAGS (every run)

- Sponsorship plan for each Type 1 chart (who testifies to it)
- Any underlying record whose admissibility is unresolved (missing cert, hearsay
  layer, authenticity dispute)
- Numbers that conflict with our own filed FA or worksheets (reconcile BEFORE the
  other side finds it)
- Demonstratives that arguably cross into argument (risk of rejection)
- Strict-disclosure regime: confirm the chart and its underlying records are each
  specifically identified on the filed exhibit list

## STAFF LANE SUMMARY

| Who | Does What |
|---|---|
| Russ | Builds financial charts from QC'd stage data; maintains source tags |
| Primary Paralegal | Timelines/demonstratives; calendars 90.956 notice + exchange dates |
| Marta Estevez | Reviews math, source tags, and disclosure status |
| Angela R. Neave | Decide sponsorship, approve every court-facing chart, serve/file notices |
