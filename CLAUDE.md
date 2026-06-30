# CLAUDE.md — MYSGH2 Project (Malaysia → Singapore Green Hydrogen via Green Ammonia)

> Root guidance file for any Claude Code / AI agent working in this repository.
> Read this first. For persistent project memory (decisions, assumptions, open
> questions, data provenance, changelog) **always consult and update
> [`memory.md`](./memory.md)** — see [Memory Protocol](#memory-protocol).

---

## 1. Project In One Sentence

Import **green ammonia** by sea into **Johor, Malaysia** at the **MMHE (Pasir
Gudang) site**, **crack** it on-site back to **hydrogen**, and **pipe the
hydrogen across the border to Singapore** — with the pipeline route, sizing and
phasing evaluated on a **permutation basis** (multiple competing
configurations compared against each other).

## 2. Value Chain (the spine of everything in this repo)

```
                          MMHE SITE, JOHOR (1.4636021248316995, 103.87188651244458)
                          ┌─────────────────────────────────────────────┐
  Green NH3   ──ship──►   │  [1] Ammonia    [2] NH3        [3] Ammonia    │  ──H2 pipeline──►  SINGAPORE
  (imported)   marine     │      Jetty   →     Storage  →     Cracker     │   (permutation        (offtake)
                          │   (unloading)    (refrigerated)  (NH3→H2+N2)  │    routes)
                          └─────────────────────────────────────────────┘
```

| # | Asset | Function | Key design driver |
|---|-------|----------|-------------------|
| 1 | **Ammonia jetty** | Receive/unload ammonia carriers | Vessel size, unloading rate, marine met-ocean, draft at MMHE |
| 2 | **Ammonia storage** | Buffer between ship arrivals and continuous cracking | Refrigerated liquid NH₃ (~−33 °C, atmospheric), days of autonomy |
| 3 | **Ammonia cracker** | Catalytic decomposition NH₃ → H₂ + N₂, + H₂ purification | Cracking temp/energy, conversion, purity spec for Singapore offtake |
| 4 | **H₂ pipeline(s) to Singapore** | Cross-border hydrogen export | Route permutation, diameter, pressure, material (embrittlement), crossing |

## 3. Site

- **Site:** MMHE — Malaysia Marine and Heavy Engineering, Pasir Gudang, Johor,
  Malaysia (MMHE operates West Yard and East Yard at Pasir Gudang).
- **Reference coordinate:** `1.4636021248316995, 103.87188651244458`
  (decimal degrees, WGS84 — latitude, longitude).
- **Cross-border context:** The route falls within the geography of the
  **Johor–Singapore Special Economic Zone (JS-SEZ)**, whose agreement was
  signed **7 January 2025** and includes a renewable-energy / green-economy
  cooperation framework. This is the policy umbrella that makes a cross-border
  hydrogen link plausible. *(Verify project-specific permitting separately.)*

## 4. The "Permutation Basis" Concept (central to this project)

The pipeline (and, by extension, upstream sizing) is **not a single fixed
design**. It is defined as a **set of permutations** that are generated,
costed, and compared. When you add analysis, code, or documents, treat each
candidate as one permutation in a comparable matrix. A permutation is defined
by — at minimum — the following independent variables:

- **Route / corridor** (landfall point on the Singapore side, crossing method:
  subsea vs. bridge/causeway-adjacent, onshore alignment).
- **Carrier medium of the crossing** — pure H₂ vs. (alternatively) move ammonia
  further and crack closer to demand. *(Document which permutations crack at
  MMHE vs. elsewhere.)*
- **Pipeline diameter & operating pressure.**
- **Material grade** (hydrogen embrittlement constraints — see §5).
- **Throughput / phasing** (Phase 1 capacity vs. expansion).
- **Number of parallel lines / redundancy.**

> When asked to "evaluate the pipeline," produce or update a **permutation
> matrix** (one row per permutation, columns = the variables above + CAPEX/OPEX,
> LCOH contribution, risk). Record the matrix structure and chosen permutations
> in `memory.md` so they persist across sessions.

## 5. Technical Reference Data (cited — do not replace with invented numbers)

> **These are public literature/reference values for first-pass sizing only.**
> They are NOT a substitute for vendor data or a process simulation. Every
> number used in a deliverable must keep its source. See §7 (No-Fabrication
> Rule).

**Ammonia as a hydrogen carrier**
- Hydrogen content: **17.8 wt% H₂** in NH₃; **≈121 kg H₂/m³** as liquid at
  −33 °C / atmospheric (or ~8.6 bar at ambient). Volumetric H₂ density ~5× that
  of 350-bar compressed H₂. Boil-off ~0.025 %/day.
  → Ammonia Energy Association; BBA Consultants. (See memory.md refs.)

**Ammonia cracking (NH₃ → 1.5 H₂ + 0.5 N₂)**
- Reaction is **endothermic, ~46 kJ/mol NH₃**; plus ~23.4 kJ/mol for
  vaporisation of liquid NH₃ + preheating.
- Industrial crackers operate at **~700–900 °C** for high conversion.
- **Theoretical minimum** energy ≈ **0.88 MWh/t NH₃ (≈5.0 MWh/t H₂)**;
  **current crackers ≈ 1.17–1.76 MWh/t NH₃ (≈6.63–9.97 MWh/t H₂)**.
- Active R&D (2025) targets lower-temperature (≈475–575 °C) non-Ru catalysts.
  → ScienceDirect reviews (2024–2025); Topsoe; thyssenkrupp Uhde; Technip
  Energies. (See memory.md refs.)

**Hydrogen pipeline / material integrity**
- **Hydrogen embrittlement** of steel is the governing integrity risk; H₂
  degrades steel mechanical properties **regardless of concentration**.
- Codes: **ASME B31.12** governs hydrogen piping (applies for H₂ >10 % molar).
  Blending caps in other jurisdictions are far lower (France ~6 %, Germany ~8 %,
  CA PUC ~5 %) — relevant only if any permutation considers blending rather than
  pure H₂.
  → DeGruyter/MDPI/ScienceDirect reviews. (See memory.md refs.)

**Hydrogen reference properties** (textbook constants, safe to use)
- LHV H₂ ≈ 120 MJ/kg; HHV ≈ 142 MJ/kg. NH₃ LHV ≈ 18.6 MJ/kg.

**Demand-side context (Singapore)**
- Singapore's **National Hydrogen Strategy** (launched 25 Oct 2022) positions
  low-carbon hydrogen to supply **up to ~50 % of power needs by 2050**;
  Singapore is structurally a **net importer** of low-carbon H₂/NH₃.
  → EMA Singapore. (See memory.md refs.)

## 6. How to Work in This Repo

- **Start by reading `memory.md`** to load prior decisions and assumptions, so
  you don't re-derive or contradict them.
- Keep deliverables **traceable**: every quantitative claim carries a source or
  is explicitly flagged as an assumption.
- Prefer **permutation tables / comparison matrices** over single-point answers
  for anything touching the pipeline or sizing.
- Keep units **explicit and SI-first** (t/yr, MW, bar, °C, km, mm). State
  whether energy figures are LHV or HHV.
- When a number is uncertain, give a **range + basis**, never a fabricated
  point value.

## 7. No-Fabrication Rule (hard requirement)

This project is run by a domain expert. **Do not invent numbers, costs,
distances, capacities, efficiencies, or vendor specs.** For every quantitative
statement you must do one of:
1. Cite a verifiable public source (link/standard), **or**
2. Label it clearly as an **assumption** and record it in `memory.md`, **or**
3. Show it as the **output of a stated calculation** whose inputs satisfy (1) or (2).

If you cannot source or derive a number, say so and ask — do not guess.

## 8. Memory Protocol

`memory.md` is the project's **persistent memory** across sessions. Treat it as
the single source of truth for state that must outlive a conversation.

- **Read it** at the start of any task.
- **Update it** whenever you: make/confirm a decision, adopt an assumption,
  define or change a permutation set, add a sourced data point, or close an open
  question.
- Keep entries **dated** and **sourced**. Append to the changelog.
- If `CLAUDE.md` and `memory.md` disagree, surface the conflict — do not
  silently pick one.

---

*This file defines scope, conventions, and the factual/technical baseline.
Living state lives in [`memory.md`](./memory.md).*
