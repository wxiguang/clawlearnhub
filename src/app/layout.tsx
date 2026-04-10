import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
// OpenClaw Learn Hub
export const metadata: Metadata = {
  metadataBase: new URL('https://clawlearnhub.com'),
  title: {
    default: 'OpenClaw Learn Hub - Master Your AI Assistant in 5 Hours | Free Tutorial',
    template: '%s | OpenClaw Learn Hub',
  },
  description: 'Free 5-hour tutorial to master OpenClaw (Clawdbot/Moltbot). Learn to build your own AI personal assistant with installation guides, skills, automation, and 70+ curated resources.',
  keywords: [
    'OpenClaw', 'OpenClaw tutorial', 'OpenClaw guide', 'OpenClaw 教程',
    'Clawdbot', 'Moltbot', 'AI assistant', 'AI Agent', 'personal AI',
    'Telegram bot', 'self-hosted AI', 'open source AI', 'AI automation',
    'OpenClaw skills', 'OpenClaw installation', 'OpenClaw setup',
    'AI tutorial', 'AI助理', 'AI私人助手', '开源AI',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'OpenClaw Learn Hub - Master Your AI Assistant in 5 Hours',
    description: 'Free 5-hour tutorial to build your own AI personal assistant with OpenClaw. 70+ curated resources, skills ecosystem, and step-by-step guides.',
    url: 'https://clawlearnhub.com',
    siteName: 'Openclaw Learn Hub',
    images: [
      {
        url: 'https://clawlearnhub.com/og_image.png',
        width: 1200,
        height: 630,
        alt: 'OpenClaw Learn hub - AI Assistant Tutorial',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenClaw Learn hub - Master Your AI Assistant in 5 Hours',
    description: 'Free 5-hour tutorial to build your own AI personal assistant with OpenClaw.',
    images: ['https://clawlearnhub.com/og_image.png'],
  },
  verification: {
    google: 'G-86ESEQC7V8',
  },
  alternates: {
    canonical: 'https://clawlearnhub.com',
    languages: {
      'en': 'https://clawlearnhub.com',
      'zh': 'https://clawlearnhub.com/zh',
    },
  },
};

// Schema.org structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://clawlearnhub.com/#website',
      url: 'https://clawlearnhub.com',
      name: 'OpenClaw Learn hub',
      description: 'The definitive guide to mastering OpenClaw AI assistant',
      inLanguage: ['en', 'zh'],
    },
    {
      '@type': 'Course',
      '@id': 'https://clawlearnhub.com/#course',
      name: 'OpenClaw 5-Hour Tutorial',
      description: 'Learn to build and customize your own AI personal assistant with OpenClaw in 5 Hours',
      provider: {
        '@type': 'Organization',
        name: 'OpenClaw Learn Hub',
        url: 'https://clawlearnhub.com',
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: 'P7D',
      },
      numberOfLessons: 7,
      teaches: ['AI Assistant Setup', 'OpenClaw Configuration', 'Skills Development', 'Automation'],
      isAccessibleForFree: true,
      availableLanguage: ['en', 'zh'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://clawlearnhub.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is OpenClaw?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OpenClaw is an open-source AI agent framework that lets you build a self-hosted personal AI assistant. It connects to services like Telegram, Gmail, Google Calendar, and web browsers, and can execute code, automate tasks, and manage your digital life 24/7. It was formerly known as Clawdbot and Moltbot.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is OpenClaw free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, OpenClaw is fully open-source and free to use. You only pay for the AI model API costs (e.g., Claude ~$3-15/month) and server hosting (~$5-20/month).',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I install OpenClaw?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You need a Linux server (Ubuntu 22.04+ recommended), Node.js 20+, and an API key for your chosen AI model. Clone the repository, run the setup wizard, configure your Telegram bot token, and start the gateway. The Day 2 tutorial at openclaw101.dev/day/2 covers this step by step.',
          },
        },
        {
          '@type': 'Question',
          name: 'What AI models does OpenClaw support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OpenClaw supports Anthropic Claude (recommended), OpenAI GPT-4, Google Gemini, xAI Grok, and any model available through OpenRouter.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can an OpenClaw assistant do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An OpenClaw assistant can manage email, schedule calendar events, browse the web with a real browser, write and execute code, analyze SEO data, create content, monitor websites, automate workflows, and more through its extensible skills system with 5494+ community plugins.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between OpenClaw and ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT is a conversational AI in the cloud. OpenClaw is a framework for building your own AI agent on your server, with persistent memory, real tool access (email, browser, code execution), proactive automation (heartbeats, cron jobs), and full customization. ChatGPT is a chat app; OpenClaw is a personal AI employee.',
          },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://clawlearnhub.com/#tutorial-list',
      name: 'OpenClaw 5 Hours Learning Path',
      numberOfItems: 7,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Day 1: Meet OpenClaw', url: 'https://clawlearnhub.com/day/1' },
        { '@type': 'ListItem', position: 2, name: 'Day 2: Installation', url: 'https://clawlearnhub.com/day/2' },
        { '@type': 'ListItem', position: 3, name: 'Day 3: Give Your Assistant a Soul', url: 'https://clawlearnhub.com/day/3' },
        { '@type': 'ListItem', position: 4, name: 'Day 4: Connect Your Digital Life', url: 'https://clawlearnhub.com/day/4' },
        { '@type': 'ListItem', position: 5, name: 'Day 5: Skills Ecosystem', url: 'https://clawlearnhub.com/day/5' },
        { '@type': 'ListItem', position: 6, name: 'Day 6: Automation & Heartbeat', url: 'https://clawlearnhub.com/day/6' },
        { '@type': 'ListItem', position: 7, name: 'Day 7: Advanced Techniques', url: 'https://clawlearnhub.com/day/7' },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        {/* <meta name="google-adsense-account" content="ca-pub-1081201777589554" />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1081201777589554"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        /> */}

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* hreflang tags for i18n */}
        <link rel="alternate" hrefLang="en" href="https://clawlearnhub.com" />
        <link rel="alternate" hrefLang="zh" href="https://clawlearnhub.com/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://clawlearnhub.com" />
        
        {/* Google tag (gtag.js) */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-86ESEQC7V8"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-86ESEQC7V8');`}
        </Script> */}

        {/* Privacy-friendly analytics by Plausible */}
          {/* <script async src="https://plausible.io/js/pa-NWVT8ccMEFDzosYFJWsGy.js"></script>
          <script>
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
            plausible.init()
          </script> */}

        <Script
          src="https://plausible.io/js/pa-NWVT8ccMEFDzosYFJWsGy.js"
          strategy="afterInteractive"
        />
        <Script id="plausible" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)};
plausible.init=plausible.init||function(i){plausible.o=i||{}};
plausible.init();`}
        </Script>
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
