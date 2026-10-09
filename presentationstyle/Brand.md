# Main Brand — Gentari

> **Registered 2026-10-09 as the MYSGH2 project's main brand.** Applies to all
> Claude-generated decks, infographics, charts and documents in this repo.
> Visual reference sheet: [`brand/Gentari_brand_reference.png`](./brand/Gentari_brand_reference.png).
> Companion to [`Design_Style_Guide.md`](./Design_Style_Guide.md) (full token
> extraction from `Reference_Deck.pptx`).

**Provenance:** the reference sheet is a *working draft compiled from the
`frontendengineeringmodel` repository assets and theme tokens — not an official
Gentari brand guideline.* Colours are sampled from logo files. Treat as
"best available", not authoritative, until Gentari brand/comms supplies the
official guideline.

## Core colours

| Name | Hex | RGB | Use |
|---|---|---|---|
| Gentari Purple | `#60269E` | 96 38 158 | Wordmark colour; headings, title backgrounds, primary actions |
| Gentari Cyan | `#00C8E8` | 0 200 232 | Logo-icon colour; accents/highlights. White text on cyan fails contrast → use dark text |

## UI palette (light theme, from `Dashboard/app/globals.css`)

| Token | Hex | | Token | Hex |
|---|---|---|---|---|
| primary | `#6B2E99` | | muted-foreground | `#65758B` |
| accent-foreground | `#441D62` | | border | `#E1E7EF` |
| accent | `#F1EAF6` | | background | `#F8FAFC` |
| foreground | `#0F1729` | | muted | `#F1F5F9` |
| card | `#FFFFFF` | | success / warning / destructive | `#21C45D` / `#F59E0A` / `#DC2828` |

UI `primary` (`#6B2E99`) is close to, but not the same as, logo purple. **For
decks/documents use `#60269E`.** The dashboard dark theme's blue primary
(`#3C83F6`) is not a brand colour.

## Logo

- Source files (in `frontendengineeringmodel`, `Dashboard/public/branding`):
  `gentari-logo.png` (primary lockup, 703×479), `gentari-icon.png` (282×282).
- Purple wordmark needs a **light background**. No white/mono version exists;
  on purple or dark backgrounds use the **icon only**.
- Not yet in this repo (no files supplied here) — copy from the source repo.

## Typography

No official typeface is defined in the source repo. Interim stand-in: **Inter**
(or another clean geometric sans); muted text `#65758B`. Note the existing
deck guide records Verdana (Gentari-Update-feb23 theme) — see conflicts below.

## Conflicts with existing repo guidance (surfaced, not silently resolved)

1. **Title purple:** `Design_Style_Guide.md` records a hard-coded `#7030A0`
   (97 occurrences in `Reference_Deck.pptx`) and the Gentari theme's
   `#60269E`. The brand sheet specifies `#60269E`. Going forward, new work uses
   `#60269E`; `#7030A0` is only for matching the legacy reference deck.
2. **Cyan:** theme accent2 is `#00C5E5`; the brand sheet samples `#00C8E8`
   from the logo. Differences are ~3 steps/channel; new work uses `#00C8E8`.
3. **Font:** Verdana (deck theme) vs Inter (sheet stand-in). Open until the
   official typeface is confirmed.

## Gaps — obtain from Gentari brand / comms

Official typeface(s) and type scale; logo clear space, minimum size, misuse
rules; white/mono/horizontal logos and vector (SVG/EPS); secondary/extended
palette and gradients; photography, iconography, tone of voice; official
PowerPoint master.
