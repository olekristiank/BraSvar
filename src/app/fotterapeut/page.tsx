import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for fotterapeuter | Bra Svar!',
  description: 'Fotterapeuter kan ikke ta telefonen midt i en behandling. Bra Svar svarer for deg, booker timer og gir kundene svar med en gang.',
};

const data: IndustryPageData = {
  industry: 'Fotterapeuter',
  intro: 'Du sitter med kundens fot i hendene. Telefonen ringer. Du kan ikke ta den. Kunden som ringer, ringer videre til neste fotterapeut med ledig time.',
  situation: 'Som fotterapeut jobber du tett med kunden gjennom hele behandlingen. Det finnes ikke et naturlig tidspunkt å bryte av for å svare telefonen.',
  situationBullets: [
    'Du behandler en inngrodde negl og trenger begge hendene',
    'Du gir fotpleie og har hansker på',
    'Du er midt i en ortosebehandling som krever presisjon',
    'Du har en eldre kunde som trenger din fulle oppmerksomhet',
  ],
  consequence: 'Mange av kundene dine er eldre og foretrekker å ringe fremfor å booke på nett. Når de ikke får svar, prøver de en annen fotterapeut. Du mister kunden uten å vite at de ringte.',
  solutionIntro: 'Du trenger ikke velge mellom kunden i stolen og kunden på telefonen.',
  handles: [
    'Bestille time for fotpleie, ortose eller spesialistbehandling',
    'Endre eller avbestille eksisterende avtaler',
    'Svare på spørsmål om priser og behandlingstilbud',
    'Gi informasjon om åpningstider og beliggenhet',
    'Ta imot beskjeder fra kunder med spesielle behov',
  ],
  benefits: [
    'Du kan fokusere helt på kunden i stolen uten avbrytelser',
    'Eldre kunder som ringer får alltid svar, også utenom åpningstid',
    'Timeboken fylles opp uten at du trenger å ringe tilbake',
    'Du virker profesjonell og tilgjengelig, selv når du er opptatt',
  ],
  benefitsIntro: 'Fotterapi er en bransje der kundekontakt og tillit er avgjørende. Når kundene alltid får svar, kommer de tilbake.',
  chat: [
    { who: 'customer', text: 'Hei, jeg vil gjerne bestille time for fotpleie' },
    { who: 'ai', text: 'Hei! Velkommen til Fothelse. Har du vært hos oss før?' },
    { who: 'customer', text: 'Nei, dette er første gang' },
    { who: 'ai', text: 'Flott! For nye kunder anbefaler vi en førstegangskonsultasjon. Jeg har ledig onsdag klokken 11 eller torsdag klokken 14. Hva passer best?' },
    { who: 'customer', text: 'Onsdag passer fint' },
    { who: 'ai', text: 'Da har jeg satt opp onsdag kl. 11:00 til deg. Du får en bekreftelse på SMS. Velkommen!' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
