import { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: '5小时掌握你的AI私人助理',
  description: '5小时掌握你的AI私人助理。教程、技能和社区资源一站式获取。',
  alternates: {
    canonical: 'https://clawlearnhub.com/zh',
    languages: {
      'en': 'https://clawlearnhub.com',
      'zh': 'https://clawlearnhub.com/zh',
    },
  },
  openGraph: {
    title: 'OpenClaw Lean Hub - 5小时掌握你的AI私人助理',
    description: '5小时掌握你的AI私人助理',
    type: 'website',
    url: 'https://clawlearnhub.com/zh',
    siteName: 'OpenClaw Lean Hub',
    images: [
      {
        url: '/og-img.png',
        width: 1200,
        height: 630,
        alt: 'OpenClaw Lean Hub - 5小时掌握你的AI私人助理',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenClaw Lean Hub - 5小时掌握你的AI私人助理',
    description: '5小时掌握你的AI私人助理',
    images: ['/og-img.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'OpenClaw Lean Hub',
  url: 'https://clawlearnhub.com/zh',
  description: '5小时掌握你的AI私人助理',
  inLanguage: 'zh-CN',
};

export default function ZhHome() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage locale="zh" />
    </main>
  );
}
