import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for kiropraktorer | Bra Svar!',
  description: 'Kiropraktorer kan ikke avbryte en justering for å ta telefonen. Bra Svar svarer kundene dine, booker timer og gir informasjon med en gang.',
};

const data: IndustryPageData = {
  industry: 'Kiropraktorer',
  intro: 'Du justerer en nakke, telefonen ringer i resepsjonen. Ingen tar den. Pasienten som ringer med akutte smerter, finner en annen kiropraktor i stedet.',
  situation: 'En kiropraktisk behandling krever full konsentrasjon og presise bevegelser. Å avbryte midt i en justering er ikke bare upraktisk, det kan være direkte uforsvarlig.',
  situationBullets: [
    'Du utfører en spinal justering og kan ikke slippe pasienten',
    'Du gjør en grundig undersøkelse og vurderer røntgenbilder',
    'Du forklarer treningsøvelser og rehabiliteringsplan',
    'Du driver alene eller med minimal bemanning i resepsjonen',
  ],
  consequence: 'Pasienter med akutte ryggsmerter eller nakkeplager ringer ofte flere klinikker samtidig. Den som svarer først, får pasienten. De som ikke svarer, vet aldri at noen ringte.',
  solutionIntro: 'Du trenger en løsning som tar imot pasienter mens du behandler.',
  handles: [
    'Bestille førstegangstime eller oppfølgingstime',
    'Akutte henvendelser med smerter som haster',
    'Svare på spørsmål om behandlingsformer og tilnærming',
    'Gi informasjon om priser og forsikringsdekning',
    'Endre eller avbestille eksisterende avtaler',
    'Videresende akutte tilfeller til deg direkte',
  ],
  benefits: [
    'Pasienter med akutte plager får svar med en gang og booker hos deg',
    'Du kan behandle uten avbrytelser og gi bedre pasientopplevelse',
    'Nye pasienter fanges opp i stedet for å gå til konkurrenten',
    'Du slipper å bruke kvelden på å ringe tilbake ubesvarte anrop',
  ],
  benefitsIntro: 'Mange kiropraktorer jobber alene eller med begrenset resepsjon. Da er hver samtale som fanges opp, direkte verdi.',
  chat: [
    { who: 'customer', text: 'Hei, jeg har fått vondt i ryggen og trenger time ganske raskt' },
    { who: 'ai', text: 'Hei! Det forstår jeg. Hvor lenge har du hatt plagene?' },
    { who: 'customer', text: 'Siden i går. Det stråler ned i beinet' },
    { who: 'ai', text: 'Da anbefaler jeg en undersøkelse så raskt som mulig. Jeg har ledig i morgen klokken 09:30. Passer det?' },
    { who: 'customer', text: 'Ja, det passer' },
    { who: 'ai', text: 'Bra. Du er satt opp i morgen kl. 09:30. Ta med deg eventuelt røntgenbilder hvis du har. Du får bekreftelse på SMS.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
