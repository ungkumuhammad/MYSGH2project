# DECK SOURCE — Combined Cycle: Gas Turbine (GT) vs. Gas Engine (GE)
## From global technology baseline → data-centre reality → the MYSGH2 100 MW decision

> **Purpose of this file:** structured, design-ready source content for building a
> PowerPoint deck in Claude Design. Each numbered block = **one slide**. Every
> slide carries a *Key message* (the single sentence the slide must land), *Body*
> (the content), and *Visual* (what the designer should draw).
>
> **Date:** 2026-07-28 · **Status:** Rev 0 (deck source, not yet presented)
> **Basis:** net electrical, **LHV**, unless stated otherwise.
> **No-Fabrication Rule (CLAUDE.md §7):** every quantitative cell is tagged
> 🟢 SOURCED · 🔵 DERIVED (shown calculation) · 🟡 ASSUMPTION · 🔴 NOT PUBLISHED.
> Nothing on any slide is invented. Do not add numbers during design.

---

## ⚠️ TERMINOLOGY WARNING — read before designing

This deck uses **"GE" to mean Gas Engine** (reciprocating internal-combustion
engine), per the project's convention. **"GE Vernova" is a company** (turbine
OEM, formerly General Electric). These are unrelated. **Never abbreviate GE
Vernova to "GE" anywhere in the deck.** Suggested on-slide convention:

- **GT** = Gas Turbine · **CCGT** = Combined-Cycle Gas Turbine
- **GE** = Gas Engine · **RICE** = Reciprocating Internal Combustion Engine
- Always write **"GE Vernova"** in full when naming the OEM.

---

## DECK META

| Item | Value |
|---|---|
| **Objective** | Outline the difference between **combined cycle for GT** and **combined cycle for GE**, then apply it to a 100 MW data-centre IPP decision |
| **Audience** | Project sponsor / IPP investment committee (domain-expert — do not over-simplify the engineering) |
| **Narrative arc** | Physics → global market reality → what data centres actually buy → our 100 MW case → recommendation |
| **Slide count** | ~25 content slides + appendix |
| **Tone** | Technical, evidence-led, honest about gaps. Flag unknowns rather than smoothing them over |
| **Design system** | Reuse the provenance colour convention already used in `NH3_ammonia_energy_pathway_infographic.html`: green = sourced, blue = derived, amber = assumption, red = not published |

---
---

# SECTION 1 — THE CORE PHYSICS: WHY COMBINED CYCLE MEANS SOMETHING DIFFERENT TO EACH MACHINE

*(This is the intellectual heart of the deck. If the audience takes away only
one section, make it this one.)*

---

## SLIDE 1 — Title

**Title:** Combined Cycle: Gas Turbine vs. Gas Engine
**Subtitle:** Technology baseline, global utilisation, data-centre practice, and the 100 MW decision
**Footer:** MYSGH2 Project · 2026-07-28 · Rev 0

**Visual:** Split-screen hero. Left = gas turbine + HRSG + steam turbine train.
Right = a bank of reciprocating engines feeding individual WHR boilers into one
shared steam turbine. Single shared visual language for "steam island."

---

## SLIDE 2 — The question this deck answers

**Key message:** "Combined cycle" is not one technology — it is a *bolt-on* that
transforms one machine and only mildly improves the other.

**Body:**
Three questions, answered in order:
1. What does adding a bottoming cycle actually **do** to a GT vs. a GE?
2. Which does the **world** use, at what scale, and in what proportion?
3. Which do **data centres** buy — and which should **our 100 MW project** buy?

**Visual:** Three-step chevron / numbered path across the slide.

---

## SLIDE 3 — Baseline: what each machine does in SIMPLE cycle

**Key message:** In simple cycle, the **gas engine wins decisively** — by 10–14
efficiency points.

**Body table:**

| | **Gas Turbine (simple cycle)** | **Gas Engine (simple cycle)** |
|---|---|---|
| Net efficiency (LHV) | **≈35–37 %** typical F-class 🔵 *derived, see slide 5* · **34.8 %** MHI H-25 class 🟡 *(repo anchor — NG basis, see caveat slide 21)* | **≈46–49 %** 🟢 · Wärtsilä 34SG = **48.9 %** 🟢 |
| Combustion | Continuous, Brayton cycle | Intermittent, Otto/dual-fuel cycle |
| Exhaust temperature | **500–700 °C** 🟢 | **350–400 °C** 🟢 *(some CHP sources cite 850–1,200 °F ≈ 454–649 °C — see slide 6 discrepancy flag)* |
| Where the waste heat goes | Almost all out the **exhaust**, at high grade | **Split**: exhaust (30–50 % of waste heat) + jacket water, lube oil, charge-air cooling (low grade, 82–110 °C) 🟢 |

**Design note:** Put the 46–49 % vs 35–37 % contrast in a large, bold callout.
This is the setup for the reversal on slide 7.

---

## SLIDE 4 — The physics: heat *grade*, not heat *quantity*

**Key message:** A bottoming cycle can only harvest **high-grade** heat — and
that is precisely what a gas turbine has in abundance and an engine does not.

**Body:**
- A gas turbine is electrically *less* efficient in simple cycle, so **more than
  60 % of its fuel energy leaves as heat** — and it leaves in **one stream, at
  500–700 °C**. 🟢
- A gas engine is electrically *more* efficient, so it rejects **less** heat
  (60–70 % of fuel input as waste heat total) 🟢 — but that heat is **fragmented**:
  roughly half is exhaust at high temperature, and the rest is **jacket water,
  lube oil and intercooler heat at 82–110 °C**, which is far too cold to raise
  useful steam-turbine steam. 🟢
- Consequence, stated by the CHP literature: **gas turbines make 2–3× more steam
  available per kW than a reciprocating engine.** 🟢

**Visual (important — this is the money graphic):** Two Sankey diagrams side by
side, same width. GT: one fat, hot (red) exhaust arrow → big steam island.
GE: a bigger electricity arrow, a medium hot exhaust arrow, and **two or three
small lukewarm (blue) arrows** going nowhere useful. The visual should make the
"fragmented, low-grade" point without words.

---

## SLIDE 5 — What combined cycle *adds*: the two uplifts, quantified

**Key message:** Combined cycle adds **~20 points to a gas turbine** but only
**~5 points to a gas engine**.

**Body — shown calculations (do not alter):**

**Gas turbine — GE Vernova 6F.03** 🔵 *derived from 🟢 sourced specs*
```
SC net output           = 88 MW              🟢 (6F.03 fact sheet)
1×1 CC net output       = 135 MW             🟢 (6F.03 fact sheet)
CC net efficiency       > 57 %               🟢 (6F.03 fact sheet)
→ implied fuel input    = 135 MW ÷ 0.57      = 236.8 MWth      🔵
→ implied SC efficiency = 88 MW ÷ 236.8 MWth = 37.2 %          🔵
⇒ COMBINED-CYCLE UPLIFT ≈ 37 % → 57 %        = +20 points      🔵
   (the steam turbine adds ~47 MW, i.e. +53 % more power from the same fuel) 🔵
```

