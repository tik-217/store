import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/globals.css';
import { QueryProvider } from '@/shared/providers';
import { StoreProvider } from '@/shared/providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The Goods Store',
  description:
    'The Goods Store — ваш надежный онлайн-магазин с широким выбором товаров для дома, электроники, одежды и многого другого. Быстрая доставка и отличные цены!',
  keywords: 'товары, покупки, магазин, электронные устройства, одежда',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <QueryProvider>{children}</QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
