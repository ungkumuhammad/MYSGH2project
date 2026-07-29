# Ammonia-Capable Power Machines — Per-Vendor-Model TRL & Efficiency Table

> **Question:** For every **named vendor model** of gas turbine or reciprocating
> engine with sourced evidence of ammonia capability (100 % NH₃, NH₃ co-firing,
> or a funded NH₃ development programme), what is its **TRL**, its **simple-cycle
> net electrical efficiency on ammonia (%-LHV)**, and its **combined-cycle net
> electrical efficiency on ammonia (%-LHV)**?
>
> **Basis:** net electrical, **LHV**, unless a source states otherwise (flagged
> where it does not). Fuel = **ammonia** for the efficiency columns; a separate,
> clearly-separated column carries the **non-ammonia platform anchor** (NG /
> conventional-fuel spec) purely so the ammonia gaps are visible against
> something real. **The platform-anchor column must never be plotted as an
> ammonia efficiency.**
>
> **Companion documents:** `NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md`
> (Rev 1, 2026-07-28) and `../memory.md` §3/§6 — reused, not re-derived.
> **Date:** 2026-07-29.
>
> **No-Fabrication Rule (CLAUDE.md §7):** every cell is (a) sourced, (b) a
> labelled assumption, or (c) a shown calculation. **No efficiency number has
> been invented to fill a gap.** Gaps read **"not published"**.
>
> **TRL scale used:** standard 1–9 (1–3 basic research/concept · 4 lab component
> validation · 5 component validation in relevant environment · 6 system/subsystem
> prototype demo in relevant environment · 7 system prototype demo in operational
> environment · 8 system complete and qualified · 9 actual system proven in
> operational environment). **No OEM in this table self-reports a TRL.** Every
> TRL below is therefore marked **"assessed"** — my judgment from the sourced
> facts, not a vendor claim.

---

## 1. Master table — one row per vendor/model

**Colour key for a chart build:** `TURBINE` rows = green, `ENGINE` rows = red.

