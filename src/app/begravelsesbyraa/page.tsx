import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for begravelsesbyråer | Bra Svar!',
  description:
    'Vær tilgjengelig for pårørende også når du er opptatt. Bra Svar tar imot henvendelser med verdighet og omtanke, døgnet rundt.',
};

const data: IndustryPageData = {
  industry: 'Begravelsesbyråer',
  intro:
    'Pårørende som nettopp har mistet noen, ringer når de trenger det. Ikke når det passer for deg. Når du er i en seremoni eller et møte med en annen familie, sørger Bra Svar! for at de som ringer blir møtt med ro og respekt.',
  situation:
    'Du er ofte i situasjoner der du ikke kan ta telefonen. Seremonier, personlige møter med pårørende og planlegging krever fullt nærvær.',
  situationBullets: [
    'Midt i en seremoni eller bisettelse',
    'I møte med pårørende som trenger din fulle oppmerksomhet',
    'Planlegging av praktiske detaljer med kirke, krematorium eller gravlund',
    'Koordinering med blomsterhandler, musikere og andre involverte',
    'Transport og forberedelser der du ikke har telefonen tilgjengelig',
  ],
  consequence:
    'Når noen mister en av sine nærmeste, er det første de gjør ofte å ringe et begravelsesbyrå. Hvis ingen svarer, føler de seg alene i en vanskelig situasjon. De ringer videre til neste byrå.',
  solutionIntro:
    'Bra Svar! møter pårørende med varme og verdighet, samler nødvendig informasjon og sørger for at du kan ringe tilbake så snart du er ledig.',
  handles: [
    'Nye henvendelser fra pårørende med ro og omtanke',
    'Grunnleggende informasjon om planlegging av seremoni',
    'Spørsmål om blomster, kiste og minneside',
    'Praktisk informasjon om hva som skjer videre',
    'Videresending av hastesaker til rett person',
  ],
  benefitsIntro:
    'Med Bra Svar! vet du at pårørende alltid blir møtt med respekt, uansett når de ringer.',
  benefits: [
    'Pårørende føler seg ivaretatt fra første øyeblikk',
    'Du kan gi familiene du er hos din fulle oppmerksomhet',
    'Ingen henvendelse går tapt, heller ikke utenfor kontortid',
    'Tonen og omsorgen matcher det pårørende trenger i en sårbar situasjon',
  ],
  chat: [
    { who: 'customer', text: 'Hei. Min far gikk bort i natt. Vi vet ikke helt hva vi skal gjøre.' },
    { who: 'ai', text: 'Kondolerer med tapet deres. Det er helt forståelig at dette er overveldende. Vi er her for å hjelpe dere gjennom dette.' },
    { who: 'customer', text: 'Takk. Han ligger på sykehuset nå. Hva skjer videre?' },
    { who: 'ai', text: 'Det ordner vi. Begravelsesbyrået kan ta seg av transport fra sykehuset og hjelpe dere med alt det praktiske. Kan jeg få navnet deres, så ringer byrået dere tilbake så snart som mulig for en samtale om veien videre?' },
    { who: 'customer', text: 'Ja, jeg heter Kristin Haugen. Nummeret mitt er det jeg ringer fra.' },
    { who: 'ai', text: 'Takk, Kristin. Jeg har notert alt. Dere vil bli kontaktet kort tid. Ta den tiden dere trenger. Vi tar oss av resten.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
