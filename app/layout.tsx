import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClientX — Audit Gratuit TPE France",
  description:
    "Réservez votre audit gratuit en 20 min. Nos experts analysent votre visibilité Google, vos avis et votre site — gratuitement, sans engagement.",
  openGraph: {
    title: "ClientX — Audit Gratuit TPE France",
    description: "20 minutes pour identifier ce qui vous coûte des clients.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-body antialiased bg-white text-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
