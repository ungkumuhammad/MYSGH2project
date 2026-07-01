# KBR H2ACT® vs Duiker AHC — CAPEX & LCOH Comparison at 80 ktpa H₂

**Project:** MYSGH2 — MMHE Johor Hub  
**Prepared:** 2026-06-30  
**Basis:** KBR TIP Rev 0, 23 Dec 2025; Duiker Proposal 122380-00-QUO-0001, 05 Dec 2025  
**No-Fabrication Rule:** Sourced figures cited. Extrapolations, assumptions, and currency conversions explicitly flagged.

---

## 1. Is This an Apple-to-Apple Comparison?

**Short answer: No — significant adjustments are needed before numbers can be placed side by side.**

The table below lists every material difference that distorts a direct comparison.

| # | Dimension | KBR H2ACT® | Duiker AHC | Impact on comparison |
|---|-----------|------------|-----------|----------------------|
| 1 | **CAPEX scope** | **ISBL only** — excludes EPC mark-up framing | **LSTK (Lump-Sum Turnkey)** — includes equipment + engineering + installation + piping + electrical + civil + commissioning + start-up + construction licence | Duiker's number is *structurally more complete* than KBR's ISBL; KBR must add OSBL + EPC contingencies to reach TIC |
| 2 | **OSBL included?** | No | No (flare, storage, control room excluded by both) | Comparable exclusion on this axis |
| 3 | **Capacity quoted** | **80 ktpa H₂** — directly stated | **12 ktpa H₂** only — must be **extrapolated** to 80 ktpa; no second data point available | Duiker 80 ktpa CAPEX is *derived*, not quoted |
| 4 | **Currency** | **USD** | **EUR** | Requires EUR/USD assumption (see §2.1) |
| 5 | **Estimate accuracy** | ±50% (Class V) | ±40% | Duiker slightly tighter, but both are order-of-magnitude |
| 6 | **Reference date** | Q3 2025, no forward escalation | Dec 2025, no forward escalation | Broadly same — negligible difference |
| 7 | **NH₃ consumption** | **6.35 t NH₃/t H₂** (100% NG fuel mode) | **7.03 t NH₃/t H₂** (NH₃ fired, base case) | Duiker consumes **~11% more NH₃** per kg H₂ — dominant LCOH driver at high NH₃ price |
| 8 | **Fuel mode** | 100% NG mode (for quoted LCOH) — uses NG supplement → slightly lower NH₃ consumption | 100% NH₃ fired (no external fuel at all) | Different fuel choices — NG-mode KBR has CO₂ emissions; NH₃-fired Duiker is zero-carbon |
| 9 | **H₂ delivery pressure** | **28 barg** | **50 barg** (reduced to 20 barg for this project) | Duiker produces at higher pressure — no compression needed; could be advantage depending on pipeline design |
| 10 | **Utilities required** | Cooling water (25 t/t H₂), steam system, demineralised water | **No cooling water, no steam, no demineralised water** | Duiker OSBL is simpler — KBR OSBL includes cooling tower, water treatment; Duiker's lower OSBL cost is NOT captured in either CAPEX number |
| 11 | **OPEX structure** | Includes **all** NH₃ feedstock cost explicitly | €2.9M/yr OPEX likely **excludes** main NH₃ feedstock — must add separately (see §3.2) | OPEX figures are not directly comparable without adjustment |
| 12 | **Reactor architecture** | SMR-lineage radiant furnace — well-proven but requires many burners, steam circuit | Convective reactor — no radiation damage, 200,000 hr tube life claimed, purpose-built | Different risk profiles; Duiker has no integrated commercial reference at 80 ktpa scale |

> **Bottom line on comparability:** The CAPEX figures can be brought onto a common basis with stated assumptions (§2). The LCOH can be reconstructed from first principles (§3). However, the residual non-cost differences (utility systems, fuel carbon intensity, commercial maturity) mean the comparison is economic only — technology risk and OSBL infrastructure cost differences must be assessed separately.

---

## 2. CAPEX Comparison at 80 ktpa

### 2.1 Assumptions Required

| Assumption | Value | Flagged as |
|------------|-------|-----------|
| EUR/USD exchange rate | **1.08** | **Assumption A2** — approximate Q4 2025 market rate; a ±5% move changes Duiker's USD figure by ±5% |
| Duiker scaling exponent | **n = 0.60** (classical six-tenths rule) | **Assumption A3** — Duiker provides only one CAPEX data point (12 ktpa); n cannot be derived from data; 0.6 used as default; sensitivity shown |
| KBR OSBL at 80 ktpa | **~35% of ISBL** | **Assumption A4** — KBR states 55% at 12 ktpa, "reduces at larger capacity"; 35% is interpolated for 80 ktpa (between 55% at 12 ktpa and implied lower % at 80 ktpa); unconfirmed |

