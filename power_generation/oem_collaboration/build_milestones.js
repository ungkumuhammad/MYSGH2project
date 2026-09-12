const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  PageBreak, Footer, PageNumber, LevelFormat, convertInchesToTwip,
} = require("docx");
const fs = require("fs");

// ---------- palette ----------
const DARK = "0E3B3A";   // deep petrol
const ACCENT = "1B7F79"; // teal
const LIGHT = "E8F1F0";  // pale teal fill
const RULE = "C6DAD7";
const AMBER = "9A5B00";
const GREY = "5A6B69";
const TABLE_W = 9746;

// ---------- helpers ----------
const P = (text, opt = {}) => new Paragraph({
  spacing: { before: opt.before ?? 0, after: opt.after ?? 120, line: 264 },
  alignment: opt.align,
  indent: opt.indent,
  children: [new TextRun({
    text, bold: opt.bold, italics: opt.italics, color: opt.color ?? "1A1A1A",
    size: opt.size ?? 21, font: "Calibri",
  })],
});

// rich paragraph: array of [text, {bold,italics,color}]
const RP = (parts, opt = {}) => new Paragraph({
  spacing: { before: opt.before ?? 0, after: opt.after ?? 120, line: 264 },
  alignment: opt.align,
  children: parts.map(([t, o = {}]) => new TextRun({
    text: t, bold: o.bold, italics: o.italics, color: o.color ?? "1A1A1A",
    size: o.size ?? opt.size ?? 21, font: "Calibri",
  })),
});

const H1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  keepNext: true,
  spacing: { before: 360, after: 160 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: ACCENT, space: 6 } },
  children: [new TextRun({ text, bold: true, color: DARK, size: 28, font: "Calibri" })],
});

const H2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  keepNext: true,
  spacing: { before: 260, after: 110 },
  children: [new TextRun({ text, bold: true, color: ACCENT, size: 23, font: "Calibri" })],
});

const BULLET = (text, level = 0) => new Paragraph({
  numbering: { reference: "bullets", level },
  spacing: { after: 90, line: 264 },
  children: [new TextRun({ text, size: 21, font: "Calibri", color: "1A1A1A" })],
});

const SPACER = (h = 120) => new Paragraph({ spacing: { after: h }, children: [] });

const cellPara = (text, o = {}) => new Paragraph({
  spacing: { before: 40, after: 40, line: 252 },
  alignment: o.align,
  children: [new TextRun({
    text: String(text), bold: o.bold, italics: o.italics,
    color: o.color ?? "1A1A1A", size: o.size ?? 18, font: "Calibri",
  })],
});

const TD = (content, width, o = {}) => new TableCell({
  width: { size: width, type: WidthType.DXA },
  shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill, color: "auto" } : undefined,
  margins: { top: 70, bottom: 70, left: 110, right: 110 },
  verticalAlign: o.valign ?? "top",
  children: Array.isArray(content)
    ? content.map((c) => cellPara(c, o))
    : [cellPara(content, o)],
});

// table: head = array of strings, rows = array of arrays, widths = array
function T(head, rows, widths, opt = {}) {
  const trs = [];
  if (head) {
    trs.push(new TableRow({
      tableHeader: true,
      cantSplit: true,
      children: head.map((h, i) => TD(h, widths[i], { bold: true, color: "FFFFFF", fill: DARK, size: 18 })),
    }));
  }
  rows.forEach((r, ri) => {
    trs.push(new TableRow({
      cantSplit: true,
      children: r.map((c, i) => {
        const isFirst = i === 0;
        const o = { size: 18 };
        if (opt.zebra && ri % 2 === 1) o.fill = LIGHT;
        if (opt.boldFirstCol && isFirst) o.bold = true;
        if (opt.firstColColor && isFirst) o.color = opt.firstColColor;
        return TD(c, widths[i], o);
      }),
    }));
  });
  return new Table({
    columnWidths: widths,
    width: { size: TABLE_W, type: WidthType.DXA },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: RULE },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE },
      left: { style: BorderStyle.SINGLE, size: 4, color: RULE },
      right: { style: BorderStyle.SINGLE, size: 4, color: RULE },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: RULE },
      insideVertical: { style: BorderStyle.SINGLE, size: 4, color: RULE },
    },
    rows: trs,
  });
}

// callout box
const CALLOUT = (title, body) => new Table({
  columnWidths: [TABLE_W],
  width: { size: TABLE_W, type: WidthType.DXA },
  borders: {
    top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    left: { style: BorderStyle.SINGLE, size: 18, color: ACCENT },
    right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  },
  rows: [new TableRow({
    children: [new TableCell({
      width: { size: TABLE_W, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: LIGHT, color: "auto" },
      margins: { top: 140, bottom: 140, left: 200, right: 200 },
      children: [
        new Paragraph({
          spacing: { after: 70 },
          children: [new TextRun({ text: title, bold: true, color: DARK, size: 20, font: "Calibri" })],
        }),
        ...(Array.isArray(body) ? body : [body]).map((b) => new Paragraph({
          spacing: { after: 60, line: 260 },
          children: [new TextRun({ text: b, size: 20, font: "Calibri", color: "1A1A1A" })],
        })),
      ],
    })],
  })],
});

