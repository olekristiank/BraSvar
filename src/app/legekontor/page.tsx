import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for legekontor | Bra Svar!',
  description:
    'Slutt på telefonkø og frustrerte pasienter. Bra Svar håndterer reseptfornyelser, timebestilling og henvendelser automatisk.',
};

const data: IndustryPageData = {
  industry: 'Legekontor',
  intro:
    'Klokka er 08:01 og telefonen har allerede ringt tjue ganger. Legene er i konsultasjon. Sekretæren prøver å håndtere køen, men det er fysisk umulig å rekke over alle. Pasientene henger i kø og gir til slutt opp.',
  situation: 'Et legekontor har flere innringere enn det er mulig å svare på, hver eneste dag.',
  situationBullets: [
    'Legen er i konsultasjon og kan ikke forstyrres',
    'Ti pasienter ringer samtidig for å fornye resepten',
    'Noen trenger bare å vite om prøvesvaret er klart',
    'Sekretæren må prioritere de som står i luken foran seg',
  ],
  consequence:
    'Pasienter ringer gjentatte ganger uten å komme gjennom. Noen dropper å fornye resepten og går tom for medisin. Andre bytter fastlege fordi de aldri får svar.',
  solutionIntro:
    'Bra Svar tar unna rutinetelefonene slik at kontoret kan fokusere på de som trenger legehjelp mest.',
  handles: [
    'Bestille time eller flytte eksisterende time',
    'Reseptfornyelse med riktig informasjon til legen',
    'Spørsmål om prøvesvar og videre oppfølging',
    'Henvisning til spesialist og ventetid',
    'Generell informasjon om åpningstider og legevakt',
  ],
  benefits: [
    'Pasientene slipper å vente i telefonkø',
    'Reseptforespørsler kommer inn strukturert og riktig',
    'Sekretæren får frigjort tid til oppgaver som krever mennesker',
    'Færre klager og mer fornøyde pasienter',
  ],
  benefitsIntro:
    'En AI-assistent som sorterer henvendelsene og lar kontoret bruke tiden på det som virkelig teller.',
  chat: [
    { who: 'customer', text: 'Hei, jeg trenger å fornye resepten min på blodtrykksmedisin.' },
    { who: 'ai', text: 'Hei! Det kan vi hjelpe med. Hvilket preparat bruker du, og hvilken dose?' },
    { who: 'customer', text: 'Amlodipin 5 mg.' },
    { who: 'ai', text: 'Mottatt. Kan jeg få fødselsdatoen din, så sender vi forespørselen til legen din?' },
    { who: 'customer', text: '14. mars 1972.' },
    { who: 'ai', text: 'Fint. Forespørselen om fornyelse av Amlodipin 5 mg er sendt. Legen behandler den i løpet av dagen, og resepten legges på apoteket ditt.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
