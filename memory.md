# memory.md — Persistent Project Memory

> Single source of truth for state that must survive across sessions.
> Read this at the start of every task; update it whenever a decision,
> assumption, permutation, or sourced data point is added or changed.
> Companion to [`CLAUDE.md`](./CLAUDE.md) (which holds scope & conventions).

**Project:** Green ammonia import to Johor (MMHE) → on-site cracking to H₂ →
cross-border H₂ pipeline to Singapore, defined on a permutation basis.
**Last updated:** 2026-07-28.

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
| 2026-07-15 | Created `power_generation/` folder + resident domain-expert agent (gas engine vs gas turbine incl. CCGT, on NG/H₂/NH₃) | User request: build the ammonia gas-engine vs ammonia gas-turbine/CCGT power-gen comparison; agent must not fabricate — all numbers sourced/labelled/derived | Agent built |
| 2026-07-16 | Built first **NH₃-focused 50 MW data-center engine-vs-CCGT comparison matrix** (`power_generation/50MW_datacenter_NH3_engine_vs_CCGT_matrix.md`) | User use-case: 50 MW firm clean block on 100 % NH₃, grid tops up larger total demand until NH₃ affordable for 100 % clean | Matrix-only first pass done; superseded for the general case by the 2026-07-28 comprehensive comparison, but still valid for the 50 MW data-centre framing |
| 2026-07-28 | Built the **comprehensive NH₃ gas-turbine vs. gas-engine comparison** (`power_generation/NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md`, Rev 1, 7 axis-blocks / 45 rows) and **changed the provisional recommendation for the stationary P2 / Singapore-offtake case from engine → gas turbine** | Three new sourced developments: (1) IHI+GE Vernova burned 100 % NH₃ in full-scale **F-class** combustion hardware (Mar 2026, 6F.03/7F/9F retrofit, target 2030); (2) IHI **IM270 2 MW** ran ~**3,000 h** on 100 % liquid NH₃ incl. load rejection/dump, NOx **<7 ppm**, **>99 %** GHG cut incl. N₂O; (3) Singapore's own EMA/MPA/Keppel Jurong Island project is **55–65 MW by direct NH₃ combustion in a gas turbine plant**. Ammonia engines remain marine-first (W25 A deliveries 2028; MAN 4-stroke genset R&D to ~2027–28) | Active. The 2026-07-16 engine-favouring read **stands for the load-following / incrementally-grown 50 MW data-centre duty** — the two conclusions are duty-dependent, not contradictory |
| 2026-07-28 | Built an **interactive HTML infographic/calculator**, `power_generation/NH3_ammonia_energy_pathway_infographic.html`, at user request — storage-to-wire ammonia energy chain (1 kg NH₃ landed = 100 % LHV, in both MJ and kWh) with a live pathway selector (Gas Turbine/IHI IM270, Gas Engine/Wärtsilä 25 Ammonia, MHI Equipment/H-25 with SC↔CC toggle), per-node expandable spec sheets, a loss-waterfall visual, and a plant-scale calculator (capacity MW + stream days/yr → annual GWh, annual NH₃ ktpa, mass flow t/h, % of the 650 ktpa P1/P2 reference stream) | User request: infographic showing each pathway's schematic with per-node detail dropdowns and efficiency, prepopulated from sourced defaults, editable | Published as a Claude Artifact and committed to the repo. Every prepopulated default is tagged sourced/assumption/derived/not-published (color + icon + text) per CLAUDE.md §7 — the IHI IM270 pathway deliberately ships with **no default efficiency** (input left blank, "not published") since no source states one; user must supply their own estimate for that path only |

## 3. Assumptions Register

> Anything used in analysis that is NOT yet sourced/confirmed goes here, dated.
> Promote to "Project Facts" once confirmed; retire if invalidated.

| Date | Assumption | Why | To confirm by |
|------|------------|-----|---------------|
| 2026-06-30 | NH₃ stored as refrigerated liquid (~−33 °C, atmospheric) | Standard for large-scale import terminals | Storage concept selection |
| 2026-06-30 | Crossing carrier = pure H₂ (base case) | Matches "crack at MMHE, pipe H₂" brief | Permutation study may add NH₃-further variants |
| 2026-06-30 | **H₂-fired CCGT net efficiency = 62 % (range 58–64 %, LHV)** — *now SOURCED* | GE 9HA.02 H-class: 64.0 % net CC on NG, 50 %→100 % H₂ roadmap (GE Vernova; Turbomachinery Mag.) | OEM quote at unit size |
| 2026-06-30 | **100 % NH₃-fired CCGT net efficiency = 51 % (range 49–53 %, LHV)** — *now SOURCED* | Only near-commercial 100 % NH₃ machine = MHI H-25 40 MW class: 34.8 % SC → ~60 MW 1×1 CC ⇒ ~51 % GTCC (~2025) | **⚠️ 2026-07-28 correction: the "SOURCED" label overstates this.** Targeted search this session found no MHI source stating a **100 %-ammonia-specific** SC efficiency for the H-25 — 34.8 % is the H-25's published spec, likely on its **natural-gas** baseline, carried over by assumption. This underwrites the whole P1/P2 turbine-efficiency ranking in §4 below. **Needs a direct OEM query before further investment-grade use.** See `power_generation/NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md` §2 row M3 |
| 2026-06-30 | Shipping ~0.997 & NH₃ storage ~0.998 energy retention | Boil-off ~0.025 %/day; common-mode to both permutations, immaterial to ranking | Refine if needed |
| 2026-06-30 | H₂ 16″ pipeline parasitic retention ~0.99 | Compression to maintain 15–20 barg over short cross-strait run | Pipeline hydraulics |
| 2026-07-01 | **100 %-H₂ CCGT installed capital cost ≈ $1,000–1,400/kW ("normal" market) or ≈ $2,400–3,200/kW (2025–26 supply-constrained market)** — derived, *not* an OEM quote | NG H-class CCGT baseline (EIA/S&L) + literature hydrogen-firing premium (~+8.5 % on GT subsystem, Chalmers 2022), sanity-checked vs. real hydrogen-ready projects (IPP Renewed ~$1,030/kW, Long Ridge ~$1,235/kW) | OEM/EPC quote sized to actual Singapore offtake MW |
| 2026-07-16 | Data-center 50 MW clean block framed as **firm NH₃ generation + temporary grid top-up**, transitioning to 100 % clean as NH₃ becomes affordable | User use-case definition; favours modular/phased capacity that can grow the clean share unit-by-unit | Confirm total DC demand, target 100 %-clean date, and grid interconnection terms |

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

**Well-to-wire energy comparison (2026-06-30, Rev 1 — sourced CCGTs)** — see
`permutations/P1_vs_P2_well-to-wire_energy.md`. Same 650 ktpa NH₃ from India;
sea leg + NH₃ storage are common-mode (India→Johor ≈ India→Singapore).
**Rev 1 result (LHV, base case): P1 ≈ 54.4 % vs P2 ≈ 50.7 %** — i.e. **P1
(hydrogen) now wins**, reversing Rev 0. Reason: CCGT efficiencies are no longer
symmetric assumptions but sourced to the machines each fuel can actually run in
— H₂ in a ~64 %-class H-machine (GE 9HA.02) vs 100 % NH₃ only in a ~51 %-class
40 MW machine (MHI H-25). The ~13-pt turbine gap outweighs the ~11 % cracking
penalty. Crossover: P2 only wins if a large ~55 %+ 100 % ammonia turbine exists
(technology-parity case → P2 63 % vs P1 55 %). Recommendation unchanged and now
stronger: **P1**. Deck: `permutations/P1_vs_P2_comparison_deck.pptx`.

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