| # | Type | OEM / vendor | Model / product | Power class (MW) | Fuel status on NH₃ | Maturity label | **TRL (assessed)** | TRL reasoning (one line, from the sourced facts) | **SC net elec. eff., LHV, on NH₃ (%)** | **CC / bottoming net elec. eff., LHV, on NH₃ (%)** | Non-NH₃ platform anchor (do NOT plot as ammonia) | Src |
|---|------|--------------|-----------------|------------------|--------------------|----------------|--------------------|--------------------------------------------------|----------------------------------------|-----------------------------------------------------|--------------------------------------------------|-----|
| T1 | **TURBINE** | IHI | **IM270** (liquid-NH₃ solo-fire) | **2** (2,000 kW class) | **100 % liquid NH₃** | demo/pilot, long-run | **7–8** | Complete 2 MW-class cogeneration **system**, ~**3,000 h** endurance on 100 % liquid NH₃ at IHI Aioi incl. **load-rejection and load-dump**; but at the OEM's own works, no customer unit sold ⇒ system prototype in an operational-representative environment, edging into "complete and qualified" | **not published** — no ammonia-specific electrical efficiency stated by IHI in any source located (open question carried from comprehensive comparison §5) | **n/a — no CC product.** Package is **cogeneration** (2 MWe + **6 t/h steam**), not a steam-turbine bottoming cycle. No NH₃ CC efficiency published | **26.6 %** power-generation efficiency — but this is the **IM270 development target** from the original 1990s 2,000 kW programme, on conventional fuel; **LHV/HHV basis not stated in the source**; simple open cycle, single shaft | [1][2][3] |
| T2 | **TURBINE** | IHI + **GE Vernova** (JDP) | **F-class ammonia combustion system** — retrofit for **6F.03 / 7F / 9F** | 6F.03 = **88 MW SC** (NG basis); 7F/9F larger (outputs not sourced here) | **100 % NH₃** in the combustion hardware | R&D → 2030 target | **5–6** | **Combustion components only**, full-scale, at pressures/temperatures/flows matching **full-load** F-class conditions, at IHI's Large-Scale Combustion Test facility (Aioi, opened Jun 2025), Mar 2026. **No gas turbine has run on ammonia** ⇒ subsystem validated in a relevant environment, not a system demo | **not published** | **not published** | 6F.03 (NG): **88 MW SC / 135 MW 1×1 CC / >57 % CC** ⇒ *derived* SC = 57 × 88/135 = **37.2 %** (repo derivation, memory.md changelog 2026-07-28 (8)) | [4][5][6] |
| T3 | **TURBINE** | Mitsubishi Power | **H-25** (100 %-NH₃ variant) | **41 MW SC** / ~**60 MW** 1×1 CC / ~**120 MW** 2×1 | **100 % NH₃** — announced product target | **stalled/unconfirmed** | **3–4** | Announced **2021** with "commercialisation in or around **2025**"; **no ammonia hardware milestone, and no status update 2023–2026, located** despite repeated searching. Concept/product-definition stage on the public record ⇒ 3–4. *(MHI may hold unpublished data; the finding is silence, not a confirmed failure.)* | **⚠️ contested — 34.8 % is NOT confirmed ammonia-specific.** It is the H-25's published spec, presumed **natural-gas** basis, carried into this repo by assumption since 2026-06-30. See comprehensive comparison §2 row **M3** and memory.md §3. **Treat as an assumption, not a sourced ammonia value** | **⚠️ contested — ~50.9 %**, *derived:* 34.8 % × (60 MW CC ÷ 41 MW SC) = **50.9 %**. Inherits the entire uncertainty of the 34.8 % input above | H-25 series published: 41 MW SC, ~60 MW 1×1 CC, ~120 MW 2×1 | [7][8][9] |
| T4 | **TURBINE** | Mitsubishi Power (on an **IHI IM270 airframe**) | **2 MW-class NH₃/NG co-firing demonstrator** (Yokohama, Oct 2020) | **2** | **20 % NH₃ (LHV) co-firing** — combustor-only modification | demo/pilot (partial fuel) | **6** | Full-scale **2 MW-class machine** run in a demonstration test at MHI Yokohama; a real system in a relevant (works) environment, but **partial fuel share** and a one-off test campaign, not endurance ⇒ 6. Raw NOx **287 ppm @16 % O₂** at 20 % mixing, cut to **<7 ppm only by the NOx-removal device** | **not published** for the co-fired condition | **n/a — no CC in the demonstrator** | (same IM270 airframe as T1) | [10][11] |
| T5 | **TURBINE** | Baker Hughes + Hanwha (JDA, Feb 2025) | **NovaLT16** (ammonia-capable variant) | **16.9 MW** generator drive / 17.5 MW mech. drive | Claimed **100 % NH₃ ↔ 100 % gas and any blend** — vendor claim | R&D (test targeted end-2027) | **3** | **Joint-development agreement only.** Full engine test on ammonia targeted **end-2027**, deployment 2028; **no ammonia combustion hardware result published**. The "IMO Tier III without SCR" claim is a **vendor claim, unverified** ⇒ concept/technology-formulation stage | **not published** | **n/a — no CC product on NH₃.** (NovaLT16 is marketed for CHP, quoted **up to 84 % thermal** efficiency on conventional fuel — a CHP number, **not** a net-electrical CC number) | NovaLT16 (conventional fuel): **36.4 %** SC at 16.9 MW generator drive; 37.4–37.5 % mech. drive | [12][13][14] |
| T6 | **TURBINE** | Toyota Energy Solutions + AIST + Tohoku Univ. | **50 kW-class micro gas turbine, ammonia** | **0.05** (>40 kW achieved on NH₃) | **100 % ammonia gas** (also demonstrated kerosene/NH₃ co-fire at 21 kW, 2014) | lab demo | **4–5** | A **complete micro-GT system** ran on ammonia gas only, >40 kW, in an institute laboratory; rich-lean two-stage combustor developed for it. Lab environment, sub-commercial scale ⇒ 4–5 | **not published** | **n/a — no CC at this scale** | not sourced | [15][16][17] |
| T7 | **TURBINE** | Toyota Energy Solutions | **300 kW-class ammonia micro gas turbine** (industrial) | **0.3** | **100 % ammonia** achieved in prototype combustors | R&D | **3–4** | System **designed** (with a purpose-developed high-temperature SCR); 100 % NH₃ combustion achieved while **evaluating various prototype combustors** — component-level, no full-system power output published ⇒ 3–4 | **not published** | **n/a** | not sourced | [15][18] |
| T8 | **TURBINE** | Siemens Energy | **no named ammonia model** (SGT-600/700/800 are the H₂-ready family) | n/a | **research only** — direct and cracked ammonia under investigation | R&D, no product | **2–3** | No named ammonia product, no ammonia hardware milestone located; ammonia appears only in a list of green fuels being "explored" alongside methanol/HVO/FAME ⇒ concept formulation. **Included so the chart shows the absence, not as a competing product** | **not published** | **not published** | (SGT-600/700/800 target **100 % H₂-ready** — hydrogen, not ammonia) | [19][20] |
| T9 | **TURBINE** | Doosan Enerbility (+ POSCO, RIST) | **cracked-ammonia** route — combustor for a 100 % H₂ gas turbine | (400 MW-class H₂ GT is the separate national programme) | **Cracked NH₃ → H₂**, i.e. **not direct ammonia combustion** | R&D | **3–4** | MoU-stage R&D; the parties explicitly chose to **burn cracked gas rather than ammonia itself**; combustor development targeted for completion by **2026** ⇒ technology formulation/component work. **Not comparable to a direct-NH₃ machine** | **n/a — not a direct-ammonia machine** | **not published** | not sourced | [21][22] |
| E1 | **ENGINE** | Wärtsilä | **Wärtsilä 25 Ammonia** (4-stroke, marine) | **1.9–3.1** per unit (315 kW/cyl @900 rpm; 345 kW/cyl @1000 rpm) | **~95 % NH₃ energy share** (~5 % pilot) | marine commercial, deliveries **2028** | **8** | Full-scale engine, extensively tested (**up to 90 % GHG reduction** demonstrated), **launched as a sellable product** with a 2026 power upgrade and deliveries scheduled 2028; **no vessel in commercial service yet** ⇒ system complete and qualified, not yet proven in service | **not published.** OEM states only that the low-pressure concept's efficiency is **"equal to that of dual-fuel LNG engines"** — a **qualitative parity claim**, not a number. *(This repo's 46–49 % engine-SC range is an **assumption** built on that parity claim + the W34SG NG spec — see memory.md §6; it is not a Wärtsilä ammonia figure.)* | **n/a — no CC product on NH₃.** Wärtsilä **Flexicycle** engine-combined-cycle is **>54 % ISO on natural gas only**, never shown on ammonia | Wärtsilä 34SG (NG, stationary): **48.9 %**; Flexicycle (NG): **>54 %** | [23][24][25][26][27] |
| E2 | **ENGINE** | Everllence (ex-MAN Energy Solutions) | **MAN B&W ME-LGIA** (2-stroke, marine) | 2-stroke portfolio **12–68** | **>95 % NH₃** energy fraction, **5 % SPOC** pilot | marine commercial, shipyard delivery **2026** | **8** | Single-cylinder tests 2023 → full-scale engine testing from Nov 2024 → **100 % load reached Jan 2025** → **homologation/validation tests 10–12 Jun 2026 at Research Centre Copenhagen under 8 classification societies**, ahead of gas trials. Complete and qualified; **not yet in commercial ship service** ⇒ 8 (9 on vessel entry to service) | **not published** | **n/a — no CC product** (marine propulsion engine) | not sourced this session | [28][29][30][31] |
| E3 | **ENGINE** | WinGD | **X-DF-A** (first unit **X52DF-A**; 72-bore variant following) | output not sourced (52-bore, 2-stroke); ~**30 engines on order** | **~95 % NH₃** — high-pressure NH₃ injection + **~5 % pilot diesel at full load** | marine commercial, **installed 2025** | **8–9** | Full-load ammonia test passed; **first commercial engine built by HD Hyundai HHI-EMD and installed aboard an EXMAR 46,000 m³ LPG/ammonia carrier (2025)**, first of four sisters. This is the furthest-progressed ammonia machine of any type. **9 only once the vessel is in commercial service** — flag the 8-vs-9 call | **not published** | **n/a — no CC product** | not sourced this session | [32][33][34][35] |
| E4 | **ENGINE** | Japan Engine Corporation (J-ENG) | **UEC50LSJA** (as **7UEC50LSJA-HPSCR**, 2-stroke) | output not sourced (500 mm bore, 7 cyl.) | **NH₃ co-firing** (ratio not sourced); HP-SCR after-treatment integral | marine commercial, **delivered Oct 2025** | **8** | ~**1,000 h** single-cylinder testing (May 2023–Sep 2024) → full-scale **first commercial** engine, ammonia test runs from Apr 2025, ~**700 h** over five months → delivered to JMU Ariake shipyard Oct 2025 for an NYK ammonia-fuelled medium gas carrier entering service **Nov 2026** ⇒ complete and qualified, not yet in service | **not published** | **n/a — no CC product** | not sourced this session | [36][37][38] |
| E5 | **ENGINE** | HD Hyundai Heavy Industries (HHI-EMD) | **HiMSEN H22CDF-LA** (4-stroke) | up to **2.2** | Ammonia dual-fuel, **high-pressure direct injection** (world-first for this method) | type-approved 2024 | **8** | **Type-approval test completed 30 Sep–2 Oct 2024** at the Engine Techno Center, Ulsan, with certification from **seven classification societies** (KR, ABS, BV, DNV, NK, LR, RINA) ⇒ system complete and qualified. Vendor states targets include **land-based power generation**, but **no land-based unit is sourced** | **not published** | **n/a — no CC product on NH₃** | not sourced this session | [39][40][41] |
| E6 | **ENGINE** | HD Hyundai Heavy Industries (HHI-EMD) | **HiMSEN H32CDF-LA** (4-stroke) | up to **5.4** | Ammonia dual-fuel, HP direct injection (derived from H22 technology, H32C diesel platform) | class-approved 2025 | **6–7** | Announced Oct 2025 with **classification approval**; built on the proven H22CDF-LA technology and an existing diesel platform, but **no full-scale test-campaign hours published** and the approval type (AiP vs. type approval) is **ambiguous in the sources located** ⇒ 6–7, flagged | **not published** | **n/a — no CC product on NH₃** | not sourced this session | [40][42] |
| E7 | **ENGINE** | IHI Power Systems (Niigata) | **28ADF** (4-stroke, marine, 280 mm bore) | **1.6** | **up to 95 %** NH₃ fuel-share ratio demonstrated | **in service** (demo vessel) | **8–9** | Operational tests from Apr 2023 at the Ota plant; the technology is the basis of the **NYK tugboat *Sakigake***, an ammonia-fuelled vessel in actual operation, where a **94 % GHG cut** and N₂O ≤1 % of CO₂e were measured in service. **>80 % GHG reduction incl. N₂O vs diesel mode** on the engine itself ⇒ 8–9 | **not published** | **n/a — no CC product** | not sourced this session | [43][44][45] |
| E8 | **ENGINE** | IHI Power Systems | **6 MW land-based ammonia genset** (V18, scaled from 28ADF) | **6.0** (6,000 kW) | **NH₃ + heavy fuel oil dual-fuel**; target **>90 % NH₃ ratio** and **>90 % GHG cut**; can also run 100 % HFO | **demo/pilot — the only stationary ammonia genset located** | **6–7** | Began operating at the **Ota Plant, Gunma, July 2026**; the demonstration evaluates the **complete power-generation system** (engine, fuel supply, exhaust after-treatment, leak detection, safety controls). Prototype in a representative-but-OEM-controlled environment, testing to complete in **FY2026**, commercial sales from **FY2027** ⇒ 6–7 | **not published** | **n/a — no CC product**; the demonstration is a simple-cycle genset. Target applications stated: **data centres, industrial parks, diesel-genset replacement** | not sourced this session | [46][47] |
| E9 | **ENGINE** | MAN Energy Solutions (Holeby) + DTU + Skovgaard Energy | **AmmoniaMot 2** / **NH3 Spark – FutureFlex** (4-stroke genset) | single-cylinder at present; genset scale not stated | **Spark-ignited, targeting pilot-free** (no pilot fuel) | R&D | **3–4** | Predecessor "AmmoniaMot" (fundamental combustion investigations) closed May 2024; **AmmoniaMot 2** started Aug 2024, ~3.5 yr. NH3 Spark – FutureFlex: **single-cylinder** MAN GenSet testing at **DTU** from **Q3 2025**, only then full-scale testing under powerplant conditions at Skovgaard Energy's green-ammonia site ⇒ lab/single-cylinder stage | **not published** | **n/a — no CC product** | not sourced this session | [48][49][50] |

