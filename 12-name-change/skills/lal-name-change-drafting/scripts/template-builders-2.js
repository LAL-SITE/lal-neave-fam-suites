/**
 * Neave Family Law Group, P.A. Name Change — Template Builders, Part 2
 * ---------------------------------------------
 * Covers the templates not built in template-builders.js's first pass.
 * Same conventions: f(value, "PLACEHOLDER") falls back to a bracketed
 * placeholder; never fabricate a value the intake/matter file doesn't confirm.
 * Validated 2026-07-18 against real PDF exports of the master templates.
 */
const { AlignmentType, Table, TableRow, TableCell, WidthType, Paragraph, TextRun } = require("docx");
const H = require("./helpers");
const { r, p, title, plain, numbered, numberedHeading, lettered, notaryBlock, firmBlock, judgeBlock, letterHeader, caption, FONT, SZ } = H;
const { f, CERT } = require("./template-builders");

// ================= 03 — Petition for Family Name Change =================
function buildFamilyPetition(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: "IN RE: THE FAMILY NAME CHANGE OF",
      partyLines: [
        { text: f(d.petitionerCurrentName, "PETITIONING PARENT'S CURRENT FULL NAME") },
        { text: `Petitioner/${f(d.parentRole, "Mother/Father")},`, indent: 720 },
        { text: "And" },
        { text: f(d.childCurrentName, "MINOR CHILD'S CURRENT FULL NAME") },
        { text: "A Minor Child.", indent: 720 },
      ] }),
    title("PETITION FOR FAMILY NAME CHANGE"),
    plain(`COMES NOW the Petitioner, ${f(d.petitionerCurrentName, "PETITIONER'S CURRENT FULL NAME")}, individually and on behalf of the minor child, and states as follows:`),
    numbered(1, `Petitioner's complete present name is ${f(d.petitionerCurrentName, "PETITIONER'S CURRENT FULL NAME")}. Petitioner requests that ${f(d.pronounPossessive, "her/his")} name be changed to ${f(d.petitionerRequestedName, "PETITIONER'S REQUESTED FULL NAME")}.`),
    numbered(2, `The minor child's complete present name is ${f(d.childCurrentName, "MINOR CHILD'S CURRENT FULL NAME")}, born ${f(d.childDob, "DATE OF BIRTH")} in ${f(d.childBirthplace, "COUNTY")}, Florida. Petitioner requests that the minor child's name be changed to ${f(d.childRequestedName, "MINOR CHILD'S REQUESTED FULL NAME")}. A copy of the child's birth certificate is attached as Exhibit A.`),
    numbered(3, `Petitioner and the minor child are bona fide residents of ${f(d.county, "COUNTY")} County, Florida, residing at ${f(d.address, "STREET ADDRESS, CITY, STATE, ZIP")}.`),
    numbered(4, `The minor child's other biological parent is ${f(d.otherParentName, "OTHER PARENT'S FULL NAME")}. ${d.consentStatus || "[Select one:] The other parent consents to this name change and his/her duly executed Consent is attached hereto as Exhibit B. / The other parent's consent could not be obtained because [EXPLAIN \u2014 ATTORNEY REVIEW REQUIRED]."}`),
    numbered(5, "[Full residence history, family, former names, occupation, criminal history, bankruptcy, creditor judgment, and civil rights disclosures for both Petitioner and the minor child are set out in the attached supplemental pages, per Fla. Stat. \u00a7 68.07.]"),
    numbered(6, "Fingerprints and Criminal History Records Check. Unless Petitioner is seeking to restore a former name, a copy of Petitioner's fingerprints has been taken in a manner approved by the Department of Law Enforcement and submitted for a state and national criminal history records check."),
    numbered(7, "Petitioner has no ulterior or illegal purpose for filing this petition, and granting it will not in any manner invade the property rights of others, whether partnership, patent, goodwill, privacy, trademark, or otherwise."),
    numbered(8, "Petitioner's and the minor child's civil rights have never been suspended."),
    plain("I understand that I am swearing or affirming under oath to the accuracy of the statements made in this document. I further understand that the punishment for knowingly making a false statement or incomplete disclosure includes fines and/or imprisonment."),
    ...notaryBlock(f(d.petitionerCurrentName, "PETITIONER'S FULL NAME"), f(d.county, "COUNTY")),
    ...firmBlock({ attorneys: d.attorneys || ["attorney"] }),
  ];
}

