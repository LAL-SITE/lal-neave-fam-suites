# Trial & Evidentiary Hearing System — Legal Authority Lab

**Suite:** Trial & Evidentiary Hearing System
**Version:** 1.0.0
**Publisher:** Legal Authority Lab — legalauthoritylab.com

The complete litigation-to-trial lane for a Florida family law practice. One intake event — the trial order arriving — fans out to deadline control, disclosures, evidence screening, pretrial motions, witness preparation, the trial notebook, and the proposed final judgment. Everything writes to the command center.

## Skills included (21)

**Getting set & deadline control**
- `lal-notice-for-trial` — Rule 12.440 at-issue analysis and the Notice for Trial
- `lal-trial-order-intake` — parses the trial/hearing order into the deadline ladder, task block, and trial tracker; runs before every other trial skill
- `lal-continuance-motion` — Rule 12.460 / 2.545(e) continuances and oppositions
- `lal-zoom-appearance-motion` — remote-appearance motions, NOH, proposed order
- `lal-court-reporter` — reporter booking, hearing-day coordination, transcript ordering

**Disclosures & pretrial filings**
- `lal-witness-exhibit-lists` — witness and exhibit lists, amendments, strict-disclosure adaptations
- `lal-pretrial-stipulation` — joint pretrial stipulations and unilateral statements
- `lal-fee-affidavit-prep` — fee affidavits, invoice exhibits, fee summary chart
- `lal-witness-subpoenas` — Rule 12.410 witness and records subpoenas

**Evidence**
- `lal-evidence-objection-review` — two-sided objection chart (ours: overcome plan; theirs: basis)
- `lal-motion-in-limine` — pretrial evidence-exclusion motions and oppositions
- `lal-protective-order` — discovery/subpoena protective orders (not DV injunctions)
- `lal-incoming-motion-response` — 24-hour processing of motions served on us
- `lal-trial-charts-summaries` — § 90.956 summaries, composites, timelines, demonstratives

**Trying the case**
- `lal-witness-prep` — per-witness direct/cross outlines, exhibit scripts, impeachment kits
- `lal-trial-notebook` — assembles the notebook; the build is the final readiness audit
- `lal-proposed-final-judgment` — issue-by-issue findings tied to statutory factors, editable Word
- `lal-gm-exceptions` — GM/HO lane: referral objections, the 10-day exceptions clock, responses
- `lal-paternity-trial` — paternity-specific proof checklists on the generic trial lane

**Knowledge & research**
- `lal-trial-hearing-reference` — foundations, predicates, hearsay, authentication, objections, procedure
- `lal-caselaw-needs` — trial issues → precise research questions and {{RESEARCH_PROVIDER}} prompts; honors the caselaw protocol

## Requirements

- **Core Foundation** (ships free with every purchase) must be installed first.
- Install-time firm identity is applied by the LAL install process, which substitutes
  the `{{TOKEN}}` placeholders: {{FIRM_NAME}}, {{ATTORNEY_NAME}}, {{BAR_NO}}, {{FIRM_ADDRESS}},
  {{FIRM_PHONE}}, {{FIRM_EMAIL}}, {{FIRM_WEBSITE}}, {{PM_SYSTEM}}, {{DMS}}, {{RESEARCH_PROVIDER}},
  {{UPLOAD_PORTAL}}, {{ROLE_DRAFTER}}, {{ROLE_REVIEWER}}, {{ROLE_APPROVER}}, {{ROLE_INTAKE}}.
- Bracket placeholders like [CLIENT NAME], [CASE NO.], [JUDGE] are matter-level and are
  filled by the attorney at draft time — never programmatically.

## Install

1. Install through the firm's org-managed plugin marketplace (see `BUYER-RUNBOOK.md` at the repository root).
2. Firm identity is pre-baked by LAL; run `lal-installer` to build the Firm Profile and verify.
3. Verify with a live matter before production use.

## Cross-suite behavior

Missing suites degrade gracefully: if a referenced suite is not installed, the skill
notes the limitation and continues with its own scope. It never errors and never
silently omits. Drafting-suite QC skills and the Core command center are assumed when
installed; without them, output routes directly to attorney review.

## Attorney hard stops

Nothing in this suite is filed, served, or sent without attorney sign-off. Every
caselaw citation carries a mandatory attorney-verification requirement.
