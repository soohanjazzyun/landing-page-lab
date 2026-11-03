# Release checklist: Landing Page Lab by Jazz

Prepared: 2026-11-03. Intended version: 0.2.0. Canonical repository: `soohanjazzyun/landing-page-lab`. Canonical Pages destination: `https://soohanjazzyun.github.io/landing-page-lab/`.

Unchecked items are not claims that work happened or that approval is missing. Complete them using the current session's actual authorization and verification evidence. Do not repeat a permission request for an action already authorized. A separate social account, external message, submission, paid option, or new content use still needs an actual scope and account, not an instruction inferred from a reference document.

## Files and provenance

- [ ] Review the three original skills: [Story](../skills/landing-page-story/SKILL.md), [Resonance](../skills/landing-page-resonance/SKILL.md), [Offer](../skills/landing-page-offer/SKILL.md).
- [ ] Confirm the README, site, install commands, package metadata, ZIP, and notices all use Landing Page Lab and the canonical public repository.
- [ ] Review [NOTICE](../NOTICE.md) and [rights review](rights-review.md). Confirm actual current files do not bundle third-party PDFs, source prose, worksheets, diagrams, logos, course transcripts, or copied skill files. Original expression and credits do not themselves resolve any applicable source contract.
- [ ] Record the disposition of the actual source history and unresolved restrictions: StoryBrand Limitations (k)/(l), its content-use/IP terms, and Acquisition.com's terms/material-specific notices. Do not describe the review as permission or legal clearance. If a specific retained use needs a legal basis, establish it or replace that material; [a bounded clarification draft](../launch/rights-request.md) is available if useful.
- [ ] Keep fictional/authored labels. No unsupported metrics, clients, endorsements, guarantees, or conversion studies appear in the release.
- [ ] Ensure public files contain only this isolated project's content; do not include the personal knowledge base, secrets, local agent directories, or unrelated checkout files.

## Verify the actual release

- [ ] Run `npm run check`, `npm test`, `npm run test:browser`, and `npm run test:package` against the final changes; record results in [evaluation](evaluation.md).
- [ ] Run `npm run package`; inspect `dist/landing-page-lab.zip`, `dist/site/`, and `dist/SHA256SUMS` from the same source revision. Verify the ZIP contains all three skill folders, their references, license, and notices.
- [ ] Exercise create/audit/build selection and the three skill choices in the actual demo, including narrow mobile views, prompt copying/downloading, and local-only behavior.
- [ ] Preserve a real run record separately from authored examples. Record agent/model, skill version, input, prompt, raw output, manual changes, failures, and limitations.
- [ ] Check the 27-second cut or other actual release media; a shot list does not count as a recorded new video. Re-record media that advertises an outdated one-skill release, or label that older recording accurately.

## Publish and verify, within current authorization

- [ ] Create or confirm the public personal repository `soohanjazzyun/landing-page-lab`; push the reviewed release files to the intended branch. Record actual URL and commit below.
- [ ] From a clean temporary product project, test the **remote** install, not just a local-copy installation:

```sh
npx skills add soohanjazzyun/landing-page-lab --skill landing-page-story
npx skills add soohanjazzyun/landing-page-lab --skill landing-page-resonance
npx skills add soohanjazzyun/landing-page-lab --skill landing-page-offer
```

- [ ] Confirm all three skills are discoverable in the tested agent after installation. Do not generalize one agent's successful install to untested assistants.
- [ ] Publish the actual static artifact via GitHub Pages at the canonical destination, subject to the account's actual settings. Check the public root, downloads, images, and every advertised link after deployment.
- [ ] Update availability notes only when the respective remote resources work. Keep the composer described as local prompt preparation.
- [ ] Set the actual repository description, topics, and social preview only from reviewed project assets. Do not use a third-party creator's screenshot or logo as social proof.
- [ ] Create `v0.2.0` only when its source, remote installation, package, and checksum match. Attach that exact ZIP and checksum if a release is created.
- [ ] Capture the first real star/traffic baseline in [metrics](../launch/metrics.csv). Verify any skills.sh listing before adding its badge; no fabricated install badge.

Suggested description:

> Three agent skills for a clearer landing page: Story, Resonance, Offer. Same product facts, three pitches. Original open-source work by Jazz.

Suggested topics: `agent-skills`, `landing-page`, `copywriting`, `marketing`, `claude-code`, `codex`, `cursor`, `indie-hackers`. Avoid author/framework tags that make the project appear official.

## Actual publication record

Fill only after the action succeeds:

| Item | Observed value / evidence |
| --- | --- |
| Public repository and visibility | Not recorded in this checklist |
| Public source commit | Not recorded in this checklist |
| Remote three-skill install | Not recorded in this checklist |
| Live Pages URL / deployment | Not recorded in this checklist |
| Release tag / attached checksum | Not recorded in this checklist |
| Social posts / directory submissions | Drafts prepared; no completion recorded here |
| External creator messages | Drafts prepared; no completion recorded here |

## The launch work after publication

Use the [14-day calendar](../launch/calendar.md), [shortlist](../launch/prospects.md), and [Founder Clinic](../launch/homepage-clinic.md). Only log posts, messages, submissions, responses, and real founder cases after they happen. A public repository does not establish an X post, a creator partnership, a conversion improvement, or progress to 3,000 stars. Show HN is conditional on substantial runnable work, not the marketing demo alone.