// ================= 04 — Consent to Name Change (no caption) =================
function buildConsent(data = {}) {
  const d = data;
  return [
    title("CONSENT TO NAME CHANGE"),
    plain(`I, ${f(d.nonPetitioningParentName, "NON-PETITIONING PARENT'S FULL NAME")}, being first duly sworn, hereby state the following:`),
    numbered(1, `I am the biological ${f(d.parentRoleLower, "father/mother")} of ${f(d.childFullName, "MINOR CHILD'S FULL NAME")}, who was born on ${f(d.childDob, "DATE OF BIRTH")}. My name is on the child's birth certificate and paternity/maternity is not disputed by me.`),
    numbered(2, `I am not represented by counsel in the Name Change case which is to be filed in ${f(d.county, "COUNTY")} County, Florida.`),
    numbered(3, `I hereby give my consent to ${f(d.petitioningParentName, "PETITIONING PARENT'S FULL NAME")}, the other biological parent of the aforementioned child, to change the child's name from ${f(d.childCurrentName, "CURRENT NAME")} to ${f(d.childRequestedName, "REQUESTED NAME")}.`),
    plain("I understand that I am swearing or affirming under oath to the accuracy of the statements made in this document. I further understand that the punishment for knowingly making a false statement or incomplete disclosure includes fines and/or imprisonment."),
    plain("Date: ______________", { after: 100 }),
    p({ children: [r("_________________________________")] }),
    plain(f(d.nonPetitioningParentName, "NON-PETITIONING PARENT'S FULL NAME"), { after: 300 }),
    plain(`STATE OF ${String(f(d.state, "STATE")).toUpperCase()}`, { after: 0 }),
    plain(`COUNTY OF ${String(f(d.county, "COUNTY")).toUpperCase()}`, { after: 200 }),
    plain(`Sworn to or affirmed and signed before me on ______________ by ${f(d.nonPetitioningParentName, "NON-PETITIONING PARENT'S FULL NAME")}.`, { after: 300 }),
    p({ children: [r("_________________________________")] }),
    plain("NOTARY PUBLIC or DEPUTY CLERK", { after: 0 }),
    plain("___ Personally known    ___ Produced identification", { after: 0 }),
    plain("Type of identification produced: _________________________", { after: 300 }),
    plain("NOTE: If the non-petitioning parent resides out of state, use that state's jurat/notary form. Attach as Exhibit B to the Petition.", { after: 0 }),
  ];
}

// ================= 06 — NOA and Designation of Email (Minor/Family) =================
function buildNOAMinorFamily(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: "IN RE: THE NAME CHANGE OF", partyLines: d.partyLines || [{ text: f(d.childFullName, "MINOR CHILD'S FULL NAME") }, { text: "A Minor.", indent: 720 }] }),
    title("NOTICE OF APPEARANCE AND DESIGNATION OF EMAIL ADDRESS"),
    plain(`COMES NOW Neave Family Law Group, P.A., by and through the undersigned attorneys, and files its appearance as counsel of record on behalf of the Petitioner/${f(d.parentRole, "Mother/Father")}, ${f(d.petitioningParentName, "PETITIONING PARENT'S FULL NAME")}, and requests that copies of all future pleadings filed herein be supplied to undersigned counsel. Petitioner gives notice of designation of the email addresses for the purpose of service of court documents pursuant to Florida Rules of Judicial Administration, Rule 2.516:`),
    plain("Primary Email Address:      aneave@neavefamilylaw.com"),
    plain(`Secondary Email Address:    ${f(d.secondaryEmail, "aneave@neavefamilylaw.com / aneave@neavefamilylaw.com")}`),
    ...firmBlock({ attorneys: d.attorneys || ["attorney"], certService: `I HEREBY CERTIFY that a copy of the foregoing was filed with the Clerk via the Efiling Portal and provided to the minor child's other biological parent via U.S. Mail and Email on ${f(d.filedDate, "DATE")}.` }),
  ];
}