---

## 2. What is genuinely uncertain or contested — read this before plotting

**The single most important finding for a chart is that the ammonia efficiency
columns are almost entirely empty, and that is the correct, sourced answer.**
Of 18 vendor models, **zero** have a published, ammonia-specific, net-electrical
efficiency in either cycle. A TRL-vs-efficiency scatter therefore has **no
plottable ammonia points at all** unless the H-25's contested figure is used —
and using it would be plotting an assumption as data.

**The H-25 (row T3) is the contested cell.** The 34.8 % simple-cycle / ~50.9 %
combined-cycle pair that this repo has carried since 2026-06-30 is **not an
ammonia number**. It is the H-25's published series specification, presumed
natural-gas basis, applied to the ammonia variant by assumption in a prior
session; the 50.9 % is then *derived* from it via the 60/41 MW capacity ratio.
Targeted searching (2026-07-28 and again 2026-07-29) found **no Mitsubishi
source stating an ammonia-specific efficiency for the H-25**. If you plot it,
plot it as a **hollow / dashed / amber "assumption" marker**, visually distinct
from sourced points, and never as MHI's claim. The same caution applies twice
over to the CC value, which inherits the SC uncertainty plus a capacity-ratio
approximation.

**Three further cells need flagging.** (1) The **IM270's 26.6 %** is a
*development target* for the original 2,000 kW programme on conventional fuel,
and the source does not state whether it is LHV or HHV — it is a platform
anchor, not an ammonia efficiency, and its basis is unstated. (2) The
**NovaLT16's "up to 84 %"** figure circulating in vendor material is a **CHP
total-thermal** number and must not be mistaken for a combined-cycle
net-electrical efficiency; the comparable figure is **36.4 %** simple cycle on
conventional fuel. (3) **Wärtsilä's ammonia efficiency claim is qualitative
only** — "equal to that of dual-fuel LNG engines" — so this repo's 46–49 %
engine range is an *assumption built on a parity claim*, not a Wärtsilä ammonia
number; it should not appear as a sourced engine point.

