import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/src/components/common/Preloader";
import { ThemeProvider } from "@/src/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wahid-Mobile",
  description: "Welcome to the official website of Wahid-Mobile, your one-stop destination for premium mobile phones and accessories. Discover the latest smartphones, tablets, wearables, and mobile technology from top brands. Explore features, specifications, price, and expert reviews. Get exclusive deals and offers on mobile phones. Stay updated with mobile news, trends, and innovations. Experience seamless shopping with secure payments, fast delivery, and reliable customer support. Buy the best mobile phones and accessories at affordable prices. Official website of Wahid-Mobile - [Website Address]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Preloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
