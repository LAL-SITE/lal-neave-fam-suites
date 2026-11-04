---
name: lal-retainer-builder
description: "Retainer and engagement agreement builder. Use for any contract - flat fee, hourly, limited scope, coaching, paralegal services, addenda - producing a branded, signature-ready Word doc."
---

## When to use this skill (full trigger reference)

Retainer and engagement agreement builder for Neave Family Law Group, P.A. (Neave Family Law Group, P.A.). Use immediately after case info is gathered to produce a branded, signed-ready retainer as a Word doc. Triggers on: build a retainer, draft a contract, flat fee agreement, hourly retainer, limited scope agreement, DIY coaching contract, paralegal services agreement, name change contract, scope addendum, add services to existing contract. Also triggers on: "build the retainer for [client]", "what contract do we use", "generate the agreement", "we need a flat fee contract", "create the scope addendum", "generate the retainer now." Always use before producing any engagement document — ensures correct contract type, all fields populated, scope matches what was agreed, and output is a branded Word doc ready for Adobe Sign and {{PM_SYSTEM}}.


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

# Neave Family Law Group, P.A. Retainer Builder Skill

## Purpose

Takes case info from onboarding and produces a complete, populated, brand-correct
retainer agreement as a `.docx` file — matched to the service type, scoped to the
matter, and ready for Adobe Sign and {{PM_SYSTEM}} upload.

Output is always a Word document. Never output contract text in chat.

---

## Neave Family Law Group, P.A. Brand Specification

These values are non-negotiable. Every generated retainer must match exactly.

### Colors
| Role | Hex | Usage |
|---|---|---|
| Hot pink | `FF1F8E` | Header bar col 1, document title, section dividers, signature line accents |
| Orange | `FF6B00` | Header bar col 2, section dividers (alternating) |
| Chartreuse | `C8D400` | Header bar col 3, scope checklist accent |
| Teal | `00B5B8` | Header bar col 4, billing/fees section divider, subheads |
| Near-black | `0D0D0D` | All body text, section headings, field labels |
| Mid-gray | `888888` | Field fill-in lines, footer text, secondary labels |
| White | `FFFFFF` | Background, header bar cell borders |
| Pink blush | `FFF0F8` | Light background for important notice boxes |

### Typography
- **Font**: Arial, universally throughout. No exceptions.
- **Firm name header**: Arial 17pt (sz=34), bold, `0D0D0D`
- **Document title** (e.g. "FLAT RETAINER CONTRACT"): Arial 10pt (sz=20), bold, `FF1F8E`
- **Section headings** (e.g. "FEES & BILLING"): Arial 12pt (sz=24), bold, `0D0D0D`
- **Teal subheadings** (e.g. "BILLING RATES"): Arial 11pt (sz=22), bold, `00B5B8`
- **Field labels** (e.g. "Client Name:"): Arial 10pt (sz=20), bold, `0D0D0D`
- **Field fill values** (the actual populated data): Arial 10pt (sz=20), regular, `0D0D0D`
- **Field blank lines** (unpopulated): Arial 10pt (sz=20), regular, `888888`
- **Body text**: Arial 12pt (sz=24), regular, `0D0D0D`
- **Footer**: Arial 9pt (sz=18), regular, `888888`

### Page Setup
- US Letter: 12240 × 15840 DXA
- Margins: top 720, bottom 1080, left 1080, right 1080 (0.5" top, 0.75" bottom/sides)

### Header Bar (every page)
A 4-column table, full content width (9360 DXA), row height exactly 180 DXA:
- Col 1: fill `FF1F8E`, no borders, no text
- Col 2: fill `FF6B00`, no borders, no text
- Col 3: fill `C8D400`, no borders, no text
- Col 4: fill `00B5B8`, no borders, no text

### Section Dividers
A thin bottom-border paragraph (no text) under each section heading:
- Under document title → `FF1F8E`, sz=12
- Under SCOPE section → `FF6B00`, sz=12
- Under FEES section → `00B5B8`, sz=12
- Under CLIENT OBLIGATIONS → `C8D400`, sz=12
- Under TERMINATION → `FF1F8E`, sz=12
- Under SIGNATURES → `888888`, sz=6

