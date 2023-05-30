import './globals.css'
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Livl Madness',
  description: 'par Livl Corporation',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default async function RootLayout({ children, params: { locale } }) {

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} data-theme="night">
      <body className={inter.className + " h-screen"}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}