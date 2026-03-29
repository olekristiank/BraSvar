import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI-telefonsvar for advokater | Bra Svar',
  description:
    'Bra Svar tar imot nye henvendelser og hastesamtaler mens du er i rettsmøte eller klientmøte. Profesjonelt, diskret og alltid tilgjengelig.',
};

const data: IndustryPageData = {
  industry: 'Advokater',
  intro:
    'Du sitter i rettsmøte. Telefonen vibrerer i lommen. Det kan være en ny klient med en tidskritisk sak. Bra Svar tar samtalen og sørger for at ingenting faller mellom stolene.',
  situation:
    'Advokater er utilgjengelige store deler av dagen. Rettsmøter, klientmøter og dokumentgjennomgang krever konsentrasjon. Samtidig ringer potensielle klienter som trenger hjelp nå.',
  situationBullets: [
    'Opptatt i rettsmøte som varer hele dagen',
    'Klientmøte der du ikke kan ta andre samtaler',
    'Dypt konsentrert i dokumentgjennomgang',
    'Flere saker med frister som haster',
  ],
  consequence:
    'En potensiell klient som ikke får svar, ringer neste advokat på listen. Haster-saker som ikke fanges opp kan få alvorlige konsekvenser.',
  solutionIntro:
    'Bra Svar håndterer henvendelser profesjonelt og prioriterer det som haster.',
  handles: [
    'Ta imot nye henvendelser og notere sakens art',
    'Håndtere møteforespørsler og finne ledige tider',
    'Videreformidle saksopplysninger til riktig advokat',
    'Flagge haster-saker som trenger umiddelbar oppmerksomhet',
  ],
  benefitsIntro:
    'Bra Svar fungerer som din faste sekretær, tilgjengelig døgnet rundt.',
  benefits: [
    'Være til stede i rettsmøter uten å bekymre deg for tapte anrop',
    'Fange opp nye klienter som ringer utenfor kontortid',
    'Prioritere haster-saker automatisk',
    'Gi et profesjonelt førsteinntrykk til alle som ringer',
  ],
  chat: [
    { who: 'customer', text: 'Hei, jeg trenger hjelp med en husleietvist. Utleier vil kaste meg ut.' },
    {
      who: 'ai',
      text: 'Hei. Jeg forstår at dette er en vanskelig situasjon. Har du mottatt et skriftlig varsel om utkastelse?',
    },
    { who: 'customer', text: 'Ja, jeg fikk brev i forrige uke. Fristen er om to uker.' },
    {
      who: 'ai',
      text: 'Da er det viktig å handle raskt. Advokaten har erfaring med husleietvister. Jeg setter deg opp for en samtale i morgen formiddag, så kan dere gå gjennom brevet og mulighetene dine. Kan jeg få navnet ditt og e-post?',
    },
    { who: 'customer', text: 'Erik Hansen, erik.hansen@mail.no.' },
    {
      who: 'ai',
      text: 'Takk, Erik. Du hører fra oss innen i morgen kl. 10. Ta vare på alle dokumenter du har mottatt fra utleier.',
    },
  ],
  related: [
    { href: '/regnskapsforer', label: 'Regnskapsfører' },
    { href: '/eiendomsmegler', label: 'Eiendomsmegler' },
    { href: '/forsikring', label: 'Forsikring' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
