import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Novative | AI Product Studio',
  description:
    'We build AI-powered products that generate revenue. SaaS platforms, mobile apps, chatbots, and business automation. 22+ products shipped.',
  keywords: [
    'AI product studio',
    'build my app',
    'AI for business',
    'SaaS development',
    'mobile app development',
    'chatbot development',
    'business automation',
    'AI chatbot',
    'MVP development',
    'web application',
  ],
  authors: [{ name: 'Novative' }],
  openGraph: {
    title: 'Novative | AI Product Studio',
    description:
      'We build AI-powered products that generate revenue. 22+ products shipped to production.',
    url: 'https://novative.dev',
    siteName: 'Novative',
    type: 'website',
  },
  metadataBase: new URL('https://novative.dev'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
