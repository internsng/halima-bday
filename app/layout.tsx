import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col md:max-w-[1200px] w-full mx-auto px-5">{children}</body>
    </html>
  );
}