const FILLIN = (label, widthChars = 46) => RP([
  [label + "  ", { bold: true, color: DARK }],
  ["_".repeat(widthChars), { color: "9AACAA" }],
], { after: 160 });

// ============================================================
//  CONTENT
// ============================================================
const cover = [
  SPACER(900),
  RP([["MYSGH2  ·  JOHOR – SINGAPORE GREEN ENERGY PROGRAMME", { bold: true, color: ACCENT, size: 18 }]], { after: 300 }),
  new Paragraph({
    spacing: { after: 160, line: 580 },
    children: [new TextRun({
      text: "Embarking Together on Ammonia-Fired Engine Power",
      bold: true, color: DARK, size: 48, font: "Calibri",
    })],
  }),
  new Paragraph({
    spacing: { after: 340, line: 330 },
    children: [new TextRun({
      text: "A commercial and technical milestone framework for reaching data-centre-grade maturity",
      color: GREY, size: 26, font: "Calibri",
    })],
  }),
  new Paragraph({
    spacing: { after: 360 },
    border: { top: { style: BorderStyle.SINGLE, size: 12, color: ACCENT, space: 10 } },
    children: [],
  }),
  RP([["Purpose.  ", { bold: true, color: DARK }],
      ["An invitation to a shortlisted engine OEM to co-develop, with us, an ammonia-fired reciprocating engine power block capable of supplying firm low-carbon electricity to a hyperscale data-centre customer — and the staged milestones, technical and commercial, by which we propose to get there.", {}]],
     { after: 200 }),
  RP([["Target.  ", { bold: true, color: DARK }],
      ["A demonstration unit firing ammonia on site in Q4 2028, in commercial operation and performance-tested by Q1 2029.", {}]],
     { after: 420 }),
  SPACER(200),
  FILLIN("Issued to", 44),
  FILLIN("Issued by", 44),
  FILLIN("Date", 44),
  SPACER(240),
  RP([["Confidential — issued for discussion purposes. This document is a basis for dialogue and is not an offer, a tender, or a commitment to contract.", { italics: true, color: GREY, size: 18 }]], { after: 0 }),
  new Paragraph({ children: [new PageBreak()] }),
];

const s1 = [
  H1("1.  Purpose and invitation"),
  P("We are developing an integrated green-ammonia value chain into the Johor–Singapore corridor: green ammonia imported by sea to Pasir Gudang, Johor, and converted there into clean energy for customers on both sides of the Strait. One of those customers is a global hyperscale data-centre operator whose clean-energy requirements we intend to serve with firm, ammonia-fired generation."),
  P("Having completed our own assessment of the available prime-mover technologies, we have selected the ammonia-fired four-stroke reciprocating engine as the route we wish to pursue for this duty, and we have shortlisted a small number of OEMs capable of delivering it."),
  P("We have also reached a second conclusion, and we state it plainly because it is the reason for this document:"),
  CALLOUT("Our reading of the market", [
    "No ammonia-fired reciprocating engine offering is today commercially and technically ready for continuous, data-centre-grade land-based power generation in this region. On the public roadmaps we can see, that readiness arrives around 2029.",
    "We do not intend to wait for it. We would rather help build it — with one partner, on a shared timeline, with shared risk.",
  ]),
  SPACER(160),
  P("This document sets out the milestones by which we propose to do that. It runs two streams in parallel — a technical stream that closes the engineering gap between a type-approved marine engine and a data-centre power plant, and a commercial stream that turns a development relationship into a bankable supply. It is issued to each shortlisted OEM so that we can establish, quickly and without ambiguity, who wishes to embark on this journey with us."),
  P("The timeline is deliberately open-ended in its later stages. The one date we care about is the first one: we want something running, on ammonia, on the ground, in 2028 or early 2029."),
];

