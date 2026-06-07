import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usman Ghani - Mobile Application Engineer",
  description:
    "Published mobile application engineer with 6+ Android and iOS apps, building AI-powered systems, automation, and full-stack products.",
  openGraph: {
    title: "Usman Ghani - Mobile Application Engineer",
    description:
      "6+ published apps, AI integration, automation, and production full-stack work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@USMAANGF",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070708" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