**H₂-fired CCGT capital cost (Singapore offtake, P1 demand side) — 2026-07-01**
- No OEM/EPC publishes a clean 100 %-H₂ CCGT $/kW; no such plant is
  commercially operating yet (closest real projects are hydrogen-*blend*-
  ready, not 100 % H₂). Figures below are a **derived range**, not a quote.
- NG H-class CCGT baseline: **$900–1,100/kW** (2023$, EIA/Sargent & Lundy
  engineering basis) vs. **$2,200–2,800/kW** (2025 actual market, driven by
  global turbine supply crunch, +195 % since ~2020 per Wood Mackenzie).
- Real hydrogen-*ready* H/J-class CCGT projects (blend-capable, pre-crunch
  pricing): IPP Renewed (Utah, MHI M501JAC, 840 MW, $865 M) ≈ **$1,030/kW**;
  Long Ridge (Ohio, GE 7HA.02, 485 MW, ~$599 M financing basis) ≈
  **$1,235/kW**.
- Hydrogen-firing premium: one techno-economic study (Chalmers Univ., Int'l J.
  Hydrogen Energy 2022) finds **~+8.5 % on the gas-turbine subsystem**; diluted
  across a full CCGT (GT ≈20–30 % of plant CAPEX per Wood Mackenzie) to
  roughly **low-single-digit–5 %** on the whole plant. Premium scales with H₂
  vol% (qualitative, multiple trade sources; no single agreed % for 100 % H₂).
- **Derived range (this study, not a vendor quote):** 100 %-H₂ CCGT ≈
  **$1,000–1,400/kW** at "normal" market pricing; **≈$2,400–3,200/kW** at
  today's (2025–2026) supply-constrained market pricing.
- All US-market data (EIA, IPP Renewed, Long Ridge) — no Singapore/ASEAN EPC
  benchmark found; turbine hardware price is set by the global OEM backlog
  regardless of plant location, so a regional discount would apply mainly to
  civil/installation labor, not equipment.
- Full write-up: `market_research/H2_CCGT_capex_market_study.md`.
  — EIA AEO2025/AEO2026; Wood Mackenzie; Utility Dive; Mitsubishi Power (IPP
  Renewed); GE Vernova (Long Ridge); Int'l J. Hydrogen Energy 2022 (Chalmers).

**Ammonia power-gen: engine vs. gas turbine (CCGT) — 50 MW DC study, 2026-07-16**
- **Maturity (both pre-commercial at 50 MW on 100 % NH₃):** Wärtsilä 25 Ammonia
  engine = marine, 1.9–3.1 MW/unit, commercial deliveries **2028**; MAN NH₃
  genset (NH3-Spark / AmmoniaMot 2) = R&D, testing 2025; Wärtsilä currently
  markets **NG (34SG), not NH₃, for data centers**. Mitsubishi H-25 **40 MW-class
  100 % NH₃ gas turbine** targeted ~2025 commercialization but **still in
  feasibility/demo study as of 2025** (slipped).
- **Efficiency (LHV):** gas engine ≈46–49 % simple cycle (OEM parity w/ DF-LNG;
  34SG NG = **48.9 %**); Wärtsilä Flexicycle engine-CC **>54 %** (NG). NH₃-CCGT
  (H-25 1×1) ≈**50–51 %** (SC ≈34.8 % + steam bottoming) — see also §3.
- **Part-load:** engine pulse efficiency **>46 %** vs aeroderivative GT **<36 %**
  (Wärtsilä). **Water:** engine SC **<5 L/h** vs CCGT recirculating **~780 L/MWh**
  (Flexicycle ~409 L/MWh). **Footprint:** GT smaller per MW (Wärtsilä concedes).
  **Start:** engine ~2 min to full load, black-start capable.
- **Emissions on NH₃:** high raw NOx → SCR + AMOX/ASC slip catalyst; **N₂O**
  (potent GHG) needs a **dedicated catalyst**; dual-function SCR shown **<2.5 ppm
  NOx, ~zero slip** for turbines. Wärtsilä 25 A: up to **90 % GHG cut** at 95 %
  NH₃ energy share (~5 % pilot). MAN NH3-Spark targets **pilot-free**.
- **CAPEX (NG anchors only; NH₃ premium NOT sourced — do not quote):** NG RICE
  **≈$1,250–1,500/kW**; NG CCGT **$921/kW** (EIA 2023$) → **$1,116–1,427/kW**
  (2026–27 projects) → **~$2,000/kW** recent actuals.
- **Provisional read:** for a clean block that grows from a partial share to
  100 %, the **engine** fits the transition better (modular N+1, flat part-load,
  fast/black-start, near-zero water); the **CCGT** wins peak efficiency &
  footprint but is a coarse single train, water-hungry, slower-start. Neither is
  buyable at 50 MW on pure NH₃ today → grid bridge required.
- Full matrix: `power_generation/50MW_datacenter_NH3_engine_vs_CCGT_matrix.md`.
  — Wärtsilä; Mitsubishi Power; MAN ES; EIA AEO2025; GridLab; Thunder Said
  Energy; Power Engineering. (See References.)

**NH₃ gas turbine vs. gas engine — comprehensive comparison, 2026-07-28**

*Maturity (turbine side moved materially ahead for stationary duty)*
- **IHI + GE Vernova, Mar 2026:** 100 % ammonia combusted in **full-scale F-class
  components** at full-load pressure/temperature/flow. Roadmap = retrofittable
  100 %-NH₃ combustion system for **6F.03 / 7F / 9F**, target **2030**.
- **IHI IM270 (2 MW class):** world's first GT running exclusively on **liquid
  ammonia**; endurance testing at Aioi from Jul 2024, **~3,000 h as of Jan 2026**,
  incl. **load-rejection and load-dump** tests. **NOx <7 ppm** after DeNOx;
  **>99 % GHG reduction incl. N₂O** at 70–100 % NH₃ ratio (two-stage combustion
  eliminated the N₂O spike that used to appear above 70 % NH₃). Cogeneration
  Award 2025. Package = IM270 + heat-recovery boiler, 2 MWe + 6 t/h steam.
- **MHI H-25 100 % NH₃ (40 MW class):** ~2025 commercialisation target
  **slipped**; no 2026 status update located. H-25 series: **41 MW SC**,
  **~60 MW 1×1 CC**, ~120 MW 2×1.
- **Baker Hughes + Hanwha (Feb 2025):** ~**16 MW NovaLT16**, 100 % NH₃ ↔ 100 %
  gas and any blend; full engine test on NH₃ by **end-2027**, deployment 2028.
  Claims **IMO Tier III NOx without SCR** — vendor claim, unverified at
  stationary duty.
- **Engines stay marine-first:** Wärtsilä 25 Ammonia (1.9–3.1 MW; **315 kW/cyl
  @900 rpm, 345 kW/cyl @1000 rpm**; deliveries **2028**); Everllence/MAN B&W
  **ME-LGIA** two-stroke shipyard delivery **2026**, **5 % SPOC** pilot, **>95 %**
  NH₃ energy fraction; MAN **AmmoniaMot 2** four-stroke genset R&D Aug 2024 +3.5 yr.
  MAN roadmap: 2-stroke **12–68 MW**, 4-stroke DF **26 MW**. **No stationary
  ammonia genset product exists today.**

