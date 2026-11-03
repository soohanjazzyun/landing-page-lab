// Authored fictional examples. These are not recordings of agent output or experiments.
export const cases = [
  {
    id: 'relaynote', name: 'RelayNote', category: 'Customer research', icon: 'R',
    source: "# RelayNote\n\nThis is a fictional product brief for testing Landing Page Story.\n\n## Product facts\n\n- Audience: a solo SaaS founder who has interviewed potential customers and\n  needs to revisit what they actually said before choosing the next feature.\n- Import interview notes as `.txt` or `.md` files.\n- Group saved excerpts by topic.\n- Every saved excerpt links back to its original note.\n- Export grouped notes as Markdown.\n- A sample workspace is the intended next step; use the CTA label\n  `Explore a sample workspace` in page drafts.\n\n## Current copy to improve\n\nRelayNote is a next-generation customer intelligence workspace. Leverage a\nunified platform to unlock actionable insights and streamline your discovery\nworkflow. Our powerful capabilities empower ambitious builders to innovate.\n\n## Boundaries and unknowns\n\n- No audio upload, audio transcription, AI-generated insights, or integrations.\n- No customer counts, testimonials, measured time savings, or retention data.\n- Pricing, hosting details, and data-security claims are not specified.\n- There is no real RelayNote service at an external URL. The sample-workspace\n  CTA is a proposed action in an illustrative page, not a live service link.\n\n## Request\n\nWrite an English landing-page plan and copy from these facts. Keep the\ntone practical and calm. Show the product itself, including an excerpt and\nits source, in the hero visual. End with a self-contained HTML/CSS build\nprompt, but do not build or publish the page unless asked.\n",
    before: {headline: 'RelayNote is a next-generation customer intelligence workspace.', description: 'Leverage a unified platform to unlock actionable insights and streamline your discovery workflow. Our powerful capabilities empower ambitious builders to innovate.', cta: 'Explore the platform', cards: ['Text note imports', 'Topic groups', 'Markdown exports']},
    after: {headline: 'Keep the customer’s words behind your next product decision.', description: 'Group excerpts from your interview notes by topic. Follow each one back to its source when deciding what to build next.', cta: 'Explore a sample workspace', cards: ['Import .txt or .md notes', 'Group excerpts by topic', 'Follow each excerpt to its source']},
    problem: 'You have the interview notes. Finding what a customer actually said means searching through them again.',
    customer: 'A solo SaaS founder choosing what to build after customer interviews.',
    desire: 'Revisit what customers said before choosing the next feature.',
    empathy: 'Good interviews should stay useful after the call ends.',
    proof: 'Show one excerpt linked to its original note. No outcome statistics, testimonials, or security claims are available.',
    changes: ['A product category becomes a customer outcome.', 'A feature list becomes the path to that outcome.', 'The button names a specific proposed action.'],
    structure: [
      ['Hero', 'Name the founder’s next product decision, then show a note excerpt linked to its source.'],
      ['The problem', 'Show how useful quotes get lost between calls and planning.'],
      ['Product evidence', 'Demonstrate how excerpts are grouped by topic and traced to the original note.'],
      ['How it works', 'Import .txt or .md notes. Group excerpts. Revisit the source.'],
      ['Next step', 'Offer “Explore a sample workspace” as the proposed page action.']
    ],
    facts: ['Import interview notes as .txt or .md files.', 'Group saved excerpts by topic.', 'Every saved excerpt links to its original note.', 'Export grouped notes as Markdown.'],
    limits: ['No audio upload or transcription.', 'No AI-generated insights or integrations.', 'No customer counts, testimonials, time-savings measurements, or retention data.', 'Pricing, hosting, and data-security details are unspecified.', 'The sample-workspace destination is not supplied; no real external RelayNote service is provided.'],
    buildStack: 'A self-contained HTML/CSS page; use JavaScript only for necessary accessible interactions.',
    pageCopy: [
      {label:'The problem', heading:'The interview is over. The next decision still needs the notes.', body:'When you are deciding what to build next, you need the words behind the idea. Bring the relevant excerpts together, then revisit the original note when you need the context.'},
      {label:'Product evidence', heading:'See the excerpt. Check the source.', body:'Group saved excerpts by topic without losing the note they came from. Each saved excerpt links back to its original note, so you can read the context before deciding what it means.', bullets:['Import .txt and .md interview notes.', 'Group the excerpts you save by topic.', 'Export grouped notes as Markdown.']},
      {label:'How it works', heading:'Bring the notes back into the decision.', bullets:['Import your interview notes as .txt or .md files.', 'Save and group excerpts by topic.', 'Follow an excerpt back to its source, or export the grouped notes.']},
      {label:'Next step', heading:'Take a look before choosing your next feature.', body:'Explore how excerpts, topics, and original notes fit together in a sample workspace.', cta:'Explore a sample workspace'}
    ],
    gaps: ['No verified testimonials', 'No measured time savings', 'Pricing was not supplied']
  },
  {
    id: 'shipwatch', name: 'ShipWatch', category: 'Developer tooling', icon: 'S',
    source: "# ShipWatch\n\nThis is a fictional product brief for testing Landing Page Story.\n\n## Product facts\n\n- Audience: a solo developer responsible for scheduled background jobs.\n- A job sends a heartbeat after it runs.\n- ShipWatch flags a heartbeat that arrives later than the configured window.\n- The developer receives an email alert.\n- A run-history view shows recorded heartbeats.\n- The intended next action is `Set up a test heartbeat`.\n\n## Current copy to improve\n\nAn advanced observability platform with intelligent workflow monitoring,\npowerful analytics, and seamless operational excellence. Unlock the future\nof reliable engineering with ShipWatch's comprehensive capabilities.\n\n## Boundaries and unknowns\n\n- No automatic retry, remediation, SMS, Slack, or tracing functionality.\n- No measured uptime, delivery-time guarantee, certifications, or customer logos.\n- Pricing, free tiers, and hosting/data-retention policy are unknown.\n- No real ShipWatch endpoint is provided; its CTA is a proposed page action.\n\n## Request\n\nMake the product understandable to a developer who maintains cron jobs.\nKeep the explanation technically accurate. Show what setup requires without\ninventing an API URL or installation command. Produce a page structure,\nEnglish copy, proof gaps, and a build prompt for the user's existing stack.\n",
    before: {headline: 'An advanced observability platform with intelligent workflow monitoring.', description: 'Powerful analytics, and seamless operational excellence. Unlock the future of reliable engineering with ShipWatch’s comprehensive capabilities.', cta: 'Learn more', cards: ['Job heartbeats', 'Configured windows', 'Email alerts']},
    after: {headline: 'Know when your scheduled job goes quiet.', description: 'Send a heartbeat after each run. ShipWatch flags late heartbeats and emails you, so a silent failure has a signal.', cta: 'Set up a test heartbeat', cards: ['Choose the expected window', 'Send a heartbeat after each run', 'Get an email when it is late']},
    problem: 'A scheduled job can stop without telling you. You need a signal when the expected run does not arrive.',
    customer: 'An indie developer running scheduled background jobs.',
    desire: 'Notice a missed job without checking it manually.',
    empathy: 'A job that fails silently should not stay invisible.',
    proof: 'Show a test ping and the resulting late-ping email. Do not imply guaranteed delivery or automatic repair.',
    changes: ['“Observability” becomes a recognizable problem.', 'The mechanism stays specific: a late heartbeat ping.', 'Setup is clear without promising perfect uptime.'],
    structure: [
      ['Hero', 'Lead with a missed job, then explain the heartbeat and email mechanism.'],
      ['The problem', 'Describe the consequence of a quiet job without inventing a loss estimate.'],
      ['Product evidence', 'Show the monitor, received ping history, and a test notification.'],
      ['How it works', 'Set a schedule. Send pings. Receive a late-ping email.'],
      ['Boundaries + action', 'Explain that monitoring does not repair jobs. Invite a test heartbeat.']
    ],
    facts: ['A scheduled job sends a heartbeat after it runs.', 'ShipWatch flags a heartbeat later than the configured window.', 'The developer receives an email alert.', 'A run-history view shows recorded heartbeats.'],
    limits: ['No automatic retries, remediation, SMS, Slack, or tracing.', 'No measured uptime, alert-delivery guarantee, certifications, or customer logos.', 'Pricing, free tiers, hosting, and data-retention policy are unknown.', 'No real heartbeat endpoint or installation command is supplied.', 'The test-heartbeat CTA destination needs confirmation.'],
    buildStack: 'Use the user’s existing project stack and visual language; if none is available, provide a portable HTML/CSS implementation.',
    pageCopy: [
      {label:'The problem', heading:'A job can stop without telling you.', body:'A scheduled task that does not run may not produce an error you can see. A missing heartbeat gives you a reason to check the job instead of assuming it ran.'},
      {label:'Product evidence', heading:'Know which heartbeat did not arrive on time.', body:'See recorded heartbeats in the run-history view. When a heartbeat is later than your configured window, ShipWatch flags it and sends an email alert.', bullets:['A heartbeat from the job after a run.', 'A window that defines when the heartbeat is late.', 'An email alert and a history of recorded heartbeats.']},
      {label:'How it works', heading:'Give each run a signal.', bullets:['Configure the expected heartbeat window.', 'Have your job send a heartbeat after it runs.', 'Inspect run history and receive an email when a heartbeat is late.']},
      {label:'Boundaries + action', heading:'Monitoring tells you to look. You decide the fix.', body:'ShipWatch flags late heartbeats. It does not retry or repair your job. Start with a test heartbeat to understand the monitoring flow.', cta:'Set up a test heartbeat'}
    ],
    gaps: ['No uptime or delivery guarantee', 'No verified customer results', 'Pricing was not supplied']
  },
  {
    id: 'slotwise', name: 'Slotwise', category: 'Solo business', icon: 'W',
    source: "# Slotwise\n\nThis is a fictional product brief for testing Landing Page Story.\n\n## Product facts\n\n- Audience: a solo consultant scheduling individual sessions with clients.\n- Set weekly availability.\n- Share a booking link.\n- Clients choose an available slot.\n- Times display in the viewer's time zone.\n- Email confirmations follow a booking.\n- The intended next action is `Preview a booking page`.\n\n## Current copy to improve\n\nScheduling reimagined for a connected world. Slotwise is an innovative,\nend-to-end experience that enables professionals to optimize their time\nthrough a holistic suite of scheduling capabilities.\n\n## Boundaries and unknowns\n\n- No payment collection, calendar synchronization, group bookings, or reminders.\n- No testimonials, user counts, conversion uplift, or financial-savings claims.\n- Pricing and product availability are unspecified.\n- No live Slotwise website is provided; the CTA describes a proposed action.\n\n## Request\n\nCreate an approachable English landing-page outline and copy. Respect a\nminimal, existing visual design. Do not invent an offer or claim the product\nis free. Include a visual of available slots and a timezone label, then a\nFramer-ready section-by-section handoff without publishing anything.\n",
    before: {headline: 'Scheduling reimagined for a connected world.', description: 'Slotwise is an innovative, end-to-end experience that enables professionals to optimize their time through a holistic suite of scheduling capabilities.', cta: 'Discover Slotwise', cards: ['Weekly availability', 'Booking links', 'Time-zone display']},
    after: {headline: 'Give clients a clear way to book your next session.', description: 'Set your weekly availability and share one link. Clients see slots in their time zone, choose a time, and receive an email confirmation.', cta: 'Preview a booking page', cards: ['Set your available hours', 'Share your booking link', 'Confirm the chosen session']},
    problem: 'Agreeing on a consultation time means another round of messages and time-zone calculations.',
    customer: 'An independent consultant booking one-to-one client sessions.',
    desire: 'Give clients a simple way to book an available session.',
    empathy: 'Booking the conversation should be simpler than having it.',
    proof: 'Show the weekly availability screen, time-zone label, and confirmation. Do not imply calendar synchronization, payments, reminders, or guaranteed bookings.',
    changes: ['Internal terminology becomes a client-facing result.', 'The description explains how the result happens.', 'The first action matches the actual setup flow.'],
    structure: [
      ['Hero', 'Offer a clear way to book a session and explain the availability-and-link mechanism.'],
      ['The problem', 'Describe back-and-forth scheduling in a consultant’s words.'],
      ['Product evidence', 'Show available slots with the viewer’s time-zone label.'],
      ['How it works', 'Set weekly availability. Share the link. Confirm the chosen session.'],
      ['Fit + action', 'Explain individual sessions and email confirmations, then offer a booking-page preview.']
    ],
    facts: ['A solo consultant sets weekly availability.', 'The consultant shares a booking link.', 'Clients choose an available slot.', 'Times display in the viewer’s time zone.', 'Email confirmations follow a booking.'],
    limits: ['No payment collection, calendar synchronization, group bookings, or reminders.', 'No testimonials, user counts, conversion uplift, or financial-savings evidence.', 'Pricing and product availability are unspecified; do not describe the product as free or available now.', 'No live Slotwise website or booking-page destination is provided.'],
    buildStack: 'Prepare a Framer-ready section-by-section handoff that respects the user’s existing minimal visual design. Do not publish anything.',
    pageCopy: [
      {label:'The problem', heading:'Make the next session easier to agree on.', body:'Instead of another exchange about available times, give your client a page with the slots you have made available. Times display in the viewer’s time zone.'},
      {label:'Product evidence', heading:'Your available times, in their time zone.', body:'Set weekly availability and share your booking link. A client chooses an available slot, and an email confirmation follows the booking.', bullets:['Weekly availability you set.', 'One link for individual client sessions.', 'Available slots shown in the viewer’s time zone.']},
      {label:'How it works', heading:'From an available hour to a confirmed session.', bullets:['Choose the hours you want to make available each week.', 'Share your booking link with a client.', 'Let the client choose a slot and receive an email confirmation.']},
      {label:'Fit + action', heading:'See what your client would see.', body:'Preview the booking page for an individual session, including available slots and the time-zone label.', cta:'Preview a booking page'}
    ],
    gaps: ['No verified booking uplift', 'No calendar sync, payments, or reminders', 'Pricing was not supplied']
  }
];

