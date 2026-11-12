import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Instrument_Sans, Martian_Mono } from "next/font/google";
import { langs, ui, type Lang } from "../content";
import SmoothScroll from "../SmoothScroll";
import "../globals.css";

const mono = Martian_Mono({ subsets: ["latin"], axes: ["wdth"], variable: "--font-mono" });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans" });

type Props = { params: Promise<{ lang: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => langs.map((lang) => ({ lang }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const { meta } = ui[lang as Lang];
  return {
    metadataBase: new URL("https://daniel-santos.vercel.app"),
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/${lang}`, languages: { pt: "/pt", en: "/en" } },
    openGraph: { title: meta.title, description: meta.description, images: "/photo.jpg", locale: lang },
  };
}

export default async function Layout({ children, params }: Props & { children: React.ReactNode }) {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) notFound();
  return (
    <html lang={lang} className={`${mono.variable} ${sans.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
