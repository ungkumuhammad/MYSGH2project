# memory.md — Persistent Project Memory

> Single source of truth for state that must survive across sessions.
> Read this at the start of every task; update it whenever a decision,
> assumption, permutation, or sourced data point is added or changed.
> Companion to [`CLAUDE.md`](./CLAUDE.md) (which holds scope & conventions).

**Project:** Green ammonia import to Johor (MMHE) → on-site cracking to H₂ →
cross-border H₂ pipeline to Singapore, defined on a permutation basis.
**Last updated:** 2026-06-30.

---

## 1. Project Facts (stable)

| Item | Value | Source / status |
|------|-------|-----------------|
| Site | MMHE, Pasir Gudang, Johor, Malaysia | Confirmed by user |
| Site coordinate | `1.4636021248316995, 103.87188651244458` (WGS84, lat,lon) | Given by user |
| On-site assets | Ammonia jetty, ammonia storage, ammonia cracker | Given by user |
| Product flow | Imported green NH₃ → crack → H₂ → pipe to Singapore | Given by user |
| Pipeline definition | Defined on a **permutation basis** (compare candidates) | Given by user |
| Policy umbrella | JS-SEZ agreement signed 7 Jan 2025 (renewable-energy/green-economy cooperation) | EMA/EDB SG — see Refs |

## 2. Decisions Log

| Date | Decision | Rationale | Status |
|------|----------|-----------|--------|
| 2026-06-30 | Created root `CLAUDE.md` + `memory.md` as project baseline | Establish scope, technical baseline, memory protocol | Done |
| 2026-06-30 | Pipeline & sizing handled as **permutation matrix**, not single design | User requirement | Active |
| 2026-06-30 | Refreshed KBR/Duiker/Casale content in `tcoedatabase` from Dec-2025 packages; kept file structure, fuel-mode & capacity basis per column; flagged gaps in red | User request ("update… without changing the nature of the file"); No-Fabrication Rule | Done |

## 3. Assumptions Register

> Anything used in analysis that is NOT yet sourced/confirmed goes here, dated.
> Promote to "Project Facts" once confirmed; retire if invalidated.

| Date | Assumption | Why | To confirm by |
|------|------------|-----|---------------|
| 2026-06-30 | NH₃ stored as refrigerated liquid (~−33 °C, atmospheric) | Standard for large-scale import terminals | Storage concept selection |
| 2026-06-30 | Crossing carrier = pure H₂ (base case) | Matches "crack at MMHE, pipe H₂" brief | Permutation study may add NH₃-further variants |
| 2026-06-30 | **Duiker AHC vs KBR H2ACT® are fundamentally different machines**: Duiker = convective-only reactor + SCO combustor (purpose-built, no flames on tubes, no steam/CW); KBR = radiant fired-tube reformer furnace (SMR lineage, steam system, CW required). Casale MACH₂™ is also SMR-lineage (top-fired). This architectural difference governs utility requirements, footprint, tube life, NOx profile, and scaling behaviour — must never be treated as equivalent technology variants in any assessment. | Established from Dec-2025 licensor packages | Standing |
| 2026-06-30 | **A2** EUR/USD = 1.08 for Duiker cost conversions | Approximate Q4 2025 rate; ±5% impact on Duiker USD figures | Finance / project FX basis |
| 2026-06-30 | **A3** Duiker scaling exponent n=0.60 (six-tenths rule) | Only one Duiker data point (12 ktpa); n cannot be derived — 0.6 used as default | Duiker to provide 80 ktpa or full-train CAPEX |
| 2026-06-30 | **A4** KBR OSBL at 80 ktpa = 35% of ISBL | KBR states 55% at 12 ktpa, "reduces at larger capacity"; 35% interpolated at 80 ktpa | KBR to provide explicit OSBL breakdown |
| 2026-06-30 | **A5** Duiker €2.9M/yr OPEX (12 ktpa) excludes main NH₃ feedstock cost | At 7.03 t/t H₂ and €600/t, feedstock = €50.6M/yr — incompatible with €2.9M total OPEX; feedstock added separately | Confirm with Duiker |
| 2026-06-30 | **A1** OSBL ~40% of ISBL at 100 ktpa cracker scale | KBR states ~55% at 12 ktpa, "reduces at larger capacity"; 40% is interpolated assumption | Confirm when KBR provides OSBL for 68–80 ktpa |
| 2026-06-30 | KBR H2ACT® scaling exponent n≈0.53 derived from four data points | Power-law fit to 12/24/68/80 ktpa CAPEX points; range 0.52–0.56 | Stable unless KBR provides more data points |

