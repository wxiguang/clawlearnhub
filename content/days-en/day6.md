---
title: "Hour 5: Make Your Assistant Work Proactively"
day: 6
description: "OpenClaw 5-Hour Rapid Self-Learning Course - Empower Your Assistant to Work Proactively"
---

> *"An assistant that only acts when you ask is just a tool. An assistant that comes to you on its own is a true assistant. After today, you'll never need to 'remember to check your emails' again — because someone will do it for you."*

---

## 📖 Chapter Overview

![Work Proactively](/images/days/day6/day6-hero.png)

In this hour, we will complete the core upgrade of your OpenClaw assistant from a "passive tool" to an "active manager", completely solving the pain point of "it only acts when you prompt it".

You will master two core automation capabilities systematically:
- Understand the Heartbeat mechanism — equip your assistant with a "biological clock" for cyclic inspections
- Master Cron Scheduled Tasks — configure precise minute-level automated execution rules
- Distinguish the applicable scenarios of the two mechanisms to choose the right tool without mistakes
- Learn to balance your assistant's proactivity to achieve "notify promptly when there's something important, stay quiet when there's nothing"

After this chapter, your assistant will achieve 24/7 fully automated monitoring: email checks, schedule reminders, data monitoring, and scheduled reports — all without manual triggering.

---

## From "You Ask, It Answers" to "It Comes to You Proactively"
In previous learning, you have enabled your assistant with conversational interaction, tool calling, and multi-platform access capabilities. However, it always has one core shortcoming: **it does nothing until you initiate an instruction**.

It won't take the initiative to filter unread emails when your inbox is full, won't remind you in advance when a meeting is approaching, and won't alert you immediately if a website goes down. It always waits for your instructions. This is like hiring an all-round housekeeper who only stands at the door waiting for your orders — completely losing the core value of an "assistant".

Today, we will use the Heartbeat mechanism + Cron Scheduled Tasks to solve this problem once and for all.

---

## Heartbeat Mechanism 💓
The Heartbeat mechanism is the core foundation for OpenClaw to achieve proactive work. Just like your assistant's "biological clock", it allows the assistant to automatically "wake up" at fixed intervals and take the initiative to complete preset inspection tasks.

### Core Principles
OpenClaw will send a heartbeat signal to the assistant at the time interval you set (30 minutes by default). After receiving the signal, the assistant will perform operations following a fixed process:
1. Read the preset inspection task list in `HEARTBEAT.md`
2. Complete each check item in the list one by one
3. Immediately send a message to notify you of important matters that need your attention
4. Return `HEARTBEAT_OK` silently if there are no abnormalities, without any disturbance

### Configure the Heartbeat Task List
The core configuration file for heartbeat tasks is `~/clawd/HEARTBEAT.md`. You can freely define your assistant's inspection scope by editing this file. Refer to the following configuration example:
```markdown
# Heartbeat Tasks

## Must-do for each check
- Check Gmail inbox and filter important unread emails (starred/from key contacts)
- Check calendar and review meetings that need reminders within 2 hours (including meeting link + participants)
- Check unread messages on instant messaging tools and filter high-priority content where you are @mentioned

## Check 2-3 times a day
- Verify if core websites are accessible normally (response time < 3s is normal)
- Check if GSC search data has abnormal fluctuations (alert if traffic changes by ±20%)
- Monitor core server metrics (CPU/memory usage < 80% is normal)

## No proactive execution required
- Weather inquiry (respond only when actively asked by the user)
- Social media messages (process only when @mentioned)
- Non-urgent file organization requests (trigger only on demand)
```

### Adjust Heartbeat Interval
You can flexibly adjust the interval for heartbeat triggers according to your usage scenarios, supporting two configuration methods:

#### Method 1: Guided Configuration (Recommended for Beginners)
```bash
# Launch gateway configuration wizard
openclaw configure --section gateway
```
In the pop-up configuration wizard, find the `heartbeat.interval` field, enter a value + unit (e.g., 15m/30m/1h), and press Enter to confirm the adjustment.

#### Method 2: Edit Configuration File Directly
1. Open the OpenClaw main configuration file (path: `~/.openclaw/config.yaml`)
2. Locate the `heartbeat.interval` field under the `gateway` module
3. Modify it to the target interval value, save the file, and execute `openclaw restart` to take effect

Common configuration references:
- **15m**: High-frequency inspections, suitable for high-priority monitoring scenarios during workdays (e.g., e-commerce promotions, core system monitoring)
- **30m**: Default system value, balancing inspection efficiency and usage costs (first choice for general office scenarios)
- **1h**: Low-frequency inspections, suitable for non-working hours and low-priority monitoring scenarios (e.g., nights/weekends)
- **6h**: Ultra-low frequency inspections, suitable for lightweight monitoring scenarios with long-term unattended operation

