import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import { Playfair_Display } from "next/font/google";
import Footer from "@/components/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "VittaCare",
  description: "Cuidado e atenção que você precisa",
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
