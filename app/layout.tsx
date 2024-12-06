import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog | Cactus Theme",
  description: "A personal blog built with Next.js and Cactus theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <Navbar />
          <main className="mt-8 sm:mt-12 prose dark:prose-invert max-w-none">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 