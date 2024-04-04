import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music School",
  description:
    "Explore the rich tapestry of musical education at [Music School Name]. Our dynamic programs cater to all ages and skill levels, fostering creativity and excellence. Join our community of passionate learners, guided by expert instructors and equipped with top-notch facilities. Discover your musical potential with us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full overflow-x-hidden flex items-center justify-center">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