### Troubleshooting Common Heartbeat Mechanism Issues
| Issue Phenomenon | Troubleshooting Steps | Solution |
|---|---|---|
| Heartbeat not triggered | 1. Check the format of the interval field in the configuration file<br>2. Execute openclaw status to check gateway status | 1. Ensure the format is "number + unit" (e.g., 30m)<br>2. Execute openclaw restart to restart the gateway |
| Frequent meaningless reminders | 1. Check the threshold of inspection items in HEARTBEAT.md<br>2. Confirm notification grading rules | 1. Increase the threshold for abnormality judgment (e.g., traffic fluctuation ±30%)<br>2. Add a "summary notification for minor matters" rule |

---

## Cron Scheduled Tasks ⏰
The Heartbeat mechanism is suitable for scenarios of "cyclic inspections at regular intervals", but for fixed tasks that need to be executed at **precise time points**, we need to use Cron Scheduled Tasks.

### Core Function
Based on Linux crontab syntax, Cron enables the assistant to automatically execute preset instructions at the precise time you specify, perfectly adapting to the following scenarios:
- Push daily morning briefings at 8:00 AM every day
- Generate weekly work reports at 9:00 AM every Monday
- Reconcile server bills at 10:00 AM on the 1st of each month
- Send health reminders during fixed working hours on weekdays

### Cron Expression Syntax
The standard format of a Cron expression is `minute hour day month weekday`, with 5 fields corresponding to different time dimensions. The value ranges of the fields are as follows:
| Field | Value Range | Explanation of Special Symbols |
|---|---|---|
| Minute | 0-59 | * (any), */n (every n minutes), n1,n2 (specify multiple values) |
| Hour | 0-23 | * (any), n1-n2 (specify time range) |
| Day | 1-31 | * (any), L (last day of the month) |
| Month | 1-12 / Jan-Dec | * (any) |
| Weekday | 0-7 / Sun-Sat (0/7 both represent Sunday) | * (any), n1-n2 (specify range of weekdays) |

Common examples are as follows:
```
Min Hr Day Mon Weekday      Description
0   8   *   *   *           → Execute at 8:00 AM every day
0   9   *   *   1           → Execute at 9:00 AM every Monday
0   10  1   *   *           → Execute at 10:00 AM on the 1st of each month
*/30 9-18 * * 1-5          → Execute every 30 minutes from 9:00 AM to 6:00 PM on weekdays
0   18  *   *   1-5         → Execute at 6:00 PM on weekdays
0   0   L   *   *           → Execute at midnight on the last day of each month
```

### Create/Manage Cron Tasks
#### 1. Create a Cron Task
Create a scheduled task using the `openclaw cron add` command. Core parameter explanations:
- `--name`: Task name (unique, for easy management)
- `--cron`: Cron time expression (required)
- `--system-event`: Instructions to execute when the task is triggered (supports multi-line text)
- `--enabled`: Whether to enable (true by default, false to disable)

#### 2. Common Management Commands
```bash
# View all Cron tasks
openclaw cron list

# Edit an existing task (modify name/expression/instructions)
openclaw cron edit --name "Morning Briefing"

# Disable/enable a task
openclaw cron disable --name "Work Health Reminder"
openclaw cron enable --name "Work Health Reminder"

# Delete a task
openclaw cron delete --name "Weekly Work Report"
```

### Examples of High-Frequency Practical Cron Tasks
#### 1. Morning Briefing (Execute at 8:00 AM daily)
```bash
openclaw cron add --name "Morning Briefing" --cron "0 8 * * *" \
  --system-event "Generate today's morning briefing with the following requirements:
  1) Summarize important content in unread emails (only starred/from key contacts, limited to 3 items)
  2) Organize today's calendar meeting arrangements (including time, meeting name, participants, meeting link)
  3) Check the operation status of core websites (response time + availability)
  4) Summarize into a concise message, control within 200 words, and send it."
```

#### 2. Weekly Report Generation (Execute at 9:00 AM every Monday)
```bash
openclaw cron add --name "Weekly Work Report" --cron "0 9 * * 1" \
  --system-event "Generate last week's work report with the following structure requirements:
  1) Core completed tasks (3-5 items, with quantifiable achievements)
  2) Follow-up tasks (marked with priority)
  3) Changes in core project data (month-on-month/year-on-year)
  4) Summary of important emails/communication records
  5) This week's plan (briefly list key points)."
```

#### 3. Work Health Reminder (Execute every 2 hours on weekdays)
```bash
openclaw cron add --name "Work Health Reminder" --cron "0 10,12,14,16 * * 1-5" \
  --system-event "Send a warm health reminder with the following requirements:
  1) Friendly tone, not stiff
  2) Reminder content: stand up and move for 5 minutes, replenish water; if you have been working continuously for more than 2 hours, it is recommended to rest for 10 minutes
  3) Attach 1 short eye care tip (different each time)."
```