*Singapore market precedent (directly relevant to P2)*
- **EMA/MPA + Keppel-led consortium (Sumitomo, Advario), Jurong Island:**
  **55–65 MWe** from imported low-/zero-carbon ammonia by **direct combustion in
  a gas turbine plant**, plus ≥100 ktpa NH₃ bunkering. In **FEED**, no FID yet.
  → **The only NH₃ power project in Singapore is a gas turbine plant.**

*Performance*
- NH₃ CC efficiency anchor unchanged at **~51 %** — now also **derived**:
  34.8 % SC × (60 MW CC ÷ 41 MW SC) = **50.9 %** for the H-25 1×1.
- Engine SC on NH₃ **≈46–49 %** (parity with DF twin; W34SG NG = 48.9 %);
  engine-CC "Flexicycle" **>54 % but on NG only** — never shown on NH₃.
- **Cracked-NH₃ combined cycle:** **47.7 %** (direct liquid NH₃) → **49.1 %**
  (vaporised) → **54 %** (fully cracked H₂–N₂), *conditional on heat integration
  with GT waste heat*; a **standalone, non-integrated cracker lowers** net
  efficiency. Cracked-NH₃ flame at 60 % cracking ratio cut NO ~25 % vs 40/60
  NH₃/H₂.
- NH₃ penalty vs NG: **~1.7 pts** below NGCC in an optimised NH₃ CHGT cycle;
  **~0.5 pt** electric-efficiency loss on full NG→NH₃ substitution (micro-GT study).
- **NH₃ flame speed ≈1/5 of methane–air** — the root cause of staged/rich-lean
  combustor design and of H₂/cracked-NH₃ enrichment strategies.
- **Tropical derate:** GT ≈ **0.4 % power loss + 0.1 % heat-rate rise per °F**
  above 59 °F (≈5–10 % power per 10 °C); turbocharged recip engines far less
  sensitive. Johor/SG ambient ~30–33 °C ⇒ this is a real GT penalty here.

*Emissions (the ammonia-specific risk)*
- **N₂O GWP ≈ 273× CO₂ (100-yr)** — governs the GHG case for ammonia firing.
- **Turbine:** N₂O destroyed **in the combustor** by two-stage rich-lean
  combustion (>99 % GHG cut incl. N₂O). Dual-function SCR: **<2.5 ppm NOx, ~zero
  NH₃ slip**.
- **Engine:** N₂O **~20 ppm untreated** across loads (IHI test engines) →
  **2–10 ppm with catalyst**; NH₃ slip assumed **10–30 ppm** for new 4-stroke DF
  (IHI/Wärtsilä measurement basis), target <10 ppm. In service (NYK *Sakigake*,
  ~95 % NH₃ + catalyst): **94 % GHG cut**, N₂O ≤ **1 %** of CO₂e. Wärtsilä 25 A:
  **up to 90 %** GHG cut at ~95 % NH₃ share.
- **Engine needs three catalyst beds** (SCR + AMOX/ASC + dedicated N₂O) vs the
  turbine's combustor staging + DeNOx ⇒ more catalyst OPEX and life exposure.
- **Ammonia is regulated on a toxicity basis, not just flammability** — ppm-level
  gas detection, release-mitigation (Wärtsilä WARMS), cofferdam/separation from
  occupied spaces, closing devices on air intakes. Applies to **both** options.

*Derived fuel consumption at 50 MWe (shown calc; NH₃ LHV 18.6 MJ/kg; 90 % CF =
7,884 h/yr assumed)*
- Engine SC 46/47.5/49 % → **166 / 161 / 156 ktpa** NH₃.
- NH₃ CCGT 50/51 % → **153 / 150 ktpa**. Cracked-NH₃ CC 54 % → **141 ktpa**.
- ⇒ turbine's ~3.5-pt edge ≈ **8–11 ktpa (~6 %)** of fuel; cracked-NH₃ ≈ **20 ktpa
  (~12 %)**. A 50 MW block = **~23–26 %** of the 650 ktpa P1/P2 stream.
- Liquid NH₃ **≈680 kg/m³** (=121 kg H₂/m³ ÷ 0.178) ⇒ **≈12.6 GJ/m³**;
  **≈2.7× the fuel mass flow of NG** per unit thermal input (50 ÷ 18.6).

*Costs — NH₃ premium still unpublished on BOTH technologies (do not quote)*
- NG anchors only: CCGT **$921/kW** (EIA/S&L 2023$), fixed O&M **$10–12/kW-yr**;
  NG RICE **≈$1,250–1,500/kW**. GT major overhaul **25,000–35,000 h ($4–8 M)**,
  combustion inspection ~24,000 h ($1.2–2.5 M) — US market, NG basis, trade source.
- The H₂ **+8.5 % GT-subsystem** premium **must not be transferred to NH₃** —
  ammonia needs a different combustor *and* a DeNOx/N₂O train.

*MHI actual/demonstrated data vs. the literature/theoretical studies, 2026-07-28*
- **Real hardware ceiling vs. simulated cases:** MHI's proven ammonia co-firing
  hardware = **20 % NH₃ (LHV) mixing ratio**, demonstrated on a **2 MW-class
  gas turbine** (combustor-only mod of an **IHI IM270** airframe, **Yokohama,
  Oct 2020**) — far below the 0→100 % ranges the literature studies simulate.
- **Raw NOx at that test: 287 ppm @16 %O₂ at 20 % NH₃ mixing** (rises sharply to
  ~5 % mixing, then flat to 20 %) — **~3× the NETL literature's "optimised
  <100 ppm"** claim; reduced to **<7 ppm only with an SCR/NOx-removal device**
  (an after-treatment result, not a combustion result).
