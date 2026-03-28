import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for legekontor | Bra Svar!',
  description:
    'Slutt på telefonkø og frustrerte pasienter. Bra Svar håndterer timebestilling og generelle henvendelser automatisk, døgnet rundt.',
};

const data: IndustryPageData = {
  industry: 'Legekontor',
  intro:
    'Klokka er 08:01 og telefonen har allerede ringt tjue ganger. Legene er i konsultasjon. Sekretæren prøver å håndtere køen, men det er fysisk umulig å rekke over alle. Pasientene henger i kø og gir til slutt opp.',
  situation: 'Et legekontor har flere innringere enn det er mulig å svare på, hver eneste dag.',
  situationBullets: [
    'Legen er i konsultasjon og kan ikke forstyrres',
    'Ti pasienter ringer samtidig for å bestille time',
    'Noen trenger bare å vite åpningstider eller adresse',
    'Sekretæren må prioritere de som står i luken foran seg',
  ],
  consequence:
    'Pasienter ringer gjentatte ganger uten å komme gjennom. Noen gir opp og bytter fastlege. Andre møter ikke opp fordi de ikke fikk endret timen sin i tide.',
  solutionIntro:
    'Bra Svar tar unna rutinetelefonene slik at kontoret kan fokusere på pasientene som er der.',
  handles: [
    'Bestille time eller flytte eksisterende time',
    'Informasjon om åpningstider, adresse og parkering',
    'Bestille time for blodprøve eller lab',
    'Avbestilling og ombestilling av avtaler',
    'Generelle spørsmål om tjenester og tilgjengelighet',
  ],
  benefits: [
    'Pasientene slipper å vente i telefonkø',
    'Timebestillinger kommer inn strukturert og riktig',
    'Sekretæren får frigjort tid til oppgaver som krever mennesker',
    'Færre klager og mer fornøyde pasienter',
  ],
  benefitsIntro:
    'En assistent som sorterer henvendelsene og lar kontoret bruke tiden på det som virkelig teller.',
  chat: [
    { who: 'customer', text: 'Hei, jeg trenger en time for blodprøve.' },
    { who: 'ai', text: 'Hei! Blodprøver tas på lab mandag til fredag mellom 08 og 10. Skal jeg sette opp en time?' },
    { who: 'customer', text: 'Ja, gjerne onsdag.' },
    { who: 'ai', text: 'Onsdag kl. 08:30 passer. Husk å møte fastende hvis legen har bedt om det. Du får bekreftelse på SMS.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
