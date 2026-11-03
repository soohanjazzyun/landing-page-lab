# Story and evidence

Use this reference to translate product facts into a customer story, or when claims and missing evidence need careful treatment.

## Find the missing connection

Treat the page as an explanation of a real task. These are original editing decisions, not fields from an official worksheet:

| Observed gap | Editing decision | Check |
|---|---|---|
| The hero could describe any software | Name the concrete product category and a recognizable input or output | Can a reader distinguish it from a service or template? |
| Features appear without a reason to care | Connect one feature to the task it changes | Does the claimed result follow from that behavior? |
| The promised outcome is distant from actual functionality | Lead with the first observable result | Does the copy require an unproved leap to revenue or confidence? |
| The next step is opaque | Explain what the action opens and what the reader needs | Do button, destination, and requirements agree? |
| The page starts with a long company story | Keep only founder details that answer a trust question | Would removing a detail change a visitor's decision? |

A log viewer can make an error easier to investigate; it does not automatically make a team successful. Keep the reader's work central without turning every product into a dramatic transformation.

## Extract facts before interpreting them

A useful source locator is a README heading, a file and line, a dated product-owner statement, or a directly inspected page URL and section. Keep the ledger small enough to review.

| Claim candidate | Source | Status | Treatment |
|---|---|---|---|
| Can import a CSV | README, “Import” | Fact | Describe the CSV workflow |
| Saves three hours each week | No source | Unknown | Omit the number; describe the supported task instead |
| Connects to Slack | Roadmap, next quarter | Planned | Do not list as available |
| Buyer is a freelance designer | Owner's current brief | Fact about intended audience | Write for that segment; this does not validate demand |
| Makes client handoffs less stressful | Interpretation of a documented review flow | Working assumption | Use measured wording; propose a customer check |

Facts from supplied documents are supported by those documents, not independently verified just because they are recorded in a ledger. If a public claim depends on deployment behavior, a benchmark, or a third party's approval, identify the additional verification needed.

When sources conflict, show the conflict and date rather than choosing the more attractive claim. Prefer the current product owner's instruction for intended positioning; it cannot make unsupported capabilities true. For product behavior, a recent tested implementation or current documentation can resolve an outdated marketing line. Ask if that distinction remains unclear.

## Proof that fits the claim

- **Functionality:** A reproducible product demonstration, supported example, or documented behavior. An editor-authored example illustrates usage; it is not a customer outcome.
- **Measured performance:** The actual measurement with configuration, baseline, conditions, date, and scope. Keep these qualifications close to the claim.
- **Customer results:** A real result with its circumstances. Do not imply the typical user will get it or attribute causation without grounds.
- **Testimonial:** A supplied attributable quote with context and permission for the intended public use. Do not synthesize a person or quotation. Do not turn private feedback into a public endorsement without authorization.
- **Trust:** Maintainer identity, readable source, supported release history, documented limitations, or inspectable method can be useful when there are no customers yet.
- **Policies:** Pricing, refund, availability, privacy, security, and compliance wording must follow current product terms. Open source does not itself mean private, secure, audited, or compliant.

When there is no social proof, explain the mechanism and let a small demonstration carry trust. A transparent limitation is more useful than a counterfeit testimonial strip.

## English that sounds like the actual product

Name recognizable actions and objects. Replace “streamline your workflow” with the specific thing the user can now do. Keep specialized language that the intended reader needs, and explain an unfamiliar category before making a sweeping benefit claim.

Compare:

- **Source fact:** “The CLI compares migration files against a local PostgreSQL schema and prints incompatible changes. It never applies a migration.”
- **Overreach:** “Ship every database change safely, with zero downtime.” This implies guarantees and deployment behavior absent from the source.
- **Supported direction:** “See incompatible PostgreSQL changes before you apply a migration.” The body can explain the local comparison and the no-apply limitation.

The improvement is the connection between feature and reader task. It does not require emotional drama, an enemy, or a numerical promise.

## What can be tested next

Show the hero to an unfamiliar target reader, then ask what the product does, why they might use it, and what they would click next. Record their words. If comparing versions, vary order and keep facts and visual conditions comparable. Report the small sample honestly. This is comprehension feedback, not proof of increased conversion. Choose a live conversion test only when traffic, instrumentation, and a meaningful outcome make one useful.

These instructions and examples were authored for Landing Page Lab by Jazz. Donald Miller's work is credited as inspiration in `SKILL.md`; execution does not require access to it.
