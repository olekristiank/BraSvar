import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for fysioterapeuter | Bra Svar!',
  description: 'Bra Svar tar telefonen mens du behandler pasienter. Timebestilling, førstegangshenvendelser og oppfølging helt automatisk.',
};

const data: IndustryPageData = {
  industry: 'Fysioterapeuter',
  intro: 'Du har hendene på pasienten og telefonen ringer. Igjen. Bra Svar tar samtalen, booker timen og sender deg oppsummeringen etterpå.',
  situation: 'Du står midt i en behandling. Pasienten ligger på benken med nåler i skulderen, eller du guider en øvelse der riktig teknikk er avgjørende. Telefonen ringer i lommen.',
  situationBullets: [
    'Du gjør ultralydbehandling og kan ikke slippe hodet',
    'Pasienten er midt i en krevende tøyningsøvelse og trenger din fulle oppmerksomhet',
    'Du har treningsgruppe i salen og fire pasienter som trenger veiledning samtidig',
    'Mellom to behandlinger har du fem minutter til journalføring, ikke til å ringe tilbake',
  ],
  consequence: 'Nye pasienter ringer gjerne flere klinikker og velger den som svarer først. Når du ringer tilbake to timer senere, har de allerede booket hos en annen fysioterapeut. Faste pasienter som trenger å endre time legger på og glemmer å ringe igjen, og møter ikke opp.',
  solutionIntro: 'Bra Svar kjenner åpningstidene dine, behandlingstypene du tilbyr og prisene dine.',
  handles: [
    'Timebestilling for nye og eksisterende pasienter',
    'Førstegangshenvendelser med informasjon om ventetid og behandlingstilbud',
    'Oppfølging og endring av eksisterende timer',
    'Spørsmål om priser, egenandel og forsikringsdekning',
    'Henvisningsspørsmål og hva pasienten bør ha med seg til første time',
  ],
  benefitsIntro: 'Fysioterapeuter jobber med hendene. Du kan ikke legge fra deg pasienten for å ta telefonen, og du skal ikke trenge det.',
  benefits: [
    'Behandle uten avbrytelser, hele dagen',
    'Nye pasienter får svar med en gang og booker time på stedet',
    'Færre hull i timeboken fordi endringer håndteres umiddelbart',
    'Pasienter med forsikringsspørsmål får svar uten at du bruker tid på det',
    'Mer tid til journalføring mellom behandlinger',
  ],
  chat: [
    { who: 'customer', text: 'Hei, jeg vil gjerne bestille time hos fysioterapeut.' },
    { who: 'ai', text: 'Hei! Vi tar imot nye pasienter. Ønsker du en førstegangstime?' },
    { who: 'customer', text: 'Ja, gjerne.' },
    { who: 'ai', text: 'Vi har ledig torsdag kl. 10:00 eller fredag kl. 14:30. Førstegangstime varer 45 minutter. Hva passer?' },
    { who: 'customer', text: 'Torsdag kl. 10 passer fint.' },
    { who: 'ai', text: 'Da setter jeg opp torsdag kl. 10:00. Ta med legitimasjon. Du får en bekreftelse på SMS.' },
  ],
  related: [
    { href: '/kiropraktor', label: 'Kiropraktor' },
    { href: '/naprapat-osteopat', label: 'Naprapat og osteopat' },
    { href: '/klinikk', label: 'Klinikk' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
