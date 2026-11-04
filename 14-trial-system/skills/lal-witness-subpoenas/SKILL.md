---
name: lal-witness-subpoenas
description: "Witness and records subpoena workflow. Use to draft, issue, serve, or track subpoenas for trial or hearing - Rule 12.410 discipline, child-witness gate, records certifications."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. witness and records subpoena workflow for trials and evidentiary hearings. Use IMMEDIATELY whenever a subpoena needs to be drafted, issued, served, or tracked. Triggers on: "subpoena the witness," "draft a subpoena," "subpoena duces tecum," "trial subpoena," "records subpoena," "subpoena the bank," "notice of intent to subpoena," "serve the witness," "witness won't come voluntarily," "records custodian," "notice to produce at trial," "quash the subpoena," or any request to compel witness attendance or document production for a trial or evidentiary hearing in a Florida family law matter. Enforces Rule 12.410 (issuance, same-day Notice of Issuance to all parties, 2.425 compliance, service, proof by affidavit), the 12.407 child-witness gate, and coordination with 90.902(11)/92.605 business-records certifications. Built from firm subpoena exemplars.


## Neave Family Law Group, P.A. Firm-Wide Conventions (apply to every run of this skill)

1. **Environment-flexible.** Complete the task where you are.
2. **Identity over lanes.** Staff assignments are defaults. Attorneys self-approve.
3. **Just run it.** Ask only for physically necessary inputs by name.
4. **Read files first.** Witness contact info, prior subpoenas, and process-server
   invoices are usually already in the matter file. Firm exemplars: witness
   subpoenas and corrected records subpoenas with notices of intent exist in prior
   matters — pull the closest exemplar before drafting fresh.
5. **Transcripts preferred, never required.**
6. **Write to the command center.** Every subpoena's status (drafted → issued →
   served → compliance) is logged in the Trial/Evidentiary Deadline Tracker and the
   Witnesses tab of the HTML Trial Tracker.

**Ambient rules:** lal-pleading-standard (court formatting), lal-prefiling-qc
(before anything is issued/served), lal-caselaw-protocol, lal-integrity-rules.

---

# Neave Family Law Group, P.A. Witness & Records Subpoena Workflow
## Staff Lane: Paralegal drafts and tracks | Russ coordinates records subpoenas with disco | Attorney approves issuance | Marta Estevez reviews
## Runs After: lal-trial-order-intake (deadlines) and lal-witness-exhibit-lists (who needs compelling)

Rule of thumb: **every non-party witness we need gets a subpoena, even the friendly
ones.** A subpoenaed witness who no-shows supports a continuance or enforcement; a
voluntary witness who no-shows is just our problem. Records we need at trial come in
through EITHER a records custodian under subpoena OR a business-records
certification (90.902(11) / § 92.605) — decide early, because both take lead time.

---

## STEP 0 — SUBPOENA DECISION MATRIX

For every witness on the Witness List and every record set on the Exhibit List:

| Situation | Instrument |
|---|---|
| Non-party witness to testify at trial/hearing | Subpoena for testimony (Rule 12.410(b)) |
| Non-party to bring documents to trial | Subpoena duces tecum (12.410(c)) |
| Documents from the OPPOSING PARTY at trial | Notice to Produce to adverse party (12.410(c)(1) / 12.080(a)) — same effect as a subpoena, no service expense |
| Business records without live custodian | 90.902(11) certification (in-state) / § 92.605 (out-of-state) — coordinate with lal-advanced-discovery if pre-trial production is also needed |
| Non-party production without deposition (pre-trial) | Rule 12.351 (different procedure — 10-day objection window; Notice of Issuance regime does NOT apply) |
| CHILD witness — any of the above | STOP. Rule 12.407 requires a prior court order on good cause before a child is deposed, subpoenaed, or attends any proceeding. Motion first. Attorney decision. |
| Out-of-area witness to appear remotely | Pair the subpoena decision with a Rule 2.530/12.451 remote-testimony motion/stipulation |

