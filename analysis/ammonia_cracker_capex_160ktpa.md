# Ammonia Cracker CAPEX & LCOH at 160 ktpa H₂ — KBR H2ACT® vs Duiker AHC

**Project:** MYSGH2 — MMHE Johor Hub  
**Prepared:** 2026-07-01  
**Basis:** KBR TIP Rev 0, 23 Dec 2025; Duiker Proposal 122380-00-QUO-0001, 05 Dec 2025  
**Companion documents:** `analysis/ammonia_cracker_capex_100ktpa.md`; `analysis/kbr_vs_duiker_80ktpa_capex_lcoh.md`

---

## 1. Capacity Context

| Parameter | Value | Basis |
|-----------|-------|-------|
| H₂ production | 160,000 tpa | Target (2× the 80 ktpa KBR base case) |
| H₂ production (daily) | **457 MTPD** | 160,000 ÷ 350 d/yr |
| NH₃ feed required — KBR (6.35 t/t, NG mode) | ~1,016,000 tpa NH₃ | KBR KPI large-scale, 100% NG mode |
| NH₃ feed required — Duiker (7.03 t/t, NH₃ fired) | ~1,125,000 tpa NH₃ | Duiker KPI base case |

---

## 2. Critical Difference at 160 ktpa: Train Configuration

This is where the **fundamental technology difference** between KBR and Duiker creates a structural asymmetry in how 160 ktpa is delivered.

| | **KBR H2ACT®** | **Duiker AHC** |
|--|----------------|----------------|
| Max single-train capacity | **1,200 MTPD H₂** (stated in TIP) | **~276 MTPD H₂** (stated full-scale train; 4 reactors) |
| 160 ktpa (457 MTPD) configuration | **Single train** — 457 MTPD is 38% of KBR's max; well within one train | **2 trains** — 457 MTPD ÷ 276 MTPD/train = 1.66 trains → minimum 2 trains (each ~229 MTPD ≈ 80 ktpa) |
| Economy of scale at 160 ktpa | **Continuous** — one larger furnace, one set of utilities | **Stepped** — second full train; costs add near-linearly from 80 ktpa to 160 ktpa |

> **This is a significant structural difference.** KBR continues to benefit from economy of scale at 160 ktpa (single train, n=0.53). Duiker effectively doubles from 80 ktpa (two trains), capturing little incremental economy of scale between 80 and 160 ktpa. This partially reverses the CAPEX advantage Duiker held at 80 ktpa.

---

## 3. KBR CAPEX at 160 ktpa — Extrapolated (Single Train)

### Extrapolation from the four quoted data points

Power-law model: CAPEX = A × Q^n, n = 0.53 (derived from KBR data, see `ammonia_cracker_capex_100ktpa.md`)

| Anchor point | Calculation | ISBL result |
|-------------|------------|-------------|
| From 80 ktpa ($209M) | $209M × (160/80)^0.53 = $209M × (2.0)^0.53 = $209M × 1.444 | **$302M** |
| From 68 ktpa ($191M) | $191M × (160/68)^0.53 = $191M × (2.353)^0.53 = $191M × 1.574 | **$301M** |
| From 12 ktpa ($78M) | $78M × (160/12)^0.53 = $78M × (13.33)^0.53 = $78M × 3.947 | **$308M** |

All anchors converge tightly: **KBR ISBL CAPEX at 160 ktpa ≈ $302M**

> 160 ktpa is 2× the 80 ktpa data point — a moderate extrapolation step. Consistency across three anchors gives reasonable confidence. Class V ±50% accuracy applies throughout.

### KBR CAPEX build-up at 160 ktpa

| Item | Value | Basis |
|------|-------|-------|
| **ISBL TIC (derived)** | **$302M** | Extrapolated, n=0.53, Q3 2025, Class V ±50% |
| OSBL (Assumption A4 revised: ~30% of ISBL at this scale) | ~$91M | Interpolated — KBR states 55% at 12 ktpa, reducing at scale; 30% applied at 160 ktpa; **unconfirmed** |
| **Total TIC (ISBL + OSBL)** | **~$393M** | Derived |
| Unit ISBL cost | $1.89/kg H₂/yr | |
| Unit total TIC | ~$2.46/kg H₂/yr | |

### KBR CAPEX Progression (full picture)

| Capacity (ktpa) | ISBL CAPEX | Source | Unit ISBL ($/kg·yr) |
|----------------|-----------|--------|---------------------|
| 12 | $78M | Quoted | $6.50 |
| 24 | $110M | Quoted | $4.58 |
| 68 | $191M | Quoted | $2.81 |
| 80 | $209M | Quoted | $2.61 |
| 100 | ~$235M | Extrapolated | ~$2.35 |
| **160** | **~$302M** | **Extrapolated** | **~$1.89** |

Economy of scale: from 80 → 160 ktpa, doubling capacity adds only **44% to ISBL cost** (not 100%). CAPEX per kg H₂/yr falls from $2.61 to $1.89 — a **28% reduction in unit capital cost**.