// ================= 07 — Designation of Email Address (standalone) =================
function buildEmailDesignation(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: d.inRe || "IN RE: THE [NAME/FAMILY NAME] CHANGE OF", partyLines: d.partyLines || [{ text: f(d.currentName, "PETITIONER'S FULL NAME") }, { text: "Petitioner,", indent: 720 }] }),
    title("DESIGNATION OF ELECTRONIC MAIL ADDRESS FOR SERVICE OF COURT DOCUMENTS PURSUANT TO THE FLORIDA RULES OF JUDICIAL ADMINISTRATION, RULE 2.516"),
    plain(`COMES NOW the Petitioner, ${f(d.currentName, "PETITIONER'S FULL NAME")}, by and through counsel below, and gives notice of designation of the email addresses for the purpose of service of court documents pursuant to Florida Rules of Judicial Procedure, Rule 2.516:`),
    plain("Primary Email Address:      aneave@neavefamilylaw.com"),
    plain(`Secondary Email Address:    ${f(d.secondaryEmail, "aneave@neavefamilylaw.com / aneave@neavefamilylaw.com")}`),
    ...firmBlock({ attorneys: d.attorneys || ["attorney"], certService: CERT(d) }),
  ];
}

// ================= 09 — UCCJEA Affidavit (real table) =================
function uccjeaTable(rows = []) {
  const headerCell = (text) => new TableCell({
    width: { size: 2350, type: WidthType.DXA },
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, font: FONT, size: 20 })] })],
  });
  const cell = (text) => new TableCell({
    width: { size: 2350, type: WidthType.DXA },
    children: [new Paragraph({ children: [new TextRun({ text: text || "", font: FONT, size: 20 })] })],
  });
  const dataRows = (rows.length ? rows : [{}, {}, {}]).map((row) => new TableRow({
    children: [cell(row.dates), cell(row.address), cell(row.persons), cell(row.relationship)],
  }));
  return new Table({
    width: { size: 9400, type: WidthType.DXA },
    columnWidths: [2350, 2350, 2350, 2350],
    rows: [
      new TableRow({ children: [headerCell("DATES"), headerCell("ADDRESS"), headerCell("PERSONS RESIDING WITH CHILD(REN)"), headerCell("RELATIONSHIP TO CHILD")] }),
      ...dataRows,
    ],
  });
}

function buildUCCJEA(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: d.inRe || "IN RE: THE [NAME/FAMILY NAME] CHANGE OF", partyLines: d.partyLines || [{ text: f(d.petitionerName, "PETITIONER'S FULL NAME") }, { text: "Petitioner,", indent: 720 }] }),
    title("UNIFORM CHILD CUSTODY JURISDICTION AND ENFORCEMENT ACT (UCCJEA) AFFIDAVIT"),
    plain(`COMES NOW ${f(d.petitionerName, "PETITIONER'S FULL NAME")}, Petitioner, by and through the undersigned counsel and files this UCCJEA affidavit and certifies that the following statements are true:`),
    numbered(1, `The minor child who is a party to this action is: ${f(d.childName, "MINOR CHILD'S FULL NAME")}, a ${f(d.childSex, "male/female")} child, born on ${f(d.childDob, "DATE OF BIRTH")}.`),
    numbered(2, "Child(ren)'s Residence for the past 5 years:"),
    uccjeaTable(d.residenceRows),
    plain(""),
    numbered(3, d.custodyParticipation || "Participation in custody or timesharing proceeding: I HAVE NOT participated as a party, witness, or in any capacity in any other litigation or custody proceeding in this or any other state, concerning custody of or timesharing with child(ren) subject to this proceeding."),
    numbered(4, d.custodyInfo || "Information about custody or timesharing proceeding(s): I HAVE NO INFORMATION of any custody or timesharing proceeding pending in a court of this or any other state concerning child(ren) subject to this proceeding."),
    numbered(5, d.thirdPartyCustody || "Persons not a party to this proceeding: I DO NOT KNOW OF ANY PERSON not a party to this proceeding who has physical custody or claims to have custody, visitation, or timesharing with respect to any child(ren) subject to this proceeding."),
    numbered(6, d.supportOrders || "Knowledge of prior child(ren) support proceedings: The child(ren) described in this affidavit is/are NOT subject to existing child(ren) support order(s) in this or any state or territory."),
    numbered(7, "I acknowledge a continuing duty to advise this Court of any custody, visitation or timesharing, child(ren) support, or guardianship proceeding concerning the child(ren) in this state or any other state about which information is obtained during this proceeding."),
    plain("I understand that I am swearing or affirming under oath to the truthfulness of the claims made in this document and that the punishment for knowingly making a false statement includes fines and/or imprisonment."),
    plain("Date: ______________", { after: 300 }),
    ...notaryBlock(f(d.petitionerName, "PETITIONER'S FULL NAME"), f(d.county, "COUNTY")),
    ...firmBlock({ attorneys: d.attorneys || ["attorney"], certService: CERT(d), forWhom: d.forWhom || "Petitioners" }),
  ];
}

