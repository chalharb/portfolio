import type { Metadata } from "next";
import { ThemeProvider } from "@/components/global/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";

import { Navbar } from "@/components/global/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Footer } from "@/components/global/footer";

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
  metadataBase: new URL(process.env.BASE_URL || ""),
  title: {
    default: "Logan Harber | Sitecore Architect",
    template: "%s | Logan Harber",
  },
  description: "Sitecore Architect @ HCA Healthcare",
  openGraph: {
    title: "Logan Harber | Sitecore Architect",
    description: "Sitecore Architect @ HCA Healthcare",
    url: process.env.BASE_URL || "",
    siteName: "LoganHarber",
    locale: "en_US",
    images: {
      url: new URL("/images/logan.jpg", process.env.BASE_URL || "").toString(),
      alt: "Logan Harber",
    },
    type: "website",
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

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(geistSans.variable, geistMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="antialiased max-w-[900] mx-4 mt-8 lg:mx-auto">
            <Navbar />
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              {children}
            </main>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
