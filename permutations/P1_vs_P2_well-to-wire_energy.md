# Permutation Comparison — P1 (crack in Johor → H₂ pipeline → H₂-CCGT) vs P2 (ship NH₃ → Singapore → 100 % NH₃-CCGT)

> **Question answered:** Carrying the *same* green ammonia from India, how much
> of its chemical energy survives as **usable electricity** at the Singapore
> power plant in each permutation, and which is technically better?
> **Basis:** LHV, steady-state, annual. **Reference energy = LHV of the ammonia
> loaded in India** (identical for both permutations).
> **Date:** 2026-06-30. See `memory.md` for sourcing/assumption status.

---

## 1. The two permutations (as specified)

| | **P1 — Crack at MMHE, pipe H₂ to Singapore** | **P2 — Ship NH₃ to Singapore, fire NH₃ directly** |
|---|---|---|
| Ammonia imported | 650 ktpa from India, 28 kt carriers | 650 ktpa from India, 28 kt carriers |
| Landfall | MMHE, Pasir Gudang, Johor | Singapore |
| Storage | Refrigerated NH₃ (Johor) | Refrigerated NH₃ (Singapore) |
| Conversion | Ammonia cracker → **100 ktpa H₂** (user figure) | None |
| Cross-border transport | 16″ H₂ pipeline, Johor → Singapore | None (NH₃ already in SG) |
| Power block | H₂-fired CCGT | 100 % NH₃-fired CCGT |
| Product delivered to SG | **Hydrogen** | **Electricity (from ammonia)** |

---

## 2. Reference energy in (common to both)

- NH₃ LHV = **18.6 MJ/kg** (CLAUDE.md §5, textbook).
- 650,000 t/yr × 18.6 GJ/t = **12.09 PJ/yr (LHV) = 100 % reference.**

The **sea leg India → Johor and India → Singapore is effectively the same
voyage** (Pasir Gudang and Singapore sit on opposite sides of the same strait,
tens of km apart), and **both** permutations refrigerate-store ammonia. So
*shipping + ammonia storage are common-mode* and do **not** differentiate the
two on energy. The ranking is decided entirely **downstream** of storage.

---

## 3. Stage-by-stage energy waterfall (base case)

### P1 — Crack in Johor → H₂ pipeline → H₂-CCGT

| Stage | Stage η (LHV) | Energy after stage | % of NH₃-in | Basis |
|---|---|---|---|---|
| NH₃ delivered ex-India | — | 12.09 PJ | 100.0 % | LHV, sourced |
| Sea transport + unload (→ Johor) | 0.997 | 12.05 PJ | 99.7 % | **assumption** (boil-off ~0.025 %/day) |
| NH₃ refrigerated storage | 0.998 | 12.03 PJ | 99.5 % | **assumption** (boil-off + re-liquefaction) |
| **Ammonia cracking → H₂** | **0.89** | 10.71 PJ | **88.6 %** | **sourced** (Casale energy eff. 89 %; Duiker ~91 %) |
| H₂ pipeline → Singapore (16″) | 0.99 | 10.60 PJ | 87.7 % | **assumption** (compression parasitic) |
| **H₂-fired CCGT (net)** | **0.59** | 6.25 PJ | **51.7 %** | **assumption** (H-class on H₂, 57–61 %) |
| **Electricity out** | | **6.25 PJ/yr ≈ 1,740 GWh/yr** | **≈ 51.7 %** | |

> Cracking at 89 % of ammonia LHV implies **≈ 89 ktpa H₂** in *clean-fuel mode*
> (cracker burns part of its own product/ammonia for the endothermic heat,
> ~7.0–7.2 t NH₃/t H₂, near-zero direct CO₂). The user's **100 ktpa** figure
> corresponds to **6.5 t NH₃/t H₂ — i.e. natural-gas-fired mode**, where
> external NG supplies the heat so all ammonia converts to product. That raises
> H₂ tonnage **but adds fossil NG energy + ~0.9 kg CO₂/kg H₂** (database). The
> 89 % energy efficiency already books this penalty either way, so the
> well-to-wire % is essentially unchanged; only the CO₂ and the NG fuel bill
> differ. (Sources: `tcoedatabase/WIP_Ammonia_Cracker_Database.md`,
> `Licensor/duiker/duiker-johor-hub.md`.)

### P2 — Ship NH₃ to Singapore → 100 % NH₃-CCGT

| Stage | Stage η (LHV) | Energy after stage | % of NH₃-in | Basis |
|---|---|---|---|---|
| NH₃ delivered ex-India | — | 12.09 PJ | 100.0 % | LHV, sourced |
| Sea transport + unload (→ Singapore) | 0.997 | 12.05 PJ | 99.7 % | **assumption** |
| NH₃ refrigerated storage | 0.998 | 12.03 PJ | 99.5 % | **assumption** |
| **100 % NH₃-fired CCGT (net)** | **0.56** | 6.74 PJ | **55.7 %** | **assumption** (pre-commercial, 50–58 %) |
| **Electricity out** | | **6.74 PJ/yr ≈ 1,870 GWh/yr** | **≈ 55.7 %** | |

---

## 4. Headline result

