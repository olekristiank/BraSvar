import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for tannleger | Bra Svar!',
  description:
    'Aldri mist en pasient mens du borer. Bra Svar tar telefonen, booker timer og håndterer akutte henvendelser automatisk. Gratis å prøve.',
};

const data: IndustryPageData = {
  industry: 'Tannleger',
  intro:
    'Du står med boret i hånda og pasienten har munnen vidåpen. Telefonen ringer. Du kan ikke stoppe midt i en rotfylling for å svare. Men den som ringer, kan ha akutt tannpine og trenger hjelp nå.',
  situation: 'Tannlegekontoret krever hundre prosent fokus, hele dagen.',
  situationBullets: [
    'Du borer i en tann og kan ikke slippe det du holder på med',
    'Sekretæren har pause eller er opptatt med en annen pasient',
    'Tre pasienter venter i resepsjonen samtidig',
    'Du gjør en krevende behandling der konsentrasjon er alt',
  ],
  consequence:
    'Pasienter med akutt tannpine ringer neste tannlege på lista hvis ingen svarer. De kommer aldri tilbake. Og de forteller venner og familie at det var umulig å komme gjennom.',
  solutionIntro:
    'Bra Svar svarer for deg og sørger for at pasienter med akutte plager får hjelp, ikke opptatt-signal.',
  handles: [
    'Bestille time for undersøkelse eller behandling',
    'Akutte henvendelser og prioritering av ledige timer',
    'Spørsmål om priser og egenandeler',
    'Forsikring og refusjonsordninger',
    'Endre eller avbestille eksisterende timer',
  ],
  benefits: [
    'Akutte henvendelser blir fanget opp med en gang',
    'Du kan konsentrere deg fullt om pasienten i stolen',
    'Færre tapte pasienter og bedre belegg på timeboka',
    'Sekretæren slipper å løpe mellom telefon og resepsjon',
  ],
  benefitsIntro:
    'En assistent som gir pasientene dine en trygg og profesjonell mottakelse på telefonen.',
  chat: [
    { who: 'customer', text: 'Hei, jeg trenger en tannlegetime ganske raskt. Har dere ledig?' },
    { who: 'ai', text: 'Hei! Vi har en ledig time i dag kl. 13:15. Passer det for deg?' },
    { who: 'customer', text: 'Ja, det passer perfekt.' },
    { who: 'ai', text: 'Flott! Kan jeg få navnet ditt, så setter jeg deg opp?' },
    { who: 'customer', text: 'Erik Johansen.' },
    { who: 'ai', text: 'Da er du satt opp i dag kl. 13:15, Erik. Du får bekreftelse på SMS. Velkommen!' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
