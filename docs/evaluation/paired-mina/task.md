# Shared task: three homepage heroes

Use only source.md to write three distinct English homepage hero options for Mina Studio:
- story: lead with the work the service helps the founder accomplish and how.
- resonance: lead with the particular founder or product situation it fits.
- offer: lead with the concrete deliverable and commitment.

For each return one headline (at most 12 words), one supporting paragraph (at most 32 words), and the exact CTA "See a sample project" to "#sample-project". Keep all product facts and scope. Do not invent terms or results. Put the fictional-demo/AI-portrait disclosure in editorial notes outside hero copy; the implementation keeps a separate visible disclosure.
Recommend one option and explain its tradeoff briefly. Do not browse, implement, publish, contact anyone, or inspect existing example outputs.

Write output.json with this structure, without Markdown fences:
{"options":{"story":{"headline":"...","body":"...","cta":"See a sample project","href":"#sample-project","reason":"..."},"resonance":{...},"offer":{...}},"recommended":"story|resonance|offer","tradeoff":"...","limitations":["..."]}
Write a short run-notes.md listing the exact files read and actions. Preserve the first completed output without editorial revision. Do not modify the source or shared task.
