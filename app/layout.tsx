import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={clsx('min-h-screen bg-neutral-950 font-sans antialiased', fontSans.variable)}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <main className='container mx-auto max-w-7xl flex-grow px-6 pt-8'>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