const s2 = [
  H1("2.  The gap we are asking you to close with us"),
  P("The ammonia engine is not an unproven machine. It has been fired, type-approved, and sold. The gap is not combustion — it is everything that changes when the engine stops being a ship's engine and becomes a power station serving a critical load under a host-state permit and an audited carbon claim."),
  P("This is our read of that gap. We would welcome your correction of any line in it."),
  SPACER(60),
  T(["Dimension", "Where ammonia engines stand today", "What this offtake requires"], [
    ["Primary application", "Marine propulsion and ship's auxiliary power; type-approved, and in service or on order for vessels.", "Continuous, land-based generation serving a critical IT load, grid-parallel or islanded."],
    ["Certification basis", "Classification-society type approval and the marine emissions certification regime.", "Land power-plant design codes, host-state energy and environmental consent, and major-hazard-installation approval for ammonia held on site."],
    ["Duty cycle", "Variable ship load, crewed engine room, an operator on watch.", "Near-constant, high-capacity-factor base load with little diurnal variation, run remotely or lightly manned, to data-centre alarm and response standards."],
    ["Greenhouse-gas basis", "A relative tank-to-wake reduction against a fuel-oil baseline, typically quoted as “over 90 %”.", "Absolute, metered, independently verifiable emissions per MWh — N₂O and pilot-fuel carbon included — fit for the Customer’s carbon-free-energy accounting and external assurance."],
    ["Emissions control", "SCR sized for marine NOx tiers; ammonia slip managed to marine limits.", "Host-state stack limits for NOx and ammonia, plus an N₂O measurement and abatement solution that is guaranteed, not merely observed."],
    ["Fuel supply", "Bunkered ammonia, marine fuel logistics, vessel tanks.", "Landed green ammonia from an import terminal, refrigerated bulk storage, on-site transfer and conditioning, inside a land-based safety case."],
    ["Reliability commitment", "Class survey regime; time between overhauls quoted on ammonia.", "Contractual availability and heat-rate guarantees with liquidated damages, spares held in-region, and a mobilisation commitment."],
    ["Plant scale and architecture", "One to a few units per vessel.", "A multi-unit plant with N+1 redundancy at the contracted block size, built to grow in steps as ammonia becomes affordable."],
    ["Reference", "First vessels delivered or on order.", "At least one land-based ammonia reference plant, instrumented and independently witnessed, before the Customer will contract at scale."],
  ], [1900, 3923, 3923], { zebra: true, boldFirstCol: true, firstColColor: DARK }),
  SPACER(200),
  CALLOUT("The line that will decide this project", [
    "Nitrous oxide. N₂O has a 100-year global warming potential of roughly 273 times that of CO₂ (IPCC AR6; vendor material commonly cites the older AR5 figure of 298).",
    "At that potency, a slip of a fraction of a percent can consume most of the CO₂ benefit the plant was built to deliver. A hyperscale customer buying carbon-free energy will have this audited. A “> 90 % reduction” headline is the start of that conversation, not the end of it — which is why we have made the full greenhouse-gas balance, N₂O included, a formal gate criterion rather than a performance footnote.",
  ]),
  new Paragraph({ children: [new PageBreak()] }),
];

const s3 = [
  H1("3.  Basis of this proposal"),
  P("We would rather show you an honest basis with open items marked than a complete-looking one we cannot stand behind. The items below marked “To be confirmed” are genuinely open and are Stage 1 work; they are not withheld."),
  SPACER(60),
  T(["Parameter", "Basis", "Status"], [
    ["Value chain", "Green ammonia imported by sea into Johor, Malaysia, for conversion to clean energy serving Malaysian and Singaporean offtake.", "Confirmed"],
    ["Reference site", "MMHE, Pasir Gudang, Johor (1.4636° N, 103.8719° E) — marine access, existing heavy-industrial land.", "Confirmed"],
    ["Prime-mover route", "Ammonia-fired four-stroke reciprocating engine.", "Confirmed — this proposal"],
    ["Power block location", "Johor within the JS-SEZ, Singapore, or split across both.", "To be confirmed — Stage 1"],
    ["Contracted capacity and phasing", "A firm clean block sized to the Customer’s load, built up in steps.", "To be confirmed — Stage 1"],
    ["Fuel", "100 % green ammonia, with pilot fuel minimised and a path to eliminating it.", "Target — to be confirmed against your platform"],
    ["Customer", "A global hyperscale data-centre operator. Identity disclosed under NDA.", "Under NDA"],
    ["Demonstration unit", "A single generating set in the low single-digit MW class — the scale at which each shortlisted OEM already builds.", "Proposed"],
    ["Demonstration date", "First fire on ammonia Q4 2028; performance-tested and in commercial operation Q1 2029.", "Target — firm intent"],
    ["Policy umbrella", "Johor–Singapore Special Economic Zone agreement, signed 7 January 2025, including a renewable-energy and green-economy cooperation framework.", "Confirmed"],
  ], [2400, 5546, 1800], { zebra: true, boldFirstCol: true, firstColColor: DARK }),
  SPACER(200),
  H2("What we bring"),
  P("A joint development only works if both sides put something irreplaceable on the table. Ours:"),
  BULLET("Molecules. A green ammonia supply chain into the region that we are developing ourselves, rather than assuming."),
  BULLET("A site. Heavy-industrial land at Pasir Gudang with marine access, and the jetty, storage and conversion infrastructure developed around it."),
  BULLET("The offtake. A relationship with a creditworthy hyperscale customer with a published clean-energy mandate — which is the demand signal your product needs and cannot generate for itself."),
  BULLET("The permitting pathway. Standing with the authorities on both sides of the Strait, inside the JS-SEZ framework, to carry an ammonia safety case through consent."),
  BULLET("A host for first-of-a-kind. Willingness to site, part-fund and operate a reference plant — the asset that converts your roadmap into a sold product."),
  BULLET("Regional operations. A local base for fuel handling, operations and maintenance, and the local content position that comes with it."),
];

