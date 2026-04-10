---
title: "Hour 3: Connect Your Digital Life"
day: 3
description: "OpenClaw 5-Hour Rapid Self-Learning Course - Connect Your Digital Life"
---

> *"The difference between an AI assistant that only chats and one that can read your emails, manage your calendar, and search the web isn't intelligence—it's a pair of hands. Today, we're going to give it those hands, with zero complicated steps—just follow along～"*

---

## 📖 Chapter Overview
![AI Assistant Connecting to Digital Life](/images/days/day4/day4-hero.png)
Today marks a critical turning point for your assistant, from a "chat toy" to a "productivity tool". By the end of this tutorial, you'll unlock:
- A complete understanding of the core logic and usage of OpenClaw's Skills system
- Gmail integration — full control over email reading, priority filtering, and one-click sending
- Google Calendar integration — natural language schedule management, meeting scheduling, and conflict detection
- Web search configuration — real-time internet retrieval, information summarization, and intelligent judgment
- Browser capabilities — web page access, content extraction, screenshots, and basic interactions

---

## From "Able to Talk" to "Able to Act"
Over the first three days, we built the assistant's framework, set its personality, and optimized conversations—enabling smooth natural language interaction. But essentially, it still remains at the "passive response" stage: you ask a question, it answers, with no access to your actual digital scenarios.

Today's core goal: **Deeply integrate your assistant into your digital life**.
Reading emails and filtering key points, checking calendars and scheduling meetings, searching for information and creating summaries, opening web pages and extracting content—these tasks that once required switching between multiple apps and spending lots of time can now be fully completed by the assistant with just one sentence.

This is the fundamental leap from a "toy" to a "productivity tool": what used to take 10 minutes of multi-app operations now takes just 10 seconds.

---

## Core Concept: Skills System
All extended capabilities in OpenClaw are implemented through **Skills**.

▸ Plain language explanation: Each Skill is equivalent to an app on your phone — install an app, and your phone gains a new function; configure a Skill, and your AI assistant unlocks a practical ability.
▸ Technical essence: A Skill is a preset configuration script and interface protocol that defines how the assistant connects to external services, data interaction rules, and task execution logic.

### Today's Core Skills List
| Skill Name | Core Capabilities | High-Frequency Use Cases |
|------------|-------------------|--------------------------|
| **Gmail** | Email reading/searching/filtering/sending | "Help me filter today's high-priority emails that need a reply" |
| **Google Calendar** | Schedule viewing/creating/modifying/conflict detection | "Schedule a product meeting for 3 PM next Wednesday and check for time conflicts" |
| **Web Search** | Real-time internet retrieval/information summarization/comparative analysis | "React 19 core updates and practical examples" |
| **Browser** | Web page access/content extraction/screenshots/basic interactions | "Extract and compare pricing package information from the official website of AI face swap competitors" |

---

## Connecting Gmail 📧
(5-minute quick setup, achievable for beginners)

