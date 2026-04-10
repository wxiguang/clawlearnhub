import { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'OpenClaw Learn Hub - Master Your AI Assistant in 5 Hours',
  description: 'The definitive guide to building your AI assistant with OpenClaw. Tutorials, skills, and community resources for your personal AI agent.',
  alternates: {
    canonical: 'https://clawlearnhub.com',
    languages: {
      'en': 'https://clawlearnhub.com',
      'zh': 'https://clawlearnhub.com/zh',
    },
  },
  openGraph: {
    title: 'OpenClaw Learn Hub - Master Your AI Assistant in 5 Hours',
    description: 'The definitive guide to building your AI assistant with OpenClaw.',
    type: 'website',
    url: 'https://clawlearnhub.com',
    siteName: 'OpenClaw Learn Hub',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'OpenClaw Learn Hub - Master Your AI Assistant in 5 Hours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenClaw Learn Hub - Master Your AI Assistant in 5 Hours',
    description: 'The definitive guide to building your AI assistant with OpenClaw.',
    images: ['/og_image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'OpenClaw Learn Hub',
  url: 'https://clawlearnhub.com',
  description: 'Master your AI personal assistant in 5 Hours. The definitive guide to building your AI assistant with OpenClaw.',
  inLanguage: 'en',
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage locale="en" />
    </main>
  );
}
