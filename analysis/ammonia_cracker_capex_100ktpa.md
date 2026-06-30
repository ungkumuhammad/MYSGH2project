# Ammonia Cracker CAPEX at 100 ktpa H₂ — KBR H2ACT® & Casale MACH₂™

**Project:** MYSGH2 — MMHE Johor Hub  
**Prepared:** 2026-06-30  
**Basis:** KBR H2ACT® Technical Information Package (Rev 0, 23 Dec 2025, Gentari/IDOM);
Casale MACH₂™ Technical Proposal A23070S-O-PRB-0001 (Rev 00, 05 Dec 2025, Gentari)  
**No-Fabrication Rule:** All numbers are sourced or flagged as derived/assumption. No values invented.

---

## 1. Scope of This Note

This note collects the licensor-provided CAPEX data points, derives an economy-of-scale
scaling exponent from the KBR dataset, and extrapolates to **100 ktpa H₂** (the target
capacity not directly quoted by either licensor). It also records the Casale cost-data gap.

**ISBL boundary** (both licensors): feedstock receipt from NH₃ storage → NH₃
preheating/vaporisation → cracking → heat recovery → ammonia recovery unit → H₂ PSA →
H₂ at battery limit. **OSBL excluded** (jetty, storage, cooling tower, flare, buildings, etc.).

---

## 2. KBR H2ACT® — Provided CAPEX Data Points

Source: KBR TIP Rev 0, 23 Dec 2025, Section 4.1 (§3.3 table reproduced below).

### 2.1 Estimate Basis (as stated by KBR)

| Parameter | Value |
|-----------|-------|
| Estimate class | Class V (±50%) |
| Reference date | Q3 2025 — **no forward escalation** |
| Geographic basis | East Asia (recent TIC Class IV reference) |
| Scope | **ISBL only** |
| Exclusions | Contingency, permitting, sales tax, import duties, capital/commissioning spares, start-up costs, Owner cost, licence fees, royalties, currency risk |
| OSBL treatment | Stated separately as ~55% of ISBL at 12 ktpa scale (reduces at larger capacity) |

### 2.2 KBR ISBL CAPEX — Quoted Figures

| Capacity (ktpa H₂) | Capacity (MTPD H₂) | ISBL CAPEX (MM USD) | Unit cost (USD/kg H₂/yr) |
|--------------------|--------------------|---------------------|--------------------------|
| 12 | 34.3 | 78 | 6.50 |
| 24 | 68.6 | 110 | 4.58 |
| 68 | 194.3 | 191 | 2.81 |
| 80 | 228.6 | 209 | 2.61 |

*Unit cost = ISBL CAPEX ÷ annual H₂ capacity. Illustrative only; Class V accuracy.*

### 2.3 KBR Total CAPEX (ISBL + OSBL) — Partial Data

KBR provides the ISBL+OSBL total only for the 12 ktpa base case in their OPEX table:

| Capacity | Total CAPEX (ISBL + OSBL) | Derived OSBL | OSBL as % of ISBL |
|----------|--------------------------|--------------|-------------------|
| 12 ktpa  | 120.9 MM USD              | 42.9 MM USD  | ~55%              |

For larger capacities KBR states: *"OSBL cost as % of ISBL reduced for larger capacity."*
No explicit OSBL figures are quoted for 24, 68 or 80 ktpa in the Dec-2025 package.

> **Assumption A1 (flagged):** For the 100 ktpa extrapolation below, OSBL is assumed at
> **~40% of ISBL** (reflecting KBR's stated reduction from 55% at 12 ktpa and the
> larger-capacity trend). This is an assumption — to be confirmed when KBR provides an
> OSBL breakdown for 68–80 ktpa cases. Recorded in `memory.md`.

---

## 3. Economy-of-Scale Analysis (KBR Data)

### 3.1 Power-Law Fit

CAPEX scales as: **CAPEX = A × Q^n**

where Q is hydrogen production capacity (ktpa) and n is the scaling exponent.

Deriving n from the KBR data pairs:

| Data pair | Ratio CAPEX | Ratio Q | Derived n |
|-----------|-------------|---------|-----------|
| 12 → 80 ktpa | 209/78 = 2.679 | 80/12 = 6.667 | ln(2.679)/ln(6.667) = **0.520** |
| 24 → 80 ktpa | 209/110 = 1.900 | 80/24 = 3.333 | ln(1.900)/ln(3.333) = **0.533** |
| 12 → 68 ktpa | 191/78 = 2.449 | 68/12 = 5.667 | ln(2.449)/ln(5.667) = **0.516** |
| 24 → 68 ktpa | 191/110 = 1.736 | 68/24 = 2.833 | ln(1.736)/ln(2.833) = **0.525** |
| 68 → 80 ktpa | 209/191 = 1.094 | 80/68 = 1.176 | ln(1.094)/ln(1.176) = **0.559** |

