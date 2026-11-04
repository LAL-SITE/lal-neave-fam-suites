---
name: lal-prenup-review
description: "Prenup and postnup reviewer. Use to analyze, challenge, enforce, or advise on any agreement - pre-execution or in a pending divorce. Outputs attorney strategy memo plus client letter."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. Florida prenuptial and postnuptial agreement reviewer. Use IMMEDIATELY whenever a client brings in an agreement for review — before signing OR in a pending divorce. Triggers on: "review this prenup", "review this postnup", "is this prenup enforceable", "can we attack the prenup", "enforce the prenup", "challenge the prenup", "is the postnup valid", "client is about to sign a prenup", "client is about to sign a postnup", "what does this prenup mean for the case", "does the prenup hold up", "can we get around the prenup", "prenup analysis", "postnup analysis", "they're trying to enforce the prenup", "does this prenup waive alimony", or any request to analyze, assess, challenge, enforce, or advise on a prenuptial or postnuptial agreement. Covers all four contexts: pre-execution prenup, pre-execution postnup, divorce-context prenup, divorce-context postnup. Output is ALWAYS a Word (.docx) Attorney Strategy Memo plus a Client Summary Letter. Never review without this skill.


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

# Neave Family Law Group, P.A. Prenup / Postnup Review

## Purpose
Analyze a client-provided prenuptial or postnuptial agreement and produce:
1. **Attorney Strategy Memo** — enforceability analysis, risks, litigation
   or negotiation strategy (attorney-eyes-only)
2. **Client Summary Letter** — plain-language summary of what the agreement
   does, what the client should understand, and recommended next steps

Both outputs are required. Both are Word (.docx) files.

---

## STEP 0 — Identify Review Context

**Ask immediately if not clear from the conversation:**

> "Is this review **before signing** (client is about to execute the
> agreement), or **in the context of a divorce** (the agreement already
> exists and the marriage is over or ending)?"

> "Is this a **prenuptial** agreement (signed before marriage) or a
> **postnuptial** agreement (signed after the marriage began)?"

This produces one of four analysis tracks:

| Track | Description | Primary Goal |
|-------|-------------|--------------|
| **A — Pre-Execution Prenup** | Client about to sign; wants Neave Family Law Group, P.A. to review before executing | Protect client: identify unfair terms, flag risks, recommend negotiation |
| **B — Pre-Execution Postnup** | Parties already married; client about to sign; wants Neave Family Law Group, P.A. review | Same as A, but postnup legal standard applies; heightened scrutiny of alimony and consideration |
| **C — Divorce-Context Prenup** | Marriage is over/ending; existing prenup affects the case | Enforceability assessment: can it be challenged? Does it help or hurt? Litigation strategy |
| **D — Divorce-Context Postnup** | Marriage is over/ending; existing postnup affects the case | Same as C, but postnup scrutiny is higher in FL courts — more challenge grounds available |

**Also identify:**

- **Which party is Neave Family Law Group, P.A.'s client?** (Party 1 / Party 2 / clarify names)
- **Does the agreement benefit or burden Neave Family Law Group, P.A.'s client?**
  - *Burdens client:* Focus on challenge grounds, enforceability weaknesses, attack strategy
  - *Benefits client:* Focus on enforcement arguments, how to protect the agreement

---

## STEP 1 — Document Intake

Ask the user to upload the agreement if not already in the session.

Once uploaded, extract:

- [ ] Document title and recitals (what type of agreement is it called?)
- [ ] Parties identified (names match client?)
- [ ] Date of execution (actual vs. planned wedding date — flag timing gap)
- [ ] Whether both parties signed
- [ ] Whether witnesses and notary blocks are present and complete
- [ ] Financial disclosure method stated (schedules attached, waiver, or silent?)
- [ ] Whether counsel is acknowledged for each party

---

## STEP 2 — Procedural Enforceability Analysis

Run this analysis for ALL four tracks. The procedural analysis is the
threshold question — if the agreement fails here, it may be unenforceable
regardless of content.

### A. Execution Requirements