### Footer (every page)
Tab-stop centered footer:
`Neave Family Law Group, P.A.  •  Confidential  •  [Contract Type]     Page X of Y`
Color: `888888`, Arial 9pt

---

## Step 1: Determine Contract Type

Match to the correct agreement based on service type confirmed during onboarding.
If ambiguous, ask before generating.

| Service Type | Contract | Source Reference |
|---|---|---|
| Full representation, contested, ongoing | **Hourly Retainer** | `HOURLY_CONTRACT_2026.docx` |
| Specific tasks only, billed hourly, limited appearance | **Limited-Scope Hourly** | `Limited_Scope_Hourly_Retainer_Agreement_EXAMPLE.pdf` |
| Fixed deliverable, fixed price | **Flat Fee** | `FLAT_FEE_FORM_2026.docx` |
| Adding services to existing flat fee | **Flat Fee Addendum** | `flat_fee_add.pdf` |
| Name change only | **Name Change** | `name_change.pdf` |
| Child support review / strategy session | **CS Review & Strategy** | `cs_review.pdf` |
| Paralegal services, no attorney | **Paralegal Services** | `paralegal.pdf` |

**Selection logic:**
- Ongoing litigation, attorney of record for everything → Hourly
- Defined task list, hourly billing, limited appearance filed → Limited-Scope Hourly
- One price, defined deliverables, no ongoing billing → Flat Fee
- Expanding an existing flat fee agreement → Addendum
- Name change only matter → Name Change
- One-time session or CS advice only → CS Review
- Document help without attorney representation → Paralegal

---

## Step 2: Gather Required Fields

Collect all fields before generating. Most come from the onboarding case memo.
If anything is missing, ask once in a single block.

### All Contracts
- Client full legal name(s) — exactly as it will appear on signature line
- Matter number / case reference (e.g., 2026-XXXX) or "To be assigned"
- Case type (Dissolution of Marriage, Paternity, Modification, Name Change, etc.)
- County
- Date of agreement
- Fee amount (retainer deposit, flat fee, or hourly rate as applicable)
- Payment method agreed (credit card, Zelle, payment plan)
- If payment plan: installment amounts and dates

### Hourly Retainer — additional fields
- Initial retainer amount collected
- Attorney hourly rate (standard: $450/hr attorney, $175/hr staff, $200/hr paralegal)
- Emergency rate if applicable (standard: $500/hr after hours)
- Any non-standard billing arrangements

### Flat Fee — additional fields
- Total flat fee amount
- Specific services included (map to Scope Checklist — see below)
- Any services expressly excluded that client asked about
- Whether payment plan applies and terms

### Limited-Scope Hourly — additional fields
- Initial retainer for limited engagement
- Specific services included (write each task explicitly — no generalities)
- Whether notice of limited appearance will be filed
- Emergency phase or specific phase only?

### Flat Fee Addendum — additional fields
- Date of original agreement being supplemented
- Additional flat fee amount
- Specific additional services being added (from addendum checklist)

### Name Change — additional fields
- Type: Adult / Minor Child / Family (multiple names)
- Fee: Adult $1,500 + filing fee / Minor $1,500 + filing fee / Family $2,000 + filing fee
- Filing fee amount (currently approx. $409)

### CS Review — additional fields
- Strategy session fee: $750 flat
- Whether client is providing court documents (if not: $25 retrieval fee applies)

### Paralegal Services — additional fields
- Initial retainer: $500
- Hourly rate: $175/hr, 0.1-hr increments

---

## Step 3: Map Scope to Checklist (Flat Fee and Limited Scope only)

For Flat Fee contracts, pre-populate the Scope Checklist based on what was agreed.
Mark included items with ✔, leave unchecked items as ☐.

