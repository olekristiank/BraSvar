import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for forsikringsrådgivere | Bra Svar!',
  description:
    'Ikke mist kunder mens du sitter i møte. Bra Svar håndterer forespørsler, skademeldinger og tilbud mens du rådgir.',
};

const data: IndustryPageData = {
  industry: 'Forsikringsrådgivere',
  intro:
    'Du sitter i et kundemøte og gjennomgår poliser punkt for punkt. Telefonen vibrerer i lomma. En potensiell ny kunde prøver å nå deg, men du kan ikke bryte midt i samtalen.',
  situation: 'Som forsikringsrådgiver er kalenderen din stappfull av møter, beregninger og oppfølging.',
  situationBullets: [
    'Du sitter i kundemøte og gjennomgår dekninger og vilkår',
    'Du regner på et tilbud som må leveres innen timen',
    'Du er på befaring etter en skademelding',
    'Du kjører mellom to kundemøter og rekker ikke å ta telefonen',
  ],
  consequence:
    'Forsikring handler om tillit. Når en kunde ikke får svar, ringer de neste rådgiver på lista. Det tar bare sekunder å miste et salg du har brukt uker på å bygge opp.',
  solutionIntro:
    'Bra Svar svarer profesjonelt på dine vegne og samler inn det du trenger for å følge opp effektivt.',
  handles: [
    'Nye forespørsler om forsikringstilbud',
    'Skademeldinger og videreformidling av hastehenvendelser',
    'Spørsmål om priser og dekningsmuligheter',
    'Endring av eksisterende poliser',
    'Booking av rådgivningsmøter',
  ],
  benefits: [
    'Aldri mist en ny forespørsel selv om du er opptatt',
    'Kundene føler seg ivaretatt fra første kontakt',
    'Du får samlet info og kan ringe tilbake forberedt',
    'Mer tid til rådgivning, mindre tid på telefontag',
  ],
  benefitsIntro:
    'En AI-assistent som forstår forsikringsbransjen og gir kundene dine et profesjonelt førstemøte, hver gang.',
  chat: [
    { who: 'customer', text: 'Hei, jeg trenger tilbud på bilforsikring. Har en 2023 Tesla Model Y.' },
    { who: 'ai', text: 'Hei! Det ordner vi. Vil du ha kasko eller delkasko?' },
    { who: 'customer', text: 'Kasko, den er ganske ny fortsatt.' },
    { who: 'ai', text: 'Forstår. Kan jeg få navnet ditt og registreringsnummeret, så lager rådgiveren et tilbud til deg?' },
    { who: 'customer', text: 'Erik Johansen, EV 12345.' },
    { who: 'ai', text: 'Takk, Erik. Du hører fra oss i løpet av dagen med et tilbud på kaskoforsikring for din Tesla.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
