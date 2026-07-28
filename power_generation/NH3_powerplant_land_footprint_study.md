# Ammonia Power Block: Land Footprint per MW, by Technology

> **Question:** For a P2 (direct ammonia-firing) power block at the Singapore
> offtake side, how much **land / plot area** does each candidate technology
> — gas turbine (open or combined cycle) vs. reciprocating gas engine vs. the
> MHI H-25 — need, per installed MW, so a required capacity and a sparing
> philosophy can be turned into a first-pass site-area figure?
> **Companion to:** `NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md`
> (Rev 1) — this study fills in, with numbers, what that document's row **E5
> "Footprint per MW"** left qualitative ("smaller for the GT itself… but CCGT
> adds HRSG + steam island"; "larger — many units + balance-of-plant").
> **Date:** 2026-07-28. **No-Fabrication Rule (CLAUDE.md §7):** every figure
> below is sourced, a labelled derivation from a sourced figure, or flagged
> **[not published]**.

---

## 1. Why this is harder than it looks

No OEM (IHI, Wärtsilä, Mitsubishi Power) publishes a plot-plan area for its
ammonia-firing product. Two other complications:

1. **"Land use" is reported at wildly different scopes in the literature.**
   The oft-cited "~12 acres/MW for natural gas" figure (Strata, 2017, *The
   Footprint of Energy: Land Use of U.S. Electricity Production*) is a
   **cradle-to-grave** number — it bundles gas-field well pads, gathering
   lines and pipeline right-of-way with the plant itself. That is the wrong
   number for sizing a plot at MMHE or in Singapore, where the fuel arrives
   by ship as ammonia, not by pipeline as gas. This study uses **plant-site-only**
   figures and explicitly discards the cradle-to-grave number for sizing
   purposes.
2. **All public figures are on a natural-gas basis**, like every CAPEX/OPEX
   row in the companion comparison (its §1 row F1 anchor). None of it
   accounts for ammonia's **toxicity-driven safety envelope** (companion
   doc §1 row E6/E7): gas-detection perimeters, release-mitigation
   cofferdams, and separation distances from occupied spaces. **Real ammonia
   plant plot sizes are expected to exceed the NG-basis figures below** —
   this study does not attempt to quantify that increment; treat the figures
   here as a **floor**, not a design figure.

---

## 2. Plant-site footprint, by technology

| Technology | Land intensity (plant site only) | Basis | Source |
|---|---|---|---|
| **Gas turbine, combined cycle** (frame-style, ~360 MW class) | **0.111–0.139 acres/MW** (≈450–563 m²/MW) — *40–50 acres operations for a 360 MW plant* | Real project filing, plant-site only (excludes ~10–20 additional acres used only during construction) | [1] |
| **Gas turbine, open/simple cycle** | Same figure applied as an **order-of-magnitude proxy** (no simple-cycle-specific site-area source located) | Assumption — no HRSG/steam island but also less installed MW per fixed balance-of-plant item; net effect on acres/MW is not established in the literature found | flagged assumption |
| **MHI H-25 (both cycles)** | Same **gas-turbine** figure applied — a 40–120 MW-class GT/GTCC plant is not expected to differ in kind from the 360 MW anchor at this order-of-magnitude | Assumption — no H-25-specific plot-plan located | flagged assumption |
| **Reciprocating gas engine plant** | **Derived: 0.33–0.56 acres/MW** (≈1,335–2,270 m²/MW) = GT figure × **3–4×** | *Shown calculation*: Power Engineering states combustion turbine systems use "**approximately one-third to one-quarter**" of the area of an equivalent reciprocating engine plant — i.e. the engine needs **3–4× the GT's acres/MW**. Applied to the GT figure in row 1 | [1] × ratio [2] |

**Component-level reference points** (not plant totals — included only for
scale sanity-checking):

| Item | Footprint | Source |
|---|---|---|
| Mitsubishi H-25(42) bare turbine package envelope | ≈8 m × 4 m × 4 m (≈32 m² footprint), ≈55 t | secondary spec aggregator, not an OEM datasheet — lower confidence [3] |
| IHI IM270 (2 MW-class) package footprint | **[not published]** — no dimensions located in this session | — |

---

