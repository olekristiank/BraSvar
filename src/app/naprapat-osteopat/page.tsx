import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for naprapater og osteopater | Bra Svar!',
  description:
    'Fokuser på pasienten på benken. Bra Svar tar telefonen når du behandler, og sørger for at nye pasienter får time. Gratis å prøve.',
};

const data: IndustryPageData = {
  industry: 'Naprapater og osteopater',
  intro:
    'Du har pasienten på benken og holder på med en manipulering som krever full konsentrasjon. Telefonen ringer i lommen. Du kan ikke ta den nå. Men det kan være en ny pasient som har gått i flere uker med smerter og endelig tar kontakt.',
  situation: 'Naprapater og osteopater jobber alene med pasienten, uten resepsjon eller sekretær.',
  situationBullets: [
    'Du manipulerer nakke eller rygg og kan ikke stoppe midtveis',
    'Pasienten ligger avkledd på benken og fortjener privatliv',
    'Du har behandlinger rygg mot rygg uten pause',
    'Du driver klinikken alene og er din egen sekretær',
  ],
  consequence:
    'Nye pasienter som ringer for første gang gir deg sjelden en sjanse til. Hvis ingen svarer, finner de en annen behandler. Og en førstegangspasient som ikke ringer tilbake er tapt inntekt i måneder fremover.',
  solutionIntro:
    'Bra Svar tar imot nye pasienter på telefonen og booker dem inn, mens du gjør jobben din på benken.',
  handles: [
    'Bestille time for ny eller eksisterende pasient',
    'Førstegangshenvendelser med informasjon om hva de kan forvente',
    'Endre eller avbestille timer',
    'Spørsmål om priser og behandlingsformer',
    'Informasjon om ventetid og tilgjengelighet',
  ],
  benefits: [
    'Nye pasienter blir tatt imot profesjonelt med en gang',
    'Du slipper å ringe tilbake mellom behandlinger',
    'Full konsentrasjon på pasienten foran deg',
    'Timeboka fylles opp uten at du løfter en finger',
  ],
  benefitsIntro:
    'En AI-assistent som gir nye pasienter et godt førsteinntrykk og holder timeboka full.',
  chat: [
    { who: 'customer', text: 'Hei, jeg vil gjerne bestille time hos naprapat. Kan jeg få en time?' },
    { who: 'ai', text: 'Hei! Det kan vi absolutt hjelpe med. Har du vært hos oss før?' },
    { who: 'customer', text: 'Nei, dette er første gang.' },
    { who: 'ai', text: 'Velkommen! Første konsultasjon er 45 minutter og inkluderer undersøkelse og behandling. Vi har ledig tirsdag kl. 10:00 eller onsdag kl. 15:30. Hva passer best?' },
    { who: 'customer', text: 'Onsdag kl. 15:30 passer fint.' },
    { who: 'ai', text: 'Flott. Kan jeg få navnet og telefonnummeret ditt?' },
    { who: 'customer', text: 'Kari Nilsen, 980 45 123.' },
    { who: 'ai', text: 'Da er du booket inn onsdag kl. 15:30, Kari. Ha på lett klær som er enkel å bevege seg i. Vi sees!' },
  ],
  related: [
    { href: '/fysioterapeut', label: 'Fysioterapeut' },
    { href: '/kiropraktor', label: 'Kiropraktor' },
    { href: '/akupunktor', label: 'Akupunktør' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
