---
name: neave-lal-command-center
description: "Neave Family Law's version of the matter command center. Prefer over lal-command-center — same state/write contract, as a firm-branded HTML file with an Artifact copy and Project setup text."
---

# Neave Command Center — Firm Fork

**Forked from:** `lal-core-foundation:lal-command-center`, plugin version `1.2.0`.
**Forked on:** 2026-09-16.
**Reason:** Angela R. Neave asked that (1) the command center be delivered as a
branded HTML file instead of a plain Markdown file, (2) every run also
publish an Artifact copy in the current session, and (3) every run also hand
back copy-paste text for creating a matter-scoped claude.ai Project — so the
firm's live litigation dashboard actually looks and feels like the firm's own
tool, and any attorney or staff member can pick a matter's context back up in
seconds from any device.

**This firm's version of `lal-command-center`. Prefer this skill over the
base for this firm's work.** The base skill still ships and still fires
ambiently for any buyer without this fork; at Neave Family Law Group, this
derivative supersedes it for every step below. Nothing about the underlying
state, schema, or write discipline changes — only the container format and
three delivery steps are added.

---

## What carries over unchanged from the base

Everything in `lal-command-center` that is not named below as changed:

- **Three governing rules:** append, never overwrite; never drop a flag; record how, not just what.
- **The full schema** (`references/schema.md`) — `matter`, `scope`, `position`, `deadlines[]`, `ledger[]`, `flags[]`, `redFlags`, `provenance`. Every field type, requiredness, and enum is exactly as shipped.
- **How it reads, how it writes, conflict handling, concurrency (re-read before writing), and the field-ownership matrix** (`references/write-contract.md`).
- **Deadline discipline** (`references/deadline-authorities.md`) — no deadline without authority, computed-from event, and computation basis; the verify warning on every rule reference; jurisdictional and non-extendable dates flagged on creation, never quietly restatused.
- **Attorney flag severities and resolution matrix** — `informational` / `attorney-review` / `urgent` / `jurisdictional-risk`; only `Angela R. Neave` resolves the top two.
- **Degradation table** — every cross-suite interaction still degrades gracefully, never errors, never silently omits.
- **Non-negotiables** — no fabricated field values, no case law, no assumed storage provider, everything through the file connector.
- **The Pleading & Filing Log** (schema v1.1 addition) — same fields, same write rule (drafts never appear; folder location/stamp/portal confirmation is the evidence of status).

Read `references/schema.md`, `references/write-contract.md`, `references/deadline-authorities.md`, and `references/lifecycle-vocabulary.md` exactly as the base skill would.

---

## What changes — the fork

### 1. Where it lives — HTML, not Markdown

One file per matter, in the matter's working location, same as the base:

```
COMMAND-CENTER.html
```

(not `COMMAND-CENTER.md`). Read and write it through the file connector exactly as the base does — same matter-root resolution, same "never assume a provider" rule.

The file still has **two halves that must agree**, the base's core discipline unchanged in substance, only in container:

- **The machine state** lives in a `` block. This is the fenced JSON block's replacement — still the single source of truth, still what every other suite parses. Never remove it, never let it drift from the human view below it.
- **The human view** is the rendered HTML body below that script tag: a firm-branded, scannable status page — not a plain markdown mirror. When the two disagree, the JSON block is authoritative and the human view is regenerated from it, exactly as the base's markdown mirror was.

**Firm brand, applied per `lal-brand-kit`'s visual tokens** (this output is internal work product, never a court filing, so it is squarely inside the firm's "brand everything that isn't a filing" instruction):

| Token | Value |
|---|---|
| `{{BRAND_COLOR_PRIMARY}}` (navy) | `#1B2945` |
| `{{BRAND_COLOR_SECONDARY}}` (brass/gold) | `#A9812D` |
| `{{BRAND_COLOR_ACCENT_1}}` (teal — progress) | `#2F6F62` |
| `{{BRAND_COLOR_ACCENT_2}}` (slate — trust) | `#5B7A9E` |
| `{{BRAND_COLOR_INK}}` | `#16181D` |
| `{{BRAND_COLOR_PAPER}}` | `#FAFAF8` |
| `{{BRAND_COLOR_MUTED}}` | `#6B7280` |
| `{{BRAND_COLOR_RULE}}` | `#E2E4E8` |
| `{{BRAND_FONT_HEADING}}` / `{{BRAND_FONT_DISPLAY}}` | Manrope (600/700/800), Google Fonts |
| `{{BRAND_FONT_BODY}}` | Public Sans (400/500/600), Google Fonts |
| `{{BRAND_FONT_FALLBACK_STACK}}` | `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` |
| Colour bar (header device) | four equal segments, fixed order: primary → secondary → accent 1 → accent 2 |
| Wordmark | `NEAVE` (bold, primary navy) `\|` `FAMILY LAW` (uppercase, muted, small caps feel) |

