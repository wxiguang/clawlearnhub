---
title: "Hour 1: Build Your Exclusive AI Assistant in 10 Minutes"
day: 1
description: "OpenClaw 5-Hour Rapid Self-Learning Course - Build Your Exclusive AI Assistant in 10 Minutes"
---
> *“💡 Don't be intimidated by 'installation'! If you can install a mobile app, you can easily follow this tutorial — just copy and paste commands the whole way, no experience needed 🚀”*
---
## 📖 Chapter Overview

![搭建你的专属 AI 助手](/images/days/day2/day2-hero.png)

In this section, you will complete:
- Choose a runtime environment for your AI assistant (cloud server/local device)
- Install OpenClaw with one command and finish automatic configuration
- Get your AI model API Key and Telegram Bot Token
- Connect the Telegram chat channel and send your first conversation command

![Chapter workflow overview](/images/days/day2/overview-flow.gif)
*Animation: Full workflow from environment preparation to first conversation, recommended size 1200×600, duration under 15 seconds*

## 🎯 Core Objective
Deploy OpenClaw on your own device, and complete the first conversation with your exclusive AI assistant on your mobile phone.
This is not a shared platform bot, but a **private AI assistant fully owned by you and running on your device**.

## 🖥️ Choose Runtime Environment
First, select a "permanent space" for your AI assistant, choose one of the three options as needed:

### Option A: Cloud Server (Recommended)
Ideal for users without a spare computer, who need the assistant to stay online 24/7, with a monthly cost of around $10.
- ✅ Advantages: Online around the clock, no local resource usage, immune to power outages
- 📋 Recommended Configuration:
| Configuration Item | Recommended Value |
|--------|--------|
| Operating System | Ubuntu 22.04 LTS |
| CPU | 2 cores |
| Memory | 4GB |
| Storage | 40GB SSD |
| Reference Price | Hetzner ≈ $5/month, AWS Lightsail ≈ $5/month, Tencent Cloud ≈ ¥30/month |

![Cloud server selection reference](/images/days/day2/cloud-server-select.gif)
*Animation: Server purchase page operation on mainstream cloud platforms, with recommended configuration options marked, recommended size 800×500, duration under 10 seconds*

### Option B: Spare Local Device (Mac Mini/Old Laptop)
- ✅ Advantages: Zero extra cost, more secure local data storage
- ❌ Disadvantages: Goes offline when power is cut, requires the device to stay on

### Option C: Current In-Use Computer (Trial Experience)
- ✅ Advantages: Zero threshold, get started immediately
- ❌ Disadvantages: Assistant stops running when the device shuts down, only suitable for short-term trial

> 💡 Tip: For the cost of a fast food meal, a cloud server can deliver an around-the-clock AI assistant service, making it the most cost-effective choice.

## 📋 Preparations
### 1. Environment Preprocessing
#### For Mac Users
If Homebrew is not installed, run the following command first:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
![Homebrew installation execution demo](/images/days/day2/homebrew-install.gif)
*Animation: Full process of executing the Homebrew installation command in Mac terminal, recommended size 800×300, duration under 8 seconds*

#### For Windows Users
You need to install WSL2 (Linux Subsystem) first. Open PowerShell as Administrator and run:
```powershell
wsl --install
```
![WSL2 installation execution demo](/images/days/day2/wsl-install.gif)
*Animation: Process of executing the WSL installation command in Windows Administrator PowerShell, recommended size 800×300, duration under 8 seconds*

