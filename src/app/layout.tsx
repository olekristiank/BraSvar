import type { Metadata } from "next";
import { Outfit, Manrope, Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { ContactProvider } from "@/components/ContactModal/ContactContext";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bra Svar! | KI-telefonassistent for norske småbedrifter",
  description: "Bra Svar er ditt AI-sentralbord og kundebehandler. Svarer telefonen, booker avtaler og hjelper kundene dine — døgnet rundt. Ingen binding.",
  keywords: ['KI-telefonassistent', 'AI sentralbord', 'telefonassistent', 'automatisering småbedrift', 'ubesvarte samtaler', 'KI kundeservice'],
  openGraph: {
    title: 'Bra Svar! | KI-telefonassistent for norske småbedrifter',
    description: 'AI-sentralbord som svarer telefonen, booker avtaler og hjelper kundene dine — døgnet rundt.',
    url: 'https://brasvar.no',
    siteName: 'Bra Svar',
    locale: 'nb_NO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={cn(outfit.variable, manrope.variable, instrumentSerif.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <body suppressHydrationWarning><ContactProvider>{children}</ContactProvider></body>
    </html>
  );
}