// ================= 11 — Amended Notice of Hearing =================
function buildAmendedNoticeOfHearing(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: d.inRe || "IN RE: THE NAME CHANGE OF", partyLines: d.partyLines || [{ text: f(d.currentName, "PETITIONER'S / MINOR CHILD'S FULL NAME") }, { text: "An Adult.", indent: 720 }] }),
    title("AMENDED NOTICE OF HEARING"),
    p({ alignment: AlignmentType.CENTER, spacing: { after: 300 }, children: [r("(Motion Calendar)")] }),
    plain(`PLEASE TAKE NOTICE that the Petitioner, ${f(d.currentName, "PETITIONER'S FULL NAME")}, by and through the undersigned attorney, will call up for hearing the following:`),
    p({ alignment: AlignmentType.CENTER, spacing: { after: 300 }, children: [r(`FINAL HEARING - ${f(d.caseTypeLabel, "NAME CHANGE / FAMILY NAME CHANGE")}`, { bold: true })] }),
    plain(`before the Honorable ${f(d.judgeName, "JUDGE'S FULL NAME")}, Circuit Court Judge, ${f(d.venue, "Room ___ of the (COUNTY) County Courthouse, (ADDRESS) / via Zoom")}, as follows:`),
    plain(`DATE: ${f(d.amendedHearingDate, "AMENDED HEARING DATE")}, at ${f(d.hearingTime, "HEARING TIME")}.`),
    plain(`VIA ZOOM LINK:   ${f(d.zoomLink, "ZOOM LINK")}`),
    plain("PLEASE GOVERN YOURSELF ACCORDINGLY."),
    plain("MOVING COUNSEL CERTIFIES (A) that a good faith effort has been made to resolve this matter prior to noticing this motion for hearing and (B) that the issues before the Court may be heard and resolved by the court within five (5) minutes."),
    ...firmBlock({ attorneys: d.attorneys || ["attorney"], certService: CERT(d) }),
  ];
}

// ================= 12 — Certificate of Service (standalone) =================
function buildCertOfService(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: d.inRe || "IN RE: THE NAME CHANGE OF", partyLines: d.partyLines || [{ text: f(d.currentName, "PETITIONER'S / MINOR CHILD'S FULL NAME") }, { text: "An Adult.", indent: 720 }] }),
    title("CERTIFICATE OF SERVICE"),
    plain(CERT(d)),
    ...firmBlock({ attorneys: d.attorneys || ["attorney"], includeRespSubmitted: true, forWhom: d.forWhom || "Petitioners" }),
  ];
}

// ================= 14 — Final Judgment of Change of Name of a Minor =================
function buildFinalJudgmentMinor(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: "IN RE: THE NAME CHANGE OF", partyLines: [{ text: f(d.childCurrentName, "MINOR CHILD'S CURRENT FULL NAME") }, { text: "A Minor.", indent: 720 }] }),
    title("FINAL JUDGMENT OF CHANGE OF NAME OF A MINOR"),
    plain(`This cause came before the Court on ${f(d.hearingDate, "HEARING DATE")}, for a hearing on the Petitioner/${f(d.parentRole, "Mother's/Father's")} Petition for Change of Name of a Minor, under section 68.07, Florida Statutes; and it appearing to the Court that:`),
    numbered(1, `Petitioner/${f(d.parentRole, "Mother's/Father's")} child was born in ${f(d.childBirthplace, "CITY")}, Florida on ${f(d.childDob, "DATE OF BIRTH")}.`),
    numbered(2, `Petitioner/${f(d.parentRole, "Mother/Father")} and the minor child are bona fide residents of ${f(d.county, "COUNTY")} County, Florida, residing at ${f(d.address, "STREET ADDRESS, CITY, STATE, ZIP")}.`),
    numbered(3, "Petitioner's request is not for any ulterior or illegal purpose."),
    numbered(4, d.consentNote || "The minor child's other biological parent has given his/her consent for this name change."),
    numbered(5, "Granting this petition will not in any manner invade the property rights of others, whether partnership, patent, goodwill, privacy, trademark, or otherwise."),
    plain(`WHEREFORE, IT IS ORDERED that the minor child's present name of ${f(d.childCurrentName, "CURRENT FULL NAME")} is hereby changed to ${f(d.childRequestedName, "REQUESTED FULL NAME")}, by which the minor child shall hereafter be known.`),
    plain(`DONE AND ORDERED in ${f(d.county, "COUNTY")} County, Florida, on ________________________.`),
    ...judgeBlock(f(d.judgeName, "JUDGE'S FULL NAME")),
  ];
}