For detailed steps, refer to the [Official Microsoft WSL Installation Guide](https://docs.microsoft.com/en-us/windows/wsl/install)

### 2. Key Credential Preparation (Required for Configuration Wizard)
| Credential Name | How to Obtain |
|----------|----------|
| AI Model API Key | 1. Anthropic: Visit [console.anthropic.com](https://console.anthropic.com) to create (pay-as-you-go)<br>2. OpenRouter: Visit [openrouter.ai](https://openrouter.ai), register and verify your email, create a Token in the dashboard (multi-model aggregation, free quota meets entry-level needs) |
| Telegram Bot Token | Open Telegram, create a Bot via @BotFather to obtain (detailed steps below) |
| Telegram User ID | Open Telegram, obtain via @userinfobot (used to set administrator permissions) |

![API Key creation demo](/images/days/day2/api-key-create.gif)
*Animation: Full steps to create an API Key in the Anthropic console, recommended size 1000×600, duration under 12 seconds*

## 🤖 Create Telegram Bot
### Step 1: Generate Bot Token
1. Open Telegram, search for and follow `@BotFather`
2. Send the command `/newbot`, and complete the following operations as prompted:
   - Enter the Bot name (customizable, e.g., MyAIassistant)
   - Enter the Bot username (must end with `bot`, e.g., my_ai_assistant_bot)
3. After successful creation, BotFather will return a Token in the following format. **Be sure to copy and save it**:
   ```
   73564xxxxx:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

![Full Telegram Bot creation process](/images/days/day2/telegram-bot-create.gif)
*Core animation: Full demo from searching @BotFather, sending /newbot, filling in the name, to obtaining the Token, recommended size 400×800 (mobile vertical screen ratio), duration under 20 seconds, core reference for beginners*

### Step 2: Get Your Personal User ID
1. Search for and follow `@userinfobot` in Telegram
2. Send any message, and the bot will return your numeric ID (e.g., 123456789). **Record it for later use**

![Telegram user ID acquisition demo](/images/days/day2/telegram-user-id.gif)
*Animation: Full process of searching @userinfobot, sending a message, and obtaining the user ID, recommended size 400×600, duration under 8 seconds*

## ⚠️ Important Note
> The user ID is used to set administrator permissions. Only specified IDs can chat with the assistant to prevent API quota abuse.

### Additional Notes
OpenClaw supports over 20 messaging channels (WhatsApp, WeChat, iMessage, etc.), and multiple channels can be configured at the same time. Telegram is the top choice for beginners, with the most complete functions and the simplest configuration.

## ⚡ One-Click Installation + Automatic Configuration
### Method 1: One-Click Installation (Recommended, Top Choice for Beginners)
#### For macOS/Linux Users (Terminal Operation)
1. Open the terminal (Mac: Search for "Terminal" in Launchpad; Linux: Shortcut Ctrl+Alt+T)
2. Copy and run the following command:
   ```bash
   curl -fsSL https://openclaw.ai/install.sh | bash
   ```
3. Wait 3-5 minutes until you see the "Installation Successful" prompt

![Linux/Mac one-click installation execution demo](/images/days/day2/onekey-install-linux.gif)
*Core animation: Full process of executing the installation command in the terminal, the script automatically running dependencies, and completing the installation, with key progress nodes marked, recommended size 1000×500, duration under 15 seconds*

#### For Windows Users (PowerShell Operation)
1. Right-click the Start menu and select "Terminal (Administrator)"
2. Copy and run the following command:
   ```powershell
   iwr -useb https://openclaw.ai/install.ps1 | iex
   ```
3. Enter `Y` to confirm when the security prompt pops up, and wait for the installation to complete

![Windows one-click installation execution demo](/images/days/day2/onekey-install-windows.gif)
*Animation: Full process of executing the installation command in Administrator PowerShell, security confirmation, and installation completion, recommended size 1000×500, duration under 12 seconds*

## 🛠️ Configuration Wizard Guide
After the installation is complete, you will automatically enter the interactive configuration wizard. Complete the following steps as prompted:

![Full OpenClaw configuration wizard process](/images/days/day2/config-wizard-flow.gif)
*Core animation: Full demo of the 6 core steps of the configuration wizard, with recommended options for each step marked. Beginners can follow the animation to operate with zero errors, recommended size 1000×600, duration under 30 seconds*

### Step 1: Select Configuration Mode
- For beginners, we recommend selecting `QuickStart`
- Advanced users can select `Advanced` (custom configuration)

### Step 2: Select AI Model
We recommend choosing Claude first, with three access options:
- With Claude subscription: Select `setup-token` (no API Key required, no extra cost)
- Using Anthropic API: Select `Anthropic API Key` (pay-as-you-go)
- Using OpenRouter API: Select `OpenRouter API Key` (multi-model compatible, sufficient free quota)

> 💡 Supported Model List (2024 New Version): Anthropic Claude 3.5 Sonnet (Recommended), OpenAI GPT-4o, Google Gemini 1.5 Pro, Moonshot Kimi 3.0, MiniMax M3, Zhipu GLM-4, ByteDance Skylark, DeepSeek R1, xAI Grok 2, and more than 15 other models.

### Step 3: Configure Chat Channel
Select `Telegram`, paste the Bot Token you obtained earlier, and the wizard will automatically verify the Token's validity.

### Step 4: Set Administrators
Enter your Telegram user ID. Batch adding multiple administrator IDs is supported (separated by English commas).

### Step 5: Install Background Daemon
Select `Yes` to enable the assistant to run in the background and start automatically on boot:
- Linux: Automatically creates a systemd user service
- Mac: Automatically creates a LaunchAgent
- Windows(WSL2): Automatically configures a systemd-compatible service

### Step 6: Health Check and Skill Installation
At the end of the wizard, it will start the Gateway, perform a health check, and prompt you to install recommended skills (such as weather query, code interpretation, document summarization). You can select as needed.

> 📝 No manual editing of configuration files is required throughout the process. It can be completed in 3-5 minutes by following the prompts.

## 🚀 Verify Assistant Running Status
After configuration, run the following command to check the Gateway status:
```bash
openclaw gateway status
```
If it shows "Gateway is running", the deployment is successful.

![Assistant status check demo](/images/days/day2/openclaw-status-check.gif)
*Animation: Full process of executing the status check command in the terminal and returning a successful running result, recommended size 800×300, duration under 5 seconds*

## 💬 Send Your First Message
1. Open Telegram and find the Bot you created
2. Send a message (e.g., "Hello! Who are you?")
3. Wait a few seconds, and you will receive a reply from the AI assistant

![Full first conversation demo](/images/days/day2/first-chat-demo.gif)
*Core animation: Full process of opening the Bot on mobile, sending a message, and receiving an AI reply, intuitively showing the final effect, recommended size 400×800 (mobile vertical screen), duration under 10 seconds*

> 🌟 At this moment, you have an exclusive AI assistant running on your own device — it is not a platform wrapper, but a tool that fully belongs to you.

You can try these test commands:
- "Write a poem about cats for me"
- "What is the square root of 1024?"
- "Write a quicksort algorithm in Python and explain the code logic"
- "Summarize the core functions of OpenClaw for me"

## ⚙️ Daily Management Commands
| Command | Function |
|------|------|
| `openclaw status` | View the overall running status of OpenClaw |
| `openclaw gateway status` | View the Gateway service status |
| `openclaw health` | Perform a full-dimensional health check (model/channel/permissions) |
| `openclaw configure` | Interactively modify specified configuration items |
| `openclaw daemon restart` | Restart the background daemon process |
| `openclaw daemon logs` | View real-time running logs (press Ctrl+C to exit) |
| `openclaw onboard` | Rerun the full configuration wizard |
| `openclaw update` | Upgrade OpenClaw to the latest version |

![Common command execution demo](/images/days/day2/common-commands-demo.gif)
*Animation: Execution effects of core management commands, with the function of each command marked, recommended size 800×400, duration under 15 seconds*

## 🚨 Common Issue Troubleshooting
### Issue 1: Installation Script Error (Node.js Version Too Low)
OpenClaw requires Node.js 22+. Check the version with:
```bash
node -v
```
If the version is insufficient, upgrade manually:
```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# Refresh environment variables
source ~/.bashrc
# Install Node.js 22
nvm install 22
# Set default version
nvm alias default 22
```
![Node.js version upgrade demo](/images/days/day2/nodejs-upgrade.gif)
*Animation: Full process of executing version check and upgrade commands in the terminal, recommended size 800×300, duration under 10 seconds*

### Issue 2: No Reply from Telegram Bot
1. Verify if the Bot Token is correct: `openclaw configure telegram.token`
2. Confirm the user ID has been added to the administrator list: `openclaw configure admin.ids`
3. View real-time logs to troubleshoot issues: `openclaw daemon logs`
4. Verify the validity and balance of the API Key (visit the corresponding model platform console)
5. First conversation pairing authorization (optimized in the new version):
   ```bash
   openclaw pairing list telegram
   openclaw pairing approve telegram <pairing code>
   ```
6. Restart the Gateway service: `openclaw gateway restart`

### Issue 3: Reconfigure the Assistant
You can rerun the configuration wizard at any time:
```bash
openclaw onboard
```
Or modify only the specified configuration (e.g., change the AI model):
```bash
openclaw configure model.provider
```

### Issue 4: Command Not Found After Installation (Windows/WSL2)
Run the following command to add environment variables:
```bash
echo 'export PATH="$HOME/.openclaw/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

## 🔑 Key Takeaways
- One command to complete installation: `curl ... | bash` (Linux/Mac) or `iwr ... | iex` (Windows)
- Fully wizard-guided configuration: one-stop completion of model selection, credential filling, and permission settings
- Security first: restrict access via user ID to prevent API abuse
- Automatic background running: daemon process enables 24/7 online operation
- Version upgradeable: support one-click update to the latest version with `openclaw update`
- Next step: inject an exclusive "soul" into the assistant, turning it from a general AI into "your AI"

## 🎉 Today's Achievements
✅ Selected runtime environment (cloud server/local device)
✅ One-click installed OpenClaw and completed environment verification
✅ Configured AI model credentials and Telegram Bot
✅ Completed the first conversation with your exclusive AI assistant
✅ Configured background service to achieve 24/7 operation
✅ Mastered core management commands and troubleshooting methods

## 📌 Next Chapter Preview: Hour 3 — Give Your Assistant a Soul
Through three files: SOUL.md (personality definition), USER.md (personal profile), and IDENTITY.md (identity setting), customize the speaking style, knowledge reserve, and behavior mode of your AI assistant, turning it from a "general tool" into a unique and exclusive character.

Next Chapter 👉 [Hour 3: Give Your Assistant a Soul](/en/day/3)

> ⏰ Friendly Reminder: From "installation complete" to "up and running" only takes one press of the Enter key. You can have your exclusive AI assistant in 10 minutes, take action now!
> 📞 Having issues? Get real-time support via the official OpenClaw Telegram group: [@openclaw_community](https://t.me/openclaw_community)