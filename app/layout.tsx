import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Aurum AI Campaign',
  description: 'Content campaign plan for Aurum AI',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}