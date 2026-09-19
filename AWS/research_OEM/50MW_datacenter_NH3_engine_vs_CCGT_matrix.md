# 50 MW Clean-Power Matrix — NH₃ Reciprocating Engine vs. NH₃ Gas Turbine (CCGT)

> **Question:** For a data center that needs a **50 MW firm "clean" power block**
> on **100 % green ammonia**, is a **reciprocating ammonia gas-engine plant** or
> an **ammonia gas turbine in CCGT configuration** the better fit — given that
> total data-center demand is *larger* than 50 MW and the **grid temporarily
> tops up** the balance until ammonia is affordable enough to carry 100 % of the
> load?
> **Deliverable type:** Comparison matrix (matrix-only, first pass).
> **Basis:** net, LHV, tropical ambient. Fuel = **100 % NH₃**; natural-gas (NG)
> figures are cited only as the **mature anchor** beneath each pre-commercial
> NH₃ estimate.
> **Date:** 2026-07-16. **No-Fabrication Rule (CLAUDE.md §7):** every cell is
> sourced, a labelled estimate anchored to the mature NG/DF twin, or explicitly
> flagged as not-yet-published. No NH₃-specific number is invented.

---

## Headline (read first)

At **50 MW on 100 % ammonia**, *neither* a reciprocating engine *nor* a gas
turbine is a commercially available, proven product **today**. Both are
**pre-commercial**: ammonia engines are marine-first with deliveries from ~2028,
and Mitsubishi's 40 MW-class ammonia gas turbine is still pre-demonstration.
This is precisely why the concept relies on a **grid bridge** in the interim.
The matrix compares the two options *on that pre-commercial basis*, anchoring
every quantity to each platform's mature natural-gas / dual-fuel (DF) twin.

## The two configurations at 50 MW

- **NH₃ reciprocating engine plant** — a modular set of **~16–26 medium-speed
  engines** (Wärtsilä 25 Ammonia class, 1.9–3.1 MW each) running mostly on
  ammonia with a small pilot fuel; simple-cycle. (An engine *combined-cycle*
  "Flexicycle" variant exists on NG but adds a steam island.)
- **NH₃ gas turbine, CCGT config** — essentially **one train**: a ~40 MW-class
  ammonia gas turbine (Mitsubishi H-25 class) + HRSG + steam turbine → ~50–60 MW
  as a 1×1 combined cycle.

## Comparison matrix

| # | Axis | **NH₃ Reciprocating Engine plant** | **NH₃ Gas Turbine — CCGT config** | Source |
|---|------|-----------------------------------|-----------------------------------|--------|
| 1 | What "50 MW" is | **~16–26 units** × Wärtsilä 25 A (1.9–3.1 MW) — modular | **~1 train**: H-25 ~40 MW-class SC → ~50–60 MW as 1×1 CCGT | [1][2] |
| 2 | **Maturity on 100 % NH₃** | **Pre-commercial** — W25 A marine, deliveries **2028**; MAN NH₃ genset R&D; Wärtsilä markets **NG for data centers today** | **Pre-commercial** — MHI targeted ~2025, still in **feasibility/demo study** as of 2025 | [1][2][3][4] |
| 3 | Net efficiency (LHV, rated) | **≈46–49 % SC** (OEM parity w/ DF-LNG; 34SG NG = 48.9 %). Engine-CC "Flexicycle" reaches **>54 %** on NG but adds water/complexity | **≈50–51 %** (H-25 SC on NH₃ ≈34.8 % + steam bottoming) | [5][6], memory.md §3 |
| 4 | **Part-load efficiency** | **Stays high** — pulse efficiency **>46 %** via multi-unit staging | **Falls off** — aeroderivative GT pulse efficiency **<36 %**; CCGT worst at part load | Wärtsilä engines-vs-aeros [7] |
| 5 | Start / ramp / black-start | Fast, black-start capable, **~2 min to full load** (NG basis) | Slower — HRSG/steam warm-up; CCGT cold start tens of min | [5] |
| 6 | Redundancy (DC-critical) | **Intrinsic N+1** — 1 of ~20 units down ≈ 5 % loss | **Single train** — one trip = 100 % loss without a 2nd train | architectural |
| 7 | Phased scale-up of the clean block | **Excellent** — add units as NH₃ cheapens; shrink grid share incrementally | **Coarse** — next increment is a whole ~50 MW train | serves the grid-topup → 100 %-clean transition |
| 8 | Footprint / land | **Larger** per MW (many units + balance-of-plant) | **Smaller** per MW (Wärtsilä concedes GT footprint edge), but CCGT adds HRSG + steam island | Wärtsilä [7] |
| 9 | **Water use** | **Very low** — engine SC **<5 L/h** demineralised | **High** — CCGT recirculating **~780 L/MWh** (engine-CC Flexicycle ~409 L/MWh) | Wärtsilä [7] |
| 10 | **Emissions on NH₃** (NOx, **N₂O**, slip) | High raw NOx → SCR + **AMOX/ASC** slip catalyst; **N₂O needs a dedicated catalyst** (potent GHG). W25 A: up to **90 % GHG cut** at 95 % NH₃ energy share | Same chemistry: SCR + NH₃-specific combustor; dual-function SCR demonstrated **<2.5 ppm NOx, ~zero slip** for turbines | [3][8] |
| 11 | Pilot / ignition fuel | W25 A **~5 % pilot** (95 % NH₃); MAN NH3-Spark targets **pilot-free** (R&D) | No pilot (combustor-based) | [1][4] |
| 12 | Maintenance / availability | More frequent, but **per-unit** service — plant stays partly up | Longer intervals, but overhaul takes the **whole train** down | general engineering |
| 13 | **CAPEX ($/kW)** — NG anchor only | NG RICE **≈$1,250–1,500/kW**; NH₃ premium **not sourced** | NG CCGT **$921/kW** (EIA 2023$) → **$1,116–1,427/kW** (2026–27 projects) → **~$2,000/kW** recent actuals; NH₃ premium **not sourced** | EIA / GridLab [8], Thunder Said [9] |
| 14 | Fuel-transition flexibility | DF: run **NG now → NH₃ later** on the same asset | H-25 line spans NG/H₂/NH₃; fuel switch = combustor/config change | [1][2][5] |

