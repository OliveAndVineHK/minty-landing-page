import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minty",
  description: "Minty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <header className="flex items-center px-6 py-4 bg-white border-b border-gray-200">
          <Image
            src="/logo.webp"
            alt="Minty"
            width={120}
            height={48}
            loading="eager"
            fetchPriority="high"
          />
        </header>
        {children}
      </body>
    </html>
  );
}
