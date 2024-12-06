import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: "DevLiu's Blog",
    template: '%s | DevLiu\'s Blog'
  },
  description: '前端开发者的技术博客，分享 Web 开发经验和最佳实践',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://your-domain.com',
    siteName: "DevLiu's Blog",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#1d1f21] text-[#c9cacc] min-h-screen`}>
        <div className="max-w-2xl mx-auto px-6 py-8">
          <Navbar />
          <main className="mt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 