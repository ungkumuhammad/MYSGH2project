# Ammonia Firing: Gas Turbine vs. Reciprocating Gas Engine — Comprehensive Comparison

> **Question:** For firing **ammonia (NH₃)** in a power block on the Singapore
> offtake side, how does a **gas turbine** (simple cycle and CCGT) compare
> against a **reciprocating gas engine** plant, across the full engineering
> decision set?
> **Deliverable type:** Comprehensive comparison matrix (Rev 1 — supersedes the
> matrix-only first pass in `50MW_datacenter_NH3_engine_vs_CCGT_matrix.md`,
> which remains valid for the 50 MW data-centre framing).
> **Basis:** net electrical, **LHV**, tropical ambient unless stated. Fuel =
> **100 % NH₃** unless a co-firing / cracked-NH₃ case is named. Natural gas (NG)
> and dual-fuel (DF) figures appear only as the **mature anchor** beneath each
> pre-commercial NH₃ value.
> **Date:** 2026-07-28.
> **No-Fabrication Rule (CLAUDE.md §7):** every cell is (a) sourced, (b) a
> labelled assumption/anchor, or (c) a shown calculation. Cells that no vendor
> publishes are marked **[not published]** and left empty rather than invented.

---

## 0. Headline — what changed since the 2026-07-16 first pass

The July matrix concluded that *neither* technology was buyable at 50 MW on
pure NH₃, and gave a **provisional nod to the engine** on modularity and
part-load. Three developments since then **shift the balance toward the
turbine for stationary ammonia power**:

| # | Development | Date | Why it matters | Source |
|---|-------------|------|----------------|--------|
| 1 | **IHI + GE Vernova burned 100 % ammonia in full-scale F-class combustion hardware** at full-load pressure, temperature and flow | **Mar 2026** | Moves the large ammonia turbine from concept to demonstrated combustion hardware, on the **6F.03 / 7F / 9F** frames — i.e. utility scale, and **retrofittable** | [1][2] |
| 2 | **IHI IM270 2 MW ammonia turbine passed ~3,000 h** of endurance running on **100 % liquid ammonia**, incl. load-rejection and load-dump tests; **NOx <7 ppm** after DeNOx; **>99 % GHG reduction incl. N₂O** | **Jul 2024 → Jan 2026** | This is now the **most operationally proven 100 %-NH₃ power machine in existence**, on either technology. Long-run durability, not a rig test | [3][4] |
| 3 | **Singapore's own ammonia power project (EMA/MPA, Keppel-led, Jurong Island) is specified as 55–65 MW by *direct ammonia combustion in a gas turbine plant*** — now in FEED | 2025→ | The **offtake market has already picked the turbine** for exactly our size class and geography. No equivalent ammonia **engine** power project exists in Singapore | [5][6] |

Meanwhile the ammonia **engine** side remains **marine-first**: Wärtsilä 25
Ammonia is sold into gas carriers (deliveries 2028), Everllence/MAN B&W ME-LGIA
two-stroke ships in 2026, and MAN's four-stroke *AmmoniaMot 2* genset programme
runs to ~2027–28. Wärtsilä still markets **natural gas (34SG), not ammonia**,
for stationary/data-centre duty. [7][8][9][10][11]

**Net:** for a *stationary, grid-parallel, ammonia-fired* block in Singapore,
the **gas turbine is now the more de-risked route**. The engine keeps genuine
advantages in **part-load, modularity, water and ambient robustness**, which
matter if the duty is load-following or grows incrementally.

---

## 1. Master comparison matrix

### A. Technology status & fuel readiness

| # | Axis | **Gas turbine on NH₃** | **Reciprocating gas engine on NH₃** | Source |
|---|------|------------------------|--------------------------------------|--------|
| A1 | Combustion principle | Continuous, lean premixed / **rich-lean two-stage** staged combustor; NH₃ injected as liquid spray or vapour | Intermittent **low-pressure Otto dual-fuel** cycle; NH₃ + small pilot ignition fuel | [3][7][12] |
| A2 | **% NH₃ achieved (demonstrated)** | **100 %** — IM270 2 MW long-run; F-class full-scale combustion rig | **~95 %** energy share (5 % pilot); ">95 %" shown on 2-stroke | [3][7][9][11] |
| A3 | Pilot / ignition fuel needed | **None** (combustor-based) | **Yes, ~5 %** (Wärtsilä 25 A; ME-LGIA "5 % SPOC"). MAN *NH3-Spark* targets pilot-free — **R&D** | [7][9][11] |
| A4 | **Highest TRL on 100 % NH₃, stationary** | **TRL 7–8** — 2 MW machine, ~3,000 h endurance + load rejection/dump | **TRL 5–6 stationary** (marine TRL 7–8; no stationary ammonia genset in service) | [3][4][7][9] |
| A5 | Largest frame with NH₃ hardware demonstrated | **F-class (6F.03 / 7F / 9F)** combustion system, full-scale, 100 % NH₃ | **~3.1 MW/cyl-set unit** (W25 A, 1.9–3.1 MW); MAN roadmap 4-stroke DF to **26 MW**, 2-stroke **12–68 MW** | [1][2][7][10] |
| A6 | Commercial availability (stationary NH₃) | **~2030** for F-class retrofit combustor; 2 MW IM270 near-term; MHI H-25 40 MW-class targeted **"~2025"** (announced 2021) with **no confirming or revising update located since** — treat as stale/unconfirmed, not as a confirmed slip (§2 row M5) | **≥2028** and marine-first; stationary genset programme runs to ~2027–28 | [1][2][13][14][7][10] |
| A7 | **Retrofit path on existing fleet** | **Yes — explicitly the GE/IHI product concept** (retrofittable combustion system for installed 6F/7F/9F) | Retrofit offered on marine 2-stroke; **no stationary retrofit product** | [1][2][11] |
| A8 | Fuel-flexibility of the same asset | NG ↔ H₂ ↔ NH₃ across a blend range; Baker Hughes/Hanwha NovaLT16 claims **100 % NH₃ ↔ 100 % gas and any blend** | DF: NG/diesel now → NH₃ later on the same block | [15][16][7] |

