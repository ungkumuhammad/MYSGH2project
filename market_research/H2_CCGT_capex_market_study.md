# Quick Market Study — Hydrogen-Fired CCGT Capital Cost (USD/kW)

**Date:** 2026-07-01
**Scope:** First-pass, literature/public-data view of installed capital cost
(USD/kW, AC net output, EPC/overnight basis unless noted) for a **hydrogen-fired
combined-cycle gas turbine (CCGT)** power block — relevant to the **Singapore
offtake side** of Permutation P1 (crack NH₃ at MMHE → pipe H₂ → fire in a
CCGT in Singapore; see `memory.md` §4).
**Status:** Public-source benchmarking only — **not** a vendor quote and **not**
a Singapore-specific EPC estimate. Per CLAUDE.md §7 (No-Fabrication Rule),
every figure below is sourced or explicitly flagged as a range/estimate with
its basis; nothing is invented.

---

## 1. Headline Finding

No OEM or EPC publishes a clean, current "$/kW for a 100%-hydrogen-fired
CCGT." No commercially operating 100%-H₂ CCGT exists yet at utility scale
(the closest real projects are **hydrogen-blend-capable** H/J-class CCGTs
built primarily as natural-gas plants with a roadmap to higher H₂ %). The
honest answer is therefore a **range built from three converging evidence
types**, not a single point value:

| Basis | Range (USD/kW, AC net) | What it represents |
|---|---|---|
| A. New-build NG H-class CCGT, current market (2025–2026, supply-constrained) | **~2,200–2,800 /kW** | Today's actual EPC price for the *base machine* the hydrogen case would use |
| B. New-build NG H-class CCGT, pre-2024 "normal market" reference basis | **~900–1,100 /kW** (2023$) | Un-inflated engineering baseline (EIA/Sargent & Lundy), useful for a de-escalated or Asia-EPC sanity check |
| C. Real-world **hydrogen-ready/blend-capable** H/J-class CCGT projects (actual installed cost) | **~1,000–1,250 /kW** (at their respective completion/financing dates, pre-2024 turbine supply crunch) | Closest real analogues: IPP Renewed (UT) and Long Ridge (OH) — see §3 |
| D. Literature hydrogen-firing cost **premium** over an equivalent NG turbine | **~+5–15 %** on the turbine-system cost; ~+8.5 % cited in one techno-economic study; premium is diluted across a full CCGT because the steam bottoming cycle is fuel-agnostic | See §4 |

**Combining B/C (engineering baseline) with D (premium) →** a first-pass
range for a **purpose-built, 100 %-H₂-capable new-build CCGT, at "normal"
(non-supply-crunch) EPC pricing, is roughly USD 1,000–1,400/kW.**

**Applying the same premium to today's supply-constrained market price (A) →**
a **100 %-H₂ CCGT ordered into today's turbine backlog would likely land
around USD 2,400–3,200/kW.**

Both ranges should be treated as **±30 % order-of-magnitude bands** pending an
actual OEM/EPC quote (GE Vernova, Mitsubishi Power, Siemens Energy) sized to
the Singapore offtake MW and site conditions — flagged as an open item, not
resolved here.

---

## 2. Why There Isn't a Clean Published $/kW Figure

- **No commercial 100 %-H₂ utility-scale CCGT exists yet.** Demonstrated
  hydrogen firing to date is at the **blend** level (co-firing NG + H₂), with
  roadmaps — not delivered installations — for 100 %.
- OEMs (GE Vernova, Mitsubishi Power, Siemens Energy) publish **technical**
  hydrogen-readiness claims (blend %, combustor type) but **do not publish
  price lists**; $/kW is project- and market-specific and negotiated.
- The **global gas-turbine market is in a severe supply/price crunch**
  (AI/data-center-driven demand), which is currently a bigger swing factor on
  $/kW than the hydrogen-vs-natural-gas fuel question — see §3.1. This makes
  "current market price" and "underlying engineering cost" two very different
  numbers that must be reported separately (done in the table above).

---

