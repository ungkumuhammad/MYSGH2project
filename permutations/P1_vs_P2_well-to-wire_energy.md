# Permutation Comparison — P1 (crack in Johor → H₂ pipeline → H₂-CCGT) vs P2 (ship NH₃ → Singapore → 100 % NH₃-CCGT)

> **Question answered:** Carrying the *same* green ammonia from India, how much
> of its chemical energy survives as **usable electricity** at the Singapore
> power plant in each permutation, and which is technically better?
> **Basis:** LHV, steady-state, annual. **Reference energy = LHV of the ammonia
> loaded in India** (identical for both permutations).
> **Date:** 2026-06-30. **Rev 1** — CCGT efficiencies now anchored to published
> OEM data (was assumption in Rev 0); result changed. See `memory.md`.

---

## 1. The two permutations (as specified)

| | **P1 — Crack at MMHE, pipe H₂ to Singapore** | **P2 — Ship NH₃ to Singapore, fire NH₃ directly** |
|---|---|---|
| Ammonia imported | 650 ktpa from India, 28 kt carriers | 650 ktpa from India, 28 kt carriers |
| Landfall | MMHE, Pasir Gudang, Johor | Singapore |
| Storage | Refrigerated NH₃ (Johor) | Refrigerated NH₃ (Singapore) |
| Conversion | Ammonia cracker → **100 ktpa H₂** (user figure) | None |
| Cross-border transport | 16″ H₂ pipeline, Johor → Singapore | None |
| Power block | H₂-fired CCGT | 100 % NH₃-fired CCGT |
| Product delivered to SG | **Hydrogen** | **Electricity (from ammonia)** |

---

## 2. Reference energy in (common to both)

- NH₃ LHV = **18.6 MJ/kg**; H₂ LHV = **120 MJ/kg** (CLAUDE.md §5, textbook).
- 650,000 t/yr × 18.6 GJ/t = **12.09 PJ/yr (LHV) = 100 % reference.**

The **sea leg India → Johor and India → Singapore is effectively the same
voyage** (Pasir Gudang and Singapore sit on opposite sides of the same strait),
and **both** permutations refrigerate-store ammonia. So *shipping + ammonia
storage are common-mode* and do **not** differentiate the two on energy. The
ranking is decided entirely **downstream** of storage — at the cracker (P1) and
at the turbine (both).

---

## 3. The decisive new input — what turbine each fuel can actually run in

This is the crux, and it is **not symmetric**:

| | **Hydrogen (P1)** | **Ammonia (P2)** |
|---|---|---|
| Best commercially-offered machine for 100 % of this fuel | **Large H-class CCGT** | **40 MW-class GTCC** |
| Reference unit | GE 9HA.02 | MHI/MHPS H-25 |
| Net CC efficiency (LHV) | **64.0 %** on NG; **50 % H₂ today, roadmap to 100 %** | SC 34.8 % (ISO) → ~60 MW 1×1 CC ⇒ **GTCC ≈ 51 %** |
| 100 % status | H-class H₂ roadmap to 100 % | **100 % NH₃ H-25, commercialisation ~2025** |
| Sources | GE Vernova; Turbomachinery Mag. | Mitsubishi Power; MHPS; MHI |

**Why it matters:** hydrogen can be burned in a ~64 %-class machine; 100 %
ammonia firing is, today, only commercialised on a ~51 %-class machine. That
~13-point turbine-efficiency gap largely **cancels the ~11 % cracking penalty**
that P1 pays — and then some.

**Working efficiencies adopted (LHV, net):**
- **H₂-CCGT: 62 %** (range 58–64 %) — slight conservative derate from the 64 %
  NG figure for 100 % H₂ on H-class.
- **NH₃-CCGT: 51 %** (range 49–53 %) — H-25-class, the only near-commercial
  100 % ammonia machine.

---

## 4. Stage-by-stage energy waterfall (base case)

### P1 — Crack in Johor → H₂ pipeline → H₂-CCGT

