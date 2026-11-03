# Example products

These are fictional briefs, not customers. Each brief separates available
features, unknowns, and unsupported claims so you can reproduce an agent run.
The interactive site's authored before/after samples visualize the intended
workflow; they are not asserted to be verbatim outputs of a particular model.

| Brief | User | Important constraint |
| --- | --- | --- |
| [RelayNote](relaynote/README.md) | Solo SaaS founders reviewing interview notes | Text notes only, no audio transcription or AI research claims |
| [ShipWatch](shipwatch/README.md) | Solo developers maintaining scheduled jobs | Heartbeat alerts, not automated recovery or an uptime guarantee |
| [Slotwise](slotwise/README.md) | Solo consultants taking individual bookings | No payment processing or calendar integration |

Try any brief with:

```sh
node scripts/brief.mjs --source examples/relaynote/README.md --output .local/relaynote-task.md
```

Give the resulting task to your coding agent after installing the skill, or
use the self-contained instructions embedded in the task. Preparing a task
does not call an AI service and does not generate evaluated marketing copy.
