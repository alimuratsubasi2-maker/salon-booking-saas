import './globals.css';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { getUser, getTeamForUser } from '@/lib/db/queries';
import { SWRConfig } from 'swr';

export const metadata: Metadata = {
  title: 'Salon Defteri — Kuaför ve Güzellik Salonu Randevu Programı',
  description: 'Online randevu, otomatik hatırlatma, müşteri kartları ve kasa takibi tek uygulamada.'
};

export const viewport: Viewport = {
  maximumScale: 1
};

// Google Fonts yerine projeye gömülü dosya: derleme internete/antivirüse takılmaz
const manrope = localFont({
  src: [
    { path: './fonts/manrope-latin.woff2', weight: '200 800' },
    { path: './fonts/manrope-latin-ext.woff2', weight: '200 800' }
  ]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        <SWRConfig
          value={{
            fallback: {
              // We do NOT await here
              // Only components that read this data will suspend
              '/api/user': getUser(),
              '/api/team': getTeamForUser()
            }
          }}
        >
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
