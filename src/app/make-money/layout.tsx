import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '全网 OpenClaw 资源聚合 — 精选最新真实赚钱案例和操作方法 | OpenClaw Learn Hub',
  description:
    '阿里云、腾讯云、DigitalOcean、B站、Codecademy 等 35+ 篇 OpenClaw 教程资源聚合，涵盖部署、平台接入、技能开发等 8 大分类。',
  alternates: {
    canonical: 'https://clawlearnhub.com/make-money',
  },
  openGraph: {
    title: '全网 OpenClaw 资源聚合 —精选最新真实赚钱案例和操作方法 | OpenClaw Learn Hub',
    description:
      '阿里云、腾讯云、DigitalOcean、B站、Codecademy 等 35+ 篇 OpenClaw 教程资源聚合，涵盖部署、平台接入、技能开发等 8 大分类。',
    type: 'website',
    url: 'https://clawlearnhub.com/make-money',
    siteName: 'OpenClaw Learn Hub',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: '全网 OpenClaw 资源聚合 — 精选最新真实赚钱案例和操作方法 ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '全网 OpenClaw 资源聚合 — 精选最新真实赚钱案例和操作方法 | OpenClaw Learn Hub',
    description:
      '阿里云、腾讯云、DigitalOcean、B站、Codecademy 等 35+ 篇 OpenClaw 教程资源聚合，涵盖部署、平台接入、技能开发等 8 大分类。',
    images: ['/og_image.png'],
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
