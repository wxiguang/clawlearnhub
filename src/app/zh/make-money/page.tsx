import { Metadata } from 'next';
import ResourcesPage from '@/components/ResourcesPage';

export const metadata: Metadata = {
  title: '全网资源聚合',
  description: '阿里云、腾讯云、DigitalOcean、B站、Codecademy、IBM……一站式获取 OpenClaw 最佳教程。',
  alternates: {
    canonical: 'https://clawlearnhub.com/zh/make-money',
    languages: {
      'en': 'https://clawlearnhub.com/make-money',
      'zh': 'https://clawlearnhub.com/zh/make-money',
    },
  },
  openGraph: {
    title: '全网资源聚合',
    description: '阿里云、腾讯云、DigitalOcean、B站、Codecademy、IBM……一站式获取 OpenClaw 最佳教程。',
    type: 'website',
    url: 'https://clawlearnhub.com/zh/make-money',
    siteName: 'OpenClaw Learn Hub',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: '全网资源聚合 - OpenClaw 101',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '全网资源聚合',
    description: '阿里云、腾讯云、DigitalOcean、B站、Codecademy、IBM……一站式获取 OpenClaw 最佳教程。',
    images: ['/og_image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: '全网资源聚合 - OpenClaw Learn Hub',
  url: 'https://clawlearnhub.com/zh/make-money',
  description: '阿里云、腾讯云、DigitalOcean、B站、Codecademy、IBM……一站式获取 OpenClaw 最佳教程。',
  inLanguage: 'zh-CN',
  isPartOf: {
    '@type': 'WebSite',
    name: 'OpenClaw Learn Hub',
    url: 'https://clawlearnhub.com',
  },
};

export default function ZhResourcesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResourcesPage locale="zh" />
    </main>
  );
}