### B. Thermodynamic performance

| # | Axis | **Gas turbine on NH₃** | **Reciprocating gas engine on NH₃** | Source |
|---|------|------------------------|--------------------------------------|--------|
| B1 | Net efficiency, **simple cycle** (LHV) | **≈34.8 %** (H-25 40 MW class, repo anchor) | **≈46–49 %** (OEM parity with the DF-LNG twin; W34SG NG = **48.9 %**) | memory.md §3/§6; [17] |
| B2 | Net efficiency, **combined cycle** (LHV) | **≈50–51 %** — *derived:* 34.8 % × (60 MW CC ÷ 41 MW SC) = **50.9 %** for H-25 1×1 | **>54 %** as engine-CC ("Flexicycle") — **but that figure is on NG**, and adds a steam island | *calc*; [13][18] |
| B3 | **Head-to-head at equal plant type** | CCGT ≈ **51 %** | Engine SC ≈ **47.5 %** (mid) → **turbine +3.5 pts**. Engine-CC ≈ 54 % (NG basis) → **engine +3 pts**. **The ranking flips on whether the engine gets a steam bottoming cycle** | *calc* from B1/B2 |
| B4 | Efficiency penalty of NH₃ vs NG | Literature: ammonia CC lands **~1.7 pts below NGCC** in an optimised waste-heat-recovery cycle; another study finds full NG→NH₃ substitution costs **~0.5 pts** | **[not published]** for a production ammonia genset; OEM claims parity with the DF twin | [19][20]; [7] |
| B5 | **Cracked-NH₃ firing (NH₃→H₂+N₂ at the fence)** | **Large upside:** 47.7 % (direct liquid NH₃) / 49.1 % (vaporised) → **54 % on fully cracked H₂–N₂** in one CC study — *requires heat integration with GT waste heat; a standalone cracker lowers net efficiency* | Not a natural fit — engine gains less from cracking, and H₂ in a recip engine brings knock/pre-ignition limits | [21] |
| B6 | Part-load efficiency | **Falls off** — Wärtsilä cites **<36 %** for aeroderivative GT at partial load. ⚠️ *That comparison is Wärtsilä's, against **aeroderivative** GTs, not against a CCGT — treat as directionally right, not as a CCGT number* | **Stays flat — >46 %** via multi-unit staging (each unit near its own best point) | [22] |
| B7 | **Tropical ambient derate** (Johor/SG ~30–33 °C vs ISO 15 °C) | **Material** — GT is a fixed-volume machine: ~**0.4 % power loss + 0.1 % heat-rate rise per °F** above 59 °F; ~**5–10 % power loss per 10 °C** | **Small** — turbocharged; Wärtsilä's whole positioning is low derating vs GT | [23][22] |
| B8 | NH₃ combustion physics penalty | Laminar flame speed **~1/5 of methane–air**; narrow flammability, poor flame stability → drives **staged/rich-lean combustors**, H₂ or cracked-NH₃ enrichment | Same slow-flame problem, solved differently: **compression/pilot ignition + high turbulence**; Otto cycle tolerates it | [21][24][7] |

### C. Operability & flexibility

| # | Axis | **Gas turbine on NH₃** | **Reciprocating gas engine on NH₃** | Source |
|---|------|------------------------|--------------------------------------|--------|
| C1 | Plant granularity at ~50 MW | **~1 train**: 40 MW-class GT + HRSG + ST → 50–60 MW; or 2 MW-class IM270 × many | **~16–26 units** × 1.9–3.1 MW — inherently modular | [13][3][7] |
| C2 | **Redundancy / N+1** | **Single train** — one trip ≈ 100 % loss unless a 2nd train is bought | **Intrinsic** — 1 unit of ~20 down ≈ **5 %** loss | architectural |
| C3 | Start time to full load | Slower — HRSG/steam warm-up; CCGT cold start tens of minutes (SC GT faster) | **~2 min to full load**, **black-start capable** (NG basis) | [17] |
| C4 | Load rejection / islanding on NH₃ | **Demonstrated** — IM270 passed **load-rejection and load-dump tests on 100 % NH₃** | **[not published]** on ammonia for a stationary genset | [4]; — |
| C5 | Phased build-out of the clean share | **Coarse** — next increment is a whole train | **Excellent** — add units as green NH₃ becomes affordable | serves the grid-bridge transition |
| C6 | Suitability: baseload vs load-following | Favours **steady baseload** (best efficiency at rated, worst at part load) | Favours **load-following / variable duty** | [22] |

### D. Emissions & after-treatment (the ammonia-specific risk)