const s4 = [
  H1("4.  The programme at a glance"),
  P("Five stages, each ending in a gate at which either party may stop. The intent is that no one spends significant money before the previous gate has been passed on evidence."),
  SPACER(60),
  T(["Stage", "Window", "Technical spine", "Commercial spine", "Exit gate"], [
    [["0", "Engage"], ["Q4 2026 –", "Q1 2027"], "Exchange duty specification and platform data. Establish a joint technical working group.", "NDA. Confirm mutual interest. Nominate counterparts.", "G0 — Aligned"],
    [["1", "Define"], ["Q1 –", "Q3 2027"], "Basis of design. Gap register T1–T10 owned, planned and costed. Site and fuel spec fixed.", "Cost-sharing term sheet. Customer confirms duty spec acceptable in principle.", "G1 — Defined and funded"],
    [["2", "Commit"], ["Q3 2027 –", "Q1 2028"], "FEED. HAZID and HAZOP. Safety case lodged. Manufacturing slot reserved. Long leads released.", "Joint Development Agreement executed. Demonstration unit commercial structure agreed.", "G2 — Committed"],
    [["3", "Prove"], ["Q1 –", "Q4 2028"], "Manufacture, factory acceptance test on ammonia, site works, install, commission, first fire.", "Scale-up price mechanism and guarantee package negotiated in parallel.", "G3 — Proven"],
    [["4", "Scale"], ["Q1 2029 –", "2030"], "Performance test. Extended availability run. Design feedback into the production unit.", "Scale-up contract with guarantees. Customer power agreement. Final investment decision.", "G4 — Contracted"],
  ], [1180, 1320, 2870, 2760, 1616], { zebra: true, boldFirstCol: true, firstColColor: DARK }),
  SPACER(220),
  CALLOUT("Critical path — read this before assessing the dates", [
    "The schedule is not set by engineering. It is set by two things that both have to start in Stage 1, not Stage 2:",
    "1.  The manufacturing slot. A first-of-a-kind ammonia generating set has to be in your build programme long before we would naturally be ready to order it. If the slot is reserved at Gate 2 rather than Gate 1, the 2028 date is lost regardless of how the engineering goes.",
    "2.  Host-state consent for ammonia held and burned on site. Toxic-gas consent in a populated industrial corridor is, on our reading, more likely than the engine to be the binding constraint. The safety case must be started in Stage 1.",
    "We have built the programme around both. We would ask you to test it against your own lead times early and tell us if it does not hold.",
  ]),
  new Paragraph({ children: [new PageBreak()] }),
];

