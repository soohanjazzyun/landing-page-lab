# Patchpost landing-page draft

This first draft addresses solo open-source maintainers. That is a reversible positioning choice: the documented paste, edit, and export workflow is a concrete individual task, while no team workflow is specified. Audience demand has not been validated.

## Story brief

The reader wants to turn a code change into a release note they can review and use. The working assumption is that translating a diff into an explanation is the sticking point; no particular frustration or time cost has been researched. Patchpost takes a pasted Git diff, lets the developer edit a release note, and exports Markdown. The credible result is an editable note ready to take elsewhere. The sample workflow should establish trust because there are no customers or measured results yet. The next action is **Try a sample diff**, opening the working sample in the app. Without using Patchpost, the maintainer still needs to prepare the note through their current process; stronger stakes are unsupported.

## Small-page blueprint

Use these as content roles within the existing layout. Preserve its logo, colors, and geometry; do not add or rearrange sections just to match this list.

| Content role | Reader question | Content and evidence | Action |
|---|---|---|---|
| Hero | What does this tool do? | Name the input, editable release note, and Markdown export. Use the current product visual if one exists. | Try a sample diff → existing app sample flow |
| Demonstration | What would I actually work with? | Show the existing sample diff and its editable note, using a genuine capture or the working app. No invented output presented as a real run. | Same sample action only if useful in the current layout |
| Workflow and scope | How do I use the result? | Explain paste, edit, export, and the boundary that publishing happens elsewhere. | Repeat the primary action in the existing closing slot, if present |

I recommend the descriptive hero, **“Turn a Git diff into an editable release note.”** It identifies the tool's job immediately. An outcome-led alternative is **“Get your release note ready to share.”** It would need the same explanatory subheadline to avoid implying publication.

## Self-contained build prompt

The final recommended copy appears once below. This response is a draft and handoff; no implementation or publication has been performed.

```text
Implement a small English landing page for Patchpost locally; do not publish.

Environment and scope:
The app already uses Astro and plain CSS. Preserve the existing logo, colors,
layout, assets, and component conventions. Fit the content below to existing
page slots. Do not redesign, migrate frameworks, add analytics, or implement
new product capabilities. Locate the existing landing route and sample-diff
action before editing; their file paths and URL are not supplied here.

Audience and goal:
Address a solo open-source maintainer preparing a release note. This is a
working positioning choice, not validated customer research. The primary
action is “Try a sample diff”. Its destination is the app's existing working
sample-diff flow. Reuse its actual route or handler; do not guess a URL or
use a placeholder link.

Product facts:
Patchpost is a fictional tool. It takes a pasted Git diff, lets a developer
edit a release note, and exports Markdown. It does not open pull requests
or publish. No customers or measured outcomes exist yet. Pricing and
supported Git providers are undecided. Do not imply provider connections,
automatic publishing, free access, customer results, or team features.

Final page copy, in reading order within the current layout:

Hero headline:
Turn a Git diff into an editable release note.

Hero body:
Paste your diff into Patchpost, edit the release note, and export it as
Markdown for your release workflow.

Primary CTA:
Try a sample diff

Adjacent CTA explanation:
Open the sample in the app to explore the workflow.

Demonstration headline:
Start with a sample change.

Demonstration body:
Open the sample diff and explore the editable release note before bringing
your own changes.

Workflow headline:
From diff to Markdown.

Workflow steps:
1. Paste a Git diff.
2. Edit the release note.
3. Export it as Markdown.

Scope line:
Patchpost prepares the note. Opening pull requests and publishing happen
outside the app.

Closing CTA, only if the existing layout has a suitable slot:
Try a sample diff

Visual/evidence plan:
Use the existing working sample as the demonstration. If a static capture
is needed, create it from that sample and label it as a sample. No screenshot
or asset path is supplied with this prompt. Preserve existing product assets.
Do not fabricate customer logos, testimonials, measurements, or UI behavior.

Source map for the builder, not page content:
create-sparse.md, “Product notes: Patchpost”, paragraph 1 supports the
paste/edit/export workflow, no-publishing boundary, and lack of results.
Paragraph 2 supplies Astro/plain CSS, preservation constraints, working
sample, English language, and CTA. Paragraph 3 records undecided pricing,
providers, and audience. All product facts are brief-supported, not tested.

Acceptance checks:
Confirm the rendered page preserves the existing visual shell at desktop
and mobile widths. Confirm the exact CTA opens the existing working sample,
and verify keyboard access, visible focus, semantic headings, and sensible
text wrapping. Run the project's relevant local build/check command after
discovering it. Keep editorial notes and source identifiers off the page.
Do not publish, contact anyone, or add unrelated work.

Open decisions:
Resolve the existing landing route and sample action from the project.
Pricing and provider claims remain omitted. Reconsider the audience if the
owner chooses product teams; do not invent team capabilities meanwhile.
```

## Evidence and next decision

The claim map is included in the handoff. No pricing, provider support, customer proof, or quantified benefit is claimed. The only new positioning assumption is the initial focus on solo maintainers. A useful next check is to show the hero to an unfamiliar maintainer and ask what Patchpost does and what the sample button will open. This checks comprehension, not conversion impact.

Copy and scope were reviewed against the supplied brief. The app, visual shell, actual links, and product behavior were not inspected or tested.
