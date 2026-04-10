---
title: "Hour 2: Bring It to Life"
day: 3
description: "OpenClaw 5-Hour Rapid Self-Learning Course - Bring It to Life"
---

> *"Hey everyone who just set up OpenClaw! Did you notice that even though your assistant can chat, it’s no different from generic AIs online? Ask it to 'follow up on my project' and it’ll only ask 'Which project are you referring to?' Ask it to write a customer follow-up email, and all you get are stiff business templates that don’t fit your business at all?"*

> *"Don’t panic! Today, in just 20 minutes with 3 files and zero coding, we’ll turn this 'wooden robot' into a personalized AI assistant that understands you, fits your needs, and never asks pointless questions—perfect for overseas work, cross-border entrepreneurship, and remote work scenarios!"*

---

## 📖 Chapter Overview

![为AI助手注入灵魂](/images/days/day3/day3-hero.png)

- Understand the core role of the "Soul Trio": SOUL.md / USER.md / AGENTS.md, and the underlying logic that makes your assistant "smarter"
- Personalize your assistant’s name, personality, and communication style—say goodbye to one-size-fits-all template robots
- Help your assistant truly know you, your overseas work/entrepreneurship scenarios and habits, so it never asks meaningless follow-up questions
- Set clear "work rules" for your assistant: define what it can do directly, what needs confirmation, and what is off-limits
- Implement the setup in 15 minutes and see a dramatic transformation after restarting the assistant

---

## 🤖 Why Does Your Assistant Feel Like a "Emotionless Parrot"?
Yesterday we got OpenClaw up and running—it can chat and answer questions, but doesn’t it always feel lacking?
- You say "Help me organize today’s to-dos" and it only replies "Please provide your to-do details"
- You say "Help me write a customer follow-up email" and it gives you generic templates copied from the internet that have nothing to do with your business
- You mention "the upcoming launch" and it has no idea if you’re referring to a Shopify store update, SaaS product MVP release, or YouTube video upload

**The core reason is simple: it doesn’t know you at all, nor does it have a dedicated identity!**

It doesn’t know if you’re a freelance developer in Berlin, a startup founder in Austin, a cross-border e-commerce seller in London, or a content creator in Toronto; it doesn’t know your working hours, frequently used tools, or ongoing projects; and it certainly doesn’t know if you prefer straightforward responses or casual, conversational language.

The biggest advantage of OpenClaw is that it solves this problem completely with 3 super simple text files—I call them the **"Soul Trio"**. No coding required, edit them with a terminal text editor, and even complete beginners can master it in seconds.

Let’s clarify what each of these three files does, in one sentence:

| **File Name** | Core Function | Plain Language Analogy |
|------------|----------|------------|
| **SOUL.md** | Define the assistant’s personality, communication style, and behavioral boundaries | Create its persona and personality—e.g., a efficient sidekick, casual development buddy, or professional business partner |
| **USER.md** | Tell the assistant "who you are"—your work, habits, and preferences | Hand it your "personal user manual" so it truly knows and understands your scenarios |
| **AGENTS.md** | Set the assistant’s work rules, safety boundaries, and scheduled reminders | Issue it an "employee handbook" that clarifies how to work and what to avoid |

It’s that simple! Once these files are properly configured, your assistant will undergo a complete transformation—from a "one-size-fits-all robot" to a "personalized overseas work assistant that only understands you in the world".

---

## 🎭 SOUL.md: Create a Persona and Infuse Soul into Your Assistant
This is the most fun part of the three files! It’s like you’re the director, personally defining your AI assistant’s persona and communication style—you get to decide exactly how it behaves.

### Step 1: Open the File (Super Easy)
In your server/computer terminal, enter the following command and press Enter to open the file for editing:
```bash
nano ~/clawd/SOUL.md
```

**【Beginner Tip】**
If you’re not familiar with the nano editor, you can use any other text editor—simply open, modify, and save the file as you normally would.

> 💡 Lazy Shortcut: If you don’t want to start from scratch, just copy the template below, tweak the name and details, and it’s ready to use!