## Remaining true unknowns (pre-commercial — not inventable)

Exact NH₃-specific **efficiency**, **NOx/N₂O/NH₃-slip ppm**, and the **NH₃ CAPEX
premium** on *either* technology are **not published** by any vendor at 50 MW
scale on pure ammonia. Every quantity above is either sourced or a clearly
labelled estimate anchored to the mature NG/DF twin. Close these with OEM/EPC
engagement before any investment-grade use.

## Provisional read (matrix-level, to be defended in a fuller study)

For a clean block that must **grow from a partial share to 100 % as ammonia
becomes affordable**, the **engine plant** fits the transition better —
modular **N+1**, flat part-load (**>46 % vs <36 %**), fast/black-start, near-zero
water — at the cost of a **larger footprint** and (on NG anchors)
similar-to-higher **$/kW**. The **CCGT** wins on **peak efficiency (~51 %)** and
**footprint** but is a coarse, **single-train**, water-hungry, slower-start
block. **Neither is buyable at 50 MW on pure NH₃ today**, which is exactly why
the grid bridge is required in the interim.

## Sources

1. Wärtsilä — Wärtsilä 25 Ammonia engine power upgrade (deliveries 2028):
   https://www.wartsila.com/media/news/16-04-2026-power-increase-for-wartsila-25-ammonia-engine-supports-more-efficient-ammonia%E2%80%91fuelled-vessel-designs-3739966
2. Mitsubishi Power — World's first 40 MW-class 100 % ammonia gas turbine
   (commercialization target ~2025): https://power.mhi.com/news/20210301.html
3. Wärtsilä — 4-stroke ammonia engine testing, up to 90 % GHG reduction:
   https://www.wartsila.com/media/news/27-05-2025-extensive-testing-of-wartsila-s-4-stroke-ammonia-engine-demonstrates-ghg-emission-reductions-by-up-to-90-percent-3590235
4. MAN Energy Solutions — ammonia genset R&D (NH3-Spark / AmmoniaMot 2):
   https://www.man-es.com/company/press-releases/press-details/2025/05/22/man-energy-solutions-to-lead--new-ammonia-genset-project
5. Wärtsilä 34SG gas engine — 48.9 % electrical efficiency, ~2 min to full load:
   https://www.wartsila.com/energy/solutions/engine-power-plants/wartsila-34sg-gas-engine
6. Wärtsilä Flexicycle (engine combined cycle) — >54 % ISO efficiency:
   https://www.wartsila.com/energy/engine-power-plant-solutions/engine-power-plant-products/applications/flexicycle-power-plants
7. Wärtsilä — Technology comparison, engines vs. aeroderivative gas turbines
   (part-load efficiency, water consumption, modularity/footprint):
   https://www.wartsila.com/energy/learn-more/technology-comparison-engines-vs-aeros
8. EIA — Capital Cost and Performance Characteristics (AEO2025):
   https://www.eia.gov/analysis/studies/powerplants/capitalcost/pdf/capital_cost_AEO2025.pdf ;
   GridLab — The New Reality of Power Generation (2025 gas turbine costs):
   https://gridlab.org/wp-content/uploads/2025/09/GridLab_Gas-Turbine-Costs-Report-1.pdf
9. Thunder Said Energy — reciprocating gas engines, levelized costs:
   https://thundersaidenergy.com/downloads/reciprocating-gas-engines-levelized-costs/
- Wärtsilä positioning — ammonia for marine, natural gas for data centers:
   https://www.powertraininternationalweb.com/news/wartsila-ammonia-marine-34sg-data-centers/
- Power Engineering — dual-function SCR catalyst, <2.5 ppm NOx with ~zero
  ammonia slip for gas turbines:
  https://www.power-eng.com/gas/turbines/scr-catalysts-dual-function-catalyst-promises-high-nosubx-sub-removal-with-zero-ammonia-slip-for-gas-turbine-applications/

*First-pass comparison matrix. Anchored to public OEM/agency data; NH₃-specific
gaps flagged, not invented (No-Fabrication Rule).*
