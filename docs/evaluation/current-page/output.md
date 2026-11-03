# Hero audit

The current headline, “Same product. Three ways to make it matter,” gives a visitor a theme before explaining the product. The paragraph mentions an agent and three perspectives, but leaves the input and deliverable implicit. “Find my angle” could also suggest that the website generates copy; the supplied README says its local composer prepares a task for the visitor's agent.

- **Current → proposed:** An abstract promise → one product brief becoming three landing-page directions. **Reason:** Name the work a founder can recognize. **Evidence needed:** No additional capability claim; comprehension still needs checking with unfamiliar readers.
- **Current → proposed:** “Help it find the angle” → name the skills, README input, copy, and handoff, with a short execution note. **Reason:** Make the product and next step concrete. **Evidence needed:** The documentation supports this workflow; the live destination was not inspected.

## Fact ledger

All locators below refer to the supplied `source.md` snapshot, not independently verified behavior.

| Kind | Claim or decision | Locator |
| --- | --- | --- |
| Fact | The product consists of three open-source agent skills: story, audience, and offer. | Current root README, opening and “Pick the problem” |
| Fact | A product README can be supplied to a coding agent to request three directions from the same facts. | Current root README, “Install,” example task |
| Fact | Documented deliverables include a factual basis, direction and tradeoff, page copy, and a build handoff. | Current root README, “What you get” |
| Fact | The website's local composer prepares a task; it does not itself analyze the product or generate marketing copy. | Current root README, “See the difference,” final paragraph |
| Fact | Primary action is “Find my angle” to `#workbench`; secondary is “Get the three skills” to `#install`. | “Exact current hero markup (copy only),” `.hero-actions` |
| Working assumption | Founders using coding agents will understand the product sooner if the hero names its input and output. | Editorial hypothesis based on the supplied audience and current hero; no reader research supplied |
| Unknown | Conversion impact, customer adoption, and reliable behavior across other assistants. | No outcome evidence supplied; “Install” limits behavioral verification to Codex |

## Recommended hero copy

**Headline**

Turn one product brief into three landing-page directions.

**Supporting paragraph**

Three open-source skills guide your coding agent from a product README to page copy and a build handoff. Explore the story, audience, and offer using the same source facts.

**Primary CTA:** Find my angle → `#workbench`

**Secondary CTA:** Get the three skills → `#install`

**Microcopy near the actions:** Prepare a task here, then run it in your coding agent.

No new eyebrow is needed. Retain the current release note and audience line.

## Handoff and limits

For a future local edit, replace only the headline and supporting paragraph, and add the microcopy near the existing actions. Preserve the plain HTML/CSS/JavaScript design, hero structure, both CTA labels and anchors, and existing comparison footnote. Let the existing responsive styling determine line breaks; check the rendered headline before choosing manual breaks.

The recommendation trades some of the current headline's personality for a specific input and output. It also places the detailed distinction among the three directions in the comparison below. These are editorial choices, not demonstrated performance improvements.

This pass inspected supplied text only. It made no implementation, publication, live-link, visual, responsive, accessibility, compatibility, or conversion checks. The examples are authored illustrations; no customer results are claimed. The most useful next validation is to show this hero to an unfamiliar solo founder or developer and ask what the product is, what they supply, what they receive, and what happens after clicking “Find my angle.”