const s5 = [
  H1("5.  Technical milestones"),
  P("Milestone identifiers are given so that both parties can refer to the same item in correspondence, and so that the register can be tracked without restating it."),

  H2("Stage 0 — Engage  (Q4 2026 – Q1 2027)"),
  T(["ID", "Milestone", "Deliverable / evidence"], [
    ["T0.1", "Duty specification issued and acknowledged", "Written duty spec: load profile, capacity factor, ambient envelope, transient requirement, emissions envelope, availability target."],
    ["T0.2", "Platform response", "The engine platform you would propose for this duty, its land-use rating basis, and its current qualification status on ammonia."],
    ["T0.3", "Joint technical working group stood up", "Named technical leads on both sides; meeting cadence; a single shared gap register."],
    ["T0.4", "Preliminary gap assessment", "Your view of which of T1–T10 are already closed, which are in progress, and which are untouched."],
  ], [700, 4300, 4746], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),

  H2("Stage 1 — Define  (Q1 – Q3 2027)"),
  T(["ID", "Milestone", "Deliverable / evidence"], [
    ["T1.1", "Basis of design agreed", "Site, ambient, fuel specification, unit rating, plant architecture, redundancy philosophy, single-line concept."],
    ["T1.2", "Land-use rating declared", "Generating-set rating for continuous duty with the derating basis shown at site ambient, referenced to the applicable ISO performance standard."],
    ["T1.3", "Emissions concept fixed", "After-treatment concept for NOx, unburnt ammonia and N₂O, with expected stack figures and reagent demand."],
    ["T1.4", "Greenhouse-gas balance modelled", "A g CO₂e/kWh balance across the load band including N₂O and pilot fuel, with the measurement method that will later verify it."],
    ["T1.5", "Ammonia fuel system concept", "Storage, transfer, conditioning, venting and release mitigation; battery-limit and interface definition against our terminal."],
    ["T1.6", "Preliminary HAZID closed", "HAZID report with actions assigned, chaired independently."],
    ["T1.7", "Code and consent map issued", "The land-use codes and approvals that apply in the host jurisdiction, the gap against existing marine approvals, and the plan to close it."],
    ["T1.8", "Gap register T1–T10 owned and costed", "Every gap has an owner, a closure activity, a cost and a date."],
    ["T1.9", "Long-lead and slot assessment", "Manufacturing lead time for the demonstration unit and the date by which the slot must be reserved."],
  ], [700, 4300, 4746], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),

  H2("Stage 2 — Commit and engineer  (Q3 2027 – Q1 2028)"),
  T(["ID", "Milestone", "Deliverable / evidence"], [
    ["T2.1", "FEED complete", "Front-end engineering to a definition sufficient to price, permit and build the demonstration plant."],
    ["T2.2", "HAZOP complete and closed out", "HAZOP on the finalised design with cause-and-effect diagrams; all actions closed or formally carried."],
    ["T2.3", "Quantitative risk assessment and dispersion modelling", "Toxic dispersion and QRA to the standard the host authority will accept."],
    ["T2.4", "Safety case lodged", "Application lodged with the host authority; pre-application engagement evidenced."],
    ["T2.5", "Grid compliance statement", "Generator, excitation, protection and fault-ride-through data assessed against the applicable grid code."],
    ["T2.6", "Test and acceptance protocol agreed", "The factory and site test programme, the instruments, the tolerances, and who witnesses — agreed in writing before manufacture."],
    ["T2.7", "Manufacturing slot reserved; long leads released", "Purchase order or reservation covering the engine, after-treatment and fuel system."],
  ], [700, 4300, 4746], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),

  H2("Stage 3 — Build and prove  (Q1 – Q4 2028)"),
  T(["ID", "Milestone", "Deliverable / evidence"], [
    ["T3.1", "Factory acceptance test on ammonia", "FAT at the declared land-use rating, in ammonia mode, witnessed by us and by the Customer’s technical assurance representative."],
    ["T3.2", "Transient performance demonstrated", "Step-load acceptance and rejection in ammonia mode against a declared ISO 8528-5 performance class; fuel-transfer behaviour recorded."],
    ["T3.3", "Site construction and mechanical completion", "Plant erected; ammonia system pressure- and leak-tested; systems energised."],
    ["T3.4", "Commissioning on pilot/diesel", "Plant proven on conventional fuel before ammonia introduction."],
    ["T3.5", "First fire on ammonia — on site", "The milestone this programme exists to reach. Target Q4 2028."],
    ["T3.6", "Emissions verification", "Metered NOx, NH₃ and N₂O across the load band and through transients, start and stop, by an accredited third party."],
  ], [700, 4300, 4746], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),

  H2("Stage 4 — Operate and scale  (Q1 2029 onward)"),
  T(["ID", "Milestone", "Deliverable / evidence"], [
    ["T4.1", "Performance test passed", "Output, heat rate, ammonia energy share and emissions at guarantee, on ammonia, witnessed."],
    ["T4.2", "Verified greenhouse-gas balance", "Measured g CO₂e/kWh including N₂O and pilot carbon, independently assured and accepted by the Customer."],
    ["T4.3", "Extended availability run", "A continuous run at data-centre duty over an agreed period, with availability, forced outages and consumables recorded."],
    ["T4.4", "Maintenance and wear evidence", "First inspection results on ammonia: wear parts, lubricant condition, catalyst condition, revised overhaul interval."],
    ["T4.5", "Production design frozen", "Demonstration learning fed back; the scale-up unit specification issued and priced."],
    ["T4.6", "Scale-up plant permitted", "Consent obtained for the full contracted block at the selected site."],
  ], [700, 4300, 4746], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),
];

const s6 = [
  H1("6.  Technical gap register"),
  P("These are the ten items we believe stand between a type-approved ammonia engine and a plant a hyperscale customer will contract for. Stage 1 assigns each one an owner, a closure plan, a cost and a date. We expect you to disagree with some of this; that disagreement is the most useful thing you can send back."),
  SPACER(60),
  T(["ID", "Gap", "Why it matters for this duty", "Evidence that closes it"], [
    ["T1", "Stationary conversion of the platform", "The engine is qualified at a marine rating for marine duty. Land generating-set service changes the rating point, the governing standard, the ancillaries and the acceptance test.", "A declared land-use continuous rating with the derating basis shown at site ambient, and a factory acceptance test on ammonia at that rating."],
    ["T2", "Ammonia energy share and pilot fuel", "Every point of pilot fuel is fossil carbon inside a plant sold as clean, and it will appear in the Customer’s carbon accounting.", "Sustained, measured ammonia energy share across the operating band, plus a dated roadmap to pilot-free or ammonia/hydrogen-pilot operation."],
    ["T3", "Nitrous oxide", "N₂O is roughly 273 times CO₂ over 100 years. A fractional slip can erase most of the plant’s climate benefit. This is the commercial crux, not a footnote.", "Metered N₂O across the full load band and through transients, start and stop; a guaranteed abatement solution; a complete third-party-witnessed GHG balance."],
    ["T4", "NOx and unburnt ammonia", "Raw NOx from ammonia combustion is high, and ammonia slip is a pollutant, an odour and a toxicity issue in a populated industrial corridor.", "Guaranteed stack NOx and NH₃ at the host limit, the SCR and slip-catalyst design that achieves them, reagent demand, and catalyst life on ammonia."],
    ["T5", "Transient and step-load behaviour", "Ammonia’s low flame speed makes transient response the classic weakness of the fuel; a data-centre block must take and shed load without tripping.", "Demonstrated step acceptance and rejection in ammonia mode to a declared ISO 8528-5 class, plus fuel-mode-transfer behaviour and time to recover full ammonia share."],
    ["T6", "Start, black start and islanding", "Start and stop are typically executed on diesel. Both the clean-energy claim and the restoration capability depend on how fast the plant returns to ammonia.", "Start-to-load time, black-start capability, minimum stable ammonia-mode load, and diesel volume consumed per start."],
    ["T7", "Availability, overhaul interval and maintenance", "Ammonia shortens intervals relative to gas and changes lubricants, materials and procedures. A data-centre contract prices availability directly.", "Time between overhauls at contract duty, outage schedule, lubricant specification and consumption, wear-part life, and the availability figure you will guarantee."],
    ["T8", "Fuel system, storage and safety case", "Ammonia is toxic. The land-based safety case, not the engine, is the likely critical path to consent in this corridor.", "Fuel system scope and interfaces, release mitigation, HAZID and HAZOP, QRA and toxic dispersion modelling accepted by the host authority."],
    ["T9", "Codes, standards and land-use approval", "Marine type approval does not transfer to a land power plant. If the applicable instrument is identified late it becomes the schedule driver.", "A written code and consent map for the host jurisdiction, the gap against existing approvals, and your commitment to close it."],
    ["T10", "Grid interface", "The block must comply with the host grid code whether islanded, grid-parallel or behind the meter.", "Generator and excitation data, fault-ride-through and reactive capability, protection philosophy, and a compliance statement once the site is fixed."],
  ], [700, 1850, 3500, 3696], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),
];

