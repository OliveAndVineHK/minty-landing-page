import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className="flex min-h-full flex-col bg-white">
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-10">
            <Image
              src="/logo.webp"
              alt="Minty"
              width={80}
              height={32}
              loading="eager"
              fetchPriority="high"
            />
            <button
              type="button"
              className="font-display cursor-pointer rounded-full bg-[#242424] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#242424]/80 focus:outline-none"
            >
              Try Minty
            </button>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
