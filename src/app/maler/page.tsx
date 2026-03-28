import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for malere | Bra Svar!',
  description:
    'Få flere oppdrag uten å klatre ned fra stillaset. Bra Svar! tar imot prisforespørsler og avtaler befaring mens du maler.',
};

const data: IndustryPageData = {
  industry: 'Malere',
  intro:
    'Du står på stillaset med rulla i hånda. Fasaden er halvveis ferdig og malingen tørker fort. Telefonen ringer i lomma. Noen vil ha tilbud på maling av hele huset. Du kan ikke svare. Bra Svar! kan.',
  situation:
    'Som maler har du sjelden hendene fri. Du er enten oppe på et stillas, i gang med sprøytemaling, legger tapet eller kjører mellom oppdrag.',
  situationBullets: [
    'Oppe på stillas med rulle og maling',
    'Sprøytemaling der du har maske og fullt verneutstyr',
    'Tapetsering der limet tørker og timingen er alt',
    'Kjører mellom to oppdrag og kan ikke ta telefonen trygt',
    'Sparkler og sliper vegger med støv overalt',
  ],
  consequence:
    'Kunder som trenger maler sammenligner ofte flere tilbud. Den som svarer raskest og virker mest profesjonell, får som regel jobben. Et ubesvart anrop betyr at konkurrenten får oppdraget.',
  solutionIntro:
    'Bra Svar! tar imot henvendelsen, spør hva kunden trenger og avtaler befaring på dine vegne.',
  handles: [
    'Prisforespørsel for innvendig og utvendig maling',
    'Avtale om befaring for å se omfanget',
    'Sjekker tilgjengelighet og foreslår oppstartstidspunkt',
    'Tar imot spørsmål om innvendig eller utvendig arbeid',
    'Noterer ønsker om farger og overflatebehandling',
  ],
  benefitsIntro:
    'Med Bra Svar! kan du fokusere på penselen mens nye oppdrag kommer inn.',
  benefits: [
    'Aldri miste et oppdrag fordi du sto på stillaset',
    'Kunder får raskt og profesjonelt svar, selv midt i malersesongen',
    'Du får alle detaljer om oppdraget samlet etter arbeidsdagen',
    'Flere befaringer i kalenderen uten å løfte en finger',
  ],
  chat: [
    { who: 'customer', text: 'Hei, vi trenger maler til stue og gang. Kan dere gi et tilbud?' },
    { who: 'ai', text: 'Hei! Absolutt. For å gi et godt tilbud trenger vi litt mer info. Hvor stort er arealet omtrent, og hva slags arbeid trengs? Er det bare maling, eller trenger veggene sparkling først?' },
    { who: 'customer', text: 'Stua er rundt 30 kvadrat og gangen kanskje 10. Veggene er i grei stand, men trenger nok en runde med pussing.' },
    { who: 'ai', text: 'Det noterer jeg. Har dere tenkt på farge, eller vil dere ha råd om det også?' },
    { who: 'customer', text: 'Vi er usikre. Hadde vært fint med litt veiledning.' },
    { who: 'ai', text: 'Flott. Da foreslår jeg en befaring der maleren kan se veggene og hjelpe med fargevalg. Kan jeg få navnet og adressen deres, så tar han kontakt for å finne et tidspunkt?' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
