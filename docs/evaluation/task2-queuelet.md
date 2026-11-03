# Queuelet copy audit and repair

Editorial review of the supplied fictional homepage text, using `tests/fixtures/audit-unsupported.md`, “Current homepage: Queuelet.” Webflow is retained. No code, visual redesign, or publication is included.

## Main finding

The supplied hero describes an automated reliability and incident-prevention product. Queuelet actually lists failed background jobs and lets developers mark them as reviewed. That mismatch begins with “Prevent every incident” and “retries your jobs automatically”; it changes what a visitor would expect after requesting access. The hero also substitutes unsupported popularity, certification, results, pricing, and a customer story for an explanation of the actual product.

## Prioritized repairs

These priorities are editorial judgments, not measured conversion effects. “Current” excerpts are quoted only to identify what to remove.

| Location / issue | Current → proposed | Reason | Evidence needed |
|---|---|---|---|
| Hero promise, blocks understanding | “Prevent every incident” → “Review failed background jobs in one list.” | Align the promise with reviewing failures. Incident prevention is an absent capability, not a copy defect that stronger wording can solve. | Current source supports the list and review action. A real prevention claim would require both an implemented capability and appropriate outcome evidence. |
| Hero mechanism, blocks understanding | “retries your jobs automatically” → “See failed background jobs and mark each one as reviewed.” | Manual review is the supported action. Automated retries and AI are not documented capabilities. | Demonstrate the current list and reviewed action; do not retain retry or AI claims. |
| Hero trust, undermines an informed decision | “Trusted by 50,000 teams” → remove; explain the workflow instead. | Twelve beta signups are neither active teams nor paying customers. | Actual usage evidence would be required for an adoption claim. Even a precise signup count should be dated and clearly described if used; it is unnecessary in this draft. |
| Hero trust, unsupported security status | “SOC 2-certified” → remove. | Data security has not been audited. | Verified scope and current audit documentation would be required for any appropriate security-attestation wording. No replacement security promise is supplied. |
| Hero results and story | “cut downtime by 80%” and “Acme saved $100K” → remove; show what the product does. | Neither measured outcomes nor endorsements exist. Fictional customer proof cannot establish trust. | Attributable, permissioned customer evidence and suitably scoped measurements before making such claims. |
| Offer / next action | “Start free forever” → “Request beta access.” | Pricing is undecided. The required action is a beta request, not a perpetual free offer or guaranteed immediate access. | Confirm the real beta-request destination and what follows submission. Pricing needs an actual offer decision. |

Only a text block was supplied. Its exact placement within Webflow, existing page sequence, visual assets, and CTA behavior were not inspected. The sequence below is a proposed repair, not a claim about unseen sections.

## Story decision

The reader is a developer who wants to review failed background jobs and distinguish reviewed items from those still needing review. That motivation is a working assumption based on the documented reviewed action, not customer research. Queuelet's role is a list with a manual review marker. A simple product demonstration can substantiate that narrow role; signups cannot substantiate reliability gains. The plan is to see failed jobs and mark them reviewed. The next step is to request beta access. The supported successful outcome is a marked review state; unreliability, downtime reduction, emotional relief, and incident avoidance are not established outcomes. The ordinary unresolved task is keeping track of review work, not a manufactured catastrophe.

## Revised page sequence

Use the current Webflow design and content areas where possible. Change copy and reading order only as needed for this repair.

| Order | Visitor question / purpose | Headline / content | Evidence or visual | Action / reason for position |
|---|---|---|---|---|
| 1. Hero | What does Queuelet actually do? | “Review failed background jobs in one list.” Explain the review marker. | If a product image is available, use an inspected real list. None was supplied. | “Request beta access” → real existing beta-request form. Correct the core misunderstanding first. |
| 2. Workflow | What can I do after access? | “See a failed job. Mark it reviewed.” Two supported actions. | Proposed real screenshot or demonstration of the review marker; do not fabricate data-source integrations. | No competing CTA. Explain the mechanism before further claims. |
| 3. Scope | Does this retry jobs or prevent incidents? | “Manual review, with a clear limit.” State the absent automation/integrations. | Text is sufficient. | No action required. Resolve the expectation created by the old copy before the final request. |
| 4. Beta request | What is the next step? | “Request access to the beta.” | Actual request destination must be verified. | “Request beta access,” same action and destination. No new offer, promise of timing, or access guarantee. |

## Revised page copy

### Hero

**Review failed background jobs in one list.**

Queuelet shows failed background jobs and lets you mark each one as reviewed.

**Request beta access**

### Workflow

**See a failed job. Mark it reviewed.**

View the list of failed background jobs. As you review each job, mark it as reviewed in Queuelet.

### Scope

**Manual review, with a clear limit.**

Queuelet does not retry jobs automatically, connect through integrations, or prevent incidents. Its current workflow is a failed-job list with a reviewed marker.

### Beta request

**Request access to the beta.**

Want to try Queuelet's review workflow? Request beta access.

**Request beta access**

## Evidence, implementation decisions, and limits

- Every product claim in the revised copy comes from the first paragraph of `audit-unsupported.md`: failed-job list, manual reviewed marker, and the lack of automated retries, integrations, or incident prevention.
- The same paragraph establishes 12 beta signups, no measured outcomes or endorsements, and no audited security. These facts explain the removals; they are not converted into visitor-facing proof.
- The final paragraph requires Webflow, the exact single primary action “Request beta access,” undecided pricing, and a review without code. Both repeated buttons represent this same action.
- Keep the existing beta-request destination only if it truly accepts requests. The URL and submission behavior are not supplied. Confirm those and the real post-submission message before publishing; do not simulate a successful request.
- Failed-job ingestion and availability conditions are unspecified. Confirm how jobs reach the list before adding setup instructions, compatibility claims, or onboarding promises.
- The draft uses descriptive copy because the basic product category needs correction. An outcome-led alternative would add little while evidence is this narrow.

Next validation: show the repaired hero to an unfamiliar developer and ask whether they expect retries, incident prevention, or immediate beta access. Review their answer alongside the actual request flow. No rendered Webflow page, accessibility, responsive layout, live link, product behavior, or conversion performance was tested here.
