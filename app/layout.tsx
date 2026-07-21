import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://ainaazhar-portfolio.vercel.app";
const description =
  "Aina Azhar — Data Science undergraduate at COMSATS University Islamabad, seeking Data Science, Machine Learning and Data Analyst internships. Explore projects in regression, clustering and EDA.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Data Science & Machine Learning Portfolio`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Aina Azhar",
    "Data Science Portfolio",
    "Machine Learning Intern",
    "Data Analyst Intern",
    "COMSATS University Islamabad",
    "Python",
    "Scikit-learn",
  ],
  authors: [{ name: profile.name }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — Data Science & Machine Learning Portfolio`,
    description,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${profile.name} — Data Science Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Data Science & Machine Learning Portfolio`,
    description,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased bg-white text-ink-700">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