---

## 4. Duiker CAPEX at 160 ktpa — 2-Train Configuration

### Configuration

160 ktpa (457 MTPD) requires 2 trains. The natural train sizing at 80 ktpa (~229 MTPD each) fits Duiker's modular architecture cleanly.

**2 × 80 ktpa Duiker trains:**

| Item | Per train (80 ktpa) | Total (2 trains) | Basis |
|------|--------------------|-----------------|----|
| LSTK CAPEX | ~€160M (~$173M) | **~€320M (~$346M)** | Extrapolated, n=0.60, Assumption A3 |
| OSBL per train (no CW/steam) | ~€10M (~$11M) | ~€20M (~$22M) | Rough estimate — flare, storage tie-in, control room |
| **Total TIC (2 trains + OSBL)** | | **~€340M (~$367M)** | Derived |
| Unit LSTK cost | | ~$2.16/kg H₂/yr | |
| Unit total TIC | | ~$2.29/kg H₂/yr | |

> There is a potential **shared-infrastructure saving** for 2 trains on one site (shared control room, flare, utilities tie-ins). This could reduce total TIC by 5–10%, bringing it to ~$330–$350M. Not quantified here — flagged as upside to Duiker.

---

## 5. CAPEX Comparison at 160 ktpa

| | **KBR H2ACT® (single train)** | **Duiker AHC (2 trains)** |
|--|-------------------------------|--------------------------|
| ISBL / LSTK | $302M | $346M |
| OSBL | ~$91M | ~$22M |
| **Total TIC** | **~$393M** | **~$367M** |
| Unit TIC ($/kg H₂/yr) | ~$2.46 | ~$2.29 |
| Configuration | Single train | 2 trains |
| Accuracy | ±50% Class V + extrapolation | ±40% + extrapolation + FX (A2) |

**At 160 ktpa, the total TIC figures are close — within ~7%.** Given the combined uncertainty (±40–50%), they are statistically indistinguishable. The structural reason: KBR's single-train economy of scale is offset by Duiker's lower OSBL requirements. Two-train Duiker LSTK grows near-linearly (×2 from 80 ktpa), catching up with KBR's single-train growth (×1.44).

> Contrast with 80 ktpa where Duiker had a clearer CAPEX advantage (~$193M vs ~$282M). At 160 ktpa that advantage erodes because Duiker loses its single-train scaling benefit.

---

## 6. LCOH at 160 ktpa

### Common assumptions (same as 80 ktpa analysis)

| Parameter | Value |
|-----------|-------|
| Plant life | 25 years |
| Discount rate | 8% |
| CRF (8%, 25yr) | 0.09368 |
| Operating days | 350 d/yr |
| NH₃ price scenarios | $500/t and $950/t |
| EUR/USD | 1.08 (Assumption A2) |

### KBR LCOH at 160 ktpa

OPEX at 160 ktpa: feedstock dominates; scales near-linearly from 80 ktpa (variable costs ×2, fixed costs sub-linear).

| Item | At $500/t NH₃ | At $950/t NH₃ |
|------|--------------|--------------|
| Annualised CAPEX ($393M × 0.09368) | $36.8M/yr | $36.8M/yr |
| NH₃ for product (5.63 t/t × 160k t/yr × NH₃ price) | $450.4M/yr | $855.8M/yr |
| NH₃ for fuel (0.72 t/t × 160k t/yr × NH₃ price) | $57.6M/yr | $109.4M/yr |
| NG fuel supplement | ~$10.2M/yr | ~$10.2M/yr |
| Electricity (280 kWh/t × 160k t × $140/MWh) | ~$6.3M/yr | ~$6.3M/yr |
| Fixed OPEX (labour, maintenance, insurance; scaled) | ~$20M/yr | ~$20M/yr |
| Other consumables | ~$0.8M/yr | ~$0.8M/yr |
| **Total annual cost** | **~$582M/yr** | **~$1,039M/yr** |
| **LCOH** | **~$3.64/kg H₂** | **~$6.49/kg H₂** |

### Duiker LCOH at 160 ktpa (2 trains, NH₃ fired)

| Item | At $500/t NH₃ | At $950/t NH₃ |
|------|--------------|--------------|
| Annualised CAPEX ($367M × 0.09368) | $34.4M/yr | $34.4M/yr |
| NH₃ feedstock (7.03 t/t × 160k t/yr × NH₃ price) | $562.4M/yr | $1,068.6M/yr |
| Non-feedstock OPEX (2 trains, scaled from €2.9M @ 12 ktpa) | ~$21.4M/yr | ~$21.4M/yr |
| **Total annual cost** | **~$618M/yr** | **~$1,124M/yr** |
| **LCOH** | **~$3.86/kg H₂** | **~$7.03/kg H₂** |

### LCOH Summary

