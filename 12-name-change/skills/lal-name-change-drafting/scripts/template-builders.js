/**
 * Neave Family Law Group, P.A. Name Change — Template Builders
 * ------------------------------------
 * Validated 2026-07-17/18 against real PDF exports of the firm's master
 * templates (#01-#23), which are maintained in this Project's Knowledge base.
 * See ../SKILL.md "FORMATTING SOURCE OF TRUTH" for how/when to re-validate.
 *
 * Each function takes a `data` object of intake-derived fields and returns
 * a docx `children` array (pass into a Document's section.children, along
 * with the standard page setup in ../SKILL.md).
 *
 * Unfilled fields fall back to bracketed [PLACEHOLDERS] automatically —
 * never fabricate a value the intake/matter file doesn't confirm.
 */
const { AlignmentType } = require("docx");
const H = require("./helpers");
const { r, p, title, plain, numbered, numberedHeading, lettered, notaryBlock, firmBlock, judgeBlock, letterHeader, caption } = H;

// f(value, placeholderLabel) -> value if present/non-empty, else "[PLACEHOLDERLABEL]"
const f = (v, ph) => (v === undefined || v === null || v === "" ? `[${ph}]` : v);

const CERT = (data, extra = "") => `I HEREBY CERTIFY that a copy of the foregoing was filed with the Clerk via the Efiling Portal on ${f(data.filedDate, "DATE")}.${extra}`;

// ================= 01 — Petition for Change of Name (Adult) =================
function buildAdultPetition(data = {}) {
  const d = data;
  return [
    ...caption({
      circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: "IN RE:  THE NAME CHANGE OF",
      partyLines: [{ text: f(d.currentName, "PETITIONER'S CURRENT FULL LEGAL NAME") }, { text: "An Adult.", indent: 720 }],
    }),
    title("PETITION FOR CHANGE OF NAME (ADULT)"),
    plain("Petitioner states as follows:"),
    numbered(1, `Petitioner's complete present name is ${f(d.currentName, "CURRENT FULL LEGAL NAME")}. Petitioner requests that ${f(d.pronoun, "his/her/their")} name be changed to ${f(d.requestedName, "REQUESTED FULL NAME")}.`),
    numbered(2, `Petitioner lives in ${f(d.county, "COUNTY")} County, Florida, at ${f(d.address, "STREET ADDRESS, CITY, STATE, ZIP")}.`),
    numbered(3, `Petitioner was born on ${f(d.dob, "DATE OF BIRTH")}, in ${f(d.birthplace, "CITY, STATE")}. A copy of ${f(d.pronoun, "his/her/their")} birth certificate is attached as Exhibit A.`),
    p({ indent: { left: 720, hanging: 720 }, spacing: { after: 100 }, children: [r("4.\tPetitioner's parents' full legal names are:")] }),
    lettered("a", `Father: ${f(d.fatherName, "FATHER'S FULL LEGAL NAME")}`),
    lettered("b", `Mother: ${f(d.motherName, "MOTHER'S FULL LEGAL NAME")}, and her maiden name is ${f(d.motherMaidenName, "MOTHER'S MAIDEN NAME")}.`),
    numbered(5, "Petitioner has lived at the following places since birth:"),
    plain(f(d.residenceHistory, "LIST ALL ADDRESSES SINCE BIRTH WITH DATE RANGES")),
    numberedHeading(6, "Family"),
    lettered("a", d.maritalStatus ? d.maritalStatus : "[not married / married to (SPOUSE'S FULL NAME)]"),
    numberedHeading(7, "Former Names"),
    lettered("a", d.priorNameChange || "Petitioner's name has [never / previously] been changed by a court order."),
    lettered("b", d.formerNames || "Petitioner has [never / previously] been known or called by any other name."),
    numberedHeading(8, "Occupation"),
    lettered("a", `Petitioner's occupation is ${f(d.occupation, "OCCUPATION")}.`),
    lettered("b", `Petitioner is currently employed by ${f(d.employer, "EMPLOYER NAME AND ADDRESS")}.`),
    plain(`PREVIOUS EMPLOYMENT: During the past 5 years, Petitioner has had the following jobs: ${f(d.employmentHistory, "LIST EMPLOYER, DATES, AND ADDRESS FOR EACH")}`),
    numberedHeading(9, "Business"),
    lettered("a", d.business || "Petitioner [does not own or operate a business / owns or operates the following business: (NAME/ADDRESS)]."),
    numberedHeading(10, "Profession"),
    lettered("a", d.profession || "Petitioner is [not in a profession requiring a license / in a profession: (PROFESSION)]."),
    lettered("b", `Petitioner has practiced this profession at the following places: ${f(d.professionHistory, "LIST")}`),
    numberedHeading(11, "Education"),
    plain(f(d.education, "LIST SCHOOLS ATTENDED, DATES, AND DEGREES/DIPLOMAS RECEIVED")),
    numberedHeading(12, "Criminal History"),
    lettered("a", d.criminalHistory || "Petitioner has [never been arrested for or charged with, pled guilty or nolo contendere to, or been found to have committed a criminal offense, regardless of the adjudication / the following criminal history: (DESCRIBE)]."),
    lettered("b", "Petitioner has not ever been required to register as a sexual predator under section 775.21, Florida Statutes, and has not ever been required to register as a sexual offender under section 943.0435, Florida Statutes."),
    numberedHeading(13, "Bankruptcy"),
    lettered("a", d.bankruptcy || "Petitioner has [not been / been] adjudicated bankrupt."),
    numberedHeading(14, "Creditor Judgments"),
    lettered("a", d.creditorJudgments || "Petitioner [does not have / has] a money judgment entered against him/her/them by a creditor."),
    numbered(15, "Fingerprints and Criminal History Records Check. Unless Petitioner is seeking to restore a former name, a copy of Petitioner's fingerprints has been taken in a manner approved by the Department of Law Enforcement and submitted for a state and national criminal history records check. Petitioner understands that Petitioner cannot request a hearing on this Petition until the Clerk of Court receives the results of the criminal history records check."),
    numbered(16, "Petitioner has no ulterior or illegal purpose for filing this petition; and, granting it will not in any manner invade the property rights of others, whether partnership, patent, goodwill, privacy, trademark, or otherwise."),
    numbered(17, "Petitioner's civil rights have never been suspended, or, if Petitioner's civil rights have been suspended, they have been fully restored."),
    plain("I understand that I am swearing or affirming under oath to the accuracy of the statements made in this document. I further understand that the punishment for knowingly making a false statement or incomplete disclosure includes fines and/or imprisonment."),
    ...notaryBlock(f(d.currentName, "PETITIONER'S FULL NAME"), f(d.county, "COUNTY")),
    ...firmBlock({ attorneys: d.attorneys || ["attorney"] }),
  ];
}

