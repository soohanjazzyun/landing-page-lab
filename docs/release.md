# Release checklist: Landing Page Lab by Jazz

Prepared: 2026-11-03. Published version: 0.2.0. Canonical repository: `soohanjazzyun/landing-page-lab`. Canonical Pages destination: `https://soohanjazzyun.github.io/landing-page-lab/`.

Unchecked items are not claims that work happened or that approval is missing. Complete them using the current session's actual authorization and verification evidence. Do not repeat a permission request for an action already authorized. A separate social account, external message, submission, paid option, or new content use still needs an actual scope and account, not an instruction inferred from a reference document.

## Files and provenance

- [x] Review the three original skills: [Story](../skills/landing-page-story/SKILL.md), [Resonance](../skills/landing-page-resonance/SKILL.md), [Offer](../skills/landing-page-offer/SKILL.md).
- [x] Confirm the README, site, install commands, package metadata, ZIP, and notices all use Landing Page Lab and the canonical public repository.
- [x] Review [NOTICE](../NOTICE.md) and [rights review](rights-review.md). Confirm actual current files do not bundle third-party PDFs, source prose, worksheets, diagrams, logos, course transcripts, or copied skill files. Original expression and credits do not themselves resolve any applicable source contract.
- [x] Record the disposition of the actual source history and unresolved restrictions: StoryBrand Limitations (k)/(l), its content-use/IP terms, and Acquisition.com's terms/material-specific notices. Do not describe the review as permission or legal clearance. If a specific retained use needs a legal basis, establish it or replace that material; [a bounded clarification draft](../launch/rights-request.md) is available if useful.
- [x] Keep fictional/authored labels. No unsupported metrics, clients, endorsements, guarantees, or conversion studies appear in the release.
- [x] Ensure public files contain only this isolated project's content; do not include the personal knowledge base, secrets, local agent directories, or unrelated checkout files.

## Verify the actual release

