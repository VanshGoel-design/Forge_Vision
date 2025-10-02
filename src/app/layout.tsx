import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SmoothScroller from '@/components/smooth-scroller';
import { FirebaseClientProvider } from '@/firebase';
import { Inter, Press_Start_2P } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '700'],
});

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  variable: '--font-press-start-2p',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Forge Vision',
  description: 'A portfolio of my work.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js"
        ></script>
      </head>
      <body
        className={cn(
          'font-body antialiased bg-background text-foreground',
          inter.variable,
          pressStart2P.variable
        )}
      >
        <FirebaseClientProvider>
          <SmoothScroller>{children}</SmoothScroller>
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
