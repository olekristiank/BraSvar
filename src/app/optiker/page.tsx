import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for optikere | Bra Svar!',
  description:
    'La kundene få svar mens du tilpasser briller. Bra Svar tar telefonen og booker synsprøver når du har kunden i stolen. Gratis å prøve.',
};

const data: IndustryPageData = {
  industry: 'Optikere',
  intro:
    'Kunden sitter i stolen og du er midt i en synsprøve. Lyset er dempet, du holder instrumentene klare. Telefonen ringer i butikken, men du kan ikke avbryte nå. Det kan være noen som ser stadig dårligere og trenger en time.',
  situation: 'Synsprøver krever ro og konsentrasjon. Telefonen passer aldri.',
  situationBullets: [
    'Du gjennomfører en synsprøve og kan ikke avbryte',
    'Du tilpasser brilleinnfatning og justerer på millimeteren',
    'Butikken er full av kunder som trenger hjelp med å velge briller',
    'Du er alene i butikken og kollegaen har fri',
  ],
  consequence:
    'Kunder som trenger ny synsprøve ringer ofte bare en gang. Får de ikke svar, bestiller de hos optikeren i neste handlegate. Og med synsprøven forsvinner også brillesalget.',
  solutionIntro:
    'Bra Svar svarer telefonen for deg og booker synsprøver, så du aldri mister en kunde til køen.',
  handles: [
    'Bestille time for synsprøve',
    'Spørsmål om kontaktlinser og tilpasning',
    'Beskjed om at brillene er klare til henting',
    'Priser på synsprøve, glass og innfatninger',
    'Åpningstider og informasjon om butikken',
  ],
  benefits: [
    'Synsprøver bookes inn uten at du trenger å ta telefonen',
    'Kundene får rask hjelp og slipper å ringe flere ganger',
    'Du kan gi full oppmerksomhet til kunden foran deg',
    'Færre tapte synsprøver betyr mer salg av briller og linser',
  ],
  benefitsIntro:
    'En AI-assistent som kjenner tilbudet ditt og sørger for at brillekundene dine alltid kommer gjennom.',
  chat: [
    { who: 'customer', text: 'Hei, jeg tror jeg trenger ny synsprøve. Det er lenge siden sist.' },
    { who: 'ai', text: 'Hei! Det er lurt å sjekke synet jevnlig. Husker du når du hadde synsprøve sist?' },
    { who: 'customer', text: 'Det er vel tre, fire år siden nå.' },
    { who: 'ai', text: 'Da er det absolutt på tide. Vi har ledig mandag kl. 11:00 eller onsdag kl. 14:00. Hva passer best for deg?' },
    { who: 'customer', text: 'Mandag kl. 11 funker.' },
    { who: 'ai', text: 'Fint! Kan jeg få navnet ditt?' },
    { who: 'customer', text: 'Lise Fredriksen.' },
    { who: 'ai', text: 'Da er du satt opp mandag kl. 11:00, Lise. Husk å ta med brillene du bruker nå hvis du har noen. Velkommen!' },
  ],
  related: [
    { href: '/klinikk', label: 'Klinikk' },
    { href: '/tannlege', label: 'Tannlege' },
    { href: '/hudklinikk', label: 'Hudklinikk' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