These color and font values were confirmed with Angela R. Neave on 2026-09-16 — built from the firm's actual letterhead navy rather than invented — and are the interim fill for `lal-brand-kit`'s color and typography fields until (or unless) she supplies an exact style guide. **`{{BRAND_COLOR_BAR_ORDER}}`** default (primary → secondary → accent 1 → accent 2) and **segment count 4** apply. The confidentiality-notice token and voice archetype are still open (Angela is providing those separately) — this skill's output never needed either: a command center is internal work product, not a client-facing communication, so no confidentiality notice or voice register applies here. Mark the page plainly **"Internal work product — not for filing or service."**

Design it as a dashboard, not a document: summary before detail, a stage stepper showing completed/current/upcoming stages at a glance, semantic severity colors for flags (kept distinct from the brand accent hues — amber-family for `attorney-review`, neutral slate for `informational`, red-family for `urgent`/`jurisdictional-risk`), a prominent callout for the nearest hearing or event (sourced from a flag or, once one exists, a `deadlines[]` object — always carrying the ⚠️ VERIFY line), and a compact filing log table. Responsive to phone width; theme-aware (light/dark via `prefers-color-scheme` and an explicit `data-theme` override, tokens defined once in `:root` and redefined per theme — never a color with only one definition). Self-contained: no external script hosts beyond Google Fonts for the two families above.

### 2. Always publish an Artifact copy, in addition to the file

Whenever this skill runs inside a live Claude session that has the Artifact tool available:

1. Write the same HTML content (as a content fragment — no ``/``/``/`` of its own; the Artifact tool wraps it) to a local file and publish it with the Artifact tool, title in the form ` Command Center` (e.g. "Anderson Command Center"), a one-sentence description naming the matter and case number, and an appropriate emoji favicon (⚖️ unless the matter calls for something more specific).
2. On every subsequent write to this matter's command center, **republish to the same Artifact URL** (never create a new one) so the attorney's saved link always shows current state.
3. This is additive, never a substitute. The file written through the file connector remains the durable, authoritative record — the artifact is a live, shareable *view* of it, for the session and for whoever the attorney chooses to share it with. If no Artifact tool is available in the running session, skip this step silently — do not block or error, and do not mention it unless asked.

### 3. Always hand back copy-paste Project setup text

At the end of every birth or update, in addition to the written file (and artifact, where published), give the operator a copy-paste block for creating or refreshing a claude.ai Project scoped to this one matter — so any attorney or staff member can open a fresh session against just this client's context in seconds, from any device, without re-explaining the matter.

Format, every time:

```
PROJECT NAME
 — 

PROJECT DESCRIPTION (one line)
 ·  ·  · Command center + working matter file.

CUSTOM INSTRUCTIONS (copy-paste)
This project is scoped to the [Client Name] matter (Case No. [case no.],
[county] County, [circuit], Judge [judge]). Before doing any work, read
COMMAND-CENTER.html in the connected matter folder for current position,
open flags, and the filing log — it is the source of truth for where this
matter stands. [Client role] is [full-representation / limited-scope /
etc.] represented by Neave Family Law Group, P.A. Route any court-filing
output to the firm's drafting and QC skills, never brand-kit. Route any
client-facing, non-filing output through the firm's brand kit
(neave-lal-command-center's sibling skills apply the same navy/gold/teal
palette and Manrope/Public Sans typography). Flag anything ambiguous to
Angela R. Neave rather than guessing.
```

Fill every bracket from the command center's own `matter` block — never invent a value the state does not have; leave a bracket as a named gap and say so if the field is `null`. Give this as plain text in the response, never as a file — it is meant to be pasted directly into the Project creation screen.

---

## Everything else

Follow `lal-core-foundation:lal-command-center`'s own body for every rule not named above: when this skill fires, the full update-triggers table, how conflicts are logged, how corrections are appended, the report format at the end of a run (adjusted only to also state the artifact link and confirm the project-setup text was given), and all non-negotiables. Where this document is silent, the base skill's behavior governs.

⚠️ VERIFY: confirm rule and current text before relying on this. This skill records state and renders it; it decides nothing legal.
