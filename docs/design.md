# Landing Page Lab: design direction

Audience: English-speaking solo founders and developers building AI products with coding agents. They want exceptional landing pages, a useful comparison they can share, and a clear handoff into their existing build tools.

Tone: candid, precise, bold, and result-led. The product feels like a sharp editor sitting beside a builder. The results are tangible page directions and build briefs; no conversion lift is promised.

## Tokens

- Paper blue `#edf2fa`: the working-document canvas.
- Midnight `#17253e`: long-form text and primary actions.
- Persimmon `#ee593d`: editing mark; darker `#b82f1d` for small text.
- White paper `#fbfcff`: the example page and output document.
- Slate `#56647b`: secondary copy.
- Rule `#ccd6e5`: meaningful boundaries.
- Typeface: offline-capable Avenir Next, Avenir, Segoe UI, sans-serif. Georgia is used for the authored sample excerpt. No external font requests.

## The memorable move

One product brief drives three distinct perspectives: Story, Audience, and Offer. The preview keeps its visual language while the angle changes. Each choice also updates the reasoning, section order, full page copy, and self-contained build handoff. Before exposes the original source copy. All nine directions are authored fictional illustrations, not recorded model runs, customer findings, or conversion experiments.

The first screen leads with the comparison. Perspective names are deliberately simple; book credits stay in a secondary section. No author portraits, logos, badges, or claims of affiliation.

```text
brand                                  inspect / README / GitHub
same product                           choose a fictional product
three ways to matter                   unchanged design, chosen message
                                       Before / Story / Audience / Offer
three questions                        what each direction changes
complete output inspector              selected angle → matching full handoff
one source + direction selection       locally assembled, self-contained prompt
three skill downloads                  installation for existing tools
secondary credits                      independent adaptation disclosure
```

## Interaction and constraints

- Product tabs use arrow-key navigation and a single active tab stop. Inspector tabs adapt their keyboard orientation at the mobile breakpoint.
- Perspective buttons use `aria-pressed`; updates are announced in a live status region.
- Comparison URLs preserve product and direction, for example `#case-relaynote-offer`.
- The source composer assembles text locally. No upload, analytics, tracking, storage, or model calls.
- Prompts embed original working guidance for selected directions; installing a skill is optional for the assembled prompt. Source and audience-preference data have unique boundaries and cannot become agent instructions.
- Evidence gaps, unavailable endpoints, and publication approvals belong in builder notes, outside visitor-facing copy.
- The repository and CLI are proposed until publication. The preview notice is removed only after successful publication; ZIPs work locally.
- Responsive layouts preserve all controls. Focus indicators and reduced-motion preferences are supported.

The site avoids decorative gradients, fake metrics, testimonials, founder biographies before the demo, and book-cover merchandising. The coral editing stroke reinforces the central activity: changing the message while preserving the facts.
