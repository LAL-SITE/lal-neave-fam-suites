---
name: lal-evidence-objection-review
description: "Two-sided evidence objection review before trial. Use to screen exhibits and testimony - what they'll object to and how we overcome; what we object to and why. Keyed to Ch. 90/92."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. evidence objection review skill. Use IMMEDIATELY whenever exhibits or testimony need to be screened for potential objections under the Florida Evidence Code — ours (what they'll object to and how we overcome it) or theirs (what we object to and why). Triggers on: "objection review," "review the exhibits for objections," "what will they object to," "how do we get this in," "screen the evidence," "objection audit," "is this admissible," "run the objection review," "what do we object to on their list," "evidence review for trial," or any request to analyze admissibility of exhibits or testimony before a trial or evidentiary hearing. Produces the two-sided Objection Review Chart (our evidence: objection → overcome plan; their evidence: objection → basis) keyed to Fla. Stat. Ch. 90/92 and the trial order's disclosure regime, plus attorney flags and a caselaw-needs handoff. Runs after the exhibit/witness lists exist.


## Neave Family Law Group, P.A. Firm-Wide Conventions (apply to every run of this skill)

1. **Environment-flexible.** Complete the task where you are.
2. **Identity over lanes.** Staff defaults, attorneys self-approve.
3. **Just run it.** Ask only for physically necessary inputs by name.
4. **Read files first.** The exhibits live in the Trial/Hearing folder (01/02/03),
   the DISCO folders, and the Exhibit Tracker. OCR-verify before assessing
   (lal-document-intake-rules). Never assess a document you haven't read.
5. **Transcripts preferred, never required.**
6. **Write to the command center.** Objection review status and open evidence
   problems go in the Trial/Evidentiary Deadline Tracker.

**Ambient rules:** lal-caselaw-protocol — this skill cites RULES AND STATUTES from
the firm's Ch. 90/92 files and NEVER cites caselaw from memory. Where a caselaw
answer is needed, it generates a research need for lal-caselaw-needs instead.

---

# Neave Family Law Group, P.A. Evidence Objection Review
## Staff Lane: Paralegal/Russ run the screen | Marta Estevez reviews | Angela R. Neave make every admissibility call
## Runs After: lal-witness-exhibit-lists + lal-trial-charts-summaries | Feeds: lal-motion-in-limine, lal-caselaw-needs, trial notebook

Two-sided admissibility audit before any trial or evidentiary hearing:
**Side A — our evidence:** every exhibit and testimony line gets the objections the
other side can make, plus the concrete overcome plan (predicate, exception,
witness, cert, notice). **Side B — their evidence:** every disclosed item gets our
available objections with rule basis, and a recommendation (object live / motion in
limine / let it in — objecting to everything burns credibility).

This is a screening tool. Every conclusion is a DRAFT assessment for attorney
review — admissibility calls, privilege waivers, and objection strategy are
attorney decisions, always.

---

## STEP 0 — INPUTS

1. Operative exhibit lists and witness lists (both sides, latest amended versions)
2. The actual documents (OCR-verified) — folders 01 (ours) and 02 (theirs)
3. Trial Order Intake Memo — disclosure regime (A/B), disclosure deadlines,
   sanctions language (a disclosure violation is often the STRONGEST objection)
4. Exhibit Tracker (foundation and objection columns get updated by this run)

## STEP 1 — SIDE A: OUR EVIDENCE — OBJECTION EXPOSURE + OVERCOME PLAN

For each exhibit/witness, run the screening ladder (every step, in order):

1. **Disclosure compliance** — specifically identified on our filed list? Exchanged
   by deadline? Under a Regime B order this comes before everything: undisclosed =
   inadmissible regardless of merit.
2. **Relevance (90.401/402)** — tie to a pled issue and its statutory factors
   (61.13(3) / 61.30 / 61.075 / 61.08 / 61.16). If we can't state the tie in one
   sentence, flag for cut.
3. **Authentication (90.901/902)** — who sponsors it; what testimony or
   certification authenticates it; screenshots/social media: creator, preservation,
   alteration, completeness (partial threads invite completeness attacks).
4. **Hearsay (90.801–805)** — is it offered for its truth? Party admission
   (90.801(2)) or which 90.803/804 exception, element by element? EVERY layer of
   double hearsay analyzed independently (therapist letters, GAL summaries, school
   narratives, medical records quoting the parties are the classic traps).
5. **Privilege (90.502–90.5055)** — psychotherapist-patient (90.503),
   lawyer-client, spousal, DV advocate, clergy. At-issue waiver questions →
   attorney flag + caselaw need, never resolved by staff.
6. **Form/content limits** — improper character (90.404), prior bad acts,
   settlement/mediation communications (90.408 — mediation confidentiality),
   improper lay opinion (90.701), unqualified expert opinion (90.702), best
   evidence (90.952–954), § 90.956 summary compliance (written notice filed?
   underlying records available?).
7. **90.403 balance** — unfairly prejudicial, confusing, cumulative? Cut
   duplicative exhibits before the other side moves to exclude.
8. **Confidentiality mechanics** — 2.420/2.425 redaction done; child identifiers
   protected.

**Overcome plan per anticipated objection** — concrete and assignable, e.g.:
- Hearsay on bank statements → 90.803(6) + 90.902(11) certification [task: obtain
  cert by (date) — lal-witness-subpoenas]
- Authentication on texts → client sponsors as participant; full thread exported,
  not screenshots [task: re-export complete thread]
- Their FA/discovery answers → party admission 90.801(2) — no exception needed
- Summary chart → § 90.956 notice served + filed by (date); underlying records
  made available [tasks to ladder]
- Child statements → 90.803(23) requires findings — ATTORNEY + caselaw need

## STEP 2 — SIDE B: THEIR EVIDENCE — OUR OBJECTIONS

Same ladder in reverse for every item on their exhibit and witness lists:
disclosure violations first (check their list against the order's specificity
standard and deadlines — vague catch-alls under a Regime B order are dead on
arrival), then relevance, authentication, hearsay layers, privilege,
character/prior-bad-acts, opinion, 90.403.

For each viable objection, recommend the VEHICLE:
- **Motion in limine** (route to lal-motion-in-limine): categories that would
  poison the hearing if mentioned — undisclosed evidence, settlement
  communications, criminal/dependency allegations without conviction relevance,
  privileged records, child hearsay without findings, prior bad acts.
- **Live objection at trial**: ordinary foundation/hearsay/form issues — goes on
  the objection cheat rows of the trial notebook.
- **No objection**: routine, admissible, or strategically fine. Say so — an
  all-objections chart is useless to the attorney.

## STEP 3 — OUTPUT: OBJECTION REVIEW CHART

Word document (internal work product, firm memo branding) + Exhibit Tracker
updates. One table per side:

```
OBJECTION REVIEW — [Matter] — [Trial date] — DRAFT FOR ATTORNEY REVIEW
SIDE A — OUR EVIDENCE
Ex# | Item | Anticipated Objection(s) + Rule | Overcome Plan | Task/Owner/Due | Risk (L/M/H) | Caselaw Need? (Y→#)
SIDE B — THEIR EVIDENCE
Item | Our Objection(s) + Rule | Vehicle (Limine/Live/None) | Strength (L/M/H) | Caselaw Need? (Y→#)
CASELAW NEEDS LIST → handed to lal-caselaw-needs:
#1 [issue, e.g., at-issue waiver of 90.503 where mental health is pled] ...
OPEN EVIDENCE PROBLEMS (no current overcome plan): ...
```

Every overcome task goes on the Deadline Ladder / {{PM_SYSTEM}} with an owner. Every
"Caselaw Need" is numbered and handed to lal-caselaw-needs — this skill never
answers a caselaw question itself.

## STEP 4 — QC + LANE

- Every objection cites a specific rule/statute section from the firm's Ch. 90/92
  files — no naked "hearsay" entries, no caselaw citations at all.
- Risk ratings justified in one line each.
- Chart routed Marta Estevez → attorney. The attorney decides what to fix, what to cut,
  what to move on, and what to let go. Update the Exhibit Tracker objection/
  foundation columns after attorney review.
- Log time in {{PM_SYSTEM}}. Save as `MM.DD.YY - LastName - Objection Review - v1.docx`
  to NOTES; working copy to the trial notebook.

## STAFF LANE SUMMARY

| Who | Does What |
|---|---|
| Paralegal | Runs the screen, drafts the chart, calendars overcome tasks |
| Russ | Financial exhibits: certs, source verification, § 90.956 compliance |
| Marta Estevez | Reviews the chart before attorney |
| Angela R. Neave | Every admissibility call, privilege issue, and vehicle decision |
