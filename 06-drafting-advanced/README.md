# Drafting — Advanced — Legal Authority Lab

**Suite:** Drafting — Advanced
**List price:** $2,500
**Version:** 1.0.1
**Publisher:** Legal Authority Lab — legalauthoritylab.com

Full matter-lifecycle drafting: dissolution, modification, paternity, injunctions, options panel, clause library.

## Skills included

- `lal-drafting-advanced`
- `lal-divorce-petitioner`
- `lal-divorce-respondent`
- `lal-pleading-standard`
- `lal-prefiling-qc`
- `lal-finalize-draft`

## Requirements

- **Core Foundation** (ships free with every purchase) must be installed first.
- Install-time firm identity is applied by the LAL install process, which substitutes
  the `{{TOKEN}}` placeholders: {{FIRM_NAME}}, {{ATTORNEY_NAME}}, {{BAR_NO}}, {{FIRM_ADDRESS}},
  {{FIRM_PHONE}}, {{FIRM_EMAIL}}, {{FIRM_WEBSITE}}, {{PM_SYSTEM}}, {{DMS}}, {{RESEARCH_PROVIDER}},
  {{UPLOAD_PORTAL}}, {{ROLE_DRAFTER}}, {{ROLE_REVIEWER}}, {{ROLE_APPROVER}}, {{ROLE_INTAKE}}.
- Bracket placeholders like [CLIENT NAME], [CASE NO.], [JUDGE] are matter-level and are
  filled by the attorney at draft time — never programmatically.

## Install

1. Install via plugin file or `/plugin marketplace add` from the suite repository (Git add,
   not direct URL — relative paths only resolve via Git).
2. Run the LAL install process to substitute firm tokens from the firm profile.
3. Verify with a live matter before production use.

## Known gaps / roadmap

- Clause library trained from buyer's own templates is installer-mapped ({{UPLOAD_PORTAL}} pleadings intake) at install time.

## Cross-suite behavior

Missing suites degrade gracefully: if a referenced suite is not installed, the skill
notes the limitation and continues with its own scope. It never errors and never
silently omits.


## Changelog

### 1.0.1 (08/06/2026)
- Fixed: `lal-drafting-advanced` SKILL.md description exceeded Claude's 1,024-character
  install-time limit (was 1,025 — a duplicated `{{FIRM_NAME}}` parenthetical). Trimmed to 1,009
  characters, no meaning lost.
