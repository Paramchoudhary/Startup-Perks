// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Startup Perks Database | Free Credits & Discounts for Startups",
  description:
    "Discover $1M+ in free cloud credits, AI API access, developer tools, and startup perks. A comprehensive directory of non-dilutive funding for early-stage companies.",
  keywords: [
    "startup credits",
    "cloud credits",
    "AWS credits",
    "Google Cloud credits",
    "startup perks",
    "free software startups",
    "non-dilutive funding",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Startup Perks Database",
    description: "Discover $1M+ in free credits and perks for startups",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics />
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
            <Script
  id="datafucked-tracker"
  src="https://datafucked.vercel.app/analytics.js"
  strategy="afterInteractive"
  data-site-id="startupperks.xyz"
  data-endpoint="https://datafucked.vercel.app/api/e"
/>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
    
      </body>
    </html>
  );
}