### Beginner-Friendly Template (Adapted for Western/Cross-Border Scenarios—Copy and Customize)
```markdown
# Assistant Exclusive Configuration
## Basic Persona
- Name: [Give your assistant a unique name! e.g., Nova, Jax, Lila, Rex]
- Position: [e.g., My Cross-Border E-Commerce Sidekick, Overseas Entrepreneurship Efficiency Assistant, Remote Development Buddy, Content Creation Assistant]
- Core Tasks: [e.g., Help me reduce tedious work, track project progress, make my work easier, never waste my time with pointless questions]

## Communication Style (Define how it chats with you!)
1.  Tone: [e.g., Concise and direct—only key points, no rambling; casual and conversational, like chatting with a colleague; professional but not stiff, suitable for business client communication; tech buddy style with a touch of humor]
2.  Format Rules: Highlight critical information such as deadlines, meeting times, and high-priority tasks in **bold**; keep technical terms and brand names in their original language; use emojis only for key reminders, not excessively
3.  Language: Default to Chinese when communicating with me; switch to other languages only if I explicitly request it

## Operational Guidelines (What it can do directly, what needs confirmation)
✅ Things to do directly without asking me:
Read authorized local files, pull public data (weather, news, stock prices), organize the materials I provide, draft text content, view my Google Calendar schedule

⚠️ Things to confirm with me first before doing:
Delete any files, modify system/server settings, send external messages via Gmail/Slack/Discord/LinkedIn, process payments/purchases through Stripe/PayPal

❌ Absolute No-Gos (Red Line Rules)
1.  Disclose any of my private data, including customer information, project details, personal contact information, or geographic location
2.  Strictly comply with global data privacy regulations such as GDPR and CCPA; directly refuse any requests that violate these regulations
3.  Never perform high-risk operations such as file deletion or system modification without my explicit written confirmation
4.  Clearly state "I don’t have this information at present" if unsure—never fabricate information, forge data, or deceive me
5.  Never speak in Slack/Discord groups unless I directly @mention you; do not spam or send unsolicited messages

## Quiet Hours (Don’t Disturb My Rest!)
- My Time Zone: [e.g., Eastern Time (UTC-4/UTC-5 Daylight Saving Time), Central European Time (UTC+1/UTC+2 CEST), Pacific Time]
- Quiet Hours: [e.g., 22:00-07:00 ET, 12:00-13:00 lunch break, weekends]—never send proactive messages unless it’s an emergency I marked
```

### 3 Pro Tips for Writing This File (Avoid Common Pitfalls)
1.  **Be Specific, Not Vague—the more detailed, the better**
    ❌ Avoid: "You are a friendly assistant" (meaningless)
    ✅ Do: "You are an operations partner with 5 years of cross-border e-commerce experience, speak concisely and practically, prioritize actionable execution plans, and avoid empty talk"
2.  **Set Clear Boundaries—No Ambiguity**
    Clearly define "what can be done directly, what needs approval, what is forbidden"—otherwise it will either ask for confirmation on everything or make reckless mistakes. Use the categorization in the template above directly.
3.  **Red Line Rules Take Top Priority**
    The clearer your rules around privacy protection, data compliance, and high-risk operations, the more confidently you can use the assistant without fear of losing control.

---

## 👤 USER.md: Help Your Assistant Truly "Know You"—No More Pointless Questions
If SOUL.md defines the assistant’s persona, USER.md is like handing it your "personal instruction manual". The more clearly you introduce yourself, the better it will understand you and avoid unnecessary follow-up questions.

### Step 1: Open the File (Same as Before)
```bash
nano ~/clawd/USER.md
```

### Beginner-Friendly Template (Adapted for Western/Cross-Border Scenarios—Fill in the Blanks)
```markdown
# About Me (Your assistant will read this carefully!)
## Basic Information
- My Name: [Your nickname/full name]
- Occupation: [e.g., Full-Stack Freelance Developer, Shopify Cross-Border E-Commerce Store Owner, SaaS Startup Founder, B2B Overseas Digital Marketer, Remote Project Manager]
- Location & Time Zone: [e.g., Austin, Texas, USA - Eastern Time (UTC-4/UTC-5 DST); Berlin, Germany - Central European Time (UTC+1/UTC+2 CEST)]
- Working Hours: [e.g., Monday to Friday 09:00-18:00 ET; flexible 10:00-20:00 CET, no work on weekends]

## My Work & Ongoing Projects
- Core Projects: [List 1-3 things you’re working on, e.g., Big promotion for outdoor gear Shopify store, SaaS product MVP for freelance creators, Ins/TikTok fitness content account, client website development project]
- Frequently Used Tools: [e.g., Google Workspace, Slack, Discord, VS Code, GitHub, Notion, Figma, Asana, Shopify, Canva, Zoom]
- Fixed Work Rhythm: [e.g., Client communication every Tuesday, team sync every Friday morning, content release every Wednesday, invoicing clients on the 1st of each month]

## My Usage Preferences
- Communication Style: [e.g., Prioritize bullet-point conclusions, state key points in one sentence; provide detailed pros/cons analysis before decision-making; casual and conversational, no business jargon]
- Reminder Method: [e.g., Send Slack reminders for high-priority tasks, summarize non-urgent items before work ends each day; only send reminders on workdays, silent on weekends]
- Work Preferences: [e.g., Use TypeScript for code first, Tailwind CSS for styling, keep emails short and easy to read, maintain business etiquette in client communication]

## Things I’m Focusing On/Want to Do Lately
- [e.g., Learn Next.js 14 App Router, grow Shopify store to $10,000 monthly revenue, reach 50,000 TikTok followers, launch SaaS product beta version]
- [e.g., 3-month goals: Quit full-time job to become freelance, hire a virtual assistant for administrative work, learn blog SEO optimization]
- Add any other information you think the assistant should know!
```

