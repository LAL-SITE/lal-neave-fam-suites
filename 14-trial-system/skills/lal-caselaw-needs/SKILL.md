---
name: lal-caselaw-needs
description: "Caselaw research needs generator. Use when a trial issue or motion needs authority - produces framed research questions and ready-to-paste research prompts. Never cites from memory or internet."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. caselaw research needs and {{RESEARCH_PROVIDER}} prompt generator. Use IMMEDIATELY whenever a trial issue, evidence question, or motion needs caselaw support. Triggers on: "we need caselaw on," "find cases for," "research this issue," "{{RESEARCH_PROVIDER}} prompt," "what should I search in {{RESEARCH_PROVIDER}}," "caselaw needs," "authority for the motion in limine," "cases on relocation," "research memo for trial," "build the research list," or any request to identify or obtain caselaw for issues or evidence in a Florida family law trial or hearing. HONORS lal-caselaw-protocol: this skill NEVER cites cases from memory or the internet — it produces the Caselaw Needs Memo: precisely framed research questions, ready-to-paste {{RESEARCH_PROVIDER}} search prompts (terms, connectors, filters), what a winning case must hold, and an intake table for the attorney's verified results, which then become project-file authority other skills may cite.


## Neave Family Law Group, P.A. Firm-Wide Conventions (apply to every run of this skill)

1. **Environment-flexible.** 2. **Identity over lanes; attorneys self-approve.**
3. **Just run it.** 4. **Read files first** — check the matter's Research/Education
folder and the Claude Project files FIRST: verified caselaw may already exist from
prior research; never regenerate a need the file already answers.
5. **Transcripts preferred, never required.** 6. **Write to the command center.**

**GOVERNING AMBIENT RULE — lal-caselaw-protocol (no exceptions):** caselaw comes
ONLY from project files placed there by an attorney; never from AI memory, never
from internet search. This skill therefore produces RESEARCH INSTRUMENTS, not
citations. If any output of this skill contains a case name or citation that did
not come from a project file, that is a protocol violation — delete it and flag.

---

# Neave Family Law Group, P.A. Caselaw Needs & {{RESEARCH_PROVIDER}} Prompt Generator
## Staff Lane: Anyone identifies needs | Attorney (Angela R. Neave) runs {{RESEARCH_PROVIDER}} and verifies | Verified results return to the project file
## Feeds From: lal-evidence-objection-review, lal-motion-in-limine, lal-protective-order, lal-legal-research, any drafting skill
## Feeds To: the matter's Research/Education folder + Claude Project knowledge (verified authority only)

The firm's caselaw pipeline has three stations: (1) this skill frames WHAT is
needed and writes the exact {{RESEARCH_PROVIDER}} searches; (2) the ATTORNEY runs the searches
in {{RESEARCH_PROVIDER}}, reads the cases, and verifies they're good law; (3) verified cases
(PDF + a one-line holding note) go into the matter's Research/Education folder and
project knowledge, where drafting skills may then cite them with the mandatory
attorney-verification warning.

---

## STEP 1 — FRAME EACH RESEARCH NEED (precision beats volume)

For every issue handed in (from the objection review's Caselaw Needs List, a
motion draft, or an attorney question), build a Research Need block:

```
NEED #__ — [short label]
Legal question (one sentence, answerable yes/no or by standard):
Posture: [trial objection / motion in limine / protective order / substantive issue / appeal risk]
Statute/rule anchor: [e.g., § 90.503; § 61.13(3); Rule 12.410(c)]
What a WINNING case must hold: [the specific proposition — e.g., "a party does not
  waive psychotherapist-patient privilege merely by seeking timesharing"]
What a LOSING case would hold (know the bad law too):
Facts that matter: [the 2–4 case facts that must match ours to be useful]
Court preference: Fla. Supreme Court > our DCA > other DCAs (identify our DCA from
  the circuit — e.g., Broward/17th → Fourth DCA; Miami-Dade/11th → Third DCA)
Deadline: [when the answer is needed — tie to the Deadline Ladder]
Priority: [Critical / Important / Nice-to-have]
```