| # | Axis | **Gas turbine on NH₃** | **Reciprocating gas engine on NH₃** | Source |
|---|------|------------------------|--------------------------------------|--------|
| D1 | Raw NOx driver | Fuel-bound N in NH₃ → **fuel NOx** on top of thermal NOx. Controlled by **two-stage rich-lean combustion** | Same fuel-NOx mechanism; controlled by combustion tuning + after-treatment | [3][12][24] |
| D2 | **NOx achieved (with control)** | **<7 ppm** demonstrated (IM270 + DeNOx). Dual-function SCR reported **<2.5 ppm with ~zero NH₃ slip** for GTs. NovaLT16 claims **IMO Tier III without SCR** — *vendor claim, unverified at stationary duty* | Wärtsilä NOx Reducer (NOR = SCR) in the standard package; marine Tier III basis | [4][25][15][16][7] |
| D3 | **N₂O** (GWP ≈ **273×** CO₂, 100-yr) | **>99 % GHG reduction incl. N₂O** at 70–100 % NH₃ ratio, via **two-stage combustion** — the staging is what killed the N₂O spike that used to appear above 70 % NH₃ | Untreated **~20 ppm** across loads (IHI test engines) → **2–10 ppm with catalyst**; N₂O then ≈ **≤1 % of CO₂e** in service (NYK *Sakigake*, ~95 % NH₃) | [3][4][26]; [26] |
| D4 | **Unburned NH₃ slip** | Handled by the combustor + DeNOx train; dual-function SCR reports ~zero slip | Assumed **10–30 ppm** for new 4-stroke DF engines (IHI/Wärtsilä measurement basis); target **<10 ppm** with AMOX/ASC | [25]; [26] |
| D5 | Overall GHG cut vs fossil twin | **>99 %** (IM270, 100 % liquid NH₃, incl. N₂O) | **up to 90 %** (Wärtsilä 25 A at ~95 % NH₃ energy share); **94 %** measured in service on *Sakigake* | [3][4]; [8][26] |
| D6 | After-treatment count | Combustor staging + **DeNOx/SCR** | **SCR (NOR)** + **AMOX/ASC** for slip + **dedicated N₂O catalyst** — a longer, more catalyst-dependent train | [4][25]; [7][26] |
| D7 | **Read on emissions** | **Turbine leads.** Continuous, controllable, staged combustion reaches near-total N₂O destruction *in the combustor*; engine relies more on downstream catalysts | Engine is workable but carries more after-treatment risk, cost and catalyst-life exposure | assessment from D1–D6 |

### E. Fuel system, utilities, footprint

| # | Axis | **Gas turbine on NH₃** | **Reciprocating gas engine on NH₃** | Source |
|---|------|------------------------|--------------------------------------|--------|
| E1 | Fuel delivery form | Liquid NH₃ direct spray (IHI) or vaporised/superheated NH₃ | Low-pressure vapour via a fuel gas supply system (**AmmoniaPac**) + pilot fuel train | [3][7] |
| E2 | **Fuel mass flow vs NG** | **≈2.7× the mass** for the same thermal input — *calc:* NG LHV ≈50 MJ/kg ÷ NH₃ 18.6 MJ/kg | Same fuel-side penalty — it is a **fuel property, not a technology difference** | *calc*; CLAUDE.md §5 |
| E3 | **Fuel volumetric energy (liquid)** | **≈12.6 GJ/m³** — *calc:* 121 kg H₂/m³ ÷ 0.178 wt% = **680 kg/m³**; × 18.6 MJ/kg | Identical — sets storage tank size for **both** options | *calc* from memory.md §6 |
| E4 | **Water consumption** | **High** — CCGT recirculating ≈ **780 L/MWh** | **Very low** — engine SC **<5 L/h** demineralised (engine-CC Flexicycle ≈409 L/MWh) | [22] |
| E5 | Footprint per MW | **Smaller** for the GT itself (Wärtsilä concedes this), but CCGT adds HRSG + steam island + cooling | **Larger** — many units + balance-of-plant | [22] |
| E6 | **Toxicity-driven safety envelope** | Common to both: NH₃ is regulated on a **toxicity** basis (not just flammability) → ppm-level gas detection, release-mitigation systems, cofferdams/separation from occupied spaces, closing devices on air intakes | Same envelope; Wärtsilä ships **WARMS** (Ammonia Release Mitigation System) as part of the package | [27]; [7] |
| E7 | Where the safety burden differs | Fewer, larger fuel connections; one combustor train | **Many more** fuel connections, joints and crankcase interfaces across 16–26 units → larger leak-path population | assessment |

### F. CAPEX, OPEX & maintenance

| # | Axis | **Gas turbine on NH₃** | **Reciprocating gas engine on NH₃** | Source |
|---|------|------------------------|--------------------------------------|--------|
| F1 | **Installed CAPEX — NG anchor only** | NG CCGT **$921/kW** (EIA/S&L, 2023$) → **$1,116–1,427/kW** (2026–27 projects) → **~$2,000/kW** recent actuals amid the turbine supply crunch | NG RICE **≈$1,250–1,500/kW** | [28][29][30] |
| F2 | **NH₃ CAPEX premium** | **[not published]** — no OEM/EPC quotes an ammonia premium | **[not published]** | — |
| F3 | Cross-read from the H₂ case | H₂-firing premium ≈ **+8.5 % on the GT subsystem**, diluting to low-single-digit–5 % on a full CCGT. **Do not transfer this to NH₃** — NH₃ needs a different combustor *and* a DeNOx/N₂O train | n/a | memory.md §6; [31] |
| F4 | Fixed O&M anchor | CCGT ≈ **$10–12/kW-yr** (2023$, EIA/S&L) | **[not published]** in the same basis this session | [28] |
| F5 | Major maintenance pattern | GT major overhaul **~25,000–35,000 h** ($4–8 M); combustion inspection ~24,000 h ($1.2–2.5 M) — *US market, NG basis* | More frequent, but **per-unit**: the plant stays partly up while one unit is serviced | [32]; architectural |
| F6 | Outage impact | Overhaul takes **the whole train** down | **~5 % of capacity** per unit | architectural |
| F7 | Catalyst OPEX exposure | DeNOx catalyst | **Higher** — SCR + AMOX + N₂O catalyst, three catalyst beds to replace | D6 |

