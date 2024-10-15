import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import EyeCatch from "@/components/eyecatch";
import ToastProvider from "@/components/providers/toastProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Yanai Lab",
  description: "Yanai Laboratory' Homepage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
            flex flex-col min-h-svh`}
      >
        <EyeCatch />
        <Header />
        <ToastProvider />
        <main className="mb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
