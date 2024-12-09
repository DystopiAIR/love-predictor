import type { Metadata } from "next";
import { Progress } from "@/app/components/Progress";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI智能婚恋契合度预测 - 科技赋能，助你找到真爱",
  description: "使用先进的AI算法和专业的心理学理论，为你提供精准的婚恋契合度分析，帮助你找到最适合的伴侣。",
  keywords: "婚恋,AI预测,契合度分析,心理测试,伴侣匹配",
  authors: [{ name: "Your Company Name" }],
  openGraph: {
    title: "AI智能婚恋契合度预测",
    description: "科技赋能，助你找到真爱",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI婚恋契合度预测",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full antialiased bg-white text-gray-900">
        <Progress />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
