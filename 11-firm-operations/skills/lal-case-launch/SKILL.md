---
name: lal-case-launch
description: "Case File Launcher - mandatory first action in every new client project. Scans the matter folder and produces three files: Case Launch Memo PDF, Roadmap v1, and Project Instructions."
---

## When to use this skill (full trigger reference)

Neave Family Law Group, P.A. Case File Launcher — the mandatory first action in every new Neave Family Law Group, P.A. client project. Triggers on: "new client project is ready," "client signed — set up the project," "start the case file," "I just uploaded the {{DMS}} link," "set up this matter," "case is open — what's first," "the SP folder is here," or any variation of initializing a client project. Scans the client's {{DMS}} matter folder, identifies what work is already complete from the files present, and PRODUCES THREE FILES — the Case Launch Memo as a branded PDF, the Case Roadmap v1 as HTML, and the Project Instructions as markdown with the {{DMS}} link embedded. Chat-only output is a failed run. No downstream Neave Family Law Group, P.A. skill runs until all three files exist. Always runs before lal-onboarding. Calls lal-file-connector for all {{DMS}} reads.


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

# Neave Family Law Group, P.A. Start Case — {{DMS}}-Native Project Launcher

## PURPOSE

Fires **once per matter**, when the Claude Project is created and the
{{DMS}} matter folder link is available. Three jobs:

1. **Scan** the SP matter folder via `lal-file-connector` — establish what has
   already happened.
2. **Generate three files.** Not chat text. Actual downloadable artifacts.
3. **Hand off** — Slack post, project instructions paste, next skill.

---

## THE THREE REQUIRED ARTIFACTS — NON-NEGOTIABLE

Every run of this skill ends with three files presented to staff. If any one
is missing, the run failed and must be re-executed.

| # | Artifact | Format | Filename |
|---|---|---|---|
| 1 | Case Launch Memo | **PDF** (branded) | `MM.DD.YY - LastName - Case Launch Memo - v1.pdf` |
| 2 | Case Roadmap | **HTML** (self-contained) | `MM.DD.YY - LastName - Case Roadmap - v1.html` |
| 3 | Project Instructions | **MD / plain text** | `MM.DD.YY - LastName - Project Instructions - v1.md` |

All three are produced by one script:

```bash
python3 /mnt/skills/organization/lal-case-launch/scripts/build_launch_package.py \
        payload.json /mnt/user-data/outputs
```

Then call `present_files` with all three paths, PDF first.

**Failure modes that count as a failed run:**
- Pasting the memo into chat instead of building the PDF
- Producing the roadmap as a markdown table instead of the HTML file
- Producing project instructions inside a code fence instead of the `.md` file
- Producing two of three
- Any {{DMS}} reference, or "CLAUDE OUTPUT" as the destination folder

---

## STEP 0 — PREREQUISITES

Confirm before doing anything:
- [ ] Retainer is signed **and** paid
- [ ] {{DMS}} matter folder exists, named `Last, First - [Matter Type] (####-####)`
- [ ] Conflict check completed in {{PM_SYSTEM}}
- [ ] This is the first run of this skill on this matter

**Intake disqualifier — TPR matters:** Neave Family Law Group, P.A. never represents a putative father
on a termination of parental rights matter. Screen for this now. If the client
is a putative father on a TPR, stop and escalate to Angela R. Neave. Do not launch.

---

## STEP 1 — LOCATE THE MATTER FOLDER

Call `lal-file-connector` Operation 1 (Resolve the Matter Folder).

Tenant `{{DMS_SITE}}` · Site `{{DMS_SITE}}`. Matter folders are
named `Last, First - [Matter Type] (####-####)`. The parenthetical is the
**InternalReference** — never call it a matter number.

**If the link is in project instructions:** resolve and proceed.

**If not:**
> "I don't see a {{DMS}} folder link in the project instructions. Either
> paste the link to the matter folder now, or give me the client's last name
> and matter type and I'll search. Matter folders are named
> `Last, First - [Matter Type] (####-####)`."

Do not proceed until the matter folder resolves. There is no fallback source —
{{DMS}} is the source of truth for hired matters. {{PM_SYSTEM}} holds leads,
tasks, and billing only.

---

## STEP 2 — FULL SCAN

Call `lal-file-connector` Operation 2, Mode A (Full Scan). Read the returned
inventory carefully — this is how you know what is already done.

---

## STEP 3 — EXTRACT CASE BASICS FROM SP FILES

Before asking staff anything, mine the folder.