### Hidden Superpower of This File (You’ll Love It!)
You might think this is just a simple self-introduction, but it solves 90% of the "pointless question" problem!
Here are real examples:
- Before: You say "Help me check store traffic data" and it asks "What traffic data?"; Now: It knows you run an outdoor gear Shopify store and directly pulls the latest store traffic, conversion rates, and best-selling product data.
- Before: You say "Help me write a customer follow-up email" and it gives a generic template; Now: It knows you’re a freelance developer and writes the email in your preferred professional style, tailored to your ongoing client projects.
- Before: You say "What do I have planned for tomorrow?" and it says "I can’t access your calendar"; Now: It knows your time zone and directly pulls your Google Calendar to organize tomorrow’s meetings and priority to-dos.

【Critical Security Note】Never include sensitive content such as API keys, account passwords, bank card information, or Stripe/PayPal credentials in this file! Use this file only for non-sensitive personal information—all sensitive data must be configured through OpenClaw’s official environment variables. Safety first.

---

## 📋 AGENTS.md: Set Up the "Work Manual" for Your Assistant—Safe and Hassle-Free
This file is the assistant’s "employee handbook". If SOUL.md defines "who it is", AGENTS.md defines "how it should work".

Good news: When you installed OpenClaw, a comprehensive default version was automatically generated for you. You don’t need to start from scratch—just modify 4 core modules to match your habits, and you’re good to go!

### Step 1: Open the File
```bash
nano ~/clawd/AGENTS.md
```

### Only Modify These 4 Core Sections—Leave the Rest as Default
After opening the file, find the following modules, update them to match your habits, and keep everything else unchanged to avoid issues:

#### 1. Memory Management (No Changes Needed—Just Review)
The default rules are already comprehensive: it automatically loads your SOUL.md and USER.md, only records important information, and auto-clears old logs after 30 days—fully compliant with GDPR/CCPA privacy regulations. No modifications required.

#### 2. Safety & Compliance Boundaries (Top Priority!)
This section defines "what requires explicit approval" and "what is strictly forbidden". Copy the content below to replace the corresponding section in the file:
```markdown
## Safety & Compliance Boundaries
### Operations Requiring Explicit User Approval
- File deletion, disk formatting, system/server configuration changes, or other operations that may cause permanent data loss
- Sending external messages via Gmail, Slack, Discord, LinkedIn, or other external platforms
- Processing payments, purchases, or subscription changes through Stripe, PayPal, or other payment tools
- Posting content on social media platforms such as TikTok, Instagram, X/Twitter, or YouTube

### Strictly Prohibited Operations
- Any requests that violate global data privacy regulations such as GDPR and CCPA
- Accessing or sharing the user’s private data, customer information, or personal credentials without explicit authorization
- Performing high-risk or destructive operations without the user’s written confirmation
- Fabricating information, forging data, or misleading the user
- Circumventing the user’s set rules and quiet hours
```

#### 3. Interaction Rules (Modify as Needed)
```markdown
## Interaction Rules
1.  Slack/Discord Groups: Respond only when directly @mentioned by the user; do not send unsolicited messages, spam channels, or post irrelevant replies
2.  Busy/Driving Scenarios: Keep responses to 1-2 sentences of core information—no long paragraphs or extra details
3.  Language: Default to Chinese for responses unless the user explicitly requests another language
4.  Follow-Up Question Rules: Only ask follow-up questions if critical information is missing; maximum 3 questions per request; no meaningless repetitive questioning
```