### G. Fit to this project (MYSGH2)

| # | Axis | **Gas turbine on NH₃** | **Reciprocating gas engine on NH₃** | Source |
|---|------|------------------------|--------------------------------------|--------|
| G1 | Which permutation does this serve? | **P2** (ship NH₃ all the way to Singapore, fire it directly). For **P1**, the Singapore-side fuel is **H₂**, not NH₃ — a different machine set | Same — P2 branch | memory.md §4 |
| G2 | **Singapore precedent** | **Strong** — EMA/MPA/Keppel Jurong Island project: **55–65 MW, imported low/zero-carbon NH₃, direct combustion in a gas turbine plant**, in FEED. Same size class, same city | **None** — no ammonia engine power project in Singapore | [5][6] |
| G3 | Interaction with cracking (our core asset) | **Synergy** — a partially/fully cracked NH₃ feed lifts CC efficiency toward **54 %**, and MMHE is already a cracking site. Blurs P1/P2 into a "crack-at-the-fence" hybrid | Weak synergy | [21] |
| G4 | Tropical siting | Penalised by ambient derate (E/B7) | **Favoured** — low derate | [23][22] |
| G5 | Effect on the P1-vs-P2 ranking | If a **~55 %-class** ammonia turbine (or cracked-NH₃ CC) becomes real, P2 closes the gap on P1 — this is precisely the crossover already recorded in memory.md §4 | An engine at ~47.5 % SC does **not** move P2 up | memory.md §4; *calc* |

---

## 2. MHI actual/demonstrated data vs. the literature/theoretical studies used above

Section 1's efficiency and NOx rows lean on **generic literature/simulation
studies** (ScienceDirect, MDPI, NETL) because no OEM publishes an ammonia-specific
efficiency or emissions curve for a named machine. MHI is the exception — it has
**real hardware test results** on record, separate from its H-25 100 %-NH₃
*headline* product. Laid side by side, MHI's actual numbers are **materially
behind** the literature's optimised/simulated cases, and one long-standing
assumption in this repo needs a flag.

