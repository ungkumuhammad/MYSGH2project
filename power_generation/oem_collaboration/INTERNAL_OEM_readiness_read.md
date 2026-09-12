# INTERNAL — Three-OEM ammonia engine readiness read

> **🔒 Internal only. Do not circulate to any OEM.** Sourced from vendor decks
> supplied in confidence (see `README.md` § Confidentiality constraint). Held
> here so the outgoing proposal could be written *without* it.
> **Date:** 2026-09-12. **Basis:** the three decks in
> `../oem_surveys/gas_engine_oem_datasheets/`, cross-read against the repo's
> prior position.

---

## 1. Why the user's "not ready until 2029" read holds

Every quoted readiness date across the three decks is for a **marine** engine,
a **Japanese/European domestic** land unit, or a **commercial-sales-available**
date — none is a data-centre-grade stationary reference plant in the tropics
under a Malaysian or Singaporean permit with an audited carbon claim. The
gap is not combustion; it is stationary duty, consent and assurance. On that
framing 2029 is the right planning assumption even where an OEM quotes 2027.

## 2. What each deck actually claims

### Wärtsilä — W25 Ammonia (deck to MISC, 1 Sep 2026)

| Item | Claim |
|------|-------|
| Concept | Low-pressure **Otto**, ~5 % pilot. Chose Otto over Diesel cycle explicitly — safety (lower pressures), ~3 %-pt efficiency penalty avoided on the HP pump, less knock/misfire sensitivity than LNG DF |
| Output | 315/345 kW/cyl (up from 280/305), 6L–9L, 1 890–3 105 kWm; system slide quotes **1.9–3.1 MW** |
| Efficiency | **~47 %** (chart annotation says 46.7 %) |
| NH₃ energy share | **~95 %** across a wide load range |
| GHG | **>90 % TtW** reduction vs LFO diesel. Residual is *pilot fuel + N₂O formed in combustion* — stated plainly in the deck |
| Certification | **EIAPP and Type Approval performed**; AiP DNV 2023, BV 2024 |
| TBO | up to 32 000 h; **24 000 h on ammonia** |
| Scope | Engine + AmmoniaPac FGSS + WARMS release mitigation + NOx Reducer (SCR needed for Tier III) |
| Orders | **4 vessels contracted** as at 1 Apr 2026 — Eidesvik *Viking Energy* PSV conversion (9L25, commissioning end 2026), Skarv bulk carrier (6L25 genset as main engine, engine delivery Q4/26, vessel Q3/27), 2× Navigator gas carriers (8L25 aux, engine deliveries May & Sep 2027) |
| Dev history | 2020 NH₃ fuel lab → 2021 6L32 research → 2022 1L25DF lab → 2023 6L34DF research engine → **2025 first W25DF NH₃ customer delivery** |

**Read:** most commercially advanced of the three on ammonia, but entirely
marine. No stationary product. Wärtsilä still markets **34SG on natural gas**
for data centres (repo ref).

> **Closes an open question.** `memory.md` §5 carried "W25 Ammonia first
> delivery: 2026 or 2028?" unresolved. This deck's own development timeline
> puts **first customer delivery in 2025**, with 4 vessels contracted by
> Apr 2026 and engine deliveries through 2027 — so the "2028" reading in the
> repo was wrong for *first delivery*. Still OEM-deck-sourced, not a public
> release; treat as resolved-pending-confirmation.

### HD Hyundai — HiMSEN (undated deck)

| Item | Claim |
|------|-------|
| Concept | **Diesel cycle** — high-pressure liquid injection. Directly opposite to Wärtsilä's choice |
| Claimed advantage | No output de-rating; higher efficiency; **low N₂O**; low NH₃ slip. Concedes **relatively high NOx, handled by SCR** |
| N₂O framing | Deck itself flags N₂O at **GWP 298 / 100 yr** as "one of the most potent greenhouse gases" — they are selling on this |
| Models | H32DF-LM (320×400, 720 rpm, 500 kW/cyl, **3.0–4.5 MW**); H32CDF-LA (320×450, 600 kW/cyl, **3.6–5.4 MW**); H22CDF-LM/LA (220×330, 900 rpm, 240 kW/cyl, **1.4–2.2 MW**) |
| Certification | **H22CDF-LA type approval test 30 Sep–2 Oct 2024**; **H32CDF-LA 29 Sep–2 Oct 2025**. Classes: ABS, BV, DNV, KR, LR, NK, RINA |
| Fuel basis | NH₃ LCV 18 600 kJ/kg; pilot on MDO 42 700 kJ/kg |

**Read:** thinnest deck of the three, no land-use content at all, no
commercialisation dates, no GHG balance. The **Diesel-vs-Otto split against
Wärtsilä is the single most interesting technical fork** in the shortlist —
if HiMSEN's low-N₂O claim survives measurement it is commercially decisive
for a hyperscaler. It is exactly why T3 in the proposal demands *metered*
N₂O rather than a claim.

### IHI (deck to Gentari, 27 Aug 2026)