*(No project-specific capacities, distances, costs, or vessel sizes have been
fixed yet — none should be invented. See CLAUDE.md §7.)*

## 4. Permutation Set (pipeline & configuration)

> Master list of candidate permutations. One row each. Fill variables as the
> study develops; keep CAPEX/OPEX/LCOH/risk traceable to sources.

**Permutation variables (per CLAUDE.md §4):** route/landfall · crossing method
(subsea vs. land) · crossing medium (H₂ vs. NH₃-further) · diameter · pressure ·
material grade · throughput/phasing · number of parallel lines.

| ID | Route/landfall | Crossing | Medium | Dia. | Pressure | Material | Throughput | Notes |
|----|----------------|----------|--------|------|----------|----------|------------|-------|
| P0 | *TBD* | *TBD* | H₂ | *TBD* | *TBD* | *TBD* | *TBD* | Template — populate when study starts |

## 5. Open Questions

- [ ] Singapore-side landfall / offtake point(s) and H₂ purity spec?
- [ ] Import volume / annual NH₃ throughput target (Phase 1 and ultimate)?
- [ ] Ammonia carrier size class and unloading rate at MMHE jetty?
- [ ] Storage autonomy (days) between ship arrivals?
- [ ] Cracker technology/vendor and heat source (and its carbon intensity)?
- [ ] Subsea vs. land crossing of the Johor Strait — permitting & ROW?
- [ ] Which permutations are in/out of scope for the first study round?

## 6. Sourced Data Registry (technical baseline)

> Reference values for first-pass sizing only — not vendor data. Keep sources.

**Ammonia as H₂ carrier**
- 17.8 wt% H₂; ≈121 kg H₂/m³ liquid (−33 °C / ~8.6 bar); boil-off ~0.025 %/day;
  volumetric H₂ density ~5× of 350-bar compressed H₂.
  — Ammonia Energy Association; BBA Consultants.

**Ammonia cracking (NH₃ → 1.5 H₂ + 0.5 N₂)**
- Endothermic ~46 kJ/mol NH₃; +~23.4 kJ/mol vaporisation/preheat.
- Industrial: ~700–900 °C. Theoretical min ≈0.88 MWh/t NH₃ (≈5.0 MWh/t H₂);
  current crackers ≈1.17–1.76 MWh/t NH₃ (≈6.63–9.97 MWh/t H₂).
- 2025 R&D: lower-temp (~475–575 °C) non-Ru catalysts emerging.
  — ScienceDirect reviews 2024–2025; Topsoe; thyssenkrupp Uhde; Technip Energies.

**Hydrogen pipeline integrity**
- Hydrogen embrittlement governs; degrades steel regardless of concentration.
- Code: ASME B31.12 (applies for H₂ >10 % molar). Blending caps elsewhere far
  lower (FR ~6 %, DE ~8 %, CA PUC ~5 %) — relevant only to blending permutations.
  — DeGruyter; MDPI; ScienceDirect reviews.

**Reference constants**
- LHV H₂ ≈120 MJ/kg; HHV ≈142 MJ/kg; NH₃ LHV ≈18.6 MJ/kg. (Textbook.)

**Singapore demand context**
- National Hydrogen Strategy (25 Oct 2022): H₂ up to ~50 % of power by 2050;
  Singapore a net importer of low-carbon H₂/NH₃. — EMA Singapore.

## 7. References

- Ammonia Energy Association — "Liquid Ammonia for Hydrogen Storage":
  https://www.ammoniaenergy.org/paper/liquid-ammonia-for-hydrogen-storage/
- BBA Consultants — Hydrogen carriers (Ammonia vs LOHC):
  https://www.bbaconsultants.com/publications/hydrogen-carriers-ammonia-vs-lohc
- ScienceDirect — "Recent progress on ammonia cracking technologies for scalable
  hydrogen production": https://www.sciencedirect.com/science/article/pii/S245222362400066X
- Topsoe — "Ammonia: a cracking opportunity for hydrogen":
  https://www.topsoe.com/blog/ammonia-a-cracking-opportunity-for-hydrogen
- thyssenkrupp Uhde — Ammonia cracking:
  https://www.thyssenkrupp-uhde.com/en/ammonia-cracking
- Technip Energies — Ammonia cracking:
  https://www.ten.com/en/markets/ammonia-cracking
- MDPI — "Assessing Hydrogen Embrittlement in Pipeline Steels…":
  https://www.mdpi.com/2673-6497/5/3/25
- EMA Singapore — National Hydrogen Strategy launch:
  https://www.ema.gov.sg/news-events/news/media-releases/2022/singapore-launches-national-hydrogen-strategy-to-accelerate-transition-to-net-zero-emissions-and-strengthen-energy-security
