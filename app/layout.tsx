import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Boris Gratchev',
  description: 'Personal website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://unpkg.com/xp.css' />
      </head>
      <body>{children}</body>
    </html>
  );
}