- **H-25 100 %-NH₃ SC efficiency (34.8 %, this repo's anchor since 2026-06-30):
  not confirmed ammonia-specific.** No MHI source located states an
  ammonia-specific efficiency for the H-25; the figure is the H-25's published
  spec, presumed NG-basis, carried over by assumption. **Flags the P1/P2
  turbine-efficiency ranking in §4** as resting on an unverified anchor —
  corrected in §3 Assumptions Register.
- **Two separate 2022 MHI-linked Singapore MoUs, neither updated since:**
  (a) Jurong Port + MHI Asia Pacific + JERA Asia (Aug 2022) — **60 MW-class**
  100 % NH₃ direct-combustion GTCC; (b) Keppel Infrastructure + MHI + DNV
  (Sep 2022) — high-level QRA for a 100 % NH₃ CCGT. **Relationship to the 2025
  EMA/MPA Keppel-led (Sumitomo/Advario) 55–65 MW FEED project is UNCONFIRMED**
  — the 2025 release does not name a turbine OEM; do not assume continuity.
- **H-25 100 %-NH₃ "commercialisation ~2025"** (announced 2021): **no MHI
  update located 2023–2026**, confirming or revising. Treat as **stale/
  unconfirmed**, not as a confirmed delay.
- **MHI's H₂ co-firing is more mature than its NH₃ direct-firing**, within the
  same OEM: **30 % H₂ co-firing demonstrated grid-connected** on a large-frame
  **JAC** turbine at **T-Point 2** (Nov 2023), later raised to **50 vol %**;
  **~22 % CO₂ cut** at 50 % H₂ vs 100 % NG.
- **Ammonia *boiler* burner (not a gas turbine):** 0.5 t/h test furnace,
  Nagasaki, Nov 2023, for coal-boiler retrofits — stable combustion, complete
  NH₃ burnout, NOx below coal baseline. Different technology track; noted only
  so it isn't mistaken for GT progress.
- Full write-up: `power_generation/NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md`
  (§2 = MHI cross-check section).
  — IHI; GE Vernova; Mitsubishi Power; Baker Hughes/Hanwha; Wärtsilä; Everllence/
  MAN ES; EMA/MPA/EDB Singapore; Ammonia Energy Association; Pacific Environment/
  CSC (MEPC 83/7/23); NETL; Elsevier *Energy* / *IJHE*; MDPI; EIA AEO2025;
  GridLab; Thunder Said Energy; Power Engineering. (See References.)

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
- EIA — Capital Cost and Performance Characteristics for Utility-Scale Electric
  Power Generating Technologies (AEO2025):
  https://www.eia.gov/analysis/studies/powerplants/capitalcost/pdf/capital_cost_AEO2025.pdf
- EIA — Assumptions to the Annual Energy Outlook 2026: Electricity Market
  Module: https://www.eia.gov/outlooks/aeo/assumptions/pdf/EMM_Assumptions.pdf
- Wood Mackenzie — "Gas turbine prices soar 195% as market faces
  supply-demand crisis":
  https://www.woodmac.com/press-releases/gas-turbine-prices-soar-195-as-market-faces-supply-demand-crisis/
- Mitsubishi Power Americas — IPP Renewed:
  https://power.mhi.com/regions/amer/success-stories/ipp-renewed
- GE Vernova — Long Ridge Energy case study:
  https://www.gevernova.com/gas-power/resources/case-studies/long-ridge-energy
- International Journal of Hydrogen Energy (2022, Chalmers Univ.) — "The
  value of flexible fuel mixing in hydrogen-fueled gas turbines – A
  techno-economic study": https://www.sciencedirect.com/science/article/pii/S0360319922030890
- Wärtsilä — 25 Ammonia engine power upgrade (deliveries 2028):
  https://www.wartsila.com/media/news/16-04-2026-power-increase-for-wartsila-25-ammonia-engine-supports-more-efficient-ammonia%E2%80%91fuelled-vessel-designs-3739966
- Wärtsilä — 4-stroke ammonia engine testing, up to 90 % GHG reduction:
  https://www.wartsila.com/media/news/27-05-2025-extensive-testing-of-wartsila-s-4-stroke-ammonia-engine-demonstrates-ghg-emission-reductions-by-up-to-90-percent-3590235
- Wärtsilä 34SG gas engine (48.9 % efficiency, ~2 min to full load):
  https://www.wartsila.com/energy/solutions/engine-power-plants/wartsila-34sg-gas-engine
- Wärtsilä Flexicycle (engine combined cycle, >54 % ISO):
  https://www.wartsila.com/energy/engine-power-plant-solutions/engine-power-plant-products/applications/flexicycle-power-plants
- Wärtsilä — Technology comparison, engines vs. aeroderivative gas turbines
  (part-load, water, footprint): https://www.wartsila.com/energy/learn-more/technology-comparison-engines-vs-aeros
- Wärtsilä — ammonia for marine, gas for data centers:
  https://www.powertraininternationalweb.com/news/wartsila-ammonia-marine-34sg-data-centers/
- Mitsubishi Power — world's first 40 MW-class 100 % ammonia gas turbine:
  https://power.mhi.com/news/20210301.html
- MAN Energy Solutions — ammonia genset R&D (NH3-Spark / AmmoniaMot 2):
  https://www.man-es.com/company/press-releases/press-details/2025/05/22/man-energy-solutions-to-lead--new-ammonia-genset-project
- GridLab — The New Reality of Power Generation (2025 gas turbine costs):
  https://gridlab.org/wp-content/uploads/2025/09/GridLab_Gas-Turbine-Costs-Report-1.pdf
- Thunder Said Energy — reciprocating gas engines, levelized costs:
  https://thundersaidenergy.com/downloads/reciprocating-gas-engines-levelized-costs/
- Power Engineering — dual-function SCR catalyst (<2.5 ppm NOx, ~zero NH₃ slip,
  gas turbines): https://www.power-eng.com/gas/turbines/scr-catalysts-dual-function-catalyst-promises-high-nosubx-sub-removal-with-zero-ammonia-slip-for-gas-turbine-applications/
- GE Vernova / IHI — 100 % ammonia combustion achieved in F-class gas turbine
  test (Mar 2026): https://www.gevernova.com/news/press-releases/ihi-ge-vernova-achieve-milestone-100-ammonia
- GE Vernova & IHI — next phase of roadmap, 100 % ammonia-capable combustion
  system for 6F.03/7F/9F by 2030:
  https://www.ge.com/news/press-releases/ge-vernova-and-ihi-announce-next-phase-of-the-technology-roadmap-aiming-to-develop-a
- POWER Magazine — GE Vernova/IHI novel ammonia-capable gas turbine combustor
  (two-stage): https://www.powermag.com/ge-vernova-ihi-developing-novel-ammonia-capable-gas-turbine-combustor/
- IHI — 2 MW-class gas turbine cogeneration system fuelled exclusively by liquid
  ammonia (Cogeneration Award 2025; 2 MWe + 6 t/h steam; NOx <7 ppm; >99 % GHG
  cut incl. N₂O at 70–100 % NH₃):
  https://www.ihi.co.jp/en/all_news/2025/resources_energy_environment/1201875_13737.html
- IHI — Development of Liquid Ammonia Direct Spray Combustion Gas Turbine:
  https://www.ihi.co.jp/en/technology/techinfo/contents_no/1199391_13586.html
- Ammonia Energy Association — IHI Corporation profile (IM270 Aioi demo, ~3,000 h
  as of Jan 2026, 7F-class with GE Vernova targeting 2030):
  https://ammoniaenergy.org/organization/ihi-corporation/
- EMA Singapore — Consortium appointed for next phase of study on low-/zero-carbon
  ammonia power generation and bunkering (55–65 MW, direct combustion in a gas
  turbine plant, Jurong Island):
  https://www.ema.gov.sg/news-events/news/media-releases/2025/consortium-appointed-to-conduct-next-phase-of-ammonia-power-generation-bunkering-solution
- Singapore EDB — Keppel-led consortium appointed, Jurong Island ammonia power
  and bunkering: https://www.edb.gov.sg/en/business-insights/insights/keppel-led-consortium-appointed-for-next-phase-of-ammonia-power-and-bunkering-project-on-jurong-island.html
- Mitsubishi Power — H-25 Series (41 MW SC; ~60 MW 1×1 CC; ~120 MW 2×1):
  https://power.mhi.com/products/gasturbines/lineup/h25/
- Baker Hughes & Hanwha — ~16 MW NovaLT16 100 % ammonia-capable turbine JDA
  (Feb 2025; full NH₃ engine test by end-2027; Tier III claimed without SCR):
  https://investors.bakerhughes.com/news-releases/news-release-details/baker-hughes-and-hanwha-announce-partnership-develop-small-size
- Ammonia Energy Association — Hanwha/Baker Hughes fuel-flexible small turbines:
  https://ammoniaenergy.org/articles/hanwha-baker-hughes-to-develop-fuel-flexible-small-size-turbines-for-maritime-propulsion/
- Wärtsilä 25 Ammonia product page (AmmoniaPac fuel supply, WARMS release
  mitigation, NOR NOx reducer): https://www.wartsila.com/marine/wartsila-25-ammonia
- Everllence (ex-MAN Energy Solutions) B&W ME-LGIA two-stroke ammonia engine —
  shipyard delivery 2026, 5 % SPOC pilot, >95 % NH₃ energy fraction:
  https://www.everllence.com/marine/products/two-stroke-engines/ammonia-engine
- Turbomachinery Magazine — MAN Energy launches AmmoniaMot 2 four-stroke programme:
  https://www.turbomachinerymag.com/view/man-energy-launches-four-stroke-engine-program-ammoniamot-2
- Ammonia Energy Association — Emission performance of ammonia-fueled four-stroke
  marine engines (N₂O ~20 ppm untreated → 2–10 ppm with catalyst; NH₃ slip
  10–30 ppm; Sakigake 94 % GHG cut):
  https://ammoniaenergy.org/articles/emission-performance-of-ammonia-fueled-four-stroke-marine-engines/
- Pacific Environment / Clean Shipping Coalition — MEPC 83/7/23, review of
  tank-to-wake N₂O from ammonia-fuelled engines:
  https://cleanshipping.org/wp-content/uploads/2025/02/MEPC-83-7-23-Review-of-current-literature-on-tank-to-wake-nitrous-oxide-emissions-fromammonia-fueled-en.-Pacific-Environment-CSC.pdf
- NETL — Ammonia Combustion for Gas Turbine Engine Applications:
  https://www.netl.doe.gov/projects/files/AmmoniaCombustionforGasTurbineEngineApplications_070522.pdf
- Int'l J. Hydrogen Energy (2025) — Thermodynamic/techno-economic analysis of NH₃
  in a combined cycle: direct liquid 47.7 % / vaporised 49.1 % / cracked 54 %:
  https://www.sciencedirect.com/science/article/pii/S0360319925043393
- Energy (Elsevier, 2023) — Waste heat recovery optimization in ammonia-based gas
  turbine applications (NH₃ CHGT within 1.7 pts of NGCC):
  https://www.sciencedirect.com/science/article/pii/S0360544223014731
- MDPI Energies — Performance Analysis of an Ammonia-Fueled Micro Gas Turbine
  (~0.5 pt loss on full NG→NH₃ substitution): https://www.mdpi.com/1996-1073/15/11/3874
- MDPI Processes (2026) — From Flammability to Toxicity: comparative regulatory
  analysis of safety frameworks for LNG and ammonia as fuels:
  https://www.mdpi.com/2227-9717/14/9/1387
- Wärtsilä — Derating due to ambient temperature (engines vs aeroderivative GT):
  https://www.wartsila.com/energy/learn-more/technology-comparison-engines-vs-aeros/derating-due-to-ambient-temperature
- Power Engineering — ambient temperature effect on gas turbine output
  (~0.4 %/°F power loss, +0.1 %/°F heat rate):
  https://www.power-eng.com/operations-maintenance/why-keeping-cool-keeps-output-high/
- USPE Global — Gas Turbine EPC Costs 2026 (overhaul intervals/costs; trade
  source, US market, NG basis): https://uspeglobal.com/articles/gas-turbine-epc-costs-2026/
- SpringerLink — Demonstration Tests of Ammonia/Natural Gas Co-firing Power
  Generation with a 2-MW-Class Gas Turbine (IM270, Yokohama, Oct 2020):
  https://link.springer.com/chapter/10.1007/978-981-19-4767-4_35
- Ammonia Energy Association — Performance of Ammonia-Natural Gas Co-Fired Gas
  Turbine for Power Generation (presentation): https://ammoniaenergy.org/presentations/performance-of-ammonia-natural-gas-co-fired-gas-turbine-for-power-generation/
- JERA — Jurong Port, MHI Asia Pacific and JERA Asia MoU, 60 MW-class 100 %
  ammonia GTCC (Aug 2022): https://www.jera.co.jp/en/news/information/20220819_961 ;
  IFRF — 60MWe ammonia power plant and bunkering terminal, Jurong Port:
  https://ifrf.net/ifrf-blog/60mwe-ammonia-power-plant-and-marine-fuel-bunkering-terminal-planned-for-jurong-port-singapore/
- Mitsubishi Power — Keppel, MHI and DNV agreement, ammonia-fired gas turbine
  QRA, Jurong Island (Sep 2022): https://power.mhi.com/news/20220927.html ;
  DNV — same: https://www.dnv.com/news/keppel-mhi-and-dnv-sign-agreement-to-explore-adoption-of-ammonia-fired-gas-turbine-on-jurong-island-231948/
- POWER Magazine — Mitsubishi Power Developing 100 % Ammonia-Capable Gas
  Turbine (2021, "commercialization around 2025"):
  https://www.powermag.com/mitsubishi-power-developing-100-ammonia-capable-gas-turbine/
- Mitsubishi Heavy Industries — 30 % Hydrogen Fuel Co-Firing at Grid-Connected
  T-Point 2 (Nov 2023): https://www.mhi.com/news/23113001.html ; Turbomachinery
  Magazine — same, context for 50 vol % H₂ / ~22 % CO₂ cut:
  https://www.turbomachinerymag.com/view/mitsubishi-power-executes-30-hydrogen-fuel-blend-in-jac-gas-turbine
- Mitsubishi Heavy Industries — Combustion Test of Ammonia Single-Fuel Burners
  (boiler application, Nagasaki, Nov 2023): https://www.mhi.com/news/23112801.html ;
  Power Engineering — same: https://www.power-eng.com/gas/turbines/mitsubishi-says-it-successfully-tested-an-ammonia-single-fuel-burner/

## 8. Changelog

- **2026-07-28 (7)** — **Session summary, merged to `main`.** This session
  (branch `claude/ammonia-turbine-engine-comparison-8s1x6c`) built, in order:
  (a) `power_generation/NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md`
  — the Rev 1 master matrix, gas turbine vs. reciprocating engine on ammonia,
  with the §2 MHI actual-vs-literature cross-check added same day; (b) the
  interactive `power_generation/NH3_ammonia_energy_pathway_infographic.html`
  ("Well to Wake"), through Rev 1.3: a storage/well-to-wake efficiency
  calculator with a per-pathway Open/Combined-Cycle input, a live
  Comparison Table tab, a Theoretical tab reproducing the full master matrix
  (headline, axis-blocks A–G, MHI cross-check, fuel-consumption and verdict
  tables, 41-source list), and a land-footprint & sparing-philosophy section
  with its own calculator; (c)
  `power_generation/NH3_powerplant_land_footprint_study.md` — sourced/derived
  land-intensity figures (acres/MW) underpinning that calculator. Two real
  bugs were found and fixed along the way: oversized chevron `<summary>`
  icons (missing SVG width/height, page-wide) and a document-wide `.selbtn`
  click-handler collision between the Explorer tab's pathway selector and
  the land calculator's technology selector. Branch fast-forward-merged into
  `main` (7604dc5 → f6efcc3, no conflicts, no divergent commits on `main`)
  and pushed. All decisions, sourcing and the No-Fabrication-Rule flags for
  this body of work are captured in the dated entries below — read those,
  not just this summary, before extending any of it.
- **2026-07-28 (6)** — New study **`power_generation/NH3_powerplant_land_footprint_study.md`**:
  land footprint per MW for the P2 power-block technologies, filling the
  qualitative gap in the comprehensive comparison's §1 row E5. Key sourced/derived
  figures: **gas turbine (CCGT anchor) 0.111–0.139 acres/MW** (≈450–563 m²/MW),
  from a real UAMPS filing for a 360 MW frame-style combined-cycle plant
  (plant-site only, excludes construction-phase land); **reciprocating engine
  plant 0.33–0.56 acres/MW** (≈1,335–2,270 m²/MW), *derived* as the GT figure
  × 3–4×, per a Power Engineering trade-press claim that turbines use
  "approximately one-third to one-quarter" of an equivalent engine plant's
  area. Open-cycle GT and MHI H-25 (both cycles) use the same GT figure as a
  flagged assumption (no cycle- or OEM-specific site-area source located).
  Explicitly excluded the oft-cited Strata (2017) "~12.4 acres/MW for natural
  gas" figure from the sizing table — that number is cradle-to-grave
  (upstream gas field + pipelines), not applicable to a ship-delivered-ammonia
  site. Flagged throughout that every figure is NG-basis and **excludes
  ammonia's toxicity-driven safety envelope** (gas-detection perimeters,
  release-mitigation cofferdams) — real ammonia plot sizes are expected to
  exceed these figures; the study is a floor, not a design figure. Also
  defined **sparing/redundancy philosophy** (N, N+1, N+2, 2N) as generic
  engineering convention. Ported into the infographic
  (`power_generation/NH3_ammonia_energy_pathway_infographic.html`, Rev 1.3) as
  a new **"5 · Land footprint & sparing philosophy"** section under the
  Theoretical tab's master matrix: the sourced/derived land-intensity table,
  the sparing-philosophy definitions table, and a **land-size calculator**
  (inputs: required firm MW, sparing philosophy, technology + cycle reusing
  the pathway taxonomy already in the app; outputs: duty vs. spare unit
  count, installed capacity, land area in acres/hectares/m²) with its own
  3-entry source addendum (sources 42–44, appended to the tab's existing
  41-entry list). While building this, caught and fixed a real bug: the
  Explorer tab's pathway-selector click handler queried `.selbtn` **document-wide**
  or (unscoped), so it also fired on the new land calculator's technology
  buttons (which reuse the same CSS class) and corrupted the Explorer's
  state — scoped the handler to `.selbtn[data-path]` to fix. Verified in
  headless Chromium: no console/page errors across tech/cycle/sparing
  combinations including the "not computable" gap state (engine or turbine
  combined cycle, which have no published unit size), and confirmed the
  Explorer tab still functions correctly afterward.
