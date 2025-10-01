import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SmoothScroller from '@/components/smooth-scroller';

export const metadata: Metadata = {
  title: 'NeonEdge Portfolio',
  description: 'Sidharth, Vansh, and Yash – Web Developers building immersive 3D websites.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <SmoothScroller>{children}</SmoothScroller>
        <Toaster />
      </body>
    </html>
  );
}