Timing check against the Deadline Ladder: the trial order's discovery cutoffs
generally do NOT bar trial subpoenas duces tecum or notices to produce at trial
(per the firm's Brevard-style exemplar order), but service must still be reasonable
— target service no later than T-14, earlier for institutions.

## STEP 1 — DRAFT (Rule 12.410 requirements, from the rule text)

Every subpoena must state the court name and case title, and command attendance at
a stated time and place (12.410(b)(1)). Issued by an attorney of record or the
clerk. Firm drafting standards:

- Full caption per lal-pleading-standard; correct division; witness's full name
  and address; date/time/location (or Zoom logistics if the court has authorized
  remote appearance); "duces tecum" attachment with a SPECIFIC list of items —
  vague categories invite motions to quash (12.410(c): court may quash or modify
  if unreasonable and oppressive, or condition on advancing production costs).
- **Rule 2.425 minimization applies to the subpoena itself** — no full account
  numbers or personal identifying numbers; recite compliance.
- Injunction-for-protection cases: additional restrictions apply (§ 119.0714,
  Rule 2.420) — attorney flag, extra care with protected addresses.
- Witness fee + mileage check accompanies service per law — task the check request
  with the service package.

## STEP 2 — NOTICE OF ISSUANCE (the step firms miss — Rule 12.410(a)(2))

On the SAME DAY the subpoena is issued, serve every party with a **Notice of
Issuance of Subpoena** and FILE it. The notice must:
- identify the person/entity subpoenaed;
- state the issuance date and the date/time for appearance or production;
- recite that all account/personal identifying number references comply with
  Rule 2.425; and
- attach an unexecuted copy of the subpoena.

(Not required for Rule 12.351 non-party production — that rule has its own notice
and objection procedure.) Calendar this WITH the subpoena task — issuance and
notice are one event, not two.

## STEP 3 — SERVICE AND PROOF

- Service by anyone authorized by law, or any non-party 18+ (12.410(d)). Use the
  firm's process server for anything contested; document server, date, manner.
- **Proof of service by affidavit** of the server — obtain it immediately, file per
  practice, and save to the matter.
- Institutions (banks, employers, schools): serve registered agent; build in
  their compliance lead time; follow up at T-7.
- Track every subpoena in the HTML Trial Tracker Witnesses tab (Subpoena Needed /
  Served date columns) and in the Deadline Ladder as tasks.

## STEP 4 — COMPLIANCE, ENFORCEMENT, AND DEFENSE

- No-show or no-production: flag to attorney same day — options include
  enforcement/contempt and continuance support; preserve the proof of service.
- Motions to quash/modify against our subpoenas: route to attorney immediately
  (12.410(c) standards: unreasonable and oppressive; cost-advancement condition).
- We receive an improper subpoena (e.g., aimed at our client's protected info or a
  child): attorney flag for protective order / motion to quash — use
  lal-legal-research in the browser Project for the substantive argument.

## STEP 5 — OUTPUTS + QC + CLOSE

1. Subpoena(s) (Word, court-formatted) + Notice(s) of Issuance + duces tecum
   attachments — Attorney Review Draft tier, highlighted notes for unresolved
   details (address, records period).
2. Service package checklist per witness: subpoena, witness fee check request,
   server instructions, proof-of-service affidavit form.
3. Subpoena Status Block written to the command center:
   `[Witness] | [Testimony/SDT/NTP] | Issued __ | Notice filed __ | Served __ |
   Proof filed __ | Compliance __ | Flags __`
4. QC before issuance: caption/party check, 2.425 scrub, specificity of duces
   tecum list, deadline fit, child-witness gate cleared, fee check requested.
   lal-prefiling-qc on everything; attorney approves issuance — staff never
   issue or serve without recorded attorney approval.
5. Time in {{PM_SYSTEM}} (drafting, service coordination, tracking).

## STAFF LANE SUMMARY

| Who | Does What |
|---|---|
| Primary Paralegal | Drafts subpoenas + notices, coordinates service, tracks proof and compliance |
| Russ | Records subpoenas + 90.902(11)/92.605 cert coordination with the disco tracker |
| Marta Estevez | Reviews drafts and the service plan |
| Angela R. Neave | Approve issuance, decide child-witness motions, handle quash/enforcement |
