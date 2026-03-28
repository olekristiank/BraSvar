# Behandlingsprotokoll for brasvar.no

Behandlingsansvarlig: Klevstrand Innovasjon
Sist oppdatert: Mars 2026

Denne protokollen dokumenterer behandling av personopplysninger knyttet til nettsiden brasvar.no, i henhold til GDPR art. 30.

---

## 1. Kontaktskjema

**Formål:** Motta og følge opp henvendelser fra potensielle kunder.

**Kategorier av registrerte:** Besøkende som fyller ut kontaktskjemaet.

**Personopplysninger som behandles:** Fornavn, etternavn, firmanavn, e-post, telefonnummer, nettsted, valgfri beskjed.

**Rettslig grunnlag:** Samtykke (GDPR art. 6 nr. 1 bokstav a).

**Lagringstid:** Slettes når henvendelsen er ferdig behandlet.

**Underleverandør:** Resend (e-posttjeneste).
- Databehandleravtale: Ja, via Resend.
- Datasenter: EU (AWS eu-west-1, Ireland).

---

## 2. Nettside-analyse

**Formål:** Forstå hvordan nettsiden brukes for å forbedre innhold og brukeropplevelse.

**Kategorier av registrerte:** Alle besøkende på brasvar.no.

**Personopplysninger som behandles:** Ingen. Data er anonymisert (sidevisninger, klikkhandlinger, enhet, nettleser). Ingen cookies settes. IP-adresser anonymiseres.

**Rettslig grunnlag:** Berettiget interesse (GDPR art. 6 nr. 1 bokstav f).

**Lagringstid:** I henhold til PostHogs standard retningslinjer.

**Underleverandør:** PostHog.
- Databehandleravtale: Ja, via PostHog.
- Datasenter: EU (AWS eu-central-1, Frankfurt).
- Konfigurasjon: EU Cloud (eu.posthog.com), cookieless mode, IP-anonymisering aktivert.

---

## 3. Hosting

**Formål:** Drift og tilgjengeliggjøring av nettsiden brasvar.no.

**Kategorier av registrerte:** Alle besøkende på brasvar.no.

**Personopplysninger som behandles:** IP-adresser i serverlogger (standard for webhosting).

**Rettslig grunnlag:** Berettiget interesse (GDPR art. 6 nr. 1 bokstav f).

**Lagringstid:** Serverlogger roteres automatisk.

**Underleverandør:** Vercel Inc.
- Databehandleravtale: Ja, via Vercel (vercel.com/legal/dpa).
- Datasenter: Serverless Functions kjører i EU (Frankfurt). Statisk innhold leveres via globalt CDN.
- Overføringsgrunnlag: Vercel er US-basert. Overføring dekket av Standard Contractual Clauses (SCCs) og EU-US Data Privacy Framework (DPF).

---

## Underleverandører (oppsummering)

**Vercel Inc.** – Hosting.
US-basert selskap, compute i EU. DPA signert. Overføringsgrunnlag: SCCs + DPF.

**PostHog Ltd.** – Analyse.
Data lagres i EU (Frankfurt). DPA signert. Ingen overføring utenfor EU.

**Resend Inc.** – E-post.
Data behandles i EU (Ireland). DPA signert. Ingen overføring utenfor EU.

---

## TODO

- [ ] Bekreft at DPA er akseptert hos Vercel (Settings > Legal, eller via bruksvilkår)
- [ ] Bekreft at DPA er akseptert hos PostHog (via kontovilkår)
- [ ] Bekreft at DPA er akseptert hos Resend (via kontovilkår)
- [ ] Konfigurer PostHog til EU Cloud (eu.posthog.com) med cookieless mode
- [ ] Konfigurer Resend til EU-region (eu-west-1)
- [ ] Sett Vercel Serverless Functions region til Frankfurt (fra1)