const s7 = [
  H1("7.  Commercial milestones"),
  P("The commercial stream runs alongside the technical one from the first meeting. Development work should not get ahead of the agreement that funds it, and the guarantee package should not be negotiated for the first time after the plant is built."),

  H2("Stage 0 — Engage  (Q4 2026 – Q1 2027)"),
  T(["ID", "Milestone", "Deliverable / evidence"], [
    ["C0.1", "Mutual confidentiality in place", "Executed NDA permitting exchange of duty data and platform data, and disclosure of the Customer’s identity."],
    ["C0.2", "Interest confirmed in principle", "Written confirmation that you wish to pursue the programme, with any conditions stated."],
    ["C0.3", "Counterparts nominated", "A commercial lead and a technical lead on each side, with authority to convene their organisations."],
    ["C0.4", "Indicative appetite stated", "Your indicative view on development cost sharing, on hosting a first-of-a-kind, and on what you would need from us to commit."],
  ], [700, 4300, 4746], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),

  H2("Stage 1 — Define  (Q1 – Q3 2027)"),
  T(["ID", "Milestone", "Deliverable / evidence"], [
    ["C1.1", "Memorandum of understanding or heads of terms", "Scope, exclusivity position, term, governance, and the intended shape of the eventual agreement."],
    ["C1.2", "Development cost-sharing term sheet", "Who funds which activity, milestone payment structure, and what happens to sunk cost if a gate is failed."],
    ["C1.3", "Indicative pricing for the demonstration unit", "A budget price for the unit and its scope, with the assumptions it rests on stated."],
    ["C1.4", "Scale-up price mechanism outlined", "The mechanism — formula, volume ladder or target cost — by which the production price will be set."],
    ["C1.5", "Customer duty specification accepted in principle", "Written confirmation from the Customer that the specification and indicative commercial shape are acceptable."],
    ["C1.6", "Incentive and funding map", "Bilateral programmes, host-state support, green financing and local-content instruments the programme could draw on, with owners and deadlines."],
  ], [700, 4300, 4746], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),

  H2("Stage 2 — Commit  (Q3 2027 – Q1 2028)"),
  T(["ID", "Milestone", "Deliverable / evidence"], [
    ["C2.1", "Joint Development Agreement executed", "Binding agreement: scope, funding, governance, IP, liability, termination and gate rights."],
    ["C2.2", "Demonstration unit commercial structure closed", "Sale, lease or OEM placement; ownership during and after the demonstration; residual value treatment."],
    ["C2.3", "First-of-a-kind risk allocation agreed", "Liability caps, defect liability period, technology-shortfall remedies, and the replacement or step-in path."],
    ["C2.4", "Guarantee framework agreed in outline", "The parameters that will carry guarantees at scale-up, and the shape of the liquidated damages attached to each."],
    ["C2.5", "Capacity reservation agreed", "Manufacturing slots reserved for the scale-up volume, with lead times and the notice we must give."],
    ["C2.6", "Intellectual property settled", "Ownership and licence terms for background IP and for anything created jointly — particularly ammonia handling, N₂O abatement and control strategy."],
  ], [700, 4300, 4746], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),

  H2("Stage 3 — Prove  (Q1 – Q4 2028)"),
  T(["ID", "Milestone", "Deliverable / evidence"], [
    ["C3.1", "Long-term service agreement negotiated", "Term, scope, response times, in-region spares and technicians, and the price mechanism over the asset life."],
    ["C3.2", "Scale-up guarantee package priced", "Output, heat rate, ammonia share, emissions and availability guarantees, each with its cap and trigger, priced."],
    ["C3.3", "Local content and in-region capability plan", "Assembly, service, training and spares positioning in Malaysia and Singapore."],
    ["C3.4", "Customer commercial engagement", "The Customer engaged directly on term, price shape and carbon-accounting treatment."],
  ], [700, 4300, 4746], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),

  H2("Stage 4 — Contract and scale  (Q1 2029 onward)"),
  T(["ID", "Milestone", "Deliverable / evidence"], [
    ["C4.1", "Scale-up supply contract executed", "Binding equipment supply for the contracted block, with the full guarantee package."],
    ["C4.2", "Long-term service agreement executed", "Signed, coincident with the supply contract."],
    ["C4.3", "Customer power agreement signed", "The offtake that underwrites the investment."],
    ["C4.4", "Final investment decision", "FID on the full plant."],
    ["C4.5", "Joint market position", "Agreed reference rights, joint communication, and the terms on which the reference is used in the region."],
  ], [700, 4300, 4746], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),
];