**Core Pleadings package** — check if agreed:
☐ Civil Cover Sheet, Notice of Appearance, Designation of Email, Notice of Related Cases
☐ Petition
☐ Answer / Response
☐ Counter-Petition
☐ UCCJEA (if children involved)
☐ Financial Affidavit
☐ Summons

**Uncontested Divorce (Limited)** — check if agreed:
☐ Core pleadings set
☐ Petition
☐ Answer / Response (sent to opposing party)
☐ UCCJEA (if children)
☐ Financial Affidavits
☐ Proposed Marital Settlement Agreement
☐ Proposed Parenting Plan (if children)
☐ Proposed Child Support Guidelines (if children)
☐ One (1) revision only
☐ Final Judgment
☐ Final Hearing (if required)

**Uncontested Paternity (Limited)** — check if agreed:
☐ Core pleadings set
☐ Petition
☐ Answer / Response
☐ UCCJEA
☐ Financial Affidavits
☐ Proposed Parenting Plan
☐ Proposed Child Support Guidelines
☐ One (1) revision only
☐ Final Judgment
☐ Final Hearing (if required)

**Discovery (Limited)** — check if agreed:
☐ Mandatory Disclosure checklist gathered and reviewed
☐ Review opposing party MD/discovery
☐ Draft discovery requests (RTP or Interrogatories)
☐ Draft discovery responses

**Mediation** — check if agreed:
☐ Preparation
☐ Attend one (1) mediation
☐ Draft agreement

**Hearings (Single Event)** — check if agreed:
☐ Motion for Temporary Relief
☐ Motion for Partial FJ of Paternity
☐ Motion hearing (specify): [type]
☐ Uncontested final hearing

**DIY / Coaching (No Court Appearance)** — check if agreed:
☐ Strategy session
☐ Document review
☐ Procedural guidance

**Other** — if agreed to anything not on standard list, write it explicitly.

For Limited-Scope Hourly: write each included service as a numbered bullet in the
Scope Section. No generalities — each task must be specific enough to appear as
an initialed line in the Scope Selection Addendum.

---

## Step 4: Generate the Word Document

Read `/mnt/skills/public/docx/SKILL.md` before writing any code.

### File naming
`[ClientLastName]_[ContractType]_[YYYY-MM-DD].docx`

Examples:
- `Smith_HourlyRetainer_2026-04-20.docx`
- `Lemes_FlatFee_2026-04-20.docx`
- `Castillo_NameChange_2026-04-20.docx`
- `Jones_FlatFeeAddendum_2026-04-20.docx`

### Code structure

Install check: `npm list -g docx` — skip install if already present.

