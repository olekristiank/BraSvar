import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI-telefonsvar for eiendomsmeglere | Bra Svar',
  description:
    'Bra Svar tar imot visningshenvendelser og prisforespørsler mens du er opptatt med visning eller budrunde.',
};

const data: IndustryPageData = {
  industry: 'Eiendomsmeglere',
  intro:
    'Du står midt i en visning med tjue interessenter. Telefonen ringer konstant. Hver samtale du ikke tar kan være den som avgjør salget. Bra Svar fanger opp alle.',
  situation:
    'Eiendomsmeglere er alltid i bevegelse. Visninger, budrunder, kontraktsmøter og befaring fyller dagene. Samtidig ringer kjøpere, selgere og nye oppdragsgivere som forventer svar med en gang.',
  situationBullets: [
    'Midt i visning med potensielle kjøpere rundt deg',
    'Budrunde der hvert minutt teller',
    'Kontraktsmøte som krever full oppmerksomhet',
    'Kjører mellom oppdrag og rekker ikke svare',
  ],
  consequence:
    'En interessent som ikke får svar, dropper visningen. En selger som vurderer deg som megler, velger den som svarer først.',
  solutionIntro:
    'Bra Svar håndterer henvendelsene dine og sørger for at ingen interessenter forsvinner.',
  handles: [
    'Registrere påmeldinger til visning med kontaktinfo',
    'Svare på prisforespørsler og gi grunnleggende boliginfo',
    'Ta imot henvendelser fra nye oppdragsgivere',
    'Følge opp eksisterende klienter med oppdateringer',
  ],
  benefitsIntro:
    'Med Bra Svar har du en meglerassistent som aldri er opptatt.',
  benefits: [
    'Fange opp alle interessenter, også de som ringer under visning',
    'Aldri miste et nytt oppdrag fordi du var utilgjengelig',
    'Gi profesjonelt svar til selgere og kjøpere døgnet rundt',
    'Frigjøre tid til det som faktisk selger boliger',
  ],
  chat: [
    { who: 'customer', text: 'Hei, jeg så annonsen for leiligheten i Bygdøy allé. Er det mulig å komme på visning?' },
    {
      who: 'ai',
      text: 'Hei! Ja, neste visning er søndag kl. 12:00. Skal jeg melde deg på?',
    },
    { who: 'customer', text: 'Ja, gjerne. Hva er prisantydningen?' },
    {
      who: 'ai',
      text: 'Prisantydning er 4 950 000 kr. Leiligheten er 65 kvm med balkong og ligger i tredje etasje. Jeg melder deg på visningen. Kan jeg få navnet ditt og telefonnummer?',
    },
    { who: 'customer', text: 'Marte Olsen, 98765432.' },
    {
      who: 'ai',
      text: 'Takk, Marte. Du er påmeldt visning søndag kl. 12:00 i Bygdøy allé. Du får en påminnelse på SMS dagen før.',
    },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