| Stage | Stage η (LHV) | Energy after stage | % of NH₃-in | Basis |
|---|---|---|---|---|
| NH₃ delivered ex-India | — | 12.09 PJ | 100.0 % | LHV, sourced |
| Sea transport + unload (→ Johor) | 0.997 | 12.05 PJ | 99.7 % | assumption (boil-off ~0.025 %/day) |
| NH₃ refrigerated storage | 0.998 | 12.03 PJ | 99.5 % | assumption |
| **Ammonia cracking → H₂** | **0.89** | 10.71 PJ | **88.6 %** | **sourced** (Casale 89 %; Duiker ~91 %) |
| H₂ pipeline → Singapore (16″) | 0.99 | 10.60 PJ | 87.7 % | assumption (compression) |
| **H₂-fired CCGT (net)** | **0.62** | 6.57 PJ | **54.4 %** | **sourced basis** (GE 9HA.02) |
| **Electricity out** | | **6.57 PJ/yr ≈ 1,826 GWh/yr** | **≈ 54.4 %** | |

> Cracking at 89 % of ammonia LHV ⇒ **≈ 89 ktpa H₂** in *clean-fuel mode*
> (cracker burns part of its own product for heat, ~7.0–7.2 t NH₃/t H₂,
> near-zero direct CO₂). The user's **100 ktpa** implies **6.5 t NH₃/t H₂ =
> natural-gas-fired mode** (external NG supplies heat, +~0.9 kg CO₂/kg H₂,
> database). The 89 % energy efficiency books that penalty either way, so the
> well-to-wire % is essentially unchanged; only CO₂ and the NG bill differ.

### P2 — Ship NH₃ to Singapore → 100 % NH₃-CCGT

| Stage | Stage η (LHV) | Energy after stage | % of NH₃-in | Basis |
|---|---|---|---|---|
| NH₃ delivered ex-India | — | 12.09 PJ | 100.0 % | LHV, sourced |
| Sea transport + unload (→ Singapore) | 0.997 | 12.05 PJ | 99.7 % | assumption |
| NH₃ refrigerated storage | 0.998 | 12.03 PJ | 99.5 % | assumption |
| **100 % NH₃-fired CCGT (net)** | **0.51** | 6.14 PJ | **50.7 %** | **sourced basis** (MHI H-25 class) |
| **Electricity out** | | **6.14 PJ/yr ≈ 1,704 GWh/yr** | **≈ 50.7 %** | |

---

## 5. Headline result (Rev 1 — reversed from Rev 0)

| | **P1 (H₂ route)** | **P2 (NH₃ route)** |
|---|---|---|
| **Usable energy at the wire** | **≈ 54.4 %** ✅ | ≈ 50.7 % |
| Electricity (illustrative) | ~1,826 GWh/yr | ~1,704 GWh/yr |
| Product delivered to Singapore | Hydrogen | Electricity |

**With real turbine classes, P1 (hydrogen) is the more efficient route by ~3.7
points (~122 GWh/yr).** This *reverses* the Rev 0 result, which had assumed both
fuels run in equally-efficient turbines. They do not: the cracking penalty is
out-weighed by hydrogen's access to a ~64 %-class machine versus ammonia's
~51 %-class machine.

---

## 6. Sensitivity — the answer is governed by turbine class

P1 fixed factor up to the turbine = 0.877; P2 fixed factor = 0.995.

| H₂-CCGT η → | 58 % | 60 % | **62 %** | 64 % |
|---|---|---|---|---|
| **P1 well-to-wire** | 50.8 % | 52.6 % | **54.4 %** | 56.1 % |

| NH₃-CCGT η → | 49 % | **51 %** | 53 % | 55 % |
|---|---|---|---|---|
| **P2 well-to-wire** | 48.8 % | **50.7 %** | 52.7 % | 54.7 % |

- **Crossover:** P2 only catches P1 when the ammonia-CCGT net efficiency reaches
  **≈ 55 %** (for a 62 % H₂-CCGT) — i.e. ammonia must move onto a large-class
  machine. No 100 % ammonia turbine at that efficiency is commercially offered
  today.
- **Technology-parity case** (both on a 63 % large-class machine, hypothetical):
  P1 = 55 %, **P2 = 63 %** — *then* P2 wins, because the cracking step becomes
  pure deadweight. This is the bull case for direct ammonia firing and depends
  entirely on large 100 % ammonia turbines maturing.

So the energy verdict hinges on a single question: **will a large, high-
efficiency 100 % ammonia turbine exist on the project timeline?** Until it does,
hydrogen wins the energy race.

---

## 7. "Better technicals" is more than efficiency

With Rev 1, P1 now leads on energy **and** on most other technical axes:

