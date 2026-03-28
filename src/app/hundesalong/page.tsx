import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for hundesalonger | Bra Svar!',
  description:
    'Hold hunden i fokus, ikke telefonen. Bra Svar booker klipping og stell mens du jobber med pelsene. Svarer døgnet rundt, gratis å prøve.',
};

const data: IndustryPageData = {
  industry: 'Hundesalonger',
  intro:
    'Du holder i en våt golden retriever som helst vil hoppe ned fra bordet. Saksen ligger klar, tørkeren går, og tre hunder bjeffer i ventekroken. Å ta telefonen nå er rett og slett umulig.',
  situation: 'I en hundesalong har du hendene fulle fra første til siste hund.',
  situationBullets: [
    'Du holder fast en nervøs hund under klipping',
    'Du bader en pelskompis som spruter vann overalt',
    'Du tørker og børster ut en tykk pels som har filtret seg',
    'Du rydder opp mellom to kunder og neste eier er allerede i døra',
  ],
  consequence:
    'Hundeeiere booker der de får svar. Når telefonen ringer og ingen tar den, velger de salongen som svarte. Faste kunder er gull, men de må komme inn døra først.',
  solutionIntro:
    'Bra Svar tar telefonen og booker timer for deg, slik at du kan konsentrere deg om hundene.',
  handles: [
    'Bestille time for klipping, trimming og styling',
    'Pelsstell, bading og spesialbehandlinger',
    'Spørsmål om priser for ulike raser og pelstyper',
    'Informasjon om hva eieren bør forberede før timen',
    'Endre eller avbestille eksisterende timer',
  ],
  benefits: [
    'Flere bookinger uten å slippe hunden du jobber med',
    'Hundeeiere får svar med en gang, selv på travle dager',
    'Du slipper å ringe tilbake med shampo i håret',
    'Mer tid til det du brenner for, nemlig hundene',
  ],
  benefitsIntro:
    'En AI-assistent som kjenner salongen din og gir hundeeierne en varm velkomst på telefonen.',
  chat: [
    { who: 'customer', text: 'Hei, jeg har en goldendoodle som trenger klipping. Har dere ledig denne uka?' },
    { who: 'ai', text: 'Hei! Goldendoodler er vi vant med. Vi har ledig onsdag kl. 11 og fredag kl. 13. Passer noe av det?' },
    { who: 'customer', text: 'Fredag kl. 13 hadde vært perfekt. Hvor mye koster det?' },
    { who: 'ai', text: 'Klipp av goldendoodle koster fra 850 kroner, avhengig av pelslengde. Hva heter hunden og hvem kan vi sette opp timen på?' },
    { who: 'customer', text: 'Hunden heter Nansen, og jeg heter Ida Lunde.' },
    { who: 'ai', text: 'Da er Nansen booket inn fredag kl. 13, Ida. Husk at pelsen bør være tørr når dere kommer. Velkommen!' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
