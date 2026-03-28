import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for skjønnhetssalonger | Bra Svar!',
  description:
    'Bra Svar tar telefonen mens du er midt i en behandling. Bestillinger, endringer og spørsmål blir håndtert uten avbrudd. Gratis å prøve.',
};

const data: IndustryPageData = {
  industry: 'Skjønnhetssalonger',
  intro:
    'Du har akkurat lagt siste vippe på plass. Telefonen ringer. Hvis du svarer nå, ødelegger du arbeidet. Hvis du ikke svarer, mister du kanskje en ny kunde.',
  situation: 'I en skjønnhetssalong krever behandlingene full konsentrasjon.',
  situationBullets: [
    'Du er midt i en vippebehandling og kan ikke røre deg',
    'Du gjør negledesign med gel som herder i sekunder',
    'Du er i gang med voksing og kunden kan ikke vente',
    'Du har hendene fulle av produkt og hansker på',
  ],
  consequence:
    'Kunder som vil bestille behandling, gjør det der og da. Får de ikke svar, scroller de videre til neste salong på Instagram. Du taper bookinger til konkurrenter som svarer raskere.',
  solutionIntro:
    'Bra Svar tar imot bestillinger og svarer på spørsmål mens du fokuserer på behandlingen.',
  handles: [
    'Bestille behandlinger som vipper, negler og voksing',
    'Svare på priser for ulike behandlinger',
    'Håndtere avbestilling og endring av timer',
    'Svare på spørsmål om produkter og ettervård',
    'Informere om ledige tider og venteliste',
  ],
  benefits: [
    'Ingen tapte bookinger mens du behandler',
    'Kundene opplever profesjonell service fra første sekund',
    'Du kan fokusere helt på behandlingen uten dårlig samvittighet',
    'Oversikt over alle henvendelser når du er ferdig for dagen',
  ],
  benefitsIntro:
    'En assistent som kjenner behandlingene dine og booker kundene inn som en del av teamet.',
  chat: [
    { who: 'customer', text: 'Hei! Jeg vil gjerne bestille time for vippeextensions.' },
    { who: 'ai', text: 'Hei! Så hyggelig. Har du hatt vippeextensions hos oss før?' },
    { who: 'customer', text: 'Nei, det blir første gang.' },
    { who: 'ai', text: 'Da anbefaler vi et nytt sett, som tar ca. 90 minutter. Vi har ledig torsdag kl. 12:00 eller lørdag kl. 10:00. Hva passer?' },
    { who: 'customer', text: 'Lørdag kl. 10 passer perfekt.' },
    { who: 'ai', text: 'Flott! Da booker jeg deg inn lørdag kl. 10:00 for nytt sett vipper. Velkommen!' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
