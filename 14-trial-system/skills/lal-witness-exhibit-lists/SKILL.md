---
name: lal-witness-exhibit-lists
description: "Witness and exhibit list drafter. Use when lists, amendments, or trial disclosures are due - built from filed exemplars, adapted to the trial order, through QC and attorney sign-off."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. witness list and exhibit list drafter for trials and evidentiary hearings. Use IMMEDIATELY whenever a witness list, exhibit list, amended list, pretrial statement evidence/witness section, or trial disclosure needs to be drafted, amended, or checked against a trial order. Triggers on: "draft the witness list," "draft the exhibit list," "witness and exhibit lists are due," "amend the exhibit list," "file our lists," "trial disclosures are due," "pretrial statement evidence list," "who are we calling," "what exhibits are we using," "update the witness list," or any request to prepare Rule-compliant witness or exhibit disclosures in a Florida family law matter. Builds from the Neave Family Law Group, P.A. filed exemplar format, adapts to strict-disclosure trial orders, and always routes through lal-prefiling-qc and attorney sign-off before filing.


## Neave Family Law Group, P.A. Firm-Wide Conventions (apply to every run of this skill)

1. **Environment-flexible.** Complete the task in the environment you are in. If a
   different environment would be materially better, say so in one line and keep working.
2. **Identity over lanes.** Staff assignments are defaults, not gates. Attorneys
   self-approve — if the approving attorney (Angela R. Neave) is running this skill, they are the approving attorney.
3. **Just run it.** Prerequisites are soft checks. Pause only for a physically
   necessary input, and ask for that specific item by name.
4. **Read files first.** Search the entire matter file — pleadings, DISCO folders,
   correspondence, GAL reports, prior lists — before asking who the witnesses are or
   declaring exhibits unknown.
5. **Transcripts preferred, never required.** Attorney notes or a quick chat list suffice.
6. **Write to the command center.** Deadlines met, filings drafted, and attorney
   flags are logged before the run ends.

**Ambient rules that always apply:** lal-pleading-standard (court formatting from the
first keystroke; highlighted attorney notes and alternatives in drafts),
lal-draft-versioning (Attorney Review Draft → Final), lal-caselaw-protocol (no
caselaw from memory), lal-document-intake-rules (OCR any PDF before relying on it).

---

# Neave Family Law Group, P.A. Witness List & Exhibit List Drafter
## Staff Lane: Primary Paralegal drafts | Marta Estevez reviews | Angela R. Neave approve & sign
## Runs After: lal-trial-order-intake (deadline + disclosure standard come from the order)

Produces court-ready witness lists and exhibit lists in the firm's filed format,
calibrated to the governing trial order's disclosure standard. These are strategic
disclosure documents, not clerical lists — an item omitted may be EXCLUDED at trial,
and an item disclosed telegraphs strategy to opposing counsel. The attorney owns the
final content decisions; this skill makes the draft complete, compliant, and fast.

---

## STEP 0 — GOVERNING STANDARD CHECK (do this before drafting a single line)

Locate and read the operative trial order / case management order / pretrial order
(run lal-trial-order-intake first if no intake memo exists). Classify the
disclosure regime — this controls the entire drafting approach:

**Regime A — Standard practice (order silent or general).** Firm-format lists with
categories and reservation language are appropriate. This matches the firm's filed
exemplar style.

