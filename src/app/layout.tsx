import React from 'react';
import '@/styles/global.css';
import { outfit } from '@/fonts/*';

//typescript
import type { Metadata } from 'next';


export const meta: Metadata = {
  title: 'Voyager III',
  description: 'Read about the Voyager III spacecraft',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}