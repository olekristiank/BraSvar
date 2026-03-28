import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for veterinærer | Bra Svar!',
  description: 'Veterinærer kan ikke legge fra seg et dyr midt i en behandling for å ta telefonen. Bra Svar svarer for deg og booker timer automatisk.',
};

const data: IndustryPageData = {
  industry: 'Veterinærer',
  intro: 'Du holder i en redd katt mens eieren prøver å roe den ned. Telefonen ringer. En annen dyreeier trenger hjelp. Du kan ikke ta den. De ringer et annet dyrehospital.',
  situation: 'Veterinærarbeid krever ro, presisjon og full oppmerksomhet. Et dyr på bordet kan ikke vente mens du svarer telefonen.',
  situationBullets: [
    'Du opererer eller behandler et dyr under narkose',
    'Du undersøker et nervøst dyr som krever rolig tilnærming',
    'Du gir vaksinasjoner og trenger begge hendene',
    'Du snakker med en bekymret dyreeier om diagnose og behandling',
  ],
  consequence: 'Dyreeiere som ringer med et sykt kjæledyr er ofte bekymret og har det travelt. Hvis de ikke får svar, søker de opp nærmeste alternativ og ringer dit. Du mister både den akutte henvendelsen og en potensiell fast kunde.',
  solutionIntro: 'Dyrene dine fortjener din fulle oppmerksomhet. Kundene dine fortjener å få svar.',
  handles: [
    'Bestille time for konsultasjon, vaksinering eller kontroll',
    'Akutte henvendelser om syke eller skadde dyr',
    'Spørsmål om priser, åpningstider og vakttelefon',
    'Bestilling av fôr, medisiner eller resepter',
    'Endre eller avbestille eksisterende timer',
    'Videresende akutte tilfeller direkte til deg',
  ],
  benefits: [
    'Bekymrede dyreeiere får svar med en gang, også på kvelden',
    'Du kan behandle dyr uten avbrytelser',
    'Akutte tilfeller fanges opp og prioriteres riktig',
    'Timeboken fylles opp uten at du bruker tid på telefon',
  ],
  benefitsIntro: 'Veterinærklinikker har ofte en blanding av planlagte timer og akutte henvendelser. Når telefonen alltid blir besvart, håndteres begge deler.',
  chat: [
    { who: 'customer', text: 'Hei, jeg trenger en time for katten min.' },
    { who: 'ai', text: 'Hei! Selvfølgelig. Er det en rutinekontroll, eller ønsker dere en undersøkelse?' },
    { who: 'customer', text: 'En undersøkelse, helst i dag om mulig.' },
    { who: 'ai', text: 'Vi har ledig i dag kl. 15:00. Passer det?' },
    { who: 'customer', text: 'Ja, vi kommer da.' },
    { who: 'ai', text: 'Flott. Dere er satt opp kl. 15:00. Bekreftelse kommer på SMS. Velkommen!' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