- Singapore EDB — Johor–Singapore Special Economic Zone (JS-SEZ):
  https://www.edb.gov.sg/en/johor-singapore-special-economic-zone.html
- MHB (Malaysia Marine and Heavy Engineering): https://mhb.com.my/

## 8. Changelog

- **2026-07-01** — 160 ktpa CAPEX & LCOH analysis completed; document at
  `analysis/ammonia_cracker_capex_160ktpa.md`. Key findings:
  - KBR 160 ktpa ISBL: **~$302M** (extrapolated, n=0.53, single train — 457 MTPD is within
    KBR's 1,200 MTPD single-train max). Total TIC ~$393M (ISBL + 30% OSBL, Assumption A4 revised).
  - Duiker 160 ktpa: **2 trains required** (max single train ~276 MTPD ≈ 97 ktpa). Total LSTK
    ~$346M + ~$22M OSBL = ~$367M total TIC. Near-linear doubling from 80 ktpa — loses
    single-train economy of scale vs KBR.
  - CAPEX gap at 160 ktpa narrows vs 80 ktpa: KBR ~$393M vs Duiker ~$367M (~7% apart,
    within uncertainty). Contrast with 80 ktpa where Duiker held clearer advantage.
  - LCOH ($500/t NH₃): KBR $3.64/kg vs Duiker $3.86/kg (NG mode vs NH₃ fired). Gap widens
    vs 80 ktpa due to Duiker losing single-train scale benefit + higher NH₃ consumption ×2.
  - **If zero-CI required** (KBR clean-fuel mode): KBR NH₃ consumption rises to 7.20 t/t H₂
    → LCOH ~$3.85/kg ≈ Duiker $3.86/kg. LCOH-equivalent at zero-CI.
  - Key open item: Duiker max single-train capacity — if >276 MTPD is possible, the 2-train
    penalty disappears and comparison returns to 80 ktpa pattern.
- **2026-06-30** — KBR vs Duiker CAPEX & LCOH comparison at 80 ktpa completed;
  document at `analysis/kbr_vs_duiker_80ktpa_capex_lcoh.md`. Key findings:
  - Comparison is **NOT apple-to-apple** on 5 material axes: CAPEX scope (KBR ISBL only vs
    Duiker LSTK), Duiker requires extrapolation (1 data point), OPEX structures differ,
    currencies differ, fuel modes differ in CI.
  - CAPEX: Duiker total TIC ~$190–200M vs KBR ~$282M (ISBL+OSBL) at 80 ktpa — Duiker
    lower, but rests on n=0.60 scaling assumption (A3).
  - LCOH: KBR marginally cheaper at all NH₃ prices ($3.81 vs $3.88/kg at $500/t; $6.67 vs
    $7.04/kg at $950/t) because KBR consumes less NH₃ (6.35 vs 7.03 t/t H₂) in NG mode.
    Gap widens at higher NH₃ price. If KBR operates in clean-fuel mode (zero CI), NH₃
    consumption rises to 7.20 t/t H₂ → Duiker becomes LCOH-competitive or cheaper.
  - To make comparison apple-to-apple: need Duiker 80 ktpa CAPEX quote, OPEX structure
    confirmation (A5), aligned fuel mode, KBR OSBL for large cases.
- **2026-06-30** — CAPEX analysis for 100 ktpa H₂ cracker completed; document at
  `analysis/ammonia_cracker_capex_100ktpa.md`. Key outputs:
  - KBR H2ACT® quoted ISBL CAPEX: 12 ktpa=$78M, 24 ktpa=$110M, 68 ktpa=$191M,
    80 ktpa=$209M (all Q3 2025 Class V ±50%, East Asia basis, ISBL only).
  - Power-law scaling exponent derived from KBR data: **n ≈ 0.53** (range 0.52–0.56),
    indicating better economy of scale than the classical six-tenths rule (n=0.6).
  - **100 ktpa extrapolated ISBL CAPEX: ~$235M USD** (derived, ±50%, Q3 2025, no
    forward escalation). OSBL estimated at ~$94M (Assumption A1: 40% of ISBL — unconfirmed).
    Total ISBL+OSBL ~$329M (assumption).
  - Casale MACH₂™ Dec-2025 proposal: **no CAPEX figures provided** (technical-only
    package). Cannot produce Casale cost comparison until Casale provides cost data.
  - Assumption A1 (OSBL at 40% of ISBL for 100 ktpa) logged below.



- **2026-06-30** — Updated `tcoedatabase/WIP_Ammonia_Cracker_Database.md` with the
  December 2025 licensor packages for **KBR** (`Licensor/kbr/kbr-johor-hub.md`,
  H2ACT® TIP Rev 0, 23 Dec 2025), **Duiker** (`Licensor/duiker/duiker-johor-hub.md`,
  AHC proposal 122380, 05 Dec 2025) and **Casale** (`Licensor/Casale/…`, A23070S,
  05 Dec 2025). Refreshed the §4.3/§4.4/§4.10 licensor profiles (KBR Hanwha 219 &
  173 MTPD + ISU 10 MTPD + TRL-9-by-2028; Casale MACH²™ scale 1300+ MTPD, TRL 7–8,
  H₂-rich burner since 2019; Duiker AHC = SCO+reactor+PSA, 50 barg, tube life
  200,000 h, TRL 8, Ammonex pilot) and corrected the §6.1 Licensor Specifications
  table (Casale Carbon Intensity 0.136 → 0, self-sustaining scheme). File
  structure, table layout, fuel-mode and per-column capacity basis preserved (per
  "do not change the nature of the file"). All edits + open gaps annotated **in
  red** (`<span style="color:red">`) for user review. Key flagged gaps: KBR
  "Daesan" & Casale "Elcogen" projects not in the Dec-2025 packages; Casale
  specific-energy/electrical/footprint cells unsourced; Duiker pressure 50 barg
  (PSA) vs 20 barg (B.L.) and CAPEX shown as $51 M = unstated EUR→USD of €47 M;
  table fuel-mode header vs footnote inconsistency unresolved. Added a 30 Jun 2026
  row to the document's revision history. No values fabricated (No-Fabrication
  Rule); unsourced cells left as-is and flagged, not invented.
