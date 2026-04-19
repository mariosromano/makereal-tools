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
  title: "MakeReal — A suite of parametric tools by M|R Walls",
  description:
    "Design it. Spec it. Make it real. Parametric tools for architectural surfaces — paired with materials, ready to fabricate.",
  openGraph: {
    title: "MakeReal by M|R Walls",
    description:
      "A suite of parametric tools. Paired with materials. Ready to fabricate.",
    type: "website",
  },
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
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-neutral-100">
        {children}
      </body>
    </html>
  );
}
