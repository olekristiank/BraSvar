import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for rørleggere | Bra Svar!',
  description: 'Bra Svar tar telefonen mens du er under vasken. Akutte lekkasjer, prisforespørsler og befaringer håndteres automatisk. Gratis å prøve.',
};

const data: IndustryPageData = {
  industry: 'Rørleggere',
  intro: 'Du ligger under vasken med skiftenøkkelen i hånden. Telefonen ringer i baklommen. Bra Svar tar samtalen, fanger opp lekkasjer som haster og samler resten til du er ledig.',
  situation: 'Du er i en krypkjeller og fikser et rør som lekker. Eller du lodder kobberrør i en vegg og kan ikke slippe brenneren. Hendene er fulle, det er trangt, og du har ikke sjans til å fiske opp telefonen.',
  situationBullets: [
    'Du ligger under en vask med verktøy i begge hender',
    'Du er i krypkjelleren og har dårlig dekning og null mulighet til å ta telefon',
    'Du står midt i en lodding og kan ikke slippe brenneren',
    'Du er på vei til neste oppdrag med bilen full av deler',
  ],
  consequence: 'Når noen har vannlekkasje, ringer de ikke tilbake om en time. De ringer neste rørlegger på listen umiddelbart. Selv planlagte jobber som bad og varmepumpe forsvinner til konkurrenten som svarte telefonen.',
  solutionIntro: 'Bra Svar forstår forskjellen på en akutt lekkasje og en som planlegger nytt bad.',
  handles: [
    'Akutte lekkasjer med umiddelbar varsling til deg',
    'Prisforespørsler for vanlige jobber som kran, toalett og rør',
    'Befaring for baderom, våtrom og rehabilitering',
    'Spørsmål om varmepumpe og installasjon',
    'Tilgjengelighet og kapasitet for planlagte prosjekter',
  ],
  benefitsIntro: 'Rørleggerjobber er fysiske, trange og krever full konsentrasjon. Du kan ikke ta pause for å svare telefonen hver gang den ringer.',
  benefits: [
    'Akutte henvendelser blir fanget opp og du får varsel med en gang',
    'Planlagte jobber samles opp så du kan gi tilbud når du har tid',
    'Kunder med lekkasje får ro fordi noen svarer og tar dem på alvor',
    'Mindre stress i hverdagen når du vet at ingen samtaler går tapt',
    'Flere oppdrag uten å bruke kveldene på å ringe tilbake',
  ],
  chat: [
    { who: 'customer', text: 'Hei, vi har vannlekkasje i kjelleren! Det renner fra taket og ned på gulvet.' },
    { who: 'ai', text: 'Det høres akutt ut. Har dere stengt hovedkranen?' },
    { who: 'customer', text: 'Nei, vi vet ikke hvor den er.' },
    { who: 'ai', text: 'Den er vanligvis ved vannmåleren, ofte i et skap ved inngangen eller i kjelleren. Steng den med en gang for å stoppe vannet. Jeg varsler rørleggeren nå, og dere blir ringt opp så fort som mulig.' },
    { who: 'customer', text: 'Ok, vi fant den og stengte. Tusen takk!' },
    { who: 'ai', text: 'Bra! Rørleggeren er varslet og tar kontakt i løpet av kort tid. Sørg for å tørke opp det dere kan i mellomtiden.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
