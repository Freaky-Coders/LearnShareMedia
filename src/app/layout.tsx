import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import Footer from "../components/Footer";
import { DynamicNavbar } from "@/components/DynamicNavbar";
import { Toaster } from '@/components/ui/toaster'
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearnShareMedia - Free Educational Resources",
  description: "LearnShareMedia offers free access to educational PDFs, videos, and docs. Download resources without logging in, and contribute to help others.",
  keywords: "free education, educational resources, free PDFs, educational videos, LearnShareMedia",
  openGraph: {
    title: "LearnShareMedia - Free Educational Resources",
    description: "Free access to educational PDFs, videos, and docs. Download and share resources to help others.",
    url: "https://www.learnsharemedia.com",
    type: "website",
    images: [
      {
        url: "https://www.learnsharemedia.com/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "LearnShareMedia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LearnShareMedia - Free Educational Resources",
    description: "Free access to educational PDFs, videos, and docs. Download and share resources to help others.",
    images: ["https://www.learnsharemedia.com/images/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <DynamicNavbar/>
            {children}
            <Footer/>
            <Toaster/>
        </StoreProvider>
      </body>
    </html>
  );
}