| Folder | What it tells you |
|---|---|
| `Billing & Retainers/` | Service type, billing structure, contracted scope, signing date |
| `Intake/` | Client info, opposing party, children, deadlines, red flags |
| `Filed Documents - Client/` | What we filed — petition, answer, motions |
| `Filed Documents - Client/Stamped But Not Filed/` | Prepared but not yet filed |
| `Filed Documents - OP/` | What OP filed — counter-petition, motions |
| `Orders, Agreements, Reports/` | Existing orders, prior MSAs, GAL reports |
| `MD or Discovery - Client/` | Client FA + supporting docs — discovery underway |
| `MD or Discovery - OP/` | OP FA + supporting docs — OP has produced |
| `Hearings/` | Upcoming or past hearings |
| `Notices/` | Notices of hearing, mediation, deposition |
| `Correspondence/` | OC letters, client emails, scope history |
| `Records/` · `Miscellaneous/` | Subpoenaed records, everything else |
| `Notes/` (`GAL Notes/` on GAL matters) | Prior Claude work product |

If `Notes/` already has files, this is **not** a new matter — it is migrated or
returning. Adjust Step 9 messaging.

Call Operation 3 to read: the retainer, the intake form, the most recent filed
pleading, and any active order. Extract client name and role, opposing party,
case type, county/circuit, case number, InternalReference, service type,
billing, contracted scope, children, active orders, and any deadlines.

---

## STEP 4 — ASK STAFF ONLY FOR WHAT'S MISSING

One organized block. Never one question at a time. Typical gaps:
assigned attorney · anticipated resolution path · scope promised verbally but
not in the retainer · red flags known but undocumented · deadlines staff knows
about with no notice on file.

If the scan covered everything, say so and move on.

---

## STEP 5 — DETERMINE COMPLETED STAGES

| Evidence in SP | Mark complete |
|---|---|
| Signed retainer in `Billing & Retainers/` | Lead Intake & Screening · Conflict Check & Retainer |
| Intake forms in `Intake/` | Client Intake & Info Collection |
| Prior launch memo in `Notes/` | Initial Case Analysis |
| Petition or Answer in `Filed Documents - Client/` | Draft Initial Pleadings |
| Affidavit / proof of service in `Filed Documents - Client/` | Filing, Service & Deadlines |
| Organized files in `MD or Discovery - Client/` | Discovery Intake Prep |
| Tracker in `Notes/` | Discovery Tracker — Open |
| Client FA in `MD or Discovery - Client/` | FA Preliminary — Client |
| FA cross-check chart in `Notes/` | FA Cross-Check — Client |
| Income analysis memo in `Notes/` | Income Analysis |
| OP FA in `MD or Discovery - OP/` | FA Preliminary — Opposing Party |
| OP disco review memo in `Notes/` | OP Discovery Review |
| Cert of compliance in `Filed Documents - Client/` | Certificate of Compliance |
| Gap chart in `Notes/` | Discovery Gap Chart |
| ED chart in `Notes/` | ED Chart |
| CS worksheet in `Notes/` | Child Support Worksheet |
| MSA in `Notes/` or `Drafts/` | MSA Draft |
| Final Judgment in `Filed Documents - Client/` or `Orders, Agreements, Reports/` | Final Judgment |

This is how a mid-stream matter joins the roadmap without losing context.

---

## STEP 6 — BUILD THE PAYLOAD

Assemble everything from Steps 3–5 into a JSON payload. Get the schema with:

```bash
python3 /mnt/skills/organization/lal-case-launch/scripts/build_launch_package.py --template
```

Key fields: `client_full` · `client_last` · `client_role` (Petitioner or
Respondent — never Husband/Wife) · `opposing_party` · `case_type` · `county` ·
`circuit` · `case_number` · `internal_reference` · `assigned_attorney` ·
`service_type` · `billing` · `contracted_scope` · `resolution_path` ·
`children` · `active_orders` · `sp_url` · `sp_folder_name` · `sp_file_count` ·
`sp_last_activity` · `notes_contents` · `overview` · `current_phase` ·
`completed_stages` · `next_stage` · `next_stage_owner` · `known_deadlines` ·
`discovery_level` · `discovery_rationale` · `scope_notes` · `missing_info` ·
`red_flags[]` · `next_actions{}` by lane · `roadmap_stages[]`.

**No fabricated facts.** Leave a field empty and the builder renders a visible
`[PLACEHOLDER]` badge. That is the correct behavior — never guess.

`roadmap_stages` maps to the five-phase lifecycle. Each stage needs
`phase` (1–5) · `stage` · `status` (complete / in progress / next / not started
/ blocked) · `owner` · `skill` · `notes`. Phase 3 (Mediation) only populates
when mediation is ordered or scheduled. Scope the stage list to the service
model — limited-scope coaching Coaching gets no filing stages and discovery level NONE.

---

## STEP 7 — PREVIEW & CONFIRM GATE

Before building, show staff a compact preview in chat:

- Client · role · case type · InternalReference
- Current phase and next stage with owner
- Discovery level and rationale
- Red flag count
- Any `[PLACEHOLDER]` fields that will appear in the output

Ask: **"Confirm and I'll build the three files, or tell me what to correct."**

Do not run the builder before this gate clears.

---

## STEP 8 — GENERATE AND PRESENT

```bash
python3 /mnt/skills/organization/lal-case-launch/scripts/build_launch_package.py \
        payload.json /mnt/user-data/outputs
```