| # | Axis | **Literature / theoretical study (§1)** | **MHI actual / demonstrated data** | Read | Source |
|---|------|------------------------------------------|-------------------------------------|------|--------|
| M1 | **Ammonia co-firing ratio, real hardware** | Cracked-NH₃ CC study models the **0→100 %** cracking range in simulation (not built hardware) [21] | **20 % NH₃ (LHV) co-firing demonstrated in an actual 2 MW-class gas turbine** — combustor-only modification of an **IHI IM270** airframe, tested at **Yokohama, Oct 2020** | MHI's *proven, hardware* ceiling (20 %) sits far below both the literature's simulated 100 % case and IHI's own later **100 % liquid-NH₃ solo-fire** on the same IM270 platform (§1 row A2/A4) — the clearest theory-vs-hardware gap in this whole comparison | [33][34] |
| M2 | **NOx at high ammonia ratio** | NETL: rich-lean staged combustion **modelled/lab-tested to <100 ppm** in "optimised configurations" (generic, not tied to a named machine) [24] | **Raw (pre-treatment) NOx = 287 ppm @16 %O₂ at 20 % NH₃ mixing ratio**, rising sharply up to ~5 % mixing then flattening to 20 %; reduced to **<7 ppm only after an SCR/NOx-removal device** | MHI's actual combustor-out NOx at just 20 % ammonia is **~3× the literature's "optimised <100 ppm"** claim — 2020-vintage hardware ran well behind the lab-scale optimised designs the literature cites. The <7 ppm figure (matching IHI's IM270 solo-fire number, §1 D2) is an **after-treatment result, not a combustion result** | [33] |
| M3 | **100 % NH₃ simple-cycle efficiency (H-25)** | This repo's own anchor: **34.8 %** SC (memory.md §3, used throughout §1 B1–B3) | **⚠️ Not confirmed as an ammonia-specific figure.** MHI's H-25 datasheet efficiency is published on its **natural-gas** baseline; no MHI source located in this session states a **100 %-ammonia-specific** SC efficiency for the H-25. The 34.8 % figure this repo carries forward from prior sessions appears to be the **NG-class spec applied by assumption**, not a disclosed ammonia number | **This is a live gap, not a resolved anchor.** Everything downstream in §1 (B1–B3, the P1-vs-P2 turbine-efficiency case in memory.md §4) inherits this assumption. Recommend requesting the OEM-quoted ammonia-specific efficiency before using 34.8 % in an investment-grade deliverable | memory.md §3 (assumption, not re-verified this session); [13][14] |
| M4 | **100 % NH₃ GTCC project status, Singapore** | n/a — real project, not modelled | **Two separate MHI-linked Singapore MoUs on record, both from 2022, neither updated since:** (a) **Jurong Port + MHI Asia Pacific + JERA Asia**, Aug 2022 — **60 MW-class 100 % NH₃ GTCC**, to also seed ammonia-bunkering demand; (b) **Keppel Infrastructure + MHI + DNV**, Sep 2022 — high-level **QRA** for a 100 % NH₃ CCGT, "focus on maintaining high efficiency and low NOx" (no numbers published) | **⚠️ Relationship to the 2025 EMA/MPA project (§1 G2, memory.md §6) is UNCONFIRMED.** The 2022 MoUs name MHI as turbine partner and Keppel as a common thread; the 2025 EMA/MPA release (Keppel-led with Sumitomo/Advario, 55–65 MW, FEED) does **not** name a turbine OEM in the sources found. Whether the 2025 project is a continuation of the 2022 MHI-linked work, or MHI was not carried forward into the selected consortium, could not be established this session — **open question, do not assume continuity** | [35][36][6][5] |
| M5 | **H-25 100 %-NH₃ commercialisation date** | n/a | "Commercialisation **around 2025**" — announced **2021**. **No MHI update (2023–2026) located** confirming, revising, or retracting that date, despite repeated searching | Treat as **stale/unconfirmed**, not as "on track" and not as "officially delayed" — the silence itself is the finding | [14][37] |
| M6 | **Context: MHI's more mature H₂ co-firing track record** | n/a — comparison context | **30 % H₂ co-firing demonstrated grid-connected** on a large-frame **JAC (J-series Air-Cooled)** turbine at **T-Point 2**, Nov 2023; later raised to **50 vol %**; at 50 % H₂, **CO₂ cut ≈22 %** vs 100 % NG | Within MHI's own portfolio, **hydrogen co-firing has dated, large-frame, grid-connected milestones that ammonia direct-firing does not** — ammonia visibly lags hydrogen inside the same OEM's roadmap | [38][39] |
| M7 | **Separate technology track — ammonia *boiler* co-firing (not a gas turbine)** | n/a | Ammonia single-fuel **burner** (not turbine) tested at **0.5 t/h** scale, Nagasaki, **Nov 2023**, for **coal-boiler** retrofits: stable combustion, complete NH₃ burnout, NOx reduced vs coal baseline | **Different technology, different application (thermal boiler, not GTCC)** — flagged only so it is not mistaken for gas-turbine progress when scanning MHI's ammonia news flow | [40][41] |

**Net read:** MHI is transparent about **partial (20 %) co-firing hardware**
and about **H₂ co-firing at large-frame scale**, but has gone quiet on **100 %
NH₃ at the H-25/utility scale** since 2021–2022 — in contrast to IHI, which has
kept publishing dated, incremental 100 %-NH₃ milestones (2 MW class) through
Jan 2026. This reinforces §0's read that **IHI currently carries the more
credible demonstrated 100 %-NH₃ turbine track record**, while MHI's H-25
remains the **larger nameplate (40 MW) but the less recently evidenced** claim.

## 3. Derived fuel consumption — what the efficiency gap actually costs

*Shown calculation. Inputs: 50 MWe net; NH₃ LHV 18.6 MJ/kg (CLAUDE.md §5);
90 % capacity factor = 7,884 h/yr (**assumption**, flagged).*

| Case | Net eff. (LHV) | Fuel input | NH₃ rate | **NH₃ per year** |
|------|----------------|------------|----------|------------------|
| Engine plant, SC (low) | 46.0 % | 108.7 MWth | 21.0 t/h | **166 ktpa** |
| Engine plant, SC (mid) | 47.5 % | 105.3 MWth | 20.4 t/h | **161 ktpa** |
| Engine plant, SC (high) | 49.0 % | 102.0 MWth | 19.7 t/h | **156 ktpa** |
| **NH₃ CCGT (low)** | 50.0 % | 100.0 MWth | 19.4 t/h | **153 ktpa** |
| **NH₃ CCGT (high)** | 51.0 % | 98.0 MWth | 19.0 t/h | **150 ktpa** |
| *Cracked-NH₃ CC (literature)* | *54.0 %* | *92.6 MWth* | *17.9 t/h* | ***141 ktpa*** |

**Read:** the turbine's ~3.5-pt efficiency edge is worth roughly **8–11 ktpa of
ammonia** at 50 MW — i.e. **~6 %** of the fuel bill, recurring for plant life.
Going to a **cracked-NH₃** combined cycle is worth roughly **20 ktpa (~12 %)**
against the mid engine case. For scale, the P1/P2 studies use **650 ktpa** NH₃,
so a 50 MW block consumes **~23–26 %** of that stream.

---

## 4. Verdict

| Decision driver | Winner | Confidence |
|-----------------|--------|-----------|
| **Demonstrated 100 % NH₃ operation (stationary)** | **Turbine** — 2 MW machine, ~3,000 h, load rejection/dump | High |
| **Path to utility scale** | **Turbine** — F-class (6F/7F/9F) retrofit combustor targeted 2030 | High |
| **N₂O / GHG destruction** | **Turbine** — >99 % incl. N₂O via two-stage combustion, in-combustor | High |
| **Peak efficiency (CC vs engine SC)** | **Turbine** (~51 % vs ~47.5 %) | Medium — CCGT anchor is a 40 MW-class machine |
| **Singapore market precedent** | **Turbine** — the only NH₃ power project here is a GT plant | High |
| **Synergy with our cracker** | **Turbine** — cracked-NH₃ CC reaches ~54 % | Medium (literature, not a plant) |
| **Part-load efficiency** | **Engine** (>46 % vs GT falling off) | Medium — Wärtsilä's own comparison, vs *aeroderivatives* |
| **Modularity / N+1 / phased clean-share growth** | **Engine** | High |
| **Start time & black start** | **Engine** (~2 min, black-start) | High — NG basis |
| **Water consumption** | **Engine** (<5 L/h vs ~780 L/MWh) | High |
| **Tropical ambient derate** | **Engine** | High |
| **Peak efficiency if the engine gets a steam bottoming cycle** | **Engine** (~54 % Flexicycle) | Low — NG basis only, never shown on NH₃ |

**Recommendation for the P2 / Singapore-offtake case: the ammonia gas
turbine.** It is the only ammonia technology with long-duration stationary
running, the only one with a credible utility-scale path, the one that solves
N₂O in the combustor rather than in a catalyst bed, the one Singapore's own
project selected, and the one that gets *better* if we feed it cracked ammonia
from the MMHE asset we are already building.

**The engine wins a different question.** If the duty is a **load-following or
incrementally-grown clean block** — the 50 MW data-centre framing in the July
matrix — the engine's flat part-load, N+1 granularity, 2-minute start, near-zero
water and low tropical derate are decisive, and that earlier recommendation
stands for that framing.

**Crossovers to watch:**
1. **Engine-CC on ammonia.** If an OEM offers a Flexicycle-class ammonia engine
   plant at ~54 %, the efficiency argument reverses. No OEM has shown this.
2. **A ≥55 % ammonia turbine.** Would materially close P2 against P1 (memory.md §4).
3. **Cracked-NH₃ at the fence.** ~54 % CC with GT-waste-heat-integrated
   cracking — a hybrid that makes MMHE's cracker an asset on the *Singapore*
   side too. **A standalone (non-heat-integrated) cracker lowers net efficiency
   — the integration is the whole point.**

---

## 5. Open questions / needs verification

- [ ] MHI **H-25 100 % NH₃**: current status and a confirmed (not just
      quiet-since-2021) commercialisation date. **Correction:** earlier repo
      language calling this "slipped" overstates what's known — no MHI source
      located confirms *either* an on-track or a delayed status; the finding is
      **silence**, not a confirmed slip (see §2 row M5).
- [ ] **Which of the two 2022 MHI-linked Singapore MoUs (Jurong Port/JERA or
      Keppel/DNV), if either, continues into the 2025 EMA/MPA-selected
      consortium** — turbine OEM not named in the 2025 release (see §2 row M4).
- [ ] **Ammonia-specific SC efficiency for the H-25** — is the 34.8 % figure
      this repo has used since 2026-06-30 (memory.md §3) actually an
      ammonia-specific OEM number, or the NG-class spec carried over by
      assumption? Needs a direct OEM query (see §2 row M3) — this underwrites
      the P1-vs-P2 turbine-efficiency ranking in memory.md §4.
- [ ] **NH₃ CAPEX premium** on either technology — still unquoted by any OEM/EPC.
- [ ] **Stationary** ammonia genset: does any OEM offer one, at what MW, when?
- [ ] IM270 **net electrical efficiency on ammonia** (2 MW class SC) — not located.
- [ ] Fixed/variable **O&M for RICE** in the same EIA basis as the CCGT $10–12/kW-yr.
- [ ] NovaLT16 **Tier III without SCR** — verify at stationary duty and against
      Singapore NEA limits, not just IMO Tier III.
- [ ] Singapore **NOx/NH₃-slip permit limits** for the Jurong Island GT plant —
      these set the real after-treatment scope for either technology.
- [ ] **N₂O measurement standard** to be used for compliance (no settled protocol).

---

## 6. Sources

1. GE Vernova / IHI — 100 % ammonia combustion achieved in F-class gas turbine
   test (Mar 2026): https://www.gevernova.com/news/press-releases/ihi-ge-vernova-achieve-milestone-100-ammonia
2. GE Vernova & IHI — next phase of roadmap, 100 % ammonia-capable combustion
   system by 2030 (6F.03 / 7F / 9F retrofit):
   https://www.ge.com/news/press-releases/ge-vernova-and-ihi-announce-next-phase-of-the-technology-roadmap-aiming-to-develop-a
3. IHI — 2 MW-class gas turbine cogeneration system fuelled exclusively by
   liquid ammonia, Cogeneration Award 2025:
   https://www.ihi.co.jp/en/all_news/2025/resources_energy_environment/1201875_13737.html
4. IHI — Development of Liquid Ammonia Direct Spray Combustion Gas Turbine
   (NOx <7 ppm, >99 % GHG reduction at 70–100 % NH₃):
   https://www.ihi.co.jp/en/technology/techinfo/contents_no/1199391_13586.html ;
   Ammonia Energy Association — IHI Corporation (IM270, Aioi, ~3,000 h as of
   Jan 2026): https://ammoniaenergy.org/organization/ihi-corporation/
5. EMA Singapore — Consortium appointed for next phase of study on low-/
   zero-carbon ammonia power generation and bunkering (55–65 MW, direct
   combustion in a gas turbine plant):
   https://www.ema.gov.sg/news-events/news/media-releases/2025/consortium-appointed-to-conduct-next-phase-of-ammonia-power-generation-bunkering-solution
6. Singapore EDB — Keppel-led consortium appointed, Jurong Island ammonia power
   and bunkering: https://www.edb.gov.sg/en/business-insights/insights/keppel-led-consortium-appointed-for-next-phase-of-ammonia-power-and-bunkering-project-on-jurong-island.html
7. Wärtsilä 25 Ammonia — 4-stroke ammonia engine (AmmoniaPac, WARMS, NOR):
   https://www.wartsila.com/marine/wartsila-25-ammonia
8. Wärtsilä — 4-stroke ammonia engine testing, up to 90 % GHG reduction:
   https://www.wartsila.com/media/news/27-05-2025-extensive-testing-of-wartsila-s-4-stroke-ammonia-engine-demonstrates-ghg-emission-reductions-by-up-to-90-percent-3590235
9. Wärtsilä — 25 Ammonia power upgrade (315 kW/cyl @900 rpm, 345 kW/cyl
   @1000 rpm; 1.9–3.1 MW; deliveries 2028):
   https://www.wartsila.com/media/news/16-04-2026-power-increase-for-wartsila-25-ammonia-engine-supports-more-efficient-ammonia%E2%80%91fuelled-vessel-designs-3739966
10. MAN Energy Solutions — AmmoniaMot 2 four-stroke ammonia genset R&D
    (Aug 2024 start, 3.5 yr); 2-stroke 12–68 MW, 4-stroke DF to 26 MW:
    https://www.man-es.com/company/press-releases/press-details/2025/05/22/man-energy-solutions-to-lead--new-ammonia-genset-project ;
    https://www.turbomachinerymag.com/view/man-energy-launches-four-stroke-engine-program-ammoniamot-2
11. Everllence (ex-MAN Energy Solutions) B&W **ME-LGIA** two-stroke ammonia
    engine — shipyard delivery 2026, 5 % SPOC pilot, >95 % NH₃ energy fraction:
    https://www.everllence.com/marine/products/two-stroke-engines/ammonia-engine
12. GE Vernova / IHI — novel ammonia-capable gas turbine combustor (two-stage):
    https://www.powermag.com/ge-vernova-ihi-developing-novel-ammonia-capable-gas-turbine-combustor/
13. Mitsubishi Power — H-25 Series (41 MW SC; ~60 MW 1×1 CC; ~120 MW 2×1):
    https://power.mhi.com/products/gasturbines/lineup/h25/
14. Mitsubishi Power — development of the world's first ammonia-fired 40 MW-class
    gas turbine, commercialisation "in or around 2025":
    https://power.mhi.com/news/20210301.html
15. Baker Hughes & Hanwha — joint development of ~16 MW 100 % ammonia-capable
    turbine (NovaLT16), Tier III NOx claimed without SCR, test by end-2027,
    deployment 2028: https://investors.bakerhughes.com/news-releases/news-release-details/baker-hughes-and-hanwha-announce-partnership-develop-small-size
16. Ammonia Energy Association — Hanwha/Baker Hughes fuel-flexible small turbines:
    https://ammoniaenergy.org/articles/hanwha-baker-hughes-to-develop-fuel-flexible-small-size-turbines-for-maritime-propulsion/
17. Wärtsilä 34SG gas engine — 48.9 % electrical efficiency, ~2 min to full load:
    https://www.wartsila.com/energy/solutions/engine-power-plants/wartsila-34sg-gas-engine
18. Wärtsilä Flexicycle (engine combined cycle) — >54 % ISO, on natural gas:
    https://www.wartsila.com/energy/engine-power-plant-solutions/engine-power-plant-products/applications/flexicycle-power-plants
19. Energy (Elsevier, 2023) — Waste heat recovery optimization in ammonia-based
    gas turbine applications (NH₃ CHGT within 1.7 pts of NGCC):
    https://www.sciencedirect.com/science/article/pii/S0360544223014731
20. MDPI Energies — Performance Analysis of an Ammonia-Fueled Micro Gas Turbine
    (~0.5 pt electric-efficiency loss on full NG→NH₃ substitution):
    https://www.mdpi.com/1996-1073/15/11/3874
21. Int'l J. Hydrogen Energy (2025) — Thermodynamic and preliminary
    techno-economic analysis of NH₃ in a combined cycle: direct liquid 47.7 % /
    vaporised 49.1 % / cracked H₂–N₂ 54 %:
    https://www.sciencedirect.com/science/article/pii/S0360319925043393
22. Wärtsilä — Technology comparison, engines vs. aeroderivative gas turbines
    (part-load efficiency, water, footprint, derating):
    https://www.wartsila.com/energy/learn-more/technology-comparison-engines-vs-aeros ;
    derating sub-page: https://www.wartsila.com/energy/learn-more/technology-comparison-engines-vs-aeros/derating-due-to-ambient-temperature
23. Power Engineering — ambient temperature effect on gas turbine output
    (~0.4 %/°F power loss, +0.1 %/°F heat rate):
    https://www.power-eng.com/operations-maintenance/why-keeping-cool-keeps-output-high/
24. NETL — Ammonia Combustion for Gas Turbine Engine Applications:
    https://www.netl.doe.gov/projects/files/AmmoniaCombustionforGasTurbineEngineApplications_070522.pdf
25. Power Engineering — dual-function SCR catalyst, <2.5 ppm NOx with ~zero
    ammonia slip for gas turbines:
    https://www.power-eng.com/gas/turbines/scr-catalysts-dual-function-catalyst-promises-high-nosubx-sub-removal-with-zero-ammonia-slip-for-gas-turbine-applications/
26. Ammonia Energy Association — Emission performance of ammonia-fueled
    four-stroke marine engines (N₂O ~20 ppm untreated → 2–10 ppm with catalyst;
    NH₃ slip 10–30 ppm; NYK *Sakigake* 94 % GHG cut at ~95 % NH₃, N₂O ≤1 % of
    CO₂e): https://ammoniaenergy.org/articles/emission-performance-of-ammonia-fueled-four-stroke-marine-engines/ ;
    Pacific Environment / Clean Shipping Coalition, MEPC 83/7/23 — literature
    review of tank-to-wake N₂O from ammonia-fuelled engines:
    https://cleanshipping.org/wp-content/uploads/2025/02/MEPC-83-7-23-Review-of-current-literature-on-tank-to-wake-nitrous-oxide-emissions-fromammonia-fueled-en.-Pacific-Environment-CSC.pdf
27. MDPI Processes (2026) — From Flammability to Toxicity: comparative
    regulatory analysis of safety frameworks for LNG and ammonia as fuels:
    https://www.mdpi.com/2227-9717/14/9/1387
28. EIA — Capital Cost and Performance Characteristics for Utility-Scale
    Electric Power Generating Technologies (AEO2025); CC $921/kW 2023$,
    fixed O&M ~$10–12/kW-yr:
    https://www.eia.gov/analysis/studies/powerplants/capitalcost/pdf/capital_cost_AEO2025.pdf
29. GridLab — The New Reality of Power Generation (2025 gas turbine costs):
    https://gridlab.org/wp-content/uploads/2025/09/GridLab_Gas-Turbine-Costs-Report-1.pdf
30. Thunder Said Energy — reciprocating gas engines, levelized costs:
    https://thundersaidenergy.com/downloads/reciprocating-gas-engines-levelized-costs/
31. Int'l J. Hydrogen Energy (2022, Chalmers) — value of flexible fuel mixing in
    hydrogen-fuelled gas turbines (~+8.5 % GT subsystem premium):
    https://www.sciencedirect.com/science/article/pii/S0360319922030890
32. USPE Global — Gas Turbine EPC Costs 2026 (major overhaul 25,000–35,000 h,
    $4–8 M; combustion inspection ~24,000 h, $1.2–2.5 M) — *US market, NG basis,
    trade source*: https://uspeglobal.com/articles/gas-turbine-epc-costs-2026/
33. SpringerLink — "Demonstration Tests of Ammonia/Natural Gas Co-firing Power
    Generation with a 2-MW-Class Gas Turbine" (IM270 airframe, Yokohama, Oct
    2020; 20 % NH₃ LHV mixing ratio; raw NOx 287 ppm @16 %O₂ at 20 % mixing;
    <7 ppm with NOx-removal device):
    https://link.springer.com/chapter/10.1007/978-981-19-4767-4_35
