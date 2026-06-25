import type { Metadata, Viewport } from "next";
import { SplashWrapper } from "@/components/ui/SplashWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usman Ghani - Product & Software Engineer",
  description:
    "Product & Software Engineer with 6+ Android and iOS apps, AI-powered systems, automation, and full-stack products.",
  openGraph: {
    title: "Usman Ghani - Product & Software Engineer",
    description:
      "6+ published apps, AI integration, automation, and production full-stack work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@usmanghanics",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#070708" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SplashWrapper />
        {children}
      </body>
    </html>
  );
}