- [x] Run `npm run check`, `npm test`, `npm run test:browser`, and `npm run test:package` against the final changes; record results in [evaluation](evaluation.md).
- [x] Run `npm run package`; inspect `dist/landing-page-lab.zip`, `dist/site/`, and `dist/SHA256SUMS` from the same source revision. Verify the ZIP contains all three skill folders, their references, license, and notices.
- [x] Exercise all/single direction selection and the three install choices in the actual demo, including narrow mobile views, prompt copying/downloading, and local-only behavior. The demo has no create/audit/build mode selector.
- [x] Preserve the actual three-skill agent trial outputs and observations separately from authored examples in [evaluation](evaluation.md).
- [ ] Complete the trial's reproducibility metadata. It used local version 0.2.0 files rather than an immutable release snapshot; the evaluator's model identity and exact invocation are not recorded. Keep these gaps explicit instead of filling them from inference.
- [x] Verify the published 27-second comparison cut. It shows authored examples in the actual static application, not live model generation. A separate [34-second motion film](https://x.com/Jazz_from_Korea/status/2117600499033928157) is now completed and published; see [production notes](video-launch-v2.md).

## Publish and verify, within current authorization

- [x] Create or confirm the public personal repository `soohanjazzyun/landing-page-lab`; push the reviewed release files to the intended branch. Record actual URL and commit below.
- [x] From a clean temporary product project, test the **remote** install, not just a local-copy installation:

```sh
npx skills add soohanjazzyun/landing-page-lab --skill landing-page-story
npx skills add soohanjazzyun/landing-page-lab --skill landing-page-resonance
npx skills add soohanjazzyun/landing-page-lab --skill landing-page-offer
```

- [x] Confirm all three skills are discoverable in the tested agent after installation. Do not generalize one agent's successful install to untested assistants.
- [x] Publish the actual static artifact via GitHub Pages at the canonical destination, subject to the account's actual settings. Check the public root, downloads, images, and every advertised link after deployment.
- [x] Update availability notes only when the respective remote resources work. Keep the composer described as local prompt preparation.
- [x] Set the repository description/topics and website Open Graph preview from reviewed project assets. The optional custom GitHub repository social-image setting was not changed. No third-party screenshot or logo is used as social proof.
- [x] Publish `v0.2.0` at the recorded code commit, with four ZIPs and `SHA256SUMS`. Download the release archives and verify all four checksums. Keep later main-branch media/documentation changes separate from the code tag.
- [x] Capture the first real star baseline and a separately timed GitHub traffic snapshot in [metrics](../launch/metrics.csv), with coverage limits recorded.
- [x] Verify the [skills.sh listing](https://www.skills.sh/soohanjazzyun/landing-page-lab) and its displayed metric. On Nov 4 it showed three skills, one event each, three total. These aggregate events do not establish three users or external adoption. [Discovery and audit record](discovery-status.md). No install-count badge or general security-pass claim was added.

Suggested description:

> Three agent skills for a clearer landing page: Story, Resonance, Offer. Same product facts, three pitches. Original open-source work by Jazz.

Suggested topics: `agent-skills`, `landing-page`, `copywriting`, `marketing`, `claude-code`, `codex`, `cursor`, `indie-hackers`. Avoid author/framework tags that make the project appear official.

## Actual publication record

Verified on 2026-11-03 after the respective actions succeeded. Keep the published code tag fixed; later main-branch documentation/media updates are separate from that tag.

| Item | Observed value / evidence |
| --- | --- |
| Public repository and visibility | [soohanjazzyun/landing-page-lab](https://github.com/soohanjazzyun/landing-page-lab), public, default branch `main` |
| Public source commit | Initial snapshot `4ea663f`; v0.2.0 code tag at [b20d49f](https://github.com/soohanjazzyun/landing-page-lab/tree/b20d49f7514c178c7d7d988b25147fd1a4ab53d2). At the 12:43 UTC check, `main` was [cb0dee5](https://github.com/soohanjazzyun/landing-page-lab/tree/cb0dee592e7ed86f3b1f0c026beeeebf207f49e4), including the trimmed media and initial baseline record. |
| Remote three-skill install | Skills CLI 1.7.6, clean project, Codex, `--copy`: all three skills and their references match source bytes. These are maintainer checks, not external adoption. |
| Live Pages URL / deployment | [Live comparison](https://soohanjazzyun.github.io/landing-page-lab/), HTTPS, `gh-pages` branch root; deployment `5d1dddd`. `verify-public.mjs` confirmed all 13 public files match built bytes, including four ZIPs. |
| Release tag / attached checksum | [v0.2.0](https://github.com/soohanjazzyun/landing-page-lab/releases/tag/v0.2.0): four ZIPs, `SHA256SUMS`, a 27-second MP4, and an original social-preview PNG. All four downloaded release ZIPs passed checksum verification. The 34-second launch film and its poster were added as separate release assets. |
| Social posts / directory submissions | The initial [X launch video](https://x.com/Jazz_from_Korea/status/2117593948839645450) and [credits/demo reply](https://x.com/Jazz_from_Korea/status/2117594486234915004) were published and verified in the UI. The [revised hook and 34-second motion film](https://x.com/Jazz_from_Korea/status/2117600499033928157) were published as a separate post after X failed to save the original edit. No directory submission is recorded. |
| External creator messages | Three tailored drafts prepared; not sent. No creator agreement or endorsement claimed. |

## The launch work after publication

### Recorded-case update: 2026-11-04

- Source update [4acb2dc](https://github.com/soohanjazzyun/landing-page-lab/commit/4acb2dcaa15ad79c54491dd00d064dcd15ef039c) adds the portrait-led Mina Studio case, two preserved actual agent tasks, and the 14-second proof film. The three skill instruction files and v0.2.0 code tag are unchanged.
- [Public recorded case](https://soohanjazzyun.github.io/landing-page-lab/cases/mina-studio/): Pages commit `dfaef9fd1321ca6a4ff4cedda39572893731748d`. All 21 public files match the built artifact byte-for-byte, including the portrait, four run records, and four ZIPs.
- Local checks passed: 17 browser scenarios, 4 helper tests, 1 package regression, 23 recorded-case fidelity assertions, JavaScript syntax/local links, and whitespace. The new case's four browser checks cover exact copy, history/keyboard, downloads, no external requests, image load, responsive layout, and automated WCAG A/AA checks.
- [Portrait-led X post](https://x.com/Jazz_from_Korea/status/2117767386929795138) published with “I gave my coding agent a marketing department.” The account timeline and permalink show the 14-second film, three credited inspirations, and Made with AI label. The UI displays 8:54 AM on Nov 4, Asia/Seoul; the activity log records a later verification timestamp.
- The MP4 and poster were added as separate release media assets. No original ZIP, tag, or earlier X post was replaced. [Case and film record](portrait-case.md).

The new case is an actual agent execution on a fictional service brief. A
separate task audits the maintainer's real current page. Neither provides a
customer result or conversion experiment; model identity remains unexposed.
The latest repository API snapshot before the portrait post still recorded
zero stars. No growth is attributed to this publication.

Use the [14-day calendar](../launch/calendar.md), [shortlist](../launch/prospects.md), and [Founder Clinic](../launch/homepage-clinic.md). Only log posts, messages, submissions, responses, and real founder cases after they happen. A public repository does not establish an X post, a creator partnership, a conversion improvement, or progress to 3,000 stars. Show HN is conditional on substantial runnable work, not the marketing demo alone.

## Scope and residual limits

No official PDFs, book chapters, worksheets, diagrams, logos, or source skill files are redistributed. The revision uses original execution guidance and records actual prior exposure; it is not clean-room work or permission from rights holders. Applicability/enforceability of source-site contractual restrictions remains unresolved, as documented in [rights review](rights-review.md). No author permission or legal clearance was obtained. No conversion, customer-adoption, or 3,000-star result is established by this release.

The earlier three-skill trial used local version 0.2.0 files; evaluator model identity was not exposed. The Nov 4 cases add versioned source/instruction hashes and preserved task/output records, while model identity remains unexposed. Local and remote install checks are maintainer verification, excluded from external adoption. The full-site verification was a single 17-scenario passing run on Nov 4. A subsequent first-use routing change passed the Mina group’s three functional checks and, after correcting two new paragraph colors, both viewport/accessibility checks. The earlier 13-scenario result included two corrected test-fixture reruns. No external founder case, creator response, directory submission, or scheduled calendar campaign is recorded as completed.
