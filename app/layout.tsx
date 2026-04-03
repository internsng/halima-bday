import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: '../public/fonts/NibPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NibPro-Italic.ttf',
      weight: '400',
      style: 'italic', // Changed to italic
    },
    {
      path: '../public/fonts/NibPro-SemiBold.ttf',
      weight: '600', // SemiBold is usually 600
      style: 'normal',
    },
    {
      path: '../public/fonts/NibPro-SemiBoldItalic.ttf',
      weight: '600', // Match the weight above
      style: 'italic', // Changed to italic
    },
  ],
  variable: '--font-nibpro',
});





const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800",],
  variable: '--font-manrope',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased ${manrope.variable} ${myFont.variable}`}
    >
      <body className="min-h-full flex flex-col md:max-w-[1200px] w-full mx-auto px-5">{children}</body>
    </html>
  );
}