**Gas engine — Wärtsilä Flexicycle** 🔵 *derived from 🟢 sourced specs*
```
Engine SC efficiency    = 48.9 %  (34SG)     🟢
Flexicycle CC efficiency> 54 %  (ISO)        🟢
⇒ COMBINED-CYCLE UPLIFT ≈ 49 % → 54 %        = +5 points       🔵
CROSS-CHECK: Wärtsilä states the Flexicycle upgrade improves plant
efficiency "by up to 10 %" (relative) 🟢 → 48.9 % × 1.10 = 53.8 % ≈ 54 % ✓ 🔵
   — two independently sourced figures that agree. High confidence.
```

**Visual:** Two vertical bar-pairs (SC → CC) with the delta annotated as a big
arrow. Make the GT arrow ~4× the height of the GE arrow. Same y-axis scale for
both — the visual asymmetry *is* the message.

---

## SLIDE 6 — Architecture: the two combined cycles are physically different

**Key message:** A CCGT is **one big steam island on one exhaust**. A Flexicycle
is **many small boilers feeding one shared steam turbine** — and each one can be
switched off independently.

**Body table:**

| | **CCGT (turbine combined cycle)** | **Flexicycle (engine combined cycle)** |
|---|---|---|
| Heat source | **One** GT exhaust duct | **One WHR steam generator per engine**, all piped to **common steam turbine generator sets** 🟢 |
| Modularity of the bottoming cycle | None — the steam island serves the single train | **Steam production can be turned on and off individually for each generating set** 🟢 |
| Effect on flexibility | Adds start-up time (HRSG/steam warm-up); erodes the GT's dispatch agility | **Retains simple-cycle dynamics** — Wärtsilä's stated design intent: "combines the flexibility of a simple cycle plant with the high efficiency of a combined cycle" 🟢 |
| Resulting efficiency | **57 % (6F.03 class) → up to ~64 % (H-class)** 🟢 | **>54 % ISO** 🟢 |
| Water | CCGT recirculating ≈ **780 L/MWh** 🟢 | Flexicycle ≈ **409 L/MWh** 🟢 (vs engine SC **<5 L/h** 🟢) |

