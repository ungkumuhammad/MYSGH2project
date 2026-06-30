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

- **2026-06-30** — Initialised repository memory. Created `CLAUDE.md` (scope,
  value chain, permutation basis, cited technical baseline, no-fabrication rule)
  and this `memory.md` (facts, decisions, assumptions, permutation template,
  open questions, sourced data registry, references).
