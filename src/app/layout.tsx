import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const schibsted_Grotesk = Schibsted_Grotesk({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Peter Nuwagaba",
  description: "Official website of John Peter Nuwagaba",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          // ""
          schibsted_Grotesk.className
          // urbanist.className
        }
      >
        <div>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
