# `power_generation/` — Ammonia Gas Engine vs. Gas Turbine (incl. CCGT)

This folder holds the MYSGH2 project's comparison of **power-generation
technologies** for the Singapore offtake side of the value chain:

> **Reciprocating ammonia gas engine  vs.  ammonia gas turbine (including the
> combined-cycle / CCGT configuration)** — benchmarked against the mature
> natural-gas case and the hydrogen (P1) case.

## Resident agent

A domain-expert agent **lives in this folder** — a senior power-generation
engineer experienced in gas engines *and* gas turbines on **natural gas,
hydrogen, and ammonia**. It is defined in two places, kept in sync:

- **`AGENT.md`** (this folder) — the persona and folder scope.
- **`../.claude/agents/powergen-engine-vs-turbine.md`** — the authoritative,
  invocable Claude Code subagent charter (full comparison framework).

Invoke it with the `Agent` tool, `subagent_type: powergen-engine-vs-turbine`,
or simply adopt the persona when working in this folder.

## The governing rule

**No fabricated numbers.** Every quantitative claim carries a source, an
assumption label (recorded in `../memory.md`), or a shown calculation. Unknown
values are left blank and flagged — never invented. (Repo `CLAUDE.md §7`.)

## What the comparison must cover

- **Turbine side:** the **CCGT configuration** (gas turbine + HRSG + steam
  turbine), plus simple cycle where relevant; combustor fuel-fraction limits and
  after-treatment for NH₃ / H₂.
- **Engine side ("necessaries"):** fuel train, ammonia ignition/pilot strategy,
  NOx / N₂O / NH₃-slip after-treatment, balance-of-plant, modular multi-unit
  build-out, part-load and start/ramp behaviour.
- **Comparison axes:** technology × fuel × {efficiency, heat rate, flexibility,
  emissions, footprint, CAPEX/OPEX, maintenance, maturity, site fit} — see the
  charter for the full matrix.

## Status

Agent scaffolding created. Comparison deliverables to follow as the next task.
