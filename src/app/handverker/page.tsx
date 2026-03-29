import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for håndverkere | Bra Svar!',
  description:
    'Mist aldri en jobbforespørsel igjen. Bra Svar tar telefonen når du står på taket, under vasken eller kjører mellom oppdrag. Gratis å prøve.',
};

const data: IndustryPageData = {
  industry: 'Håndverkere',
  intro:
    'Du står på et tak i regnværet. Telefonen ringer i lomma. Du vet det kan være en ny jobb, men akkurat nå har du begge hendene fulle. Når du ringer tilbake to timer senere, har kunden allerede ringt noen andre.',
  situation: 'Som håndverker er du sjelden i nærheten av en kontorpult.',
  situationBullets: [
    'Du er oppe på taket med hendene fulle av verktøy',
    'Du ligger under vasken med hodet i skapet',
    'Det er så mye støy fra maskiner at du ikke hører telefonen',
    'Du kjører mellom to oppdrag og rekker ikke svare',
  ],
  consequence:
    'Nye kunder ringer gjerne tre håndverkere samtidig. Den som svarer først, får jobben. Når du ringer tilbake på slutten av dagen, har de allerede bestemt seg for en annen.',
  solutionIntro:
    'Bra Svar tar imot henvendelsene dine og samler informasjonen du trenger for å følge opp.',
  handles: [
    'Ta imot forespørsler om nye jobber',
    'Svare på prisforespørsler og gi estimater',
    'Avtale befaring og vurdering',
    'Informere om tilgjengelighet og ventetid',
    'Samle kontaktinfo og beskrivelse av jobben',
    'Svare på spørsmål om hva du tilbyr',
  ],
  benefits: [
    'Du mister ingen jobber selv om du ikke kan svare',
    'Kundene får et profesjonelt førsteinntrykk',
    'Du får en oversikt over nye henvendelser når du er ferdig for dagen',
    'Mer tid på jobb, mindre tid på telefon',
  ],
  benefitsIntro:
    'En assistent som tar imot jobbene dine mens du faktisk utfører dem.',
  chat: [
    { who: 'customer', text: 'Hei, vi trenger en rørlegger. Badet vårt lekker og vi skal pusse det opp.' },
    { who: 'ai', text: 'Hei! Det kan vi hjelpe med. Er det akutt lekkasje, eller planlagt oppussing?' },
    { who: 'customer', text: 'Det er ikke akutt, men vi vil gjerne komme i gang ganske snart.' },
    { who: 'ai', text: 'Forstår. Kan jeg få adressen din? Så ser vi på muligheten for en befaring i løpet av neste uke.' },
    { who: 'customer', text: 'Storgata 15 i Drammen.' },
    { who: 'ai', text: 'Fint, da noterer jeg det. Du hører fra oss i løpet av dagen med forslag til tidspunkt for befaring.' },
  ],
  related: [
    { href: '/elektriker', label: 'Elektriker' },
    { href: '/rorlegger', label: 'Rørlegger' },
    { href: '/maler', label: 'Maler' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
