import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI-telefonsvar for regnskapsførere | Bra Svar',
  description:
    'Bra Svar svarer kunder og nye henvendelser mens du jobber med årsoppgjør og MVA-frister. Aldri mist en ny kunde igjen.',
};

const data: IndustryPageData = {
  industry: 'Regnskapsførere',
  intro:
    'MVA-fristen er i morgen. Du sitter med tallene og trenger full konsentrasjon. Telefonen ringer hvert kvarter. Bra Svar tar samtalen slik at du kan levere på tid.',
  situation:
    'Regnskapsførere jobber med frister som ikke flytter seg. Årsoppgjør, MVA-innlevering og lønnskjøringer krever dypt fokus. Hver avbrytelse betyr feil, forsinkelser og overtid.',
  situationBullets: [
    'Midt i årsoppgjør med deadline i morgen',
    'MVA-fristen nærmer seg og alt må stemme',
    'Lønnskjøring der én feil rammer mange',
    'Dypt konsentrert i kompliserte beregninger',
  ],
  consequence:
    'En ny bedrift som ringer og ikke får svar, finner en annen regnskapsfører. Eksisterende kunder som venter på svar, blir frustrerte og vurderer å bytte.',
  solutionIntro:
    'Bra Svar svarer profesjonelt og samler informasjonen du trenger for å følge opp mellom fristene.',
  handles: [
    'Registrere nye kundehenvendelser med kontaktinfo og behov',
    'Svare på spørsmål om frister og innleveringsdatoer',
    'Gi status på fakturaer og betalinger',
    'Booke møter for gjennomgang og rådgivning',
  ],
  benefitsIntro:
    'Med Bra Svar kan du jobbe uforstyrret når det gjelder som mest.',
  benefits: [
    'Holde fokus på fristene uten avbrytelser',
    'Fange opp nye kunder selv i de travleste periodene',
    'Gi eksisterende kunder svar uten å stoppe arbeidet',
    'Redusere stress i perioder med mange samtidige frister',
  ],
  chat: [
    { who: 'customer', text: 'Hei, vi er en nyoppstartet bedrift og trenger regnskapsfører. Er dere ledige?' },
    {
      who: 'ai',
      text: 'Hei! Hyggelig at dere tar kontakt. Hva slags bedrift har dere startet, og hvor mange ansatte er dere?',
    },
    { who: 'customer', text: 'Vi er et konsulentfirma, tre ansatte. Vi trenger hjelp med alt fra lønn til MVA.' },
    {
      who: 'ai',
      text: 'Det kan vi hjelpe med. For et konsulentfirma med tre ansatte passer vår standardpakke godt. Den dekker lønn, MVA og årsregnskap. Jeg setter opp et uforpliktende møte der dere kan gå gjennom behovene i detalj. Hvilken dag passer?',
    },
    { who: 'customer', text: 'Neste onsdag hadde vært fint.' },
    {
      who: 'ai',
      text: 'Fint, jeg noterer onsdag. Kan jeg få firmanavnet, kontaktperson og e-post, så sender vi en møtebekreftelse?',
    },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