- **2026-07-28 (5)** — Added a third **"Theoretical" tab** to the interactive
  infographic (Rev 1.2), reproducing the full qualitative master matrix from
  `power_generation/NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md`
  (Rev 1) without alteration: the §0 headline-developments table, all seven
  §1 axis-blocks (A–G: technology status, thermodynamics, operability,
  emissions, fuel/utilities, CAPEX/OPEX, project fit), the §2 MHI
  actual-vs-literature cross-check, the §3 derived fuel-consumption table, and
  the §4 verdict table — each in a collapsible accordion, with its own
  self-contained 41-entry source list (separate from the 14-source footer used
  by the live calculator tabs, since the two documents cite independently).
  Built by parsing the source markdown's GFM tables programmatically (not
  hand-transcribed) to avoid transcription drift from the sourced document;
  caught and fixed a bold/italic nesting ambiguity in one triple-asterisk
  markdown span during that conversion. Also fixed a **pre-existing rendering
  bug** found while building this tab: the chevron `<summary>` icons used
  across the whole page (both the original Explorer node "spec" dropdowns and
  the new Theoretical accordions) had no explicit SVG width/height, so
  browsers rendered them at their ~300×150px intrinsic default instead of the
  intended ~9px icon — added a global `.chev { width:9px; height:9px }` rule.
  Verified in headless Chromium (no console/page errors; all
  `getElementById` targets resolve; visually confirmed all three tabs and
  spot-checked several accordion tables).
