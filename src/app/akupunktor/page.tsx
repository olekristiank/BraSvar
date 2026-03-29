import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for akupunktører | Bra Svar!',
  description: 'Aldri mist nye pasienter mens du behandler. Bra Svar svarer telefonen når du har nåler i pasienten og booker timer automatisk. Gratis å prøve.',
};

const data: IndustryPageData = {
  industry: 'Akupunktører',
  intro: 'Når nålene er satt og pasienten trenger ro, kan du ikke ta telefonen. Bra Svar svarer for deg og sørger for at nye pasienter ikke forsvinner.',
  situation: 'Du sitter med en pasient i stolen. Nålene er plassert og behandlingen krever stillhet og konsentrasjon. Telefonen ringer på resepsjonen, men du kan ikke forlate rommet. Etter behandlingen ser du to tapte anrop. Ingen har lagt igjen beskjed.',
  situationBullets: [
    'Behandlingen krever full tilstedeværelse og ro i rommet',
    'Nåler i pasienten betyr at du ikke kan reise deg for å svare',
    'Mange akupunktører jobber alene uten resepsjonist',
    'Nye pasienter ringer ofte i lunsjen, akkurat når du behandler',
  ],
  consequence: 'En person med kroniske smerter tar mot til seg og ringer for første gang. Ingen svarer. Terskelen for å ringe tilbake er høy, spesielt for førstegangspasienter som allerede er usikre. De velger en annen behandler som tar telefonen.',
  solutionIntro: 'Bra Svar vet hvilke behandlinger du tilbyr, hva de koster, og når du har ledig tid.',
  handles: [
    'Timebestilling for nye og eksisterende pasienter',
    'Førstegangshenvendelser med informasjon om hva de kan forvente',
    'Priser for ulike behandlinger og pakker',
    'Behandlingsformer du tilbyr og hva de hjelper mot',
    'Avbestilling og endring av timer',
    'Praktisk informasjon om forberedelse til behandling',
  ],
  benefitsIntro: 'Akupunktur handler om tillit. Nye pasienter som får svar med en gang, føler seg ivaretatt allerede før første behandling.',
  benefits: [
    'Nye pasienter får svar selv om du er midt i behandling',
    'Du kan gi full oppmerksomhet til pasienten foran deg',
    'Førstegangshenvendelser blir tatt imot med relevant informasjon',
    'Avbestillinger håndteres uten at det forstyrrer arbeidsdagen',
    'Timeboken fylles opp uten at du bruker kveldene på å ringe tilbake',
  ],
  chat: [
    { who: 'customer', text: 'Hei, jeg vil gjerne prøve akupunktur. Tar dere imot nye pasienter?' },
    { who: 'ai', text: 'Hei! Ja, vi tar imot nye pasienter. Vi anbefaler å starte med en førstegangsbehandling der vi blir kjent og legger en plan.' },
    { who: 'customer', text: 'Hva koster det, og hvor lang tid tar det?' },
    { who: 'ai', text: 'En førstegangsbehandling tar ca. 75 minutter og koster 950 kr. Den inkluderer en grundig samtale og første behandling. Oppfølgingstimer er 60 minutter til 750 kr.' },
    { who: 'customer', text: 'Det høres bra ut. Har dere noe ledig neste uke?' },
    { who: 'ai', text: 'Jeg har ledig tirsdag kl. 10:00 eller torsdag kl. 14:30. Hvilken passer best for deg?' },
    { who: 'customer', text: 'Torsdag 14:30 passer.' },
    { who: 'ai', text: 'Flott, da setter jeg opp en førstegangsbehandling torsdag kl. 14:30. Du får en bekreftelse på SMS. Unngå å spise et stort måltid rett før, og ta med komfortable klær.' },
  ],
  related: [
    { href: '/naprapat-osteopat', label: 'Naprapat og osteopat' },
    { href: '/fysioterapeut', label: 'Fysioterapeut' },
    { href: '/kiropraktor', label: 'Kiropraktor' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