// ================= 02 — Petition for Name Change of a Minor =================
function buildMinorPetition(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: "IN RE: THE NAME CHANGE OF",
      partyLines: [{ text: f(d.childCurrentName, "MINOR CHILD'S CURRENT FULL NAME") }, { text: "A Minor.", indent: 720 }] }),
    title("PETITION FOR NAME CHANGE OF A MINOR"),
    plain(`COMES NOW the Petitioner/${f(d.parentRole, "Mother/Father")}, ${f(d.petitionerName, "PETITIONING PARENT'S FULL NAME")}, who files this Petition for Name Change of a Minor, and states the following:`),
    numbered(1, `The Minor Child's complete present name is ${f(d.childCurrentName, "MINOR CHILD'S CURRENT FULL NAME")}. Petitioner requests that the child's name be changed to ${f(d.childRequestedName, "MINOR CHILD'S REQUESTED FULL NAME")}.`),
    numbered(2, `Petitioner is the ${f(d.parentMaritalStatus, "unmarried/married")} ${f(d.parentRoleLower, "mother/father")} of the Minor Child and lives in ${f(d.county, "COUNTY")} County, Florida, at ${f(d.address, "STREET ADDRESS, CITY, STATE, ZIP")}.`),
    numbered(3, `The Minor Child was born on ${f(d.childDob, "DATE OF BIRTH")}, in ${f(d.childBirthplace, "COUNTY")}, Florida. A copy of ${f(d.childPronoun, "his/her")} birth certificate is attached hereto as Exhibit A.`),
    p({ indent: { left: 720, hanging: 720 }, spacing: { after: 100 }, children: [r("4.\tThe Minor Child's parents' full legal names are:")] }),
    lettered("a", `${f(d.fatherName, "FATHER'S FULL NAME")}, biological father.`),
    lettered("b", `${f(d.motherName, "MOTHER'S FULL NAME")}, biological mother.`),
    plain(d.consentStatus || "[Select one:] The non-petitioning parent consents to this name change and his/her duly executed Consent is attached hereto as Exhibit B. / The non-petitioning parent's consent could not be obtained because [EXPLAIN \u2014 ATTORNEY REVIEW REQUIRED]."),
    numbered(5, "The minor child has lived at the following places since birth:"),
    plain(f(d.childResidenceHistory, "LIST ADDRESS, FROM DATE, TO DATE FOR EACH RESIDENCE")),
    numberedHeading(6, "Family"),
    lettered("a", "The minor child is not married."),
    lettered("b", "The minor child has no children."),
    numberedHeading(7, "Former Names"),
    plain(d.formerNames || "Petitioner and minor child have [never / previously] been known or called by any other name."),
    numberedHeading(8, "Criminal History"),
    lettered("a", "The minor child has never been arrested for or charged with, pled guilty or nolo contendere to, or been found to have committed a criminal offense, regardless of the adjudication."),
    lettered("b", "The minor child has not ever been required to register as a sexual predator under section 775.21, Florida Statutes, and has not ever been required to register as a sexual offender under section 943.0435, Florida Statutes."),
    numberedHeading(9, "Bankruptcy"),
    plain("The minor child has not been adjudicated bankrupt."),
    numberedHeading(10, "Creditor Judgments"),
    plain(`The minor child does not have a money judgment entered against ${f(d.childPronounObj, "him/her")} by a creditor.`),
    numbered(11, "Fingerprints and Criminal History Records Check \u2014 BOTH child and Petitioner. Unless Petitioner is seeking to restore a former name, a copy of fingerprints has been taken in a manner approved by the Department of Law Enforcement and submitted for a state and national criminal history records check."),
    numbered(12, "Petitioner has no ulterior or illegal purpose for filing this petition, and granting it will not in any way interfere with the property rights of others, whether partnership, patent, goodwill, privacy, trademark, or otherwise."),
    numbered(13, "The minor child's civil rights have never been suspended."),
    plain("I understand that I am swearing or affirming under oath to the truthfulness of the claims made in this petition and that the punishment for knowingly making a false statement includes fines and/or imprisonment."),
    ...notaryBlock(f(d.petitionerName, "PETITIONING PARENT'S FULL NAME"), f(d.county, "COUNTY")),
    ...firmBlock({ attorneys: d.attorneys || ["attorney"] }),
  ];
}