**Two TRL calls are genuinely borderline.** **WinGD X-DF-A (E3)** sits on the
8/9 boundary: the engine is built, tested at full load and physically installed
in a commercial vessel, but the ship is not yet in commercial service — I have
assigned **8–9** rather than 9. **IHI's IM270 (T1)** sits on 7/8: ~3,000 h of
endurance running with load rejection and load dump is unusually strong
evidence, but it is at the OEM's own works with no customer unit sold, so I
have assigned **7–8**. Reasonable engineers could move either by one point.
**HiMSEN H32CDF-LA (E6)** is uncertain for a different reason: the sources say
"classification approval" without distinguishing approval-in-principle from
type approval, which is the difference between TRL ~5 and TRL ~8; I have
assigned **6–7** and flagged it.

**Two structural asymmetries will show up in the charts.** First, the **engine
rows cluster at high TRL (8–9) but are all marine**, while the **turbine rows
that are stationary sit lower (5–7)** — the ammonia engine industry is far more
mature than the ammonia turbine industry, but almost entirely in the wrong
application. The one exception is **IHI Power Systems' 6 MW land-based genset
(E8)**, new to this repo as of this document, which is the **first genuinely
stationary ammonia genset located** and directly closes the "does any OEM offer
a stationary ammonia genset?" open question from the comprehensive comparison
§5 — answer: yes, in demonstration since July 2026, commercial sales targeted
FY2027, explicitly aimed at data centres. Second, the **combined-cycle chart
will be almost empty by construction**: no reciprocating engine has any CC
product on ammonia at all (Flexicycle is natural gas only), and on the turbine
side only the H-25 has even a derivable CC figure. A CC scatter may be more
honest rendered as an "absence map" than as a scatter.

