import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Timexo Wire (India) | MS Bolt, MS Nut & Industrial Wires Manufacturer Ludhiana',
  description: 'Manufacturer of Mild Steel (MS) Bolts, Hex Bolts, MS Hex Nuts, HB Wires, Binding Wires, and Washers from Ludhiana, Punjab. Est. 1972, TrustSEAL & GST Verified.',
  keywords: 'MS Bolt, MS Nut, Hex Bolt, HB Wire, Mild Steel Fasteners, Ludhiana Nut Bolt Manufacturer, Timexo Wire India',
  authors: [{ name: 'Timexo Wire (India)' }],
  openGraph: {
    title: 'Timexo Wire (India) | MS Bolt, MS Nut & Industrial Wires Manufacturer',
    description: 'Premier Manufacturer of Mild Steel Bolts, Nuts, and HB Wires in Ludhiana, Punjab. TrustSEAL & GST Verified.',
    url: 'https://www.indiamart.com/timexo-wireindia/',
    siteName: 'Timexo Wire (India)',
    images: [
      {
        url: 'https://5.imimg.com/data5/SELLER/Default/2021/7/EZ/SN/NP/4140564/mild-steel-bolt-250x250.jpg',
        width: 800,
        height: 600,
        alt: 'MS Bolt & Nut Timexo Wire India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
