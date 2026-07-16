# Scoring Weightage Matrix — NH₃ Reciprocating Engine vs. NH₃ Gas Turbine (CCGT)

> Applies the reusable framework in
> [`Scoring_Weightage_Matrix_Template.md`](./Scoring_Weightage_Matrix_Template.md)
> to the two 100 %-ammonia power-block options already compared axis-by-axis in
> [`../power_generation/50MW_datacenter_NH3_engine_vs_CCGT_matrix.md`](../power_generation/50MW_datacenter_NH3_engine_vs_CCGT_matrix.md).
>
> **Purpose:** turn that qualitative comparison into a single **defensible,
> weighted score** so the two options can be ranked for the project use-case.
>
> **Use-case (unchanged from the source matrix):** a **50 MW firm "clean" power
> block on 100 % green ammonia** for a data center whose **total** demand is
> larger than 50 MW, with the **grid temporarily topping up** the balance until
> ammonia is cheap enough to carry 100 % of the load. The block must therefore
> be able to **grow its clean share incrementally** and behave well while the
> grid share shrinks.
>
> **Date:** 2026-07-16. **Weights set by:** Claude (project agent), for review by
> the project owner — weights are a judgement call (template §7) and should be
> re-set if the buyer's priorities differ.
>
> **No-Fabrication Rule (CLAUDE.md §7):** the 1–5 scores below are **judgements
> derived from the sourced axes** in the source matrix and the recent-study
> evidence in §5 — not invented measurements. Where an underlying NH₃-specific
> number is *not published* (e.g. NH₃ CAPEX premium), that uncertainty is carried
> into the score **and** the criterion's confidence, not papered over.

---

## 1. Options being scored

| ID | Option | What "50 MW" physically is |
|----|--------|-----------------------------|
| **A** | **NH₃ reciprocating engine plant** | ~16–26 modular medium-speed units (Wärtsilä 25 Ammonia class, 1.9–3.1 MW each), simple-cycle |
| **B** | **NH₃ gas turbine, CCGT config** | ~1 train: a ~40 MW-class ammonia gas turbine (Mitsubishi H-25 class) + HRSG + steam turbine → ~50–60 MW as 1×1 combined cycle |

Both are **pre-commercial on 100 % NH₃ today** — the scoring ranks *relative*
fitness for the use-case, not absolute readiness.

---

## 2. Criteria, weights & rubric

Seven distinct criteria, all phrased so **higher = better** (cost and emissions
are inverted per template §7). Scale = **1–5**. Weights sum to 100 %.

| # | Criterion | Weight | Score **1** (low) | Score **5** (high) |
|---|-----------|-------:|-------------------|--------------------|
| C1 | **Modularity, phased scale-up & redundancy** — can the clean block grow unit-by-unit and survive a single failure (DC-critical)? | **20** | Coarse single train; one trip = 100 % loss; next increment is a whole block | Intrinsic N+1; add capacity in small steps; one unit down ≈ few-% loss |
| C2 | **Maturity on 100 % NH₃** — demonstrated hardware at a relevant unit scale, credible near-term delivery | **20** | Concept/feasibility only, target dates slipping | Full-scale hardware run + firm delivery date at relevant scale |
| C3 | **Part-load & operational flexibility** — part-load efficiency, ramp rate, black-start, load-following as grid share shrinks | **18** | Poor part-load, slow start, no black-start | Flat part-load, fast start, black-start, follows load well |
| C4 | **Peak efficiency (LHV, rated)** — fuel-cost driver; ammonia is an expensive fuel | **15** | ≤45 % | ≥55 % |
| C5 | **Emissions manageability on NH₃** — NOₓ, **N₂O** (potent GHG), NH₃ slip controllable to spec with proven after-treatment | **12** | High raw NOₓ/N₂O/slip, control unproven | Low raw + proven after-treatment to a clean spec |
| C6 | **CAPEX / cost basis ($/kW)** — installed cost incl. NH₃ premium *(inverted: cheaper = higher)* | **10** | High and/or highly uncertain | Low and well-anchored |
| C7 | **Resource footprint** — water + land, weighted toward **water** (tropical, DC-sited) | **5** | Water-hungry **and** land-hungry | Near-zero water, compact |
| | **Total** | **100** | | |

