import type { Metadata } from 'next';
import './globals.css';
import './animations.css';
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: 'Aura - Transform Your Energy Through Daily Rituals',
  description: 'Transform your energy through daily rituals and unlock your unique Aura.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-HBE58185XE" />
    </html>
  );
}