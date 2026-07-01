# Design Style Guide — Reference_Deck.pptx (visual tokens)

> **Purpose:** `presentationstyle/Reference_Deck.pptx` (~6.6 MB) is too large
> for Claude Design to load directly. This file captures the **visual design
> tokens** (colors, fonts, type scale, canvas) extracted directly from the
> deck's OOXML source, so Claude Design can restyle future decks without
> opening the binary. Pair with `presentationstyle/Reference_Deck.md`
> (content/structure only — no styling, per `markitdown` limitations noted
> in `memory.md`).
>
> **Source & method:** values below were read directly out of the `.pptx`
> zip archive — `ppt/theme/theme2.xml`, `ppt/theme/theme3.xml`, and
> `srgbClr`/`rPr` attributes inside `ppt/slides/slide1.xml`–`slide9.xml` —
> traced slide → slideLayout → slideMaster → theme for all 9 slides. No
> values are invented (No-Fabrication Rule, `CLAUDE.md` §7).
>
> **Key finding:** the deck mixes **two themes** across its 9 slides —
> slides 1, 4–9 use the generic PowerPoint "Office" default theme; slides 2–3
> use a custom **"Gentari-Update-feb23"** brand theme. On top of both, a
> **hardcoded purple `#7030A0`** is applied directly to titles/branding
> across nearly the whole deck (97 occurrences) — this, not either theme's
> native palette, is the deck's real visual identity.

---

## 1. Primary palette — Gentari brand theme

*(theme3.xml, used natively on slides 2–3; its accent colors and the
`#7030A0` override recur across the whole deck as the corporate identity)*

**Recommended as the default palette/font for future Claude-generated decks
on this project** — it's the deliberate brand (not PowerPoint's default),
matches the dominant `#7030A0` title override, and its extension colors are
directly on-topic for a hydrogen project.

### Theme color roles (12-role scheme)

| Role | Hex | Notes |
|---|---|---|
| dk1 (Dark 1 / body text) | `#787878` | mid-grey, not pure black |
| lt1 (Light 1 / background) | `#FFFFFF` | white |
| dk2 (Dark 2) | `#60269E` | brand purple |
| lt2 (Light 2) | `#E5EDED` | pale grey-teal |
| accent1 | `#60269E` | purple |
| accent2 | `#00C5E5` | cyan/teal |
| accent3 | `#B2007F` | magenta/pink |
| accent4 | `#ED2B60` | red/coral |
| accent5 | `#FAD83A` | yellow |
| accent6 | `#556938` | olive green |
| hlink (hyperlink) | `#00C5E5` | cyan |
| folHlink (followed hyperlink) | `#60269E` | purple |

### Extended brand colors (found in theme XML color extension list)

| Name | Hex |
|---|---|
| Purple | `#60269E` |
| Blue | `#00C5E5` |
| Pink | `#B2007F` |
| Red | `#ED2B60` |
| Yellow | `#FAD83A` |
| Olive | `#556938` |
| Lime | `#DDD65F` |
| Hydrogen | `#0062E4` |
| Renewable | `#F58222` |
| Green | `#58C549` |

### Dominant hardcoded branding override

| Hex | Occurrences | Usage |
|---|---|---|
| `#7030A0` | 97 | **Titles / headings / CrackerTech branding** — bold, ~24pt. Applied on top of both themes; treat as the de facto primary brand color for titles in new decks. |

### Font

- **Major (titles) & minor (body):** **Verdana** (both roles use the same
  typeface in this theme).

---

## 2. Secondary / fallback palette — Office default theme

*(theme2.xml, used natively on slides 1, 4–9 — this is PowerPoint's stock
"Office" theme, not a deliberate brand choice, but appears on the majority
of slides by raw count)*

### Theme color roles (12-role scheme)

| Role | Hex | Notes |
|---|---|---|
| dk1 (Dark 1) | `#000000` | system windowText |
| lt1 (Light 1) | `#FFFFFF` | system window |
| dk2 (Dark 2) | `#0E2841` | dark navy |
| lt2 (Light 2) | `#E8E8E8` | light grey |
| accent1 | `#156082` | blue-grey |
| accent2 | `#E97132` | orange |
| accent3 | `#196B24` | green |
| accent4 | `#0F9ED5` | sky blue |
| accent5 | `#A02B93` | magenta |
| accent6 | `#4EA72E` | mid green |
| hlink | `#467886` | teal |
| folHlink | `#96607D` | mauve |

### Font

- **Major (titles):** **Aptos Display**
- **Minor (body):** **Aptos**

---

## 3. Other hardcoded override colors seen on slides

Colors applied directly on shapes/text (not from either theme), in
descending frequency:

| Hex | Occurrences | Usage guess |
|---|---|---|
| `#002060` | 47 | Body text & accent box fills |
| `#787878` | 31 | Secondary text & dividers (matches Gentari dk1) |
| `#FFFFFF` | 22 | White text/fills on dark backgrounds |
| `#0070C0` | 11 | Link/accent elements, blue highlights |
| `#A14CE4` | 6 | Accent/callout box fills — lighter purple |
| `#0E2841` | 6 | Deep background fill (matches Office dk2) |
| `#E5EDED` | 3 | Light background (matches Gentari lt2) |
| `#FEFEFE` | 2 | Near-white, subtle background variation |
| `#156082` | 2 | Theme accent (matches Office accent1) |
| `#01B1A9` | 1 | One-off teal highlight |

---

## 4. Typography scale

Observed font sizes across all 9 slides (sz attribute, hundredths of a
point):

| Size | Usage |
|---|---|
| 24 pt | Titles (primary headings), typically **bold** |
| 18 pt | Section headers, large accent text |
| 16 pt | Subheadings, emphasized body text |
| 14 pt | Default body text |
| 12 pt | Secondary body text, small callouts |
| 11 pt | Fine print, footnotes |
| 10.5 pt | Caption text |
| 10 pt | Small annotations |
| 9 pt | Tiny labels, footnotes |
| 8 pt | Very small text |
| 7 pt | Minimal labels (rare) |

Titles are consistently bold (`b="1"`); some decorative text uses italic
(`i="1"`). The Gentari-themed slides (2–3) use more explicit inline
weight/size markup than the Office-themed slides.

---

## 5. Canvas / layout

- **Slide size:** 12,192,000 × 6,858,000 EMU = **13.33″ × 7.5″**
- **Aspect ratio:** **16:9** (standard widescreen)
- **Background:** theme-controlled solid/light fill (`bgRef idx="1001"`,
  default Office format-scheme fill) on both slide masters actually in use —
  no custom background art or images in either master.

---

## 6. Usage guidance for future decks

Default new Claude Design decks for this project to the **Gentari palette**
(§1): purple `#7030A0` for titles/headings, `#60269E`/`#00C5E5`/`#B2007F`/
`#ED2B60`/`#FAD83A`/`#556938` as the accent set (or the topic-relevant
extensions `#0062E4` Hydrogen / `#F58222` Renewable / `#58C549` Green where a
hydrogen-project-specific accent is wanted), Verdana for both titles and
body, 16:9 canvas, and the type scale in §4. Fall back to the Office palette
(§2) / Aptos fonts only when explicitly matching the Office-themed half of
the source deck (slides 1, 4–9).
