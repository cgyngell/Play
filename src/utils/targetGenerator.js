// ============================================================
// INDUSTRY DATABASE — covers 15+ sectors with financial profiles
// ============================================================

const INDUSTRY_PROFILES = {
  "Technology": {
    cogsRatio: 0.35, daRatio: 0.05, debtRatio: 0.10,
    subsectors: ["Enterprise Software", "Cybersecurity", "Cloud Infrastructure", "AI & Machine Learning", "Data Analytics", "IT Services", "Fintech", "Edtech", "Healthtech", "IoT & Hardware"],
    namePatterns: ["Systems", "Technologies", "Labs", "Digital", "Software", "Solutions", "Analytics", "Networks", "Dynamics", "Logic"],
    clientTypes: ["Enterprise", "SMBs", "Financial institutions", "Healthcare providers", "Government"],
  },
  "Healthcare": {
    cogsRatio: 0.50, daRatio: 0.04, debtRatio: 0.20,
    subsectors: ["Pharmaceuticals", "Medical Devices", "Healthcare Services", "Biotech", "Diagnostics", "Telehealth", "Clinical Research", "Health IT", "Home Health", "Specialty Pharmacy"],
    namePatterns: ["Health", "Medical", "Therapeutics", "Biosciences", "Pharma", "Care", "Life Sciences", "Diagnostics", "Genomics", "Wellness"],
    clientTypes: ["Hospital systems", "Physician groups", "Health plans", "Patients", "Research institutions"],
  },
  "Financial Services": {
    cogsRatio: 0.30, daRatio: 0.03, debtRatio: 0.25,
    subsectors: ["Asset Management", "Insurance", "Banking", "Wealth Management", "Payments", "Lending", "Risk & Compliance", "Capital Markets", "Financial Advisory", "Regtech"],
    namePatterns: ["Capital", "Financial", "Partners", "Advisors", "Wealth", "Securities", "Holdings", "Asset Management", "Bancorp", "Trust"],
    clientTypes: ["Institutional investors", "High-net-worth individuals", "Corporations", "Banks", "Insurance companies"],
  },
  "Consumer & Retail": {
    cogsRatio: 0.55, daRatio: 0.04, debtRatio: 0.18,
    subsectors: ["E-commerce", "Food & Beverage", "Apparel", "Consumer Electronics", "Beauty & Personal Care", "Home Goods", "Specialty Retail", "D2C Brands", "Luxury Goods", "Pet Care"],
    namePatterns: ["Brands", "Commerce", "Goods", "Market", "Retail", "Trading", "Consumer", "Lifestyle", "Collections", "Supply"],
    clientTypes: ["Consumers", "Retailers", "Distributors", "Wholesale partners", "Online marketplaces"],
  },
  "Manufacturing & Industrials": {
    cogsRatio: 0.60, daRatio: 0.06, debtRatio: 0.22,
    subsectors: ["Aerospace & Defense", "Automotive", "Chemicals", "Industrial Equipment", "Electronics Manufacturing", "Building Materials", "Packaging", "Precision Engineering", "Clean Energy Equipment", "Robotics"],
    namePatterns: ["Industries", "Manufacturing", "Engineering", "Precision", "Materials", "Components", "Systems", "Dynamics", "Works", "Fabrication"],
    clientTypes: ["OEMs", "Government/defense", "Construction firms", "Energy companies", "Automotive manufacturers"],
  },
  "Energy & Utilities": {
    cogsRatio: 0.55, daRatio: 0.08, debtRatio: 0.30,
    subsectors: ["Renewable Energy", "Oil & Gas Services", "Utilities", "Energy Storage", "Solar", "Wind", "Grid Infrastructure", "Energy Trading", "Carbon Management", "Nuclear Services"],
    namePatterns: ["Energy", "Power", "Resources", "Renewables", "Utilities", "Grid", "Solar", "Clean", "Sustainable", "Generation"],
    clientTypes: ["Utilities", "Industrial consumers", "Government", "Commercial buildings", "Municipalities"],
  },
  "Professional Services": {
    cogsRatio: 0.45, daRatio: 0.03, debtRatio: 0.12,
    subsectors: ["Management Consulting", "Legal Services", "Accounting", "HR Consulting", "IT Consulting", "Strategy Advisory", "Outsourcing", "Staffing", "Engineering Services", "Design & Architecture"],
    namePatterns: ["Partners", "Advisors", "Group", "Consulting", "Associates", "Advisory", "Services", "Solutions", "Management", "International"],
    clientTypes: ["Fortune 500", "Mid-market companies", "Private equity", "Government agencies", "Startups"],
  },
  "Media & Entertainment": {
    cogsRatio: 0.40, daRatio: 0.05, debtRatio: 0.15,
    subsectors: ["Digital Media", "Streaming", "Gaming", "Advertising", "Publishing", "Music", "Sports & Events", "Content Production", "Social Media", "AR/VR"],
    namePatterns: ["Media", "Entertainment", "Studios", "Digital", "Creative", "Content", "Productions", "Interactive", "Broadcasting", "Networks"],
    clientTypes: ["Advertisers", "Consumers", "Brands", "Broadcasters", "Content creators"],
  },
  "Real Estate": {
    cogsRatio: 0.45, daRatio: 0.07, debtRatio: 0.35,
    subsectors: ["Commercial Real Estate", "Residential Development", "REITs", "Property Management", "PropTech", "Construction", "Real Estate Brokerage", "Senior Living", "Industrial Logistics", "Data Centers"],
    namePatterns: ["Properties", "Realty", "Development", "Estates", "Land", "Capital", "Residential", "Commercial", "Investments", "Holdings"],
    clientTypes: ["Tenants", "Investors", "Homebuyers", "Commercial occupiers", "Institutional investors"],
  },
  "Transportation & Logistics": {
    cogsRatio: 0.58, daRatio: 0.07, debtRatio: 0.25,
    subsectors: ["Freight & Shipping", "Last-Mile Delivery", "Supply Chain Tech", "Warehousing", "Fleet Management", "Rail", "Aviation Services", "Maritime", "3PL", "Cold Chain"],
    namePatterns: ["Logistics", "Transport", "Freight", "Shipping", "Express", "Distribution", "Supply Chain", "Fleet", "Carriers", "Global"],
    clientTypes: ["E-commerce companies", "Manufacturers", "Retailers", "Government", "Importers/exporters"],
  },
  "Education": {
    cogsRatio: 0.48, daRatio: 0.04, debtRatio: 0.15,
    subsectors: ["Edtech", "Corporate Training", "K-12", "Higher Education", "Online Learning", "Test Prep", "Language Learning", "STEM Education", "Vocational Training", "Publishing"],
    namePatterns: ["Education", "Learning", "Academy", "Institute", "Scholars", "Knowledge", "Training", "Prep", "Curriculum", "Campus"],
    clientTypes: ["Students", "Schools", "Universities", "Corporations", "Government education departments"],
  },
  "Agriculture & Food": {
    cogsRatio: 0.62, daRatio: 0.05, debtRatio: 0.20,
    subsectors: ["AgTech", "Food Processing", "Crop Sciences", "Animal Health", "Organic & Natural", "Aquaculture", "Precision Agriculture", "Food Distribution", "Ingredients", "Cold Storage"],
    namePatterns: ["Foods", "Agricultural", "Farms", "Harvest", "Nutrition", "Sciences", "Agri", "Natural", "Organic", "Crop"],
    clientTypes: ["Farmers", "Food manufacturers", "Restaurants", "Grocery retailers", "Government"],
  },
  "Telecommunications": {
    cogsRatio: 0.42, daRatio: 0.09, debtRatio: 0.28,
    subsectors: ["5G Infrastructure", "Broadband", "Satellite", "Unified Communications", "Network Security", "Wireless", "Fiber Optics", "Tower Infrastructure", "VoIP", "SD-WAN"],
    namePatterns: ["Communications", "Telecom", "Networks", "Wireless", "Connect", "Broadband", "Signal", "Link", "Fiber", "Spectrum"],
    clientTypes: ["Enterprises", "Consumers", "Government", "Carriers", "ISPs"],
  },
  "Aerospace & Defense": {
    cogsRatio: 0.58, daRatio: 0.06, debtRatio: 0.20,
    subsectors: ["Defense Electronics", "Space Systems", "UAVs/Drones", "Satellite", "Military Vehicles", "Missile Systems", "Avionics", "Maintenance & Overhaul", "Cybersecurity", "Intelligence"],
    namePatterns: ["Aerospace", "Defense", "Systems", "Dynamics", "Technologies", "Aviation", "Space", "Tactical", "Precision", "Integrated"],
    clientTypes: ["Department of Defense", "NATO allies", "Commercial airlines", "Space agencies", "Intelligence community"],
  },
};