### 2.2 KBR CAPEX at 80 ktpa — Quoted and Adjusted

| Item | Value | Source |
|------|-------|--------|
| ISBL TIC | **$209M** | KBR TIP §4.1, quoted, Q3 2025 Class V ±50% |
| OSBL (Assumption A4: 35% of ISBL) | ~$73M | Derived — unconfirmed |
| **Total TIC (ISBL + OSBL)** | **~$282M** | Derived |
| Unit ISBL cost | $2.61/kg H₂/yr | Derived |
| Unit total TIC cost | ~$3.53/kg H₂/yr | Derived |

### 2.3 Duiker CAPEX at 80 ktpa — Extrapolated

Starting point: €47M LSTK at 12 ktpa (quoted, ±40%).

Scaling: CAPEX₈₀ = €47M × (80/12)^n

| Scaling exponent n | Duiker CAPEX at 80 ktpa (EUR) | Duiker CAPEX at 80 ktpa (USD, A2: ×1.08) |
|-------------------|-------------------------------|------------------------------------------|
| n = 0.50 | €121M | **$131M** |
| **n = 0.60 (A3, base)** | **€160M** | **$173M** |
| n = 0.70 | €211M | **$228M** |

> Note: Duiker's design uses 4 reactors per full-scale train (276 TPD ≈ 97 ktpa). At 80 ktpa (229 TPD), approximately 3.3 reactor units are needed — essentially approaching but slightly below one full standard train. This suggests the actual CAPEX at 80 ktpa may be close to the full-train price. The n=0.60 extrapolation gives €160M; a full-train price could be somewhat higher or lower depending on Duiker's actual pricing for the complete train.

**Duiker LSTK base estimate at 80 ktpa: ~$173M (range $131M–$228M, ±40% on top)**

### 2.4 Side-by-Side CAPEX Comparison

| | **KBR H2ACT®** | **Duiker AHC** |
|--|----------------|----------------|
| **CAPEX figure** | $209M ISBL TIC (quoted) | $173M LSTK (extrapolated, n=0.6) |
| **Accuracy** | ±50% | ±40% on source + extrapolation uncertainty |
| **Scope** | ISBL only | LSTK (closer to total ISBL TIC incl. EPC) |
| **Adjusted total TIC (ISBL+OSBL)** | ~$282M (Assumption A4) | ~$173M + smaller OSBL* |
| **Duiker OSBL** | — | Flare + storage + control room only; no cooling tower, no water treatment |

*Duiker's OSBL is materially smaller because there is no cooling tower or steam/water treatment system. A rough estimate: Duiker OSBL might be 10–15% of LSTK (vs KBR's ~35%), so ~$17–$26M additional, giving **Duiker total TIC ~$190–$200M**.

**Preliminary verdict on CAPEX:** On a like-for-like total-TIC basis, **Duiker appears cheaper at 80 ktpa (~$190–200M vs KBR ~$282M)**. However, this rests on the scaling assumption (A3) which carries high uncertainty — if Duiker scales at n=0.7, the gap narrows significantly. The ±40–50% accuracy bands of both estimates substantially overlap in absolute terms.

---

## 3. LCOH Comparison at 80 ktpa

### 3.1 Common Assumptions for LCOH Build

| Parameter | Value | Notes |
|-----------|-------|-------|
| Plant life | 25 years | Per KBR basis; applied to both |
| Discount rate | 8% | Per KBR basis; applied to both |
| Capital recovery factor (CRF, 8%, 25yr) | 0.09368 | Standard annuity formula |
| Operating days | 350 d/yr | Per KBR; Duiker not specified — assumed same |
| NH₃ price scenarios | $500/t and $950/t (USD) | KBR's base and mid cases; Duiker quoted €600/t ≈ $648/t |
| EUR/USD | 1.08 | Assumption A2 |
| Electricity price | $140/MWh | Per KBR; applied to both |
| NG price | $30/MWh | Per KBR (NG-mode cases only) |

### 3.2 OPEX Structure Clarification

**KBR OPEX** (from TIP, 80 ktpa, 100% NG mode, NH₃ @ $500/t): **$278.4M/yr total** — this includes all NH₃ feedstock cost (for cracking and for fuel).