| Item | Claim |
|------|-------|
| **Land-use engine** | **28ADF series for land use**: 280×390, 750 rpm (50 Hz) / 720 (60 Hz), 6L–18V, **2 000–6 000 kWe** (50 Hz). Gen efficiency 96.0–97.0 %. BMEP 21.5–23.1 bar. Fuel MDO/ammonia. Air-motor + diesel start |
| **Stationary demo running** | **18V28ADF, 6 MW-class, land-based power plant demo at IPS Ota Works, Gunma — commenced 15 Jul 2026.** Verifying safety and operability of the *complete* generation system incl. auxiliaries. Demo completes JFY2026; **commercial sales from JFY2027** |
| 100 % NH₃ engine | **28AGS-AM** land-use 100 % ammonia engine — commercialisation **from 2028** (elsewhere in same deck: "AGX… 2028–2029") |
| Marine | 6L28ADF: ClassNK type approval + EIAPP **Apr 2024**; 95 % max co-firing; >90 % GHG cut. Tugboat *Sakigake* completed **23 Aug 2024** — world's first commercial ammonia-fuelled vessel |
| Roadmap | Recip engine 2–6 MW: marine 2027~, **land use 2027 & 2028~**. GT 2 MW:2026 → 400 MW:2030 |
| Plant layouts | 6L28ADF ×1 (2 MW): **35 × 15 m**. 18V28ADF ×1 (6 MW): **40 × 15 m**. NH₃ storage 100 kL ×2 (40 t/unit): 31×15 m or 19 m option |
| Engine dims | 6L 4450×2200×3525 / 24 t … 18V 7000×2850×3370 / 52 t (*deck notes these are referenced from the 28AHX diesel, i.e. indicative*) |
| Malaysia presence | IHI Malaysia Base; Niigata Power Systems (Singapore); IHI Asia Pacific (Singapore). 27 gas-engine units supplied Malaysia |
| GT alternative | IM270 2 MW, 100 % liquid NH₃ since Jun 2022, >99 % GHG cut, **long-term durability tests completed at Aioi by end Mar 2026**; ready for commercialisation **from 2026**. IHI+GE Vernova 100 % NH₃ **F-class full-scale combustion milestone Mar 2026**, 6F.03/7F/9F target 2030 |
| **Malaysian precedent** | **JCDA signed 10 Apr 2026 with PETRONAS (PCG) and Gentari** — IM270 fully on ammonia at PCG's Kertih complex, Terengganu. METI-supported (AZEC / Global South Future-Oriented Co-Creation). Demo start **FY2027**. Potentially world's first fully ammonia-powered GT in a commercial plant |

**Read:** **the only one of the three with a stationary ammonia genset
programme that is actually running**, and the only one with an existing
Malaysian institutional relationship (PETRONAS/Gentari) and a Japanese
government funding channel. Also the only one that can offer engine *and*
turbine, and cogeneration (HRSG) — relevant if the data centre wants cooling.

## 3. Corrections this forces on the repo

| Repo statement | Correction |
|----------------|------------|
| `NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md` A4: *"no stationary ammonia genset in service"*, engines *"TRL 5–6 stationary"* | **Out of date as of Jul 2026.** IHI has a 6 MW-class land-based ammonia genset in demonstration at Ota Works with commercial sales targeted JFY2027. Stationary engine TRL should move up |
| Same doc A6: engine stationary availability *"≥2028 and marine-first"* | IHI quotes **JFY2027** for 28ADF land use and **2028** for the 100 % NH₃ 28AGS-AM. Still not a tropical/data-centre reference, so the user's 2029 planning date stands |
| `memory.md` §5 open question: W25 Ammonia first delivery 2026 or 2028 | Wärtsilä's own deck timeline says **first customer delivery 2025**; 4 vessels contracted by Apr 2026 |
| `50MW_datacenter_NH3_engine_vs_CCGT_matrix.md` row 2: *"W25 A marine, deliveries 2028"* | Same correction |

**None of these change the engine-vs-turbine recommendation** in the
comprehensive comparison — they narrow the gap on the engine side (IHI's
stationary demo) while IHI simultaneously strengthens the turbine side
(IM270 durability complete, F-class milestone). Left unrevised pending a
deliberate Rev 2 of that document.

## 4. Unresolved — and why the proposal asks for it

| Not published by any of the three | Proposal item that demands it |
|-----------------------------------|-------------------------------|
| Any N₂O figure in g/kWh or ppm, measured, on a land engine | T3 / B3 |
| A complete g CO₂e/kWh balance incl. pilot carbon | T2, T3 / B5 |
| Transient / step-load class in ammonia mode | T5 / C1 |
| Tropical-ambient derating for land duty | T1 / A5 |
| TBO on ammonia at *continuous* land duty (Wärtsilä's 24 000 h is marine) | T7 / C3 |
| NH₃ CAPEX premium over the NG/DF twin | C3 of the commercial register |
| Land-use code/consent map for Malaysia or Singapore | T9 |
