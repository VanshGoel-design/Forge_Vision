import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SmoothScroller from '@/components/smooth-scroller';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js"></script>
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <SmoothScroller>{children}</SmoothScroller>
        <Toaster />
      </body>
    </html>
  );
}
