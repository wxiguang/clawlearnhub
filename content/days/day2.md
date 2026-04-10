---
title: "Hour 1: 10 分钟，搭建你的专属 AI 助手"
day: 1
description: "OpenClaw 5 小时极速自学教程 - 10 分钟，搭建你的专属 AI 助手"
---

> *“💡 别被"安装"吓倒！只要你会装手机APP，这份教程就能轻松搞定——全程复制命令即可，零基础也能上手 🚀“*

---

## 📖 本章导读

![搭建你的专属 AI 助手](/images/days/day2/day2-hero.png)

本节你将完成：
- 选择AI助手的运行环境（云服务器/本地设备）
- 一行命令安装OpenClaw并完成自动配置
- 获取AI模型API Key与Telegram Bot Token
- 打通Telegram聊天渠道，发送第一条对话指令

![本章流程总览](/images/days/day2/overview-flow.gif)
*动画演示：从环境准备到首次对话的完整流程总览，建议尺寸1200×600，时长15秒内*

## 🎯 核心目标
在自有设备上部署OpenClaw，实现手机端与专属AI助手的首次对话。
这不是平台共用的机器人，而是**完全归你所有、运行在你的设备上**的私人AI助手。

## 🖥️ 选择运行环境
首先为你的AI助手选择"常驻空间"，三种方案按需选择：

### 方案A：云服务器（推荐）
适合无闲置电脑、需要助手7×24小时在线的场景，月成本约10美元。
- ✅ 优点：全天候在线、不占用本地资源、无惧断电
- 📋 推荐配置：

| 配置项 | 推荐值 |
|--------|--------|
| 操作系统 | Ubuntu 22.04 LTS |
| CPU | 2核 |
| 内存 | 4GB |
| 硬盘 | 40GB SSD |
| 参考价格 | Hetzner ≈ $5/月、AWS Lightsail ≈ $5/月、腾讯云 ≈ ¥30/月 |

![云服务器选购参考](/images/days/day2/cloud-server-select.gif)
*动画演示：主流云平台的服务器选购页面操作，标注推荐配置选项，建议尺寸800×500，时长10秒内*

### 方案B：闲置本地设备（Mac Mini/旧笔记本）
- ✅ 优点：零额外成本、数据本地存储更安全
- ❌ 缺点：断电即下线，需保持设备开机

### 方案C：当前使用的电脑（体验试用）
- ✅ 优点：零门槛、立即上手
- ❌ 缺点：设备关机则助手停止运行，仅适合短期试用

> 💡 建议：仅需一顿快餐的成本，云服务器就能带来全天候的AI助手服务，是性价比最高的选择。

## 📋 前置准备
### 1. 环境预处理
#### Mac用户
若未安装Homebrew，先执行以下命令：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
![Homebrew安装执行演示](/images/days/day2/homebrew-install.gif)
*动画演示：Mac终端执行Homebrew安装命令的完整过程，建议尺寸800×300，时长8秒内*

#### Windows用户
需先安装WSL2（Linux子系统），以管理员身份打开PowerShell执行：
```powershell
wsl --install
```
![WSL2安装执行演示](/images/days/day2/wsl-install.gif)
*动画演示：Windows管理员PowerShell执行WSL安装命令的过程，建议尺寸800×300，时长8秒内*

