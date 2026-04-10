# 🐾 clawlearnhub
修改计划2026.3.12
修改为英文为主，简体中文、繁体中文为辅的网站
增加安全主题模块
增加课程ppt播放模式
增加服务收费介绍页面
修改为龙虾图标
增加关于我们的内容
增加捐献付款图片和按钮
增加各个文件的。md样例
增加赚钱case


明天任务：
1、增加gif图片
2、审核中文版内容
3、上线中文版
4、增加英文版内容
5、增加繁体中文版内容
6、google搜索
7、解决统计信息问题

> 从零开始，7天掌握你的 AI 私人助理 | The open-source guide to OpenClaw

**[🌐 在线访问](https://clawlearnhub.com)** · **[📚 浏览全部资源](https://clawlearnhub.com/resources)** · **[📖 飞书知识库](https://my.feishu.cn/wiki/YkWgwqSchi9xW3kEuZscAm0lnFf)**

---

## ✨ 什么是 clawlearnhub？

clawlearnhub 是一个**开源的 OpenClaw 资源聚合站**，旨在帮助中文用户快速上手 [OpenClaw](https://github.com/openclaw/openclaw) —— 全球最热门的开源 AI 私人助理平台 (136k+ ⭐)。

### 🎯 核心功能

- **📚 资源聚合** — 收录 35+ 篇来自阿里云、腾讯云、DigitalOcean、B站等平台的优质教程
- **📅 7天学习路径** — 从认识到进阶的系统化学习指南（链接飞书知识库）
- **🧩 技能推荐** — 按场景分类的 AI 技能推荐
- **🌍 中英双语** — 同时收录中文和英文资源
- **🔍 筛选搜索** — 按分类、语言、关键词快速找到需要的资源

### 📋 收录来源

| 来源 | 类型 |
|------|------|
| 阿里云 | 钉钉接入、企业微信 AppFlow |
| 腾讯云 | 飞书接入、企业微信接入 |
| DigitalOcean | 一键部署、概览介绍 |
| Hostinger | VPS 部署教程 |
| Codecademy | 结构化安装教程 |
| IBM Think | 深度分析文章 |
| B站 (Bilibili) | 视频教程 |
| 博客园 / CSDN | 飞书/Telegram 对接 |
| Reddit | 完整指南、技能分享 |
| 更多... | 持续收录中 |

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/mengjian-github/openclaw101.git
cd clawlearnhub

# 安装依赖
npm install

# 本地开发
npm run dev

# 构建
npm run build
```

## 📁 项目结构

```
src/
├── app/
│   ├── page.tsx          # 首页
│   ├── resources/
│   │   └── page.tsx      # 资源聚合页
│   ├── layout.tsx        # 全局布局
│   └── globals.css       # 全局样式
├── components/
│   ├── Hero.tsx           # 首屏
│   ├── WhatIs.tsx         # 介绍
│   ├── LearningPath.tsx   # 7天学习路径
│   ├── Skills.tsx         # 技能推荐
│   ├── ResourcesSection.tsx # 首页资源精选
│   ├── Community.tsx      # 社区与贡献
│   ├── Navbar.tsx         # 导航栏
│   └── Footer.tsx         # 页脚
└── data/
    └── resources.ts       # 📚 所有资源数据
```

## 🤝 如何贡献

### 添加新资源

1. Fork 本仓库
2. 编辑 `src/data/resources.ts`
3. 按照现有格式添加资源对象：

```typescript
{
  title: '资源标题',
  desc: '一句话描述',
  url: 'https://...',
  source: '来源名称',
  lang: 'zh',  // 'zh' 或 'en'
  category: 'getting-started',  // 见下方分类
  featured: false,  // 是否推荐
  tags: ['标签1', '标签2'],
}
```

### 资源分类

| 分类 | 说明 |
|------|------|
| `official` | 官方资源 |
| `getting-started` | 入门部署教程 |
| `channel-integration` | 平台接入（飞书/钉钉/Telegram 等） |
| `skill-dev` | 技能开发 |
| `video` | 视频教程 |
| `deep-dive` | 深度分析文章 |
| `tools` | 工具与插件 |
| `cloud-deploy` | 云平台部署教程 |

4. 提交 PR，附上简短说明

### 其他贡献方式

- 🐛 报告 Bug — [创建 Issue](https://github.com/mengjian-github/openclaw101/issues)
- 💡 功能建议 — [创建 Issue](https://github.com/mengjian-github/openclaw101/issues)
- 🌐 改进翻译 — 欢迎 PR
- 📝 改进内容 — 欢迎 PR

## 🛠 技术栈

- [Next.js 14](https://nextjs.org/) — React 框架
- [TypeScript](https://www.typescriptlang.org/) — 类型安全
- [Tailwind CSS](https://tailwindcss.com/) — 样式框架
- [Cloudflare Pages](https://pages.cloudflare.com/) — 部署托管

## 📄 许可证

MIT License — 自由使用、修改和分发。

## 🙏 致谢

- [OpenClaw](https://github.com/openclaw/openclaw) — 开源 AI 助理平台
- [Peter Steinberger](https://github.com/steipete) — OpenClaw 创建者
- 所有教程作者和内容创作者