## 3. Evidence Base

### 3.1 Baseline: new-build natural-gas H-class CCGT (the machine hydrogen firing is added to)

| Data point | Value | Source |
|---|---|---|
| 1×1 H-class CC, engineering baseline, 2023$ | **$921/kW** | EIA *Capital Cost and Performance Characteristics for Utility-Scale Electric Power Generating Technologies* (AEO2025), basis = Sargent & Lundy study |
| Same, escalated to ~2030 at ~2%/yr | **~$1,058/kW** | EIA AEO2025 capital cost report |
| AEO2026 update to CC cost basis (Brattle Group + Sargent & Lundy, reflecting 2024–2025 market) | **+~20 %** vs. AEO2025 CC basis (simple-cycle CT costs +~40 %) | EIA AEO2026 Electricity Market Module assumptions |
| Current (2025) actual new-build NG CC market price | **$2,200–2,500/kW**, some reports to **$2,800/kW by 2028** | Utility Dive reporting on 2025 EPC quotes; Wood Mackenzie gas-turbine supply-crunch analysis (turbine prices +195 % since ~2020) |
| GE H-class CC facility, illustrative current quote | **~$2,400/kW** | Trade-press reporting (2025) citing GE H-class pricing |

**Read:** the "engineering baseline" (~$900–1,100/kW) and "current market
price" (~$2,200–2,800/kW) differ by ~2.5×, driven almost entirely by the 2024–
2027 global turbine supply crunch, not by hydrogen capability. Any $/kW figure
used in the project must state which basis it is.

### 3.2 Real-world hydrogen-capable H/J-class CCGT projects (closest analogues)

| Project | Machine | Size | Hydrogen capability | Installed cost | Implied $/kW | Source |
|---|---|---|---|---|---|---|
| **IPP Renewed**, Delta, Utah | 2× Mitsubishi Power M501JAC (J-class) | 840 MW net CC | 30 % H₂ blend at 2025 startup, roadmap to 100 % by 2045 | **$865 M** (power block) | **~$1,030/kW** | Mitsubishi Power project pages; trade-press reporting on IPP Renewed cost |
| **Long Ridge Energy Terminal**, Hannibal, Ohio | 1× GE 7HA.02 (H-class) | 485 MW net CC | First H-class unit to burn a blend (demonstrated up to ~38 % by volume; roadmap to 100 %) | **~$599 M** construction loan + LC facility (financing basis, not confirmed total EPC cost) | **~$1,235/kW** *(financing-basis proxy — flagged as weaker evidence)* | GE Vernova / Long Ridge Energy press releases; project financing reporting |

**Caveat:** both are **hydrogen-blend-ready**, not 100 %-H₂-firing at
completion, and both were priced **before** the 2024–2027 turbine supply
crunch pushed market prices toward the $2,200+/kW range in §3.1. They are
useful as a **lower-bound sanity check** on what a hydrogen-*capable* H/J-class
CCGT costs in a "normal" market, not as evidence of the incremental cost of
firing pure H₂.

### 3.3 Literature — cost premium of hydrogen firing vs. equivalent natural-gas turbine

- A techno-economic study on hydrogen-fueled gas turbines with flexible fuel
  mixing (Chalmers University research group; *"The value of flexible fuel
  mixing in hydrogen-fueled gas turbines – A techno-economic study,"*
  International Journal of Hydrogen Energy, 2022) uses reference investment
  costs of **~€450/kWel (OCGT)** and **~€900/kWel (CCGT)** for the
  natural-gas baseline, and reports an **expected ~8.5 % capital-cost increase
  for the hydrogen-fired gas-turbine system** relative to the conventional
  gas-turbine system (≈ €542.5/kWel for the OCGT case in their basis).
  → **Important nuance the paper makes explicit:** in a **combined-cycle**
  plant, this premium applies to the **gas-turbine subsystem only** — the
  steam-turbine/HRSG bottoming cycle is unaffected by fuel choice — so the
  premium is **diluted** across the full CCGT (roughly by the GT's ~20–30 %
  share of total plant CAPEX, per Wood Mackenzie's cost-breakdown commentary
  on CC projects), i.e. a full-plant premium meaningfully **below** 8.5 %,
  plausibly in the low single digits to ~5 %, on top of the base CCGT cost.
