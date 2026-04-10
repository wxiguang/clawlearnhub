import { Metadata } from 'next';
import ResourcesPage from '@/components/ResourcesPage';

export const metadata: Metadata = {
  title: 'Resource Hub',
  description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
  alternates: {
    canonical: 'https://clawlearnhub.com/resources',
    languages: {
      'en': 'https://clawlearnhub.com/resources',
      'zh': 'https://clawlearnhub.com/zh/resources',
    },
  },
  openGraph: {
    title: 'Resource Hub',
    description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
    type: 'website',
    url: 'https://clawlearnhub.com/resources',
    siteName: 'OpenClaw Learn Hub',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Resource Hub - OpenClaw Learn Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resource Hub',
    description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
    images: ['/og_image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Resource Hub - OpenClaw Learn Hub',
  url: 'https://clawlearnhub.com/resources',
  description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'OpenClaw Learn Hub',
    url: 'https://clawlearnhub.com',
  },
};

export default function EnResourcesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResourcesPage locale="en" />
    </main>
  );
}