**Why these weights (recorded for review):** the use-case is a *firm,
DC-critical, incrementally-growing* clean block bridged by the grid — so
**redundancy/phased growth (C1)** and **near-term deliverability (C2)** carry the
most weight, followed by **operational flexibility (C3)** because the block must
load-follow while the grid share shrinks. **Peak efficiency (C4)** matters (NH₃
fuel is costly) but ranks below reliability/flexibility for a *firm* block.
**Emissions (C5)** is a real gate but both routes converge on SCR + N₂O
after-treatment. **CAPEX (C6)** is held to 10 % *because the NH₃ premium is
unsourced for both* — a low-confidence axis should not dominate. **Footprint
(C7)** is real but rarely decisive at this scale.

---

## 3. Scoring grid (raw 1–5)

Each cell is scored against the C1–C7 rubric only, using the sourced axes of the
source matrix and the recent literature in §5.

| Option | C1 Modular/redund. (20 %) | C2 Maturity (20 %) | C3 Part-load/flex (18 %) | C4 Peak eff. (15 %) | C5 Emissions (12 %) | C6 CAPEX (10 %) | C7 Footprint (5 %) |
|--------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **A — NH₃ engine** | **5** | **3** | **5** | **4** | **3** | **3** | **4** |
| **B — NH₃ turbine (CCGT)** | **2** | **2** | **2** | **5** | **4** | **3** | **3** |

**Score rationale (one line each):**

- **C1** — A: intrinsic N+1 across ~20 units, grid share shrinks unit-by-unit → **5**. B: single ~50 MW train, one trip = full loss → **2**.
- **C2** — A: full-scale ammonia engine has **run at 100 % load** (MAN, Jan 2025) and Wärtsilä 25 A has **firm 2028 deliveries** + an Apr-2026 power upgrade → **3**. B: MHI 40 MW-class targeted ~2025 but **slipped, still feasibility/demo** → **2**. (Both weak; neither buyable at 50 MW/100 % NH₃ today.)
- **C3** — A: engine pulse part-load **>46 %**, ~2 min to full load, black-start → **5**. B: aeroderivative/CCGT part-load **<36 %**, slow HRSG/steam warm-up → **2**.
- **C4** — B: NH₃ CCGT ~**50–51 %** (H-25 SC ≈34.8 % + steam bottoming), and NG combined-cycle literature reaches 55–60 % → **5**. A: engine SC **≈46–49 %** (engine-CC "Flexicycle" >54 % on NG but adds a steam island) → **4**.
- **C5** — Both need SCR + a **dedicated N₂O catalyst**; literature notes engines emit **more raw NOₓ**, while dual-function SCR on turbines is demonstrated **<2.5 ppm NOₓ, ~zero slip** → B **4**, A **3**. (Manageable on both with after-treatment.)
- **C6** — NH₃ CAPEX premium **not published for either**; NG anchors (RICE ≈$1,250–1,500/kW; CCGT $921/kW EIA → ~$2,000/kW recent actuals) roughly converge → tie at **3** each, **low confidence**.
- **C7** — A: near-zero water (**<5 L/h**) but larger land/MW; B: compact but **~780 L/MWh** water. Weighting water (tropical, DC) tips it to A **4**, B **3**.

---

## 4. Weighted result

Weighted score = Σ (raw × weight); weights as decimals. Because weights sum to
100 %, results stay on the **1–5 scale**.

| Option | Calculation | **Weighted score** | Rank |
|--------|-------------|:------------------:|:----:|
| **A — NH₃ engine** | (5×.20)+(3×.20)+(5×.18)+(4×.15)+(3×.12)+(3×.10)+(4×.05) | **3.96** | **1** |
| **B — NH₃ turbine (CCGT)** | (2×.20)+(2×.20)+(2×.18)+(5×.15)+(4×.12)+(3×.10)+(3×.05) | **2.84** | 2 |

**The engine plant leads 3.96 vs 2.84 (out of 5)** for this use-case — a clear,
not marginal, gap. It wins because it takes the three highest-weighted
operational/reliability criteria (C1, C3, and effectively C2); the turbine's real
strengths (peak efficiency C4, and half of footprint C7) sit on lighter weights.

---

## 5. Recent-study evidence behind the scores (2024–2026)

