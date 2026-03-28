import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for verksteder | Bra Svar!',
  description:
    'Bra Svar tar telefonen mens du jobber under panseret. Verkstedtimer, EU-kontroll og dekkskift blir booket uten avbrudd. Gratis å prøve.',
};

const data: IndustryPageData = {
  industry: 'Verksteder',
  intro:
    'Du ligger under en bil med oljesøl på hendene. Telefonen ringer oppe på benken. Du rekker ikke opp, og kunden som trengte EU-kontroll booker hos verkstedet ned i gata.',
  situation: 'På et verksted er det sjelden stille nok til å ta en telefon.',
  situationBullets: [
    'Du ligger under bilen med verktøy i begge hender',
    'Kompressoren kjører og du hører ingenting',
    'Hendene er fulle av olje og du kan ikke ta telefonen',
    'Du er alene på verkstedet og har tre biler inne samtidig',
  ],
  consequence:
    'Kundene dine vil ha svar der og da. En EU-kontroll eller et dekkskift er noe de booker hos den første som tar telefonen. Ringer de til mobilsvar, prøver de neste verksted på lista.',
  solutionIntro:
    'Bra Svar tar telefonen og fyller opp timeboka di mens du skrur.',
  handles: [
    'Bestille verkstedtime for service og reparasjon',
    'Booke EU-kontroll',
    'Avtale dekkskift og dekkhotell',
    'Svare på spørsmål om hentebil og lånebil',
    'Gi informasjon om priser og ventetid',
  ],
  benefits: [
    'Timeboka fylles opp uten at du trenger å legge fra deg verktøyet',
    'Kundene får booket med en gang i stedet for å prøve et annet verksted',
    'Du slipper å ringe tilbake ti kunder etter arbeidstid',
    'Mer forutsigbar arbeidsdag med bedre planlegging',
  ],
  benefitsIntro:
    'En assistent som kjenner verkstedet ditt og booker timer som en erfaren servicemedarbeider.',
  chat: [
    { who: 'customer', text: 'Hei, bilen min skal ha EU-kontroll. Har dere ledig tid snart?' },
    { who: 'ai', text: 'Hei! Ja, vi har ledig tid tirsdag og fredag denne uka. Hva passer best for deg?' },
    { who: 'customer', text: 'Fredag hadde passet bra. Kan jeg levere bilen om morgenen?' },
    { who: 'ai', text: 'Absolutt. Du kan levere fra kl. 07:30. Hva slags bil er det?' },
    { who: 'customer', text: 'En 2019 Volkswagen Golf.' },
    { who: 'ai', text: 'Fint. Da setter jeg deg opp for EU-kontroll fredag morgen. Du får en bekreftelse på SMS.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
