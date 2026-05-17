import type { Metadata } from "next";
import { Anek_Tamil, Playfair_Display } from "next/font/google";
import "./globals.css";

const anekTamil = Anek_Tamil({ 
  subsets: ["tamil", "latin"],
  variable: "--font-anek-tamil",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "JothiSoft | Professional Tamil Astrology",
  description: "Advanced Tamil astrology SaaS web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta" className={`${anekTamil.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased selection:bg-gold-deep selection:text-text-inverse">
        {children}
      </body>
    </html>
  );
}