| Requirement | FL Standard | Present? | Flag? |
|-------------|-------------|----------|-------|
| Written agreement | Required | | |
| Signed by both parties | Required | | |
| Two witnesses per party | Best practice / required for real property provisions | | |
| Notarized | Best practice; required for recording | | |

### B. Voluntariness and Coercion

Assess for indicators of:

- **Timing pressure** — How many days before the wedding was the agreement
  signed? Under 30 days = significant flag; same day or day before = strong
  duress indicator
- **First presentation** — When was the first draft provided to the other party?
  Less than 2 weeks before execution = flag
- **Independent counsel** — Did the other party (the one who may challenge) have
  independent legal counsel? Was counsel identified? Was there adequate time to
  consult?
- **Language / comprehension barriers** — Any indication the agreement was not
  understood?
- **Economic duress** — Was the other party financially dependent on the
  drafting party at the time of signing?
- **Explicit ultimatum language** — Does the agreement recite any "sign or the
  wedding is off" context?

**Flag each indicator found. Summarize voluntariness risk as: LOW / MODERATE / HIGH.**

### C. Financial Disclosure Adequacy

| Question | Finding |
|----------|---------|
| Was full financial disclosure provided? | |
| Are financial schedules attached to the agreement? | |
| If no schedules, does the agreement contain an express written waiver? | |
| Does the waiver acknowledge the right being waived? | |
| Was the disclosure fair and complete based on what is known about the parties? | |
| Any known undisclosed assets or liabilities? | |

**Disclosure risk summary: ADEQUATE / INADEQUATE / UNKNOWN**

If disclosure is inadequate AND no valid waiver: **strong challenge ground
under §61.079(7)(a)2 (prenup) or contract law (postnup).**

---

## STEP 3 — Substantive Provision Analysis

Review each substantive provision of the agreement. For each:
1. What does it do?
2. Is it enforceable under Florida law?
3. Does it help or hurt Neave Family Law Group, P.A.'s client?
4. What would the default Florida law give the client if this provision were absent?

### Property and Asset Provisions

- [ ] Separate property definition: is it clear? Overbroad? Underprotective of client?
- [ ] Tracing rules: does the agreement allow or restrict tracing?
- [ ] Commingling: does the agreement address it? How?
- [ ] Pre-marriage appreciation: is it separate or marital?
- [ ] Business interests: are they covered? Does the provision protect or harm client?
- [ ] Future assets: what character do they take?
- [ ] **Gap:** Is anything conspicuously absent that should have been addressed?

### Income Provisions

- [ ] Are earnings during the marriage separate or marital?
- [ ] How is passive income treated?
- [ ] Is this provision consistent with what client expected?

### Alimony Provisions

**This is almost always the most significant provision for Neave Family Law Group, P.A.'s client.**

| Question | Finding |
|----------|---------|
| What does the agreement say about alimony? | |
| Is there a full waiver? Limitation? Condition? Reservation? | |
| If waiver: is it mutual or one-sided? | |
| If waiver: is the voluntariness and disclosure language adequate? | |
| Is there a significant wealth disparity between the parties? | |
| Would the alimony provision leave Neave Family Law Group, P.A.'s client eligible for public assistance? | |

**Note:** Under §61.079(7)(b), a court **may** modify or eliminate alimony
provisions — even in an otherwise enforceable prenup — if enforcement would
cause a party to be eligible for public assistance. This is a standalone
relief avenue independent of the general enforceability challenge.

**Flag:** For postnups, alimony waivers are the most frequently challenged and
most successfully attacked provision in Florida courts.

### Estate Rights Provisions

- [ ] Does the agreement waive elective share?
- [ ] Does it waive homestead rights?
- [ ] Does it waive intestate rights?
- [ ] Any exceptions or carve-outs?
- [ ] Is this consistent with client's estate planning?

### Debt Provisions

- [ ] How are pre-existing debts allocated?
- [ ] How are marital debts allocated?
- [ ] Are indemnification provisions mutual and adequate?
- [ ] Any unknown or undisclosed liabilities?

### Enforcement and Fee Provisions

- [ ] Who bears attorney's fees in a dispute?
- [ ] Is a prevailing party provision present?
- [ ] Is it one-sided or mutual?