**Duiker OPEX** (from proposal, 12 ktpa): **€2.9M/yr** — this is interpreted as **excluding main NH₃ feedstock cost**. Rationale: at 12 ktpa, total NH₃ consumed = 7.03 × 12,000 = 84,360 t/yr. At €600/t, that is €50.6M/yr — incompatible with a €2.9M total OPEX line that includes "Ammonia as fuel." The €2.9M is therefore the non-feedstock OPEX (utilities exc. NH₃, labour, maintenance, catalyst).

> **Assumption A5:** Duiker's quoted €2.9M/yr OPEX at 12 ktpa excludes the main NH₃ feedstock cost. NH₃ feedstock is added separately at the price assumption. This assumption is flagged for confirmation with Duiker.

### 3.3 LCOH Build — 80 ktpa

H₂ production: 80,000 t/yr

#### KBR H2ACT® (80 ktpa, 100% NG mode)

| Item | Value | Source |
|------|-------|--------|
| Total CAPEX (ISBL+OSBL, A4) | $282M | §2.4 derived |
| Annualised CAPEX | $282M × 0.09368 = **$26.4M/yr** | Derived |
| Total OPEX (incl. all NH₃) at $500/t | **$278.4M/yr** | KBR TIP (quoted) |
| Total annual cost | $304.8M/yr | |
| **LCOH at $500/t NH₃** | $304.8M / 80,000 = **$3.81/kg H₂** | Matches KBR quoted figure ✓ |
| Total OPEX (incl. all NH₃) at $950/t | **$507.1M/yr** | KBR TIP (quoted) |
| Total annual cost at $950/t | $533.5M/yr | |
| **LCOH at $950/t NH₃** | $533.5M / 80,000 = **$6.67/kg H₂** | Matches KBR quoted figure ✓ |

*KBR quoted LCOH figures already include their OSBL assumption (~55% at small scale, less at large). The above reconciles correctly, confirming methodology.*

#### Duiker AHC (80 ktpa, NH₃ fired, extrapolated)

| Item | Value | Basis |
|------|-------|-------|
| Total CAPEX (LSTK + OSBL) | ~$195M | §2.4 midpoint estimate |
| Annualised CAPEX | $195M × 0.09368 = **$18.3M/yr** | Derived |
| NH₃ feedstock (7.03 t/t H₂ × 80,000 t/yr) | 562,400 t NH₃/yr | Derived from Duiker KPI |
| NH₃ cost at $500/t | $281.2M/yr | |
| NH₃ cost at $950/t | $534.3M/yr | |
| Non-feedstock OPEX at 80 ktpa (scale €2.9M at n=0.6): | €2.9M×(80/12)^0.6 = €9.9M ≈ **$10.7M/yr** | Extrapolated from Duiker quote, Assumption A3 |
| **Total annual cost at $500/t NH₃** | $18.3 + $281.2 + $10.7 = **$310.2M/yr** | |
| **LCOH at $500/t NH₃** | $310.2M / 80,000 = **$3.88/kg H₂** | Derived |
| **Total annual cost at $950/t NH₃** | $18.3 + $534.3 + $10.7 = **$563.3M/yr** | |
| **LCOH at $950/t NH₃** | $563.3M / 80,000 = **$7.04/kg H₂** | Derived |

### 3.4 LCOH Summary Table

| NH₃ Price | **KBR H2ACT® (NG mode)** | **Duiker AHC (NH₃ fired)** | Delta (Duiker minus KBR) | Winner |
|-----------|--------------------------|---------------------------|--------------------------|--------|
| $500/t | **$3.81/kg H₂** | **$3.88/kg H₂** | +$0.07/kg (+1.8%) | KBR (marginal) |
| $648/t (≈€600) | ~$4.94/kg H₂* | ~$5.05/kg H₂ | +$0.11/kg (+2.2%) | KBR (marginal) |
| $950/t | **$6.67/kg H₂** | **$7.04/kg H₂** | +$0.37/kg (+5.5%) | KBR |

*KBR at $650/t NH₃ interpolated from sensitivity table in TIP.

> The LCOH gap widens as NH₃ price rises because **Duiker burns ~11% more NH₃ per kg H₂** than KBR in NG mode. The feedstock term dominates LCOH (~90% of total cost at $500/t NH₃), so the efficiency difference — though modest — is economically significant at high NH₃ prices.

---

## 4. Non-Cost Factors That Affect the "True" Comparison

