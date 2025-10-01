import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SmoothScroller from '@/components/smooth-scroller';

export const metadata: Metadata = {
  title: 'Portfolio',
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js"></script>
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <SmoothScroller>{children}</SmoothScroller>
        <Toaster />
        <div style={{
          position: 'fixed',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '872px',
          height: '54px',
          backgroundColor: 'hsl(var(--background))',
          zIndex: 100
        }}></div>
      </body>
    </html>
  );
}
