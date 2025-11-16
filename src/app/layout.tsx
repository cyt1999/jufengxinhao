import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SubscriptionNotification from "@/components/ui/SubscriptionNotification";

export const metadata: Metadata = {
  title: "飓风信号·外汇交易职业交易员培训",
  description: "飓风信号结合人工智能与专业交易策略，为您提供精准的买卖点信号",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <SubscriptionNotification />
      </body>
    </html>
  );
}
