import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI-telefonsvar for velværeklinikker | Bra Svar',
  description:
    'Bra Svar svarer telefonen mens du gir behandling. Booking, gavekort og pakker håndteres uten at du avbryter kunden. Gratis å prøve.',
};

const data: IndustryPageData = {
  industry: 'Velværeklinikker',
  intro:
    'Kunden din ligger på benken med lukkede øyne. Telefonen ringer i resepsjonen, men det er ingen der. Bra Svar tar imot samtalen mens du gir en perfekt behandling.',
  situation:
    'En velværeklinikk lever av atmosfæren. Massasje, spa-behandlinger og avslappende omgivelser krever ro. Å løpe ut for å ta telefonen ødelegger opplevelsen for kunden på benken.',
  situationBullets: [
    'Midt i en massasje du ikke kan avbryte',
    'Spa-behandling der stemningen er alt',
    'Alene på klinikken uten resepsjonist',
    'Flere behandlinger på rad uten pause',
  ],
  consequence:
    'En kunde som ikke får svar, booker hos konkurrenten. Et tapt gavekort-salg i desember kan bety tusenvis i tapte inntekter.',
  solutionIntro:
    'Bra Svar kjenner behandlingene dine og tar bookinger som om det satt noen i resepsjonen.',
  handles: [
    'Bestille massasje, ansiktsbehandling og andre behandlinger',
    'Selge og informere om gavekort',
    'Presentere pakketilbud og sesongtilbud',
    'Svare på åpningstider og tilgjengelighet',
  ],
  benefitsIntro:
    'Bra Svar gir klinikken din en resepsjon som matcher standarden du setter i behandlingsrommet.',
  benefits: [
    'Gi kundene uforstyrret behandling fra start til slutt',
    'Aldri miste en booking, selv på kveldstid',
    'Øke gavekort-salget ved å alltid være tilgjengelig',
    'Slippe stresset med å sjekke tapte anrop mellom behandlinger',
  ],
  chat: [
    { who: 'customer', text: 'Hei, har dere ledig tid for hot stone massasje denne uken?' },
    {
      who: 'ai',
      text: 'Hei! Ja, vi har ledig for hot stone massasje. Ønsker du 60 eller 90 minutter?',
    },
    { who: 'customer', text: '90 minutter, helst på lørdag.' },
    {
      who: 'ai',
      text: 'Lørdag har vi ledig kl. 11:00 og kl. 14:00. 90 minutter hot stone koster 1290 kr. Hvilken tid passer best?',
    },
    { who: 'customer', text: 'Kl. 14 passer bra. Kan jeg også kjøpe et gavekort til moren min?' },
    {
      who: 'ai',
      text: 'Selvfølgelig! Vi har gavekort på valgfritt beløp eller på spesifikke behandlinger. Jeg booker deg kl. 14:00 på lørdag, og sender deg info om gavekort på SMS. Hva er navnet ditt?',
    },
  ],
  related: [
    { href: '/hudklinikk', label: 'Hudklinikk' },
    { href: '/skjonnhet', label: 'Skjønnhet' },
    { href: '/akupunktor', label: 'Akupunktør' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
