"use client";

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function AutoFooter() {
  const pathname = usePathname();
  const lang = pathname.startsWith('/en') ? 'en' : 'no';
  return <Footer lang={lang} />;
}