| | **P1 (H₂ route)** | **P2 (NH₃ route)** |
|---|---|---|
| **Usable energy at the wire (base case)** | **≈ 51.7 %** | **≈ 55.7 %** |
| Electricity (illustrative) | ~1,740 GWh/yr | ~1,870 GWh/yr |
| Product delivered to Singapore | Hydrogen | Electricity |

**On pure usable-energy %, P2 (direct ammonia firing) is higher by ~4
percentage points** — because it skips the cracking step, which alone costs
~11 % of the chemical energy (×0.89), plus the H₂ pipeline parasitic.

Differentially (cancelling the common ship + store terms), P1 delivers about
**93 % of the electricity P2 delivers**:
`(0.89 × 0.99 × 0.59) / 0.56 ≈ 0.93`.

---

## 5. The result hinges on one uncertain number — sensitivity

The ranking is driven by the **ammonia-CCGT net efficiency**, which is the
least mature, least certain input. Holding the rest of each chain fixed
(P1 fixed factor 0.877 up to the turbine; P2 fixed factor 0.995):

| H₂-CCGT η → | 57 % | 59 % | 61 % |
|---|---|---|---|
| **P1 well-to-wire** | 50.0 % | **51.7 %** | 53.5 % |

| NH₃-CCGT η → | 50 % | 55 % | 58 % |
|---|---|---|---|
| **P2 well-to-wire** | 49.8 % | **54.7 %** | 57.7 % |

**Crossover:** P1 beats P2 only when the ammonia-CCGT net efficiency falls
**below ≈ 52 %** (for a 59 % H₂-CCGT), i.e. when the ammonia turbine loses more
than ~12 % (relative) against the hydrogen turbine. Current OEM ambition is for
ammonia/hydrogen CCGTs to approach NG-CCGT efficiency, which would keep P2
ahead on energy — **but 100 % ammonia firing in a large CCGT is still
pre-commercial**, so this efficiency is exactly the figure to pin down with OEM
data before trusting the ranking.

---

## 6. "Better technicals" is more than efficiency

Energy % favours **P2**. Most other technical axes favour **P1**:

| Axis | P1 — H₂ route | P2 — 100 % NH₃-CCGT |
|---|---|---|
| **Usable-energy %** | ~51.7 % | **~55.7 %** ✅ |
| **Power-block maturity (TRL)** | **H₂-capable CCGTs commercially offered** ✅ | 100 % NH₃ large CCGT pre-commercial / demo-scale |
| **Combustion** | High flame speed; no carbon; no N₂O ✅ | Low flame speed, narrow flammability, high NOx + **N₂O** (potent GHG), unburned-NH₃ slip → SCR + derate |
| **Where the hazard sits** | Ammonia (hardest to permit) stays in **Johor**; only H₂ crosses ✅ | Large refrigerated **ammonia store + ammonia combustion in land-scarce Singapore** |
| **Permitting** | Ammonia battery limits in Johor; new cross-border H₂ pipeline | Ammonia storage is the single hardest permit item (database) — now sited in Singapore |
| **Strategic fit** | Delivers **H₂** — matches project premise + SG National Hydrogen Strategy ✅ | Delivers power, not H₂ |
| **CAPEX / complexity** | Cracker + 16″ pipeline (more kit) | Fewer steps ✅ |
| **CO₂** | Near-zero in clean-fuel mode; +CO₂ if NG-fired to hit 100 ktpa | Near-zero direct CO₂ (but N₂O risk) |

---

## 7. Recommendation

- **If the single decision metric is usable-energy efficiency: P2 wins**
  (~55.7 % vs ~51.7 %), and the gap is the cracking penalty P2 avoids.
- **As an overall technical choice: P1 is the more defensible pathway today.**
  It pays a ~4-point efficiency premium to gain a *commercially available* power
  block, clean (carbon- and N₂O-free) combustion, ammonia hazard kept on the
  Malaysian side, and a hydrogen deliverable that is the whole point of the
  project and of Singapore's import strategy. P2's higher number rests on an
  ammonia-CCGT efficiency that is **not yet commercially demonstrated**; if that
  efficiency lands below ~52 %, P2's only advantage disappears too.

**Decision-gating action (no-fabrication):** confirm with turbine OEMs the
**net LHV efficiency and TRL of (a) a 100 % H₂-fired CCGT and (b) a 100 %
NH₃-fired CCGT** at the relevant unit size. Those two numbers, plus the
clean-vs-NG cracker fuel mode, decide the comparison; everything else here is
common-mode or sourced.

---

## 8. Sourcing summary

| Quantity | Value | Status |
|---|---|---|
| NH₃ LHV / H₂ LHV | 18.6 / 120 MJ/kg | Sourced (CLAUDE.md §5) |
| Cracker energy efficiency | 89 % (Casale); 90.6–90.9 % (Duiker) | **Sourced** (internal licensor docs) |
| NH₃:H₂ ratio | 7.0–7.2 (clean) / 6.3–6.5 (NG-fired) t/t | **Sourced** (database, Duiker) |
| Shipping/storage parasitics | 0.997 / 0.998 | Assumption (common-mode, immaterial to ranking) |
| H₂ pipeline parasitic | 0.99 | Assumption |
| **H₂-CCGT net efficiency** | 59 % (57–61 %) | **Assumption — confirm with OEM** |
| **NH₃-CCGT net efficiency** | 56 % (50–58 %) | **Assumption — confirm with OEM; pre-commercial** |