Rules for framing: one proposition per need (compound questions produce garbage
searches); anchor every need to the statute/rule already identified by the
objection review or reference skill; include the counter-research (their best
case) for every Critical need.

## STEP 2 — GENERATE THE {{RESEARCH_PROVIDER}} SEARCH PROMPTS

For each need, write 2–4 ready-to-paste queries, ordered broad → narrow, using
{{RESEARCH_PROVIDER}} Boolean syntax (quoted phrases, AND/OR, w/n proximity connectors,
parentheses), plus filter instructions:

```
{{RESEARCH_PROVIDER}} — NEED #__
Jurisdiction filter: Florida state courts [+ our DCA first]
Date filter: [default: no limit; post-YYYY if statute amended — e.g., alimony
  needs post-July 2023 § 61.08 cases]
Q1 (broad):    "psychotherapist-patient privilege" AND waiver AND (custody OR timesharing)
Q2 (targeted): "90.503" w/25 waiver w/25 ("at issue" OR "calculated forfeiture")
Q3 (narrow):   privilege w/10 waiver w/25 "mental health" AND "best interest"
Also check: statute annotations for § [__]; cases citing [any verified case
  already in the project file — "citing references" run]
Capture per case: full citation · court/DCA · year · one-line holding ·
  good-law check (KeyCite-equivalent in {{RESEARCH_PROVIDER}}: Authority Check) · PDF saved as
  [Case_Short_Name]_[Cite].pdf → Research/Education
```

Query craft rules: statutory section numbers in quotes are the highest-precision
hooks; pair every legal term with its synonyms (timesharing OR custody OR
"parental responsibility"); use proximity connectors, not sentence-long phrases;
for evidence needs, search the 90.___ section plus the objection word.

## STEP 3 — OUTPUT: CASELAW NEEDS MEMO (Word, internal memo branding)

```
CASELAW NEEDS MEMO — [Matter] — [Date] — for [Angela R. Neave]
Trial/hearing date: ___ | Needs tied to Deadline Ladder: Y
SUMMARY TABLE: # | Label | Priority | Needed by | Feeds [motion/objection/issue]
[Research Need blocks with {{RESEARCH_PROVIDER}} prompts, Critical first]
RESULT INTAKE TABLE (attorney completes):
# | Case found (cite) | Holding (one line) | Good law? | Helps/Hurts | PDF saved? | Verified by/date
```

Save to NOTES; route to the attorney. Calendar each Critical need's "needed by"
date on the Deadline Ladder (research must land before the motion/filing deadline
it feeds, not before trial generally).

## STEP 4 — CLOSE THE LOOP (what makes this a pipeline, not a wish list)

When the attorney returns results:
1. Save case PDFs + the completed intake table to Research/Education and the
   Claude Project knowledge.
2. Update the requesting document (objection chart, motion draft) — the citation
   may NOW be used, always with the lal-caselaw-protocol attorney-verification
   warning attached.
3. Mark the need CLOSED in the memo (v2) and the command center.
4. Needs that came back empty or adverse: flag prominently — an adverse answer
   changes strategy and belongs in front of the attorney, not buried.

## GUARDRAILS

- No case names or citations originate from this skill. Ever. Placeholder format
  in drafts awaiting research: [CITE — Need #__, pending attorney verification].
- Do not downgrade a Critical need because the search looks hard.
- {{RESEARCH_PROVIDER}} syntax varies by version — if a query errors, simplify connectors
  rather than changing the substance; note it in the memo.
- Substantive strategy questions ride with lal-legal-research in the browser
  Project; this skill is the research-instrument layer, not the analysis layer.

## STAFF LANE SUMMARY

| Who | Does What |
|---|---|
| Paralegal / Russ | Frame needs from the objection review and drafts; assemble the memo |
| Marta Estevez | Reviews framing and priorities |
| Angela R. Neave | Run {{RESEARCH_PROVIDER}}, read and verify, return results to the project file |