#### 4. Daily Data Backup (Execute at 11:00 PM daily)
```bash
openclaw cron add --name "Daily Data Backup" --cron "0 23 * * *" \
  --system-event "Execute the daily data backup process:
  1) Back up core work documents to cloud storage
  2) Back up the database to local + off-site storage
  3) Check the integrity of backup files
  4) If backup fails, send an alert message immediately; if backup succeeds, remain silent without notification."
```

---

## Heartbeat vs Cron: Scenario Selection Guide
Both mechanisms enable the assistant to work proactively, but their applicable scenarios differ significantly. Choosing the wrong tool will greatly reduce the effectiveness. You can refer to the following table for quick selection:

| Dimension | Heartbeat Mechanism | Cron Scheduled Tasks |
|---|---|---|
| **Trigger Method** | Cyclic trigger at fixed intervals | Trigger at precise time points/time periods |
| **Core Applicable Scenarios** | Routine inspections, status monitoring, abnormality alerts, real-time responses | Scheduled reports, fixed-time reminders, periodic batch tasks, data backup |
| **Time Precision** | Allows a deviation of a few minutes (±1-2 minutes) | Precise to the minute (system-level accurate triggering) |
| **Execution Context** | Can call complete conversation history and memory (with context) | Execute independently, no context dependency (pure instruction execution) |
| **Usage Cost** | Silent if no abnormalities, extremely low cost (interaction only when abnormal) | Execute instructions every time triggered, fixed cost (charged by number of executions) |
| **Configuration Complexity** | Low (only need to edit the list + adjust interval) | Medium (need to master Cron expression syntax) |
| **Flexibility** | High (adjust interval at any time, take effect immediately) | Medium (need to restart Cron service to take effect after modification) |

**Simplified Selection Rules**:
- Inspection work that needs to "check every once in a while" → Heartbeat mechanism
- Fixed tasks that need to be done "at a specific hour and minute" → Cron Scheduled Tasks
- Abnormality monitoring with high real-time requirements → Heartbeat mechanism (short interval)
- Batch processing/report generation tasks → Cron Scheduled Tasks

---

## The Art of Balance: Proactive but Not Annoying
There is only a fine line between "proactive work" and "information harassment". Following these 4 core principles will ensure your assistant's proactive service is just right.

### Principle 1: Tiered Push — Immediate notification for important matters, summary for minor ones
| Information Level | Push Strategy | Example Scenarios |
|---|---|---|
| Urgent (P0) | Push immediately, reach within 5 minutes | Website downtime, emergency meeting reminders, important customer emails |
| Important (P1) | Push within 15 minutes, no delay | Abnormal core data, reminder for pending task expiration |
| Minor (P2) | Accumulate and push in summary at fixed times | Regular emails, routine data updates, non-urgent notifications |
| Low Priority (P3) | Display only when actively queried by the user | Non-important social media messages, general news |

### Principle 2: Respect Quiet Hours — No disturbance unless necessary
- Basic quiet hours: Late night (23:00 - 08:00 next day), weekends and holidays. Stop proactive pushes unless it's a P0-level emergency.
- Custom quiet hour configuration:
  ```bash
  # Configure quiet hours (supports multiple periods)
  openclaw configure --section gateway --key heartbeat.silent_hours --value "23:00-08:00,12:00-13:00"
  # Configure emergency exceptions (P0-level items still pushed)
  openclaw configure --section gateway --key heartbeat.urgent_exceptions --value "website_down,emergency_meeting"
  ```

### Principle 3: Frequency Adaptation — Find a Comfortable Range
- Initial trial operation phase (1-3 days): Appropriately increase push frequency to familiarize yourself with the assistant's capabilities
- Stable usage phase: It is recommended to control daily proactive messages to 3-5 to avoid information overload
- Frequency adjustment skills:
  1. High frequency → Low frequency: Increase heartbeat interval (e.g., 15m→30m) + delete non-essential inspection items
  2. Low frequency → High frequency: Decrease heartbeat interval (e.g., 1h→30m) + add core monitoring items

### Principle 4: Fully Configurable, Adjustable Anytime
All proactive behaviors support refined configuration. Core configuration entrances:
1. Heartbeat tasks: `~/clawd/HEARTBEAT.md` (take effect immediately after editing)
2. Heartbeat interval/quiet hours: `~/.openclaw/config.yaml` (take effect after restarting)
3. Cron tasks: `openclaw cron` command set (supports real-time editing/disabling/deletion)
4. Push channels: Configure push methods for different scenarios separately (e.g., urgent items → SMS + APP, minor items → APP only)

