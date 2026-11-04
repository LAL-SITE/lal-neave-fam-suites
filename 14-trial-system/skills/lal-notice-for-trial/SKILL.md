---
name: lal-notice-for-trial
description: "Notice for Trial workflow under Rule 12.440. Use to set a case for trial or final hearing - at-issue analysis, notice drafting, readiness pre-check, trial order anticipation."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. Notice for Trial workflow — getting OUR cases set for trial under Rule 12.440. Use IMMEDIATELY whenever a case needs to be set for trial or final hearing. Triggers on: "notice for trial," "set the case for trial," "get us a trial date," "is the case at issue," "file the notice for trial," "we're ready for trial," "case is at issue," "request a final hearing," or any request to move a Florida family law matter onto the trial docket. Runs the at-issue analysis (Rule 12.440(a): motions to last pleading disposed of, or 20 days after last pleading), drafts the Notice with the required contents (time estimate, original vs. subsequent proceeding, jury statement if any), pre-checks readiness (discovery, MD, mediation prerequisites), and anticipates the resulting trial order (lal-trial-order-intake fires when it arrives). Always through lal-prefiling-qc and attorney sign-off.


## Neave Family Law Group, P.A. Firm-Wide Conventions
1. Environment-flexible. 2. Identity over lanes; attorneys self-approve. 3. Just
run it. 4. Read files first — the docket (pleadings closed? pending motions to the
last pleading?), the case roadmap, the disco tracker (readiness), any CMO. 5.
Transcripts preferred, never required. 6. Write to the command center.
**Ambient:** lal-pleading-standard, lal-prefiling-qc, lal-caselaw-protocol.

# Neave Family Law Group, P.A. Notice for Trial (Rule 12.440)
## Paralegal runs the at-issue check and drafts | Marta Estevez reviews | Angela R. Neave decide timing (strategy call), sign, file

Filing the notice for trial is a STRATEGY decision — it starts the clock on the
court's trial order and everything in it. File it before the case is truly ready
and the deadline ladder lands on an unprepared file.

## STEP 1 — AT-ISSUE ANALYSIS (Rule 12.440(a), from the rule text)
An action is at issue: after any motions directed to the LAST pleading served
have been disposed of; or, if none were served, 20 days after service of the last
pleading. The party entitled to move against the last pleading may waive by
filing the notice. Crossclaims among parties do not prevent setting trial on the
petition/counterpetition/answer issues. Run the docket check:
- Last pleading served + date; answer/counterpetition/reply status
- Any pending motion directed to a pleading (MTD, motion to strike) — disposition
  required first (or the waiver analysis — attorney call)
- Default posture? (12.440(c): default parties get served with the setting order
  per 2.516; not less than 10 days' notice where required)
Produce a one-paragraph at-issue conclusion with docket cites. Not at issue → 
report exactly what must happen first.

## STEP 2 — READINESS PRE-CHECK (before the attorney green-lights)
The notice invites a trial order with immediate deadlines, so verify NOW:
mandatory disclosure current (12.285(f) supplementation; FA fresh);
discovery substantially complete or a plan for the remaining items
(lal-discovery-gap readiness memo); mediation completed or scheduled if the
CMO/division requires it before trial; client expectations set (timeline,
trial costs — attorney conversation); witness availability windows collected
(the notice includes a time estimate; the court sets dates — knowing our
witnesses' blackout periods informs the estimate conversation with the JA).
Present the readiness snapshot to the attorney with a recommendation.

## STEP 3 — DRAFT THE NOTICE (Rule 12.440(b) required contents)
Caption per lal-pleading-standard. Title: NOTICE THAT ACTION IS AT ISSUE AND
READY TO BE SET FOR TRIAL (or division's preferred style — check
lal-judicial-procedures, ask before web search). Must include:
1. Statement that the action is at issue and ready for trial;
2. **Estimate of time required** (attorney sets — derived from the issue count on
   the Trial Issue Organizer and witness count; underestimating buys a rushed
   trial, overestimating delays the setting);
3. Whether trial is on the ORIGINAL action or a SUBSEQUENT proceeding
   (modification/enforcement = subsequent);
4. Jury statement if any issue is triable by jury (rare in family; include only
   if applicable per 12.430).
Certificate of service; firm signature block. The clerk submits the notice and
file to the court; the court, if it finds the action ready, enters the order
setting trial, trial date, and pretrial conference (12.440(c), 12.200).

## STEP 4 — AFTER FILING
- Calendar a follow-up at +30 days if no setting order arrives (JA inquiry per
  divisional procedure).
- **When the trial order arrives: lal-trial-order-intake fires immediately** —
  that is the payoff and the risk of this filing; the team should expect the
  ladder within days.
- Command center: lifecycle → "Notice for trial filed — awaiting setting";
  readiness snapshot attached. Save
  `MM.DD.YY - LastName - Notice for Trial - v1.docx` to DRAFTS. Time in {{PM_SYSTEM}}.
