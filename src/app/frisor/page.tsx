import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for frisører | Bra Svar!',
  description:
    'Aldri gå glipp av en timebestilling igjen. Bra Svar tar telefonen mens du klipper, farger og styler. Gratis å prøve, ingen binding.',
};

const data: IndustryPageData = {
  industry: 'Frisører',
  intro:
    'Telefonen ringer midt i en klipp. Du har saksen i den ene hånda og kammen i den andre. Kunden i stolen fortjener full oppmerksomhet, ikke en frisør som prater i telefonen.',
  situation: 'Hverdagen i en frisørsalong er hektisk fra første time til siste føn.',
  situationBullets: [
    'Du står med saksen i hånda og en kunde i stolen',
    'Fargen virker og timingen er kritisk',
    'Hele salongen er full og du er alene på jobb',
    'Du spiser lunsj i de fem minuttene mellom to kunder',
  ],
  consequence:
    'Hver ubesvart samtale er en tapt timebestilling. Kunder som ikke kommer gjennom, booker hos salongen over gata i stedet. Over tid merker du det på omsetningen.',
  solutionIntro:
    'Bra Svar tar imot samtalene dine og sørger for at ingen kunder forsvinner mens du jobber.',
  handles: [
    'Bestille time for klipp, farge eller annen behandling',
    'Endre eller flytte eksisterende timer',
    'Svare på spørsmål om priser og behandlinger',
    'Informere om åpningstider og beliggenhet',
    'Sette kunder på venteliste ved fullbooket dag',
  ],
  benefits: [
    'Flere bookinger uten å forstyrre arbeidet ditt',
    'Kundene får svar med en gang, selv når salongen er full',
    'Du slipper å ringe tilbake etter stengetid',
    'Mer tid til det du faktisk tjener penger på',
  ],
  benefitsIntro:
    'En AI-assistent som kjenner salongen din og snakker med kundene som om de ringer deg direkte.',
  chat: [
    { who: 'customer', text: 'Hei, jeg lurer på om dere har ledig tid for klipp på torsdag?' },
    { who: 'ai', text: 'Hei! Ja, vi har ledig kl. 10:00 og kl. 14:30 på torsdag. Passer noen av de?' },
    { who: 'customer', text: 'Kl. 14:30 hadde vært perfekt.' },
    { who: 'ai', text: 'Flott! Kan jeg få navnet ditt, så setter jeg deg opp?' },
    { who: 'customer', text: 'Maria Hansen.' },
    { who: 'ai', text: 'Da er du booket inn torsdag kl. 14:30, Maria. Velkommen!' },
  ],
  related: [
    { href: '/skjonnhet', label: 'Skjønnhet' },
    { href: '/hudklinikk', label: 'Hudklinikk' },
    { href: '/tatovor', label: 'Tatovør' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
