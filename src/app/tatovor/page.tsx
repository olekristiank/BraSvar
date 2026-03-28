import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for tatovører | Bra Svar!',
  description:
    'Mist aldri en kunde mens du tatoverer. Bra Svar! tar imot bookinger og designønsker mens du har nåla i huden.',
};

const data: IndustryPageData = {
  industry: 'Tatovører',
  intro:
    'Du er midt i et detaljert motiv på overarmen. Nåla går. Kunden din holder pusten. Telefonen ringer. Noen vil bestille konsultasjon for et sleevemotiv. Du kan ikke stoppe. Bra Svar! tar samtalen.',
  situation:
    'Tatovering krever hundre prosent konsentrasjon. Du jobber med nål mot hud, hansker på, og hvert avbrudd kan påvirke resultatet.',
  situationBullets: [
    'Midt i en tatovering der du ikke kan stoppe uten å ødelegge linjene',
    'Konsultasjon med en kunde der dere går gjennom designdetaljer',
    'Forbereder stensiler og rigger utstyr mellom timer',
    'Lange økter der du ikke ser telefonen på flere timer',
    'Ettervårdsgjennomgang med en kunde som akkurat er ferdig',
  ],
  consequence:
    'Folk som vil ha tatovering ringer ofte på impuls. Hvis de ikke får svar, bestiller de hos en annen tatovør. Hver tapt samtale kan være en stor booking.',
  solutionIntro:
    'Bra Svar! tar imot alle henvendelser, noterer hva kunden ønsker og sender deg en oversikt når du er klar mellom timene.',
  handles: [
    'Booking av konsultasjon for nye motiv',
    'Prisforespørsel basert på størrelse og plassering',
    'Tar imot beskrivelse av designønsker og referansebilder',
    'Informerer om ledige tider',
    'Svarer på spørsmål om ettervård og helingstid',
  ],
  benefitsIntro:
    'Med Bra Svar! kan du holde fokus på nåla mens bookingene ruller inn.',
  benefits: [
    'Ingen avbrudd midt i en tatovering',
    'Kunder med designønsker blir tatt på alvor med en gang',
    'Du får alle detaljer samlet på ett sted etter økten',
    'Profesjonelt inntrykk som bygger tillit før første konsultasjon',
  ],
  chat: [
    { who: 'customer', text: 'Hei, jeg vil gjerne bestille time for en tatovering på underarmen.' },
    { who: 'ai', text: 'Hei! Kult at du vil tatovere deg. Har du et motiv i tankene, eller trenger du hjelp med design?' },
    { who: 'customer', text: 'Jeg tenker et naturmotiv med fjell og skog som går rundt hele underarmen.' },
    { who: 'ai', text: 'Det høres ut som et kult prosjekt. Har du noen referansebilder eller en bestemt stil du liker? For eksempel realistisk, blackwork eller fineline?' },
    { who: 'customer', text: 'Fineline med litt dotwork. Har noen bilder jeg kan sende.' },
    { who: 'ai', text: 'Perfekt. Jeg booker deg inn til en konsultasjon der dere kan gå gjennom designet sammen. Kan jeg få navnet ditt og e-postadressen din, så sender tatovøren deg ledige tider?' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