详细步骤参考[微软官方WSL安装指南](https://docs.microsoft.com/zh-cn/windows/wsl/install)

### 2. 关键凭证准备（配置向导需用）
| 凭证名称 | 获取方式 |
|----------|----------|
| AI模型API Key | 1. Anthropic：访问[console.anthropic.com](https://console.anthropic.com)创建（按量付费）<br>2. OpenRouter：访问[openrouter.ai](https://openrouter.ai)注册并验证邮箱，在仪表盘创建Token（多模型聚合，免费额度满足入门） |
| Telegram Bot Token | 打开Telegram，通过@BotFather创建Bot获取（下文附详细步骤） |
| Telegram用户ID | 打开Telegram，通过@userinfobot获取（用于设置管理员权限） |

![API Key创建演示](/images/days/day2/api-key-create.gif)
*动画演示：Anthropic控制台创建API Key的完整步骤，建议尺寸1000×600，时长12秒内*

## 🤖 创建Telegram Bot
### 步骤1：生成Bot Token
1. 打开Telegram，搜索并关注`@BotFather`
2. 发送指令`/newbot`，按提示完成以下操作：
   - 输入Bot名称（自定义，如MyAIassistant）
   - 输入Bot用户名（必须以`bot`结尾，如my_ai_assistant_bot）
3. 创建成功后，BotFather会返回类似以下格式的Token，**务必复制保存**：
   ```
   73564xxxxx:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

![Telegram Bot创建全流程](/images/days/day2/telegram-bot-create.gif)
*核心动画：完整演示从搜索@BotFather、发送/newbot、填写名称、获取Token的全过程，建议尺寸400×800（手机竖屏比例），时长20秒内，新手核心参考*

### 步骤2：获取个人用户ID
1. 在Telegram中搜索并关注`@userinfobot`
2. 发送任意消息，机器人会返回你的数字ID（如123456789），**记录备用**

![Telegram用户ID获取演示](/images/days/day2/telegram-user-id.gif)
*动画演示：搜索@userinfobot、发送消息、获取用户ID的全过程，建议尺寸400×600，时长8秒内*

## ⚠️ 重要提示
> 用户ID用于设置管理员权限，仅指定ID可与助手对话，防止API额度被滥用。

### 补充说明
OpenClaw支持20+消息渠道（WhatsApp、微信、iMessage等），可同时配置多个渠道；Telegram是入门首选，功能最完善、配置最简洁。

## ⚡ 一键安装 + 自动配置
### 方式1：一键安装（推荐，懒人首选）
#### macOS/Linux用户（终端操作）
1. 打开终端（Mac：Launchpad搜索「终端」；Linux：快捷键Ctrl+Alt+T）
2. 复制以下命令并执行：
   ```bash
   curl -fsSL https://openclaw.ai/install.sh | bash
   ```
3. 等待3-5分钟，看到「安装成功」提示即可

![Linux/Mac一键安装执行演示](/images/days/day2/onekey-install-linux.gif)
*核心动画：终端执行安装命令、脚本自动跑依赖、安装完成的全过程，标注关键进度节点，建议尺寸1000×500，时长15秒内*

#### Windows用户（PowerShell操作）
1. 右键开始菜单，选择「终端(管理员)」
2. 复制以下命令并执行：
   ```powershell
   iwr -useb https://openclaw.ai/install.ps1 | iex
   ```
3. 弹出安全提示时输入`Y`确认，等待安装完成

![Windows一键安装执行演示](/images/days/day2/onekey-install-windows.gif)
*动画演示：管理员PowerShell执行安装命令、安全确认、安装完成的全过程，建议尺寸1000×500，时长12秒内*

## 🛠️ 配置向导指引
安装完成后自动进入交互式配置向导，按提示完成以下步骤：

![OpenClaw配置向导全流程](/images/days/day2/config-wizard-flow.gif)
*核心动画：完整演示配置向导的6个核心步骤，标注每一步的推荐选项，新手跟着动画操作零出错，建议尺寸1000×600，时长30秒内*

### 步骤1：选择配置模式
- 新手推荐选择`QuickStart`（快速配置）
- 进阶用户可选择`Advanced`（自定义配置）

### 步骤2：选择AI模型
推荐优先选择Claude，接入方式三选一：
- 有Claude订阅：选`setup-token`（无需API Key，无额外费用）
- 使用Anthropic的API：选`Anthropic API Key`（按量付费）
- 使用OpenRouter的API：选`OpenRouter API Key`（多模型兼容，免费额度充足）

> 💡 支持的模型列表（2024新版）：Anthropic Claude 3.5 Sonnet（推荐）、OpenAI GPT-4o、Google Gemini 1.5 Pro、Moonshot Kimi 3.0、MiniMax M3、智谱GLM-4、字节云雀、DeepSeek R1、xAI Grok 2等15+模型。

### 步骤3：配置聊天渠道
选择`Telegram`，粘贴之前获取的Bot Token，向导会自动验证Token有效性。

### 步骤4：设置管理员
输入你的Telegram用户ID，支持批量添加多个管理员ID（用英文逗号分隔）。

### 步骤5：安装后台守护进程
选择`Yes`，实现助手后台运行、开机自启：
- Linux：自动创建systemd用户服务
- Mac：自动创建LaunchAgent
- Windows(WSL2)：自动配置systemd兼容服务

### 步骤6：健康检查与技能安装
向导最后会启动Gateway、执行健康检查，并提示安装推荐技能（如天气查询、代码解释、文档总结），按需选择即可。

> 📝 全程无需手动编辑配置文件，跟着提示操作3-5分钟即可完成。

## 🚀 验证助手运行状态
配置完成后，执行以下命令检查Gateway状态：
```bash
openclaw gateway status
```
若显示「Gateway正在运行」，说明部署成功。

![助手状态检查演示](/images/days/day2/openclaw-status-check.gif)
*动画演示：终端执行状态检查命令、返回运行成功结果的全过程，建议尺寸800×300，时长5秒内*

## 💬 发送第一条消息
1. 打开Telegram，找到你创建的Bot
2. 发送消息（如「你好！你是谁？」）
3. 等待几秒，即可收到AI助手的回复

![首次对话完整演示](/images/days/day2/first-chat-demo.gif)
*核心动画：手机端打开Bot、发送消息、收到AI回复的全过程，直观展示最终效果，建议尺寸400×800（手机竖屏），时长10秒内*

> 🌟 这一刻，你拥有了运行在自有设备上的专属AI助手——它不是平台套壳，而是完全属于你的工具。

可以尝试这些测试指令：
- "帮我写一首关于猫的诗"
- "1024的平方根是多少？"
- "用Python写一个快速排序算法，并解释代码逻辑"
- "帮我总结OpenClaw的核心功能"

## ⚙️ 日常管理命令
| 命令 | 功能 |
|------|------|
| `openclaw status` | 查看OpenClaw整体运行状态 |
| `openclaw gateway status` | 查看Gateway服务状态 |
| `openclaw health` | 执行全维度健康检查（模型/渠道/权限） |
| `openclaw configure` | 交互式修改指定配置项 |
| `openclaw daemon restart` | 重启后台守护进程 |
| `openclaw daemon logs` | 实时查看运行日志（按Ctrl+C退出） |
| `openclaw onboard` | 重新运行完整配置向导 |
| `openclaw update` | 升级OpenClaw到最新版本 |

![常用命令执行演示](/images/days/day2/common-commands-demo.gif)
*动画演示：核心管理命令的执行效果，标注每个命令的作用，建议尺寸800×400，时长15秒内*

## 🚨 常见问题排查
### 问题1：安装脚本报错（Node.js版本过低）
OpenClaw要求Node.js 22+，检查版本：
```bash
node -v
```
若版本不足，手动升级：
```bash
# 安装nvm（Node版本管理器）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# 刷新环境变量
source ~/.bashrc
# 安装Node.js 22
nvm install 22
# 设置默认版本
nvm alias default 22
```

![Node.js版本升级演示](/images/days/day2/nodejs-upgrade.gif)
*动画演示：终端执行版本检查、升级命令的全过程，建议尺寸800×300，时长10秒内*

### 问题2：Telegram Bot无回复
1. 验证Bot Token是否正确：`openclaw configure telegram.token`
2. 确认用户ID已加入管理员列表：`openclaw configure admin.ids`
3. 查看实时日志排查问题：`openclaw daemon logs`
4. 验证API Key有效性及余额（访问对应模型平台控制台）
5. 首次对话配对授权（新版优化）：
   ```bash
   openclaw pairing list telegram
   openclaw pairing approve telegram <配对码>
   ```
6. 重启Gateway服务：`openclaw gateway restart`

### 问题3：重新配置助手
随时可重新运行配置向导：
```bash
openclaw onboard
```
或仅修改指定配置（如更换AI模型）：
```bash
openclaw configure model.provider
```

### 问题4：安装后命令找不到（Windows/WSL2）
执行以下命令添加环境变量：
```bash
echo 'export PATH="$HOME/.openclaw/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

## 🔑 本章核心要点
- 一行命令完成安装：`curl ... | bash`（Linux/Mac）或`iwr ... | iex`（Windows）
- 配置全程向导化：模型选择、凭证填写、权限设置一键完成
- 安全优先：通过用户ID限制访问，防止API滥用
- 后台自动运行：守护进程实现7×24小时在线
- 版本可升级：支持`openclaw update`一键更新到最新版
- 下一步：为助手注入专属「灵魂」，从通用AI变成「你的AI」

## 🎉 今日成就
✅ 选定运行环境（云服务器/本地设备）
✅ 一键安装OpenClaw并完成环境校验
✅ 配置AI模型凭证与Telegram Bot
✅ 实现与专属AI助手的首次对话
✅ 配置后台服务实现7×24小时运行
✅ 掌握核心管理命令与问题排查方法

## 📌 下章预告：Hour 3 — 给助手一个灵魂
通过SOUL.md（性格定义）、USER.md（个人画像）、IDENTITY.md（身份设定）三个文件，自定义AI助手的说话风格、知识储备、行为模式，让你的AI助手从「通用工具」变成独一无二的专属角色。

下一章 👉 [Hour 3: 给助手一个灵魂](/zh/day/3)

> ⏰ 友情提示：从「安装完成」到「能用起来」仅需一次回车。10分钟就能拥有专属AI助手，现在就行动吧！
> 📞 遇到问题？可通过OpenClaw官方Telegram群获取实时支持：[@openclaw_community](https://t.me/openclaw_community)