---

## 🔧 Hands-On Exercise: Build Your Proactive Assistant
### Objectives
1. Configure the heartbeat task list to achieve automatic inspections for core work scenarios
2. Create 2 practical Cron scheduled tasks
3. Configure quiet hours to avoid nighttime disturbances

### Steps
#### Step 1: Configure the Heartbeat Task List
```bash
# Open the heartbeat task configuration file
vim ~/clawd/HEARTBEAT.md
```
Edit inspection tasks suitable for yourself according to the previous examples, then save and exit.

#### Step 2: Adjust Heartbeat Interval to 20 Minutes (Weekdays)
```bash
# Guided configuration
openclaw configure --section gateway
# Find heartbeat.interval in the wizard and enter 20m
# Configure weekend interval to 1h
openclaw configure --section gateway --key heartbeat.weekend_interval --value "1h"
```

#### Step 3: Create Morning Briefing and Health Reminder Cron Tasks
Execute the 2 corresponding Cron commands mentioned earlier to complete task creation.

#### Step 4: Configure Quiet Hours
```bash
# Configure nighttime + lunch break quiet hours
openclaw configure --section gateway --key heartbeat.silent_hours --value "22:30-08:30,12:00-13:00"
```

#### Step 5: Verify Configuration Takes Effect
```bash
# View heartbeat configuration
openclaw configure --section gateway --list
# View Cron task list
openclaw cron list
# Restart the service to make configurations effective
openclaw restart
```

---

## 🔑 Key Takeaways of This Chapter
- **Heartbeat = Assistant's Biological Clock**: Automatically wake up at fixed intervals to complete cyclic inspections and abnormality alerts — the first choice for regular monitoring (low cost, high flexibility)
- **Cron = Precise Alarm Clock**: Precisely trigger based on time expressions, adapting to scheduled reports, fixed reminders, data backup and other scenarios (high precision, strong controllability)
- **Core Rule for Scenario Selection**: Use Heartbeat for batch inspections/real-time monitoring, use Cron for precise timing/batch tasks
- **Core Principle of Proactive Work**: Tiered push, respect quiet hours, control push frequency to achieve "proactive but not annoying"
- **Core Configuration Logic**: All proactive behaviors are configurable, adjustable, and disablable — fully under your control
- **Proactive work is the true value of an AI personal assistant** (a qualitative change from "passive response" to "active service")

---

## Today's Achievements 🎉
Congratulations! You have completed the qualitative upgrade of your OpenClaw assistant! Today you have:
- ✅ Understood the core principles of the Heartbeat mechanism and configured a personalized heartbeat task list
- ✅ Mastered Cron expression syntax and can independently create/manage scheduled tasks
- ✅ Precisely distinguished the applicable scenarios of the two mechanisms and can choose the right tool according to needs
- ✅ Learned to balance your assistant's proactivity and avoid information harassment through tiered push + quiet hours
- ✅ Completed hands-on exercises and built your own proactive assistant system
- ✅ Transformed your assistant from a "passive response tool" into a "24/7 active manager"

From today onwards, those trivial, repetitive tasks that you always need to "remember to check" are finally monitored for you around the clock. You can completely free up your energy to focus on more core and valuable work.

---

## Frequently Asked Questions (Q&A)
### Q1: Can the Heartbeat mechanism and Cron be used at the same time?
A: Absolutely, and it is recommended to use them in combination. For example: use the Heartbeat mechanism for real-time monitoring and Cron for scheduled reports — the two complement each other to cover all proactive work scenarios.

### Q2: How to reduce information interference from proactive pushes?
A: Core methods: 1) Strictly implement tiered push and send minor information in summary; 2) Configure reasonable quiet hours; 3) Regularly clean up non-essential inspection items/Cron tasks to keep it "few but essential".

### Q3: What to do if a Cron task fails to execute?
A: 1) Execute `openclaw cron logs --name [Task Name]` to view logs; 2) Check if the Cron expression syntax is correct; 3) Confirm if the instructions can be executed independently (no context dependency); 4) Restart the Cron service with `openclaw cron restart`.

### Q4: Is a shorter heartbeat interval better?
A: No. An overly short interval (e.g., 5m) will increase usage costs and may lead to frequent meaningless checks; it is recommended to choose according to scenarios: 15-30m on workdays, 1-6h on non-workdays.

---

## Preview: Summary😚
- What we have learned (review of core knowledge points for all 5 hours)
- Key issues to note when using OpenClaw AI Assistant (Pitfall Avoidance Guide)
- How to make your AI Assistant smarter (Memory System + Personalized Training)
Ultimately achieve: Let your AI assistant work for you, and you can enjoy a happy life to the fullest

Next Chapter 👉 [Summary: Recap & Next Steps](/en/day/7)