const FIRST_NAMES = [
  "Meridian", "Apex", "ClearPoint", "Vanguard", "NorthStar", "Catalyst", "Pinnacle",
  "Bridgewater", "Horizon", "Granite", "Sterling", "Atlas", "Ember", "Redwood", "Summit",
  "Beacon", "Crestline", "Ironwood", "Bluefin", "Silverline", "Orion", "Nexus", "Vertex",
  "Keystone", "Trident", "Evergreen", "Onyx", "Cobalt", "Sierra", "Falcon", "Prism",
  "Helix", "Quantum", "Aegis", "Zenith", "Stratos", "Pacific", "Nordic", "Trellis",
  "Cascade", "Voyager", "Titan", "Phoenix", "Sapphire", "Aspen", "Forge", "Citadel",
  "Eclipse", "Aurion", "Maverick",
];

const HQ_LOCATIONS = [
  "New York, NY", "San Francisco, CA", "Chicago, IL", "Boston, MA", "Austin, TX",
  "Seattle, WA", "Los Angeles, CA", "Dallas, TX", "Atlanta, GA", "Denver, CO",
  "Charlotte, NC", "Philadelphia, PA", "Nashville, TN", "Minneapolis, MN",
  "Washington, DC", "Miami, FL", "Portland, OR", "San Diego, CA", "Detroit, MI",
  "Houston, TX", "Phoenix, AZ", "Raleigh, NC", "Pittsburgh, PA", "Salt Lake City, UT",
];