- General industry commentary (OEM technical literature, trade press) is
  consistent in direction but not in a specific number: **capital cost
  premium scales with the allowed/required hydrogen % — low blends (<20 vol%)
  need little to no combustor/fuel-system modification and carry minimal
  premium; higher blends and 100 % H₂ require larger fuel-handling and safety
  systems, redesigned/validated combustors for H₂'s faster flame speed and
  higher NOx-formation tendency, and (depending on jurisdiction) larger
  SCR/NOx-control equipment** — all of which push the premium toward the
  higher end of the range. No source found gives a single agreed % for 100 %
  H₂ specifically; this remains a **range, not a point value**.
- No IEA, IRENA, NREL ATB, Lazard LCOE+, or EPRI dataset was found (as of this
  search) that publishes a **dedicated $/kW line item for hydrogen-fired
  CCGT** — NREL's ATB 2024 electricity dataset, for example, has NGCC H-class
  1×1 cost/performance entries but **no** hydrogen-firing variant as of the
  2024 release. This is a genuine **data gap** in public techno-economic
  databases, not an oversight in this search — flagged accordingly.

---

## 4. Synthesis Table (permutation-relevant)

| Case | Basis | USD/kW (AC net) | Confidence |
|---|---|---|---|
| NG H-class CCGT, engineering baseline (no hydrogen, "normal" market) | EIA/S&L, 2023$ | 900–1,100 | Sourced, but stale vs. current market |
| NG H-class CCGT, current supply-constrained market | Utility Dive / WoodMac / trade press, 2025 | 2,200–2,800 | Sourced, reflects real 2025 quotes |
| Hydrogen-capable (blend-ready) H/J-class CCGT, actual projects, pre-crunch pricing | IPP Renewed, Long Ridge | 1,030–1,235 | Sourced, but blend-ready ≠ 100 % H₂, and pre-2024 pricing |
| Incremental hydrogen-firing premium (GT subsystem) | Chalmers 2022 study | +~8.5 % on GT subsystem; low-single-digit–5 % on full CCGT | Sourced (one study); direction confirmed qualitatively elsewhere |
| **→ Implied 100 %-H₂ CCGT, "normal" market** | B × (1 + diluted premium) | **~1,000–1,400** | **Derived estimate — not a quote** |
| **→ Implied 100 %-H₂ CCGT, today's supply-constrained market** | A × (1 + diluted premium) | **~2,400–3,200** | **Derived estimate — not a quote** |

**Not covered by any figure above** (excluded scope, flag for a later,
Singapore-specific estimate):
- Balance-of-plant for H₂ fuel supply at the Singapore landfall (metering,
  pressure letdown from the pipeline, on-site H₂ buffering) — this is
  downstream of the P1 pipeline permutation and not yet scoped.
- Land, grid interconnection, owner's costs, financing costs, contingency —
  all excluded from the $/kW figures above (EPC/equipment-and-installation
  basis only, consistent with how the source EIA/press figures are reported).
- Singapore/SE-Asia EPC cost index vs. US EPC cost index — all data points
  above are **US-market** (EIA, IPP Renewed, Long Ridge). No Singapore- or
  ASEAN-specific CCGT EPC benchmark was located in this pass; regional EPC is
  often lower than US, but the global turbine *equipment* price (the
  supply-crunch-driven component) is set by the same global OEM backlog
  regardless of plant location, so the discount would apply mainly to
  civil/installation labor, not turbine hardware.

---

## 5. Relation to Project Permutations

