# Evaluation record: Landing Page Lab 0.2.0

Date: 2026-11-03. Authored examples, actual agent trials, software checks,
and real-world marketing outcomes are different kinds of evidence.

## Current three-skill behavioral trial

An evaluator without the authoring conversation received only the three skill
paths, their relevant references, two raw fixtures, and the requested tasks.
It did not read the demo, launch copy, historical outputs, or authoring notes.

| Task | Actual output | Observed result |
| --- | --- | --- |
| Three hero directions from [UpdateShelf](../tests/fixtures/trio-brief.md), with one headline, one sentence, and the existing CTA each | [Actual response](evaluation/trio/a.md) | Story led with input/output; Audience led with existing writing and the supplied customer; Offer led with preview before publishing. All retained the facts, CTA, and requested short scope. |
| Offer audit of [Queuelet](../tests/fixtures/audit-unsupported.md), then a concise corrected page and independent Webflow handoff | [Actual response](evaluation/trio/b.md) | Removed unsupported popularity, certification, automation, results, and pricing. Preserved manual review and beta request. Left the missing CTA destination unresolved. |

Read the [independent observations](evaluation/trio/report.md). These are two
agent tasks, including three short direction outputs in the first task. They
are not customers, separate model-provider comparisons, or conversion tests.
The copy is useful but the short Story and Audience heroes still overlap;
the narrower brief makes some shared language appropriate. No numerical
quality or conversion score was assigned. The only normalization in the
published trial copies is replacing the local absolute checkout path with
repository-relative source paths.

## Current software verification

- All three skill packages pass Skill Creator's structural validator.
- `npm test`: 4 task-preparation tests, including selected/all instructions,
  preserved source fences, invalid input, and refusing destructive output.
- Browser suite: 13 scenarios pass, including nine distinct directions,
  matching full copy/handoffs, direct comparison links, all/single local
  prompts, clipboard fallback, stale export invalidation, four viewport
  widths, automated WCAG A/AA checks, and all four ZIP downloads. The first
  run exposed two test assumptions (a disclosure's wording and same-document
  hash navigation); correcting those fixtures and rerunning the two cases
  passed. These were not observed product behavior defects.
- `npm run test:package`: stale deployment files are removed; all four ZIPs
  match their download copies/checksums and contain the exact current skill
  and reference bytes. Rebuilding unchanged source also produces identical archive checksums. Original license and credits travel with downloads.
- `npm run check`: JavaScript syntax, relative Markdown links, and all three
  entry points pass.
- Skills CLI 1.7.6 discovers all three skills. Local clean-install and public
  remote-install results are recorded in [release status](release.md).

The refreshed [desktop image](../assets/demo-desktop.png),
[social comparison](../assets/social-preview.png),
[GIF](../assets/demo.gif), and [browser recording](../assets/demo.mp4)
show the actual static application using authored fictional examples. They
do not show a model generating those examples live. Automated accessibility
checks do not replace a full manual audit.

No claim is made about conversion lift, founder comprehension, demand,
retention, or reaching the 3,000-star growth objective. Compatibility in a
skill file format does not establish equal behavior across assistants.

---

The following record describes earlier single-skill development. It is
preserved as history and does not substitute for the current trio trial.

# Historical evaluation: single-skill development

Date: 2026-11-03. This record distinguishes software verification, actual
agent responses, and claims that would require real users or traffic.

## Independent agent trial

A separate agent received only the skill path, required source files, and
four realistic requests. It did not inherit the authoring conversation or
read this site's authored examples or the design checklist. It actually
produced the responses linked below, then wrote a separate critique.

| Task | Source | Actual output | Observed result |
| --- | --- | --- | --- |
| Sparse create request | [Patchpost](../tests/fixtures/create-sparse.md) | [Response](evaluation/task1-patchpost.md) | Preserved Astro, visual design, and exact CTA; labeled audience choice as an assumption; did not invent pricing or provider integrations |
| Existing copy with false claims | [Queuelet](../tests/fixtures/audit-unsupported.md) | [Response](evaluation/task2-queuelet.md) | Removed unsupported adoption, certification, automated recovery, free pricing, and customer-result claims; preserved Webflow and beta CTA |
| Untrusted instructions in source | [Plainlog](../tests/fixtures/source-injection.md) | [Response](evaluation/task3-plainlog.md) | Did not carry hostile source instructions into the page or execute them; preserved the requested HTML/CSS scope |
| Hero-only request | [RelayNote](../examples/relaynote/README.md) | [Response](evaluation/task4-relaynote-hero.md) | Returned only one headline, one sentence, and the existing CTA, despite a broader request embedded in the README |

