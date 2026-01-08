import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Chấm Chữa Writing Task 2</title>
        <meta name="description" content="Một nền tảng toàn diện để chấm chữa các bài viết Writing Task 2" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>{children}</body>
    </html>
  );
}
