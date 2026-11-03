# Measure what actually happened

[metrics.csv](metrics.csv) starts with an observed public GitHub API baseline. [activity.csv](activity.csv) records only completed, verified actions. Unknown measures stay empty; maintainer installation checks are excluded from external adoption. No trial, outreach reply, or star gain is inferred from publication. [hypotheses.csv](hypotheses.csv) contains plans marked `unmeasured`, never actual results. The 3,000-star goal is a target, not a forecast.

## Four distinct layers

| Layer | Record | Do not infer |
| --- | --- | --- |
| Reach | A real post's platform impressions; GitHub unique visitors and referrals; demo visits only if an actual measurement system exists | An impression is a person, a visitor used the skill, or a post caused a star |
| Installed | Aggregate skills.sh/CLI install snapshot where available; a separately observed external successful install | Installs are unique people, active users, or successful landing-page work |
| Instrumentation | What source was collected, by whom, exact window, access/coverage, and gaps | That browser buttons or downloaded text send analytics; the prompt composer is not an AI run |
| Real use | A consenting external user's source, prompt, output, skill/version, outcome, and corrections; later repeat use reported with evidence | A fixture run, maintainer test, AI score, or compliment is an external customer result |

The skill has no built-in private usage telemetry established by this pack. A person may use the text privately without a CLI install or a report. Absence of a report is not evidence of no use. The composer does not by itself establish analytics collection. Verify any new measurement system before describing it as installed, and disclose its data handling before collecting user data.

## First snapshot

After the canonical public repository actually exists, record the UTC timestamp, exact repository, and the observed star count. Capture GitHub's traffic view if available to the owner. Leave inaccessible fields blank and write why in `measurement_gaps`. Do not use a planning target as the starting count.

For a read-only public star count:

```sh
gh api repos/soohanjazzyun/landing-page-lab --jq '{repository:.full_name,stars:.stargazers_count}'
```

Record actual outputs and capture time. A failure to access the repository is not a measured zero. Platform screenshots or exports can be kept outside the public repo if they contain private information; record a safe evidence pointer instead of publishing it.

## Field definitions

- `stars_start`, `stars_end`: observations for the same repo at the stated period boundaries. `net_stars` is their difference and may be negative. It is not gross new starring accounts or a channel-attributed conversion count.
- `github_unique_visitors_14d`, `github_full_clones_14d`: rolling 14-day snapshots, captured at a known time. Do not sum overlapping snapshots. See [GitHub's official traffic definition](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository).
- `skills_cli_installs_snapshot`: use the platform's displayed definition and period. Record the exact listing and whether it is per skill or repository. [skills.sh uses install telemetry](https://www.skills.sh/docs/faq), not run telemetry. Telemetry opt-out and manual copies limit coverage.
- `observed_external_install_successes`: distinct external people whose successful install was actually observed or supported by an explicit report; exclude Jazz's checks and count a person once per period.
- `completed_external_runs`: external people with a finished permitted task and an inspectable or explicitly reported outcome. Keep input/output private when required. Authored fixtures and maintainer evaluations are separate.
- `repeat_use_reports`: distinct external people reporting a later separate use with enough detail to identify a real second task. Do not infer repeat use from a second install.
- `owner_consented_cases_published`: actually public cases with a retained exact owner approval. Pending submissions do not count.
- `independent_case_shares`: actual unsolicited or voluntarily chosen shares by others with a case link. Exclude Jazz's posts, paid placement, and requested coordinated votes.
- `contributions_merged`: real accepted changes, not unreviewed submissions. `maintainer_hours` includes support and case production; use actual tracked time.

Blank means unmeasured/unavailable. Zero means measured and actually zero for the stated interval. Do not backfill a value from memory. Add a definition and a separate field before changing what a metric counts.

## Cadence and attribution

Take the first snapshot on Day 1, then at the same time on Days 7 and 14; weekly thereafter. GitHub's traffic window rolls over, so keep a dated export before it expires. Record each actual post or message in `activity.csv`, with its URL, asset ID, time, observation window, and permitted evidence.

UTM parameters can help distinguish site traffic only if a real analytics system reads them. They do not attribute GitHub stars and do not cause GitHub's traffic view to identify individual visitors. Product Hunt's primary URL should remain direct, without tracking parameters. Private outreach replies should be summarized safely, not copied publicly without consent.

No ratio in this packet is a verified conversion benchmark. Even a period's net-stars/unique-visitors ratio combines different populations and overlapping windows. A same-time rise after a post is correlation. Organic A/B comparisons can guide the next experiment but do not establish causality.
