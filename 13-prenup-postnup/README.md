# Prenup & Postnup Suite — Legal Authority Lab

**Suite:** Prenup & Postnup Suite  
**List price:** Proposed SKU — pricing TBD  
**Version:** 1.0.0  
**Publisher:** Legal Authority Lab — legalauthoritylab.com

Prenuptial and postnuptial agreements both directions: drafting (§61.079 prenups, contract-law postnups) and review/enforceability analysis in all four contexts (pre-execution and divorce-context, prenup and postnup).

## Skills included

- `lal-prenup-drafter`
- `lal-prenup-review`

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

- New SKU approved Aug 1, 2026 — not yet in OneSheet catalog or pricing calculator. Set list price and add to catalog before selling.

## Cross-suite behavior

Missing suites degrade gracefully: if a referenced suite is not installed, the skill
notes the limitation and continues with its own scope. It never errors and never
silently omits.
