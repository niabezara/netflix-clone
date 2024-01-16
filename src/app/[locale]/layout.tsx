import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ReactNode } from "react";
import { unstable_setRequestLocale } from "next-intl/server";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={ubuntu.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
