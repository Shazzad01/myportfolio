import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Shazzad Mia | SQA Automation Engineer",
  description:
    "SQA Engineer II at Brain Station 23, specializing in Playwright automation, JMeter performance testing, and CI/CD integration. 2+ years building reliable software quality systems.",
  keywords: [
    "SQA Engineer",
    "Automation Engineer",
    "Playwright",
    "Selenium",
    "JMeter",
    "Software Testing",
    "QA",
    "Bangladesh",
    "Brain Station 23",
  ],
  authors: [{ name: "Muhammad Shazzad Mia" }],
  creator: "Muhammad Shazzad Mia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shazzad.dev",
    title: "Muhammad Shazzad Mia | SQA Automation Engineer",
    description:
      "SQA Engineer II specializing in Playwright automation, JMeter performance testing, and CI/CD pipelines.",
    siteName: "Muhammad Shazzad Mia Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Shazzad Mia — SQA Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Shazzad Mia | SQA Automation Engineer",
    description:
      "SQA Engineer II specializing in Playwright automation, JMeter performance testing, and CI/CD pipelines.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
