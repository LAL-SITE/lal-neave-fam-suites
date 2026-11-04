---
name: lal-install-verify
description: "Post-install system test for any LAL installation. Run after every install, update, or patch - verifies purchased suites fire, references resolve, tokens are baked; writes a pass/fail report."
---

# LAL Install Verify — the post-install system test

You are verifying a system that a law firm paid for and will use on live client matters.
A check that "mostly passes" is a fail. Never soften a failure into a caveat.

## When to run

Run immediately when anyone says: "verify the install", "test the system", "test our
setup", "did the install work", "run the install test", "post-install check", "smoke
test", "check the skills installed", after `lal-installer` completes, after ANY suite is
added/updated/patched, or at the end of every install session. The install session is not
over until this skill reports PASS.

Anyone at the firm may run it — staff, paralegal, or attorney. No approvals are needed to
run a verification. Environment-flexible: run wherever you are; if the other environment
(chat vs Cowork) is materially better for a check, say so in one line and keep going.

## Setup

1. Read the Firm Profile built by `lal-installer` (firm identity, storage provider,
   purchased suites, `paths.reference_library_path`, test-user name). If no Firm Profile
   exists, that is **finding #1 (FAIL)** — record it and continue with what you can
   discover; do not stop.
2. Determine the expected plugin list: the installed marketplace's plugin list (or, if
   unavailable, the suites named in the Firm Profile / purchase record). Never recite the
   suite catalog from memory.
3. Create a sandbox test matter named `ZZ-LAL-INSTALL-TEST-<date>` in the firm's storage.
   Every write in this verification goes there and nowhere else. Never touch a real
   client matter.

## The checks

Run all of them. Record PASS / FAIL / SKIPPED (with the reason) for each. Do not stop at
the first failure — the report must show the whole picture in one run.

**1. Suite presence.** Every purchased suite's skills are installed and listed, and no
suite that was NOT purchased is present. Compare against the expected plugin list
one-for-one.

**2. Skills fire.** For each installed suite, confirm its entry-point skill loads and
responds in-session. Also schedule the **fresh-conversation test**: the firm's named test
user opens a brand-new conversation and confirms one suite skill fires unprompted. This
one check cannot be self-certified from inside the current session — the report marks it
PENDING until the test user confirms, and the install session stays open until then.

**3. References resolve.** For each suite, open its `REFERENCE-INDEX.md` (or bundled
references folder). Sample at least 3 listed files per suite — one content template, one
format-master PDF, one rule reference where present — and confirm each opens and is
readable. An index entry that points at a missing or unreadable file is a FAIL naming the
file.

**4. Token bake.** Scan installed skills and text references for unresolved identity
tokens (`Neave Family Law Group, P.A.`, `Angela R. Neave`, `{{BAR_NO}}`, `2400 E. Commercial Blvd., Suite 826, Fort Lauderdale, FL 33308`,
`(954) 981-2200`, `aneave@neavefamilylaw.com`, `{{PM_SYSTEM}}`, `{{DMS}}`, `{{RESEARCH_PROVIDER}}`,
`{{UPLOAD_PORTAL}}`, `the firm template library`, role tokens). Token-documentation files are
exempt. Bracket tokens (`[CLIENT NAME]`, `[CASE NO.]`) are draft-time and are SUPPOSED to
remain — never flag them. Also confirm the reverse: no OTHER firm's identity (and no FMLG
identity) appears anywhere in content.

**5. Storage / file connector.** Through the file connector, write a small test file into
the sandbox matter, read it back, and list the folder. All three must succeed.

**6. Command center.** Birth a command center on the sandbox matter, log one stage
completion and one deadline, then read both back.

**7. Caselaw protocol.** Ask for authority on any small Florida family law point. Verify
the citation comes ONLY from `github.com/LegalAuthorityLab/fl-family-law-authority` (or
user-provided verified material), carries the verification warning, and that the skill
refuses to cite from memory or the open internet.

**8. Brand output.** Generate a one-paragraph sample client letter via the correspondence
skill. Confirm the letterhead identity, attorney name, and bar number are the FIRM's real
values (this is the live proof of check 4).

**9. Graceful degradation.** Invoke one workflow that cross-references a suite the firm
did NOT purchase (e.g., ask Discovery for a deficiency letter when Drafting isn't
installed). Expect a working fallback and a plain statement of what the un-purchased
suite would add — never an error, never a dead end.

**10. Live-web dependencies.** Confirm judicial-procedures performs a live search (and
say plainly that it requires web access); confirm statutes/rules resolve to official
sources.

**11. Reference library.** If the firm has `lal-reference-library` access, confirm
`paths.reference_library_path` points at a real, populated location.

## The report

Write `INSTALL-VERIFICATION-REPORT-<YYYY-MM-DD>.md` into the firm's LAL admin folder
(beside the Firm Profile), containing: firm name, date, kit/master version verified,
who ran it, a one-line PASS / FAIL / PENDING verdict, then the per-check table with
evidence (file names sampled, values seen), every failure with the specific missing or
broken item, and a numbered fix list. Log the run and verdict to the sandbox matter's
command center, then flag the sandbox matter for deletion (ask before deleting).

**Verdict rule:** PASS requires every check PASS and check 2's fresh-conversation test
confirmed. Anything else is FAIL (or PENDING if only check 2 remains). Report failures as
failures — never "pass with notes".

## What this skill never does

- Touch, read, or write any real client matter
- Fix defects silently — it reports; fixes go through the installer/LAL support or
  `lal-customize`
- Certify the fresh-conversation test without the test user actually doing it
- Tell an attorney to seek attorney approval — attorneys self-approve