### Prohibited Provisions (Flag Immediately If Found)

The following provisions are unenforceable in Florida and their presence may
indicate the agreement was not prepared by competent Florida counsel:

- [ ] Child support terms or limitations
- [ ] Parenting plan or custody provisions
- [ ] Punitive or morality clauses (fidelity clauses, lifestyle restrictions)
- [ ] Any provision that is void as against public policy

**If prohibited provisions are found:** Flag to attorney — presence may support
an argument that the entire agreement lacks adequate legal review, which can
support a broader challenge.

---

## STEP 4 — Track-Specific Strategy Analysis

### Track A — Pre-Execution Prenup

**Goal: Protect the client before they sign.**

After completing Steps 2 and 3, produce:

**Negotiation Targets** — list provisions that should be negotiated:
- [ ] Provisions that unfairly burden client vs. default FL law
- [ ] Disclosure deficiencies that should be remedied before execution
- [ ] Missing protections for client that should be added
- [ ] Timing issues (recommend delay if wedding is imminent)

**Deal-Breaker Provisions** — provisions attorney should advise client not to
sign without modification:
- [ ] Full alimony waiver without adequate financial disclosure or protection
- [ ] One-sided fee provisions
- [ ] Overbroad separate property definitions that consume what client expects

**Client-Protective Additions to Request:**
- Sunset clause (terms change after X years of marriage)
- Marital home carve-out
- Child-bearing / career-interruption protection
- Enhanced disclosure schedules

### Track B — Pre-Execution Postnup

Same analysis as Track A, PLUS:

**Postnup-Specific Issues:**

- [ ] Is consideration identified? Is it legally adequate? (If no: recommend
  client not sign until adequate consideration is identified)
- [ ] Does the alimony provision meet the heightened postnup scrutiny standard?
- [ ] Does the agreement acknowledge both parties had independent counsel?
- [ ] Is full financial disclosure attached (not just a waiver)?
- [ ] Is there any indication of economic pressure or coercion in the marital
  context that led to this postnup being proposed?

**Flag:** If the postnup appears to have been proposed in the context of
marital strain, infidelity, or threat of divorce without adequate consideration
to the signing party — this is a classic coercive postnup pattern that Florida
courts scrutinize closely. Advise client not to sign; escalate to attorney.

### Track C — Divorce-Context Prenup

**Goal: Assess enforceability and develop litigation or settlement strategy.**

**Enforceability Summary:**

After Steps 2 and 3, render a judgment on each ground:

| Challenge Ground | Strength | Key Facts Supporting |
|-----------------|----------|---------------------|
| Fraud, duress, coercion, or overreaching (§61.079(7)(a)1) | LOW / MOD / HIGH | |
| Inadequate disclosure + no valid waiver (§61.079(7)(a)2) | LOW / MOD / HIGH | |
| Public assistance ground for alimony provision (§61.079(7)(b)) | LOW / MOD / HIGH | |
| Execution defects (missing signatures, witnesses, notary) | LOW / MOD / HIGH | |
| Prohibited provisions affecting enforceability | LOW / MOD / HIGH | |

**Overall Enforceability Assessment:**
- LIKELY ENFORCEABLE
- VULNERABLE — moderate challenge grounds present
- LIKELY CHALLENGEABLE — significant grounds present
- UNENFORCEABLE — specific defect identified

**Strategic Options:**
1. Accept and comply (if agreement benefits client or challenge is weak)
2. Challenge enforceability (if grounds exist)
3. Negotiate modification of agreement terms (settlement)
4. Use enforceability vulnerability as leverage in broader settlement

**If Neave Family Law Group, P.A.'s client benefits from enforcement:**
- Identify strongest enforcement arguments
- Identify weaknesses to address proactively
- Recommend strategy to reinforce the agreement if challenged

**If Neave Family Law Group, P.A.'s client is burdened by the agreement:**
- Rank challenge grounds by strength
- Identify what discovery would support the challenge (financial records,
  communications around the time of execution, witness testimony)
- Assess realistic outcome if challenged vs. complied with

### Track D — Divorce-Context Postnup