const s8 = [
  H1("8.  Gate criteria"),
  P("Each gate is a genuine stop. Either party may decline to pass one, and the cost consequences of doing so are settled in the Stage 1 term sheet rather than argued afterwards."),
  SPACER(60),
  T(["Gate", "Passed when", "If not passed"], [
    ["G0\nAligned", "NDA executed; both parties have nominated counterparts with authority; scope alignment note agreed; no disqualifying condition raised on either side.", "Part company with no cost. We approach the next OEM on the shortlist."],
    ["G1\nDefined and funded", "Basis of design agreed. All ten technical gaps owned, planned, costed and dated. Cost-sharing term sheet initialled. Customer has accepted the duty specification in principle. Manufacturing slot date identified.", "Either party may withdraw. Costs settled per the term sheet; jointly produced engineering is dealt with as agreed there."],
    ["G2\nCommitted", "JDA executed. FEED complete. HAZOP closed out. Safety case lodged and accepted in principle by the host authority. Test protocol agreed in writing. Manufacturing slot reserved.", "The 2028 demonstration is not achievable. The programme either re-baselines to a later date or stops."],
    ["G3\nProven", "Demonstration unit has fired on ammonia on site, passed its performance test at the declared rating, and produced a verified greenhouse-gas balance including N₂O that the Customer’s assurance team accepts.", "Remediation period against an agreed plan, then re-test. Persistent failure triggers the technology-shortfall remedy agreed at C2.3."],
    ["G4\nContracted", "Scale-up supply contract and long-term service agreement executed with the full guarantee package; Customer power agreement signed; FID taken.", "The demonstration asset and its learning remain; the scale-up is re-tendered or re-scoped."],
  ], [1420, 5726, 2600], { zebra: true, boldFirstCol: true, firstColColor: DARK }),
  SPACER(240),

  H1("9.  What we ask of you"),
  P("We are issuing this to a short list. We are not running a price competition and there is nothing to bid. What we are trying to establish is which OEM genuinely wants to build this with us, and on what terms. We would ask for five things:"),
  BULLET("Tell us whether you are interested in principle, and state any condition that would have to be true for you to proceed."),
  BULLET("Nominate a technical and a commercial counterpart."),
  BULLET("Complete the self-assessment overleaf. Where something is not published, say so — “not published” is a usable answer and an invented number is not."),
  BULLET("Tell us whether you could place a demonstration unit on the timeline in Section 4, and what would have to happen for that to be possible."),
  BULLET("Meet us under NDA to work through Sections 5 to 7 line by line."),
  SPACER(120),
  CALLOUT("On how we will read your answers", [
    "We would rather have a partner who tells us a gap is open than one who tells us it is closed and is later found not to be. Nothing in the self-assessment is scored on how mature the answer is. It is read for how candid it is, and for whether your roadmap and ours can be made to meet in 2028.",
  ]),
];

const s9 = [
  H1("10.  Respondent self-assessment"),
  RP([["To be completed by ", {}], ["_________________________________", { color: "9AACAA" }], ["   on ", {}], ["______________", { color: "9AACAA" }]], { after: 200 }),
  H2("A.  Platform and readiness"),
  T(["#", "Question", "Your response"], [
    ["A1", "Which engine platform would you propose for this duty, and at what continuous land-use rating?", ""],
    ["A2", "What is the current qualification status of that platform on ammonia — marine, land, or both?", ""],
    ["A3", "What land-based ammonia installations will exist, anywhere, by the end of 2028?", ""],
    ["A4", "What is your earliest date for a land-based unit in commercial operation outside your home market?", ""],
    ["A5", "What derating applies at tropical ambient at this site, and on what basis?", ""],
  ], [640, 4350, 4756], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),
  SPACER(160),
  H2("B.  Fuel and emissions"),
  T(["#", "Question", "Your response"], [
    ["B1", "What ammonia energy share can you guarantee, and across which load range?", ""],
    ["B2", "What pilot fuel is required, in what quantity, and what is your dated path to eliminating it?", ""],
    ["B3", "What N₂O figure can you guarantee? How is it measured, and how is it abated?", ""],
    ["B4", "What stack NOx and ammonia slip can you guarantee, with what after-treatment and reagent demand?", ""],
    ["B5", "What complete greenhouse-gas balance, in g CO₂e/kWh, would you stand behind — N₂O and pilot included?", ""],
  ], [640, 4350, 4756], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),
  SPACER(160),
  H2("C.  Operating performance"),
  T(["#", "Question", "Your response"], [
    ["C1", "What ISO 8528-5 performance class can you meet while in ammonia mode?", ""],
    ["C2", "What are your start-to-load time, black-start capability and minimum stable ammonia-mode load?", ""],
    ["C3", "What time between overhauls applies on ammonia at continuous data-centre duty?", ""],
    ["C4", "What plant availability will you guarantee, and against what definition?", ""],
  ], [640, 4350, 4756], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),
  SPACER(160),
  H2("D.  Commercial"),
  T(["#", "Question", "Your response"], [
    ["D1", "What is your appetite for sharing development cost, and in what structure?", ""],
    ["D2", "On what basis would you place a demonstration unit — sale, lease, or OEM-funded placement?", ""],
    ["D3", "What lead time applies to the demonstration unit, and by when must the slot be reserved?", ""],
    ["D4", "What in-region service capability would you commit to, and by when?", ""],
    ["D5", "What would you require from us to commit to this programme?", ""],
  ], [640, 4350, 4756], { zebra: true, boldFirstCol: true, firstColColor: ACCENT }),
  new Paragraph({ children: [new PageBreak()] }),
];