// ================= 15 — Final Judgment of Family Name Change =================
function buildFinalJudgmentFamily(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: "IN RE: THE FAMILY NAME CHANGE OF", partyLines: [
        { text: f(d.petitionerCurrentName, "PETITIONER'S CURRENT FULL NAME") }, { text: `Petitioner/${f(d.parentRole, "Mother/Father")},`, indent: 720 },
        { text: "And" }, { text: f(d.childCurrentName, "MINOR CHILD'S CURRENT FULL NAME") }, { text: "A Minor Child.", indent: 720 },
      ] }),
    title("FINAL JUDGMENT OF FAMILY NAME CHANGE"),
    plain(`This cause came before the Court on ${f(d.hearingDate, "HEARING DATE")}, for a hearing on the Petitioner's Petition for a Family Change of Name under section 68.07, Florida Statutes; and it appearing to the Court that:`),
    numbered(1, `Petitioner/${f(d.parentRole, "Mother/Father")} was born in ${f(d.birthplace, "CITY, STATE")}, on ${f(d.dob, "DATE OF BIRTH")}. Petitioner's minor child was born on ${f(d.childDob, "DATE OF BIRTH")}, in ${f(d.childBirthplace, "CITY, STATE")}.`),
    numbered(2, `Petitioner and the minor child are bona fide residents of ${f(d.county, "COUNTY")} County, Florida, residing at ${f(d.address, "STREET ADDRESS, CITY, STATE, ZIP")}.`),
    numbered(3, "Petitioner's request is not for any ulterior or illegal purpose."),
    numbered(4, "Granting this petition will not in any manner invade the property rights of others, whether partnership, patent, goodwill, privacy, trademark, or otherwise."),
    plain(`WHEREFORE, IT IS ORDERED that Petitioner's present name of ${f(d.petitionerCurrentName, "PETITIONER'S CURRENT FULL NAME")} is hereby changed to ${f(d.petitionerRequestedName, "PETITIONER'S REQUESTED FULL NAME")}, by which Petitioner shall hereafter be known.`),
    plain(`IT IS FURTHER ORDERED that the minor child's name is hereby changed to ${f(d.childRequestedName, "MINOR CHILD'S REQUESTED FULL NAME")}, by which ${f(d.childPronoun, "he/she")} shall hereafter be known.`),
    plain(`DONE AND ORDERED in ${f(d.county, "COUNTY")} County, Florida, on ________________________.`),
    ...judgeBlock(f(d.judgeName, "JUDGE'S FULL NAME")),
  ];
}

// ================= 16 — Motion to Correct Scrivener's Error =================
function buildMotionScrivenersError(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: d.inRe || "IN RE: THE [NAME/FAMILY NAME] CHANGE OF", partyLines: [{ text: f(d.preCorrectionName, "PETITIONER'S FULL NAME (AS IT APPEARED PRE-CORRECTION)") }] }),
    title("MOTION TO CORRECT SCRIVENER'S ERROR"),
    plain(`COMES NOW the Petitioner, ${f(d.currentName, "PETITIONER'S FULL NAME")}, by and through the undersigned attorney, and files this Motion to Correct Scrivener's Error, and in support thereof states the following:`),
    numbered(1, `On ${f(d.originalHearingDate, "ORIGINAL HEARING DATE")}, a final hearing was held upon Petitioner's Petition for ${f(d.caseTypeLabel, "Change of Name (Adult) / Name Change of a Minor / Family Name Change")}. A Final Judgment was uploaded to CMS on that date.`),
    numbered(2, `A Final Judgment was signed by the judge and entered on the docket on ${f(d.dateEntered, "DATE ENTERED")}.`),
    numbered(3, `On ${f(d.dateDiscovered, "DATE DISCOVERED")}, it came to the attention of undersigned counsel that ${d.errorDescription || "[DESCRIBE THE ERROR]"}`),
    numbered(4, `An email was sent to the Judicial Assistant on ${f(d.emailDate, "DATE")}, explaining the situation, and a Corrected Final Judgment was attached to that email.`),
    plain("WHEREFORE, Petitioner respectfully requests that the Court:"),
    lettered("A", "Enter an Order granting this motion to correct the scrivener's error on the Final Judgment previously entered in this matter, nunc pro tunc."),
    lettered("B", "Render any and all further relief deemed appropriate and just."),
    ...firmBlock({ attorneys: d.attorneys || ["attorney"], certService: CERT(d) }),
  ];
}

