'use server';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { QueryProvider, TokenRefreshProvider } from '@/shared/providers';
import { StoreProvider } from '@/app/providers';
import '@/app/globals.css';
import { auth } from '@/shared/api';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const metadataConfig: Metadata = {
  title: 'The Goods Store',
  description:
    'The Goods Store — ваш надежный онлайн-магазин с широким выбором товаров для дома, электроники, одежды и многого другого. Быстрая доставка и отличные цены!',
  keywords: 'товары, покупки, магазин, электронные устройства, одежда',
  robots: 'index, follow',
};

export async function generateMetadata(): Promise<Metadata> {
  return metadataConfig;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  await auth();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <TokenRefreshProvider />
          <QueryProvider>{children}</QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