**⚠️ Honest flag to keep on the slide (small type):** Published engine exhaust
temperatures conflict between sources — general comparative literature cites
**350–400 °C**, while CHP-specific sources cite **850–1,200 °F (≈454–649 °C)**.
The *direction* (engine exhaust is cooler and its waste heat is more fragmented
than a GT's) is consistent across all sources; the exact figure is not settled
and should be confirmed per specific engine model before design use.

**Visual:** Two P&ID-style schematics, simplified. Emphasise the **N parallel
WHR boilers → 1 steam turbine** topology on the engine side, with a small
on/off valve icon on each boiler.

---

## SLIDE 7 — ⭐ THE REVERSAL (the deck's central insight)

**Key message:** **Simple cycle, the engine wins. Combined cycle, the turbine
wins.** Combined cycle is where the gas turbine's weakness becomes its strength.

**Body — the crossover table:**

| Configuration | **Gas Turbine** | **Gas Engine** | **Winner** |
|---|---|---|---|
| **Simple cycle** | ≈35–37 % 🔵 | **46–49 %** 🟢 | **ENGINE by ~10–14 pts** |
| **Combined cycle** | **57 % (6F.03) → ~64 % (H-class)** 🟢 | ≈54 % (Flexicycle) 🟢 | **TURBINE by ~3–10 pts** |

**The one-sentence takeaway for the slide:**
> The gas turbine rejects more heat, at a higher grade — so it has more to
> recover. The bottoming cycle does not merely improve the turbine; it is what
> makes the turbine competitive at all.

**⚠️ Caveat that must appear on the slide:** The engine's combined-cycle figure
(>54 %) is **natural-gas basis only**. No OEM has demonstrated a Flexicycle-class
**ammonia** engine plant. 🔴 On ammonia, the engine-CC option does not currently
exist as a buyable product.

**Visual:** A single crossing-lines chart — x-axis: [Simple Cycle → Combined
Cycle], y-axis: efficiency %. Two lines crossing. Annotate the crossing point.
This should be the most memorable image in the deck.

---

## SLIDE 8 — But efficiency is not the only axis

**Key message:** The turbine wins combined-cycle efficiency; the engine keeps
**five structural advantages** that combined cycle does not take away.

**Body:** *(all from the repo master matrix, `NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md` §1)*

| Axis | Winner | Evidence |
|---|---|---|
| **Part-load efficiency** | **Engine** — stays **>46 %** via multi-unit staging; GT falls off (Wärtsilä cites **<36 %** for aeroderivatives at part load) | 🟢 ⚠️ *Wärtsilä's own comparison, and it is against **aeroderivative** GTs, not CCGTs — directionally right, not a CCGT number* |
| **Modularity / N+1** | **Engine** — one unit of ~20 down ≈ **5 % capacity loss**; a CCGT trip = **100 %** loss without a second train | 🟢 architectural |
| **Start time / black start** | **Engine** — **~2 min to full load**, black-start capable; CCGT cold start = tens of minutes | 🟢 (NG basis) |
| **Water consumption** | **Engine** — SC **<5 L/h** vs CCGT **~780 L/MWh** | 🟢 |
| **Tropical ambient derate** | **Engine** — GT loses **~0.4 % power per °F** above 59 °F (≈5–10 % per 10 °C); turbocharged engines far less sensitive | 🟢 |
| **Footprint per MW** | **Turbine** — **0.111–0.139 acres/MW** vs engine **0.33–0.56 acres/MW** | 🟢/🔵 *(see `NH3_powerplant_land_footprint_study.md`)* |

**Visual:** Radar/spider chart, two overlaid polygons. Or a simple two-column
"win" tally with icons.

---
---

# SECTION 2 — TECHNICAL SPECS, COMMERCIAL USE, AND GLOBAL UTILISATION SPLIT

---

## SLIDE 9 — The hardware: what you can actually buy

**Key message:** Turbines come in **few, large** blocks; engines come in **many,
small** blocks. That single fact drives most downstream differences.

**Body table:**

| | **Gas Turbine** | **Gas Engine** |
|---|---|---|
| Unit size — heavy-duty/frame | **3–480 MW** SC 🟢 (Baker Hughes Frame line 20–130 MW 🟢); GE Vernova / Siemens Energy top end **~570–593 MW** 🟢 | — |
| Unit size — aeroderivative | **~25–50 MW**, up to ~70 MW 🟢 | — |
| Unit size — engine | — | **~1–20 MW/unit**; Wärtsilä 34SG ≈ **10.3 MW**, 50SG ≈ **17.9–18.8 MW** 🔵 *(derived from order MW ÷ unit count, slide 14)* |
| How you reach 100 MW | **1× 6F.03 (88 MW SC)** or **2× LM6000 (~50 MW ea)** 🟢 | **~10× 34SG** or **~5–6× 50SG** 🔵 |
| Reference CC efficiency | 6F.03 1×1 = **135 MW @ >57 %** 🟢; H-class up to **~64 %** 🟢 | Flexicycle **>54 %** 🟢 |
| Reliability benchmark | LM6000: **>99 % start reliability, >98 % availability**, ~60 M fleet operating hours, >1,200 units shipped 🟢 | Modular N+1 is the reliability mechanism rather than per-unit availability |

**Visual:** A horizontal capacity ruler (log scale, 1 MW → 600 MW) with the
product families plotted as bands. Mark the **100 MW project line** vertically
in a highlight colour — it will recur on slide 17.

---

## SLIDE 10 — Global utilisation: the installed reality

**Key message:** Gas turbines are **~97 %** of the world's installed gas-fired
generating capacity. Engines are a small — but fast-growing — remainder.

**Body:**

| Metric | Value | Tag |
|---|---|---|
| Global natural-gas-fired power capacity (end-2024) | **≈1,800 GW** (overwhelmingly turbine-based) | 🟢 |
| GE Vernova installed base alone | **>800 GW / >7,000 turbines**, 120+ countries (~half the world GT fleet) | 🟢 |
| Global reciprocating gas engines | **≈47 GW** across **>72,000 units** (2024, EIA) | 🟢 |
| Annual GT additions, 2015–2024 | **~50 GW/yr** — Asia 50 %, US 20 %, Europe 10 %, LatAm 10 %, Africa 10 % | 🟢 |
| GT orders 2025 vs 2024 | **846 units / 100.3 GW** (2025) vs **399 units / 58.2 GW** (2024) — more than doubled | 🟢 |
| Gas-fired share of global electricity | **~23 %** (2023, IEA/Ember) | 🟢 |

### THE HEADLINE SPLIT 🔵 *derived — shown calculation*
```
Reciprocating gas engines : 47 GW ÷ 1,800 GW  =  2.6 %
Gas turbines (SC + CC)    : remainder          = 97.4 %
```

**⚠️ Two caveats that MUST stay on the slide:**
1. 🟡 **Assumption:** this treats the 47 GW engine figure as a *subset of*, not
   *additive to*, the 1,800 GW total. No single publication states this split
   directly — it is derived from two independently sourced figures.
2. **By market revenue the ranking inverts** — the reciprocating engine market
   is valued **≈$48.8 Bn** vs the gas turbine market **≈$11–23 Bn** 🟢, because
   revenue counts the vast global population of small distributed and backup
   gensets. **Installed GW and market revenue answer different questions — do
   not conflate them.**

**Visual:** A single donut, 97.4 / 2.6, with the two caveats as explicit
footnote callouts (not hidden). Consider a small secondary donut showing the
*inverted* revenue split beside it — the contrast is the honest story.

---

## SLIDE 11 — Where each technology is commercially deployed

**Key message:** The split is not about capability — it is about **role**.

**Body:**

| **Gas Turbine — dominant in** | **Gas Engine — dominant in** |
|---|---|
| Utility-scale grid-connected baseload & mid-merit | Distributed / captive industrial generation |
| Large CCGT merchant & PPA plants | Remote and island grids |
| LNG-exporter and heavy-industry captive power | Landfill gas, biogas, digester gas |
| Peaking (aeroderivative) | Renewables balancing / grid firming |
| **Now: hyperscale data centres (large frame + aero)** | **Now: hyperscale data centres (modular banks)** |

**Proof point — engines do scale to genuine utility baseload:**
> **IPP3, Amman, Jordan — 573 MW from 38 × Wärtsilä 50DF tri-fuel engines.**
> The world's largest internal-combustion power plant, built as an **IPP**. 🟢
> Modular does not mean small.

**Visual:** Two-column comparison with iconography. Pull the IPP3 fact out as a
full-width banner strip beneath.

---

## SLIDE 12 — The 2026 supply-chain reality (this changes the decision)

**Key message:** Turbine capability is not the constraint — **turbine
availability** is.

**Body:**

| Fact | Value | Tag |
|---|---|---|
| Global GT orders (2025) vs global manufacturing capacity | **~100 GW ordered** vs **60–70 GW/yr buildable** | 🟢 |
| GE Vernova backlog | **~80 GW**, stretching into **2029** | 🟢 |
| Large-frame OEM booking status | **>90 % booked for 2028**, **>70 % booked for 2029** | 🟢 |
| Available equipment capacity | **19 GW by 2028** → **49 GW by 2029** → **76 GW by 2030** | 🟢 |
| Lead time — large reciprocating engines | **24–30 months** | 🟢 |
| Lead time — gas turbines | **30+ months**; at one point averaging **~5 years** after order | 🟢 |
| Most recent read (both) | **18–30 months** — *the gap is narrowing* | 🟢 |
| Workaround emerging | **ProEnergy repurposing retired GE CF6-80C2 jet engines** (~50 MW class) into mobile data-centre power packages, explicitly to dodge the turbine queue | 🟢 |

**⚠️ Nuance to keep:** Orders placed in **Q1 2026** for large reciprocating
engines will not deliver until **2028** — putting them in the same 24–30 month
window as turbines and **eliminating the engine's historical speed advantage**. 🟢
Do not present "engines are faster" as a durable truth; it is a 2024–2025 fact
that is actively expiring.

**Visual:** A timeline / Gantt from 2026 → 2030 with two delivery bars
converging. Annotate the "gap closing" region.

---
---

# SECTION 3 — DEEP DIVE: WHAT DO DATA CENTRES ACTUALLY CHOOSE, AND WHY?

---

## SLIDE 13 — The data-centre power land grab, in numbers

**Key message:** This is no longer a hypothetical market — **~101 GW** of on-site
gas generation has been announced by data-centre developers.

**Body:**

| Metric | Value | Tag |
|---|---|---|
| On-site natural-gas generation announced by data-centre developers | **~101 GW** | 🟢 |
| Announced pipeline growth | **~24 GW (early 2025) → ~64 GW (early 2026)** | 🟢 |
| Actually **online** behind-the-meter, mid-2026 | **~2 GW across 4 projects** | 🟢 |
| GE Vernova electrification orders from data centres, Q1 2026 | **More than all of 2025 combined** | 🟢 |

**⚠️ The reality check to keep visible:** ~101 GW *announced* vs **~2 GW
operating**. The gap between announcement and steel in the ground is enormous.
Treat announced pipelines as intent, not capacity.

**Visual:** A funnel — 101 GW announced → 64 GW pipelined → 2 GW online. The
narrowing is the message.

---

## SLIDE 14 — What the engine side has actually won (real orders)

**Key message:** Reciprocating engines are winning **real, large, named
hyperscale contracts** — at 3–5× the size of our 100 MW case.

**Body — Wärtsilä data-centre orders, 2025–2026:** 🟢 *all sourced*

| Announced | Location / project | Configuration | Unit size 🔵 | Total | COD |
|---|---|---|---|---|---|
| Apr 2026 | Ohio hyperscale | **40 × Wärtsilä 34SG** | ~10.3 MW | **412 MW** | early 2028 |
| Jan 2026 | US data-centre plant | **24 × Wärtsilä 50SG** | ~17.9 MW | **429 MW** | late 2028–2029 |
| Nov 2025 | US data centre | **27 × Wärtsilä 50SG** | ~18.8 MW | **507 MW** | 2027 |
| Q2 2025 | Ohio | **15 × Wärtsilä 18V50SG** | ~18.8 MW | **282 MW** | late 2026–2027 |

*Unit sizes 🔵 derived = total MW ÷ unit count.*

**Note for the slide:** the 34SG's data-centre debut was **April 2026** — this
is a brand-new application for that engine, not a long-established one. 🟢

**Visual:** Four stacked bars (412 / 429 / 507 / 282 MW) with a dashed
horizontal line at **100 MW** labelled "our project" — showing our case is a
*fraction* of what is being routinely ordered.

---

## SLIDE 15 — What the turbine side has won

**Key message:** Turbines are winning the **largest** data-centre projects — the
multi-GW campuses.

**Body:**

| Project | Detail | Tag |
|---|---|---|
| **Project Kilby** (Chevron + Microsoft, West Texas) | **~2.7 GW** data centre; majority of power from **large gas turbines supplied by GE Vernova**; first power **2028** | 🟢 |
| **Hawaiian Electric** (grid, not DC — shown as an aero reference) | **6 × LM6000VELOX** packages → **>250 MW** firm power, ordered July 2026 | 🟢 |
| Aeroderivative economics | **50 MW simple-cycle aero installation ≈ $40–60 M** including balance-of-plant → **≈$800–1,200/kW** 🔵 | 🟢/🔵 |
| Bridge-power trend | Data centres and other energy-intensive customers are specifically seeking **smaller aeroderivative models for "bridge power"** | 🟢 |

**Visual:** Contrast card — one giant 2.7 GW block (turbine) vs the four
~300–500 MW engine blocks from slide 14. Scale is the differentiator.

---

## SLIDE 16 — ⭐ The finding that matters most for this deck

**Key message:** Data centres are overwhelmingly buying **SIMPLE CYCLE — not
combined cycle.** The combined-cycle debate is largely *orthogonal* to what the
data-centre market is actually procuring today.

**Body — why:**

| Driver | Effect on the combined-cycle decision |
|---|---|
| **Speed to power is the #1 criterion** | A steam island adds engineering, construction and commissioning time. CC is slower to energise. |
| **Load is flat and 24/7** | Data-centre load is close to constant — this *favours* CC efficiency in principle, and is the one factor pulling the other way. |
| **Water** | CCGT at ~780 L/MWh is a siting liability in water-constrained locations. 🟢 |
| **Modularity matched to load ramp** | Data-centre load grows in steps; engines/aeros can be added in steps. A CCGT is a single coarse commitment. |
| **Observed procurement** | **All four Wärtsilä data-centre orders on slide 14 are simple-cycle engine plants.** 🟢 |

**⚠️ Flag honestly:** Whether Project Kilby's GE Vernova turbines are configured
as **combined cycle is not confirmed** in the sources located. 🔴 Do not assert
it either way on the slide.

**The synthesis line for the slide:**
> Data centres today are optimising for **speed, modularity and water** — not
> for peak thermal efficiency. That is why simple cycle is winning, and it is
> why the engine has been competitive despite losing the combined-cycle
> efficiency contest outright.

**Visual:** A weighted decision-criteria bar — "speed to power," "modularity,"
"water," "footprint," "efficiency" — with efficiency visibly *not* at the top.
Label the axis as observed market behaviour, **not** as a sourced ranking. 🟡

---
---

# SECTION 4 — THE MYSGH2 100 MW CASE

---

## SLIDE 17 — Defining the case

**Key message:** 100 MW firm, round-the-clock, for a data-centre offtake — on
natural gas **now**, with a credible path to green ammonia / hydrogen **later**.

**Body:**

| Parameter | Value | Tag |
|---|---|---|
| Net capacity | **100 MW** | Given by user |
| Duty | Round-the-clock firm supply to a data centre | Given by user |
| Commercial model | Independent Power Producer (IPP) | Given by user |
| Near-term fuel | Natural gas | Deck scope |
| Target fuel | Green NH₃ (P2) or cracked H₂ from MMHE (P1) | memory.md §4 |
| Capacity factor for fuel calcs | **90 % = 7,884 h/yr** | 🟡 **ASSUMPTION** |
| Reference NH₃ stream | **650 ktpa** (P1/P2 studies) | memory.md §4 |

**Visual:** A simple project card / spec sheet.

---

## SLIDE 18 — How each technology builds 100 MW

**Key message:** At 100 MW, the turbine is **one machine**; the engine plant is
**a bank of ten**.

**Body:**

| | **Gas Turbine route** | **Gas Engine route** |
|---|---|---|
| **Simple cycle** | **1 × GE Vernova 6F.03 = 88 MW** 🟢 — a near-exact single-unit fit. Or **2 × LM6000 ≈ 100 MW** 🟢 | **~10 × Wärtsilä 34SG** (~10.3 MW ea) or **~5–6 × 50SG** (~17.9–18.8 MW ea) 🔵 |
| **Combined cycle** | **1 × 6F.03 1×1 CC = 135 MW @ >57 %** 🟢 — *oversized for 100 MW; the nearest standard train* | **Flexicycle**: same engine bank + per-engine WHR boilers + shared steam turbine → **>54 %** 🟢 |
| Redundancy at 100 MW | Single train — one trip = **100 % loss** | **N+1 intrinsic** — one unit down ≈ **10 %** loss (10-unit case) 🔵 |
| Land 🔵 *derived from footprint study* | **11.1–13.9 acres** (0.111–0.139 ac/MW × 100) | **33–56 acres** (0.33–0.56 ac/MW × 100) |
| Water at 90 % CF 🔵 *shown calc* | CCGT: 100 MW × 7,884 h × 780 L/MWh = **≈615,000 m³/yr** | Engine SC: **<5 L/h** ≈ negligible; Flexicycle ≈ 409 L/MWh ≈ **322,000 m³/yr** |

**⚠️ Sizing flag:** Neither combined-cycle option lands cleanly on 100 MW. The
6F.03 1×1 CC is **135 MW (35 % oversized)**; the 6F.03 SC is **88 MW (12 %
undersized)**. The engine plant is the only route that hits **exactly 100 MW**
by unit count. This is a real, decision-relevant granularity advantage. 🔵

**Visual:** Two plot-plan sketches to the same scale — a compact turbine island
vs a long engine hall — with the acreage figures and a 100 MW dashed boundary.

---

## SLIDE 19 — The ammonia/hydrogen future-fuel view

**Key message:** On the clean-fuel pathway, the turbine has a **stated OEM
roadmap**; the engine has **no stationary product at all**.

**Body:** *(from `NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md`)*

| | **Gas Turbine on NH₃** | **Gas Engine on NH₃** |
|---|---|---|
| Demonstrated % NH₃ | **100 %** — IHI IM270, 2 MW, **~3,000 h** endurance incl. load rejection/dump 🟢 | **~95 %** energy share (5 % pilot fuel) 🟢 |
| Highest stationary TRL | **TRL 7–8** 🟢 | **TRL 5–6 stationary** (marine 7–8) 🟢 |
| Largest frame demonstrated | **F-class (6F.03 / 7F / 9F)** combustion hardware, full scale, 100 % NH₃, **Mar 2026** 🟢 | ~3.1 MW/unit (W25 A) 🟢 |
| Commercial availability | **~2030** for F-class retrofit combustor 🟢 | **≥2028**, marine-first; **no stationary ammonia genset exists** 🔴 |
| N₂O (GWP ≈273×) | **>99 % GHG cut incl. N₂O**, destroyed **in the combustor** via two-stage rich-lean 🟢 | ~20 ppm untreated → 2–10 ppm **with a dedicated catalyst** 🟢 |
| After-treatment train | Combustor staging + DeNOx | **Three catalyst beds**: SCR + AMOX/ASC + N₂O 🟢 |
| Singapore precedent | **EMA/MPA/Keppel Jurong Island: 55–65 MW, direct NH₃ combustion in a gas turbine plant**, in FEED 🟢 | **None** 🟢 |
| Combined cycle on NH₃ | NH₃ CCGT ≈**50–51 %** 🔵; **cracked-NH₃ CC ≈54 %** 🟢 *(needs GT waste-heat integration)* | **Flexicycle on ammonia has never been shown** 🔴 |

### ⭐ THE STRATEGIC HOOK
> The **GE Vernova 6F.03** — the exact ~88 MW frame that is a clean single-unit
> fit for 100 MW on natural gas **today** — is in **the same frame family
> (6F.03 / 7F / 9F) that IHI and GE Vernova are targeting for a retrofittable
> 100 %-ammonia combustion system by 2030.** 🟢
>
> A 100 MW IPP built now on a 6F.03 is therefore a plausible **ammonia-retrofit
> candidate rather than a stranded asset.**
>
> **⚠️ This is NOT an OEM commitment.** 🟡 It is a frame-family match between a
> product available today and a published roadmap target. Raise it as an explicit
> procurement requirement with GE Vernova / IHI — do not assume it.

**Visual:** A timeline 2026 → 2030 → 2035. Turbine track: buy 6F.03 on NG (2028)
→ retrofit combustor (2030+) → 100 % NH₃. Engine track: no stationary product →
question mark. Colour the uncertainty honestly.

---

## SLIDE 20 — Fuel consumption at 100 MW: what the efficiency gap costs

**Key message:** A 100 MW ammonia block consumes **roughly half** of the entire
650 ktpa P1/P2 reference stream.

**Body — 🔵 shown calculation** *(scaled ×2 from the 50 MW table in the master
matrix §3; NH₃ LHV 18.6 MJ/kg; 🟡 90 % CF = 7,884 h/yr)*

| Case | Net eff. (LHV) | **NH₃ per year** | **% of 650 ktpa stream** 🔵 |
|---|---|---|---|
| Engine plant, SC (low) | 46.0 % | **332 ktpa** | 51 % |
| Engine plant, SC (mid) | 47.5 % | **322 ktpa** | 50 % |
| Engine plant, SC (high) | 49.0 % | **312 ktpa** | 48 % |
| **NH₃ CCGT (low)** | 50.0 % | **306 ktpa** | 47 % |
| **NH₃ CCGT (high)** | 51.0 % | **300 ktpa** | 46 % |
| *Cracked-NH₃ CC (literature)* | *54.0 %* | ***282 ktpa*** | *43 %* |

**Read:**
- Turbine CC vs engine SC saves **≈16–22 ktpa** of ammonia — **~6 % of the fuel
  bill, every year, for plant life.** 🔵
- Cracked-NH₃ CC vs engine SC saves **≈40 ktpa (~12 %)**. 🔵
- **Strategic implication:** at 100 MW this single block absorbs **~half the
  reference ammonia stream** — materially larger than the 23–26 % a 50 MW block
  took. Fuel supply, not equipment, may become the binding constraint.

**Visual:** Horizontal bars of ktpa, with a 650 ktpa reference bar behind them
showing the fraction consumed. The "half the stream" visual is the point.

---

## SLIDE 21 — What we do NOT know (put this in the deck, do not bury it)

**Key message:** Three gaps sit underneath these numbers. They must be closed
before any investment-grade decision.

**Body:**

| # | Gap | Why it matters | Status |
|---|---|---|---|
| 1 | **H-25 34.8 % simple-cycle efficiency is not confirmed as ammonia-specific** — no MHI source states an NH₃-specific SC efficiency; the figure appears to be the natural-gas class spec carried over | Underwrites the entire P1-vs-P2 turbine-efficiency ranking | 🟡 **Needs direct OEM query** |
| 2 | **NH₃ CAPEX premium — unpublished on BOTH technologies** | No $/kW comparison on ammonia is possible today. The H₂ premium (**+8.5 % on GT subsystem**) **must not be transferred to NH₃** — ammonia needs a different combustor *and* a DeNOx/N₂O train | 🔴 **NOT PUBLISHED** |
| 3 | **Engine combined cycle on ammonia has never been demonstrated** | If an OEM offers a Flexicycle-class ammonia plant at ~54 %, the efficiency argument on slide 7 **reverses** | 🔴 **NOT PUBLISHED — crossover to watch** |

**Additional open items:** engine-CC exhaust-temperature discrepancy (slide 6);
whether Project Kilby is CC or SC (slide 16); Singapore NOx/NH₃-slip permit
limits; N₂O compliance measurement standard.

**Visual:** Three red-flagged cards. Deliberately plain — this slide should feel
like a caution, not a pitch.

---
---

# SECTION 5 — QUALITATIVE ASSESSMENT & RECOMMENDATION

---

## SLIDE 22 — Qualitative assessment framework

**Key message:** Score against what the project actually optimises for — not
against a generic technology beauty contest.

**⚠️ Design instruction:** The ratings below are **the author's qualitative
engineering judgment derived from the sourced rows in Sections 1–4**. They are
🟡 **assessment, not sourced metrics.** Label them as such on the slide. Weights
are deliberately left blank for the sponsor to assign.

**Body — assessment matrix:**

| # | Criterion | **GT (Combined Cycle)** | **GE (Simple Cycle)** | **GE (Flexicycle CC)** | Basis |
|---|---|---|---|---|---|
| 1 | Net efficiency | ●●●●● (57 %) | ●●●○○ (49 %) | ●●●●○ (54 %) | Slide 7 🟢/🔵 |
| 2 | Granularity at exactly 100 MW | ●●○○○ (88 or 135 MW) | ●●●●● (10 × 10 MW) | ●●●●● | Slide 18 🔵 |
| 3 | Redundancy / N+1 | ●○○○○ (single train) | ●●●●● (10 % per unit) | ●●●●○ (shared ST) | Slide 8 |
| 4 | Part-load efficiency | ●●○○○ | ●●●●● | ●●●●○ | Slide 8 🟢 |
| 5 | Start time / black start | ●○○○○ (tens of min) | ●●●●● (~2 min) | ●●●○○ (steam warm-up) | Slide 8 🟢 |
| 6 | Water consumption | ●○○○○ (615,000 m³/yr) | ●●●●● (negligible) | ●●●○○ (322,000 m³/yr) | Slide 18 🔵 |
| 7 | Land footprint | ●●●●● (11–14 ac) | ●●○○○ (33–56 ac) | ●●○○○ | Slide 18 🔵 |
| 8 | Tropical ambient derate | ●●○○○ | ●●●●● | ●●●●○ | Slide 8 🟢 |
| 9 | **NH₃/H₂ future-fuel path** | ●●●●● (6F.03 retrofit 2030) | ●●○○○ (no stationary product) | ●○○○○ (never demonstrated) | Slide 19 🟢/🔴 |
| 10 | Singapore/regional precedent | ●●●●● (Jurong Is. GT plant) | ●○○○○ (none) | ●○○○○ | Slide 19 🟢 |
| 11 | Emissions control on NH₃ (N₂O) | ●●●●● (in-combustor) | ●●○○○ (3 catalyst beds) | ●●○○○ | Slide 19 🟢 |
| 12 | Speed to power (2026 market) | ●●●○○ (30+ mo) | ●●●●○ (24–30 mo) | ●●●○○ | Slide 12 🟢 |
| 13 | CAPEX certainty | ●●●○○ | ●●●○○ | ●●○○○ | 🔴 NH₃ premium unpublished |

**Visual:** Heat-mapped matrix with a blank **"Sponsor weight"** column on the
right for live workshop use.

---

## SLIDE 23 — The recommendation

**Key message:** **Gas turbine — and specifically a 6F.03-class frame.** But the
recommendation is duty-dependent, and the reasoning is not primarily efficiency.

**Body:**

### ✅ RECOMMENDED: Gas Turbine, 6F.03-class
**Three reasons, in order of weight:**
1. **Future-fuel optionality is decisive.** The 6F.03 is in the exact frame
   family targeted for a **retrofittable 100 % ammonia combustion system by
   2030**. 🟢 For a project whose entire thesis is green ammonia, this is not a
   tiebreaker — it is the deciding criterion. The engine has **no stationary
   ammonia product at all**. 🔴
2. **Regional precedent and emissions.** Singapore's own ammonia power project
   is **a gas turbine plant**; and the turbine destroys **N₂O (GWP ≈273×) in the
   combustor** rather than depending on three catalyst beds. 🟢
3. **Combined-cycle efficiency and footprint.** 57 % vs 54 %, and 11–14 acres vs
   33–56 acres. 🟢/🔵

### ⚠️ WHAT THE RECOMMENDATION COSTS US
Be explicit — do not hide these:
- **Granularity:** 88 MW (undersized) or 135 MW CC (oversized). Neither is 100 MW.
- **Redundancy:** single train — one trip is a total outage without a second train.
- **Water:** ~615,000 m³/yr at 90 % CF 🔵 — a genuine Singapore/Johor siting issue.
- **Tropical derate:** ~5–10 % power loss per 10 °C above ISO. 🟢
- **Lead time:** large-frame OEMs are >90 % booked for 2028. 🟢

### 🔄 WHEN THE ANSWER FLIPS TO THE ENGINE
1. If the duty becomes **load-following** or the clean block is **grown
   incrementally** rather than built once — the earlier 50 MW data-centre
   conclusion favouring the engine **still stands for that framing**.
2. If an OEM offers a **Flexicycle-class ammonia engine plant at ~54 %** —
   the efficiency argument reverses. 🔴 No OEM has shown this.
3. If **water or exact-100 MW granularity** is scored as a hard constraint
   rather than a preference.

**Visual:** A decision card — green recommendation panel, amber cost panel, blue
flip-conditions panel. Three columns, equal weight. The honesty is the credibility.

---

## SLIDE 24 — Recommended next actions

**Key message:** Five queries close the gaps between this deck and an
investment-grade decision.

**Body:**

| # | Action | Owner | Closes |
|---|---|---|---|
| 1 | **Request GE Vernova / IHI written position** on 6F.03 ammonia-retrofit commitment, scope and date | Project | Slide 19 🟡 assumption |
| 2 | **Request OEM ammonia-specific efficiency** for the candidate frame (and MHI H-25, to close the 34.8 % anchor) | Project | Slide 21 gap #1 |
| 3 | **Request NH₃ CAPEX premium** from OEM/EPC on both technologies | Project | Slide 21 gap #2 |
| 4 | **Confirm water availability & discharge permitting** at the candidate site against ~615,000 m³/yr | Project | Slide 23 cost |
| 5 | **Secure a delivery slot position** — large-frame OEMs >90 % booked for 2028 | Commercial | Slide 12 |

**Visual:** Numbered action list with owner chips.

---

## SLIDE 25 — Closing summary

**Key message (the one-slide version of the whole deck):**

> **In simple cycle the gas engine wins on efficiency. In combined cycle the gas
> turbine wins — because it rejects more heat, at a higher grade, and therefore
> has more to recover.**
>
> **Globally, turbines are ~97 % of installed gas-fired capacity.** 🔵
>
> **Data centres today buy simple cycle, optimising for speed, modularity and
> water — not peak efficiency.**
>
> **For our 100 MW project, the gas turbine wins — but on future-fuel
> optionality and regional precedent, not on efficiency alone.** The 6F.03 frame
> is both a clean natural-gas fit today and the published target for ammonia
> retrofit by 2030.

**Visual:** Reprise the slide 7 crossover chart, small, top-right, as a callback.

---
---

# APPENDIX

## A1 — Provenance key (put this on a slide; it is a credibility asset)

| Tag | Meaning |
|---|---|
| 🟢 **SOURCED** | Published, citable figure — source listed in A2 |
| 🔵 **DERIVED** | Output of a shown calculation whose inputs are sourced |
| 🟡 **ASSUMPTION** | Explicitly assumed; recorded in `memory.md` §3 |
| 🔴 **NOT PUBLISHED** | No source exists. Deliberately left blank rather than invented |

## A2 — Sources

**Combined-cycle & machine specs**
1. GE Vernova — 6F.03 fact sheet (88 MW SC; 135 MW 1×1 CC; 272 MW 2×1; >57 % CC): https://www.gevernova.com/gas-power/products/gas-turbines/6f
2. GE Vernova — 6F.03 product specifications PDF: https://www.gevernova.com/content/dam/gepower-new/global/en_US/downloads/gas-new-site/products/gas-turbines/6f-03-fact-sheet-product-specifications.pdf
3. GE Vernova — LM6000 aeroderivative (>99 % start reliability, >98 % availability, ~60 M fleet hours, >1,200 units): https://www.gevernova.com/gas-power/products/gas-turbines/lm6000
4. GE Vernova — Aeroderivative and heavy-duty gas turbine range (34–571 MW): https://www.gevernova.com/gas-power/products/gas-turbines
5. Wärtsilä — Flexicycle power plants (>54 % ISO; per-engine WHR steam generators to common steam turbine; steam switchable per genset): https://www.wartsila.com/energy/engine-power-plant-solutions/engine-power-plant-products/applications/flexicycle-power-plants
6. Wärtsilä — Flexicycle upgrade (efficiency improvement up to 10 %): https://www.wartsila.com/services-catalogue/engine-services-4-stroke/wartsila-flexicycle-upgrade
7. Wärtsilä 34SG gas engine (48.9 % electrical efficiency, ~2 min to full load): https://www.wartsila.com/energy/solutions/engine-power-plants/wartsila-34sg-gas-engine
8. Wärtsilä 50SG gas engine: https://www.wartsila.com/energy/solutions/engine-power-plants/wartsila-50sg-gas-engine
9. Wärtsilä — Technology comparison, engines vs. aeroderivative gas turbines (part-load, water, footprint, derating): https://www.wartsila.com/energy/learn-more/technology-comparison-engines-vs-aeros
10. Baker Hughes — Frame gas turbine technology (20–130 MW): https://www.bakerhughes.com/gas-turbines/frame-technology
11. Siemens Energy — gas turbine range (to 593 MW): https://www.siemens-energy.com/global/en/home/products-services/product-offerings/gas-turbines.html
12. NETL — Gas turbines in simple cycle & combined cycle applications: https://www.netl.doe.gov/sites/default/files/gas-turbine-handbook/1-1.pdf

**Waste-heat / combined-cycle physics**
13. ScienceDirect — Comprehensive study on waste heat recovery from gas turbine exhaust (GT exhaust 500–700 °C; >60 % of energy in output heat stream): https://www.sciencedirect.com/science/article/pii/S2590174524003039
14. WEF — Internal combustion engines, heat balance (waste heat 60–70 % of fuel input; jacket coolant up to 30 %; exhaust 30–50 % of waste heat; 850–1,200 °F): https://www.wef.org/globalassets/assets-wef/direct-download-library/public/03---resources/wsec-2017-tr-002-rbc-internal-combustion-engines---9.2017.pdf
15. Unison Energy — Microgrid heat recovery options (GT makes 2–3× more steam per kW than a recip; high-grade 700–950 °F vs low-grade 180–230 °F): https://unisonenergy.com/resources/blog/microgrid-heat-recovery-options/
16. POWER Magazine — Reciprocating engines continue to be flexible workhorses: https://www.powermag.com/reciprocating-engines-continue-to-be-flexible-workhorses/
17. Power Engineering — ambient temperature effect on GT output (~0.4 %/°F power loss, +0.1 %/°F heat rate): https://www.power-eng.com/operations-maintenance/why-keeping-cool-keeps-output-high/

**Global utilisation & market**
18. U.S. EIA — Natural gas-fired reciprocating engines deployed to balance renewables (~47 GW, >72,000 units): https://www.eia.gov/todayinenergy/detail.php?id=37972
19. Global Electricity — Natural gas electricity, global role and data (~1,800 GW installed): https://www.globalelectricity.org/natural-gas-electricity/
20. Thunder Said Energy — Global gas generation capacity by region and over time (~50 GW/yr additions; regional split): https://thundersaidenergy.com/downloads/global-gas-turbines-by-region-and-over-time/
21. POWER Magazine — Gas power's boom sparks a turbine supply crunch: https://www.powermag.com/gas-powers-boom-sparks-a-turbine-supply-crunch/
22. GE Vernova — Utilities & IPP power generation (>800 GW, >7,000 turbines, 120+ countries): https://www.gevernova.com/gas-power/applications/utility-power-generation
23. Future Market Insights — Reciprocating power generating engine market (~$48.8 Bn, 2025): https://www.futuremarketinsights.com/reports/reciprocating-power-generating-engine-market
24. Grand View Research — Gas turbine market size (~$11.46 Bn, 2025): https://www.grandviewresearch.com/industry-analysis/gas-turbine-market
25. GM Insights — Power generation gas turbine market: https://www.gminsights.com/industry-analysis/power-generation-gas-turbine-market
26. POWER Magazine — World's largest internal combustion engine power plant inaugurated (IPP3 Jordan, 573 MW, 38 × Wärtsilä 50DF): https://www.powermag.com/worlds-largest-internal-combustion-engine-power-plant-inaugurated/
27. NS Energy — The largest recip-based power plants worldwide: https://www.nsenergybusiness.com/analysis/featurethe-largest-recip-based-power-plants-worldwide-4302663/
28. ASME — Gas turbines gain in efficiency and capacity factor (CCGT utilisation 50 %→35 %): https://www.asme.org/topics-resources/content/blog-gas-power-plants-are-efficiency-giants

**Data centres & supply chain**
29. Wärtsilä — 34SG data-centre debut, 412 MW US project (40 engines, COD early 2028): https://www.wartsila.com/media/news/16-04-2026-wartsila-s-34sg-engine-makes-its-data-center-debut-with-new-412-mw-u-s-project-3740972
30. Wärtsilä — 507 MW US data-centre order (27 × 50SG, delivery 2027): https://www.wartsila.com/media/news/20-11-2025-wartsila-continues-growth-in-the-data-center-segment-with-a-507-mw-order-in-the-us-offering-engines-as-a-reliable-power-solution-3686573
31. Wärtsilä — engines selected for US data centre (282 MW, 15 × 18V50SG): https://www.wartsila.com/media/news/15-07-2025-wartsila-engines-selected-to-deliver-reliable-power-for-u-s-data-center-3632885
32. DataCenterDynamics — Wärtsilä to supply 429 MW (24 × 50SG) for US data-centre plant: https://www.datacenterdynamics.com/en/news/w%C3%A4rtsil%C3%A4-to-supply-429mw-of-gas-turbines-to-us-power-plant-set-to-serve-data-center/
33. Power Engineering — Data centre power crunch lifts engines, aeroderivatives into larger role: https://www.power-eng.com/gas/data-center-power-crunch-lifts-engines-aeroderivatives-into-larger-role/
34. Cleanview — Bypassing the grid: how data-centre developers are building their own power plants (~101 GW announced; ~2 GW online mid-2026): https://cleanview.co/reports/behind-the-meter-data-centers
35. Enverus — Natural gas behind-the-meter power for data centres: https://www.enverus.com/blog/why-data-centers-are-looking-to-natural-gas-for-behind-the-meter-power/
36. RBC Capital Markets — Natural gas powers the data-centre boom (pipeline 24 → 64 GW): https://www.rbccm.com/en/insights/2026/05/natural-gas-powers-the-data-center-boom
37. Power Engineering — Data centres drive record surge in GE Vernova power equipment orders as turbine slots tighten through 2030: https://www.power-eng.com/gas/turbines/data-centers-drive-record-surge-in-ge-vernova-power-equipment-orders-as-turbine-slots-tighten-through-2030/
38. Utility Dive — GE Vernova expects ~80 GW gas turbine backlog stretching into 2029: https://www.utilitydive.com/news/ge-vernova-gas-turbine-investor/807662/
39. Utility Dive — Natural gas equipment bottleneck is easing: Jefferies (lead times; 19/49/76 GW availability 2028–30; >90 % booked 2028): https://www.utilitydive.com/news/natural-gas-equipment-generation-bottleneck-data-centers/812931/
40. American Public Power Association — Gas turbine backlogs come to the forefront: https://www.publicpower.org/periodical/article/with-gas-fired-generation-surging-gas-turbine-backlogs-come-forefront
41. DataCenterDynamics — ProEnergy repurposes jet engines (CF6-80C2) to power data centres amid turbine shortages: https://www.datacenterdynamics.com/en/news/proenergy-offers-repurposed-jet-engines-to-data-cent/
42. Power Engineering — New co-located gas plant to power Microsoft data centre in West Texas (Project Kilby): https://www.power-eng.com/onsite-power/new-co-located-gas-plant-to-power-microsoft-data-center-in-west-texas/
43. TechCrunch — Microsoft and Chevron plan one of the largest gas-powered data-centre projects in US (~2.7 GW, GE Vernova turbines, power 2028): https://techcrunch.com/2026/06/22/microsoft-and-chevron-plan-one-of-the-largest-gas-powered-data-center-projects-in-us/
44. GE Vernova — Hawaiian Electric orders six LM6000VELOX packages (>250 MW firm): https://www.gevernova.com/news/press-releases/hawaiian-electric-order-ge-vernova-aeroderivative-turbine-hawaii-power

**Ammonia / future fuel** *(full 41-source list in `NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md` §6)*
45. GE Vernova / IHI — 100 % ammonia combustion achieved in F-class gas turbine test (Mar 2026): https://www.gevernova.com/news/press-releases/ihi-ge-vernova-achieve-milestone-100-ammonia
46. GE Vernova & IHI — next phase, 100 % ammonia-capable combustion system for 6F.03 / 7F / 9F by 2030: https://www.ge.com/news/press-releases/ge-vernova-and-ihi-announce-next-phase-of-the-technology-roadmap-aiming-to-develop-a
47. IHI — 2 MW-class gas turbine fuelled exclusively by liquid ammonia (NOx <7 ppm; >99 % GHG cut incl. N₂O): https://www.ihi.co.jp/en/all_news/2025/resources_energy_environment/1201875_13737.html
48. Ammonia Energy Association — IHI Corporation (IM270, Aioi, ~3,000 h as of Jan 2026): https://ammoniaenergy.org/organization/ihi-corporation/
49. EMA Singapore — Consortium appointed, ammonia power generation & bunkering (55–65 MW, direct combustion in a gas turbine plant): https://www.ema.gov.sg/news-events/news/media-releases/2025/consortium-appointed-to-conduct-next-phase-of-ammonia-power-generation-bunkering-solution
50. Mitsubishi Power — H-25 Series (41 MW SC; ~60 MW 1×1 CC): https://power.mhi.com/products/gasturbines/lineup/h25/
51. Int'l J. Hydrogen Energy (2025) — NH₃ in combined cycle: direct liquid 47.7 % / vaporised 49.1 % / cracked 54 %: https://www.sciencedirect.com/science/article/pii/S0360319925043393
52. Wärtsilä 25 Ammonia (1.9–3.1 MW; deliveries 2028): https://www.wartsila.com/marine/wartsila-25-ammonia

**Cost anchors**
53. EIA — Capital cost and performance characteristics for utility-scale generating technologies (AEO2025): https://www.eia.gov/analysis/studies/powerplants/capitalcost/pdf/capital_cost_AEO2025.pdf
54. GridLab — The new reality of power generation (2025 gas turbine costs): https://gridlab.org/wp-content/uploads/2025/09/GridLab_Gas-Turbine-Costs-Report-1.pdf
55. Thunder Said Energy — Reciprocating gas engines, levelized costs: https://thundersaidenergy.com/downloads/reciprocating-gas-engines-levelized-costs/

## A3 — Repo cross-references

| Document | What it holds |
|---|---|
| `power_generation/NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md` | The master matrix — 7 axis-blocks (A–G), MHI cross-check §2, derived fuel table §3, verdict §4 |
| `power_generation/50MW_datacenter_NH3_engine_vs_CCGT_matrix.md` | The 50 MW data-centre framing (engine-favouring conclusion — still valid for load-following duty) |
| `power_generation/NH3_powerplant_land_footprint_study.md` | Land intensity (acres/MW) + sparing philosophy |
| `power_generation/NH3_ammonia_energy_pathway_infographic.html` | Interactive well-to-wake calculator + provenance colour system to reuse |
| `memory.md` §3, §4, §6 | Assumptions register, permutation set, sourced data registry |

---

## A4 — Design instructions for Claude Design

1. **Do not add any number that is not on these slides.** If a slide looks
   sparse, add a visual, not a statistic.
2. **Preserve every ⚠️ caveat.** They are load-bearing — this deck's credibility
   with a domain-expert audience depends on the gaps being visible.
3. **Keep the provenance tags** (🟢🔵🟡🔴) visible, at least as a legend on the
   first data slide and on slides 10, 19 and 21.
4. **Never abbreviate "GE Vernova" to "GE"** — see the terminology warning.
5. **Slide 7 is the hero slide.** Give it the most design attention; the
   crossover chart should be reusable as a standalone image.
6. **Units are SI-first and explicit** (MW, MWth, ktpa, °C, L/MWh, acres,
   m³/yr). State LHV wherever efficiency appears.
7. Suggested section colour coding: Section 1 physics (blue), Section 2 market
   (grey), Section 3 data centres (purple), Section 4 project (green),
   Section 5 recommendation (accent).

---

*Rev 0, 2026-07-28. Deck source only — not yet presented. Every quantitative
cell is sourced, a shown calculation, a flagged assumption, or marked
NOT PUBLISHED (CLAUDE.md §7).*
