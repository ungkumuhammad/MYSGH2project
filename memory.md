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

## 3. Assumptions Register

> Anything used in analysis that is NOT yet sourced/confirmed goes here, dated.
> Promote to "Project Facts" once confirmed; retire if invalidated.

| Date | Assumption | Why | To confirm by |
|------|------------|-----|---------------|
| 2026-06-30 | NH₃ stored as refrigerated liquid (~−33 °C, atmospheric) | Standard for large-scale import terminals | Storage concept selection |
| 2026-06-30 | Crossing carrier = pure H₂ (base case) | Matches "crack at MMHE, pipe H₂" brief | Permutation study may add NH₃-further variants |
| 2026-06-30 | **H₂-fired CCGT net efficiency = 59 % (range 57–61 %, LHV)** | No repo/OEM source yet; H-class on H₂ ≈ NG CCGT | OEM data |
| 2026-06-30 | **100 % NH₃-fired CCGT net efficiency = 56 % (range 50–58 %, LHV)** | Pre-commercial; placeholder for P1-vs-P2 energy comparison | OEM data — governs the P1/P2 ranking |
| 2026-06-30 | Shipping ~0.997 & NH₃ storage ~0.998 energy retention | Boil-off ~0.025 %/day; common-mode to both permutations, immaterial to ranking | Refine if needed |
| 2026-06-30 | H₂ 16″ pipeline parasitic retention ~0.99 | Compression to maintain 15–20 barg over short cross-strait run | Pipeline hydraulics |

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
| P1 | MMHE (Johor) → Singapore | Pipeline | **H₂** | 16″ | 15–20 barg (Casale H₂ @ 20 barg) | *TBD* (H₂ service, ASME B31.12) | 650 ktpa NH₃ in → ~100 ktpa H₂ (NG-fired) / ~89 ktpa (clean) → H₂-CCGT | Crack at MMHE, pipe H₂, fire H₂ in CCGT in SG |
| P2 | India → Singapore (no Johor) | n/a (NH₃ shipped all the way) | **NH₃** | n/a | n/a | n/a | 650 ktpa NH₃ → 100 % NH₃-fired CCGT | No cracking; ammonia stored & fired directly in SG |

**Well-to-wire energy comparison (2026-06-30)** — see
`permutations/P1_vs_P2_well-to-wire_energy.md`. Same 650 ktpa NH₃ from India;
sea leg + NH₃ storage are common-mode (India→Johor ≈ India→Singapore).
Result (LHV, base case): **P1 ≈ 51.7 %** usable energy at the wire vs
**P2 ≈ 55.7 %**. P2 higher on energy because it avoids the cracking step
(×0.89 ≈ 11 % loss). Ranking hinges on the (assumed, pre-commercial)
ammonia-CCGT efficiency: **P1 only beats P2 if NH₃-CCGT net η < ~52 %**.
Technical recommendation: **P1** overall (mature H₂ turbine, clean combustion,
ammonia hazard kept in Johor, delivers H₂ per project premise) despite the
~4-pt efficiency premium. Action: confirm H₂- and NH₃-CCGT net efficiency/TRL
with OEMs before locking the ranking.

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

- **2026-06-30** — Added first concrete permutations **P1** (crack at MMHE →
  16″ H₂ pipeline → H₂-CCGT in SG) and **P2** (ship 650 ktpa NH₃ India →
  Singapore → 100 % NH₃-CCGT) to the permutation set, and produced a
  well-to-wire LHV energy comparison at `permutations/P1_vs_P2_well-to-wire_energy.md`.
  Cracking energy efficiency taken from internal licensor docs (Casale 89 %,
  Duiker ~91 %); CCGT efficiencies are flagged assumptions pending OEM data.
  Base-case usable energy: **P1 ≈ 51.7 % vs P2 ≈ 55.7 %**; ranking sensitive to
  the ammonia-CCGT efficiency (crossover ~52 %). Recommended P1 on overall
  technical grounds.
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
