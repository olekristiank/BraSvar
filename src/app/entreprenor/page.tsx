import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for entreprenører | Bra Svar!',
  description: 'Få med deg alle nye prosjektforespørsler. Bra Svar svarer telefonen når du er på byggeplassen og samler inn det du trenger for tilbud.',
};

const data: IndustryPageData = {
  industry: 'Entreprenører',
  intro: 'Når du står midt på byggeplassen med hørselsvern og HMS-ansvar, kan du ikke svare telefonen. Bra Svar fanger opp nye prosjekter før konkurrenten gjør det.',
  situation: 'Du er på byggeplassen. Gravemaskinen kjører, forskaling skal på plass, og underentreprenøren trenger avklaring. Telefonen vibrerer i lomma, men du hører den ikke over støyen. Etter lunsj ser du tre tapte anrop fra ukjente numre.',
  situationBullets: [
    'Støy fra maskiner og verktøy gjør det umulig å høre telefonen',
    'HMS-krav betyr at du ikke kan bruke telefonen i arbeidssoner',
    'Møter med underentreprenører og leverandører tar hele formiddagen',
    'Befaring og prosjektledelse holder deg borte fra kontoret',
  ],
  consequence: 'En boligeier som trenger garasje, påbygg eller grunnarbeid ringer tre firmaer. Den som svarer først og virker profesjonell, får befaringen. De to andre hører aldri fra kunden igjen. I en bransje med god konkurranse er responstid alt.',
  solutionIntro: 'Bra Svar tar imot forespørselen, spør de riktige spørsmålene, og sender deg en oppsummering.',
  handles: [
    'Nye prosjektforespørsler med detaljer om hva kunden trenger',
    'Forespørsler om pristilbud og estimater',
    'Booking av befaring på ledig tidspunkt',
    'Spørsmål om tilgjengelighet og oppstartstid',
    'Oppfølging av eksisterende prosjekter og tidslinjer',
    'Viderekobling av hastesaker til riktig person',
  ],
  benefitsIntro: 'I entreprise vinner du jobben før du løfter en hammer. Rask respons og profesjonelt førsteinntrykk avgjør hvem som får oppdraget.',
  benefits: [
    'Nye forespørsler blir fanget opp, selv midt i arbeidsdagen',
    'Du får en ferdig oppsummering med kundens behov og kontaktinfo',
    'Kunden opplever et profesjonelt firma som svarer med en gang',
    'Du slipper å bruke kvelden på å ringe tilbake ukjente numre',
    'Befaringer bookes direkte uten frem-og-tilbake på telefon',
  ],
  chat: [
    { who: 'customer', text: 'Hei, vi skal bygge garasje og lurer på om dere kan gi et tilbud.' },
    { who: 'ai', text: 'Hei! Ja, det kan vi absolutt hjelpe med. Har dere noen planer eller tegninger allerede, eller trenger dere hjelp fra grunnen av?' },
    { who: 'customer', text: 'Vi har en enkel skisse, men ingen godkjente tegninger ennå. Det skal være en dobbel garasje med flatt tak.' },
    { who: 'ai', text: 'Det noterer jeg. For å gi et godt estimat trenger vi å se tomta. Kan vi sette opp en befaring? Det er uforpliktende.' },
    { who: 'customer', text: 'Ja, gjerne. Vi bor på Lillehammer.' },
    { who: 'ai', text: 'Fint! Vi har ledig for befaring på torsdag eller fredag denne uken. Hva passer for dere? Jeg sender detaljer og bekreftelse etterpå.' },
  ],
  related: [
    { href: '/arkitekt', label: 'Arkitekt' },
    { href: '/elektriker', label: 'Elektriker' },
    { href: '/handverker', label: 'Håndverker' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
