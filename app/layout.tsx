import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "문의가 정상적으로 접수되었습니다. | 홈페이지코리아",
  description: "홈페이지코리아 프로젝트 문의 접수 완료 페이지 목업",
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