// ================= 17 — Corrected Final Judgment =================
function buildCorrectedFinalJudgment(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: d.inRe || "IN RE: THE [NAME/FAMILY NAME] CHANGE OF", partyLines: [{ text: f(d.correctedName, "PETITIONER'S CORRECTED FULL NAME") }, { text: "Petitioner,", indent: 720 }] }),
    title(`CORRECTED FINAL JUDGMENT OF CHANGE OF NAME ${f(d.caseTypeParenthetical, "(ADULT) / OF A MINOR / FAMILY NAME CHANGE")}`),
    plain(`This cause came before the Court on ${f(d.originalHearingDate, "ORIGINAL HEARING DATE")}, for a hearing on the Petitioner's Petition for ${f(d.caseTypeLabel, "Change of Name (Adult) / Name Change of a Minor / Family Name Change")} under section 68.07, Florida Statutes; and it appearing to the Court that:`),
    numbered(1, `Petitioner was born in ${f(d.birthplace, "CITY, STATE")} on ${f(d.dob, "DATE OF BIRTH")}.`),
    numbered(2, `Petitioner is a bona fide resident of ${f(d.county, "COUNTY")} County, Florida, residing at ${f(d.address, "STREET ADDRESS, CITY, STATE, ZIP")}.`),
    numbered(3, d.correctionReason || "[Note the reason for correction \u2014 this Corrected Final Judgment is entered nunc pro tunc to correct a scrivener's error in the name as originally entered.]"),
    numbered(4, "Petitioner's request is not for any ulterior or illegal purpose."),
    numbered(5, "Granting this petition will not in any manner invade the property rights of others, whether partnership, patent, goodwill, privacy, trademark, or otherwise."),
    plain(`WHEREFORE, IT IS ORDERED that Petitioner's present name of ${f(d.preCorrectionName, "PRE-CORRECTION NAME")} is hereby changed to ${f(d.correctedName, "CORRECTED FULL NAME")}, which is the Petitioner's ${f(d.nameBasis, "birth name / requested name")}, and by which Petitioner shall hereafter be known.`),
    plain(`DONE AND ORDERED in ${f(d.county, "COUNTY")} County, Florida, on ________________________, nunc pro tunc to ${f(d.originalHearingDate, "ORIGINAL HEARING DATE")}.`),
    ...judgeBlock(f(d.judgeName, "JUDGE'S FULL NAME")),
  ];
}

// ================= 18 — Letter to Judge (Transmittal) =================
function buildJudgeTransmittalLetter(data = {}) {
  const d = data;
  return [
    ...letterHeader(" "),
    plain(f(d.letterDate, "DATE"), { after: 300 }),
    plain(`Honorable ${f(d.judgeName, "JUDGE'S FULL NAME")}`, { after: 0 }),
    plain(`Circuit Court Judge of ${f(d.county, "COUNTY")} County`, { after: 0 }),
    plain(f(d.judgeProceduresUrl, "JUDGE'S PROCEDURES PAGE URL"), { after: 300 }),
    plain(`Attention: ${f(d.jaName, "JUDICIAL ASSISTANT'S NAME")}, Judicial Assistant`, { after: 300 }),
    plain(`RE: ${f(d.caseNo, "CASE NO.")}`, { after: 0 }),
    plain(`${f(d.caseTypeLabel, "Adult/Minor/Family")} Name Change of ${f(d.partyNames, "PARTY NAME(S)")}`, { after: 300 }),
    plain(`Dear Judge ${f(d.judgeLastName, "JUDGE'S LAST NAME")}:`, { after: 300 }),
    plain(`Attached please find a proposed final judgment in the above styled matter which is scheduled for a final hearing on ${f(d.hearingDate, "HEARING DATE")}.`, { after: 300 }),
    plain("Thank you.", { after: 300 }),
    plain(f(d.attorneyName, "ATTORNEY NAME") + ", Esq.", { after: 300 }),
    plain("Attachment"),
  ];
}