Even if costs were equal, the following factors differentiate the choice:

| Factor | KBR | Duiker | Significance for MMHE |
|--------|-----|--------|----------------------|
| **Commercial references at 80 ktpa** | LPED/FEED done for 219 TPD Hanwha Korea; 10 TPD ISU demo from 2026 | No integrated commercial reference; Ammonex pilot ongoing | **Bankability risk**: lenders will require references |
| **Carbon intensity** | 0.80 kg CO₂/kg H₂ (NG mode) | **0 kg CO₂/kg H₂** (NH₃ fired) | If Singapore demands zero-CI hydrogen, KBR NG mode fails; KBR clean-fuel mode or Duiker needed |
| **Cooling water infrastructure** | Requires cooling tower — significant OSBL cost and site space | None required | At MMHE coastal site, seawater cooling is possible for KBR; Duiker eliminates the system entirely |
| **NOx** | <10 ppmv with SCR (standard) | **<5 ppmv with small SCR** (inherently lower before SCR due to SCO) | Both compliant; Duiker has headroom |
| **Turndown** | 40% | Not explicitly stated (derived from modular reactor sizing) | Operationally similar |
| **First-of-kind risk** | Lower — SMR furnace technology well-proven | Higher — convective reactor + SCO not yet operated together at commercial scale | KBR has lower technology risk at this stage |

---

## 5. Conclusions

### On CAPEX
On a total-TIC basis (including OSBL), **Duiker appears lower cost at 80 ktpa (~$190–200M vs KBR ~$282M)** — but this conclusion rests on a single-point extrapolation from Duiker's 12 ktpa quote and assumes a standard n=0.6 scaling law. The ±40–50% accuracy bands mean the true values could overlap significantly.

### On LCOH
At all NH₃ price scenarios, **KBR is marginally cheaper in LCOH** ($0.07–0.37/kg cheaper), driven by lower NH₃ consumption per kg H₂. The gap grows with NH₃ price. However, if KBR must operate in clean-fuel mode (no NG) to meet Singapore's zero-CI requirement, NH₃ consumption rises to 7.20 t/t H₂ (slightly above Duiker's 7.03), and the LCOH advantage reverses in favour of Duiker.

### On Comparability
This is **not apple-to-apple** on five material dimensions: (1) CAPEX scope, (2) Duiker data requires extrapolation, (3) OPEX structures differ, (4) currencies differ, (5) fuel modes compared are not equivalent in carbon intensity. Any comparative use of these numbers should carry these caveats.

---

## 6. What Is Needed to Make It Apple-to-Apple

| Action | Owner | Priority |
|--------|-------|----------|
| Request Duiker to provide CAPEX for 80 ktpa (or 276 TPD full-scale train) | Project team → Duiker | **High** |
| Confirm whether Duiker's €2.9M OPEX includes or excludes NH₃ feedstock | Project team → Duiker | **High** |
| Align fuel mode for comparison: either both NG-mode or both clean-fuel/NH₃-fired | Project team decision | **High** |
| Obtain KBR OSBL breakdown for 68–80 ktpa cases | Project team → KBR | High |
| Fix EUR/USD rate to a project-specific basis (e.g. hedged rate or spot at FID) | Finance | Medium |
| Agree on CI target for Singapore offtake (if zero-CI required, KBR NG mode is excluded) | Project team / Gentari | High |

---

## 7. Assumptions Register (this document)

| ID | Assumption | Value | To confirm |
|----|-----------|-------|-----------|
| A2 | EUR/USD exchange rate | 1.08 | Finance team / project FX basis |
| A3 | Duiker scaling exponent (n) | 0.60 (six-tenths rule) | Duiker to provide 80 ktpa or full-train CAPEX |
| A4 | KBR OSBL at 80 ktpa | 35% of ISBL | KBR to provide explicit OSBL breakdown |
| A5 | Duiker €2.9M/yr OPEX excludes main NH₃ feedstock | Assumed | Confirm with Duiker in next engagement |

All assumptions recorded in `memory.md`.

---

## 8. References

- KBR H2ACT® TIP Rev 0, 23 Dec 2025 — `Licensor/kbr/kbr-johor-hub.md`
- Duiker AHC Budgetary Proposal 122380-00-QUO-0001, 05 Dec 2025 — `Licensor/duiker/duiker-johor-hub.md`
- Earlier CAPEX analysis (100 ktpa extrapolation) — `analysis/ammonia_cracker_capex_100ktpa.md`
