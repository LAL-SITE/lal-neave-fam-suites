# 90-firm-custom

This plugin is Neave Family Law Group, P.A.'s own space. It starts empty.

## What goes here

Firm-specific derivatives of any Legal Authority Lab skill, created with the
`lal-customize` skill (ships in Core Foundation). When a purchased skill needs
a firm-specific variant — a different clause set, an extra approval step, a
firm-only checklist — `lal-customize` writes the derivative into
`90-firm-custom/skills/` as a distinctly firm-prefixed skill. It never edits a
shipped LAL skill in place.

## Why it's separate

- Keeps every LAL-authored skill in the numbered suites untouched, so suite
  updates from Legal Authority Lab never collide with firm customizations.
- Makes it obvious, at a glance, which skills are LAL product and which are
  this firm's own work product.
- Everything under `90-firm-custom/` is this firm's property — LAL claims no
  authorship or license interest in anything placed here.

## Structure

```
90-firm-custom/
  .claude-plugin/
    plugin.json
  skills/
    <firm-derivative-skill-name>/
      SKILL.md
      references/        (optional)
```

## Getting started

Run `lal-customize` (Core Foundation) whenever a purchased skill needs firm-specific
adaptation. It will scaffold the new skill folder here and register it so it
loads alongside the purchased suites.