34. Ammonia Energy Association — Performance of Ammonia-Natural Gas Co-Fired
    Gas Turbine for Power Generation (presentation, corroborating the 2 MW-class
    IM270 co-firing test): https://ammoniaenergy.org/presentations/performance-of-ammonia-natural-gas-co-fired-gas-turbine-for-power-generation/
35. JERA — Jurong Port, Mitsubishi Heavy Industries Asia Pacific and JERA Asia
    MoU to explore a 60 MW-class 100 % ammonia direct-combustion GTCC on Jurong
    Island (Aug 2022): https://www.jera.co.jp/en/news/information/20220819_961 ;
    IFRF — "60MWe ammonia power plant and marine fuel bunkering terminal planned
    for Jurong Port, Singapore": https://ifrf.net/ifrf-blog/60mwe-ammonia-power-plant-and-marine-fuel-bunkering-terminal-planned-for-jurong-port-singapore/
36. Mitsubishi Power — Keppel, MHI and DNV sign agreement to explore adoption of
    an ammonia-fired gas turbine on Jurong Island (Sep 2022, high-level QRA for
    a 100 % NH₃ CCGT): https://power.mhi.com/news/20220927.html ; DNV —
    same announcement: https://www.dnv.com/news/keppel-mhi-and-dnv-sign-agreement-to-explore-adoption-of-ammonia-fired-gas-turbine-on-jurong-island-231948/
