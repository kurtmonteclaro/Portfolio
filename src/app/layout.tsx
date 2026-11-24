import type { Metadata } from 'next';
import '@fontsource-variable/geist/wght.css';
import '@fontsource-variable/space-grotesk/wght.css';

import { portfolio } from '@/data/portfolio';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionLink } from '@/components/section-link';
import './globals.css';

const title = `${portfolio.name} | Software Development Portfolio`;
const description = `Explore software projects by ${portfolio.name}, a BS Information Technology student in Cebu City seeking an IT internship or OJT.`;
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const deploymentHost = productionHost ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(deploymentHost ? `https://${deploymentHost}` : 'http://localhost:3000'),
  title,
  description,
  authors: [{ name: portfolio.name, url: portfolio.github }],
  alternates: productionHost ? { canonical: '/' } : undefined,
  openGraph: { title, description, type: 'website', locale: 'en_PH' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-PH">
      <body id="top">
        <SectionLink className="skip-link" href="#main-content">Skip to content</SectionLink>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