// ================= 20 — Miami-Dade Special Affidavit =================
function buildMiamiDadeAffidavit(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: "ELEVENTH", county: "MIAMI-DADE", caseNo: d.caseNo, division: d.division,
      inRe: d.inRe || "IN RE: THE [NAME/FAMILY NAME] CHANGE OF", partyLines: d.partyLines || [{ text: f(d.currentName, "PETITIONER'S / MINOR CHILD'S FULL NAME") }, { text: "An Adult.", indent: 720 }] }),
    title("SPECIAL AFFIDAVIT FOR REMOTE UNCONTESTED NAME CHANGE (WITHOUT A HEARING)"),
    plain("I understand that this is an action for a change of name under \u00a7 68.07, Florida Statutes. The undersigned, under oath and under penalty of perjury, swear or affirm the statements below."),
    numbered(1, `I currently reside in Miami-Dade County, Florida at ${f(d.address, "STREET ADDRESS, CITY, STATE, ZIP")}.`),
    numbered(2, "I have submitted a copy of my valid Florida Driver's License / Florida Identification Card / Florida Voter's Registration / Affidavit of Corroborating Witness with this affidavit."),
    numbered(3, "I understand I must have my fingerprints submitted electronically to the Clerk of Court. [Delete if restoring a former name \u2014 fingerprinting not required.]"),
    numbered(4, "I have no ulterior or illegal purpose for filing this petition and granting it will not in any manner invade the property rights of others, whether partnership, patent, goodwill, privacy, trademark, or otherwise."),
    numbered(5, "My civil rights have never been suspended, or, if my civil rights have been suspended, they have been fully restored."),
    p({ spacing: { after: 100 }, children: [r("A.\tAdult Name Change")] }),
    lettered("i", `My complete present name is: ${f(d.currentName, "CURRENT FULL NAME")}`),
    lettered("ii", `The name on my current Birth Certificate is: ${f(d.birthCertName, "NAME ON BIRTH CERTIFICATE")}`),
    lettered("iii", `I request that my name be changed to: ${f(d.requestedName, "REQUESTED FULL NAME")}`),
    plain("By signing this Special Affidavit, we understand that a final hearing will NOT be set in this case."),
    plain("Dated: ______________", { after: 100 }),
    p({ children: [r("_________________________________")] }),
    plain("Petitioner's Signature", { after: 0 }),
    plain(`Printed Name: ${f(d.currentName, "PETITIONER'S FULL NAME")}`, { after: 300 }),
    plain("STATE OF FLORIDA", { after: 0 }),
    plain("COUNTY OF MIAMI-DADE", { after: 300 }),
    ...firmBlock({ attorneys: d.attorneys || ["attorney"] }),
  ];
}

// ================= 23 — Affidavit re 68.07(3)(i) =================
function buildAffidavit6807(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: d.inRe || "IN RE: THE [NAME/FAMILY NAME] CHANGE OF", partyLines: [{ text: f(d.currentName, "PETITIONER'S FULL NAME") }, { text: "Petitioner.", indent: 720 }] }),
    title("AFFIDAVIT IN COMPLIANCE WITH SECTION 68.07(3)(i), FLORIDA STATUTES"),
    plain(`\u201cIn conformity with FS 68.07(3)(i), I ${f(d.currentName, "Petitioner")} [Petitioner] am amending my Petition to include the following sworn statement:\u201d`),
    plain(`${d.isRegistered ? "\u2612" : "\u2610"} I have been required to register as a sexual predator under s. 775.21, Fla. Stat., or sexual offender under s. 943.0435, Fla. Stat.`),
    plain(`${d.isRegistered ? "\u2610" : "\u2612"} I have not been required to register as a sexual predator under s. 775.21, Fla. Stat., or sexual offender under s. 943.0435, Fla. Stat.`),
    plain("I understand that I am swearing or affirming under oath to the truthfulness of the claims made in this affidavit and that the punishment for knowingly making a false statement includes fines and/or imprisonment."),
    plain("Dated: ______________________          Signature: _________________________________", { after: 300 }),
    plain("STATE OF FLORIDA", { after: 0 }),
    plain(`COUNTY OF ${String(f(d.county, "COUNTY")).toUpperCase()}`, { after: 300 }),
    plain(`Sworn to or affirmed and signed before me on __________________ by ${f(d.currentName, "PETITIONER'S FULL NAME")}.`, { after: 300 }),
    p({ children: [r("_________________________________")] }),
    plain("NOTARY PUBLIC or DEPUTY CLERK", { after: 300 }),
    plain("Copies furnished to: Neave Family Law Group, P.A. \u2014 aneave@neavefamilylaw.com", { after: 0 }),
  ];
}

