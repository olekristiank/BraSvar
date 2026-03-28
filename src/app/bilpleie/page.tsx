import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for bilpleie | Bra Svar!',
  description:
    'Ikke legg fra deg polermaskinen for å ta telefonen. Bra Svar booker vask, polering og coating mens du jobber.',
};

const data: IndustryPageData = {
  industry: 'Bilpleie',
  intro:
    'Du er midt i et lag med keramisk coating. Polermaskinen kjører, du har hansker og vernemaske på, og bilen må bli ferdig før lyset endrer seg. Telefonen i lomma ringer, men hendene dine er opptatt.',
  situation: 'Bilpleie krever fokus, presisjon og begge hendene. Telefonen passer sjelden inn.',
  situationBullets: [
    'Du polerer lakk og kan ikke stoppe midt i et panel',
    'Du legger keramisk coating som herder raskt',
    'Du rengjør interiøret med damp og kjemikalier',
    'Du leverer tilbake en bil og neste kunde venter allerede',
  ],
  consequence:
    'Kunder som vil booke bilpleie gjør det ofte impulsivt. Får de ikke svar, scroller de videre til neste på Google. En tapt samtale er en tapt booking på kanskje flere tusen kroner.',
  solutionIntro:
    'Bra Svar tar imot bestillinger og svarer på spørsmål, slik at du kan holde fokus på bilen foran deg.',
  handles: [
    'Bestille utvendig vask, polering og lakkforsegling',
    'Innvendig rens, dyprengjøring og luktfjerning',
    'Keramisk coating og lakkbeskyttelse',
    'Spørsmål om priser, pakker og behandlingstid',
    'Endre eller flytte eksisterende bestillinger',
  ],
  benefits: [
    'Bookinger ruller inn selv når du er opptatt med en bil',
    'Kunder får raske svar om priser og tilgjengelighet',
    'Du slipper å ta av deg hanskene for å svare på telefonen',
    'Mer struktur på dagen uten ekstra administrasjon',
  ],
  benefitsIntro:
    'En AI-assistent som kjenner tjenestene dine og booker jobber for deg, døgnet rundt.',
  chat: [
    { who: 'customer', text: 'Hei, jeg vil gjerne bestille både innvendig og utvendig vask. Hva koster det?' },
    { who: 'ai', text: 'Hei! Innvendig og utvendig vask starter på 1 490 kroner. Hva slags bil har du?' },
    { who: 'customer', text: 'En Volvo XC60 2022. Den trenger en skikkelig runde.' },
    { who: 'ai', text: 'Fin bil. Vi har ledig tirsdag kl. 09 og torsdag kl. 12. Hva passer best?' },
    { who: 'customer', text: 'Tirsdag morgen er fint.' },
    { who: 'ai', text: 'Da setter vi av tirsdag kl. 09 for full inn- og utvendig vask av din XC60. Kan jeg få navnet ditt?' },
    { who: 'customer', text: 'Thomas Vik.' },
    { who: 'ai', text: 'Perfekt, Thomas. Regn med rundt tre timer. Vi ses tirsdag!' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
