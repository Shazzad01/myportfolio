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
  metadataBase: new URL("https://shazzad.dev"),
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
  alternates: {
    canonical: "/",
  },
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Shazzad Mia",
  jobTitle: "SQA Automation Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Brain Station 23",
  },
  url: "https://shazzad.dev",
  email: "shazzadm065@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [
    "https://github.com/Shazzad01",
    "https://linkedin.com/in/md-shazzad-mia",
  ],
  knowsAbout: [
    "Playwright",
    "Selenium",
    "Apache JMeter",
    "Software Quality Assurance",
    "Test Automation",
    "CI/CD",
    "TypeScript",
    "GitHub Actions",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://shazzad.dev",
  name: "Muhammad Shazzad Mia Portfolio",
  description:
    "Portfolio of Muhammad Shazzad Mia, SQA Automation Engineer at Brain Station 23.",
  author: {
    "@type": "Person",
    name: "Muhammad Shazzad Mia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
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
