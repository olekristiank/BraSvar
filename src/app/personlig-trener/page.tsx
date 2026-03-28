import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for personlige trenere | Bra Svar!',
  description:
    'Få flere klienter uten å miste fokus på treningen. Bra Svar tar telefonen mens du er i salen.',
};

const data: IndustryPageData = {
  industry: 'Personlige trenere',
  intro:
    'Du spotter klienten din i benkpress. Telefonen vibrerer i treningsbuksa. Du kan ikke slippe stanga for å svare. Men det kan være noen som vurderer å starte med PT og endelig tok mot til seg og ringte.',
  situation: 'Som personlig trener er du alltid opptatt med en klient når nye potensielle kunder ringer.',
  situationBullets: [
    'Du er midt i en treningsøkt og kan ikke ta en pause',
    'Hendene er fulle av vekter eller du demonstrerer en øvelse',
    'Du er svett og telefonen ligger i garderoben',
    'Du har økter rett etter hverandre fra morgen til kveld',
  ],
  consequence:
    'Folk som vurderer PT tar sjelden kontakt mer enn en gang. Hvis du ikke svarer, velger de en annen trener eller dropper det helt. Hver ubesvart samtale kan være en klient du aldri får.',
  solutionIntro:
    'Bra Svar fanger opp interesserte kunder og gir dem den informasjonen de trenger for å bestemme seg.',
  handles: [
    'Bestille prøvetime eller første konsultasjon',
    'Informasjon om pakkepriser og abonnementer',
    'Spørsmål om treningsopplegg og spesialisering',
    'Tilgjengelighet og treningstider',
    'Praktisk informasjon om treningslokale og utstyr',
  ],
  benefits: [
    'Potensielle klienter får svar mens motivasjonen er på topp',
    'Du kan fokusere fullt på klienten du trener akkurat nå',
    'Flere prøvetimer betyr flere faste klienter over tid',
    'Du fremstår profesjonell selv om du er en soloaktør',
  ],
  benefitsIntro:
    'En AI-assistent som selger deg inn og booker prøvetimer, mens du gjør det du er best på.',
  chat: [
    { who: 'customer', text: 'Hei, jeg har lyst til å prøve PT. Har du ledig tid denne uka?' },
    { who: 'ai', text: 'Hei! Så bra at du tar kontakt. Vi tilbyr en uforpliktende prøvetime der vi kartlegger målene dine. Har du trent med PT før?' },
    { who: 'customer', text: 'Nei, aldri. Jeg er litt usikker på hva det innebærer egentlig.' },
    { who: 'ai', text: 'Ingen grunn til å være nervøs! Prøvetimen varer en time og er helt uforpliktende. Vi har ledig torsdag kl. 17:00 eller fredag kl. 09:00. Passer noen av de?' },
    { who: 'customer', text: 'Torsdag kl. 17 funker.' },
    { who: 'ai', text: 'Perfekt! Kan jeg få navnet ditt?' },
    { who: 'customer', text: 'Jonas Berg.' },
    { who: 'ai', text: 'Fint, Jonas. Du er booket inn torsdag kl. 17:00. Ta med treningstøy og vannflaske. Gleder oss til å se deg!' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