const annex = [
  H1("Annex A.  Basis, standards and conventions"),
  H2("Reference standards cited in this document"),
  T(["Standard", "Used in this document for"], [
    ["ISO 3046", "Reciprocating internal combustion engine performance — the declaration and reference conditions for engine rating."],
    ["ISO 8528 (Part 5)", "Engine-driven a.c. generating sets — transient performance classes, used as the framework for step-load acceptance and rejection."],
    ["ISO 15550", "Internal combustion engines — reference conditions for the declaration of fuel consumption."],
    ["IPCC AR6", "Global warming potentials. The 100-year GWP for N₂O used here is approximately 273; vendor material frequently cites the AR5 value of 298."],
  ], [2600, 7146], { zebra: true, boldFirstCol: true, firstColColor: DARK }),
  SPACER(200),
  H2("Conventions"),
  BULLET("Units are SI. Energy figures are on a lower-heating-value basis unless stated otherwise."),
  BULLET("Ammonia is taken as stored refrigerated liquid at approximately −33 °C and atmospheric pressure, with a lower heating value of about 18.6 MJ/kg."),
  BULLET("“Data-centre-grade” means continuous duty at high capacity factor, with transient, availability and assurance requirements set by the Customer rather than by general industrial practice."),
  SPACER(200),
  H2("On the numbers in this document"),
  P("This programme is run on a no-fabrication basis. Every quantitative statement we make either cites a public source, is shown as the output of a stated calculation, or is explicitly labelled as an assumption or a target. Where we do not know something, this document says so rather than filling the space."),
  P("We ask the same of responses. A gap identified early is a manageable programme risk. A gap discovered at performance test is a failed project — and, in this case, a failed clean-energy claim in front of a customer who will have it audited."),
  SPACER(240),
  new Paragraph({
    spacing: { after: 120 },
    border: { top: { style: BorderStyle.SINGLE, size: 8, color: ACCENT, space: 8 } },
    children: [],
  }),
  RP([["Document control.  ", { bold: true, color: DARK, size: 18 }],
      ["Issued for discussion. This document is not an offer, a tender, an invitation to tender, or a commitment to contract, and creates no obligation on either party. Dates shown are targets for joint planning. The identity of the Customer is disclosed only under executed confidentiality.", { size: 18, color: GREY }]],
     { after: 0 }),
];

// ============================================================
const doc = new Document({
  creator: "MYSGH2 Project",
  title: "Ammonia Engine Joint Development — Commercial & Technical Milestones",
  description: "Milestone framework proposed to shortlisted ammonia engine OEMs",
  numbering: {
    config: [{
      reference: "bullets",
      levels: [
        { level: 0, format: LevelFormat.BULLET, text: "▪", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 340, hanging: 220 } }, run: { color: ACCENT } } },
        { level: 1, format: LevelFormat.BULLET, text: "–", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 680, hanging: 220 } }, run: { color: ACCENT } } },
      ],
    }],
  },
  styles: {
    default: {
      document: { run: { font: "Calibri", size: 21, color: "1A1A1A" } },
    },
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 },
      },
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 120 },
          children: [
            new TextRun({ text: "Confidential  ·  Ammonia engine joint development — milestone framework  ·  ", size: 16, color: GREY, font: "Calibri" }),
            new TextRun({ children: [PageNumber.CURRENT], size: 16, color: GREY, font: "Calibri" }),
          ],
        })],
      }),
    },
    children: [
      ...cover, ...s1, ...s2, ...s3, ...s4, ...s5, ...s6, ...s7, ...s8, ...s9, ...annex,
    ],
  }],
});

const out = process.argv[2];
Packer.toBuffer(doc).then((b) => { fs.writeFileSync(out, b); console.log("wrote " + out + " (" + b.length + " bytes)"); });
