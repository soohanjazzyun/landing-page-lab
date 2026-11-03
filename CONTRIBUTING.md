# Contribute a better landing-page decision

Landing Page Lab contains three original skills: Story, Resonance, and Offer. A useful contribution shows where a skill made a wrong decision and gives enough evidence to reproduce it.

## Report a behavior problem

Use the [behavior issue form](.github/ISSUE_TEMPLATE/behavior.yml). Include the skill, smallest public-safe source brief, exact request, agent/model if known, raw output, wrong assumption, and expected behavior. Identify what the source actually supports. Remove secrets and personal/customer data before posting; issues are public.

A maintainer test, a fictional example, an AI score, and an external founder's completed task are different evidence. Label them accurately. Do not claim conversion lift from a copy preference or a screenshot.

## Propose a case

Use the [Founder Clinic form](.github/ISSUE_TEMPLATE/homepage-clinic.yml) for a public-safe product. Selection is based on useful learning and capacity, not stars or positive feedback. Submitting an issue does not authorize promotion, a testimonial, or unrelated screenshots. Jazz will obtain approval of the exact [case draft and media](launch/owner-consent.md) before broader publication.

## Change instructions, code, or examples

1. Make a focused branch and explain the concrete before/after behavior.
2. Run `npm run check` and `npm test`. For site behavior, run `npm run test:browser`; for packaging/installation changes, run `npm run test:package`. Use checks appropriate to the change.
3. For a change to marketing judgment, exercise a relevant fixture and report the source, output, consequential decisions, and remaining uncertainty. Software checks alone do not validate messaging quality.
4. Open a pull request. Keep original source facts intact. Mark new business terms, prices, guarantees, and audience choices as founder decisions until confirmed.

Examples and docs are English-first. Clear natural language and useful decisions matter more than filling a fixed template. Do not add unsupported testimonials, performance numbers, urgency, or customer logos.

## Respect source and product rights

The MIT license covers original project materials to the extent the project can license them. It does not license third-party books, posts, diagrams, worksheets, marks, or user-supplied product material. See [NOTICE](NOTICE.md) and the [source/rights record](docs/rights-review.md). Inspiration credit is not permission to copy.

Contribute your own instructions and examples. If any change uses third-party code or assets, identify exact files, source, license or permission, and required notices. Do not copy another repository's skills, paste official worksheets/course text, or imply author endorsement. A contributor must have the rights needed for material they submit.