- **MDPI *Energies* 2025, "Ammonia Combustion: Internal Combustion Engines and
  Gas Turbines"** — recent review covering *both* technologies: confirms the
  shared NH₃ combustion challenges (high ignition energy, narrow flammability,
  slow flame speed, NOₓ/N₂O trade-off, slip significant at low temperature,
  dropping sharply above ~950 °C); reports a ~10 % NG-blend optimum lifting
  engine thermal efficiency to **50.8 %**. (C3, C4, C5.)
- **Ammonia-fired gas turbine reviews (ScienceDirect 2024; ASME J. Eng. Gas
  Turbines Power 2026)** — SC GT ~35–40 % LHV, combined cycle **55–60 %**; ~2 MW
  GT on NH₃ blends ~**250 ppm NOₓ raw → ~5 ppm with SCR**; IHI/Mitsubishi
  40 MW-class commercialization targeted 2025. (C4, C5, C2.)
- **Wärtsilä 25 Ammonia** — Apr-2026 power upgrade to 315–345 kW/cyl (parity with
  the 25DF LNG engine); testing shows up to **90 % GHG cut** at 95 % NH₃ energy
  share; firm deliveries **2028**. (C2, C5.)
- **MAN Energy Solutions** — full-scale ammonia engine **ran at 100 % load**
  (Jan 2025); "NH3-Spark / FutureFlex" genset targets **pilot-free** operation,
  single-cylinder testing from Q3 2025. (C2.)
- **Wärtsilä engines-vs-aeroderivatives** — engine part-load pulse **>46 %** vs
  aeroderivative **<36 %**; engine SC water **<5 L/h** vs CCGT **~780 L/MWh**;
  GT concedes engine modularity, engine concedes GT footprint/MW. (C1, C3, C7.)
- **EIA AEO2025 / GridLab / Thunder Said Energy** — NG cost anchors: RICE
  ≈$1,250–1,500/kW; NG CCGT $921/kW (2023$) → $1,116–1,427/kW (2026–27) →
  ~$2,000/kW recent actuals. **NH₃ premium unsourced for both.** (C6.)

Full citations are in the source matrix (`../power_generation/…`) and
`memory.md` §6/§7.

---

## 6. Sensitivity check (template §7)

The ranking is **robust**. Re-running as an *efficiency-first buyer* — double C4
to **30 %** and drop C1 to **5 %** (the change most favourable to the turbine):

| Option | Weighted score (efficiency-first weights) | Rank |
|--------|:-----------------------------------------:|:----:|
| **A — NH₃ engine** | **3.81** | **1** |
| **B — NH₃ turbine (CCGT)** | **3.29** | 2 |

The engine still leads. The turbine only closes the gap if a buyer
simultaneously (a) prizes peak efficiency and footprint above reliability, **and**
(b) discounts phased-growth/redundancy — i.e. a *single large firm block*, not
the *grow-the-clean-share* case defined here. Two further levers would tighten it
further in the turbine's favour and should be flagged: allowing an engine
**combined-cycle (Flexicycle, >54 %)** erases the engine's C4 deficit (helping A,
not B), while a genuine large **~55 %+ 100 %-NH₃ turbine** — which does not exist
yet — would raise B's C2 and C4 together.

---

## 7. Provisional recommendation

For the defined use-case — a **firm 50 MW clean block that must grow from a
partial to a 100 % ammonia share while the grid bridges the gap** — the
**reciprocating ammonia engine plant (Option A) scores higher (3.96 vs 2.84)**
and is the better fit: modular **N+1**, flat part-load, fast/black-start, near-zero
water, and incremental scale-up. The **NH₃ CCGT** remains the choice where **peak
efficiency and land footprint dominate** and a single coarse train is acceptable.

**Caveat (No-Fabrication Rule):** both options are **pre-commercial at 50 MW on
100 % NH₃**, and the **NH₃ CAPEX premium is unpublished for both** (C6 held to
10 % and scored as a low-confidence tie for exactly this reason). This matrix
ranks *relative fitness*; it does not assert either product is buyable today.
Close the C2/C6 gaps with OEM/EPC engagement before any investment-grade use.

---

*Weighted scoring built from the sourced axes of
`../power_generation/50MW_datacenter_NH3_engine_vs_CCGT_matrix.md` and the
2024–2026 studies in §5, using the method in
`Scoring_Weightage_Matrix_Template.md`. Scores are judgements over sourced
evidence; unpublished NH₃-specific values are flagged, not invented.*
