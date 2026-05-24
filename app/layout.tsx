import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Foot Taktic',
  description: 'منصة التحليلات الكروية وأخبار كأس العالم 2026',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