**Regime B — Strict-specificity order.** Some orders (e.g., Lake County-style
disclosure orders) require every exhibit "specifically identified" and every witness
listed with name, address, email, phone AND a concise plain statement of expected
testimony (facts and opinions, with grounds for any opinion) — and expressly deem
non-compliant disclosures INADMISSIBLE. Under such orders:
- Catch-all items ("all documents produced in discovery," "any witness identified
  by any party," "impeachment/rebuttal witnesses") are treated as NULLITIES.
- "Reserves the right to amend" language does not protect anything.
- Every exhibit must be individually described (e.g., "Petitioner's 2024 federal
  income tax return"), and a copy provided with the disclosure.
- Every witness entry needs an expected-testimony statement in the style of
  Fla. R. Civ. P. 1.280(b)(5) expert disclosure (e.g., "Witness A will state that
  she observed X on Y date" — not "will testify about timesharing").

**If Regime B applies, the firm-format catch-alls are a trap. Draft to the order's
standard and put a prominent attorney flag on any item that cannot yet be
specifically identified.** When in doubt which regime applies, draft to the stricter
standard and flag.

Also capture from the order: filing deadline vs. exchange deadline (often
different), expert disclosure deadline (frequently earlier — e.g., 60 days before
trial with subject-matter designation), and whether a Pretrial Statement subsumes
the lists.

---

## STEP 1 — GATHER CONTENT FROM THE MATTER FILE

Sweep the matter before asking questions:

**Witness candidates:** parties; both Neave Family Law Group, P.A. attorneys (for fees — firm standard);
GAL; therapists/evaluators; teachers; family/collateral witnesses named in intake
notes, GAL reports, correspondence, or discovery; records custodians (only if
business-records certifications under §§ 90.803(6)/90.902(11) won't be obtained);
experts (vocational, forensic accountant, psychologist). For each found, capture
name, role, address/email/phone if in the file, and what they know.

**Exhibit candidates by issue:**
| Issue | Typical exhibits in the file |
|---|---|
| Support / income | FAs, tax returns, W-2s/1099s/K-1s, paystubs, CS guidelines worksheet, composite income exhibits |
| Equitable distribution | ED worksheet, account statements, deeds, appraisals, loan docs |
| Timesharing | Proposed parenting plan, communications (texts/emails/OFW), photos/videos, school and medical records, GAL report (admissibility varies — flag) |
| Fees | Retainer agreement, invoices, fee affidavits, opposing conduct evidence |
| Contempt/enforcement | The order violated, payment records, communications |

Then present the draft candidate lists to the attorney/user with a short "confirm,
cut, or add" ask. Never file-ready a list the attorney has not shaped.

**Missing-info protocol:** an entry with unknown address gets "(Address to be
provided)" ONLY in Regime A, and always gets a highlighted attorney note with a
task to obtain it. In Regime B, incomplete entries are flagged as at risk of
exclusion.

---

## STEP 2 — DRAFT IN THE FIRM FORMAT

Court formatting per lal-pleading-standard: portrait, Times New Roman 12, black,
single spacing, one-inch margins, Neave Family Law Group, P.A. caption, numbered paragraphs, "Page X of Y"
footer.

### Caption block (firm exemplar format)

```
IN THE CIRCUIT COURT OF THE [ORDINAL] JUDICIAL CIRCUIT,
IN AND FOR [COUNTY] COUNTY, FLORIDA

CASE NO: [case number]
DIVISION NO.: [division]

[PETITIONER FULL NAME],
     Petitioner,
and
[RESPONDENT FULL NAME],
     Respondent.
____________________________________________/
```

### Witness List body (Regime A pattern — from filed firm exemplars)

Title: **[PETITIONER'S/RESPONDENT'S] [AMENDED] WITNESS LIST**

Opening: "COMES NOW, the [Party role], [Full Name], by and through the undersigned
counsel, and pursuant to the applicable rules of procedure, hereby submits the
following list of witnesses who may be called to testify at hearings[, including a
final hearing in the above-styled matter]:"

Numbered entries, client first with full contact info, then opposing party (name
only), then both Neave Family Law Group, P.A. attorneys "– [Party]'s Attorney for fees" with firm address
block, then fact witnesses with addresses, then (Regime A only):
- "All witnesses listed by the [opposing party]."
- "All impeachment witnesses."
- "Any rebuttal witnesses."
- Reservation: "[Party] reserves the right to amend or supplement this witness
  list as necessary and in accordance with the rules of procedure."

In Regime B: each witness entry adds a concise expected-testimony statement, and
the catch-alls/reservation are OMITTED (replaced per the order's terms), with an
attorney flag explaining why.

### Exhibit List body (Regime A pattern — from filed firm exemplars)

Title: **[PETITIONER'S/RESPONDENT'S] [AMENDED] EXHIBIT LIST**

Same COMES NOW opening ("...list of exhibits that may be introduced into evidence
at hearings..."). Standard firm category set — include only categories relevant to
the issues pled, plus case-specific numbered items (specific orders, certificates,
deposition transcripts, social media, videos — describe each with date where
known, as in the firm's amended-list exemplars):
1. All pleadings, motions, notices, requests, orders and papers filed in the court file
2. Any and all Financial Affidavits filed in this cause
3. Documents reflecting income, compensation, and accumulated wealth of the parties
4. Documents produced in discovery, including Mandatory Disclosure and RFP responses
5. Evidence of child-related expenses (extracurriculars, child care)
6. Proposed Parenting Plan
7. Proposed Child Support Guidelines
8. Communications between the Parties
9. Photographs and videos
10. Retainer Agreements and Invoices for purposes of attorney's fees
11. Any impeachment and rebuttal exhibits, if relevant
12. Reservation of right to amend and supplement

In Regime B: replace category items with individually identified exhibits
("[Party]'s [year] federal income tax return," "Text messages between the parties
dated [range]"), note that copies must be served with the disclosure, and flag any
exhibit not yet in hand.

### Certificate of Service + signature block (firm standard — use exactly)

```
CERTIFICATE OF SERVICE

I HEREBY CERTIFY that a copy of the foregoing was filed with the Clerk via the
Efiling Portal and provided to [OC name], Attorney for [party], [OC email],
[OC address].

Respectfully submitted,

Neave Family Law Group, P.A.
2400 E. Commercial Blvd., Suite 826, Fort Lauderdale, FL 33308
Tel. (954) 981-2200
Service E-Mail: aneave@neavefamilylaw.com
Attorneys for [Party]

For the Firm:

BY: __________________________________
Angela R. Neave
Florida Bar No. {{BAR_NO}}
Email: aneave@neavefamilylaw.com
```

Note: always use **aneave@neavefamilylaw.com** in the signature block. Pull current opposing counsel service info from the matter
file (recent certificate of service or NOA), never from memory.

### Amended lists

Title gains "AMENDED" (or "SECOND AMENDED"); body is the complete restated list,
not a delta. In the attorney-review draft, highlight what changed from the prior
version. Check the order/rules for whether leave is needed to amend after the
disclosure deadline — if the deadline has passed, add a red attorney flag
(exclusion risk; possible motion required).

---

## STEP 3 — ATTORNEY FLAGS (evaluate every run)

- **Child witness** — any minor on the witness list requires a prior court order on
  good cause under Rule 12.407 before being subpoenaed or brought to any
  proceeding (including remote). Flag and calendar the motion lead time.
- **Expert witnesses** — check the order's expert-disclosure deadline and required
  designation (area of expertise + subject matter). Undesignated experts risk
  exclusion.
- **GAL and privileged/confidential material** — GAL reports, psych evals,
  substance-abuse records, and child therapy records raise admissibility and
  confidentiality issues (Rules 2.420/2.425; § 90 privileges). Flag, don't decide.
- **Redaction** — every financial exhibit must meet Rules 2.420/2.425 before filing
  or exchange (account numbers truncated, minors' identifying info protected).
- **Strategy telegraphing** — remind the attorney which specific items disclose
  strategy (e.g., named collateral witnesses, surveillance video, social media) so
  inclusion is a deliberate call.
- **Records custodians vs. certifications** — flag exhibits that need either a
  custodian witness or a § 90.902(11) certification to survive a hearsay objection;
  route subpoena needs to the subpoena workflow.
- **Deadline status** — restate the filing AND exchange deadlines from the intake
  memo at the top of the draft. If drafting inside T-7, mark the draft RUSH for
  Marta Estevez and the attorney.

---

## STEP 4 — QC, VERSIONING, DELIVERY

- Output is a Word document per lal-pleading-standard: correct caption, case
  number, division, party designations verified against a filed pleading in the
  matter — never against memory.
- Draft tier: **Attorney Review Draft v1** with highlighted notes/alternatives
  embedded. lal-finalize-draft strips them only after attorney approval.
- Run lal-prefiling-qc before the document is marked ready for signature.
  Critical findings block filing.
- Save to the matter folder (DRAFTS), filename
  `MM.DD.YY - LastName - [Witness|Exhibit] List - v1.docx`; also drop a copy in the
  Trial/Hearing folder subfolder 00 once filed.
- Command center: log draft created, deadline satisfied/pending, flags raised.
  Marta Estevez reviews before it goes to Angela R. Neave for signature. The signing attorney
  files — staff never file from this skill.
- Log time in {{PM_SYSTEM}} (drafting, matter-file sweep, revisions).

---

## STAFF LANE SUMMARY

| Who | Does What |
|---|---|
| Primary Paralegal | Runs skill, sweeps the file, drafts lists, proposes candidates |
| Russ | Confirms discovery/exhibit inventory against the disco tracker |
| Marta Estevez | Reviews draft + QC output before attorney |
| Angela R. Neave | Cut/add witnesses and exhibits, resolve flags, sign, file |