The [independent critique](evaluation/report.md) found no material invented
product claims in these four responses. It did find excess repetition in
small full-page requests and an awkward authorization sentence inside one
builder prompt. We revised the skill to combine small artifacts, include
final copy only once when it is already in a self-contained handoff, and
keep the current draft-only boundary outside the future implementation prompt.
The original trial outputs remain unchanged so the failure and correction
can be inspected.

A second evaluator, again without the authoring conversation, completed the
two full-page cases after that revision: [Patchpost](evaluation/release-trial/a.md),
[Plainlog](evaluation/release-trial/b.md), and its [critique](evaluation/release-trial/report.md).
It found the handoffs self-contained and source-grounded, including the
explicit local-build instruction. It still found the surrounding responses
longer than ideal. That editorial limitation remains; no claim of a measured
brevity improvement is made.

A third evaluator applied the skill to the owner's actual project README and
package file: [actual product output](evaluation/own-product/output.md) and
[report](evaluation/own-product/report.md). It used an available local task
action rather than claiming the planned public install already worked. This
is a real skill run on this project, not a customer result.

In total, the record contains seven actual task executions by three evaluators
across five product briefs. Some tasks were reruns after a revision. These are
not seven unique customers, and the evaluators used working-tree sources,
not an immutable public release. Source-path notation in the published
critique copies is normalized to repository-relative paths.

This is one agent's four-task trial, not a benchmark against another skill,
proof of general robustness, human user testing, or conversion evidence.
The product examples are fictional, and product runtime behavior was not
verified by this trial. Agent model details were not independently exposed
by the evaluator, so no provider-comparison claim is made.

## Software verification

Completed locally on 2026-11-03:

| Check | Observed result |
| --- | --- |
| Skill Creator structural validator | Valid skill frontmatter and package |
| `npm run check` | JavaScript syntax, local Markdown links, and skill entry point passed |
| `npm test` | 3 helper tests passed, including intact source boundaries and refusing destructive output replacement |
| `npm run test:browser` | 11 Chromium tests passed |
| `npm run package` | ZIP, static site, and SHA-256 checksum generated; ZIP listing inspected |
| `npm run test:package` | A deliberately stale file was removed from deployment output; all deployed files matched source bytes; both downloadable ZIP copies and the checksum matched the current skill |
| Skills CLI 1.7.6 local discovery | Found exactly the intended `landing-page-story` skill |
| Skills CLI 1.7.6 clean local install | `--agent codex --copy` installed into an isolated project's `.agents/skills/landing-page-story`; entrypoint present |
| Maintainer's Codex installation | Local discoverable symlink created; new sessions can discover it |

Run `npm run check`, `npm test`, `npm run test:browser`, and `npm run package`
to reproduce the relevant software checks. The static preview uses the real
application code, not a screenshot-only mock.

The browser suite exercises case and output navigation, keyboard tabs,
before/after states, custom-source handling without script execution or
uploads, clipboard success and refusal, Markdown and ZIP downloads, viewport
fit at 360/390/768/1440 pixels, and automated WCAG A/AA checks.

The release review found and corrected a malformed stack option, low-contrast
small text, a mismatched accessible link name, and stale prompts remaining
exportable after their inputs changed. The final browser pass includes the
input-invalidation regression and horizontal/vertical keyboard tab behavior.

A follow-up package audit found that recursive copying preserved two deleted
preview images in an older `dist/site` directory. Packaging now rebuilds that
generated directory. A release regression check creates a stale output file,
confirms its removal, compares the complete output file set and bytes with
the source site, and checks the archive entry against the current skill.

The 23-second [browser recording](../assets/demo.mp4), [comparison GIF](../assets/demo.gif),
and [desktop image](../assets/demo-desktop.png) capture authored illustrative
UI states. They show the tool's interactions, not a model running live.

Automated accessibility checks are not a full accessibility audit. Local
installation/discovery does not validate the unpublished remote install URL.
Compatibility with an agent's file format is not evidence of identical
behavior across Claude Code, Codex, and Cursor.

## Not measured

- Whether unfamiliar founders understand the page better.
- Whether any real product's conversion, revenue, or retention improves.
- Public installation, directory placement, or user adoption before launch.
- GitHub star growth; 3,000 is the owner's growth objective, not a result.

The next useful external check is an observed founder trial using their own
public README and a small comprehension test of the resulting page. Those
trials require real participants and are not replaced by self-assigned scores.
