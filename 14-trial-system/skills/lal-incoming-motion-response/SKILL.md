---
name: lal-incoming-motion-response
description: "Incoming motion processor. Use when served with any motion - deadline extraction, hearing tracking, response assessment, drafting routing, command center logging within 24 hours."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. incoming motion processor — deadlines and response workflow when WE are served with a motion. Use IMMEDIATELY whenever opposing counsel files or serves any motion against our client — especially a motion in limine, motion for protective order, motion to quash our subpoena, motion to compel, motion for continuance, or any trial-adjacent motion. Triggers on: "they filed a motion," "we got served with a motion in limine," "OC filed a protective order motion," "they're trying to exclude our evidence," "they moved to quash," "respond to their motion," "what's our deadline to respond," "they set their motion for hearing," "incoming motion," or any receipt of an adverse motion. Processes the motion within 24 hours: deadline extraction, hearing tracking, response assessment, drafting assignment routing (limine → objection-review inversion; protective order → discovery defense), and command center logging. The receiving-side twin of the firm's motion-drafting skills.


## Neave Family Law Group, P.A. Firm-Wide Conventions (apply to every run of this skill)

1. **Environment-flexible.** 2. **Identity over lanes; attorneys self-approve.**
3. **Just run it.** 4. **Read files first** — the motion itself (OCR-verified per
lal-document-intake-rules), the notice of hearing if any, the trial order, and
our own pending filings (their motion often mirrors or retaliates against ours).
5. **Transcripts preferred, never required.** 6. **Write to the command center.**

---

# Neave Family Law Group, P.A. Incoming Motion Processing & Response
## Staff Lane: Jeri forwards same-day | Paralegal processes within 24 hours | Marta Estevez reviews | Angela R. Neave decide response strategy
## The receiving-side twin of lal-motion-in-limine / lal-protective-order / lal-witness-subpoenas

An adverse motion is a deadline machine pointed at us. The firm SOP treatment is
identical to a trial order: same-day forward (subject: "MOTION RECEIVED – [Client]
– [Motion Type] – [Hearing Date if set] – DEADLINES INSIDE"), 24-hour processing,
Deadline Ladder entries, and command center logging. Nothing sits unprocessed.

---

## STEP 1 — INTAKE + CLASSIFY (within 24 hours of service)

From the face of the motion and docket:
- Motion type, filing date, SERVICE date (deadlines usually run from service —
  Rule 2.514 computation, weekend/holiday rolls flagged)
- Hearing set? Date, time, format, time allotted, UMC vs. special set
- What relief is sought, against which evidence/witness/discovery of OURS
- Signed by counsel? Conferral certified? (Its absence is a response point)
- Relationship to existing deadlines: does it land inside the trial ladder?
  A motion in limine served at T-10 changes trial prep priorities immediately.

## STEP 2 — DEADLINE EXTRACTION (calendar before analyzing)

Calendar in {{PM_SYSTEM}} + Deadline Ladder + HTML tracker, each with T-7/T-3
warnings:
1. **Written response deadline** — from the order setting hearing, divisional
   standing order, or CMO if one applies; if no written response is required,
   calendar "response strategy decision" at hearing minus 7 days anyway
2. **Hearing date** + prep session (attorney) at hearing minus 3 business days
3. **Compliance dates the motion itself threatens** (e.g., their motion to quash
   doesn't stay our subpoena's return date unless ordered — flag)
4. **Judge-specific requirements** — lal-judicial-procedures (ask before web
   search): response briefing rules, courtesy copies, proposed orders required at
   UMC, time limits

## STEP 3 — RESPONSE ASSESSMENT (route by motion type)

| Their Motion | Our Response Engine |
|---|---|
| Motion in limine against our evidence | Invert lal-evidence-objection-review Side A: pull the overcome plan for each targeted item — disclosure compliance proof, predicate, exception, limited-admissibility fallback. Attack their specificity (blanket categories fail per the firm's own limine doctrine). Preserve the proffer plan (Rule 12.470). |
| Motion for protective order against our discovery/subpoena | Invert lal-protective-order: show relevance to pled issues + statutory factors, proportionality (12.280), our conferral attempts; offer tailored accommodations (narrowed scope, confidentiality) that moot the motion; flag fee exposure both ways. |
| Motion to quash our subpoena | 12.410(c) standards — show reasonableness, offer modification; check our Notice of Issuance compliance FIRST (fix our own defect before the hearing if any). |
| Motion to compel against us | Route to lal-advanced-discovery response lane; assess genuine deficiency vs. objection defense; cure-before-hearing option. |
| Motion for continuance | Assess prejudice to our trial posture; 12.460/2.545(e) compliance check on THEIR motion (written? signed by party? reason? readiness date?); attorney decides agree/oppose. |
| Anything requiring legal argument | lal-caselaw-needs entries + lal-legal-research (browser Project) |

**Assessment memo (one page, to the attorney within 48 hours of service):**
motion summary · what it targets · merit read (their strongest point, our
strongest point) · options (oppose / agree / negotiate accommodation / cross-move)
· recommended lane · deadlines calendared · caselaw needs identified.

## STEP 4 — DRAFT THE RESPONSE (once attorney picks the lane)

Written response per lal-pleading-standard: caption, "RESPONSE IN OPPOSITION TO
[MOTION]", numbered paragraphs answering their numbered grounds, our affirmative
points, tailored alternative relief where smart, WHEREFORE, certificate of
service, firm signature block. Citations only from verified project-file
authority; gaps → [CITE — Need #__] + lal-caselaw-needs. Attorney Review Draft
tier → Marta Estevez → lal-prefiling-qc → attorney signs and files.

**Hearing prep package** (even when no written response is filed): the motion,
our response points in outline, the targeted evidence/discovery with its
compliance proof, proposed order (ours), and the objection-review excerpts for
the targeted items. Goes in the trial notebook and to the attorney at hearing
minus 3.

## STEP 5 — COMMAND CENTER + CLOSE

- Trial/Evidentiary Deadline Tracker: incoming-motion block —
  `[Motion] | Served __ | Response due __ | Hearing __ | Lane: [oppose/agree/negotiate] | Status`
- After ruling: update the Exhibit Tracker / disco tracker / subpoena status with
  what was excluded, protected, or compelled; calendar any compliance the order
  imposes; rehearing clock check (12.530) if the ruling warrants — attorney call.
- Time in {{PM_SYSTEM}} (motion review, response drafting, hearing prep).

## STAFF LANE SUMMARY

| Who | Does What |
|---|---|
| Jeri | Same-day forward of every served motion |
| Paralegal | 24-hr processing, deadlines, assessment memo, response draft |
| Russ | Discovery/financial motions: compliance proof from the disco tracker |
| Marta Estevez | Reviews assessment + response before attorney |
| Angela R. Neave | Pick the lane, sign, argue, decide post-ruling steps |
