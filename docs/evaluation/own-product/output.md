# Landing Page Story: English landing-page draft

Prepared 2026-11-03 from the root README.md, package.json, and the owner's current brief. This is a draft and standalone handoff for the owner's own product. No implementation or publication was performed. The final page copy appears once, inside the handoff.

## Story brief

- **Reader and desire:** Solo founders and developers building with coding agents who want a landing page that explains their product and gives visitors a clear next step.
- **Problem:** An agent can produce page code while the message still needs decisions about audience, promise, evidence, and action. Frustration with rewriting is plausible, but not established by customer research. The underlying principle is that a visitor should be able to understand what a product does before deciding whether to use it.
- **Guide and mechanism:** Landing Page Story is an English-first, open-source text skill by Jazz. It guides a compatible assistant through source review, customer story, page architecture, copy, and a build handoff. Its evidence ledger separates facts, assumptions, and unknowns.
- **Plan:** Obtain the local skill, give a compatible assistant the skill and README, then review the resulting draft and evidence gaps before requesting implementation. The project does not supply a model or generate copy through its task-preparation helper.
- **Action:** “Prepare a local task” goes to an on-page brief that can be copied. The visitor then attaches their README and supplies the local skill to their coding agent. Public installation is pending.
- **Success and honest stakes:** The user has a reviewable message, section order, and instructions for their builder. Without these decisions, the page may continue to leave the product or next step unclear. No conversion, revenue, speed, or guaranteed-quality claim is supported.
- **Working assumptions:** This audience values a concrete output preview and a usable task before a methodology explanation. A copyable brief is the most dependable page action until the exact local ZIP link is verified.

Compact explanation: Your coding agent can build the page, but it still needs decisions about the message. Landing Page Story uses your README to guide that work and produce page structure, English copy, evidence notes, and a handoff that preserves your stack.

Hero alternatives: The descriptive direction is “Turn your README into landing-page structure, copy, and a build handoff.” The outcome-led direction is “Give visitors a clearer reason to use your product.” Use the descriptive direction: it identifies the input and deliverables without implying measured visitor behavior.

## Page blueprint

| Order and reader question | Headline and content | Visual or evidence | Action and reason for position |
| --- | --- | --- | --- |
| 1. What is this, and is it for me? | “Turn your README into landing-page structure, copy, and a build handoff.” Name the skill, audience, and compatible-agent workflow. | Proposed text diagram: README → skill + your agent → structure, copy, handoff. This is explanatory artwork, not measured output. | “Prepare a local task” → `#prepare-task`. Establish the job and available action immediately. |
| 2. What will I get? | “Review the message before you build the page.” Show the five outputs and what each lets the founder inspect. | Five short text entries; no invented result screenshot. | None. Make the deliverables tangible before explaining the method. |
| 3. Why use this with my agent? | “Keep the promise tied to the product.” Explain source handling, flexible section order, and preservation of stack and CTA. | Mechanism described in README, “What makes it useful.” | None. Answer why this is more specific than a generic page request. |
| 4. How do I use it today? | “Bring the skill and your README to your agent.” Explain the local workflow and review step. | A real process supported by README, “Try it” and “Use a local README.” | “Prepare a local task” → `#prepare-task`. Set expectations before the reader copies the task. |
| 5. Does it fit my setup? | “A text skill for your existing setup.” Answer assistant compatibility, account/model boundary, and Node requirement. | README plus package.json `engines`. No compatibility badges implying certification. | None. Resolve practical objections next to the task. |
| 6. What happens when I click? | “Prepare your local task.” Provide a usable agent brief and explain the copy result. | Selectable task text and an actual local clipboard action. | “Copy task brief” → clipboard. The final action produces exactly the text shown. |

## Standalone build handoff

The following prompt is for a future, separately initiated local build. It contains the final copy and enough context to work without this conversation.

---

Implement this landing page locally for **Landing Page Story**. Do not publish or contact anyone.

**Goal and environment**

