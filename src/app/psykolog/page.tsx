import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for psykologer | Bra Svar!',
  description: 'Bra Svar tar telefonen mens du er i terapitime. Nye henvendelser, timebestilling og venteliste uten å bryte konsentrasjonen.',
};

const data: IndustryPageData = {
  industry: 'Psykologer',
  intro: 'Du kan ikke ta telefonen midt i en terapitime. Det skal du heller ikke. Bra Svar svarer for deg, tar imot nye henvendelser og håndterer det praktiske.',
  situation: 'Du sitter i terapitime. Pasienten har nettopp åpnet seg om noe vanskelig, og det ringer på kontoret. Du kan ikke avbryte. Du skal ikke avbryte. Konfidensialitet og tilstedeværelse er grunnlaget for alt du gjør.',
  situationBullets: [
    'Du er i samtale og kan umulig ta telefonen uten å bryte tilliten i rommet',
    'Mellom timer trenger du pause og tid til å skrive journal, ikke ringe tilbake',
    'Nye pasienter som ringer for første gang har ofte brukt lang tid på å ta steget',
    'Du har full timebok og ingen resepsjon til å håndtere henvendelser',
  ],
  consequence: 'En person som endelig tar mot til seg og ringer en psykolog, ringer sjelden tilbake hvis ingen svarer. Det øyeblikket av motivasjon forsvinner. Du mister ikke bare en potensiell pasient. Den personen mister kanskje muligheten til å få hjelp akkurat da de trengte det.',
  solutionIntro: 'Bra Svar møter den som ringer med ro og tydelighet, helt uten å dele sensitiv informasjon.',
  handles: [
    'Førstegangshenvendelser med informasjon om ventetid og tilbud',
    'Timebestilling og endring av eksisterende timer',
    'Avbestilling med riktig frist og informasjon om avbestillingsregler',
    'Venteliste for nye pasienter når du er fullbooket',
    'Viderekobling ved akutt behov til legevakt eller hjelpetelefoner',
  ],
  benefitsIntro: 'Som psykolog er tilstedeværelse det viktigste verktøyet ditt. Avbrytelser ødelegger den terapeutiske alliansen og koster deg langt mer enn en tapt telefon.',
  benefits: [
    'Full konsentrasjon i terapitimer uten forstyrrelser',
    'Nye pasienter blir tatt imot med en gang, selv når du er opptatt',
    'Ventelisten fylles opp automatisk uten at du løfter en finger',
    'Akutte henvendelser blir trygt veiledet videre til riktig instans',
    'Mer overskudd mellom timer når du slipper telefonkø',
  ],
  chat: [
    { who: 'customer', text: 'Hei, jeg lurer på om dere tar imot nye pasienter.' },
    { who: 'ai', text: 'Hei, og takk for at du ringer. Vi tar imot nye pasienter. Akkurat nå er ventetiden ca. tre uker. Ønsker du å settes opp for en førstesamtale?' },
    { who: 'customer', text: 'Ja, det hadde vært fint. Tre uker går greit.' },
    { who: 'ai', text: 'Bra. Jeg har ledig onsdag 16. april kl. 13:00 eller torsdag 17. april kl. 09:00. Hva passer best?' },
    { who: 'customer', text: 'Onsdag kl. 13 passer.' },
    { who: 'ai', text: 'Da er du satt opp onsdag 16. april kl. 13:00. Førstesamtalen varer 60 minutter. Du får en bekreftelse på SMS med praktisk informasjon.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
