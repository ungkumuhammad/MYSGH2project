# Gas Engine OEM Shortlist — Source Documents

Three ammonia-fired reciprocating gas engine OEMs, shortlisted from the
`power_generation/` gas-engine assessment, with their vendor-supplied
material converted from PDF to Markdown via
[`microsoft/markitdown`](https://github.com/microsoft/markitdown) for
easier searching/citation in the repo. Original PDFs are kept alongside
each `.md` for traceability (per `CLAUDE.md` §7 — every number in analysis
must trace back to a source).

| OEM | Document | Markdown | Source PDF |
|-----|----------|----------|-------------|
| Wärtsilä | *Wärtsilä 25 Ammonia*, presented to MISC, 1 Sep 2026 (Mikko Väkeväinen, Commercial Manager, Wärtsilä 25) | [`Wartsila_25_Ammonia_for_MISC.md`](./Wartsila_25_Ammonia_for_MISC.md) | [`Wartsila_25_Ammonia_for_MISC.pdf`](./Wartsila_25_Ammonia_for_MISC.pdf) |
| HD Hyundai (Himsen) | *HiMSEN Ammonia Engine* product/technology deck | [`HD_Hyundai_HiMSEN_Ammonia_Engine.md`](./HD_Hyundai_HiMSEN_Ammonia_Engine.md) | [`HD_Hyundai_HiMSEN_Ammonia_Engine.pdf`](./HD_Hyundai_HiMSEN_Ammonia_Engine.pdf) |
| IHI | *IHI business introduction of Ammonia Value Chain*, to Gentari Hydrogen Sdn Bhd, 27 Aug 2026 (IHI Corporation / IHI Power Systems Co., Ltd, Ammonia Value Chain Project Department) | [`IHI_Gentari_AVC_Ammonia_Engine_Presentation.md`](./IHI_Gentari_AVC_Ammonia_Engine_Presentation.md) | [`IHI_Gentari_AVC_Ammonia_Engine_Presentation.pdf`](./IHI_Gentari_AVC_Ammonia_Engine_Presentation.pdf) |

## Status

Raw conversions only — **not yet reviewed/normalised into a comparison
matrix.** `markitdown` extracts text/tables reasonably well but slide decks
with heavy layout (multi-column figures, stacked labels, superscripts like
N₂O) can come through with garbled ordering or split table rows. Treat the
`.md` files as a searchable index into the source decks, not as a
cleaned dataset — verify any number pulled from them against the original
PDF (or the vendor) before using it in a deliverable, per the repo's
No-Fabrication Rule.

## Next step

Fold the sourced claims from these three OEMs (efficiency, power range,
fuel flexibility, NOx/N₂O treatment, delivery timelines) into the existing
`power_generation/oem_surveys/Ammonia-Fired_PowerGen_OEM_Survey.md` and/or
the `power_generation/NH3_gas_turbine_vs_gas_engine_comprehensive_comparison.md`
matrix, each claim citing back to the specific PDF/slide above.
