# Landing Page Lab

**Give your coding agent a pitch worth building.**

Turn your product README into three distinct landing-page pitches. Choose a
direction, then ask your agent for the copy and build handoff. Three free,
open-source skills for founders building with AI: **Story, Audience, and Offer**.

Start with one hero. Compare the directions. Build the one that fits.

```sh
npx skills add soohanjazzyun/landing-page-lab
```

Choose your agent and all three skills when prompted. Run them in your own
coding agent; its normal access and usage requirements apply.

[![One brief: actual plain-prompt and three-skill outputs, with the same portrait and design](assets/plain-vs-skills.png)](https://soohanjazzyun.github.io/landing-page-lab/compare/)

[**See both actual outputs →**](https://soohanjazzyun.github.io/landing-page-lab/compare/) ·
[Watch **English Writing 101**](assets/english-writing-101-clawd.mp4) ·
[Film credits](docs/english-writing-101.md)

Same brief and task. Two fresh runs. Every first output is public and unedited.
Switch Story, Audience, and Offer to see what each run chose to emphasize.
The service is fictional and the portrait is AI-generated.
[Read the brief, task, and raw outputs](docs/evaluation/paired-mina/README.md).

## Give your agent one small task

Paste this with your README:

```text
Use landing-page-story, landing-page-resonance, and landing-page-offer
to propose three hero directions from my README.
For each, return one headline, one sentence, and my existing CTA.
Keep the product facts. Mark missing evidence. Explain one tradeoff.
Source: [paste my README]
```

You get three ways into the same product:

| Lens | The reader's question | What changes |
| --- | --- | --- |
| [**Story**](skills/landing-page-story/SKILL.md) | What can I do with this? | Lead with the customer's task and show how the product helps. |
| [**Audience**](skills/landing-page-resonance/SKILL.md) | Is this for someone in my situation? | Lead with a specific reader's situation and the details that matter to them. |
| [**Offer**](skills/landing-page-offer/SKILL.md) | What do I get, and what do I have to do? | Show what is included, what is required, and what happens after the click. |

Keep the direction that fits your product and your reader. Ask your agent to
expand it into page copy or carry it into your existing build. The skills
preserve your product facts, stack, design constraints, and CTA. A hero request
stays a hero; missing proof stays missing.

[Prefer a form? Prepare the task in your browser →](https://soohanjazzyun.github.io/landing-page-lab/#workbench)
The workbench only assembles a prompt locally. Your coding agent does the writing.

**If this helps you find your pitch, [star the repository](https://github.com/soohanjazzyun/landing-page-lab)**
to follow the next cases and improvements.

## Why these three lenses?

A page can explain a feature without helping a reader judge whether it fits
their situation or is worth trying. Each skill works through a different
part of that decision, using the evidence in your source.

Story draws on **Donald Miller's _Building a StoryBrand_**. Audience draws on
**Seth Godin's _This Is Marketing_**. Offer draws on **Alex Hormozi's _$100M Offers_**.

[Jazz](https://github.com/soohanjazzyun) wrote the workflows, examples, evidence
checks, and build handoffs. This is an independent project, with no affiliation
or endorsement. [Credits](NOTICE.md) · [Source and rights review](docs/rights-review.md).

## See it before you install

- [Plain prompt vs. three skills](https://soohanjazzyun.github.io/landing-page-lab/compare/): both real first outputs, every lens, and the records behind them.
- [One product, three pitches](https://soohanjazzyun.github.io/landing-page-lab/): nine authored directions for three fictional software products.
- [Earlier Mina Studio run](https://soohanjazzyun.github.io/landing-page-lab/cases/mina-studio/): the actual output behind the [14-second clip](assets/mina-studio-proof.mp4).

The examples show the choices the skills can help make. They are not customer
results or evidence of higher conversion. [Actual trials and limits](docs/evaluation.md).

## Install one skill, or take the files

Each skill works on its own. For Story only:

```sh
npx skills add soohanjazzyun/landing-page-lab --skill landing-page-story
```

Then keep the request narrow:

```text
Use landing-page-story to rewrite only my homepage hero.
Keep the product facts, design, and existing CTA. Source: [attach copy]
```

The skills use the plain-text Agent Skills format. A clean public installation
of all three into Codex has been verified. Other compatible assistants have
not been separately behavior-tested. This project provides no hosted model
or API service; use the agent you already work with.

Individual ZIPs and the full three-skill bundle are in [downloads](site/downloads/).
Browse on skills.sh: [Story](https://www.skills.sh/soohanjazzyun/landing-page-lab/landing-page-story) · [Audience](https://www.skills.sh/soohanjazzyun/landing-page-lab/landing-page-resonance) · [Offer](https://www.skills.sh/soohanjazzyun/landing-page-lab/landing-page-offer).

<details>
<summary>Install from a local checkout</summary>

Run this from your product's project folder:

```sh
npx skills add /path/to/landing-page-lab --agent codex --copy
```

</details>

## Prepare a portable task locally

Node.js 22+ is needed only for the optional helper scripts. The skills themselves
have no runtime dependency.

```sh
node scripts/brief.mjs \
  --source examples/shipwatch/README.md \
  --lens all \
  --stack "HTML and CSS" \
  --output .local/shipwatch-task.md
```

Use `--lens story`, `--lens resonance`, or `--lens offer` for one perspective;
use `--mode audit` for an existing page. The generated task includes the selected
instructions, supporting guidance, and your unchanged source. It calls no model
and refuses to overwrite an existing output file.

## Run the demo and checks

```sh
npm install
npm run dev
# Open http://127.0.0.1:4173
```

For development verification:

```sh
npx playwright install chromium
npm run check
npm run verify:cases
npm test
npm run test:browser
npm run test:package
npm run package
```

Packaging produces three individual skill ZIPs, the complete `landing-page-lab.zip`,
a static site in `dist/site`, and SHA-256 checksums. It uses the system `zip`
command, available on macOS, Linux, and WSL. Browser checks cover interaction,
local task preparation, downloads, mobile overflow, and automated accessibility.
These checks do not establish improved conversion rates.

## One Product, Three Pitches

Have a public product whose homepage is hard to explain? Submit it through the
[Homepage Clinic](https://github.com/soohanjazzyun/landing-page-lab/issues/new?template=homepage-clinic.yml). Share only material
you have permission to make public. A submission does not guarantee a review;
publication of a case study requires separate consent.

Useful failure reports include the source brief, selected skill, resulting copy,
and the decision that went wrong. See [contributing](CONTRIBUTING.md).

If this helps you explain your product, **star the repository** to follow the
next cases and improvements.

## License

Original project code and instructions: [MIT](LICENSE).
Third-party books, websites, graphics, and brands are not relicensed.
See [NOTICE](NOTICE.md) and [the rights review](docs/rights-review.md).
