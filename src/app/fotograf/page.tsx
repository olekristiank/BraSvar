import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for fotografer | Bra Svar!',
  description:
    'Aldri gå glipp av en booking igjen. Bra Svar! tar imot henvendelser mens du er på shoot, i bryllup eller redigerer med deadline.',
};

const data: IndustryPageData = {
  industry: 'Fotografer',
  intro:
    'Du står midt i et bryllup med kameraet i hendene. Lyset er perfekt akkurat nå. Telefonen ringer. En potensiell kunde vil bestille portrettfotografering neste uke. Du kan ikke svare. Bra Svar! kan.',
  situation:
    'Som fotograf er hendene dine alltid opptatt. Du holder kamera, justerer lys, poserer folk eller sitter i timevis foran skjermen og redigerer.',
  situationBullets: [
    'Midt i bryllupsseremonien der hvert sekund teller',
    'Portrettfotografering der du må holde kontakten med kunden foran deg',
    'Redigering med stram deadline og hundrevis av bilder igjen',
    'Utendørs shoot der utstyret krever begge hender',
    'Overlevering av ferdig galleri mens neste oppdrag ringer inn',
  ],
  consequence:
    'Hvert ubesvart anrop er en tapt booking. Par som leter etter bryllupsfotograf ringer neste på lista. Bedrifter som trenger produktbilder velger den som svarer først.',
  solutionIntro:
    'Bra Svar! svarer profesjonelt på dine vegne, samler inn det du trenger og sender deg en oppsummering når du er ferdig med shooten.',
  handles: [
    'Prisforespørsel på ulike typer fotografering',
    'Booking av portrett, bryllup og eventfotografering',
    'Sjekker tilgjengelighet og foreslår tidspunkt',
    'Informerer om pakker og hva som er inkludert',
    'Avtaler om bildelevering og tidsramme',
  ],
  benefitsIntro:
    'Med Bra Svar! kan du fokusere på det du gjør best, nemlig å ta fantastiske bilder.',
  benefits: [
    'Aldri miste en bryllupsbooking fordi du sto bak kameraet',
    'Kundene føler seg ivaretatt fra første kontakt',
    'Du får en ryddig oversikt over henvendelser etter hver shoot',
    'Profesjonelt førsteinntrykk som matcher kvaliteten på bildene dine',
  ],
  chat: [
    { who: 'customer', text: 'Hei, vi gifter oss 14. juni neste år og leter etter bryllupsfotograf.' },
    { who: 'ai', text: 'Så hyggelig, og gratulerer med forlovelsen! Da skal jeg hjelpe dere videre. Hvor skal bryllupet holdes?' },
    { who: 'customer', text: 'På Holmenkollen, seremonien er i kapellet og festen på restauranten etterpå.' },
    { who: 'ai', text: 'For en fin ramme! Ønsker dere fotografering bare fra seremonien, eller vil dere ha med forberedelser og fest også?' },
    { who: 'customer', text: 'Vi vil gjerne ha hele dagen, fra forberedelser til første dans.' },
    { who: 'ai', text: 'Det noterer jeg. Jeg sender beskjed til fotografen med dato, sted og ønskene deres, så tar han kontakt med dere for å snakke om pakker og pris. Kan jeg få e-postadressen deres?' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
