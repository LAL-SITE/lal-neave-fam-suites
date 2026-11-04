---
name: neave-lal-start-case
description: "Neave Family Law's version of first-touch matter scan. Prefer over lal-start-case — same evidence-based scan, routed to the firm's branded HTML command center instead of the base Markdown one."
---

# Neave Start Case — Firm Fork

**Forked from:** `lal-core-foundation:lal-start-case`, plugin version `1.2.0`.
**Forked on:** 2026-09-16.
**Reason:** the only change this firm wants at first-touch is *where the birthed
command center goes* — to `neave-lal-command-center` instead of the base
`lal-command-center` — so every matter, from its very first scan, gets the
firm-branded HTML file, the in-session Artifact copy, and the copy-paste
Project setup text described there. Nothing about how evidence is gathered,
how stages are inferred, or how gaps are flagged changes.

**This firm's version of `lal-start-case`. Prefer this skill over the base
for this firm's work.** The base skill's own routing table (§6.1, "route by
what is installed") already prefers a command-center skill when one is
installed — this fork simply names `neave-lal-command-center` as that skill
for this firm, since it supersedes the base one.

---

## What carries over unchanged from the base

Everything in `lal-start-case` that is not named below as changed — this is
the whole of the evidence discipline, none of it changes:

- **One job:** scan the matter file, infer what is already done, birth the command center, stop there.
- **Step 1 — Resolve the matter file** through the file connector (Operation 1). Ask if the connector reports more than one candidate; never choose for the operator. Stop and report plainly if zero candidates resolve.
- **Step 2 — Full scan** through the file connector (Operation 2, Mode A). Read the inventory in full; note unmapped slots, timestamps marked `unavailable`, and whether `work-product-output` already has files (a signal this is a returning, not new, matter).
- **Step 3 — Extract case basics from the file.** Read in full: the signed engagement/scope document, the intake questionnaire, the most recent filed pleading from either party, every entered order, and any executed agreement. **Never infer a fact the documents do not state** — an unknown is `null` plus a flag, never a guess.
- **Step 4 — Ask only for what is missing,** once, in one organized block. Nothing blocks on an unanswered question.
- **Step 5 — Determine what is already complete** by applying `references/stage-evidence-map.md` to the inventory. Stage ids come only from the canonical lifecycle vocabulary; every inferred completion carries `trigger: "inferred-from-file-scan"` exactly, unparaphrased, with a matching `position.stageEvidence` entry naming the file or folder. In-progress evidence never completes a stage — it only selects `currentStage`. Where two in-progress stages compete, the earlier one in canonical order wins, with a flag naming both.
- **§6.5 — the flags-to-raise-at-birth table:** any required field left `null`/`unknown`, `scopeDocumentOnFile: false` always, a stage that logically should have occurred with no evidence either way, two competing in-progress stages, inferred work that lands in `scope.outOfScopeStages` (never record that completion), anything in `filed-pending`, a date seen but not turned into a deadline object, contracted scope that differs from what was described, and any safety/jurisdictional/conflict indicator — routed to `Angela R. Neave` on sight, at severity `urgent`.
- **§6.6 — deadlines are written empty, always.** This skill records dates it saw, as flags quoting the date and source document. It never computes or estimates a deadline object; that is the command-center skill's job (or a calendaring lane's), from the flags this skill raises.
- **§6.7 — the nine-point checklist** before finishing a birth (matching ledger entries, only owned fields written, re-read immediately before write, arrays append-only, dates traceable, flags reconciled, output stated).
- **If the matter already has a command center:** never birth a second one. Read it, compare, and where the scan and the file disagree, leave the existing value alone, append a `conflict` ledger entry, and flag both values and both sources.
- **All rules that always apply:** fires once per matter then reconciles; read before you ask; never fabricate; inference stays visibly weaker than observation; never invent a schema field or stage id; no storage plumbing in output; no scope document on file is always a flag; nothing produced here is filed, served, or sent.

Read `references/stage-evidence-map.md` and `references/conventions.md` exactly as the base skill would.

---

## What changes — the fork

### Step 6 — birth the command center, routed to the firm's own skill

Where the base's §6.1 routing table says "if `lal-command-center` is
installed, invoke it and pass the state assembled above" — at this firm, that
routes to **`neave-lal-command-center`** instead. Concretely, this means the
file this skill births is:

- `COMMAND-CENTER.html` (not `.md`), containing the same JSON state in a
  `<script type="application/json" id="command-center-state">` block plus a
  firm-branded, scannable HTML rendering below it — colors, fonts, and layout
  exactly as `neave-lal-command-center` specifies.
- Also published as an Artifact in the current session (republished to the
  same URL on any later update), when the Artifact tool is available.
- Accompanied, at the end of the run, by copy-paste text for a matter-scoped
  claude.ai Project — see `neave-lal-command-center`'s format for this block.

Everything else about the birth — the JSON shape, the ledger entries, the
flags, the empty `deadlines[]`, the nine-point pre-finish checklist — is
identical to what the base skill would produce; only the container, the
in-session artifact, and the project-setup handoff are added.

### Step 7 — report format, with three added lines

Use the base's report shape exactly:

```
MATTER FILE SCANNED — {{DATE}}
Files: <N> across <N> folders | Slots populated: <N> of <N> | Timestamps: available | unavailable

POSITION RECORDED
  Current stage:      <stage id> — <label>
  Completed stages:   <list, or "none inferred">
  All completions above were inferred from the file scan, not witnessed.

OPEN FLAGS RAISED
  <severity> — <description>
  …

GAPS LEFT OPEN
  <field> — needs <role token>
  …

COMMAND CENTER
  Written | Emitted for manual save | Handed to neave-lal-command-center
  Deadlines: none computed by this skill. <N> observed dates raised as flags.
  Artifact:  published at <url> | not published (no Artifact tool in this session)
  Project setup text: included below | not applicable
```

Then stop, exactly as the base does — narrative case summaries, onboarding
checklists, and generated instruction blocks beyond the command center and
the project-setup text remain out of scope for this skill, same as the base.

---

## Everything else

Follow `lal-core-foundation:lal-start-case`'s own body for every rule not
named above. Where this document is silent, the base skill's behavior
governs.

⚠️ VERIFY: confirm rule and current text before relying on this. This skill
decides nothing legal; it records position and evidence and routes judgment
calls to `Angela R. Neave`.