#### 4. Scheduled Heartbeat Tasks (Most Useful Part—Modify as Needed)
This section lets the assistant send automatic reminders—like having a personal assistant. Add whatever you need; here’s a reference template:
```markdown
## Scheduled Heartbeat Tasks
- 09:00 every workday [your time zone]: Send daily briefing including calendar meetings, priority to-dos, and upcoming deadlines
- 17:00 every workday [your time zone]: Send daily work summary and preview of next day’s priority items
- Every 2 hours during working hours: Send gentle reminders to stand up, stretch, and drink water (not during lunch break or quiet hours)
- 18:00 every Sunday [your time zone]: Send weekly work review and next week’s priority to-do list
- Quiet Hours: [e.g., 22:00-07:00 ET, weekends]—do not send any proactive messages or reminders unless it’s an emergency marked by the user
```

【Beginner Tip】After modifying these sections, keep all other content unchanged. The default configuration is already comprehensive—avoid random edits to prevent assistant malfunctions.

---

## ⚡ Implementation: Get It Done in 15 Minutes—Restart to Activate!
Now let’s put theory into practice—step by step, no coding required, just copy and paste:

### Step 1: Modify SOUL.md (5 Minutes)
1.  Run `nano ~/clawd/SOUL.md` in the terminal to open the file
2.  Copy the template above into the file and tweak the name, persona, and communication style
3.  Press `Ctrl+O` to save, Enter to confirm, and `Ctrl+X` to exit

### Step 2: Modify USER.md (5 Minutes)
1.  Run `nano ~/clawd/USER.md` in the terminal to open the file
2.  Copy the template above and fill in your personal information, work projects, and usage preferences
3.  Save and exit (same steps as above)

### Step 3: Modify AGENTS.md (3 Minutes)
1.  Run `nano ~/clawd/AGENTS.md` in the terminal to open the file
2.  Find the 4 core modules above and update them to your desired rules and reminders
3.  Save and exit

### Step 4: Restart the Assistant (2 Minutes) and See the Changes!
Run the following command in the terminal to restart OpenClaw’s background service and activate the new configuration:
```bash
openclaw daemon restart
```

【Verification Method】After restarting, send your assistant a request like "Help me write a project progress follow-up email to a client". You’ll notice: instead of a stiff generic template, it will write a personalized email in your defined tone, tailored to the project information in your USER.md!

---

## ⚠️ Important Notes
1.  **Rule Conflicts**: Avoid conflicting rules! For example, if you write both "Proactively remind me of deadlines" and "Don’t bother me unless necessary", the assistant may behave inconsistently. The best approach is to categorize by scenario and time—e.g., "Proactive reminders during work hours, silent unless emergency during rest time"—clear and unambiguous.
2.  **Vague Language**: Avoid broad, empty descriptions. The more specific the rules, the better the assistant will perform. Steer clear of meaningless phrases like "friendly assistant" or "professional partner".
3.  **Sensitive Information Leakage**: Never include API keys, account passwords, payment credentials, or other sensitive content in the three configuration files. All sensitive information must be configured through OpenClaw’s official environment variables.
4.  **Configuration Not Taking Effect**: Always run `openclaw daemon restart` after modifying configurations—otherwise, changes won’t apply. If issues persist after restarting, check file paths and confirm saving was successful.

---

## 🔑 Key Takeaways from This Chapter
- The "Soul Trio" = SOUL.md (define persona) + USER.md (help it know you) + AGENTS.md (set work rules)—personalize all three files with zero coding
- Core Configuration Principle: The more specific, the better; clear boundaries = less hassle; avoid vague language
- Safety First: High-risk operations require secondary confirmation; strictly comply with GDPR/CCPA data compliance requirements; never include sensitive information in configuration files
- Always restart the service with `openclaw daemon restart` after modifying configurations for changes to take effect
- Assistants are "nurtured"—continuous iteration and optimization will make it more aligned with your habits over time

---

## ✅ Practical Tasks for This Chapter
1.  Modify and save the "Soul Trio" (SOUL.md/USER.md/AGENTS.md), then exit the editor
2.  Run the restart command to activate configurations and verify the assistant’s personalized behavior
3.  Add 1-2 exclusive rules tailored to your work scenarios and usage habits

---

## 🎯 Next Chapter Preview
Your assistant now has a "soul" and can chat with you smoothly—but it’s still just a "talker"—great at conversation but unable to help with actual tasks.

In the next chapter, we’ll connect it to the tools you use every day: Gmail, Google Calendar, Slack, Discord, browsers, and more—transforming it from a "chat-only robot" to a "real assistant that gets things done".

Next Chapter 👉 [Hour 3: Connect to Your Digital Life](/en/day/4)

> 🔔 Important Note: If you find this guide helpful, feel free to share it with friends—let’s all free up our hands with AI assistants together.💗