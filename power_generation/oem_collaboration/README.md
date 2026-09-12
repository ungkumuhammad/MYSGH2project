# `oem_collaboration/` — Strategic collaboration with an ammonia engine OEM

Working folder for the proposed joint development with one of the three
shortlisted ammonia gas-engine OEMs (Wärtsilä, HD Hyundai HiMSEN, IHI —
see `../oem_surveys/gas_engine_oem_datasheets/`).

## The deliverable

**`Ammonia_Engine_Joint_Development_Milestones.docx`** — the OEM-facing
proposal. 15 pages. One document, issued unchanged to each of the three, to
establish who wants to embark.

Structure: purpose → the marine-to-stationary gap → basis of proposal →
5-stage programme (G0–G4) → technical milestones T0.x–T4.x → technical gap
register T1–T10 → commercial milestones C0.x–C4.x → gate criteria → what we
ask → respondent self-assessment → annex.

Regenerate with `build_milestones.js` (kept in the session scratchpad; copy
it here if the document needs to become a maintained artefact rather than a
one-off).

## ⚠️ Confidentiality constraint — read before circulating

The three source decks in `../oem_surveys/gas_engine_oem_datasheets/` are
**not freely shareable**:

| Deck | Restriction |
|------|-------------|
| IHI → Gentari, 27 Aug 2026 | Marked **Confidential**, addressed to Gentari Hydrogen Sdn Bhd |
| Wärtsilä 25 Ammonia → MISC, 1 Sep 2026 | Explicit notice: *"shall not be copied, reproduced, published, distributed or disclosed to a third party without the consent of the owner"* |
| HD Hyundai HiMSEN | Vendor deck, no explicit notice, but treat as supplied-in-confidence |

The proposal document was therefore written to contain **no OEM-specific
readiness claim, specification, roadmap date or competitor reference of any
kind**. It states only our own requirements and asks each OEM to declare its
own position (§10 self-assessment). This is deliberate — it is what makes a
single document safe to send to all three.

**Do not add competitor detail to the outgoing document.** Comparative
analysis belongs in the internal files only.

## Fields to fill before issuing

The document ships with these deliberately open. They are marked as open in
§3 rather than hidden, which is defensible, but fill what you can:

| Where | Item | Note |
|-------|------|------|
| Cover | *Issued to* / *Issued by* / *Date* | Blank rule lines |
| §3 | Power block location | Johor / Singapore / split — Stage 1 item |
| §3 | Contracted capacity and phasing | Repo's working reference is a 50 MW firm clean block (`../50MW_datacenter_NH3_engine_vs_CCGT_matrix.md`, assumption, 2026-07-16) — not yet confirmed against the actual AWS requirement |
| Throughout | **"the Customer"** | AWS is referred to generically as *"a global hyperscale data-centre operator… identity disclosed under NDA"*. Naming AWS to three vendors before they have agreed is a commercial exposure; this was a judgement call and is a one-word change if you want them named |

## Programme dates as proposed

| Gate | When | What it turns on |
|------|------|------------------|
| G0 Aligned | Q1 2027 | NDA, counterparts named |
| G1 Defined and funded | Q3 2027 | Basis of design, T1–T10 costed, cost-sharing term sheet, **manufacturing slot date identified** |
| G2 Committed | Q1 2028 | JDA, FEED, HAZOP, safety case lodged, **slot reserved** |
| G3 Proven | Q1 2029 | First fire on ammonia Q4 2028 → performance test + verified GHG balance |
| G4 Contracted | 2029→ | Scale-up contract, power agreement, FID |

The two critical-path items are called out explicitly in §4 and both start in
Stage 1: the **manufacturing slot** and **host-state consent for ammonia held
and burned on site**. If either slips to Stage 2, the 2028 target is lost.
