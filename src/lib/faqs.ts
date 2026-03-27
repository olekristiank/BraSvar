export interface FAQ {
  q: string;
  a: string;
  category: string;
}

export interface FAQCategory {
  title: string;
  faqs: FAQ[];
}

export const faqs: FAQ[] = [
  // Kom i gang
  {
    q: 'Hvor raskt kan vi komme i gang?',
    a: 'De fleste er i gang innen 1 uke etter den innledende samtalen. Vi trenger grunnleggende informasjon om bedriften din, bygger en prøveversjon, og tester sammen med deg til du er fornøyd.',
    category: 'Kom i gang',
  },
  {
    q: 'Kan assistenten håndtere booking og kalendere?',
    a: 'Ja, assistenten kan kobles til de fleste systemer. Timebestilling, kalendere, CRM, ordrebehandling og lagerstyring. Den kan sjekke ledige tider, booker avtaler, sjekker lagerstatus og sender bekreftelser. Helt automatisk.',
    category: 'Kom i gang',
  },
  {
    q: 'Kan jeg beholde mitt eksisterende telefonnummer?',
    a: 'Ja, absolutt. Du setter opp en enkel viderekobling fra ditt nåværende nummer til assistenten. Kundene dine ringer samme nummer som før – de merker ingen forskjell.',
    category: 'Kom i gang',
  },

  // Om assistenten
  {
    q: 'Hva skjer om AI-assistenten ikke kan svare?',
    a: 'Hvis assistenten møter et spørsmål den ikke kan besvare, kan vi sette opp viderekobling til deg.',
    category: 'Om assistenten',
  },
  {
    q: 'Støtter dere andre språk enn norsk?',
    a: 'AI-assistenten snakker flytende og naturlig norsk, men kan også snakke engelsk. Vi legger til flere språk ved behov.',
    category: 'Om assistenten',
  },
  {
    q: 'Hvordan høres assistenten ut?',
    a: 'Assistenten snakker med en naturlig, menneskelig stemme – ikke en typisk robotstemme. De fleste som ringer merker ikke at det er en AI. Vi tilpasser tone og stil etter bedriften din, slik at den passer inn med merkevaren din.',
    category: 'Om assistenten',
  },
  {
    q: 'Fungerer det for min bransje?',
    a: 'Bra Svar fungerer for de aller fleste bransjer – fra håndverkere og helsepersonell til advokater, frisører og bilverksteder. Vi tilpasser assistenten til din bedrift, dine tjenester og dine kunders behov.',
    category: 'Om assistenten',
  },
  {
    q: 'Kan assistenten sende SMS eller e-post etter en samtale?',
    a: 'Ja, med Basis-pakken kan assistenten sende SMS automatisk – for eksempel bekreftelse på en avtale, veibeskrivelse, eller oppfølgingsinformasjon. Den kan også sende e-post hvis det er ønskelig.',
    category: 'Om assistenten',
  },

  // Priser og betaling
  {
    q: 'Hva koster det, og er det noen ekstra kostnader?',
    a: 'Vi har faste månedspriser uten skjulte kostnader. Mini koster 1 490,- og Basis koster 2 990,- per måned. Oppstart og oppsett er helt gratis. Går du over minutt-kvoten din, varsler vi deg slik at du kan velge å oppgradere eller holde deg på samme plan.',
    category: 'Priser og betaling',
  },
  {
    q: 'Er det bindingstid?',
    a: 'Nei, ingen bindingstid og ingen skjulte kostnader. Du kan oppgradere, nedgradere eller avslutte når som helst, ingen oppsigelsestid og ingen gebyrer.',
    category: 'Priser og betaling',
  },
  {
    q: 'Hva skjer hvis jeg går over minutt-kvoten?',
    a: 'Du får beskjed i god tid før kvoten er brukt opp. Da kan du enten oppgradere til en høyere plan, eller vi kan avtale en løsning som passer deg. Assistenten slutter ikke å svare midt i en samtale.',
    category: 'Priser og betaling',
  },

  // Andre spørsmål (categories with ≤2 items)
  {
    q: 'Hva med personvern og GDPR?',
    a: 'Vi tar personvern på alvor. All data behandles i tråd med GDPR, og vi har databehandleravtale basert på Datatilsynets standardmal. Samtaledata lagres trygt, og vi deler aldri informasjon med tredjepart uten avtale. Du har full kontroll over hva assistenten har tilgang til.',
    category: 'Andre spørsmål',
  },
  {
    q: 'Kan jeg lytte til samtalene i etterkant?',
    a: 'Ja, du har tilgang til et kontrollpanel med full oversikt over alle samtaler. Der kan du se sammendrag, lytte til opptak og følge med på statistikk – slik at du alltid vet hva kundene spør om.',
    category: 'Andre spørsmål',
  },
];

/** Group FAQs by category, preserving order of first appearance */
export function getFAQsByCategory(): FAQCategory[] {
  const map = new Map<string, FAQ[]>();
  for (const faq of faqs) {
    const existing = map.get(faq.category) || [];
    existing.push(faq);
    map.set(faq.category, existing);
  }
  return Array.from(map.entries()).map(([title, items]) => ({ title, faqs: items }));
}
