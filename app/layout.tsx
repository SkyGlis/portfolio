import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from 'next/font/google'
import ScrollToTop from "@/components/ScrolltoTop";
const font = Montserrat({ 
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Daniel Santos",
  description: "Portfólio Pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${font.className} antialised bg-gray-50`}>
            <ScrollToTop />
            {children}
        </body>
    </html>
  );
}