```javascript
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, BorderStyle, WidthType, ShadingType,
        VerticalAlign, PageNumber, PageBreak, TabStopType, TabStopPosition,
        LevelFormat, NumberFormat } = require('docx');
const fs = require('fs');

// ─── BRAND CONSTANTS ─────────────────────────────────────────────────────────
const B = {
  pink:       'FF1F8E',
  orange:     'FF6B00',
  chartreuse: 'C8D400',
  teal:       '00B5B8',
  black:      '0D0D0D',
  gray:       '888888',
  blush:      'FFF0F8',
  white:      'FFFFFF',
};

// ─── HELPER: SECTION DIVIDER ─────────────────────────────────────────────────
function divider(color) {
  return new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color, space: 2 } },
    spacing: { after: 160 },
    children: [],
  });
}

// ─── HELPER: SECTION HEADING ─────────────────────────────────────────────────
function sectionHeading(text, dividerColor) {
  return [
    new Paragraph({
      spacing: { before: 300, after: 80 },
      children: [new TextRun({ text, bold: true, color: B.black, size: 24, font: 'Arial' })],
    }),
    divider(dividerColor),
  ];
}

// ─── HELPER: FIELD ROW ───────────────────────────────────────────────────────
// label = bold black, value = regular black (populated) or gray (blank)
function fieldRow(label, value) {
  const isBlank = !value || value.startsWith('_');
  return new Paragraph({
    spacing: { before: 100, after: 60 },
    children: [
      new TextRun({ text: label + ' ', bold: true, color: B.black, size: 20, font: 'Arial' }),
      new TextRun({ text: value || '_______________________________', 
                    color: isBlank ? B.gray : B.black, size: 20, font: 'Arial' }),
    ],
  });
}

// ─── HELPER: BODY TEXT ───────────────────────────────────────────────────────
function body(text, spacingAfter = 120) {
  return new Paragraph({
    spacing: { after: spacingAfter },
    children: [new TextRun({ text, color: B.black, size: 24, font: 'Arial' })],
  });
}

// ─── HELPER: BULLET ──────────────────────────────────────────────────────────
function bullet(text) {
  return new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    children: [new TextRun({ text, color: B.black, size: 24, font: 'Arial' })],
  });
}

// ─── HELPER: TEAL SUBHEADING ─────────────────────────────────────────────────
function tealHead(text) {
  return new Paragraph({
    spacing: { before: 200, after: 80 },
    children: [new TextRun({ text, bold: true, color: B.teal, size: 22, font: 'Arial' })],
  });
}

// ─── HEADER BAR ──────────────────────────────────────────────────────────────
function colorBar() {
  const noBorder = { style: BorderStyle.NONE, size: 0, color: B.white };
  const borders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
  
  const cell = (fillColor) => new TableCell({
    width: { size: 2340, type: WidthType.DXA },
    borders,
    shading: { fill: fillColor, type: ShadingType.CLEAR },
    margins: { top: 0, bottom: 0, left: 10, right: 10 },
    children: [new Paragraph({ children: [] })],
  });

  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [2340, 2340, 2340, 2340],
    rows: [
      new TableRow({
        height: { value: 180, rule: 'exact' },
        children: [
          cell(B.pink),
          cell(B.orange),
          cell(B.chartreuse),
          cell(B.teal),
        ],
      }),
    ],
  });
}

// ─── SIGNATURE BLOCK ─────────────────────────────────────────────────────────
function signatureBlock(clientName) {
  return [
    ...sectionHeading('SIGNATURES', B.gray),
    body('This agreement constitutes the entire understanding between the parties. Any modifications must be in writing and signed by both parties.', 200),
    new Paragraph({ spacing: { before: 300, after: 60 },
      children: [new TextRun({ text: 'CLIENT:', bold: true, color: B.black, size: 20, font: 'Arial' })] }),
    new Paragraph({ spacing: { before: 100, after: 60 },
      children: [new TextRun({ text: '_____________________________________________', color: B.gray, size: 20, font: 'Arial' })] }),
    new Paragraph({ spacing: { after: 60 },
      children: [new TextRun({ text: clientName, color: B.black, size: 20, font: 'Arial' })] }),
    new Paragraph({ spacing: { after: 200 },
      children: [new TextRun({ text: 'Date: ___________', color: B.black, size: 20, font: 'Arial' })] }),
    new Paragraph({ spacing: { before: 200, after: 60 },
      children: [new TextRun({ text: 'Neave Family Law Group, P.A.:', bold: true, color: B.black, size: 20, font: 'Arial' })] }),
    new Paragraph({ spacing: { before: 100, after: 60 },
      children: [new TextRun({ text: '_____________________________________________', color: B.gray, size: 20, font: 'Arial' })] }),
    new Paragraph({ spacing: { after: 60 },
      children: [new TextRun({ text: 'Authorized Representative', color: B.black, size: 20, font: 'Arial' })] }),
    new Paragraph({ spacing: { after: 60 },
      children: [new TextRun({ text: 'Date: ___________', color: B.black, size: 20, font: 'Arial' })] }),
  ];
}

// ─── DOCUMENT TITLE BLOCK ────────────────────────────────────────────────────
function titleBlock(contractTitle) {
  return [
    new Paragraph({ spacing: { after: 40 },
      children: [new TextRun({ text: 'Neave Family Law Group, P.A.', bold: true, color: B.black, size: 34, font: 'Arial' })] }),
    new Paragraph({ spacing: { after: 160 },
      children: [new TextRun({ text: contractTitle, bold: true, color: B.pink, size: 20, font: 'Arial' })] }),
    divider(B.pink),
  ];
}
```