// The same source supports three original editorial treatments. Nothing below
// represents a customer result, a model run, or an established winning version.
const alternatives = {
  relaynote: {
    resonance: {
      headline: 'For the founder with interviews done and a roadmap to choose.',
      description: 'Before you pick the next feature, revisit the people you spoke to. Group their words by topic, with every saved excerpt linked to the original note.',
      cta: 'Explore a sample workspace',
      cards: ['Your interview notes', 'Your next feature decision', 'The words behind it'],
      focus: 'A solo SaaS founder in the moment between customer interviews and the next feature decision.',
      thesis: 'Lead with a recognizable decision, so the right founder can see themselves in the page.',
      changes: ['The opening names a specific founder and decision.', 'The customer’s words matter more than the software category.', 'Fit stays narrow: existing text notes, not audio or AI insights.'],
      structure: [['Hero', 'Name the solo founder’s post-interview decision.'], ['The moment', 'Connect completed interviews to an upcoming feature choice.'], ['Product evidence', 'Show a saved excerpt, its topic, and the original note.'], ['Fit', 'Explain the text-note workflow and Markdown export.'], ['Next step', 'Let the founder inspect a sample workspace.']],
      pageCopy: [
        {label:'The moment', heading:'You have heard from customers. Now you have to choose.', body:'When the next feature is up to you, bring the interview notes back into the conversation. Look at relevant excerpts together, then return to the original note for context.'},
        {label:'Product evidence', heading:'A topic is more useful with the words behind it.', body:'Group saved excerpts by topic. Each one links to the original note, so you can check what was said before interpreting it.'},
        {label:'Fit', heading:'Built around the notes you already took.', bullets:['Import interview notes as .txt or .md files.', 'Save excerpts and group them by topic.', 'Export grouped notes as Markdown.'], body:'For a solo SaaS founder revisiting customer interviews. RelayNote does not transcribe audio or generate AI insights.'},
        {label:'Next step', heading:'See your next decision from the customer’s side.', body:'Inspect a sample workspace to see the relationship between excerpts, topics, and original notes.', cta:'Explore a sample workspace'}
      ]
    },
    offer: {
      headline: 'Your interview evidence, grouped and ready to revisit.',
      description: 'Bring .txt or .md notes. Group saved excerpts by topic, check each original source, and export the grouped notes as Markdown. Inspect the workflow in a sample workspace.',
      cta: 'Explore a sample workspace',
      cards: ['Start with text notes', 'Keep the source attached', 'Take Markdown with you'],
      focus: 'Make the usable output and required input explicit, then offer a concrete way to inspect the workflow.',
      thesis: 'Replace a vague intelligence promise with a tangible result: grouped notes that retain their sources.',
      changes: ['The opening names the output you can actually get.', 'Input formats and export format make the effort concrete.', 'The sample workspace provides something to inspect before deciding.'],
      structure: [['Hero', 'Name grouped, source-linked interview evidence as the result.'], ['What you get', 'Show topic groups, original-note links, and Markdown output.'], ['What you bring', 'State the .txt and .md input requirement.'], ['Inspect the mechanism', 'Demonstrate an excerpt and the original source.'], ['Next step', 'Offer the sample workspace without an invented trial or price.']],
      pageCopy: [
        {label:'What you get', heading:'Useful excerpts. Original context. A Markdown export.', body:'Keep saved excerpts together by topic. Follow each one back to its original note when you need the context, or export the grouped notes as Markdown.'},
        {label:'What you bring', heading:'Start with the interview notes you have.', bullets:['Import .txt or .md notes.', 'Save excerpts and group them by topic.', 'Revisit the sources or export your grouped notes.'], body:'Audio upload, transcription, and AI-generated insights are outside this workflow.'},
        {label:'Inspect the mechanism', heading:'See exactly where an excerpt came from.', body:'A sample workspace shows how a saved excerpt connects to its original note. Use the source context to judge the evidence yourself.'},
        {label:'Next step', heading:'Look through the workflow before you decide.', body:'Explore the sample workspace to inspect topics, saved excerpts, original notes, and Markdown export.', cta:'Explore a sample workspace'}
      ]
    }
  },
  shipwatch: {
    resonance: {
      headline: 'Your cron job. Your responsibility when it goes quiet.',
      description: 'For solo developers responsible for scheduled jobs: send a heartbeat after each run. When it arrives late, ShipWatch flags it and emails you.',
      cta: 'Set up a test heartbeat',
      cards: ['Your scheduled jobs', 'Your heartbeat window', 'An email when it is late'],
      focus: 'A solo developer who owns both the scheduled background job and the responsibility for noticing when it is late.',
      thesis: 'Talk to the person maintaining the job, in the language of their actual workflow.',
      changes: ['The opening recognizes the developer’s specific responsibility.', '“Cron job” gives the intended reader a familiar entry point.', 'The page stays about late heartbeats rather than a broad observability category.'],
      structure: [['Hero', 'Recognize the solo developer who owns scheduled jobs.'], ['The responsibility', 'Explain why a run needs a visible signal.'], ['Product evidence', 'Show heartbeat history and an illustrative late alert.'], ['Fit', 'Describe heartbeat monitoring and its limits.'], ['Next step', 'Invite the developer to set up a test heartbeat.']],
      pageCopy: [
        {label:'The responsibility', heading:'The job runs in the background. The responsibility stays with you.', body:'When you maintain a scheduled job, you need to know whether its expected heartbeat arrived. Give the run a signal you can inspect.'},
        {label:'Product evidence', heading:'Read the run history. Notice the late heartbeat.', body:'See recorded heartbeats in one run-history view. ShipWatch flags a heartbeat outside your configured window and sends an email alert.'},
        {label:'Fit', heading:'For the scheduled jobs you maintain yourself.', body:'Configure the expected window and send a heartbeat after the job runs. ShipWatch monitors that signal; it does not retry or repair the job.', bullets:['Heartbeat monitoring for scheduled background jobs.', 'Email alerts for late heartbeats.', 'Recorded heartbeats in the run-history view.']},
        {label:'Next step', heading:'Start with one test heartbeat.', body:'Inspect how the job signal, expected window, and late alert fit together.', cta:'Set up a test heartbeat'}
      ]
    },
    offer: {
      headline: 'A late-job signal, with the setup spelled out.',
      description: 'Configure a heartbeat window. Send a heartbeat after each run. Inspect the run history and receive an email when a heartbeat is late. Start with a test heartbeat.',
      cta: 'Set up a test heartbeat',
      cards: ['Configure the window', 'Send the heartbeat', 'Inspect history and alerts'],
      focus: 'Make the developer’s setup work and the exact monitoring output visible before asking for commitment.',
      thesis: 'Explain the exchange: a heartbeat from the job for a late signal, email alert, and recorded run history.',
      changes: ['Setup effort is visible alongside the result.', 'The offer stays limited to monitoring, history, and email.', 'A test heartbeat is the next step, without an invented free trial or uptime promise.'],
      structure: [['Hero', 'Pair the monitoring result with required setup.'], ['The output', 'Show late-heartbeat status, email, and run history.'], ['Your setup', 'Explain the configured window and post-run heartbeat.'], ['Scope', 'State that alerts do not retry or repair a job.'], ['Next step', 'Offer a test heartbeat; flag missing endpoint in builder notes.']],
      pageCopy: [
        {label:'The output', heading:'Know which heartbeat arrived late.', body:'ShipWatch flags a heartbeat later than the configured window, sends an email alert, and shows recorded heartbeats in the run-history view.'},
        {label:'Your setup', heading:'The job supplies the signal. You define the window.', bullets:['Configure when a heartbeat should arrive.', 'Have your job send a heartbeat after it runs.', 'Inspect recorded heartbeats and late-heartbeat email alerts.'], body:'You configure the window and add a heartbeat to your job. ShipWatch monitors the signal that arrives.'},
        {label:'Scope', heading:'A signal to investigate, with clear limits.', body:'ShipWatch flags late heartbeats and sends an email alert. It does not automatically retry or repair jobs; you investigate the cause.'},
        {label:'Next step', heading:'Inspect the flow with a test heartbeat.', body:'Start with the monitoring mechanism you can evaluate: a heartbeat, an expected window, and a late alert.', cta:'Set up a test heartbeat'}
      ]
    }
  },
  slotwise: {
    resonance: {
      headline: 'For consultants whose next client session starts with “when works?”',
      description: 'You bring the expertise. Give clients a booking link for your individual sessions, with available times displayed in their time zone and an email confirmation after booking.',
      cta: 'Preview a booking page',
      cards: ['Your one-to-one sessions', 'Your weekly availability', 'Your client’s time zone'],
      focus: 'A solo consultant arranging individual client sessions, rather than a team scheduling every kind of meeting.',
      thesis: 'Recognize the consultant’s scheduling moment and keep the promise specific to individual sessions.',
      changes: ['The opening names the consultant and the familiar scheduling question.', 'The page talks about client sessions instead of generic productivity.', 'Fit stays focused on individual bookings and the viewer’s time zone.'],
      structure: [['Hero', 'Name the solo consultant arranging the next client session.'], ['The moment', 'Connect the client conversation to choosing a time.'], ['Product evidence', 'Show session slots with the viewer’s time-zone label.'], ['Fit', 'Explain individual sessions and supported confirmations.'], ['Next step', 'Invite a preview of the client’s booking page.']],
      pageCopy: [
        {label:'The moment', heading:'A client wants a session. Give them somewhere to choose it.', body:'Set the hours you make available each week, then share your booking link when it is time to arrange an individual session.'},
        {label:'Product evidence', heading:'Your availability, shown in your client’s time zone.', body:'Clients see available slots in the viewer’s time zone and choose a time. An email confirmation follows the booking.'},
        {label:'Fit', heading:'For the one-to-one work you do yourself.', body:'Slotwise supports individual client sessions. It does not collect payments, synchronize calendars, handle group bookings, or send reminders.', bullets:['Set your weekly availability.', 'Share one booking link with a client.', 'Let the client choose an available session.']},
        {label:'Next step', heading:'Take the client’s view.', body:'Preview how available times and the time-zone label appear on the booking page.', cta:'Preview a booking page'}
      ]
    },
    offer: {
      headline: 'One link. Your available slots. A confirmed session.',
      description: 'Set weekly availability and share your booking link. Clients choose a slot in their time zone; an email confirmation follows. Preview the booking page before deciding.',
      cta: 'Preview a booking page',
      cards: ['Set weekly availability', 'Share a booking link', 'Send email confirmation'],
      focus: 'Make the consultant’s required setup, the client’s action, and the booking output explicit.',
      thesis: 'Show the concrete exchange: availability plus a link gives the client a way to choose a session.',
      changes: ['The value is concrete: a link, available slots, and confirmation.', 'Setup and client actions are easy to distinguish.', 'A preview reduces uncertainty without inventing a free plan, guarantee, or extra feature.'],
      structure: [['Hero', 'Name the link-to-confirmation result and required availability setup.'], ['What the client gets', 'Show time-zone-aware slots and email confirmation.'], ['What you do', 'Explain weekly availability and link sharing.'], ['Scope', 'Keep the offer to individual bookings with supported functionality.'], ['Next step', 'Offer a booking-page preview rather than an invented plan or price.']],
      pageCopy: [
        {label:'What the client gets', heading:'An available time they can choose.', body:'The booking page displays slots in the viewer’s time zone. A client chooses an available slot, and an email confirmation follows the booking.'},
        {label:'What you do', heading:'Make your hours available. Then share the link.', bullets:['Set the weekly hours you want to offer.', 'Share your booking link with the client.', 'Let the client choose an available individual session.']},
        {label:'Scope', heading:'Know what the booking flow includes.', body:'Weekly availability, a booking link, time-zone display, and email confirmations. Payments, calendar synchronization, group bookings, and reminders are not included.'},
        {label:'Next step', heading:'See the booking page before choosing your next step.', body:'Preview how available slots and the time-zone label look to the client before they choose a session.', cta:'Preview a booking page'}
      ]
    }
  }
};

for (const sample of cases) {
  sample.directions = {
    story: {
      ...sample.after, structure:sample.structure, pageCopy:sample.pageCopy,
      focus:sample.customer, thesis:sample.desire, changes:sample.changes
    },
    ...alternatives[sample.id]
  };
}