- **2026-07-28 (4)** — Revised the interactive infographic
  (`power_generation/NH3_ammonia_energy_pathway_infographic.html`, Rev 1.1) per
  user request: (1) generalized the MHI-only Simple/Combined-Cycle toggle into
  a **"Cycle configuration" input available on all three pathways** — Gas
  Turbine and Gas Engine now also carry an explicit Open Cycle / Combined
  Cycle choice, each with its own status/note/spec text; per the
  No-Fabrication Rule, turbine Combined Cycle and engine Combined Cycle (WHR
  bottoming) both ship as **"not published"** (blank input, gap badge) since
  no source states an efficiency for either — only MHI's combined cycle has a
  documented capacity ratio (60/41 MW) to derive from; (2) **forced light mode
  only** — removed the `prefers-color-scheme: dark` media query and the
  `data-theme="dark"` override entirely, so the page no longer switches dark
  regardless of viewer or system theme; (3) renamed the document title/H1 from
  "Storage to Wire" to **"Well to Wake"**; (4) added a **Comparison Table tab**
  alongside the existing Pathway Explorer tab, listing all six equipment ×
  cycle combinations (pathway, cycle, capacity class, provenance status, net
  efficiency, MJₑ/kg, kWhₑ/kg, annual NH₃ at the current plant-scale capacity)
  computed live from the same LHV input, manual efficiency overrides, and
  plant-scale inputs as the explorer tab, with the active combination
  highlighted. Verified in a headless Chromium render (light mode holds even
  with a dark browser preference forced; JS syntax-checked; all
  `getElementById` targets resolve) before considering the update complete.
- **2026-07-28 (3)** — Built an **interactive HTML infographic**,
  `power_generation/NH3_ammonia_energy_pathway_infographic.html`, at user
  request, and published it as a Claude Artifact. Shows the direct-ammonia-
  firing branch (P2) storage-to-wire: 1 kg landed NH₃ = 100 % LHV, shown in
  both MJ and kWh (18.6 MJ/kg = 5.17 kWh/kg, CLAUDE.md §5), through a
  **live equipment-pathway selector** — **Gas Turbine** (IHI IM270, 2 MW
  class), **Gas Engine** (Wärtsilä 25 Ammonia), or **MHI Equipment** (H-25,
  with a Simple-Cycle ↔ Combined-Cycle toggle) — reusing the exact figures and
  provenance flags from the 2026-07-28 comprehensive comparison and its MHI
  cross-check (§2). Each node has an expandable spec-sheet dropdown (TRL,
  endurance hours, NOx/N₂O, maturity caveats, sources) and every efficiency
  input carries a colour-and-icon provenance badge — **sourced** (green),
  **assumption** (amber), **derived/calculated** (blue), or **not published**
  (red) — so the tool never silently presents an invented number as fact. Per
  the No-Fabrication Rule, the **IHI IM270 pathway ships with no default
  efficiency** (input left blank, flagged "not published") since no source
  states one, in contrast to the engine (47.5 % assumption) and MHI SC/CC
  (34.8 % assumption / ~50.9 % derived) pathways which do have repo-anchored
  defaults. Added a loss-waterfall visual (retained vs rejected-as-heat) and a
  plant-scale calculator (net capacity MW + stream days/yr → annual GWh,
  annual NH₃ ktpa, mass-flow t/h, and % of the 650 ktpa P1/P2 reference stream
  from §4) — both live-recalculating on any input change. All inputs are
  user-editable; every default is traceable to this repo's existing sourced
  figures, none invented for the infographic itself. Categorical (pathway)
  and status (provenance) color palettes were computed and validated with the
  dataviz skill's OKLCH-based validator (lightness band, chroma floor, CVD
  separation, normal-vision floor, contrast vs. surface) for both light and
  dark modes before use, rather than chosen by eye.
