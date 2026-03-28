import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for konsulenter | Bra Svar!',
  description:
    'Hold fokus på klienten foran deg. Bra Svar fanger opp nye prosjektforespørsler og booker møter mens du jobber.',
};

const data: IndustryPageData = {
  industry: 'Konsulenter',
  intro:
    'Du fasiliterer en workshop hos en klient. Alle er engasjerte, Post-it-lappene flyr. Så ringer telefonen. En ny bedrift vil ha hjelp, men du kan ikke ta den nå.',
  situation: 'Konsulentlivet er et konstant puslespill av klientmøter, leveranser og nye muligheter.',
  situationBullets: [
    'Du holder workshop hos klient og kan ikke forlate rommet',
    'Du er på konferanse og nettverker mellom foredrag',
    'Du sitter i strategimøte med ledergruppen',
    'Du jobber konsentrert med en leveranse som har deadline i morgen',
  ],
  consequence:
    'Nye kunder venter ikke. Bedriften som ringer deg med et prosjekt, har allerede to andre konsulenter på lista. Den som svarer først, får oppdraget.',
  solutionIntro:
    'Bra Svar tar imot henvendelser og sørger for at du aldri går glipp av neste oppdrag.',
  handles: [
    'Nye prosjektforespørsler med kort beskrivelse av behov',
    'Møtebooking med potensielle og eksisterende klienter',
    'Spørsmål om tjenester, tilnærming og tilgjengelighet',
    'Oppfølging fra pågående prosjekter',
    'Videreformidling av hastesaker',
  ],
  benefits: [
    'Fang opp nye oppdrag uten å forstyrre det du holder på med',
    'Potensielle klienter får et profesjonelt førstinntrykk',
    'Du får en oppsummering du kan følge opp mellom møtene',
    'Mer tid til å levere, mindre tid på administrasjon',
  ],
  benefitsIntro:
    'En AI-assistent som representerer deg profesjonelt og sørger for at ingen muligheter glipper.',
  chat: [
    { who: 'customer', text: 'Hei, vi er en mellomstor bedrift som trenger hjelp med digitalisering av arbeidsprosessene våre.' },
    { who: 'ai', text: 'Hei! Det høres ut som et spennende prosjekt. Kan du si litt mer om hvilke prosesser dere ønsker å forbedre?' },
    { who: 'customer', text: 'Hovedsakelig ordrehåndtering og intern kommunikasjon. Vi bruker mye tid på manuelle rutiner.' },
    { who: 'ai', text: 'Det er akkurat det vi kan hjelpe med. Kan jeg få firmanavn og din kontaktinfo, så setter konsulenten opp et uforpliktende møte?' },
    { who: 'customer', text: 'Nordvik AS, jeg heter Camilla Berg. Nummeret mitt er dette jeg ringer fra.' },
    { who: 'ai', text: 'Flott, Camilla. Du hører fra oss snart for å avtale et møte. Takk for at du tok kontakt.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
