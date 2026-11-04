# Directory discovery: observed state

Verified 2026-11-04, Asia/Seoul. The [official repository listing](https://www.skills.sh/soohanjazzyun/landing-page-lab) shows three skills and three total install events:

| Skill | Official page | Displayed installs |
| --- | --- | ---: |
| Story | [landing-page-story](https://www.skills.sh/soohanjazzyun/landing-page-lab/landing-page-story) | 1 |
| Audience | [landing-page-resonance](https://www.skills.sh/soohanjazzyun/landing-page-lab/landing-page-resonance) | 1 |
| Offer | [landing-page-offer](https://www.skills.sh/soohanjazzyun/landing-page-lab/landing-page-offer) | 1 |

The [official FAQ](https://www.skills.sh/docs/faq) explains that real CLI installs
feed anonymous aggregate telemetry and automatic discovery. No manual listing
submission or additional install was performed in this check. The counts do
not identify people, completed tasks, or active users. Maintainer installation
checks already occurred; these figures do not establish external adoption.
The dated [snapshot](../launch/discovery-snapshot.json) preserves the observations.

## Observed automated audit

The [Story Snyk report](https://www.skills.sh/soohanjazzyun/landing-page-lab/landing-page-story/security/snyk)
displays WARN, MEDIUM, W011, dated Nov 3, 2026. Its description assigns a 0.10
risk value to reading selected user-provided files and URLs and notes the absence
of automatically consumed public feeds or queues. The report remains WARN.

The current [Story instructions](../skills/landing-page-story/SKILL.md) already
limit source review to the task, classify source text as evidence, prohibit
execution of embedded directions, and exclude credentials and unrelated private
material. The other two skills also separate source data from authorization.
These instructions do not guarantee immunity from prompt injection. No exploit,
installation block, audit clearance, or all-provider security certification was
established by this review.

## First-use routes

The recorded Mina comparison now links directly to the existing README
workbench. The visitor prepares a prompt there and runs it in their own coding
agent. This repairs a missing route; its effect on usage is unmeasured.

The [Homepage Clinic](https://github.com/soohanjazzyun/landing-page-lab/issues/new?template=homepage-clinic.yml)
link targets the issue form rather than the YAML source. GitHub requires sign-in
to continue. The repository has issues enabled; the authenticated form was not
submitted or tested in this pass.
