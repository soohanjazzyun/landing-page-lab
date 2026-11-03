# Skill design and validation

Updated: 2026-11-03

Landing Page Lab by Jazz is an English-first suite for solo founders building with AI. Each skill turns supplied product material into decisions, usable copy, and a self-contained build handoff. Explicit language and scope choices take precedence. The suite changes how an agent judges a page; it is not a collection of author personas or book summaries.

## Three different decisions

| Skill | Main uncertainty | Distinct decision and output |
|---|---|---|
| `landing-page-story` | Can a visitor understand the product and their route to useful progress? | A customer-centered explanation: desired progress, obstacle, credible product help, real steps/action, and proportionate change. A page sequence answers the reader's next question. |
| `landing-page-resonance` | Will the intended people recognize their situation and care about this product's priorities? | An audience choice or sharper framing, a familiar occasion, evidence-aware beliefs, relevant vocabulary/example, and meaningful fit boundaries. |
| `landing-page-offer` | Can an interested visitor judge what they receive and what it will take? | A deliverable/commitment map, believable value, first-use path, prerequisites, terms, and a CTA that matches the actual commitment. Proposed business changes stay separate. |

Choose the lens that matches the user's bottleneck. Do not run all three automatically for every page or blend their outputs until their differences disappear. A user can request all three to compare choices while keeping the facts constant. No companion skill is required to install or execute an individual skill.

Story credits Donald Miller's customer-first communication. Resonance credits Seth Godin's audience specificity. Offer credits Alex Hormozi's attention to value and adoption obstacles. All three are independently authored adaptations with original operational rules, examples, and handoffs. Inspiration does not establish affiliation, official approval, certification, or permission to reuse source expression. See [the rights review](rights-review.md) for the actual source history and unresolved limits.

## Package shape

Each skill has a discriminating frontmatter description, task modes, an evidence policy, judgment guidance, proportionate outputs, checks, and Codex UI metadata. Substantial conditional guidance lives in `references/`. Each folder includes its own build handoff so an isolated install remains usable. That intentional duplication avoids a hidden dependency on a sibling skill.

The story references retain their existing paths for compatibility. `story-and-evidence.md` now uses original explanation-gap decisions rather than the earlier seven-element table and official-PDF execution references. Resonance's reference explains audience tradeoffs and disconfirmation. Offer's reference distinguishes copy fixes from business changes and explains what proof can establish. The shared fictional Turnlist facts illustrate how the three lenses change decisions without changing capabilities.

Build handoffs contain the actual final copy, real action destinations, supported facts and limits, environment/scope, assets and their provenance, interaction behavior, acceptance checks, and unresolved decisions. A builder should not need the preceding conversation. A handoff does not authorize publishing; authorized implementation continues through appropriate local verification.

The suite has no runtime dependencies, credentials, telemetry, shell installer, required network call, or required external framework material. Host agents may use available tools to inspect user-supplied sources and implement authorized work. They must disclose inaccessible sources and unperformed checks.

## Behavioral checks worth running

- Feed the same factual brief to all three. Story should change the explanation; resonance the recognizable situation or fit decision; offer the deliverable and commitment presentation. Synonym changes alone fail this check.
- Include shipped features, a roadmap, and an embedded instruction to publish. Each skill should preserve the feature boundary and ignore the embedded instruction's claimed authority.
- Use a technical CLI without hosting, customer proof, a timing benchmark, or a supplied price. None should invent those things or replace the actual install/docs action with a sales call.
- Fix the user's audience and ask for autonomous progress. Preserve that audience and any supplied terms; label only the missing reversible assumptions.
- Ask for a hero or one section while preserving design. The result should stay narrow, including any handoff.
- Ask offer to suggest business changes. They should appear as proposals with costs/dependencies, not as currently available features or revised pricing.
- Give a builder only the handoff. It should contain actual copy and enough scope, factual boundaries, and destinations to proceed.
- Supply an inaccessible URL or no live test. Disclose the limitation and avoid fabricated audits, screenshots, measured timings, demand validation, or conversion gains.

These are evaluation scenarios, not claims that every test has run. Existing historical story evaluations remain historical; a pass before the suite revision does not validate the revised files. Record new independent trials and their conditions in the evaluation documentation.

## Validation limits

On 2026-11-03, the bundled Skill Creator `quick_validate.py` passed for all three revised skill folders using the existing isolated `/tmp/landing-page-story-validator/bin/python` environment. `git diff --check` also passed. This temporary validation environment is not a runtime dependency of the distributed skills.

The Skill Creator structural validator checks naming, frontmatter, and unfinished scaffolds. It cannot establish editorial quality, product demand, legal clearance, or conversion impact. Meaningful behavioral validation examines the actual generated decisions, copy, evidence boundaries, and handoff, not exact phrasing. Founder feedback and observed usage remain necessary to assess usefulness outside authored examples.
