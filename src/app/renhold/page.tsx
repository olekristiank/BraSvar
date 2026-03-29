import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI telefonsvarer for renholdsbedrifter | Bra Svar!',
  description:
    'Ikke stopp moppingen for å ta telefonen. Bra Svar håndterer nye oppdrag og endringsønsker mens du gjør jobben. Gratis å prøve, ingen binding.',
};

const data: IndustryPageData = {
  industry: 'Renholdsbedrifter',
  intro:
    'Du er på oppdrag hos en klient, har verneutstyr og hansker på, og vasker gulv i et kontorlandskap. Telefonen ringer i jakkelomma i garderoben. En bedrift som vil ha tilbud, gir opp etter tre ring.',
  situation: 'Renholdsarbeid er fysisk, travelt og du er sjelden i nærheten av telefonen.',
  situationBullets: [
    'Du vasker gulv med mopp og maskin og har hansker på',
    'Du er inne i et bygg der telefonen ligger igjen i bilen',
    'Du koordinerer teamet ditt mellom flere oppdrag',
    'Du er på befaring for å vurdere et nytt lokale',
  ],
  consequence:
    'Bedrifter som trenger renhold, velger den som svarer først. De sender ikke epost og venter. De ringer neste firma på lista. Hvert tapte anrop kan bety en fast kontrakt du aldri fikk.',
  solutionIntro:
    'Bra Svar svarer på dine vegne og sørger for at nye oppdrag ikke forsvinner mens du jobber.',
  handles: [
    'Tilbudsforespørsler fra nye bedriftskunder',
    'Nye oppdrag med informasjon om lokale og behov',
    'Endringsønsker fra eksisterende kunder',
    'Spørsmål om priser, frekvens og tjenester',
    'Koordinering av nøkkellevering og tilgang',
  ],
  benefits: [
    'Fang opp nye kontrakter uten å stoppe arbeidet',
    'Bedriftskunder får et profesjonelt førstinntrykk',
    'Du får en tydelig oppsummering du kan følge opp etter oppdraget',
    'Mer omsetning uten mer administrasjon',
  ],
  benefitsIntro:
    'En AI-assistent som tar seg av kundekontakten mens du tar deg av renholdet.',
  chat: [
    { who: 'customer', text: 'Hei, vi trenger ukentlig renhold av kontorlokalene våre. Er det noe dere kan tilby?' },
    { who: 'ai', text: 'Hei! Absolutt. Hvor stort er lokalet, og hvor mange ansatte sitter der?' },
    { who: 'customer', text: 'Rundt 300 kvadratmeter, vi er 15 ansatte. Helst renhold på kveldstid.' },
    { who: 'ai', text: 'Det passer fint. Vi tilbyr kveldstid mandag til fredag. Kan jeg få firmanavn og kontaktperson, så lager vi et tilbud?' },
    { who: 'customer', text: 'Firmaet heter Solberg Regnskap, og jeg heter Kjetil Paulsen.' },
    { who: 'ai', text: 'Takk, Kjetil. Vi sender et tilbud til Solberg Regnskap i løpet av dagen. Fint at dere tok kontakt.' },
  ],
  related: [
    { href: '/bilpleie', label: 'Bilpleie' },
    { href: '/handverker', label: 'Håndverker' },
    { href: '/konsulent', label: 'Konsulent' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
