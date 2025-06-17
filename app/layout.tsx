import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Panchayat S4",
  description:
    "Watch Panchayat Season 4 on Prime Video as village politics heats up in Phulera. Manju Devi and Kranti Devi clash while Sachiv Ji gets caught in the chaos.",
  openGraph: {
    title: "Panchayat S4",
    description:
      "Watch Panchayat Season 4 on Prime Video as village politics heats up in Phulera. A mix of humor, drama, and rural politics!",
    url: "https://panchayats4.com/",
    siteName: "Prime Series",
    images: [
      {
        url: "https://panchayats4.com/images/AA1GuwUc.webp", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Panchayat S4 Cover",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