**Searched and not found** (record of negative results, so they are not
re-searched): **Kawasaki Heavy Industries** — no ammonia gas turbine programme
located (their alternative-fuel activity found is hydrogen: a 1.8 MW 100 %-H₂
dry-combustion GT cogeneration system and a 30 % H₂ co-firing gas engine).
**Solar Turbines / Caterpillar** — no ammonia programme located; their activity
is hydrogen (>2 million hours up to 70 % H₂; 100 % H₂ capability claimed).
**Ansaldo, Yanmar, Caterpillar/MaK** — no sourced ammonia power-generation
model found. Absence of evidence here is not evidence of absence, but nothing
should be entered for them.

---

## 3. Method & sourcing caveat (important)

Rows T1, T3, T4, T5, E1, E2 (partly) reuse sourcing already verified in
`NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md` (Rev 1) and
`../memory.md` §6. **New rows added this session (T6, T7, T8, T9, E3, E4, E5,
E6, E7, E8, E9) and the new figures in T1/T5 were retrieved via web-search
result summaries of the cited URLs — direct page fetches were blocked
(HTTP 403 at the egress proxy) throughout this session.** The facts are
attributed to named, linkable sources and are mutually corroborated where
possible, but **each new source should be opened and read once directly before
these rows are used in an investment-grade deliverable**. This caveat is
recorded rather than smoothed over, per CLAUDE.md §7.

---

## 4. Open questions / needs verification

- [ ] **Ammonia-specific net electrical efficiency for *any* named machine** —
      still not published by any OEM, in either cycle. This is the headline gap.
- [ ] **H-25:** is 34.8 % an ammonia figure or the NG spec? Needs a direct MHI
      query (carried forward from comprehensive comparison §5, unresolved).
- [ ] **IM270 on ammonia:** IHI publishes 2 MWe + 6 t/h steam but no electrical
      efficiency on NH₃; is the 26.6 % platform target retained on ammonia, and
      on what basis (LHV/HHV)?
- [ ] **IHI Power Systems 6 MW land genset:** electrical efficiency, NOx/N₂O/
      NH₃-slip results, price, and whether the FY2027 commercial-sales date
      holds. Highest-value follow-up in this document for the MYSGH2 P2 case.
- [ ] **HiMSEN H22CDF-LA / H32CDF-LA:** is the stated land-based power-generation
      application backed by an actual stationary genset package, and at what
      efficiency? Clarify H32's approval type (AiP vs type approval).
- [ ] **WinGD X-DF-A:** confirm vessel entry into commercial service (moves the
      TRL to a clean 9) and the per-model MW output.
- [ ] **J-ENG UEC50LSJA:** ammonia co-firing ratio (%) and engine MW output.
- [ ] **NovaLT16:** any ammonia combustion hardware result at all before the
      end-2027 test milestone; and verification of the "Tier III without SCR"
      claim at stationary duty.
- [ ] **Everllence ME-LGIA:** which bore/output is the 2026 shipyard-delivery
      engine, and its ammonia energy share in service.

---

## 5. Sources

1. IHI — Development of the 2 MW-Class Gas Turbine Cogeneration System Fuelled
   Exclusively by Liquid Ammonia (Cogeneration Award 2025; 2 MWe + 6 t/h steam;
   long-term durability testing):
   https://www.ihi.co.jp/en/all_news/2025/resources_energy_environment/1201875_13737.html
2. IHI — Development of Liquid Ammonia Direct Spray Combustion Gas Turbine
   (NOx <7 ppm; >99 % GHG reduction incl. N₂O at 70–100 % NH₃):
   https://www.ihi.co.jp/en/technology/techinfo/contents_no/1199391_13586.html ;
   Ammonia Energy Association — IHI Corporation (IM270 at Aioi, ~3,000 h as of
   Jan 2026, incl. load-rejection/load-dump):
   https://ammoniaenergy.org/organization/ihi-corporation/
3. OSTI/ETDEWEB — "Development of 2000 kW class IM270 gas turbine for electric
   power generation and cogeneration plant" (**development target 26.6 %**
   power-generation efficiency; 2,000 kW rated; single-shaft simple open cycle;
   NOx 20 ppm without denitrification; 30,000 h service life):
   https://www.osti.gov/etdeweb/biblio/401497 ; ASME GT1996 — "2 MW Class High
   Efficiency Gas Turbine IM270 for Co-Generation Plants":
   https://asmedigitalcollection.asme.org/GT/proceedings/GT1996/78750/V004T10A001/289228 ;
   IHI Power Systems — IM270 product page:
   https://www.ihi.co.jp/ips/english/products_land/gt_IM_LM/IM270.html
4. GE Vernova — IHI and GE Vernova achieve milestone with 100 % ammonia
   combustion in large-scale test (18 Mar 2026; full-scale components at
   pressures/temperatures/flows matching F-class full load; IHI Aioi
   Large-Scale Combustion Test facility inaugurated Jun 2025; commercial
   deployment targeted 2030):
   https://www.gevernova.com/news/press-releases/ihi-ge-vernova-achieve-milestone-100-ammonia ;
   POWER Magazine — same:
   https://www.powermag.com/ge-vernova-ihi-achieve-100-ammonia-combustion-in-f-class-gas-turbine-test/
