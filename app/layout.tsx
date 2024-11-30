import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '회원 목록 관리',
  description: '회원 목록을 관리할 수 있는 테이블',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`flex flex-col min-h-screen`}>{children}</body>
    </html>
  );
}