Same as Track C, PLUS:

**Postnup Challenge Grounds (in addition to prenup grounds):**

| Additional Ground | Strength | Key Facts |
|------------------|----------|-----------|
| Inadequate or no independent consideration | LOW / MOD / HIGH | |
| Unfair at time of execution (Del Vecchio) | LOW / MOD / HIGH | |
| Unfair at time of enforcement (changed circumstances) | LOW / MOD / HIGH | |
| Coercive circumstances (marital pressure, economic dependence) | LOW / MOD / HIGH | |
| Both parties lacked independent counsel | LOW / MOD / HIGH | |

**Note:** Postnup challenge success rates in Florida are meaningfully higher
than prenup challenges. If the postnup burdens the client and any challenge
ground is present, the attorney should seriously evaluate the challenge pathway.

---

## STEP 5 — Generate Both Output Documents

**Read `/mnt/skills/public/docx/SKILL.md` before writing any code.**

### Document 1: Attorney Strategy Memo (Attorney-Eyes-Only)

**Filename:** `[LastName]_PRENUP_REVIEW_STRATEGY_MEMO.docx`
or `[LastName]_POSTNUP_REVIEW_STRATEGY_MEMO.docx`

**Sections:**
1. Matter Header (case name, date, prepared by, attorney-eyes-only designation)
2. Review Context and Client Position
3. Document Description (what the agreement is, when executed, parties)
4. Procedural Enforceability Analysis
   - Execution requirements finding
   - Voluntariness assessment + supporting facts
   - Disclosure adequacy finding
5. Substantive Provision Analysis (provision by provision)
6. Enforceability Summary (Track C/D only)
7. Challenge Grounds Ranked (Track C/D) OR Negotiation Targets (Track A/B)
8. Strategic Recommendations
9. Open Questions / Items Needing Investigation
10. Attorney Flags (items requiring attorney judgment before any action)

### Document 2: Client Summary Letter

**Filename:** `[LastName]_PRENUP_CLIENT_SUMMARY.docx`

**Tone:** Plain language — no legal jargon; direct but not alarming

**Sections:**
1. What This Agreement Is
2. What It Says About [Key Issues: property / support / estate rights]
3. What You Should Know Before [Signing / Moving Forward]
4. Our Recommendations
5. Questions We Need to Answer Before Proceeding

**Do NOT include in the client letter:**
- Internal challenge strategy
- Litigation assessments
- Anything that should remain attorney-eyes-only

---

## STEP 6 — QC

- [ ] Attorney memo covers all four analysis areas (procedural, substantive,
  track-specific strategy, recommendations)
- [ ] Client letter is plain language and does not contain attorney-eyes-only content
- [ ] Correct track applied (A / B / C / D)
- [ ] Postnup-specific analysis applied if postnup
- [ ] No legal conclusions stated without factual basis in the agreement
- [ ] All challenge grounds assessed with supporting facts, not speculation
- [ ] Open questions listed where information is insufficient
- [ ] Attorney flags noted for any provision requiring judgment call

---

## STEP 7 — Delivery

Present both files using `present_files`.

End response: **"Both documents require attorney review before any advice
is given to the client or any action is taken."**

---

## Non-Negotiable Rules

1. Context identification (A / B / C / D) happens BEFORE any analysis begins
2. Client role (which party Neave Family Law Group, P.A. represents; benefits vs. burdened) identified at intake
3. Both output documents are always required — never deliver only one
4. Client summary letter never contains attorney-eyes-only strategy
5. Never render a definitive enforceability conclusion without identifying
   the specific facts supporting it — if facts are unknown, say so
6. Postnup standard always flagged and applied separately from prenup standard
7. Public assistance ground for alimony (§61.079(7)(b)) always checked in
   divorce-context reviews
8. Attorney approval required before any advice is communicated to the client
9. Output is always .docx — inline analysis alone is never acceptable

---

## Reference Files

| File | Contents |
|------|----------|
| `references/fl-enforceability-framework.md` | §61.079 text, challenge grounds, postnup case law framework |
| `references/provision-comparison-guide.md` | What each provision type does vs. default FL law |