### Step 1: Create a Google Cloud Project and Enable APIs
1. Visit the [Google Cloud Console](https://console.cloud.google.com) and log in with your target Gmail account;
2. Click "Select a project" at the top → "New Project", customize the project name (e.g., "My AI Assistant"), then switch to the project after creation;
3. Navigate to "APIs & Services → Library" in the left menu, search for and enable the following APIs:
   - Gmail API
   - Google Calendar API (enable in advance for direct reuse in calendar configuration later)

> 💡 Pro Tip: When enabling APIs, make sure the top project is the one you just created to avoid authorization failures due to wrong selection.

### Step 2: Create OAuth Authorization Credentials (Core Step)
This step generates "authorized credentials for the assistant to legally access your Google account". Follow these steps:
1. In the left menu, go to "APIs & Services → Credentials" → click "Create Credentials → OAuth client ID" at the top;
2. You need to configure the "OAuth consent screen" for the first time:
   - Select "External" as the user type → click "Create";
   - Fill in only the required * fields: App name, User support email, Developer contact email, leave others blank, then click "Save and Continue";
   - In the "Test users" section: click "Add Users" and enter your Gmail address (required, otherwise authorization errors will occur later), then save;
3. Return to the "Create OAuth client ID" page, select "Desktop app" as the application type, customize the name, and click "Create";
4. After successful creation, a credential window will pop up — click "Download JSON" and rename the file to `credentials.json`;
5. Place the file in the OpenClaw working directory: `~/clawd/credentials.json` (non-technical users can send the file to the AI assistant for help with placement).

### Step 3: One-Click Installation of Gmail Skill
OpenClaw has a built-in skill marketplace — complete installation with one command:
```bash
clawdhub install gog
```
> 💡 Key Note: `gog` is the Google Workspace suite skill, including Gmail + Google Calendar + Google Drive — no need to install them separately.

### Step 4: Authorization and Testing
When calling Gmail functions for the first time, the system will automatically open a browser authorization link. Follow the prompts to log in to your Google account and complete authorization; after successful authorization, `token.json` (a login-free credential, do not disclose) will be automatically generated in the working directory.

#### Test Command (Send to Telegram Assistant)
> Help me filter today's new Gmail emails and only list important content that requires my reply

#### Expected Response Example
> 📧 Today's New Email Summary (8 total):
> 1. 【Urgent】Client Collaboration Reply - Need to confirm next week's project delivery time (reply recommended within 1 hour)
> 2. GitHub Notification - 2 project PRs pending review (deadline: 18:00 today)
> 3. Server Provider - Monthly bill generated (need to verify the amount)
> The remaining 4 are subscription/promotional emails, automatically categorized as "Low Priority"

### Best Practices for Beginners
Configure scheduled email processing rules: For example, at 8 AM every day, the assistant automatically filters the inbox, only pushes high-priority emails (requiring manual reply/processing), and automatically archives and categorizes other emails — saving significant time on email management.

---

## Connecting Google Calendar 📅
No additional configuration needed! Since Calendar shares the same Google OAuth authorization system as Gmail, and the Calendar API was enabled in Step 1, it can be used directly.

### Basic Function Testing
#### Command 1: Query Schedule
> What's on my schedule for tomorrow?

#### Expected Response
> 📅 Schedule for July 19th (Saturday):
> - 10:00-11:00 Product Discussion Meeting (meeting link attached: xxx)
> - 14:30 Offline Appointment (Reminder: Bring ID/relevant documents)
> - No other arrangements for the rest of the day — time available for deep work

#### Command 2: Create Schedule
> Create a meeting titled "AI Meme Content Strategy Discussion" for 3 PM next Wednesday, lasting 1 hour, with participant creator@example.com, generate a meeting link and send the invitation

#### Expected Response
> ✅ Schedule Created Successfully:
> - Time: July 23rd (Wednesday) 15:00-16:00
> - Topic: AI Meme Content Strategy Discussion
> - Participant: creator@example.com (invitation email sent)
> - Meeting Link: xxx (filled in the schedule details)
> Do you need to add a "15-minute advance reminder"?

#### Command 3: Conflict Detection
> Create a meeting for 3 PM next Wednesday (Note: There is already a "Client Call" scheduled for this time slot)

#### Expected Response
> ⚠️ Time Conflict Alert:
> There is already a "Client Call" scheduled for 15:00-16:00 on July 23rd. Would you like to reschedule the new meeting to start at 16:30?

---

## Configuring Web Search 🔍
Solve the problem of AI information lag and enable the assistant to access real-time information across the web (Brave Search API is recommended for beginners — no special network required, high privacy).

### Configuration Steps (3 Steps to Complete)
1. Visit the [Brave Search API official website](https://brave.com/search/api) and register for a free account;
2. Create an API Key in the console, copy it and save it securely;
3. Execute the configuration command in the terminal and paste the API Key as prompted:
   ```bash
   openclaw configure --section web
   ```
   (Configuration will be automatically written to files — no need to modify code manually)

### Test Command
> Search for "Kirkify.net 2025 core features, pricing, and analysis of mainstream competitors"

#### Expected Response
> 🔍 Search Results Summary (Real-time data as of 2025-12-23):
> 1. **Kirkify.net Core Positioning**:
>    A popular AI meme generation tool in Europe and America, focusing on "Kirkification" neon-style face swapping, adapted for satirical meme creation on TikTok/X/Threads platforms. It went viral on overseas social media in September 2025.
> 2. **Core Features**:
>    - AI face swapping for images/videos, supporting PNG/JPG/WEBP/MP4 formats (up to 8MB)
>    - Pre-set neon style templates, automatic AI satire tag addition, compliant disclosure watermarks
>    - Tiered queue processing, with priority access for paid users
> 3. **Pricing Structure**:
>    - Free Plan: $0, 1 SD render, watermarked, no commercial rights, slowest queue
>    - Bronze Package: $7.99 for 15 uses, HD without watermarks, priority queue, 90-day validity
>    - Silver Subscription: $9.99/month, 100 uses/month, HD/UHD without watermarks, basic commercial rights
>    - Gold Subscription: $24.99/month, 300 uses/month, video face swap support, full commercial rights
> 4. **Main Competitors**:
>    - FaceSwap Lab (faceswaplab.ai): Leading AI face swap tool in Europe and America, supporting multi-platform templates, higher free quota, focusing on general face swap scenarios
>    - SwapFace (swapface.org): Local + cloud dual-mode, stronger video face swap capabilities, lower subscription pricing
>    - FaceSwapper (faceswapper.ai): One-click face swap, usable without an account, suitable for quickly generating simple memes

---

## Unlocking Browser Capabilities 🌐
OpenClaw has a built-in browser skill based on Playwright, which is automatically configured during installation — no additional operations needed, ready to use directly.

### Basic Usage
#### Command 1: Web Page Content Extraction
> Visit https://kirkify.net and extract the core positioning, core features, and pricing package details from the homepage

#### Expected Response
> 🌐 Web Page Access Results (Latest data as of 2025-12-23):
> - Core Positioning: Kirkify AI meme generator, focusing on TikTok-viral "Kirkification" neon-style AI face swapping, designed specifically for satirical meme creation of public figures
> - Core Features:
>   1. Drag-and-drop image/video upload, supporting PNG/JPG/WEBP/MP4 (max 8MB)
>   2. One-click generation of face swap memes with neon templates, automatic addition of AI satire compliance tags
>   3. 4-step workflow: Upload → Queue → Swap → Deliver, supporting real-time queue status viewing
>   4. Community work showcase, meme creation compliance guidelines, platform policy adaptation tutorials
> - Pricing Package Details:
>   | Package | Price | Core Benefits |
>   |---------|-------|---------------|
>   | Free Trial | $0 one-time | 1 SD render, watermarked, no commercial rights, slowest queue |
>   | Bronze Pay-as-you-go | $7.99 for 15 uses | HD without watermarks, priority queue, high-fidelity model, 90-day validity |
>   | Silver Monthly Subscription | $9.99/month | 100 uses/month, HD/UHD without watermarks, priority processing, basic commercial rights |
>   | Gold Professional Subscription | $24.99/month | 300 uses/month, video face swap support, UHD ultra-clear, full commercial rights |
> - Page Status: Loaded normally, good mobile adaptation, screenshot saved to ~/clawd/screenshots/kirkify_20251223.png

#### Command 2: Competitor Comparative Analysis
> Open the pricing page of faceswaplab.ai, extract all package information, conduct a detailed side-by-side comparison with kirkify.net, and analyze the advantages and disadvantages of each

### Advanced Application Scenarios
1. Competitor Monitoring: Real-time tracking of pricing/feature updates of competitors like faceswaplab.ai and swapface.org, with automatic alerts for changes;
2. Data Scraping: Regularly capture trending Kirkify meme trends on TikTok/X platforms, extract creative directions and push them;
3. Automated Operations: Log in to the creator backend, extract video performance data, and generate weekly operation reports;
4. Form Processing: Automatically fill out meme platform submission forms and submit works, replacing repetitive mechanical operations.

---

## Security Protection 🔐
After integrating email/calendar/browser, the assistant can access core private data — strictly follow these security rules:

### 1. Security Audit Commands (Mandatory Execution)
```bash
# Basic Check: Inspect common configuration vulnerabilities
openclaw security audit

# Deep Audit: Cover all dimensions of permissions/keys/network/logs
openclaw security audit --deep

# Auto-Fix: Fix detected common security issues (execute after audit)
openclaw security audit --fix
```

### 2. Key/Credential Security
- Never commit API Keys, `credentials.json`, or `token.json` to Git repositories;
- Prioritize storing keys in environment variables/.env files to avoid plaintext in configurations;
- Rotate keys regularly (recommended every 3 months) to reduce leakage risks;
- Set minimal permissions for sensitive files: `chmod 600 ~/clawd/token.json`.

### 3. Principle of Least Privilege
Only grant the assistant "necessary permissions":
- If only email reading is needed → disable "send email" permissions;
- If only calendar viewing is needed → disable "modify/delete schedule" permissions.

### 4. Network Security
- Enable the firewall on the server and only expose necessary ports;
- Disable password authentication for SSH login, allow only key-based login;
- Regularly update the system: `sudo apt update && sudo apt upgrade`.

### 5. Behavioral Boundary Definition
Clearly define in `SOUL.md` and `AGENTS.md`:
- Operations that require manual confirmation before execution (e.g., sending emails/modifying schedules);
- Sensitive data types prohibited from external sharing (e.g., ID/bank card information);
- Risky requests to reject directly (e.g., accessing illegal websites/modifying system configurations).

> 💡 Security Core: Do not store API Keys in repositories, minimize Token permissions, and define clear behavioral boundaries — this avoids 99% of privacy leakage risks.

---

## 🔑 Key Takeaways from This Chapter
1. Skills System: Skills are the "ability plugins" for the assistant — install one to unlock a practical function;
2. Gmail Configuration: OAuth authorization + `gog` skill enable intelligent email management;
3. Calendar Integration: Reuse Google authorization for natural language schedule management + conflict detection;
4. Web Search: One-click configuration of Brave Search API for real-time internet information summarization;
5. Browser Capabilities: Built-in Playwright supports web access/extraction/screenshots/automation;
6. Security Principles: Prevent key leakage, minimize permissions, and conduct regular audits.

---

## Today's Achievements 🎉
Congratulations on completing your assistant's "productivity upgrade":
- ✅ Integrated Gmail for intelligent email filtering/replying;
- ✅ Integrated Google Calendar for natural language schedule management;
- ✅ Configured web search to unlock real-time information retrieval capabilities;
- ✅ Enabled browser skills to support web automation operations;
- ✅ Mastered core security rules to protect private data.

---

## Next Chapter Preview: Hour 4 — Unlock the Complete Skill Tree
>Gmail, Calendar, Search, and Browser are just the basics! OpenClaw has a vast skill ecosystem: SEO analysis, social media management, code review, PDF parsing, database queries, automated workflows……
>Next chapter, we'll show you how to navigate the skill marketplace and turn your assistant into a "full-featured personal assistant".

Next Chapter 👉 [Hour 4: Unlock the Skill Tree](/en/day/5)