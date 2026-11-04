---
name: lal-paternity-trial
description: "Paternity hearing and trial prep. Use when a paternity matter heads to any evidentiary event - count-by-count proof checklists wired into the trial suite. Either side."
---

# lal-paternity-trial — Paternity Hearing & Trial Preparation

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. paternity hearing and trial preparation module. Use IMMEDIATELY whenever a paternity matter is heading to any evidentiary event — temporary relief hearing, GM/HO hearing, final hearing, or trial. Triggers on: "paternity trial," "paternity hearing," "temp relief hearing on the paternity case," "final hearing set," "prove paternity," "what do we need to prove," "trial prep for [paternity client]," "elements of proof," "DNA results came in," "GM hearing on support," "prepare for the paternity final hearing," or any hearing/trial prep task in a Florida paternity matter, either side. Provides count-by-count proof checklists and wires into the firm's generic trial suite. Run after lal-paternity (router) has confirmed the track.

Paternity-specific evidentiary layer on top of the firm's generic trial suite. Works for either side. Sequence: trial/hearing order arrives → lal-trial-order-intake (deadline ladder) → THIS SKILL (what to prove and with what) → lal-witness-exhibit-lists, lal-evidence-objection-review, lal-trial-charts-summaries, lal-witness-subpoenas, lal-witness-prep, lal-pretrial-stipulation, lal-trial-notebook, lal-proposed-final-judgment. Templates: `LAL_Exhibit_Witness_Tracker_TEMPLATE.xlsx`, `LAL_Trial_Issue_Organizer_TEMPLATE.docx`, `LAL_Trial_Tracker_TEMPLATE.html` (this skill's references/ folder). Statutes on file: 742, 61, 90, 92.

## Proof checklists by count (build the Trial Issue Organizer from these)

**Count I — Paternity (establishment)**
- Scientific test results per §742.12 (verified lab report — check the statutory presumption thresholds against 742.pdf on file; the verified report has its own admissibility path — confirm objection posture via lal-evidence-objection-review)
- OR voluntary acknowledgment / birth certificate (§742.10) — certified copies
- Testimony: mother and/or alleged father on the relationship and conception window
- If contested and no testing yet done → the §742.12 motion should have been filed long ago; escalate
- Relief proof: birth certificate amendment details (child's full name, DOH record)

**Counts II–III — Parental responsibility & timesharing**
- Best-interest evidence organized by the §61.13(3) factor list (use the statute text in 61.pdf as the factor checklist — same factors as dissolution)
- Proposed Parenting Plan (mandatory exhibit); school/medical/activity records; witness list: parents, collateral caregivers, teachers/providers; GAL report if appointed
- Special-schedule proof where pled: military orders, shift schedules, IEP/504 records
- Child witnesses: Rule 12.407 gate — no child testifies without prior court order

**Count IV — Child support & related**
- Both financial affidavits + Rule 12.285 disclosure complete (lal-cert-of-compliance)
- CS guidelines worksheet (lal-cs-worksheet) — updated to hearing date
- Income proof: paystubs, tax returns, employer records; imputation evidence if unemployment/underemployment is claimed (attorney frames)
- Retroactive support: proof of the 24-month window, the child's residence with payee, and the payor's payments/in-kind contributions for credits (§61.30(17))
- Insurance cost proof, childcare cost proof, uncovered medical history
- Voluminous bank/income records → summary/composite exhibits via lal-trial-charts-summaries (§90.956 notice requirements)

**Fees (§742.045/§61.16)** → lal-fee-affidavit-prep; attorney-as-fees-witness on the witness list.

## Hearing types
- **Temporary relief hearing:** governed by the UFC temp-relief order (`TRAINING 2025\RULES\2026-06-UFC (Temp Relief Hearings).pdf`) — read it for exchange deadlines, time limits, and worksheet requirements; typical package: FA, CS worksheet, proposed temp parenting plan, concise exhibit set. Court reporter decision via lal-court-reporter.
- **GM / Hearing Officer (common for support issues):** referral/objection window, then hearing; recommended order starts the 10-day exceptions clock → lal-gm-exceptions; ALWAYS arrange a court reporter — review without a transcript ordinarily fails.
- **Final hearing / trial:** full suite. Uncontested/agreed → short prove-up: petition allegations, agreement, Parenting Plan, CS worksheet, FJ ready for signature (lal-proposed-final-judgment against the Partial FJ + FJ exemplars FJ PAT.pdf / FJ PATERNITY.pdf).

## Alignment rule
Relief not pled cannot be granted. Before any final hearing, cross-check the proposed FJ against the operative petition/counterpetition counts; missing relief → attorney decides on amendment BEFORE the hearing.

## Lane
Russ assembles, Marta Estevez reviews, attorney owns strategy, examinations, and every proof decision. Caselaw only from project files (lal-caselaw-protocol; needs → lal-caselaw-needs). All filings through lal-prefiling-qc. Court reporter decision on the record for EVERY evidentiary event.
