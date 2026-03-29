import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for elektrikere | Bra Svar!',
  description: 'Bra Svar tar telefonen mens du jobber med strøm. Prisforespørsler, befaringer og akutte oppdrag blir håndtert automatisk.',
};

const data: IndustryPageData = {
  industry: 'Elektrikere',
  intro: 'Du står i sikringsskapet med begge hendene opptatt. Telefonen ringer. Bra Svar tar samtalen, noterer oppdraget og sender deg detaljene når du er ferdig.',
  situation: 'Du er oppe i en stige og trekker kabel gjennom veggen. Eller du står i et sikringsskap med strømmen slått av og en kunde som venter på lys. Å ta opp telefonen er ikke bare upraktisk. Det kan være farlig.',
  situationBullets: [
    'Du jobber i sikringsskapet og kan ikke slippe det du holder på med',
    'Du er oppe i en stige med verktøy i begge hender',
    'Strømmen er av hos kunden og du må bli ferdig før du kan gjøre noe annet',
    'Du kjører mellom oppdrag og har ikke mulighet til å ta notater',
  ],
  consequence: 'Folk som trenger elektriker har det ofte travelt. Sikringen har gått, de skal flytte inn i nytt hus, eller de planlegger et bad. Hvis du ikke svarer, ringer de neste navn på listen. Du får aldri vite at de ringte.',
  solutionIntro: 'Bra Svar vet hva du tilbyr, hvilke områder du dekker og når du har ledig kapasitet.',
  handles: [
    'Prisforespørsler for vanlige jobber som sikringsskap, stikkontakter og lys',
    'Avtale om befaring for større prosjekter',
    'Akutte oppdrag med viderekobling når det haster',
    'Spørsmål om tilgjengelighet og leveringstid',
    'Nybygg og rehabiliteringsprosjekter med behov for tilbud',
  ],
  benefitsIntro: 'Du jobber med hendene og ofte i situasjoner der det er direkte farlig å bli distrahert. Telefonen bør aldri stå i veien for sikkerheten din.',
  benefits: [
    'Jobb trygt uten å bli distrahert av ringende telefon',
    'Nye kunder får svar med en gang, også når du er på et oppdrag',
    'Akutte henvendelser fanges opp og du blir varslet umiddelbart',
    'Prisforespørsler og befaringer samles opp så du kan planlegge effektivt',
    'Kjør mellom oppdrag uten å miste jobber underveis',
  ],
  chat: [
    { who: 'customer', text: 'Hei, vi skal pusse opp badet og trenger elektriker. Er dere ledige?' },
    { who: 'ai', text: 'Hei! Ja, vi tar oppdrag med badelektrisk. Kan du si litt om hva som skal gjøres? Nytt bad fra grunnen, eller oppgradering av det som er der?' },
    { who: 'customer', text: 'Vi river alt og bygger nytt. Trenger nye kurser, varmekabler og spotter.' },
    { who: 'ai', text: 'Det høres ut som et komplett oppdrag. Da anbefaler vi en befaring først så vi kan gi et skikkelig tilbud. Passer det en dag neste uke?' },
    { who: 'customer', text: 'Tirsdag eller onsdag hadde passet.' },
    { who: 'ai', text: 'Tirsdag fungerer. Jeg setter dere opp for befaring tirsdag formiddag. Dere får en SMS med bekreftelse og tidspunkt.' },
  ],
  related: [
    { href: '/rorlegger', label: 'Rørlegger' },
    { href: '/handverker', label: 'Håndverker' },
    { href: '/entreprenor', label: 'Entreprenør' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
