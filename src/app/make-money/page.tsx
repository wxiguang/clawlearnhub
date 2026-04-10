import { Metadata } from 'next';
import UsercasesPage from '@/components/MakeMoney';

export const metadata: Metadata = {
  title: 'OpenClaw Business Hub',
  description: 'One-stop access to the best OpenClaw monetization & money-making tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
  alternates: {
    canonical: 'https://clawlearnhub.com/make-money',
    languages: {
      'en': 'https://clawlearnhub.com/make-money',
      'zh': 'https://clawlearnhub.com/zh/make-money',
    },
  },
  openGraph: {
    title: 'OpenClaw Business Hub',
    description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
    type: 'website',
    url: 'https://clawlearnhub.com/make-money',
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
  name: 'OpenClaw Business Hub',
  url: 'https://clawlearnhub.com/make-money',
  description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'OpenClaw Learn Hub',
    url: 'https://clawlearnhub.com',
  },
};

export default function EnUsercasesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UsercasesPage locale="en" />
    </main>
  );
}
