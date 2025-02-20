import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import { Instrument_Sans, Playfair_Display } from "next/font/google";
import Footer from "@/components/footer";

const font = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className}  antialiased bg-[#dae2cb] tracking-tight`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