5. GE Vernova & IHI — next phase of the technology roadmap, retrofittable
   100 %-ammonia combustion system for 6F.03 / 7F / 9F:
   https://www.ge.com/news/press-releases/ge-vernova-and-ihi-announce-next-phase-of-the-technology-roadmap-aiming-to-develop-a
6. 6F.03 platform figures (88 MW SC / 135 MW 1×1 CC / >57 % CC, NG) and the
   derived 37.2 % SC: `../memory.md` changelog 2026-07-28 (8) and
   `DECK_combined_cycle_GT_vs_GE_100MW_datacenter.md` (GE Vernova 6F.03 fact
   sheet basis).
7. Mitsubishi Power — H-25 Series (41 MW SC; ~60 MW 1×1 CC; ~120 MW 2×1):
   https://power.mhi.com/products/gasturbines/lineup/h25/
8. Mitsubishi Power — development of the world's first ammonia-fired 40 MW-class
   gas turbine, commercialisation "in or around 2025" (Mar 2021):
   https://power.mhi.com/news/20210301.html ; POWER Magazine — same:
   https://www.powermag.com/mitsubishi-power-developing-100-ammonia-capable-gas-turbine/
9. The 34.8 % / 50.9 % contested-anchor analysis:
   `NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md` §2 row M3, and
   `../memory.md` §3 (Assumptions Register, 2026-07-28 correction).
10. SpringerLink — "Demonstration Tests of Ammonia/Natural Gas Co-firing Power
    Generation with a 2-MW-Class Gas Turbine" (IM270 airframe, Yokohama,
    Oct 2020; 20 % NH₃ LHV mixing ratio; raw NOx 287 ppm @16 % O₂; <7 ppm with
    NOx-removal device):
    https://link.springer.com/chapter/10.1007/978-981-19-4767-4_35
11. Ammonia Energy Association — Performance of Ammonia–Natural Gas Co-Fired Gas
    Turbine for Power Generation:
    https://ammoniaenergy.org/presentations/performance-of-ammonia-natural-gas-co-fired-gas-turbine-for-power-generation/
12. Baker Hughes & Hanwha — partnership to develop a small-size ~16 MW 100 %
    ammonia-capable turbine (Feb 2025; full engine test on NH₃ by end-2027;
    deployment 2028; Tier III claimed without SCR):
    https://investors.bakerhughes.com/news-releases/news-release-details/baker-hughes-and-hanwha-announce-partnership-develop-small-size
13. Baker Hughes — NovaLT16 overview datasheet (16.9 MW generator drive,
    36.4 % efficiency; 17.5 MW mechanical drive, 37.4–37.5 %; up to 84 % CHP
    thermal efficiency):
    https://www.bakerhughes.com/sites/bakerhughes/files/2022-06/novalt16_overview.pdf ;
    product page: https://www.bakerhughes.com/gas-turbines/novalt-technology/novalt16
14. Ammonia Energy Association — Hanwha/Baker Hughes fuel-flexible small turbines:
    https://ammoniaenergy.org/articles/hanwha-baker-hughes-to-develop-fuel-flexible-small-size-turbines-for-maritime-propulsion/
15. Ammonia Energy Association — Toyota Energy Solutions organisation profile
    (50 kW MGT with Tohoku University and AIST; 21 kW on kerosene/NH₃ co-fire
    in 2014; >40 kW on ammonia gas only; 300 kW MGT for industrial use with
    100 % ammonia-only combustion achieved):
    https://ammoniaenergy.org/organization/toyota-energy-solutions/
16. Rich-Lean Combustor for a 50 kW-class Micro Gas Turbine Firing Ammonia
    (ResearchGate record):
    https://www.researchgate.net/publication/336454104_Rich-Lean_Combustor_for_a_50kW_class_Micro_Gas_Turbine_Firing_Ammonia ;
    ASME GT2021 — Start-Up Process of 50 kW-Class Gas Turbine Firing Ammonia
    Gas: https://asmedigitalcollection.asme.org/GT/proceedings-abstract/GT2021/84997/V006T19A012/1120140
17. AIChE / Ammonia Energy Association — Pure Ammonia Combustion Micro Gas
    Turbine System: https://www.ammoniaenergy.org/paper/pure-ammonia-combustion-micro-gas-turbine-system/
18. SpringerLink — "Development of 300 kW Ammonia Combustion Micro Gas Turbine":
    https://link.springer.com/chapter/10.1007/978-981-19-4767-4_34
19. Siemens Energy — Sustainable gas turbine fuels (cracked ammonia listed among
    green fuels under exploration):
    https://www.siemens-energy.com/us/en/home/products-services/solutions-usecase/sustainable-fuels.html
20. Power Progress — Siemens Energy explores gas turbines' future in net-zero
    energy mix (SGT-600/700/800 100 %-H₂-ready by 2025; research on direct and
    cracked ammonia combustion):
    https://www.powerprogress.com/news/siemens-energy-explores-gas-turbines-future-in-net-zero-energy-mix/8024799.article
21. Doosan Enerbility — Doosan Heavy pursues ammonia-fuelled hydrogen gas
    turbine (MoU with POSCO and RIST; combustion of cracked gas rather than
    ammonia itself):
    https://www.doosanenerbility.com/en/about/news_board_view?id=21000333