## 3. Sparing / redundancy philosophy (generic engineering definitions)

These are standard power-plant/critical-infrastructure design concepts, not
project-specific data — no citation needed beyond the general engineering
convention:

| Philosophy | Meaning | Installed units |
|---|---|---|
| **N** | No spare — install exactly the duty capacity | duty units only |
| **N+1** | One spare unit beyond duty — a single unit outage does not cut firm capacity | duty units + 1 |
| **N+2** | Two spares — tolerates two simultaneous outages (one down for maintenance, one trips) | duty units + 2 |
| **2N** | Fully duplicated capacity — common in mission-critical (data-centre-grade) design | duty units × 2 |

Duty units = ⌈required MW ÷ unit size⌉, where unit size is technology-specific
(the IM270 is a 2 MW/unit modular machine; the Wärtsilä 25 Ammonia is
1.9–3.1 MW/unit; the H-25 is a single ~41 MW (SC) or ~60 MW (CC) train — for
the H-25, "sparing" means whole additional trains, not smaller sub-units).

---

## 4. Worked example (illustrative, not a design figure)

*Shown calculation. 50 MWe required, N+1 sparing, gas turbine (IHI IM270,
2 MW/unit):*

- Duty units = ⌈50 ÷ 2⌉ = 25
- Installed units (N+1) = 26
- Installed capacity = 52 MW
- Land area = 52 MW × 0.111–0.139 acres/MW = **5.8–7.2 acres** (≈2.3–2.9 ha)

The same 50 MW at N+1 on the reciprocating engine (3.1 MW/unit):

- Duty units = ⌈50 ÷ 3.1⌉ = 17
- Installed units (N+1) = 18
- Installed capacity = 55.8 MW
- Land area = 55.8 MW × 0.33–0.56 acres/MW = **18.4–31.2 acres** (≈7.5–12.6 ha)

---

## 5. Limitations (read before using this for anything but order-of-magnitude sizing)

- Every acres/MW figure here is **NG-basis**, like the rest of the companion
  comparison's CAPEX/OPEX anchors — no ammonia-specific plot-plan exists.
- The engine figure is **derived from a ratio claim, not a named project** —
  treat the 3–4× multiplier as indicative, not precise.
- **Ammonia's toxicity safety envelope is not included** — expect the true
  ammonia plot size to sit above these numbers, potentially materially so,
  once gas-detection perimeters and release-mitigation setbacks are added.
- Tropical-site-specific factors (drainage, buffer strips, monsoon retention)
  are not included.
- **Recommend confirming with an OEM/EPC plot plan before using in an
  investment-grade estimate** (same caveat as the companion doc's CAPEX
  premium gaps, §1 row F2).

---

## 6. Sources

1. UAMPS — filing describing a proposed 360 MW frame-style combined-cycle gas
   power plant, stating 40–50 acres for plant operations plus an additional
   10–20 acres used only during construction:
   https://www.uamps.com/File/e77e1c58-a91a-46d6-8af0-c1d1b0afec40
2. Power Engineering — "Turbines vs. Reciprocating Engines": combustion
   turbine systems use approximately one-third to one-quarter of the area
   needed for equivalent reciprocating internal combustion engine generation:
   https://www.power-eng.com/gas/turbines/turbines-vs-reciprocating-engines/
3. Secondary OEM-spec aggregator — Mitsubishi H-25 series weights/envelope
   dimensions (H-25(42): ≈55 t, ≈8×4×4 m) — not a primary Mitsubishi Power
   datasheet, lower-confidence reference only:
   https://www.chnscs.com/manual/Mitsubishi-H-25.html

*Context only, explicitly excluded from the sizing table above*: Strata
(2017), *The Footprint of Energy: Land Use of U.S. Electricity Production* —
cradle-to-grave natural gas land use ≈12.4 acres/MW (includes upstream gas
field, gathering and pipeline right-of-way, not applicable to a
ship-delivered-ammonia plant):
https://docs.wind-watch.org/US-footprints-Strata-2017.pdf

---

*This study fills the quantitative gap in
`NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md` §1 row E5. Every
figure is sourced, a shown derivation, or flagged **[not published]/assumption**
(CLAUDE.md §7).*