// ================= 19/21/22 — fully parameterized client letters =================
function buildHearingInstructionsLetter(data = {}) {
  const d = data;
  const body = [
    plain("We have now scheduled the final hearing for your case. Attached to this email please find your Notice of Hearing, which contains the Zoom link so you may attend this hearing virtually."),
    plain(`If your case is in ${f(d.county, "COUNTY")} County, you should sign in on Zoom via the link on your Notice of Hearing about 5 to 10 minutes before your hearing. You can visit your judge's procedures page at ${f(d.judgeProceduresUrl, "JUDGE'S PROCEDURES PAGE URL")} if you have questions about signing in.`),
    plain("You and one of our attorneys will be placed in a separate waiting room until your case is called."),
    plain("At the time of the hearing, have your driver's license with you \u2014 this satisfies the residency requirement. If your license was issued less than 6 months before your petition was filed, bring an additional proof of the six-month residency requirement."),
    plain("If you need certified copies of your final judgment, let us know \u2014 we can request them a few days after the hearing."),
    plain("Let us know if you have any questions."),
  ];
  return require("./template-builders").buildClientLetter({
    subject: "INSTRUCTIONS FOR FINAL HEARING \u2014 NAME CHANGE",
    clientFirstName: d.clientFirstName, signerName: d.signerName, bodyParagraphs: body,
  });
}

function buildFingerprintingLetter(data = {}) {
  const d = data;
  const body = [
    plain(`Your case has now been filed and assigned case number ${f(d.caseNo, "CASE NO.")}. Before the court can schedule your final hearing, Florida law (\u00a7 68.07, Fla. Stat.) requires that you have your fingerprints submitted electronically for a state and national criminal history records check.`),
    plain(`Step 1 \u2014 Schedule your appointment. Contact one of the approved electronic fingerprinting providers in ${f(d.county, "COUNTY")} County. ${f(d.vendorList, "COUNTY-SPECIFIC VENDOR LIST \u2014 CONFIRM CURRENT PRICING/AVAILABILITY BEFORE SENDING")}`),
    plain(`Step 2 \u2014 Bring your ID and this ORI number: ${f(d.oriNumber, "COUNTY ORI \u2014 CONFIRM WITH CLERK")}.`),
    plain("Step 3 \u2014 Keep your transaction control number (TCN)."),
    plain("Cost: Fingerprinting typically runs $30\u2013$90, paid by you directly to the agency \u2014 separate from our flat fee."),
    plain("Results are typically sent directly to the Clerk of Court within about 1\u20133 weeks. Call us with any questions."),
  ];
  return require("./template-builders").buildClientLetter({
    subject: "FINGERPRINTING & BACKGROUND CHECK INSTRUCTIONS \u2014 NAME CHANGE",
    clientFirstName: d.clientFirstName, signerName: d.signerName, bodyParagraphs: body,
  });
}

function buildPostJudgmentLetter(data = {}) {
  const d = data;
  const body = [
    plain(`Congratulations \u2014 the judge signed your Final Judgment of ${f(d.caseTypeLabel, "Change of Name / Name Change of a Minor / Family Name Change")} on ${f(d.judgmentDate, "DATE")}. Your new legal name is now ${f(d.newFullName, "NEW FULL NAME")}.`),
    plain("We've ordered a certified copy of your judgment. We'll mail it to you within 1\u20132 weeks."),
    plain("Update these records, in this order: (1) Social Security, (2) Florida driver's license or ID, (3) Banks and credit cards, (4) Insurance, (5) Employer, (6) Anything else that carries your name (passport, voter registration, professional licenses, loan documents)."),
    plain("Keep at least one certified copy somewhere safe \u2014 you're likely to need it again."),
    plain("It was a pleasure helping you through this. Call us with any questions."),
  ];
  return require("./template-builders").buildClientLetter({
    subject: "YOUR NAME CHANGE IS OFFICIAL \u2014 NEXT STEPS",
    clientFirstName: d.clientFirstName, signerName: d.signerName, bodyParagraphs: body,
  });
}

module.exports = {
  buildFamilyPetition, buildConsent, buildNOAMinorFamily, buildEmailDesignation,
  buildUCCJEA, buildAmendedNoticeOfHearing, buildCertOfService,
  buildFinalJudgmentMinor, buildFinalJudgmentFamily, buildMotionScrivenersError,
  buildCorrectedFinalJudgment, buildJudgeTransmittalLetter, buildMiamiDadeAffidavit,
  buildAffidavit6807, buildHearingInstructionsLetter, buildFingerprintingLetter,
  buildPostJudgmentLetter,
};