This is a **demand-side (Singapore)** data point for **Permutation P1**
(`memory.md` §4: crack NH₃ at MMHE → H₂ pipeline → H₂-CCGT in Singapore). It
does not change the P1 vs. P2 well-to-wire efficiency conclusion already
recorded in memory.md (P1 ≈ 54.4 % vs. P2 ≈ 50.7 %), which is an
energy-efficiency comparison, not a CAPEX comparison. A like-for-like CAPEX
comparison against **P2's** 100 %-NH₃-fired CCGT (MHI H-25 class) would need
an equivalent market study on ammonia-fired turbine $/kW — **not yet done**,
flagged as a follow-up if a CAPEX-basis permutation comparison is wanted.

---

## 6. Open Items / Recommended Next Step

- [ ] Get an actual OEM budgetary quote (GE Vernova 9HA.02, Mitsubishi Power
  M701JAC/M501JAC) sized to the Singapore offtake capacity once that MW
  figure exists (currently `*TBD*` in the P1 permutation row).
- [ ] Confirm whether Singapore offtake is planned as blend-in-existing-fleet
  (lower premium, faster) or purpose-built 100 %-H₂ new-build (higher
  premium, matches the figures in §4).
- [ ] Companion study: ammonia-fired CCGT (MHI H-25 class) $/kW, for a
  CAPEX-basis P1-vs-P2 comparison to sit alongside the existing energy-basis
  one.

## 7. Sources

- EIA — *Capital Cost and Performance Characteristics for Utility-Scale
  Electric Power Generating Technologies* (AEO2025):
  https://www.eia.gov/analysis/studies/powerplants/capitalcost/pdf/capital_cost_AEO2025.pdf
- EIA — *Assumptions to the Annual Energy Outlook 2026: Electricity Market
  Module* (Brattle Group / Sargent & Lundy cost update):
  https://www.eia.gov/outlooks/aeo/assumptions/pdf/EMM_Assumptions.pdf
- Utility Dive — reporting on 2025 new-build NG CC EPC pricing
  ($2.2–2.5M/MW): https://www.utilitydive.com/
- Wood Mackenzie — "Gas turbine prices soar 195% as market faces
  supply-demand crisis":
  https://www.woodmac.com/press-releases/gas-turbine-prices-soar-195-as-market-faces-supply-demand-crisis/
- Utility Dive — "Gas turbine supply crunch set to raise prices 195% by
  2027: WoodMac":
  https://www.utilitydive.com/news/gas-turbine-supply-crunch-set-to-raise-prices-195-by-2027-woodmac/816904/
- Mitsubishi Power Americas — IPP Renewed project pages and hydrogen-ready
  turbine delivery announcement:
  https://power.mhi.com/regions/amer/success-stories/ipp-renewed ;
  https://power.mhi.com/regions/amer/news/20230727.html
- Intermountain Power Agency — IPP Renewed:
  https://www.ipautah.com/ipp-renewed/
- Utah Foundation — "Plugging Into the Future of Electricity: The Economic
  Impacts of the IPP Renewed Project":
  https://www.utahfoundation.org/reports/ipp_renewed/
- GE Vernova — Long Ridge Energy case study and press releases:
  https://www.gevernova.com/gas-power/resources/case-studies/long-ridge-energy ;
  https://www.gevernova.com/news/press-releases/long-ridge-energy-terminal-and-ge-commission-demonstrate-first-advanced-class-0
- Power-Technology.com — Long Ridge Energy Generation Project financing
  figures: https://www.power-technology.com/projects/long-ridge-project-ohio-usa/
- International Journal of Hydrogen Energy (2022) — "The value of flexible
  fuel mixing in hydrogen-fueled gas turbines – A techno-economic study"
  (Chalmers University): https://www.sciencedirect.com/science/article/pii/S0360319922030890 ;
  https://research.chalmers.se/en/publication/531945
- NREL — 2024 Annual Technology Baseline, Fossil Energy Technologies
  (checked for hydrogen-firing cost variant — not found as of 2024 release):
  https://atb.nrel.gov/electricity/2024/fossil_energy_technologies
- GE Vernova — 9HA gas turbine product page (technical hydrogen-readiness
  claims, no pricing): https://www.gevernova.com/gas-power/products/gas-turbines/9ha