// ================= 05 — Notice of Appearance (Adult) =================
function buildNOAAdult(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: "IN RE: THE NAME CHANGE OF", partyLines: [{ text: f(d.currentName, "PETITIONER'S FULL NAME") }, { text: "An Adult.", indent: 720 }] }),
    title("NOTICE OF APPEARANCE"),
    plain(`COMES NOW Neave Family Law Group, P.A., by and through the undersigned attorneys, and files its appearance as counsel of record on behalf of the Petitioner, ${f(d.currentName, "PETITIONER'S FULL NAME")}, and requests that copies of all future pleadings filed herein be supplied to undersigned counsel.`),
    ...firmBlock({ attorneys: d.attorneys || ["attorney"], certService: CERT(d) }),
  ];
}

// ================= 08 — Notice of Related Cases =================
function buildRelatedCases(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: d.inRe || "IN RE: THE NAME CHANGE OF", partyLines: d.partyLines || [{ text: f(d.currentName, "PETITIONER'S / MINOR CHILD'S FULL NAME") }, { text: "An Adult.", indent: 720 }] }),
    title("NOTICE OF RELATED CASES"),
    numbered(1, "Petitioner submits this Notice of Related Cases as required by Florida Rule of Judicial Administration 2.545(d). A related case may be an open or closed civil, criminal, guardianship, domestic violence, juvenile delinquency, juvenile dependency, or domestic relations case."),
    plain(d.relatedCases || "There are no related cases."),
    ...firmBlock({ attorneys: d.attorneys || ["attorney"], certService: CERT(d) }),
  ];
}

