import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Mohamed Aimane Skhairi | Resume',
  description: 'My digital resume app',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({children}: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
