# Matter State Map — read the file, derive the stage, do only what's missing

This is what Step 0 (state review) and Step 3 (sequencing) run against. The goal:
**never march through fixed steps.** Read the matter folder, mark each step
DONE / NEEDED NOW / WAITING / NOT NEEDED, then act only on what's missing — while
catching anything the file shows we skipped.

Matter folders vary; map these signals to whatever subfolders the matter actually
has (typical: `RETAINER`, `INTAKE`, `CORRESPONDENCE`, `DRAFTS`, `FILED…`, `NOTICES`,
`HEARINGS`, `RECORDS`/`NOTES`, `ORDERS…`, `CLAUDE OUTPUT`). Scan via
`lal-file-connector`.

## 1. Artifact → what it tells you → what to do if missing

| Signal in the file | Means | If MISSING (and not excluded) |
|---|---|---|
| Signed retainer (RETAINER - NAME CHANGE) | Engaged | Generate retainer (`lal-retainer-builder`; RETAINER - NAME CHANGE.docx). Blocks everything downstream until engaged + paid. |
| Completed intake form (Adult/Minor/Family) | Biographical data in hand | Send the correct intake form + set ~5-day due. Client-dependent WAIT. **Gates drafting.** |
| Fingerprint/background instructions letter (#21) | Client can start the print clock | Draft/send #21 **at engagement, in parallel with the intake request.** NOT NEEDED for restoration. |
| Fingerprint/background **results** (from clerk/vendor) | Records check done | WAITING — expected to lag. **Only gates the final hearing / no-hearing finalization**, nothing earlier. |
| Petition + companions drafted (#01/#02/#03 + #04–#09 as needed) | Draft exists | If intake is in and screen is clear → draft now (route to drafting). **If a draft already exists, review it (petition-qc-checklist) and suggest corrections — don't assume it's correct.** |
| Filed/stamped pleadings + case number | Filed | File the attorney-approved petition; capture case number. |
| Notice of Hearing (#10) — or Miami-Dade #20 remote affidavit | Hearing set / no-hearing path chosen | Confirm the clerk has results, confirm judge procedures (live), then draft/file #10 (or #20 for uncontested MDC). |
| Hearing-instructions letter (#19) | Client prepped for hearing | Send once the hearing is set. |
| Signed Final Judgment (#13/#14/#15) | Granted | Prepared as a draft pre-hearing but **not uploaded until after the hearing.** |
| Post-judgment letter (#22) + certified copies + matter closed | Closed | Send #22, order certified copies, close in {{PM_SYSTEM}}. |

## 2. Needed vs. NOT needed, by case type

`Y` = needed · `—` = not needed · `~` = conditional (note the condition)

| Step / document | Adult | Minor | Family | Restoration |
|---|---|---|---|---|
| Intake form variant | Adult | Minor | Family | Adult |
| Fingerprints — petitioner/adult(s) + FDLE/FBI check | Y | Y (parent/guardian) | Y (each adult) | **—** |
| Fingerprints — minor child (no check on child) | — | Y | ~ (if child) | — |
| Fingerprint instructions letter #21 | Y | Y | Y | **—** |
| UCCJEA Affidavit #09 | — | Y | Y | — |
| Consent #04 **or** service on other parent | — | ~ | ~ | — |
| Petition | #01 (a) | #02 (c) | #03 (f) | #01 + restoration language |
| Final Judgment | #13 (b) | #14 (e) | #15 (g) | #13 |
| NOA — #05 adult / #06 combined | #05 | #06 | #06 | #05 |
| Email Designation #07 (if filed separately) | ~ | ~ | ~ | ~ |
| Notice of Related Cases #08 (after case search) | Y | Y | Y | Y |
| Cover Sheet 12.928 (usually portal-generated) | Y | Y | Y | Y |
| § 68.07(3)(i) standalone affidavit #23 | ~ 6th Cir only | ~ 6th Cir only | ~ 6th Cir only | ~ 6th Cir only |
| Hearing (or #20 no-hearing, Miami-Dade uncontested) | Y / ~#20 | Y / ~#20 | Y / ~#20 | Y / ~#20 |
| Hearing-instructions letter #19 | ~ (if hearing) | ~ | ~ | ~ |
| Post-judgment letter #22 | Y | Y | Y | Y |

Conditions: **Consent vs. service** — other parent consents → #04; won't consent →
same petition, serve them (scope flag). **#23** — only where a circuit wants the
disclosure standalone (confirmed: Sixth); otherwise it's embedded in the petition.
**#20 / no hearing** — Miami-Dade uncontested only; confirm live with the JA.

## 3. State-board output (show this to staff before acting)

```
NAME CHANGE — MATTER STATE  ·  [Client] · [Case type] · [County/Circuit]
DONE:            [items found in the file, with dates]
NEEDS REVISION:  [existing drafts with the specific corrections to make]
NEEDED NOW:      [missing, unblocked — in the order Step 3 gives]
WAITING:         [in motion, pending external return — e.g., background results out]
NOT NEEDED:      [excluded by case type/circuit — with the reason, so nothing looks forgotten]
NEXT STEP →      [the single next action + who owns it]
```

Then act on NEEDED-NOW per the Step 3 timing gates, routing each via Step 4.