// ================= 10 — Notice of Hearing (Final Hearing) =================
function buildNoticeOfHearing(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: d.inRe || "IN RE: THE NAME CHANGE OF", partyLines: d.partyLines || [{ text: f(d.currentName, "PETITIONER'S / MINOR CHILD'S FULL NAME") }, { text: "An Adult.", indent: 720 }] }),
    title("NOTICE OF HEARING"),
    p({ alignment: AlignmentType.CENTER, spacing: { after: 300 }, children: [r("(Motion Calendar)")] }),
    plain(`PLEASE TAKE NOTICE that the Petitioner, ${f(d.currentName, "PETITIONER'S FULL NAME")}, by and through the undersigned attorney, will call up for hearing the following:`),
    p({ alignment: AlignmentType.CENTER, spacing: { after: 300 }, children: [r(`FINAL HEARING - ${f(d.caseTypeLabel, "NAME CHANGE / FAMILY NAME CHANGE")}`, { bold: true })] }),
    plain(`before the Honorable ${f(d.judgeName, "JUDGE'S FULL NAME")}, Circuit Court Judge, via Zoom, as follows:`),
    plain(`DATE: ${f(d.hearingDate, "HEARING DATE")}, at ${f(d.hearingTime, "HEARING TIME")}.`),
    plain(`VIA ZOOM LINK:   ${f(d.zoomLink, "ZOOM LINK")}`),
    plain("PLEASE GOVERN YOURSELF ACCORDINGLY."),
    plain("MOVING COUNSEL CERTIFIES (A) that a good faith effort has been made to resolve this matter prior to noticing this motion for hearing and (B) that the issues before the Court may be heard and resolved by the court within five (5) minutes."),
    plain(`If you are a person with a disability who needs any accommodation in order to participate in this proceeding, you are entitled, at no cost to you, to certain assistance. Please contact the Court Administrator's ADA Coordinator at ${f(d.adaPhone, "ADA COORDINATOR PHONE")} within two working days of your receipt of this notice.`),
    ...firmBlock({ attorneys: d.attorneys || ["attorney"], certService: CERT(d) }),
  ];
}

// ================= 13 — Final Judgment of Change of Name (Adult) =================
function buildFinalJudgmentAdult(data = {}) {
  const d = data;
  return [
    ...caption({ circuit: d.circuit, county: d.county, caseNo: d.caseNo, division: d.division,
      inRe: "IN RE: THE NAME CHANGE OF", partyLines: [{ text: f(d.currentName, "PETITIONER'S CURRENT FULL NAME") }, { text: "Petitioner,", indent: 720 }] }),
    title("FINAL JUDGMENT OF CHANGE OF NAME (ADULT)"),
    plain(`This cause came before the Court on ${f(d.hearingDate, "HEARING DATE")}, for a hearing on the Petitioner's Petition for Change of Name (Adult) under section 68.07, Florida Statutes; and it appearing to the Court that:`),
    numbered(1, `Petitioner was born in ${f(d.birthplace, "CITY, STATE")}, on ${f(d.dob, "DATE OF BIRTH")}.`),
    numbered(2, `Petitioner is a bona fide resident of ${f(d.county, "COUNTY")} County, Florida, residing at ${f(d.address, "STREET ADDRESS, CITY, STATE, ZIP")}.`),
    numbered(3, d.restorationNote || "Petitioner's request is not for any ulterior or illegal purpose."),
    numbered(4, "Granting this petition will not in any manner invade the property rights of others, whether partnership, patent, goodwill, privacy, trademark, or otherwise."),
    plain(`WHEREFORE, IT IS ORDERED that Petitioner's present name of ${f(d.currentName, "CURRENT FULL NAME")} is hereby changed to ${f(d.requestedName, "REQUESTED FULL NAME")}, by which Petitioner shall hereafter be known.`),
    plain(`DONE AND ORDERED in ${f(d.county, "COUNTY")} County, Florida, on ________________________.`),
    ...judgeBlock(f(d.judgeName, "JUDGE'S FULL NAME")),
  ];
}

// ================= 19/21/22 — Client letters (shared shape) =================
function buildClientLetter(data = {}) {
  const d = data;
  return [
    ...letterHeader(f(d.subject, "SUBJECT")),
    plain(`Dear ${f(d.clientFirstName, "CLIENT NAME")},`, { after: 300 }),
    ...(d.bodyParagraphs || [plain("[BODY PARAGRAPHS]")]),
    plain("Warmly,", { after: 200 }),
    plain(f(d.signerName, "STAFF/ATTORNEY NAME"), { after: 0 }),
    plain("Neave Family Law Group, P.A.", { after: 300 }),
    plain("CONFIDENTIALITY NOTICE: This communication and any attachments are intended solely for the named recipient and may contain privileged or confidential information.", { after: 0 }),
  ];
}

module.exports = {
  buildAdultPetition, buildMinorPetition, buildNOAAdult, buildRelatedCases,
  buildNoticeOfHearing, buildFinalJudgmentAdult, buildClientLetter, f, CERT,
};
