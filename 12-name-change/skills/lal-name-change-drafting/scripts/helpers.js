const { Paragraph, TextRun, AlignmentType } = require("docx");

const FONT = "Times New Roman";
const SZ = 24; // 12pt

const r = (text, opts = {}) => new TextRun({ text, font: FONT, size: SZ, ...opts });
const p = (opts) => new Paragraph(opts);

// ---- Pleading caption (petitions, notices, affidavits, motions) ----
function caption({ circuit = "SEVENTEENTH", county = "BROWARD", caseNo = "[CASE NO.]", division = "[DIVISION/JUDGE]", inRe, partyLines }) {
  const circuitU = String(circuit).toUpperCase();
  const countyU = String(county).toUpperCase();
  const out = [
    p({ alignment: AlignmentType.CENTER, children: [r(`IN THE CIRCUIT COURT OF THE ${circuitU} JUDICIAL CIRCUIT,`)] }),
    p({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [r(`IN AND FOR ${countyU} COUNTY, FLORIDA`)] }),
    p({ alignment: AlignmentType.RIGHT, children: [r(`CASE NO: ${caseNo}`)] }),
    p({ alignment: AlignmentType.RIGHT, spacing: { after: 200 }, children: [r(`DIVISION NO.: ${division}`)] }),
    p({ spacing: { after: 200 }, children: [r(inRe)] }),
  ];
  partyLines.forEach((line) => {
    out.push(p({
      indent: line.indent ? { left: line.indent } : undefined,
      spacing: { after: line.after ?? 100 },
      children: [r(line.text, { bold: !!line.bold })],
    }));
  });
  out.push(p({ spacing: { after: 300 }, children: [r("______________________________________________/")] }));
  return out;
}

const title = (text, opts = {}) => p({ alignment: AlignmentType.CENTER, spacing: { after: 300 }, children: [r(text, { bold: true, ...opts })] });

const plain = (text, opts = {}) => p({ spacing: { after: opts.after ?? 200 }, children: [r(text)] });

const numbered = (num, text, opts = {}) => p({
  indent: { left: 720, hanging: 720 },
  spacing: { after: opts.after ?? 200 },
  children: [r(`${num}.\t${text}`)],
});

const numberedHeading = (num, heading) => p({
  indent: { left: 720, hanging: 720 },
  spacing: { after: 100 },
  children: [r(`${num}.\t`), r(heading, { bold: true })],
});

const lettered = (letter, text, opts = {}) => p({
  indent: { left: 1440, hanging: 720 },
  spacing: { after: opts.after ?? 200 },
  children: [r(`${letter}.\t${text}`)],
});

const sectionHeading = (text) => p({ alignment: AlignmentType.CENTER, spacing: { before: 200, after: 200 }, children: [r(text, { bold: true, underline: {} })] });

// ---- Notary / sworn block ----
function notaryBlock(fullName, county = "[COUNTY]") {
  const countyU = String(county).toUpperCase();
  return [
    p({ spacing: { before: 400, after: 100 }, children: [r("_________________________________")] }),
    plain(`${fullName}, Petitioner`, { after: 300 }),
    plain("STATE OF FLORIDA", { after: 0 }),
    plain(`COUNTY OF ${countyU}`, { after: 200 }),
    plain(`Sworn to or affirmed and signed before me on __________ by ${fullName}.`, { after: 300 }),
    p({ spacing: { after: 100 }, children: [r("_________________________________")] }),
    plain("NOTARY PUBLIC or DEPUTY CLERK", { after: 0 }),
    plain("My Commission Number: __________ Expires: __________", { after: 0 }),
    plain("[Print, type, or stamp commissioned name of notary or clerk.]", { after: 300 }),
    plain("___ Personally known    ___ Produced identification", { after: 0 }),
    plain("Type of identification produced: _________________________", { after: 300 }),
  ];
}

// ---- Firm signature block ----
function firmBlock({ attorneys = ["attorney"], forWhom = "Petitioner", certService, includeRespSubmitted = true } = {}) {
  const ATTORNEY = [plain("Angela R. Neave", { after: 0 }), plain("Florida Bar No. {{BAR_NO}}", { after: 0 }), plain("Email: aneave@neavefamilylaw.com", { after: 0 })];
  const out = [];
  if (certService) {
    out.push(sectionHeading("CERTIFICATE OF SERVICE"));
    out.push(plain(certService, { after: 300 }));
  }
  if (includeRespSubmitted) out.push(plain("Respectfully submitted,", { after: 300 }));
  out.push(p({ children: [r("Neave Family Law Group, P.A.", { bold: true })] }));
  out.push(plain("2400 E. Commercial Blvd., Suite 826, Fort Lauderdale, FL 33308", { after: 0 }));
  out.push(plain("2400 E. Commercial Blvd., Suite 826, Fort Lauderdale, FL 33308", { after: 0 }));
  out.push(plain("Tel. (954) 981-2200", { after: 0 }));
  out.push(p({ children: [r("Service E-Mail: "), r("aneave@neavefamilylaw.com", { bold: true, underline: {} })] }));
  out.push(p({ spacing: { after: 300 }, children: [r(`Attorneys for ${forWhom}`, { bold: true })] }));
  out.push(plain("For the Firm:", { after: 300 }));
  if (attorneys.includes("attorney")) {
    out.push(p({ spacing: { after: 100 }, children: [r("BY:_________________________________")] }));
    out.push(...ATTORNEY);
  }
  return out;
}

// ---- Judge / order signature block ----
function judgeBlock(judgeName = "[JUDGE'S FULL NAME]") {
  return [
    p({ spacing: { before: 400, after: 200 }, children: [r("_________________________________")] }),
    plain(judgeName, { after: 0 }),
    plain("CIRCUIT COURT JUDGE", { after: 300 }),
    plain("Copies Provided:", { after: 0 }),
    plain("Neave Family Law Group, P.A.", { after: 0 }),
    plain("aneave@neavefamilylaw.com", { after: 0 }),
  ];
}

// ---- Client letter header (firm letterhead style, not court caption) ----
function letterHeader(subject) {
  return [
    p({ children: [r("Neave Family Law Group, P.A.", { bold: true })] }),
    p({ spacing: { after: 300 }, children: [r("2400 E. Commercial Blvd., Suite 826, Fort Lauderdale, FL 33308  \u2022  Tel: (954) 981-2200")] }),
    p({ spacing: { after: 300 }, children: [r(subject, { bold: true })] }),
  ];
}

module.exports = {
  FONT, SZ, r, p, caption, title, plain, numbered, numberedHeading, lettered,
  sectionHeading, notaryBlock, firmBlock, judgeBlock, letterHeader, AlignmentType,
};