22. Ammonia Energy Association — Doosan Enerbility organisation profile:
    https://ammoniaenergy.org/organization/doosan-heavy-industries/
23. Wärtsilä 25 Ammonia product page (AmmoniaPac fuel supply, WARMS release
    mitigation, NOR NOx reducer): https://www.wartsila.com/marine/wartsila-25-ammonia
24. Wärtsilä — Power increase for Wärtsilä 25 Ammonia engine (315 kW/cyl
    @900 rpm; 345 kW/cyl @1000 rpm; 1.9–3.1 MW; deliveries 2028, 16 Apr 2026):
    https://www.wartsila.com/media/news/16-04-2026-power-increase-for-wartsila-25-ammonia-engine-supports-more-efficient-ammonia%E2%80%91fuelled-vessel-designs-3739966
25. Wärtsilä — Extensive testing of the 4-stroke ammonia engine demonstrates GHG
    reductions up to 90 % (27 May 2025; efficiency of the low-pressure concept
    stated as "equal to that of dual-fuel LNG engines"):
    https://www.wartsila.com/media/news/27-05-2025-extensive-testing-of-wartsila-s-4-stroke-ammonia-engine-demonstrates-ghg-emission-reductions-by-up-to-90-percent-3590235
26. Wärtsilä 34SG gas engine — 48.9 % electrical efficiency (natural gas):
    https://www.wartsila.com/energy/solutions/engine-power-plants/wartsila-34sg-gas-engine
27. Wärtsilä Flexicycle (engine combined cycle) — >54 % ISO, **natural gas**:
    https://www.wartsila.com/energy/engine-power-plant-solutions/engine-power-plant-products/applications/flexicycle-power-plants
28. Everllence — B&W ME-LGIA ammonia engine product page (shipyard delivery
    2026; 5 % SPOC pilot; >95 % NH₃ energy fraction):
    https://www.everllence.com/marine/products/two-stroke-engines/ammonia-engine
29. MAN Energy Solutions — Full-Scale Ammonia Engine Runs at 100 % Load
    (30 Jan 2025): https://www.man-es.com/company/press-releases/press-details/2025/01/30/full-scale-ammonia-engine-runs-at--100--load
30. Everllence — Ammonia Engine Passes "Huge Milestone" en Route to Commercial
    Debut (tests 10–12 Jun 2026 at Research Centre Copenhagen under eight
    classification societies):
    https://www.everllence.com/company/press-releases/details/2026/04/20/ammonia-engine-passes--huge-milestone--en-route-to-commercial-debut ;
    Marine Log — same: https://www.marinelog.com/shipbuilding/engines-fuel/everllence-ammonia-engine-passes-huge-milestone/
31. Everllence — Introduces Two-Stroke Ammonia Engine to Global Maritime
    Industry (Copenhagen, 13 Nov 2025):
    https://www.everllence.com/company/press-releases/details/2025/11/13/everllence-introduces-two-stroke-ammonia-engine-to-global-maritime-industry
32. WinGD — First ammonia-fuelled engine installed on EXMAR vessels (X52DF-A,
    46,000 m³ LPG/ammonia carrier, built by HD Hyundai HHI-EMD, installed at
    Hyundai Mipo Dockyard; ~30 X-DF-A engines on order; 72-bore variant to
    follow): https://wingd.com/news-media/news/wingd-s-first-ammonia-fuelled-engine-installed-on-exmar-vessels
33. WinGD — Exceptional results in full-load X-DF-A ammonia engine test:
    https://wingd.com/news-media/news/wingd-delivers-exceptional-results-in-full-load-x-df-a-ammonia-engine-test
34. gCaptain — WinGD makes history with first commercial ammonia-fuelled marine
    engine (high-pressure ammonia injection with ~5 % pilot diesel at full load):
    https://gcaptain.com/wingd-makes-history-with-first-commercial-ammonia-fueled-marine-engine/
35. Marine Log — WinGD X-DF-A in ammonia-fuelled engine installation world first:
    https://www.marinelog.com/shipbuilding/engines-fuel/wingd-x-df-a-in-ammonia-fueled-engine-installation-world-first/
36. Japan Engine Corporation — First Japanese-developed commercial large
    low-speed two-stroke engine starts ammonia co-firing operation (21 Apr 2025):
    https://www.j-eng.co.jp/en/news/20250421.html ; ammonia/hydrogen engine
    product page: https://www.j-eng.co.jp/en/solution-technology/lsja_lsgh.html
37. Ammonia Energy Association — J-ENG: testing complete, 2-stroke ammonia engine
    ready to roll out (7UEC50LSJA-HPSCR; ~1,000 h single-cylinder testing
    May 2023–Sep 2024; ~700 h full-scale over five months; delivery to JMU
    Ariake Oct 2025):
    https://ammoniaenergy.org/articles/j-eng-testing-complete-2-stroke-ammonia-engine-ready-to-roll-out/
38. Maritime Executive — Japan Engine starts co-firing ammonia engine ahead of
    October delivery (NYK AFMGC, service from Nov 2026):
    https://maritime-executive.com/article/japan-engine-starts-co-firing-ammonia-engine-ahead-of-october-delivery
