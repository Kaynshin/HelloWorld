import type { Metadata } from "next";
import { Cinzel, Crimson_Text } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hello, World. — Portail Dimensionnel",
  description:
    "Un message de bienvenue depuis 9 univers humoristiques. Médiéval, Espace, Pirate, Sous-Marin, Western, Zombie, Rome Antique, Cyberpunk, Tour des Sorciers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cinzel.variable} ${crimson.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#06060a] text-white">
        {children}
      </body>
    </html>
  );
}