### Contract-specific content functions

Write a dedicated content function for each contract type. Each function receives the
case data object and returns an array of Paragraph/Table children.

**Case data object shape:**
```javascript
const caseData = {
  clientName:       'Jane Smith',
  matterNumber:     '2026-1098',
  caseType:         'Dissolution of Marriage',
  county:           'Broward',
  date:             'April 20, 2026',
  feeAmount:        '$5,000.00',
  paymentMethod:    'Credit Card',
  paymentPlan:      null,          // or [{amount, date}, ...]
  scope:            [...],          // array of included service strings
  excludedServices: [...],          // array of explicitly excluded strings
  hourlyRates:      { attorney: 450, staff: 175, paralegal: 200 },
  emergencyRate:    500,
  specialTerms:     null,          // any custom attorney-specified terms
};
```

### Document assembly

```javascript
const doc = new Document({
  numbering: {
    config: [{
      reference: 'bullets',
      levels: [{ level: 0, format: LevelFormat.BULLET, text: '\u2022',
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }],
    }],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 720, bottom: 1080, left: 1080, right: 1080 },
      },
    },
    headers: {
      default: new Header({ children: [colorBar(),
        new Paragraph({ spacing: { line: 80, lineRule: 'auto' }, children: [] })] }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          tabStops: [{ type: TabStopType.RIGHT, position: 9360 }],
          children: [
            new TextRun({ text: 'Neave Family Law Group, P.A.  \u2022  Confidential  \u2022  ' + contractType,
                          color: B.gray, size: 18, font: 'Arial' }),
            new TextRun({ text: '\tPage ', color: B.gray, size: 18, font: 'Arial' }),
            new PageNumber({ type: 'CURRENT', color: B.gray, size: 18, font: 'Arial' }),
            new TextRun({ text: ' of ', color: B.gray, size: 18, font: 'Arial' }),
            new PageNumber({ type: 'TOTAL_PAGES', color: B.gray, size: 18, font: 'Arial' }),
          ],
        })],
      }),
    },
    children: [
      ...titleBlock(contractTitle),
      ...partiesSection(caseData),
      ...scopeSection(caseData),
      ...feesSection(caseData),
      ...clientObligationsSection(),
      ...communicationSection(),
      ...discoverySection(caseData),
      ...terminationSection(caseData),
      ...noGuaranteesSection(),
      ...signatureBlock(caseData.clientName),
      // For flat fee: append scopeChecklist(caseData)
      // For limited scope: append scopeAddendum(caseData)
    ],
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync('/mnt/user-data/outputs/' + filename, buf);
  console.log('Written: ' + filename);
});
```

---

## Step 5: Contract-Specific Sections

### Hourly Retainer
- Parties block + matter description
- Scope: "The Firm agrees to represent Client in all aspects of [caseType] in [county] County, Florida, including all filings, hearings, discovery, mediation, and negotiations arising in this matter."
- Fees: Initial retainer amount, attorney rate $450/hr, staff $175/hr, emergency rate $500/hr, late fee $25/day, 3% CC processing fee, Zelle: aneave@neavefamilylaw.com
- Invoicing: twice monthly regardless of balance
- All standard client obligations, communication policy, discovery section, termination, no guarantees
- Client acknowledgment initials section (mandatory disclosure, parenting class, QDRO notice, hearings attendance, no tax advice)

### Flat Fee
- Parties block + matter description + flat fee amount
- Scope: Limited scope per Rule 4-1.2(c). Services strictly limited to Scope Checklist.
- Pre-populate checklist with ✔ for agreed services, ☐ for all others
- Fees: Flat fee earned upon receipt. Expenses separate. Termination rates: $450/hr attorney, $200/hr staff, $45 minimum per call.
- Discovery late fees: $175/day past internal deadline, $500 motion for extension
- No refunds clause
- Scope Checklist as final section with CLIENT ACKNOWLEDGMENT block

