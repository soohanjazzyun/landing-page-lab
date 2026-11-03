// Original, compact working guidance. The composer includes this text in the prompt.
export const directions = {
  story: {
    label: 'Story', number: '01', skill: 'landing-page-story',
    question: 'Why should I care?', short: 'Make it clear.',
    description: 'Put the customer’s problem, desired result, and next step into a story they can follow.',
    guidance: `STORY DIRECTION: Make the customer the main character. Identify their immediate goal, the concrete problem in the way, and the consequence of leaving it unresolved without inventing stakes. Present the product as a useful guide, explain its actual mechanism in a short plan, and make the next action explicit. Write for comprehension before cleverness. Use only the story elements the page needs; do not force a fixed framework or invent authority. The visitor should be able to explain who this is for, what it changes, and what to do next.`
  },
  resonance: {
    label: 'Audience', number: '02', skill: 'landing-page-resonance',
    question: 'Is this for someone like me?', short: 'Make it resonate.',
    description: 'Choose a specific audience and the moment that makes the product matter to them.',
    guidance: `AUDIENCE DIRECTION: Choose the smallest credible audience supported by the source. Name the situation in which they need the product, their desired progress, and the language they already use. Make the opening feel recognizably specific without inventing customer quotes, demographic traits, emotions, or research findings. Separate source-backed facts from audience hypotheses. Explain who the product fits and any supported limitations. Prefer a few people recognizing their situation over a broad promise to everyone. Recommend a real audience conversation to test the angle; never imply that resonance has already been validated.`
  },
  offer: {
    label: 'Offer', number: '03', skill: 'landing-page-offer',
    question: 'Is it worth the effort?', short: 'Make it worth trying.',
    description: 'Make the value concrete, show what getting started takes, and replace doubt with visible evidence.',
    guidance: `OFFER DIRECTION: Clarify the desired result, the actual deliverable, and the mechanism that connects them. Explain the work required from the customer, the steps to first use, and the evidence available to make the result credible. Reduce perceived effort with clearer instructions and product demonstrations, not unsupported promises. Never create discounts, bonuses, guarantees, free trials, prices, delivery times, integrations, or features. If the source does not establish a commercial offer, improve the presentation of existing value and the next step without inventing one. Name evidence gaps and propose validation separately from visitor-facing copy.`
  }
};
