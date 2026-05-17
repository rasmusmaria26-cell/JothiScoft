import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ta">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anek+Tamil:wght@100..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased selection:bg-gold-deep selection:text-text-inverse">
        {children}
      </body>
    </html>
  );
}