### Limited-Scope Hourly
- Parties block
- Purpose and Limited Scope: numbered bullet list of each specific service included
- "Any services not expressly listed above are excluded."
- Hourly rates: attorney $450, paralegal/staff $175, minimum increment 0.1 hr
- Initial retainer for this engagement
- Invoice due within 10 days, line-item objection rule
- Late fees, nonpayment → withdrawal
- Informed consent + risks of limited scope
- Conversion to full representation clause
- Scope Selection Addendum with initials line per service
- Notice of Limited Appearance (if applicable)
- Client Acknowledgment and Informed Consent block

### Flat Fee Addendum
- References original agreement by date
- "All terms of Original Agreement remain in full force."
- Additional flat fee amount
- Additional services checklist (pre-populate agreed items)
- Services expressly not included
- Automatic termination upon completion
- Client informed consent block

### Name Change
- Service type selection: Adult / Minor / Family (mark appropriate)
- Flat fee + filing fee responsibility
- Services included: petition drafting, exhibits, filing, fingerprint instructions, final judgment, hearing, guidance on certified copies
- Client responsibilities: questionnaire, ID/birth certificate, fingerprinting, attend hearing
- 30-day cooperation / response rule for termination

### CS Review & Strategy Session
- $750 flat fee, non-refundable
- Services: FA review, order review, CS evaluation, 75-min session, email summary, optional DIY resources
- Advice and counsel only — not court representation
- Document retrieval policy: $25 if firm pulls records
- Client initials acknowledgment block
- All services within 30 days of payment

### Paralegal Services
- $175/hr, 0.1-hr increments
- $500 initial retainer
- Replenish when below $100 — suspend if not replenished within 5 business days
- No attorney-client relationship, no legal advice, no privilege
- Client costs (filing fees, service fees) separate and due immediately on request

---

## Step 6: Voice & Tone Rules

The contractual terms are fixed. But section intro text, notices, and any explanatory
language must follow Neave Family Law Group, P.A. brand voice:

- **Direct, no fluff.** One sentence to say what you mean.
- **Plain English over legalese.** "You agree to pay" not "Client hereby covenants to remit."
- **Empowering, not condescending.** Frame client obligations as things that protect them.
- **No weasel words.** "Firm will" not "Firm may endeavor to."
- **Confidence without harshness.** Clear boundaries stated plainly.

Examples:
- ✅ "Work begins when this agreement is signed and payment is received."
- ✅ "Documents sent after the deadline trigger automatic rush charges. No exceptions."
- ✅ "This covers exactly what's checked below. Nothing more."
- ❌ "The Client understands and acknowledges that the Firm shall not be obligated..."
- ❌ "Please be advised that pursuant to the terms set forth herein..."

---

## Step 7: Output and Delivery

1. Generate the file to `/mnt/user-data/outputs/[filename].docx`
2. Validate: `python3 /mnt/skills/public/docx/scripts/office/validate.py [filepath]`
3. If validation fails: unpack, fix XML, repack
4. Present file for download
5. In chat (not in the doc), tell staff:
   - Which contract type was generated
   - Any fields left as placeholders that need review
   - Whether attorney needs to confirm scope before sending to client
   - "Save to {{PM_SYSTEM}} under Client Docs → Contracts"

---

## Firm Rules

1. **Output is always a .docx.** Never paste contract text into chat.
2. **Brand spec is non-negotiable.** 4-color header bar, Arial throughout, correct hex values on every element.
3. **Never fabricate terms.** Use the source contracts as the legal authority. If a term isn't in the source docs, flag it rather than inventing it.
4. **Scope must match exactly.** Whatever was agreed in onboarding, that's what gets checked. Do not add unchecked items to the scope.
5. **Populated fields in black, blank/unknown fields in gray with underscores.** Never leave a field silently blank.
6. **Flag before sending.** Every generated retainer needs attorney eyes before going to the client. Note this explicitly in chat after delivering the file.
7. **All fees, rates, and deadlines must come from the source contracts** — do not change them unless Angela R. Neave has explicitly confirmed a different rate for this matter.

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

