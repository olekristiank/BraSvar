import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI-telefonsvar for hudklinikker | Bra Svar',
  description:
    'Bra Svar tar imot samtaler mens du behandler. Konsultasjoner, hudanalyse og etterbehandling blir håndtert automatisk.',
};

const data: IndustryPageData = {
  industry: 'Hudklinikker',
  intro:
    'Du har hendene i sterile hansker og laseren kjører. Telefonen ringer. Bra Svar tar samtalen slik at du kan holde fokus på pasienten.',
  situation:
    'Hudklinikker jobber med presisjon. Laserbehandlinger, injeksjoner og sterile prosedyrer krever full oppmerksomhet. Å avbryte midt i en behandling er ikke et alternativ.',
  situationBullets: [
    'Midt i laserbehandling med verneutstyr på',
    'Injeksjoner som krever millimeterpresisjon',
    'Sterilt miljø der du ikke kan ta på telefonen',
    'Konsultasjoner der pasienten fortjener din fulle oppmerksomhet',
  ],
  consequence:
    'Hver ubesvart samtale kan være en ny pasient som vil bestille konsultasjon. De ringer neste klinikk i stedet.',
  solutionIntro:
    'Bra Svar kjenner hudklinikkens tjenester og svarer som en del av teamet ditt.',
  handles: [
    'Bestille konsultasjon for nye og eksisterende pasienter',
    'Informere om hudanalyse og hva den innebærer',
    'Presentere behandlingspakker og priser',
    'Svare på spørsmål om etterbehandling og pleie',
  ],
  benefitsIntro:
    'Med Bra Svar får hudklinikken din en resepsjon som aldri tar pause.',
  benefits: [
    'Behandle pasienter uten avbrytelser',
    'Fange opp alle nye henvendelser, også etter stengetid',
    'Redusere ventetid for pasienter som ringer',
    'Frigjøre resepsjonen til å ta seg av de som er på klinikken',
  ],
  chat: [
    { who: 'customer', text: 'Hei, jeg lurer på om dere tilbyr botox-behandling?' },
    {
      who: 'ai',
      text: 'Hei! Ja, vi tilbyr botox. Første steg er en konsultasjon der behandleren vurderer dine ønsker og lager en plan. Skal jeg booke deg inn?',
    },
    { who: 'customer', text: 'Ja gjerne. Hva koster en konsultasjon?' },
    {
      who: 'ai',
      text: 'Konsultasjonen er gratis og tar ca. 20 minutter. Vi har ledig torsdag kl. 14:00 og fredag kl. 10:30. Passer noen av de?',
    },
    { who: 'customer', text: 'Fredag kl. 10:30 passer fint.' },
    {
      who: 'ai',
      text: 'Flott, da setter jeg deg opp fredag kl. 10:30. Kan jeg få navnet ditt og et telefonnummer?',
    },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
