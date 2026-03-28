import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for klinikker | Bra Svar!',
  description:
    'La Bra Svar ta telefonen mens du er med pasienten. Timebestilling, endringer og henvendelser blir håndtert automatisk, døgnet rundt.',
};

const data: IndustryPageData = {
  industry: 'Klinikker',
  intro:
    'Du er midt i en konsultasjon når telefonen ringer. Pasienten foran deg trenger din fulle oppmerksomhet. Den som ringer, trenger også hjelp. Begge fortjener bedre enn en opptatt-tone.',
  situation: 'På en klinikk er det sjelden rom for avbrytelser.',
  situationBullets: [
    'Du er midt i en behandling og kan ikke ta telefonen',
    'Du sitter i konsultasjon med en pasient',
    'Du journalfører og trenger konsentrasjon',
    'Resepsjonen er opptatt med andre pasienter',
  ],
  consequence:
    'Pasienter som ikke får svar, prøver en annen klinikk. Akutte henvendelser som havner på telefonsvareren skaper frustrasjon. Du ender opp med en lang liste samtaler å returnere etter en travel dag.',
  solutionIntro:
    'Bra Svar fungerer som en digital resepsjonist som alltid er tilgjengelig.',
  handles: [
    'Timebestilling for konsultasjon og behandling',
    'Endre eller avbestille avtaler',
    'Sortere akutte henvendelser fra vanlige spørsmål',
    'Svare på spørsmål om priser og behandlingstilbud',
    'Informere om ventetid og ledige timer',
  ],
  benefits: [
    'Pasientene får alltid svar, selv under behandling',
    'Akutte henvendelser blir fanget opp umiddelbart',
    'Færre avbrudd i konsultasjoner og behandlinger',
    'Mindre administrativt arbeid etter stengetid',
  ],
  benefitsIntro:
    'En assistent som forstår klinikkens rutiner og gir pasientene trygg og profesjonell oppfølging.',
  chat: [
    { who: 'customer', text: 'Hei, jeg ønsker å bestille en konsultasjon hos dere.' },
    { who: 'ai', text: 'Hei! Selvfølgelig. Hva gjelder konsultasjonen?' },
    { who: 'customer', text: 'Jeg vil gjerne ha en generell konsultasjon.' },
    { who: 'ai', text: 'Flott. Vi har ledig tid mandag kl. 11:00 eller onsdag kl. 09:00. Hva passer best?' },
    { who: 'customer', text: 'Onsdag morgen passer fint.' },
    { who: 'ai', text: 'Onsdag kl. 09:00, notert. Kan jeg få navnet og telefonnummeret ditt?' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