Serve solo founders and developers building with coding agents. Help them understand what this skill produces and prepare a task for their own assistant. Preserve plain HTML, CSS, and JavaScript. Use the existing page route and visual choices after inspecting the target project's applicable instructions and page. Do not add a framework, backend, account flow, analytics, or dependencies for this page. The current draft did not inspect site code or assets, so it does not prescribe selectors, filenames, fonts, or colors.

**Product facts and limits**

Landing Page Story is an English-first, open-source text skill by Jazz, documented for Claude Code, Codex, Cursor, and other Agent Skills-compatible assistants. It guides an assistant to create a source ledger, customer story, page architecture, English copy, and a build handoff. The assistant generates the output. The optional local helper prepares an agent task deterministically; it does not call a model. Node.js 22+ is required for those helper scripts, not for the text skill itself. The project does not require its own hosted service or account; the user's chosen assistant has its own requirements and terms.

The checkout is local and public repository creation is pending. Do not advertise a live remote installation, GitHub star action, issue submission, hosted app, or public repository. A ZIP is documented under `site/downloads/`, but its exact filename and accessibility were not inspected. This page therefore uses a local task as its primary action. Do not invent a ZIP URL or display a download button until its actual target has been verified.

**Final copy and page order**

Navigation brand: **Landing Page Story**

Navigation action: **Prepare a local task** → `#prepare-task`

### 1. Hero

Eyebrow: **For solo founders and developers building with coding agents**

# Turn your README into landing-page structure, copy, and a build handoff.

Landing Page Story is an English-first, open-source skill for your coding agent. Use your product README to decide what the page should say, what supports its claims, and what visitors should do next.

**Prepare a local task** → `#prepare-task`

Copy a brief for your agent. You’ll supply your README and the local skill; public installation is pending.

### 2. Deliverables

## Review the message before you build the page.

- **Source and evidence ledger.** See what your source supports, what is assumed, and what still needs proof.
- **Customer story.** Define who the page is for, the problem it addresses, and the change your product can support.
- **Page structure.** Give each section a job in the visitor’s decision, with a reason for its position.
- **English copy.** Get headlines, supporting copy, and calls to action to review and refine.
- **Build handoff.** Carry the copy and evidence into instructions for your chosen stack and existing design.

### 3. Method

## Keep the promise tied to the product.

A feature list is a starting point. It does not prove time saved, customer adoption, or business results.

Landing Page Story asks your agent to keep facts, assumptions, and missing evidence separate. It chooses sections around the reader’s questions and preserves your stack, voice, and primary action. Ask for a draft, an audit, or implementation explicitly.

### 4. Workflow

## Bring the skill and your README to your agent.

1. **Add the local skill.** Make the `skills/landing-page-story/` folder available to your Agent Skills-compatible assistant using its supported local setup.
2. **Give it your source and task.** Attach your README and use the brief below. Include your audience, stack, and actual next action.
3. **Review before building.** Check the proposed message, evidence gaps, and CTA destination. Request implementation when the draft is ready.

**Prepare a local task** → `#prepare-task`

### 5. Fit

## A text skill for your existing setup.

**Which assistants is it for?**

Claude Code, Codex, Cursor, and other Agent Skills-compatible assistants. Local skill setup depends on the assistant you use.

**Does this project run an AI service?**

No. Your assistant generates the draft. The optional helper only prepares a task; it does not call a model. This project requires no hosted service or account of its own.

**Do I need Node.js?**

Only for the optional helper scripts, which require Node.js 22 or later. The skill itself is text.

**Can I install it from a public repository now?**

Public installation is pending. Use the local skill checkout for now.

### 6. Task

## Prepare your local task.

Copy this brief into your coding agent, make the local skill available, and attach your product README. The copy button copies this text; it does not run an agent or send your README.

```text
Use landing-page-story on the product README I attach.

Audience: solo founders and developers building with coding agents.
Create an English landing-page structure, final copy, evidence notes,
and a standalone build handoff.

Keep plain HTML, CSS, and JavaScript and preserve existing visual choices.
Use only actions and destinations that are actually available.
Separate supported facts, assumptions, and missing proof.
Do not invent testimonials, results, prices, or live installation links.
Do not implement or publish in this task.
```