- **2026-07-28 (2)** — Added **§2 "MHI actual/demonstrated data vs. the
  literature/theoretical studies"** to
  `power_generation/NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md`
  (7 rows, M1–M7), at user request, to set MHI's real hardware results against
  the generic literature/simulation studies used in §1. **Two findings worth
  flagging:** (1) MHI's proven ammonia co-firing hardware tops out at **20 %
  NH₃ (LHV)**, on a 2 MW-class **IHI IM270** airframe (Yokohama, Oct 2020), with
  **raw NOx of 287 ppm @16 %O₂** at that ratio (~3× the NETL literature's
  "optimised <100 ppm" claim) — falling to <7 ppm only after SCR — a real gap
  between simulated/optimised-lab combustor designs and 2020-vintage hardware;
  (2) **this repo's 34.8 % H-25 100 %-NH₃ simple-cycle efficiency anchor
  (memory.md §3, set 2026-06-30) could not be re-confirmed as ammonia-specific
  this session** — no MHI source states an ammonia-specific efficiency for the
  H-25, so the figure is likely the NG-class spec carried over by assumption.
  Corrected the §3 Assumptions Register entry accordingly (downgraded from
  "now SOURCED" to flagged/needs-OEM-query) since it underwrites the P1-vs-P2
  turbine-efficiency ranking in §4. Also found **two separate 2022 MHI-linked
  Singapore ammonia-GTCC MoUs** (Jurong Port+MHI-AP+JERA Asia, 60 MW-class;
  Keppel Infrastructure+MHI+DNV, QRA) whose relationship to the 2025 EMA/MPA
  Keppel-led FEED project (already in §6) is **unconfirmed** — the 2025 release
  names no turbine OEM. Corrected an overstated "slipped" claim about the H-25
  ~2025 commercialisation target (§1 row A6) to "stale/unconfirmed" — no MHI
  update was found either confirming or revising it. Context finding: MHI's H₂
  co-firing (30%→50 vol %, grid-connected, T-Point 2) is more mature/dated than
  its NH₃ direct-firing program. Added a distinct ammonia *boiler*-burner data
  point (Nagasaki, 0.5 t/h) explicitly flagged as a different technology from
  gas-turbine firing. Added 8 new references (§7) and a Sourced Data Registry
  block (§6).
- **2026-07-28** — Built the **comprehensive ammonia-firing comparison: gas
  turbine vs. reciprocating gas engine**, at
  `power_generation/NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md`
  (Rev 1; 7 axis-blocks — maturity/fuel-readiness, thermodynamics, operability,
  emissions, fuel-system/utilities/footprint, CAPEX/OPEX/maintenance, project
  fit — ~45 rows, plus a derived fuel-consumption table and a 12-row verdict
  table). This is the deeper study flagged as "next" on 2026-07-16.
  **Headline: the recommendation for the stationary P2 / Singapore-offtake case
  flips from engine to gas turbine**, on three new sourced developments — (1)
  **IHI + GE Vernova, Mar 2026**, burned **100 % ammonia in full-scale F-class
  combustion hardware** at full-load pressure/temperature/flow, with a
  **retrofittable** 6F.03/7F/9F combustion system targeted for **2030**; (2) the
  **IHI IM270 2 MW** machine has run **~3,000 h on 100 % liquid ammonia**
  (Jul 2024→Jan 2026) including **load-rejection and load-dump** tests, at
  **NOx <7 ppm** and **>99 % GHG reduction including N₂O** — making it the most
  operationally proven 100 %-NH₃ power machine on either technology; and (3)
  **Singapore's own ammonia power project** (EMA/MPA, Keppel-led with Sumitomo
  and Advario, Jurong Island) is specified as **55–65 MWe by direct ammonia
  combustion in a gas turbine plant** and is in FEED — the same size class and
  geography as our offtake, and there is **no ammonia-engine power project in
  Singapore**. Ammonia **engines remain marine-first** (Wärtsilä 25 A deliveries
  2028; Everllence ME-LGIA shipyard delivery 2026; MAN four-stroke genset R&D to
  ~2027–28; **no stationary ammonia genset product exists**). The turbine also
  destroys **N₂O (GWP ≈273×)** *in the combustor* via two-stage rich-lean
  combustion, whereas the engine depends on **three catalyst beds** (SCR + AMOX/
  ASC + dedicated N₂O). **The 2026-07-16 engine-favouring read is not retracted
  — it stands for the load-following / incrementally-grown 50 MW data-centre
  duty**; the two conclusions are duty-dependent, and the engine still wins
  part-load (>46 % vs GT falling off), N+1 modularity, ~2-min/black start, water
  (<5 L/h vs ~780 L/MWh CCGT) and tropical derate (GT loses ~0.4 %/°F). New
  quantified findings: NH₃ CC ~51 % **derived** as 34.8 % × 60/41 = 50.9 %;
  **cracked-NH₃ CC reaches 54 %** vs 47.7 % direct-liquid — *only with GT
  waste-heat integration; a standalone cracker lowers net efficiency* — which
  makes the MMHE cracker an asset on the **Singapore** side too and is a direct
  crossover for the P1-vs-P2 ranking; and a shown calc that the turbine's
  ~3.5-pt edge is worth **8–11 ktpa NH₃ (~6 %)** at 50 MW, with cracked-NH₃
  worth ~20 ktpa (~12 %). **NH₃ CAPEX premium remains unpublished on both
  technologies and was not invented**; the H₂ +8.5 % GT-subsystem premium is
  explicitly flagged as **not transferable** to ammonia. Added a decision (§2),
  a large Sourced Data Registry block (§6) and 25 references (§7). Note:
  WebFetch/curl were blocked (HTTP 403 via the agent proxy) throughout this
  session, so every figure is taken from **WebSearch result summaries with the
  source URL retained** — worth a spot-check against the primary documents
  before investment-grade use.
- **2026-07-16** — Built the first **NH₃-focused, 50 MW data-center power-block
  comparison matrix**: **reciprocating ammonia gas engine vs. ammonia gas
  turbine in CCGT config**, at
  `power_generation/50MW_datacenter_NH3_engine_vs_CCGT_matrix.md`. Use-case: a
  **50 MW firm clean block on 100 % green NH₃** with the **grid temporarily
  topping up** the larger total DC demand until ammonia is affordable for 100 %
  clean supply. **Headline: neither engine nor turbine is a buyable, proven
  50 MW / 100 %-NH₃ product today** — both pre-commercial (Wärtsilä 25 A engine
  marine-first, deliveries 2028; MHI H-25 40 MW-class NH₃ GT still pre-demo),
  which is why the grid bridge is needed. Matrix (14 axes) sourced to Wärtsilä,
  Mitsubishi Power, MAN ES, EIA AEO2025, GridLab, Thunder Said Energy, Power
  Engineering; NH₃-specific efficiency/emissions-ppm/CAPEX-premium flagged as
  **not published** and NOT invented (No-Fabrication Rule). Provisional read:
  **engine** fits the grow-the-clean-share transition better (modular N+1, flat
  part-load >46 % vs GT <36 %, ~2-min/black-start, <5 L/h water); **CCGT** wins
  peak efficiency (~51 %) and footprint but is a coarse, single-train,
  water-hungry (~780 L/MWh), slower-start block. Added datapoints to the Sourced
  Data Registry (§6), an assumption (§3), and 12 references (§7). This was the
  agreed matrix-only first pass; deeper study (NH₃ premiums, emissions ppm,
  investment-grade CAPEX) is the next task.