The script prints the three paths. Call `present_files` with all three, PDF
first, then HTML, then MD.

### FILE SAVE INSTRUCTIONS — give these verbatim

> Download all three and save to {{DMS}}:
> `[MATTER FOLDER] / Notes/` — or `GAL Notes/` on a GAL matter.
>
> 1. `MM.DD.YY - LastName - Case Launch Memo - v1.pdf`
> 2. `MM.DD.YY - LastName - Case Roadmap - v1.html`
> 3. `MM.DD.YY - LastName - Project Instructions - v1.md`
>
> Then open the `.md` file, copy the whole thing, and paste it into this
> Claude Project's Instructions field, replacing whatever is there. The
> {{DMS}} link is already embedded — every future session in this project
> will be context-aware without re-entering anything.

Saving is manual. The architecture describes automated SP writes; the actual
workflow is download-and-save. Do not tell staff it saved itself.

**Versioning:** always v1 on first launch. Regenerations bump v2, v3 — never
overwrite. Latest roadmap version wins.

---

## STEP 9 — SLACK POST

Slack is the internal communications channel firm-wide. No WhatsApp.

> Post to the **case management channel** (representation matters) or the
> **DIY channel** (DIY clients):
> - The Claude project link for this matter
> - The {{DMS}} matter folder link
> - One line: client name, case type, assigned attorney, next stage and owner

Every client channel includes all five staff. Channel naming is
`last-first-intref`. Triggers post-retainer only.

---

## STEP 10 — ROUTE TO NEXT SKILL

**New matter** (`Notes/` was empty before this run):
> **Next: `lal-onboarding`.** Produces the Internal Case File Memo
> and the Client Welcome Email, runs the deeper intake interview, and builds
> the full onboarding checklist by lane.

**Migrated / returning matter** (`Notes/` already had files):
> **Next: `lal-case-project`** to route the immediate task. The roadmap marks
> where the case sits; `lal-case-project` confirms the stage and routes down.

**limited-scope coaching Coaching (unbundled):**
> **Next: `lal-onboarding`, flagged DIY.** No court filings, no
> notice of appearance, coaching deliverables only, discovery level NONE. All
> staff time bills at $300/hr on DIY matters — confirm it is set in {{PM_SYSTEM}}
> before any time is logged.

---

## FIRM RULES — ALWAYS APPLY

- **Three files or the run failed.** PDF memo, HTML roadmap, MD instructions.
- **Fires once per matter.** Re-run only on a rebuild, and bump the version.
- **{{DMS}} is the source of truth** for this matter. {{PM_SYSTEM}} carries
  leads, tasks, billing, and calendar. {{DMS}} does not exist.
- **`Notes/` is the output destination** — versioned, dated, labeled. Never
  `CLAUDE OUTPUT`. Never `Drafts/`.
- **All SP access routes through `lal-file-connector`.** No direct MCP calls.
- **Petitioner/Respondent only.** Never Husband/Wife. Mother/Father is
  preserved only inside a §61.30 child support worksheet.
- **No fabricated facts.** Empty payload fields render `[PLACEHOLDER]`.
- **Red flag at launch = stop.** Notify the attorney before routing downstream.
- **Scope mismatch = stop.** Billing and ethics risk. Flag to Angela R. Neave.
- **Discovery level requires attorney confirmation.** Russ does not activate
  collection until that confirmation is documented in {{PM_SYSTEM}}.
- **Brand palette is locked.** Pink `#FF1F8E` · Orange `#FF6B00` · Lime
  `#C8D400` · Teal `#00B5B8` · Black `#0D0D0D` · Paper `#F7F5F0`. Any other
  color in an Neave Family Law Group, P.A. deliverable is a defect.
- **All time tracked in {{PM_SYSTEM}}**, including Claude-assisted work.

---

*Neave Family Law Group, P.A. Internal Skill — Case File Launcher — Required first action in every new client project*

---

## OUTPUT DELIVERY — FIRM STANDARD (v2, {{DMS}}-native)

All output from this skill is delivered through `lal-file-connector` (Operation 4).

**Destination:** `Notes/` in the {{DMS}} matter folder
`Last, First - [Matter Type] (####-####)`. There is no `CLAUDE OUTPUT` folder and
no {{DMS}} path. (`GAL Notes/` on GAL matters.)

**Filename:** `MM.DD.YY - LastName - DocTitle - v1.ext` — versioned, never overwritten.

**Delivery depends on where this skill is running:**

- **Claude.ai (chat / Projects)** — Claude cannot write to {{DMS}}. Present the file
  as a **download** and print the destination block: matter folder → `Notes/`, filename,
  version. Never write "saved to {{DMS}}."
- **Cowork (desktop)** — write to the folder designated for the session (ask once at
  first delivery, reuse thereafter), confirm the **actual path written**, and state
  where the file belongs in {{DMS}}.

Nothing is filed or sent without attorney sign-off. Time is tracked in {{PM_SYSTEM}},
including Claude-assisted work.