| NH₃ Price | **KBR (single train, NG mode)** | **Duiker (2 trains, NH₃ fired)** | Delta (Duiker minus KBR) |
|-----------|--------------------------------|----------------------------------|--------------------------|
| $500/t | **$3.64/kg H₂** | **$3.86/kg H₂** | +$0.22/kg (+6%) |
| $950/t | **$6.49/kg H₂** | **$7.03/kg H₂** | +$0.54/kg (+8%) |

> **LCOH gap widens at 160 ktpa vs 80 ktpa.** At 80 ktpa the gap was $0.07–0.37/kg; at 160 ktpa it grows to $0.22–0.54/kg. Two reasons: (1) Duiker's 2-train structure loses CAPEX economy of scale relative to KBR's single train; (2) Duiker's higher NH₃ consumption (7.03 vs 6.35 t/t) applies to twice the throughput.

### LCOH Progression Across Scales (KBR NG mode, $500/t NH₃)

| Scale | LCOH | Reduction vs previous step |
|-------|------|---------------------------|
| 12 ktpa | $4.90/kg | — |
| 24 ktpa | $4.36/kg | −11% |
| 68 ktpa | $3.85/kg | −12% |
| 80 ktpa | $3.81/kg | −1% |
| 100 ktpa | ~$3.74/kg | −2% |
| **160 ktpa** | **~$3.64/kg** | **−3%** |

LCOH gains from scale are diminishing above 68 ktpa — feedstock cost is so dominant that CAPEX economy of scale has limited marginal impact above this point. The big reductions happen in the 12→68 ktpa range.

---

## 7. CI Consideration at 160 ktpa

| Scenario | KBR CI | Duiker CI | Singapore offtake implication |
|----------|--------|-----------|-------------------------------|
| KBR 100% NG fuel mode | 0.80 kg CO₂/kg H₂ | — | Likely fails a zero-CI requirement |
| KBR clean-fuel mode (H₂/N₂ only) | 0 kg CO₂/kg H₂ | — | Zero-CI but NH₃ consumption rises to 7.20 t/t H₂ |
| Duiker NH₃ fired | — | 0 kg CO₂/kg H₂ | Zero-CI by design |

If zero-CI is required, KBR must operate in clean-fuel mode. At 160 ktpa clean-fuel mode:
- NH₃ consumption: 7.20 t/t H₂ × 160,000 = 1,152,000 t NH₃/yr
- This exceeds Duiker's 1,125,000 t NH₃/yr at the same throughput
- KBR clean-fuel LCOH at $500/t: ~$3.85/kg (higher than NG mode $3.64) → comparable to or slightly above Duiker ($3.86/kg)

**At zero-CI, KBR and Duiker are effectively LCOH-equivalent at 160 ktpa.**

---

## 8. Summary Decision Matrix — 160 ktpa

| Criterion | **KBR H2ACT®** | **Duiker AHC** | Assessment |
|-----------|----------------|----------------|------------|
| Total CAPEX (TIC) | ~$393M | ~$367M | **Duiker marginally lower** — within uncertainty band |
| LCOH (NG mode vs NH₃ fired, $500/t) | $3.64/kg | $3.86/kg | **KBR lower** |
| LCOH (both zero-CI, $500/t) | ~$3.85/kg | $3.86/kg | **Essentially equal** |
| Train configuration | Single train | 2 trains | **KBR simpler** — one set of control systems, one TAR schedule |
| OSBL complexity | High (CW, steam, water treatment) | Low (no CW, no steam) | **Duiker simpler** |
| Technology risk | Lower (SMR-proven furnace, LPED done at 219 MTPD) | Higher (no integrated commercial reference) | **KBR lower risk** |
| Redundancy | Single train = zero redundancy at BL | 2 trains = 50% redundancy if one trips | **Duiker operational advantage** |
| OSBL infrastructure at MMHE | Must build cooling tower, water treatment | Minimal OSBL additions | **Duiker advantage** |

---

## 9. Open Items Specific to 160 ktpa

| # | Item | Action |
|---|------|--------|
| 1 | Confirm Duiker's maximum single-train capacity and whether >276 MTPD single train is possible | Request Duiker |
| 2 | If 160 ktpa is phased (2 × 80 ktpa trains, built 3–5 years apart), model phased CAPEX and LCOH separately | Project team |
| 3 | Confirm KBR OSBL at 160 ktpa — does 30% of ISBL hold? | Request KBR |
| 4 | Decide on CI requirement for Singapore offtake — this changes the LCOH comparison outcome | Gentari / offtake |

---

## 10. References

- KBR H2ACT® TIP Rev 0, 23 Dec 2025 — `Licensor/kbr/kbr-johor-hub.md`
- Duiker AHC Proposal 122380-00-QUO-0001, 05 Dec 2025 — `Licensor/duiker/duiker-johor-hub.md`
- CAPEX methodology — `analysis/ammonia_cracker_capex_100ktpa.md`
- 80 ktpa comparison — `analysis/kbr_vs_duiker_80ktpa_capex_lcoh.md`