| Axis | P1 — H₂ route | P2 — 100 % NH₃-CCGT |
|---|---|---|
| **Usable-energy %** | **~54.4 %** ✅ | ~50.7 % |
| **Power-block maturity** | H-class H₂ CCGTs offered (50→100 % H₂) ✅ | 100 % NH₃ only at 40 MW class, ~2025 |
| **Turbine efficiency class available** | ~64 % H-class ✅ | ~51 % mid-size |
| **Combustion** | High flame speed; no carbon; no N₂O ✅ | Low flame speed; high NOx + **N₂O**; NH₃ slip → SCR + derate |
| **Where the hazard sits** | Ammonia stays in **Johor**; only H₂ crosses ✅ | Large NH₃ store + NH₃ combustion in land-scarce Singapore |
| **Permitting** | NH₃ battery limits in Johor + new H₂ pipeline | NH₃ storage (hardest permit item) now in Singapore |
| **Strategic fit** | Delivers **H₂** — matches project + SG H₂ Strategy ✅ | Delivers power, not H₂ |
| **CAPEX / steps** | Cracker + 16″ pipeline (more kit) | Fewer steps ✅ |
| **CO₂** | ~Zero (clean-fuel) / +CO₂ if NG-fired to 100 ktpa | ~Zero direct CO₂ (but N₂O risk) |

---

## 8. Recommendation

**Choose P1 (crack in Johor → pipe H₂ → H₂-CCGT).** On published OEM data it is
now the **more energy-efficient** route (~54 % vs ~51 %), *and* it wins on
maturity, combustion cleanliness, where the ammonia hazard sits, and strategic
fit. P2's only path to winning is a large, high-efficiency 100 % ammonia turbine
(~55 %+) that is not commercially available today.

**Decision-gating action (no-fabrication):** lock the two turbine efficiencies
with OEM quotations at the project unit size — (a) a 100 % H₂ H-class CCGT and
(b) a 100 % NH₃ CCGT — plus confirm the cracker fuel mode (clean vs NG). Those
three numbers settle the comparison; everything else is common-mode or sourced.

---

## 9. Sourcing summary

| Quantity | Value | Status / source |
|---|---|---|
| NH₃ LHV / H₂ LHV | 18.6 / 120 MJ/kg | Sourced (CLAUDE.md §5) |
| Cracker energy efficiency | 89 % (Casale); 90.6–90.9 % (Duiker) | **Sourced** (internal licensor docs) |
| NH₃:H₂ ratio | 7.0–7.2 (clean) / 6.3–6.5 (NG-fired) t/t | **Sourced** (database, Duiker) |
| **H₂-CCGT efficiency** | 62 % (58–64 %), from 64 % NG H-class | **Sourced basis** — GE 9HA.02 (GE Vernova; Turbomachinery Mag.) |
| **NH₃-CCGT efficiency** | 51 % (49–53 %), H-25 40 MW class | **Sourced basis** — MHI/MHPS H-25; 100 % NH₃ ~2025 (Mitsubishi Power) |
| Shipping/storage parasitics | 0.997 / 0.998 | Assumption (common-mode, immaterial to ranking) |
| H₂ pipeline parasitic | 0.99 | Assumption |

### References
- GE Vernova — 9HA gas turbine (64.0 % net CC, 826 MW 1×1, 50 % H₂→100 % roadmap):
  https://www.gevernova.com/gas-power/products/gas-turbines/9ha
- Turbomachinery Magazine — "GE 9HA.02 claims 64 % efficiency in combined cycle":
  https://www.turbomachinerymag.com/view/market-challenged-ge-continues-to-improve-gas-turbine-efficiency
- Mitsubishi Power — H-25 Series (41 MW SC, 34.8 % ISO, ~60 MW 1×1 CC):
  https://power.mhi.com/products/gasturbines/lineup/h25/
- Mitsubishi Power — World's first 40 MW-class 100 % ammonia gas turbine, ~2025:
  https://power.mhi.com/news/20210301.html
- Ammonia Energy Association — Ammonia-fuelled gas turbines, deployment update:
  https://ammoniaenergy.org/articles/ammonia-fueled-gas-turbines-a-technology-and-deployment-update/
- Gas Turbine World — Green hydrogen in gas turbines:
  https://gasturbineworld.com/gas-turbines-burning-green-hydrogen/
- Internal: `tcoedatabase/WIP_Ammonia_Cracker_Database.md`; `Licensor/duiker/duiker-johor-hub.md`; `Licensor/Casale/…`
