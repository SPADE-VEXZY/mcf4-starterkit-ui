import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "../styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "next-themes";

const notoSans = Noto_Sans({ variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starterkit UI",
  description: "A modern Next.js starter UI kit with theme support, custom Google fonts, top-loading progress, and accessible components — ideal for building fast, responsive dashboards and admin panels.",
  keywords: [
    "next.js",
    "starterkit",
    "ui",
    "tailwindcss",
    "theme",
    "react",
    "typescript",
    "geist",
    "accessibility",
  ],
  creator: "MCF4",
  openGraph: {
    images: "/dashboard.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-sm`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <NextTopLoader color="white" showSpinner={false} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