**Copy task brief** → clipboard

After copying: Attach your README and adjust the audience, stack, and next action to match your product.

**Visual plan**

Use typography, spacing, and a short input-to-output diagram to explain the product. The diagram is proposed work. No image or demo asset was inspected, so do not treat the README's screenshot as verified visual evidence. Do not add customer logos, testimonials, statistics, result badges, or fabricated screenshots. Keep source notes outside rendered page content.

**Behavior**

Use semantic links for `#prepare-task` and give that section the matching unique ID. Keep the full task text selectable without JavaScript. Implement the clipboard action with plain JavaScript: report “Task brief copied” only after a successful copy; on failure, display “Select and copy the task text above.” Do not display an agent result or submission success state. Do not collect or transmit source text.

**Acceptance checks**

- Confirm the actual hero states input, product category, output, and next action without scrolling.
- Compare rendered copy with the approved text and facts below. No public install, download, pricing, social proof, or performance claim may appear without verified support.
- Follow every CTA. In-page links must reach the task; copying must reproduce the exact displayed brief, including on a failed clipboard path.
- Check a representative desktop width and a narrow mobile width, keyboard navigation, visible focus, semantic headings, accessible status messages, and text/code overflow.
- Run only relevant local checks required by the target project's instructions. Report actual results and any limitations. Do not describe a local preview as a deployment.

**Claim-to-source map for the builder**

The sources are documentation, not independent behavior verification. README “What comes out” supports the five deliverables. README introduction and “Try it” support category, audience, compatible-assistant positioning, and local skill setup. README “What makes it useful” supports source discipline and preservation of stack, voice, and CTA. README “Use a local README,” with package.json `engines.node`, supports the optional helper boundary and Node.js 22+ requirement. README “Try it” and the owner's current brief establish that public installation is pending. The owner's brief specifies this audience, plain HTML/CSS/JS, and the local-only action boundary.

**Open decisions**

Before adding a ZIP CTA, verify the exact local archive filename and the route that serves it. Before any public launch, verify repository creation, installation behavior, and all public destinations. The current handoff needs neither to provide the copyable task.

---

## Separate source and limitations notes

| Kind | Supported statement or decision | Source locator and treatment |
| --- | --- | --- |
| Fact from documentation | English-first open-source text skill; compatible-agent positioning | Root README, introduction, “Try it,” and “Use a local README.” Compatibility was not independently tested in this pass. |
| Fact from documentation | Source ledger, story, architecture, English copy, handoff | Root README, “What comes out.” Describe outputs; do not guarantee their quality. |
| Fact from documentation | Optional helper prepares tasks, preserves source, and does not call a model | Root README, “Use a local README.” No source command was run. |
| Fact from documentation | Node.js 22+ applies to helper scripts | Root README, “Use a local README”; package.json `engines.node`. Do not attach it to the text skill. |
| Current owner constraint | Repository remains local; public creation and installation are pending | Current brief, reinforced by README “Try it.” Omit the displayed proposed `npx skills add` command from page copy. |
| Current owner constraint | Audience and stack | Current brief. Audience selection is positioning, not validated demand. |
| Working assumption | Output preview before method will help this reader assess fit | Editorial judgment. Not measured visitor research. |
| Unknown | Exact ZIP name, served path, existing routes and design, actual test status | Not inspected under the source restriction. No fake download URL or test claim. |

Omitted: customer outcomes, conversion lift, time savings, testimonials, price, security guarantees, remote installation, repository stars, clinic submissions, and a claim that any current test passed. The authored examples in the README are not customer proof and were not reused as such.

Next useful validation: give the hero and task action to a few unfamiliar solo founders or developers. Ask what the product is, what they expect to receive, and what happens after clicking. Record their words as comprehension feedback. This draft is an owner-product exercise, not a client case, customer result, or conversion experiment.