37. POWER Magazine — Mitsubishi Power Developing 100 % Ammonia-Capable Gas
    Turbine (2021 announcement, "commercialization around 2025"):
    https://www.powermag.com/mitsubishi-power-developing-100-ammonia-capable-gas-turbine/
38. Mitsubishi Heavy Industries — Mitsubishi Power Successfully Operates an
    Advanced Class Gas Turbine with 30 % Hydrogen Fuel Co-Firing at
    Grid-Connected T-Point 2 (Nov 2023): https://www.mhi.com/news/23113001.html
39. Turbomachinery Magazine — Mitsubishi Power Executes 30 % Hydrogen-Fuel Blend
    in JAC Gas Turbine (context for the later 50 vol % H₂ figure and ~22 % CO₂
    cut at 50 % H₂): https://www.turbomachinerymag.com/view/mitsubishi-power-executes-30-hydrogen-fuel-blend-in-jac-gas-turbine
40. Mitsubishi Heavy Industries — MHI Succeeded Combustion Test of Ammonia
    Single-Fuel Burners (boiler application, 0.5 t/h furnace, Nagasaki, Nov
    2023): https://www.mhi.com/news/23112801.html
41. Power Engineering — Mitsubishi says it successfully tested an ammonia
    single-fuel burner (corroborating boiler-burner test, distinct from GT):
    https://www.power-eng.com/gas/turbines/mitsubishi-says-it-successfully-tested-an-ammonia-single-fuel-burner/

---

*Rev 1, 2026-07-28 (§2 MHI cross-check added same day). Every quantitative cell
is sourced, a shown calculation, or marked **[not published]**. NH₃-specific
efficiency premia, CAPEX premia and stationary-genset availability remain
genuinely unpublished — flagged, not invented (CLAUDE.md §7).*