- **2026-07-15** — Created new root-level folder **`power_generation/`** with a
  **resident domain-expert agent**: a senior power-generation engineer
  experienced in **reciprocating gas engines** and **gas turbines (incl. CCGT
  configuration)** across **natural gas, hydrogen and ammonia**. Purpose: build
  and maintain the **ammonia gas engine vs. ammonia gas turbine/CCGT** power-
  generation comparison for the Singapore offtake side, benchmarked against NG
  (mature) and H₂ (P1). Agent is defined in two synced places:
  `.claude/agents/powergen-engine-vs-turbine.md` (authoritative, invocable
  Claude Code subagent charter with the full comparison framework/axes) and
  `power_generation/AGENT.md` (resident persona); plus `power_generation/
  README.md`. Charter enforces the repo **No-Fabrication Rule** (every number
  sourced/assumption-labelled/derived; blank+flagged beats invented),
  distinguishes fuel from technology, and reuses already-sourced repo anchors
  (P1/P2 CCGT efficiencies §3/§6, H₂-CCGT capex study). Only the agent was
  built this session; the comparison deliverables are the agreed **next task**.
- **2026-07-01** — Quick market study on **hydrogen-fired CCGT capital cost
  (USD/kW)** for the Singapore offtake side of P1, stored at
  `market_research/H2_CCGT_capex_market_study.md`. No public source publishes
  a clean 100 %-H₂-CCGT $/kW (no such plant is commercially operating; closest
  analogues are hydrogen-blend-ready, not 100 % H₂). Derived a range from: (a)
  NG H-class CCGT baselines — $900–1,100/kW engineering basis (EIA/Sargent &
  Lundy, 2023$) vs. $2,200–2,800/kW current 2025 market (Wood Mackenzie
  turbine supply crunch, +195 % since ~2020); (b) two real hydrogen-ready
  H/J-class CCGT projects as sanity checks — IPP Renewed (Utah, MHI M501JAC,
  840 MW, $865 M ≈ $1,030/kW) and Long Ridge (Ohio, GE 7HA.02, 485 MW, ~$599 M
  financing basis ≈ $1,235/kW); (c) one techno-economic literature source
  (Chalmers Univ., Int'l J. Hydrogen Energy 2022) quantifying a ~+8.5 %
  hydrogen-firing premium on the gas-turbine subsystem, diluted to roughly
  low-single-digit–5 % across a full CCGT since the steam bottoming cycle is
  fuel-agnostic. **Result: ≈$1,000–1,400/kW at "normal" market pricing,
  ≈$2,400–3,200/kW at today's supply-constrained pricing** — flagged
  throughout as a derived estimate, not an OEM/EPC quote (no-fabrication
  rule). All figures are US-market; no Singapore/ASEAN CCGT EPC benchmark was
  located. Added corresponding entries to the Sourced Data Registry (§6),
  Assumptions Register (§3), and References (§7).
- **2026-06-30** — Built the first end-to-end permutation comparison: **P1**
  (crack at MMHE → 16″ H₂ pipeline → H₂-CCGT in SG) vs **P2** (ship 650 ktpa NH₃
  India → Singapore → 100 % NH₃-CCGT). Deliverable
  `permutations/P1_vs_P2_well-to-wire_energy.md` + 8-slide deck
  `permutations/P1_vs_P2_comparison_deck.pptx`. **Rev 1** anchors CCGT
  efficiencies to published OEM data (H₂ ~62 % on GE 9HA.02 H-class; 100 % NH₃
  ~51 % on MHI H-25 40 MW class), which **reverses** the Rev 0 result: usable
  energy at the wire **P1 ≈ 54.4 % vs P2 ≈ 50.7 %** — hydrogen's access to a
  ~64 %-class turbine outweighs the ~11 % cracking penalty. Crossover: P2 only
  wins if a large ~55 %+ 100 % ammonia turbine exists. Cracking 89–91 % from
  internal Casale/Duiker docs; recommendation **P1**.
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
- **2026-07-01** — Added a "Reference_Deck" presentation (CrackerTech /
  Floating Ammonia Storage and Cracker Unit (FASCU) collaboration deck: OKRs,
  licensor engagement, floating-cracker partner selection (SwitcH2, BW
  Offshore, Hoegh Evi, Toyo Engineering/Mitsubishi Shipbuilding), TCA/JFSA
  contracting workflow, visit/way-forward timeline), converted from PPTX to
  Markdown via Microsoft `markitdown`, stored at new root-level
  `presentationstyle/Reference_Deck.md`. Per user instruction this file is
  intended as the **reference for Claude's design system / presentation
  style** going forward — i.e., its structure (slide titles, section
  hierarchy, notes blocks) should inform how future decks/reports for this
  project are organised, not as sourced technical data. Note: `markitdown`
  extracts text/structure only (slide titles, body text, tables, image
  captions as alt-text placeholders like `![Picture6.jpg]`) — it does NOT
  extract visual styling (colors, fonts, layout/theme) from the PPTX, so no
  visual design tokens were captured, only content structure. Any
  quantitative figures inside (e.g. "Taurus 7.4 USD/kgH2 vs 12 USD/kgH2 ELY",
  "USD 44,000 FTE cost", "EUR 300,000 cost avoidance") are machine-extracted
- **2026-07-01** — Attached the original source file alongside the Markdown
  conversion: `presentationstyle/Reference_Deck.pptx` (binary PPTX, ~6.6 MB).
  Kept for visual styling reference (colors, fonts, layout/theme) that
  `markitdown` could not extract into the `.md` version — see prior entry.
  from a commercially confidential internal deck — treat as transcription
  pending verification, not a sourced public reference (no-fabrication rule).
- **2026-07-01** — Since the `.pptx` is too large for Claude Design to load
  directly, extracted its visual design tokens by reading the OOXML inside
  the zip (`ppt/theme/theme2.xml`, `ppt/theme/theme3.xml`,
  `srgbClr`/`rPr` attributes in `ppt/slides/slide1–9.xml`) and wrote
  `presentationstyle/Design_Style_Guide.md`. Finding: the deck mixes **two
  themes** — the generic PowerPoint "Office" default (Aptos fonts, slides 1,
  4–9) and a custom **"Gentari-Update-feb23"** brand theme (Verdana, slides
  2–3) — with a **hardcoded purple `#7030A0`** applied directly to
  titles/branding across nearly the whole deck (97 occurrences), which is
  the deck's real visual identity rather than either theme's native
  palette. **Decision:** future Claude-generated decks for this project
  default to the Gentari brand palette (`#7030A0` titles;
  `#60269E`/`#00C5E5`/`#B2007F`/`#ED2B60`/`#FAD83A`/`#556938` accents, plus
  topic-relevant extensions Hydrogen `#0062E4` / Renewable `#F58222` /
  Green `#58C549`) and Verdana, falling back to the Office palette/Aptos
  only when matching the Office-themed half of the source deck — full
  12-role color tables, type scale (7–24pt), and 16:9 canvas dims (12.192M ×
  6.858M EMU) are recorded in the style guide. All values are
  machine-extracted directly from the `.pptx` XML (no-fabrication rule).
- **2026-06-30** — Initialised repository memory. Created `CLAUDE.md` (scope,
  value chain, permutation basis, cited technical baseline, no-fabrication rule)
  and this `memory.md` (facts, decisions, assumptions, permutation template,
  open questions, sourced data registry, references).