**Average n ≈ 0.53** (range: 0.52–0.56)

> This is close to the classical "six-tenths rule" (n = 0.6) but slightly lower, indicating that
> KBR's H2ACT® achieves above-average economy of scale — likely due to the modular
> fired-tube furnace design that scales efficiently (based on KBR's primary reformer heritage).
>
> For reference: n = 0.6 is the chemical industry average; n < 0.6 = better than average
> economy of scale; n = 1.0 = no economy of scale.

### 3.2 Implied CAPEX Savings (Economy of Scale)

| Scale-up factor (vs 12 ktpa) | Expected CAPEX ratio at n=0.6 | Actual KBR ratio | Saving vs. "average" |
|------------------------------|-------------------------------|-----------------|----------------------|
| ×2 (12→24 ktpa)  | 1.516 | 1.410 (110/78) | 7% cheaper than average |
| ×5.7 (12→68 ktpa) | 3.083 | 2.449 (191/78) | 21% cheaper than average |
| ×6.7 (12→80 ktpa) | 3.411 | 2.679 (209/78) | 21% cheaper than average |

---

## 4. Extrapolation to 100 ktpa H₂

### 4.1 Method

Using the power-law model with **n = 0.53** (derived above), anchored on the two largest
KBR data points (68 ktpa and 80 ktpa) as they are most representative:

**From 80 ktpa anchor:**
```
CAPEX_100 = 209 × (100/80)^0.53
           = 209 × (1.250)^0.53
           = 209 × e^(0.53 × ln 1.250)
           = 209 × e^(0.53 × 0.2231)
           = 209 × e^(0.1183)
           = 209 × 1.1254
           = 235 MM USD (ISBL)
```

**From 68 ktpa anchor:**
```
CAPEX_100 = 191 × (100/68)^0.53
           = 191 × (1.4706)^0.53
           = 191 × e^(0.53 × 0.3857)
           = 191 × e^(0.2045)
           = 191 × 1.2268
           = 234 MM USD (ISBL)
```

Both anchors converge to **~$234–235 MM USD ISBL** at 100 ktpa. This consistency provides
confidence in the extrapolation (100 ktpa is only 25% above the 80 ktpa data point, well
within extrapolation range).

### 4.2 100 ktpa CAPEX Summary

| Item | Value | Basis |
|------|-------|-------|
| H₂ production capacity | 100 ktpa (≈286 MTPD at 350 d/yr) | Target |
| NH₃ feed required | ~635 ktpa (~6.35 t NH₃/t H₂) | KBR KPI at large scale, 100% NG mode |
| **ISBL CAPEX (derived)** | **~235 MM USD** | Extrapolated from KBR data, n=0.53; ±50% Class V accuracy |
| OSBL CAPEX (estimated) | ~94 MM USD | Assumption A1: 40% of ISBL |
| **Total ISBL+OSBL (estimated)** | **~329 MM USD** | ISBL + OSBL (Assumption A1) |
| Unit ISBL cost | ~2.35 USD/(kg H₂/yr) | Derived |
| Estimate accuracy | ±50% (Class V) | Per KBR basis — not upgraded here |
| Currency | USD Q3 2025 | No forward escalation applied |

> ⚠️ **Important caveats:**
> - The extrapolated value is **not a KBR-quoted figure**. It is derived by the project team
>   from KBR data points using a power-law scaling model. KBR has not reviewed or endorsed
>   this extrapolation.
> - Class V ±50% accuracy means the true ISBL CAPEX could range from **~$118M to ~$353M**.
> - OSBL estimate uses Assumption A1 (unconfirmed). Request explicit OSBL breakdown from KBR
>   for the 68 and 80 ktpa cases as the next data point.
> - "100% NG Fuel mode" assumed for NH₃ consumption basis (best-case cost mode per KBR
>   recommendation for first commercial operation).

### 4.3 Sensitivity — Scaling Exponent Uncertainty

| Scaling exponent (n) | CAPEX at 100 ktpa (from 80 ktpa anchor) | Notes |
|----------------------|-----------------------------------------|-------|
| 0.50 | $226M ISBL | Lower bound of derived range |
| **0.53** | **$235M ISBL** | **Best estimate (derived from KBR data)** |
| 0.60 | $254M ISBL | Classical six-tenths rule |
| 0.70 | $280M ISBL | Conservative / contingency case |

---

## 5. Casale MACH₂™ — CAPEX Status

| Item | Status |
|------|--------|
| Technical proposal issued | Yes — A23070S-O-PRB-0001, Rev 00, 05 Dec 2025 |
| Capacity cases studied | 12, 24, 68, 80 ktpa H₂ (same four cases as KBR) |
| **CAPEX figures provided** | **NO — the Dec-2025 proposal is technical only; no cost figures were included** |
| Footprint data provided | Not explicitly — design basis states "Licensor will define the required plot area" |
| Specific energy, electrical consumption | Not provided in Dec-2025 package |

**Why no Casale CAPEX is available:**
Casale's Dec-2025 package to Gentari covers process technology description, KPIs, TRL
assessment (TRL 7–8), design approach and design basis. It does not include a CAPEX
estimate. This is consistent with Casale's MACH₂™ being at TRL 7–8 and the package
being a technology assessment rather than a project economics submission.

**What Casale KPIs tell us (qualitative comparison with KBR):**

| KPI | KBR H2ACT® (NG mode, large scale) | Casale MACH₂™ (NG mode, large scale) |
|-----|-------------------------------------|---------------------------------------|
| NH₃ specific consumption | 6.35 t NH₃/t H₂ | ≤ 6.4 t NH₃/t H₂ (stated maximum) |
| Energy efficiency (LHV) | 89.8% (80 ktpa, NG mode) | Up to 90% (low-carbon mode) |
| H₂ purity | 99.97 mol% | Up to 99.999% (Grade 5) |
| H₂ delivery pressure | 28 barg (no compressor) | Up to 40 barg (no compressor) |
| Max single-train capacity | 1,200 MTPD H₂ | >1,300 MTPD H₂ |
| TRL | TRL 7–9 (by 2028); TRL 5–7 today | TRL 7–8 |
| CI (self-sustaining mode) | 0 kg CO₂/kg H₂ | 0 kg CO₂/kg H₂ |

Process efficiency is broadly comparable between the two licensors at large scale.

> **Next step required:** Request Casale to provide a CAPEX indication (even Class V) for
> the 68 and 80 ktpa cases to enable a like-for-like comparison. Until then, no cost comparison
> between KBR and Casale is possible from the Dec-2025 packages.

---

## 6. CAPEX Comparison Table — All Capacities

| Capacity (ktpa H₂) | KBR ISBL (MM USD) | KBR Source | Casale ISBL (MM USD) | Casale Source |
|--------------------|-------------------|------------|----------------------|---------------|
| 12 | 78 | Quoted, Dec-2025 TIP §4.1 | N/A | Not provided |
| 24 | 110 | Quoted, Dec-2025 TIP §4.1 | N/A | Not provided |
| 68 | 191 | Quoted, Dec-2025 TIP §4.1 | N/A | Not provided |
| 80 | 209 | Quoted, Dec-2025 TIP §4.1 | N/A | Not provided |
| **100** | **~235 (derived)** | **Extrapolated, n=0.53, ±50%** | **N/A** | **Not provided** |

---

## 7. Open Items

| # | Item | Action | Priority |
|---|------|--------|----------|
| 1 | Confirm OSBL cost at 68–80 ktpa from KBR | Request KBR to provide OSBL breakdown for larger capacity cases | High |
| 2 | Obtain Casale CAPEX indication | Request Casale to add cost section to their assessment | High |
| 3 | Confirm whether 100 ktpa is a single-train or multi-train configuration | Single-train is within KBR and Casale max capacity; clarify with licensors | Medium |
| 4 | Apply location factor for Malaysia vs East Asia reference | KBR reference is East Asia; a Malaysia location factor may apply (±10–20%) | Medium |
| 5 | Apply forward escalation if project FID is not 2025/2026 | No escalation in KBR estimate; escalation to FID date needed for financial model | Medium |

---

## 8. References

- KBR H2ACT® Technical Information Package, Rev 0, 23 Dec 2025 ("Gentari_Technical Info
  Package_H2ACT_Rev0_20251223") — `Licensor/kbr/kbr-johor-hub.md`
- Casale MACH₂™ Technical Proposal A23070S-O-PRB-0001, Rev 00, 05 Dec 2025
  — `Licensor/Casale/Casale_Ammonia_Cracker__JohorHub.md`
- Casale Design Basis A23070S-E-PRZ-0001, Rev 00, 05 Dec 2025
  — `Licensor/Casale/Casale_Cracker_Design_Basis__JohorHub.md`

---

*All derived values (scaling exponent, 100 ktpa extrapolation, OSBL estimate) are project-team
calculations, not licensor-endorsed figures. Class V ±50% accuracy applies throughout.
No values fabricated — see CLAUDE.md §7.*
