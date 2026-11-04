# One brief. Plain prompt vs. three skills.

Recorded: 2026-11-04. [Open the comparison](https://soohanjazzyun.github.io/landing-page-lab/compare/).

Two fresh agents received the same fictional Mina Studio [source](source.md)
and [task](task.md). One also read the three skill entry points and the Offer
reference listed in its run notes. Both returned their first completed output
without copy edits or reruns.

| Run | Preserved output | Files read and actions |
| --- | --- | --- |
| Plain prompt | [Three hero directions](plain/output.json) | [Run notes](plain/run-notes.md) |
| With three skills | [Three hero directions](skills/output.json) | [Run notes](skills/run-notes.md) |

The plain run already produces usable copy. The skill run makes different
choices: its Audience headline asks about an existing product and developer;
its Offer body explicitly says the developer implements. All six headlines
and bodies fit the requested word limits and preserve the exact CTA and target.
No material invented price, timeline, result, or guarantee was found in review.
The plain Audience option narrows small software teams to SaaS teams.

The shared task already describes the three lenses. This pair compares adding
the skill instructions to that guided task, not adding all direction to an
unguided prompt. Model identity was not exposed by the harness, so this is
not a same-model comparison. Two outputs from one fictional brief cannot
establish an average effect, winner, reader preference, or conversion lift.

The comparison's visual shell was built afterward and is identical for both
outputs. It reuses the separately generated fictional portrait. Audience
opens first as a display choice; both agents recommended Story. All three
lenses are available, and the JSON words render verbatim. The earlier
[single-run Mina case](../mina-demo/output.md) and its video remain separate.

The [manifest](manifest.json) records the input/output hashes, versioned
instructions, model-identity limit, and seven byte-identical public exports.
`npm run verify:cases` checks those saved bytes and the original Git blobs;
it does not assess persuasive quality. The UI checks cover all six outputs,
lens links/history/keyboard, evidence downloads, local prompt preparation,
clipboard actions, mobile layout, and automated accessibility.