- **2026-06-30** — Added internal "Large Scale Industrial Ammonia Cracking
  Technology Database" (WIP, Rev 0 issued 13 Oct 2025, updated 12 Nov 2025;
  prepared by Front End & Hydrogen Technology Solutions team) converted from
  DOCX to Markdown via Microsoft `markitdown`, stored at root-level
  `tcoedatabase/WIP_Ammonia_Cracker_Database.md`. Covers ammonia/ammonia-cracker
  intro, process overview (mass/energy balance, ISBL components, PFD) and a
  technology-player survey (Topsoe, Technip Energies, KBR, Casale, AFC Energy,
  Air Liquide, Hoegh EVI, ThyssenKrupp, Nippon Gases, etc.). Note: this `.md` is
  machine-extracted from DOCX — treat any quantitative value as transcription
  pending check against the original document before use in a deliverable
  (no-fabrication rule). Marked WIP by the source.
- **2026-06-30** — Added third-party tolling/storage-and-cracking commercial
  documents, converted from PDF to Markdown via Microsoft `markitdown`, under a
  new root-level `tolling/` folder (alongside `Licensor/`) with vendor
  subfolders: `tolling/vtti/VTTI_Cracker_Tolling_Fee.md` (VTTI "Commercial
  Information Package: Tariff, carbon intensity and yield" — Project Amplifhy
  Rotterdam/Antwerp; indicative integrated ammonia storage + cracking tariff)
  and `tolling/vopak/Vopak_Cracker_Tolling_Fee.md` (Linde–Vopak–Gentari
  "Letter of Intent — Ammonia Storage and Cracking Services at Vopak Energy Park
  Antwerp", effective 20 Aug 2025). These are European reference/benchmark
  commercial terms (not MMHE-specific). Note: machine-extracted from PDF — treat
  any quantitative value (tariffs, capacities, carbon intensity) as transcription
  pending check against the original PDF before use in a deliverable
  (no-fabrication rule). Source PDFs are commercially confidential.
- **2026-06-30** — Added Casale licensor documents (Job No. A23070S, "NH₃
  Cracking Technology Assessment", Issued for Proposal 05.12.2025) converted
  from PDF to Markdown via Microsoft `markitdown`, stored under
  `Licensor/Casale/`: `Casale_Cracker_Design_Basis__JohorHub.md`
  (A23070S-E-PRZ-0001), `Casale_Cracker_Process_Description__JohorHub.md`
  (A23070S-E-PRZ-0002), and `Casale_Ammonia_Cracker__JohorHub.md` (technical
  proposal, MACH™ cracking technology). Source PDFs are vendor-confidential
  Casale SA material. Note: these `.md` files are machine-extracted from PDF —
  treat any quantitative value as transcription pending check against the
  original PDF before use in a deliverable (no-fabrication rule).
- **2026-06-30** — Initialised repository memory. Created `CLAUDE.md` (scope,
  value chain, permutation basis, cited technical baseline, no-fabrication rule)
  and this `memory.md` (facts, decisions, assumptions, permutation template,
  open questions, sourced data registry, references).
