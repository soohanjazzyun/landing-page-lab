# Patchpost landing-page draft

Editorial draft for a fictional product. Source: `tests/fixtures/create-sparse.md`, “Product notes: Patchpost.” No implementation or publication performed.

## Story brief

- **Reader and aim:** Start with solo open-source maintainers preparing release notes. This is a working positioning assumption, chosen because the documented paste, edit, and export workflow can stand alone without team features. Larger product teams remain a possible audience; their review and collaboration needs require validation.
- **Problem:** A developer needs to turn code changes into a release note. Whether this is a frequent or frustrating task for the chosen audience is unvalidated.
- **Promise and mechanism:** Paste a Git diff, edit a release note, and export Markdown. Do not imply automatic drafting or AI behavior, which the source does not establish.
- **Guide and trust:** Let the working sample diff demonstrate the documented workflow. There are no customer results or endorsements to cite.
- **Plan:** Paste a diff → edit the note → export Markdown.
- **Action:** “Try a sample diff” opens the app's existing sample-diff experience. Its route was not supplied.
- **Success and stakes:** The reader gets an edited Markdown release note. Without this workflow, they still need another way to prepare that note; no time savings or business impact is established.
- **Compact explanation:** Patchpost takes a pasted Git diff and gives developers a release-note editing and Markdown-export workflow.

## Page blueprint

Retain the current logo, colors, layout, Astro, and plain CSS. These are content slots in the existing layout, not instructions to redesign it. If the shell cannot accommodate a slot, combine adjacent content rather than introduce a new visual system.

| Order | Reader question / purpose | Headline and content | Visual or evidence | Action and position |
|---|---|---|---|---|
| 1. Hero | What can I do here? | “From Git diff to Markdown release note.” Explain paste, edit, export. | Show the existing sample workflow only after inspecting its real UI; no supplied screenshot exists. | “Try a sample diff” → existing sample experience. First so the action and category are clear. |
| 2. Workflow | How do I make my own note? | “Paste. Edit. Export.” Three short steps below. | Product UI can demonstrate each documented action. Do not fabricate output as a customer example. | No additional CTA needed. Follows the sample invitation with the actual process. |
| 3. Scope and close | What does Patchpost handle, and what happens next? | “Prepare the note. Choose where to publish it.” State that it exports Markdown and does not open PRs or publish. | Text is sufficient. | Repeat “Try a sample diff” → same existing destination. Clarifies the product boundary before repeating the action. |

## Page copy

### Hero

**From Git diff to Markdown release note.**

Paste a Git diff, edit your release note in Patchpost, and export it as Markdown.

**Try a sample diff**

Start with the working sample in the app.

### Workflow

**Paste. Edit. Export.**

1. Paste a Git diff into Patchpost.
2. Edit your release note.
3. Export it as Markdown.

### Scope and close

**Prepare the note. Choose where to publish it.**

Patchpost exports Markdown. It does not open pull requests or publish your release note.

**Try a sample diff**

CTA destination for both instances: the existing app sample-diff experience. Exact route remains an implementation decision, outside visitor-facing copy.

## Build handoff

```text
Update the small English landing page for Patchpost in the existing Astro and plain-CSS project. Address a solo developer preparing a release note; solo open-source maintainers are a provisional audience choice, not validated demand.

Preserve the existing logo, colors, layout, styles, and components. Inspect the existing landing page and relevant repository instructions before editing. No redesign, framework migration, pricing system, analytics, external service, or deployment is requested.

Supported product behavior: Patchpost accepts a pasted Git diff, lets a developer edit a release note, and exports Markdown. It does not open PRs or publish. A working sample diff already exists in the app. Do not assert automatic drafting, AI generation, Git-provider integrations, customer adoption, measured savings, free access, or pricing.

Fit this content into the existing layout, in this reading order:

1. Hero
Headline: From Git diff to Markdown release note.
Body: Paste a Git diff, edit your release note in Patchpost, and export it as Markdown.
CTA: Try a sample diff
Microcopy: Start with the working sample in the app.

2. Workflow
Headline: Paste. Edit. Export.
Steps:
Paste a Git diff into Patchpost.
Edit your release note.
Export it as Markdown.

3. Scope and close
Headline: Prepare the note. Choose where to publish it.
Body: Patchpost exports Markdown. It does not open pull requests or publish your release note.
CTA: Try a sample diff

Route both CTA instances to the real existing sample-diff experience. The route was not supplied: locate and verify it in the existing app; do not invent a URL or leave a dead link. If the destination cannot be located, report that blocker before release.

If the existing visual area can show the sample workflow, use real inspected app content while keeping the layout. No screenshot was supplied. Do not add made-up testimonials or sample customer results. The source of product claims is tests/fixtures/create-sparse.md, Product notes: Patchpost; keep that locator and editorial notes out of the rendered copy.

Verify the CTA actually opens the sample, the text fits the preserved layout at desktop and mobile sizes, headings and buttons are keyboard accessible with visible focus, and the relevant existing Astro checks/build pass. Report any checks that cannot run. Do not publish.

Open decisions: exact existing route and available visual assets; pricing and supported Git providers remain undecided and must not be filled in. Primary audience should be checked with maintainers before treating this positioning as established.
```

## Evidence and decisions

| Kind | Claim / decision | Source locator and treatment |
|---|---|---|
| Fact | Pasted Git diff, editable release note, Markdown export | `create-sparse.md`, first paragraph. Used directly. |
| Fact | No PR creation or publication; no customers or measured results | Same paragraph. Preserve the product limit; omit social proof. |
| Fact | Astro/plain CSS and existing design must remain; working sample and exact CTA label | Second paragraph. Preserve stack/design and sample action. |
| Working assumption | Solo open-source maintainer as initial audience; release-note preparation as the motivating task | Audience options in third paragraph plus interpretation of the workflow. Validate before broader positioning decisions. |
| Unknown | Pricing, providers, eventual primary audience | Third paragraph. Omit pricing and provider claims. |
| Unknown | Sample route, deployment model, automatic drafting behavior | Not supplied. Do not infer them. |

Most useful next validation: show this hero and the actual sample flow to a solo maintainer. Ask what the product does, whether they expect automatic drafting, and what they expect the CTA to open. Record their explanation; this is a comprehension check, not evidence of conversion lift.

Validation completed here: source-to-copy review only. No repository implementation, rendered page, live route, responsive behavior, or product behavior was inspected.
