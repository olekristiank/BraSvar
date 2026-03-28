import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for treningssentre | Bra Svar!',
  description: 'Aldri gå glipp av nye medlemmer. Bra Svar svarer på telefonen når resepsjonen er opptatt, og hjelper med innmelding, priser og åpningstider.',
};

const data: IndustryPageData = {
  industry: 'Treningssentre',
  intro: 'Når resepsjonen er full og trenerne er på gulvet, ringer nye medlemmer forgjeves. Bra Svar tar imot samtalen og gir svar med en gang.',
  situation: 'Morgenen starter med rushtrafikk i resepsjonen. Medlemmer scanner kort, spør om gruppetimer og trenger hjelp med skap. Trenerne er opptatt med PT-timer og veiledning i salen. Telefonen ringer, men ingen har hendene fri.',
  situationBullets: [
    'Resepsjonen er opptatt med innsjekk og medlemshenvendelser',
    'Trenerne er midt i PT-timer eller gruppetimer på gulvet',
    'Rushtiden morgen og ettermiddag gjør det umulig å svare telefonen',
    'Nye henvendelser om medlemskap havner på telefonsvareren',
  ],
  consequence: 'En person som ringer for å spørre om medlemskap er klar til å melde seg inn. Når ingen svarer, sjekker de konkurrenten nedover gata. De fleste ringer ikke tilbake. Det betyr tapte månedsinntekter, gang etter gang.',
  solutionIntro: 'Bra Svar kjenner prisene, åpningstidene og tilbudet ditt.',
  handles: [
    'Nye innmeldinger og oppstart av medlemskap',
    'Priser på ulike medlemskap og tilleggstjenester',
    'Åpningstider, også for helger og helligdager',
    'Booking av PT-timer og prøvetreninger',
    'Frysing og endring av abonnement',
    'Informasjon om gruppetimer og treningstilbud',
  ],
  benefitsIntro: 'Et treningssenter lever av faste medlemmer. Hver ubesvarte telefon er en potensiell månedsbetaler som forsvinner.',
  benefits: [
    'Nye medlemmer får svar selv midt i rushtiden',
    'Trenerne kan fokusere på de som allerede er i salen',
    'Resepsjonen slipper å velge mellom kø og telefon',
    'Færre tapte innmeldinger, spesielt i januar og etter sommeren',
    'Åpent for henvendelser også utenom bemannede timer',
  ],
  chat: [
    { who: 'customer', text: 'Hei, jeg vurderer å melde meg inn. Hva koster det?' },
    { who: 'ai', text: 'Hei! Fint at du er interessert. Vi har tre medlemskap: Basis til 349 kr/mnd, Pluss med gruppetimer til 449 kr/mnd, og Premium med PT inkludert til 699 kr/mnd. Alle er uten bindingstid.' },
    { who: 'customer', text: 'Pluss høres bra ut. Kan jeg komme innom og prøve først?' },
    { who: 'ai', text: 'Absolutt! Jeg setter opp en gratis prøvetime for deg. Hvilket tidspunkt passer best?' },
    { who: 'customer', text: 'I morgen etter jobb, rundt 17?' },
    { who: 'ai', text: 'Det passer fint. Jeg noterer deg for prøvetrening i morgen kl. 17:00. Du får en bekreftelse på SMS. Bare ta med treningstøy, så viser vi deg rundt!' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
