import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for arkitekter | Bra Svar!',
  description: 'Ikke la nye oppdrag gå tapt mens du er i prosjektering. Bra Svar svarer telefonen og fanger opp henvendelser fra potensielle kunder automatisk.',
};

const data: IndustryPageData = {
  industry: 'Arkitekter',
  intro: 'Midt i en designgjennomgang eller på befaring med kommunen kan du ikke ta telefonen. Bra Svar sørger for at nye oppdrag ikke glir forbi.',
  situation: 'Du sitter i en prosjekteringsgjennomgang med ingeniøren. Tegningene er spredt utover bordet og dere diskuterer bærekonstruksjonen. Telefonen ringer, men du kan ikke bryte konsentrasjonen. Etterpå har du befaring, og så et møte om reguleringsplanen. Hele dagen går uten at du sjekker tapte anrop.',
  situationBullets: [
    'Designgjennomganger og prosjekteringsmøter krever full konsentrasjon',
    'Befaringer tar deg bort fra kontoret i timesvis',
    'Møter med kommune og plan- og bygningsetaten kan ikke avbrytes',
    'Kreativt arbeid med tegninger og modeller tåler ikke avbrudd',
  ],
  consequence: 'En husbygger som planlegger tilbygg ringer tre arkitektkontorer. Det kontoret som svarer og stiller gode spørsmål, får invitasjonen til et oppstartsmøte. De andre blir glemt. Arkitektoppdrag er ofte store, og ett tapt anrop kan bety hundretusener i tapt omsetning.',
  solutionIntro: 'Bra Svar tar imot henvendelsen, kartlegger behovet, og gir deg en klar oppsummering.',
  handles: [
    'Nye oppdragsforespørsler med prosjektbeskrivelse',
    'Forespørsler om innledende konsultasjon',
    'Booking av befaring til ledig tidspunkt',
    'Spørsmål om reguleringsplaner og byggesøknader',
    'Prisforespørsler og informasjon om tjenester',
    'Oppfølging av pågående prosjekter og tidslinjer',
  ],
  benefitsIntro: 'Arkitektoppdrag starter med en telefon. Den som svarer profesjonelt og raskt, bygger tillit fra første sekund.',
  benefits: [
    'Nye kunder får et godt førsteinntrykk selv om du er opptatt',
    'Du mister ikke store oppdrag fordi telefonen gikk til voicemail',
    'Befaringer settes opp direkte uten at du trenger å ringe tilbake',
    'Du kan fokusere på prosjektering uten avbrytelser',
    'Henvendelser kommer som ryddige oppsummeringer du kan vurdere når det passer',
  ],
  chat: [
    { who: 'customer', text: 'Hei, vi vurderer et tilbygg på huset vårt og trenger en arkitekt. Er det noe dere jobber med?' },
    { who: 'ai', text: 'Hei! Ja, tilbygg er noe vi har mye erfaring med. Kan du fortelle litt mer om hva dere ser for dere? For eksempel hvor stort tilbygget skal være og hva det skal brukes til.' },
    { who: 'customer', text: 'Vi trenger et ekstra soverom og et nytt bad. Huset er fra 1985 og ligger i en regulert gate.' },
    { who: 'ai', text: 'Det høres ut som et fint prosjekt. Siden huset ligger i en regulert gate, bør vi sjekke reguleringsplanen tidlig. Vi starter vanligvis med en befaring der vi ser på mulighetene og diskuterer rammene.' },
    { who: 'customer', text: 'Hva koster en slik befaring?' },
    { who: 'ai', text: 'En innledende befaring med gjennomgang tar ca. 1,5 timer og koster 3 500 kr. Da får dere en muntlig vurdering av muligheter, begrensninger og videre prosess. Skal jeg sette opp en tid?' },
    { who: 'customer', text: 'Ja, gjerne. Vi er tilgjengelige i neste uke.' },
    { who: 'ai', text: 'Fint! Vi har ledig onsdag formiddag eller fredag etter lunsj. Hvilken dag passer best? Jeg sender bekreftelse med adresse og hva dere bør ha klart.' },
  ],
  related: [
    { href: '/entreprenor', label: 'Entreprenør' },
    { href: '/eiendomsmegler', label: 'Eiendomsmegler' },
    { href: '/konsulent', label: 'Konsulent' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
