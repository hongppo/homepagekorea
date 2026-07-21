import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 기반 문의 완료 페이지 목업 | 홈페이지코리아",
  description: "문의 접수 후 상담 일정을 선택할 수 있는 홈페이지코리아 완료 페이지 목업입니다.",
  openGraph: {
    title: "AI 기반 문의 완료 페이지 목업 | 홈페이지코리아",
    description: "문의 접수 후 상담 일정을 선택할 수 있는 홈페이지코리아 완료 페이지 목업입니다.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AI 기반 문의 완료 페이지 목업 | 홈페이지코리아",
    description: "문의 접수 후 상담 일정을 선택할 수 있는 홈페이지코리아 완료 페이지 목업입니다.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