// Seeded pseudo-random for deterministic results per search
function seededRandom(seed) {
  let s = seed;
  return function () {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function pickRandom(arr, rng) {
  return arr[Math.floor(rng() * arr.length)];
}

function generateCompanyForIndustry(industry, profile, idx, budget, rng) {
  const firstName = FIRST_NAMES[(idx * 7 + Math.floor(rng() * FIRST_NAMES.length)) % FIRST_NAMES.length];
  const nameSuffix = pickRandom(profile.namePatterns, rng);
  const name = `${firstName} ${nameSuffix}`;
  const subsector = profile.subsectors[(idx * 3 + Math.floor(rng() * profile.subsectors.length)) % profile.subsectors.length];

  // Generate financials scaled to budget
  const budgetFraction = 0.15 + rng() * 0.55;
  const maxRevenueForBudget = budget * budgetFraction;
  const revenueBase = Math.max(20, Math.round(maxRevenueForBudget / (2.5 + rng() * 3)));

  const ebitdaMargin = 0.08 + rng() * 0.24;
  const growthRate = 0.04 + rng() * 0.30;
  const employees = Math.round(revenueBase * (1.5 + rng() * 4));
  const founded = 1990 + Math.floor(rng() * 34);
  const hq = HQ_LOCATIONS[(idx * 5 + Math.floor(rng() * HQ_LOCATIONS.length)) % HQ_LOCATIONS.length];

  const clientPool = profile.clientTypes;
  const clients = [
    clientPool[Math.floor(rng() * clientPool.length)],
    clientPool[Math.floor(rng() * clientPool.length)],
  ].filter((v, i, a) => a.indexOf(v) === i).join(", ");

  const strengthPool = [
    `Strong ${subsector} expertise`,
    `Proprietary technology platform`,
    `Loyal client base with high retention`,
    `Scalable business model`,
    `Experienced management team`,
    `Growing recurring revenue stream`,
    `Leading market position in niche`,
    `Attractive margin profile`,
    `Proven M&A integration track record`,
    `Geographic diversification`,
    `Regulatory moat / licensing advantages`,
    `Deep industry relationships`,
    `IP portfolio / patents`,
    `Data and analytics capabilities`,
    `Strong brand recognition`,
  ];
  const strengths = [];
  for (let i = 0; i < 3; i++) {
    const s = strengthPool[(idx * 4 + i * 3 + Math.floor(rng() * strengthPool.length)) % strengthPool.length];
    if (!strengths.includes(s)) strengths.push(s);
  }

  const allTags = [
    "ebitda_growth", "cost_synergies", "revenue_synergies", "digital",
    "technology", "market_expansion", "operations", "cost_reduction",
    "talent", "compliance", "sustainability", "innovation",
    "vertical_integration", "geographic_expansion", "ip_assets",
  ];
  const tags = [];
  for (let i = 0; i < 5; i++) {
    const t = allTags[(idx * 3 + i * 2 + Math.floor(rng() * allTags.length)) % allTags.length];
    if (!tags.includes(t)) tags.push(t);
  }

  const descriptions = [
    `Leading ${subsector.toLowerCase()} company providing innovative solutions to ${clients.toLowerCase()}. Known for strong operational performance and consistent growth trajectory.`,
    `Established ${subsector.toLowerCase()} firm with ${employees} employees and a proven track record of delivering value across the ${industry.toLowerCase()} sector.`,
    `High-growth ${subsector.toLowerCase()} platform serving ${clients.toLowerCase()} with proprietary capabilities and a scalable business model.`,
    `Mid-market ${subsector.toLowerCase()} company with strong client relationships, attractive margins, and significant expansion potential in adjacent markets.`,
    `Specialized ${subsector.toLowerCase()} provider combining deep domain expertise with technology-driven delivery. Strong pipeline and expanding market presence.`,
  ];

  return {
    name,
    sector: subsector,
    industry,
    description: descriptions[idx % descriptions.length],
    employees,
    founded,
    hq,
    clients,
    revenueBase,
    ebitdaMargin: Math.round(ebitdaMargin * 1000) / 1000,
    growthRate: Math.round(growthRate * 1000) / 1000,
    strengths,
    tags,
  };
}

// ============================================================
// OBJECTIVES — universal across all industries
// ============================================================

const OBJECTIVE_TAG_MAP = {
  "Increase EBITDA": ["ebitda_growth", "cost_reduction", "operations"],
  "Cost Synergies": ["cost_synergies", "cost_reduction", "operations"],
  "Revenue Synergies": ["revenue_synergies", "market_expansion", "geographic_expansion"],
  "Digital Transformation": ["digital", "technology", "innovation"],
  "Market Expansion": ["market_expansion", "geographic_expansion", "revenue_synergies"],
  "Talent Acquisition": ["talent", "operations", "innovation"],
  "Technology Capabilities": ["technology", "digital", "ip_assets", "innovation"],
  "Operational Excellence": ["operations", "cost_reduction", "cost_synergies"],
  "Regulatory/Compliance": ["compliance", "operations"],
  "ESG/Sustainability": ["sustainability", "compliance"],
  "Vertical Integration": ["vertical_integration", "cost_synergies", "operations"],
  "IP & Innovation": ["ip_assets", "innovation", "technology"],
};

// ============================================================
// SCORING, FINANCIALS, SYNERGIES, RATIONALE
// ============================================================

function scoreTarget(target, objectives, budget) {
  const estimatedEV = target.revenueBase * (2.0 + target.ebitdaMargin * 8);
  if (estimatedEV > budget * 1.3) return -1;

  let relevanceScore = 0;
  const objectiveTags = objectives.flatMap((obj) => OBJECTIVE_TAG_MAP[obj] || []);
  for (const tag of objectiveTags) {
    if (target.tags.includes(tag)) relevanceScore += 10;
  }

  relevanceScore += target.ebitdaMargin * 30;
  relevanceScore += target.growthRate * 20;

  const budgetFit = 1 - Math.abs(estimatedEV - budget * 0.6) / budget;
  relevanceScore += Math.max(0, budgetFit * 15);

  return relevanceScore;
}

function generateEVMultiple(target) {
  const baseMultiple = 8 + target.ebitdaMargin * 10 + target.growthRate * 8;
  return Math.round(baseMultiple * 10) / 10;
}

function generateFinancials(target) {
  const profile = INDUSTRY_PROFILES[target.industry] || INDUSTRY_PROFILES["Technology"];
  const revenue = target.revenueBase;
  const ebitda = Math.round(revenue * target.ebitdaMargin);
  const evMultiple = generateEVMultiple(target);
  const enterpriseValue = Math.round(ebitda * evMultiple);
  const netDebt = Math.round(revenue * profile.debtRatio);
  const equityValue = enterpriseValue - netDebt;

  const cogs = Math.round(revenue * profile.cogsRatio);
  const grossProfit = revenue - cogs;
  const sgna = Math.round(revenue * (1 - target.ebitdaMargin - profile.cogsRatio) * 0.6);
  const otherOpex = Math.max(0, grossProfit - sgna - ebitda);
  const da = Math.round(revenue * profile.daRatio);
  const ebit = ebitda - da;
  const interestExpense = Math.round(netDebt * 0.05);
  const ebt = ebit - interestExpense;
  const taxes = Math.round(Math.max(0, ebt) * 0.25);
  const netIncome = ebt - taxes;

  const projections = [];
  for (let yr = 0; yr < 5; yr++) {
    const g = target.growthRate * (1 - yr * 0.02);
    const projRevenue = Math.round(revenue * Math.pow(1 + g, yr + 1));
    const marginImprovement = 0.005 * (yr + 1);
    const projEbitdaMargin = Math.min(target.ebitdaMargin + marginImprovement, 0.35);
    const projEbitda = Math.round(projRevenue * projEbitdaMargin);
    const projFcf = Math.round(projEbitda * 0.65);
    projections.push({
      year: 2026 + yr,
      revenue: projRevenue,
      ebitda: projEbitda,
      ebitdaMargin: projEbitdaMargin,
      fcf: projFcf,
    });
  }

  return {
    revenue, cogs, grossProfit,
    grossMargin: grossProfit / revenue,
    sgna, otherOpex, ebitda,
    ebitdaMargin: target.ebitdaMargin,
    da, ebit, interestExpense, ebt, taxes, netIncome,
    netDebt, enterpriseValue, equityValue, evMultiple,
    evRevenue: Math.round((enterpriseValue / revenue) * 10) / 10,
    projections,
    growthRate: target.growthRate,
  };
}

function generateSynergies(target, objectives) {
  const revenue = target.revenueBase;
  const synergies = {
    costSynergies: [], revenueSynergies: [],
    totalCostSynergy: 0, totalRevenueSynergy: 0,
    integrationCost: 0, timeToRealize: "",
  };

  if (objectives.includes("Cost Synergies") || objectives.includes("Operational Excellence")) {
    synergies.costSynergies.push(
      { item: "G&A Consolidation", value: Math.round(revenue * 0.03), timeline: "Year 1" },
      { item: "Technology Platform Integration", value: Math.round(revenue * 0.02), timeline: "Year 1-2" },
      { item: "Real Estate & Facilities", value: Math.round(revenue * 0.015), timeline: "Year 1" },
      { item: "Procurement Savings", value: Math.round(revenue * 0.01), timeline: "Year 2" }
    );
  } else {
    synergies.costSynergies.push(
      { item: "G&A Consolidation", value: Math.round(revenue * 0.025), timeline: "Year 1" },
      { item: "Technology Platform Integration", value: Math.round(revenue * 0.015), timeline: "Year 1-2" }
    );
  }

  if (objectives.includes("Revenue Synergies") || objectives.includes("Market Expansion")) {
    synergies.revenueSynergies.push(
      { item: "Cross-Selling to Existing Clients", value: Math.round(revenue * 0.08), timeline: "Year 1-2" },
      { item: "New Market Access", value: Math.round(revenue * 0.05), timeline: "Year 2-3" },
      { item: "Combined Product/Service Offerings", value: Math.round(revenue * 0.04), timeline: "Year 2" },
      { item: "Brand & Reputation Leverage", value: Math.round(revenue * 0.02), timeline: "Year 1-3" }
    );
  } else {
    synergies.revenueSynergies.push(
      { item: "Cross-Selling to Existing Clients", value: Math.round(revenue * 0.05), timeline: "Year 1-2" },
      { item: "Combined Product/Service Offerings", value: Math.round(revenue * 0.03), timeline: "Year 2" }
    );
  }

  if (objectives.includes("Vertical Integration")) {
    synergies.costSynergies.push(
      { item: "Supply Chain Vertical Integration", value: Math.round(revenue * 0.025), timeline: "Year 2-3" }
    );
  }

  synergies.totalCostSynergy = synergies.costSynergies.reduce((s, i) => s + i.value, 0);
  synergies.totalRevenueSynergy = synergies.revenueSynergies.reduce((s, i) => s + i.value, 0);
  synergies.integrationCost = Math.round((synergies.totalCostSynergy + synergies.totalRevenueSynergy) * 0.8);
  synergies.timeToRealize = "18-24 months for full run-rate";

  return synergies;
}

function generateRationale(target, objectives, acquirerName) {
  const reasons = [];

  if (objectives.includes("Increase EBITDA") && target.ebitdaMargin > 0.15) {
    reasons.push(
      `Strong EBITDA margin of ${(target.ebitdaMargin * 100).toFixed(0)}% provides immediate earnings accretion and demonstrates pricing power within the ${target.sector} segment.`
    );
  }
  if (objectives.includes("Increase EBITDA") && target.growthRate > 0.15) {
    reasons.push(
      `High organic growth rate of ${(target.growthRate * 100).toFixed(0)}% offers significant EBITDA expansion potential through operating leverage.`
    );
  }
  if (objectives.includes("Cost Synergies")) {
    reasons.push(
      `Overlapping corporate functions and technology platforms present clear cost synergy opportunities estimated at 4-7% of combined revenue.`
    );
  }
  if (objectives.includes("Revenue Synergies")) {
    reasons.push(
      `Complementary client base and offerings create cross-selling opportunities with estimated revenue synergies of 8-12% within 24 months.`
    );
  }
  if (objectives.includes("Digital Transformation") && target.tags.includes("digital")) {
    reasons.push(
      `Proprietary digital capabilities and technical talent pool accelerate ${acquirerName}'s digital transformation agenda.`
    );
  }
  if (objectives.includes("Market Expansion") && target.tags.includes("market_expansion")) {
    reasons.push(
      `Geographic and sector diversification reduces concentration risk and opens access to new addressable markets.`
    );
  }
  if (objectives.includes("Talent Acquisition") && target.tags.includes("talent")) {
    reasons.push(
      `Experienced workforce of ${target.employees} professionals addresses key capability gaps and reduces recruitment costs.`
    );
  }
  if (objectives.includes("Technology Capabilities") && target.tags.includes("technology")) {
    reasons.push(
      `Advanced technology capabilities and proprietary IP provide competitive differentiation and higher-margin delivery.`
    );
  }
  if (objectives.includes("Vertical Integration") && target.tags.includes("vertical_integration")) {
    reasons.push(
      `Vertical integration opportunity reduces supply chain dependency and captures additional margin along the value chain.`
    );
  }
  if (objectives.includes("IP & Innovation") && target.tags.includes("ip_assets")) {
    reasons.push(
      `Valuable intellectual property portfolio and R&D pipeline provide long-term competitive advantages.`
    );
  }

  reasons.push(
    `${target.name} has demonstrated consistent performance in ${target.sector} with ${target.employees} employees and clients including ${target.clients}.`
  );

  if (target.growthRate > 0.2) {
    reasons.push(
      `Exceptional growth trajectory positions the combined entity for market leadership in the ${target.sector} segment.`
    );
  }

  return reasons;
}

// ============================================================
// MAIN EXPORTS
// ============================================================

export function generateTargets(acquirerName, budget, objectives, industry) {
  const profile = INDUSTRY_PROFILES[industry];
  if (!profile) return [];

  const seed = hashString(acquirerName + industry + budget.toString() + objectives.join(","));
  const rng = seededRandom(seed);

  // Generate a pool of 12 candidates, score, and return top 5
  const pool = [];
  for (let i = 0; i < 12; i++) {
    pool.push(generateCompanyForIndustry(industry, profile, i, budget, rng));
  }

  const scored = pool
    .map((target) => ({ ...target, score: scoreTarget(target, objectives, budget) }))
    .filter((t) => t.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  // Backfill if fewer than 5
  if (scored.length < 5) {
    const remaining = pool
      .filter((t) => !scored.find((s) => s.name === t.name))
      .sort((a, b) => b.ebitdaMargin * b.growthRate - a.ebitdaMargin * a.growthRate)
      .slice(0, 5 - scored.length);
    scored.push(...remaining.map((t) => ({ ...t, score: 5 })));
  }

  return scored.map((target) => {
    const financials = generateFinancials(target);
    const synergies = generateSynergies(target, objectives);
    const rationale = generateRationale(target, objectives, acquirerName);

    return {
      ...target,
      financials,
      synergies,
      rationale,
      fitScore: Math.min(Math.round((target.score / 60) * 100), 98),
    };
  });
}

export function generateFullModel(target, acquirerName) {
  const f = target.financials;
  const s = target.synergies;

  const wacc = 0.10;
  const terminalGrowth = 0.025;
  let dcfValue = 0;
  for (let i = 0; i < f.projections.length; i++) {
    dcfValue += f.projections[i].fcf / Math.pow(1 + wacc, i + 1);
  }
  const terminalValue = (f.projections[4].fcf * (1 + terminalGrowth)) / (wacc - terminalGrowth);
  const pvTerminal = terminalValue / Math.pow(1 + wacc, 5);
  dcfValue += pvTerminal;

  const footballField = {
    dcf: { low: Math.round(dcfValue * 0.85), mid: Math.round(dcfValue), high: Math.round(dcfValue * 1.15) },
    comparables: {
      low: Math.round(f.ebitda * (f.evMultiple - 2)),
      mid: Math.round(f.ebitda * f.evMultiple),
      high: Math.round(f.ebitda * (f.evMultiple + 2)),
    },
    precedent: {
      low: Math.round(f.ebitda * (f.evMultiple - 1)),
      mid: Math.round(f.ebitda * (f.evMultiple + 1)),
      high: Math.round(f.ebitda * (f.evMultiple + 3)),
    },
    lbo: {
      low: Math.round(f.ebitda * (f.evMultiple - 2.5)),
      mid: Math.round(f.ebitda * (f.evMultiple - 1)),
      high: Math.round(f.ebitda * f.evMultiple),
    },
  };

  const sourcesUses = {
    sources: [
      { item: "Senior Debt (Term Loan)", value: Math.round(f.enterpriseValue * 0.40) },
      { item: "Revolving Credit Facility", value: Math.round(f.enterpriseValue * 0.10) },
      { item: "Equity Contribution", value: Math.round(f.enterpriseValue * 0.45) },
      { item: "Seller Rollover Equity", value: Math.round(f.enterpriseValue * 0.05) },
    ],
    uses: [
      { item: "Enterprise Value", value: f.enterpriseValue },
      { item: "Transaction Fees", value: Math.round(f.enterpriseValue * 0.03) },
      { item: "Financing Fees", value: Math.round(f.enterpriseValue * 0.015) },
      { item: "Working Capital Adjustment", value: Math.round(f.revenue * 0.02) },
    ],
  };
  const totalSources = sourcesUses.sources.reduce((s, i) => s + i.value, 0);
  const totalUses = sourcesUses.uses.reduce((s, i) => s + i.value, 0);
  const delta = totalUses - totalSources;
  if (delta > 0) {
    sourcesUses.sources[2].value += delta;
  }

  const accretionDilution = {
    acquirerEps: 2.50,
    targetNetIncome: f.netIncome,
    synergiesAfterTax: Math.round(s.totalCostSynergy * 0.75),
    additionalInterest: Math.round(sourcesUses.sources[0].value * 0.06),
    sharesIssued: Math.round(sourcesUses.sources[2].value / 25),
  };
  accretionDilution.proFormaIncome =
    accretionDilution.targetNetIncome + accretionDilution.synergiesAfterTax - accretionDilution.additionalInterest;
  accretionDilution.isAccretive = accretionDilution.proFormaIncome > 0;
  accretionDilution.impactPercent =
    Math.round((accretionDilution.proFormaIncome / (accretionDilution.acquirerEps * accretionDilution.sharesIssued)) * 10000) / 100;

  return {
    dcfValue: Math.round(dcfValue),
    terminalValue: Math.round(pvTerminal),
    footballField,
    sourcesUses,
    accretionDilution,
    sensitivityTable: generateSensitivity(f, wacc, terminalGrowth),
  };
}

function generateSensitivity(f, baseWacc, baseTermGrowth) {
  const waccRange = [baseWacc - 0.02, baseWacc - 0.01, baseWacc, baseWacc + 0.01, baseWacc + 0.02];
  const growthRange = [baseTermGrowth - 0.01, baseTermGrowth - 0.005, baseTermGrowth, baseTermGrowth + 0.005, baseTermGrowth + 0.01];

  return {
    waccValues: waccRange.map((w) => (w * 100).toFixed(1) + "%"),
    growthValues: growthRange.map((g) => (g * 100).toFixed(1) + "%"),
    values: waccRange.map((w) =>
      growthRange.map((g) => {
        let dcf = 0;
        for (let i = 0; i < f.projections.length; i++) {
          dcf += f.projections[i].fcf / Math.pow(1 + w, i + 1);
        }
        const tv = (f.projections[4].fcf * (1 + g)) / (w - g);
        dcf += tv / Math.pow(1 + w, 5);
        return Math.round(dcf);
      })
    ),
  };
}

export const AVAILABLE_OBJECTIVES = Object.keys(OBJECTIVE_TAG_MAP);
export const AVAILABLE_INDUSTRIES = Object.keys(INDUSTRY_PROFILES);