39. HD Hyundai Heavy Industries — Develops ammonia dual-fuel engine and receives
    approval from 7 major classification societies (H22CDF-LA; type-approval
    test 30 Sep–2 Oct 2024, Engine Techno Center, Ulsan; world-first
    high-pressure ammonia direct injection):
    https://www.hyundai-engine.com/en/media/newsdetail/435 ; PR Newswire — same:
    https://www.prnewswire.com/news-releases/hd-hyundai-heavy-industries-develops-eco-friendly-ammonia-duel-fuel-engine-302272313.html
40. Ammonia Energy Association — Hyundai Heavy Industries organisation profile:
    https://ammoniaenergy.org/organization/hyundai-heavy-industries/
41. gCaptain — HD Hyundai Heavy Industries claims zero-carbon ammonia dual-fuel
    engine breakthrough (targets marine propulsion, onboard power generation and
    land-based power generation):
    https://gcaptain.com/hyundai-heavy-industries-claims-zero-carbon-ammonia-dual-fuel-engine-breakthrough/
42. HydrogenWire / Fuel Cells Works — HD HHI-EMD develops 4-stroke HiMSEN
    ammonia dual-fuel engine, model H32CDF-LA, maximum output 5.4 MW (Oct 2025):
    https://hydrogenwire.com/2025/10/20/hd-hyundai-heavy-industries-engine-machinery-develops-4-stroke-himsen-ammonia-dual-fuel-engine/
43. IHI Power Systems — ammonia dual-fuel engine product page:
    https://www.ihi.co.jp/ips/english/products_marine/niigata/ammonia_dual_fuel.html ;
    topics page (Apr 2023 operational tests, 280 mm-bore 4-stroke ammonia
    marine engine at the Ota plant):
    https://www.ihi.co.jp/ips/english/all_news/20230516.html
44. CIMAC 2025 paper 214 — "Development of an ammonia-fuelled engine (28ADF) for
    future marine" (max ammonia fuel-share ratio up to 95 %; GHG reduction incl.
    N₂O >80 % vs diesel mode):
    https://papers2025.cimaccongress.com/pdf/CIMAC_paper_214.pdf
45. Ammonia Energy Association — Emission performance of ammonia-fuelled
    four-stroke marine engines (NYK *Sakigake*: 94 % GHG cut at ~95 % NH₃,
    N₂O ≤1 % of CO₂e):
    https://ammoniaenergy.org/articles/emission-performance-of-ammonia-fueled-four-stroke-marine-engines/
46. Power Systems Research — IHI tests 6 MW ammonia-fuelled land-based engine
    (6,000 kW, Ota Plant Gunma from July 2026; NH₃ + heavy-fuel-oil dual fuel;
    targets >90 % ammonia ratio and >90 % GHG reduction; V18 scale-up of the
    1.6 MW 28ADF; testing to complete FY2026, commercial sales FY2027; target
    applications data centres, industrial parks, diesel-genset replacement):
    https://www.powersys.com/2026/07/ihi-tests-6-mw-ammonia-fueled-land-based-engine/
47. Ammonia Energy Association — Land-based, ammonia-fuelled power generator
    approaches commercialisation in Japan:
    https://ammoniaenergy.org/articles/land-based-ammonia-fueled-power-generator-approaches-commercialization-in-japan
48. MAN Energy Solutions — MAN Energy Solutions to lead new ammonia genset
    project (NH3 Spark – FutureFlex; EUDP-funded; MAN Holeby + DTU + Skovgaard
    Energy; single-cylinder testing at DTU Construct from Q3 2025, then
    full-scale under powerplant conditions at Skovgaard Energy's green-ammonia
    facility): https://www.man-es.com/company/press-releases/press-details/2025/05/22/man-energy-solutions-to-lead--new-ammonia-genset-project
49. Turbomachinery Magazine — MAN Energy launches four-stroke engine programme
    AmmoniaMot 2 (Aug 2024 start, ~3.5 yr; predecessor AmmoniaMot concluded
    May 2024):
    https://www.turbomachinerymag.com/view/man-energy-launches-four-stroke-engine-program-ammoniamot-2 ;
    NH3 Spark – FutureFlex:
    https://www.turbomachinerymag.com/view/man-energy-solutions-leads-ammonia-genset-project-nh3-spark-futureflex
50. Riviera Maritime Media — Four-stroke ammonia genset to ditch pilot fuel
    (spark-ignition, pilot-free target):
    https://www.rivieramm.com/news-content-hub/news-content-hub/four-stroke-ammonia-genset-to-ditch-pilot-fuel-84967
51. Negative-result sources (searched, no ammonia programme found): Kawasaki
    Heavy Industries — 1.8 MW 100 % hydrogen dry-combustion GT cogeneration
    system: https://global.kawasaki.com/en/corp/newsroom/news/detail/?f=20230905_2781 ;
    Solar Turbines (Caterpillar) — hydrogen page (>2 million hours up to 70 %
    H₂): https://www.solarturbines.com/en_US/solutions/carbon-reduction/hydrogen.html

---

*Rev 0, 2026-07-29. Every quantitative cell is sourced, a shown calculation, or
marked **not published** / **n/a**. No ammonia-specific efficiency has been
invented, estimated, or carried over from a natural-gas specification without an
explicit flag (CLAUDE.md §7).*
