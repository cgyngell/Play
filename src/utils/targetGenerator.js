const CONSULTING_TARGETS = [
  {
    name: "Meridian Strategy Partners",
    sector: "Strategy Consulting",
    description: "Mid-market strategy consulting firm specializing in digital transformation and operational excellence for Fortune 500 clients.",
    employees: 1200,
    founded: 2008,
    hq: "Chicago, IL",
    clients: "Fortune 500, Private Equity portfolio companies",
    revenueBase: 280,
    ebitdaMargin: 0.18,
    growthRate: 0.12,
    strengths: ["Digital transformation practice", "Strong PE relationships", "Proprietary analytics platform"],
    tags: ["strategy", "digital", "operations", "ebitda_growth", "revenue_synergies"],
  },
  {
    name: "Apex Human Capital Advisors",
    sector: "HR & Organizational Consulting",
    description: "Specialized human capital and organizational design consultancy with deep expertise in post-merger integration and workforce planning.",
    employees: 650,
    founded: 2012,
    hq: "New York, NY",
    clients: "Mid-market companies, Healthcare systems",
    revenueBase: 145,
    ebitdaMargin: 0.22,
    growthRate: 0.15,
    strengths: ["Post-merger integration expertise", "Workforce analytics tools", "Healthcare vertical depth"],
    tags: ["hr", "integration", "cost_synergies", "operations", "ebitda_growth"],
  },
  {
    name: "ClearPoint Analytics Group",
    sector: "Data & Analytics Consulting",
    description: "Advanced analytics and AI consulting firm helping enterprises build data-driven decision frameworks and predictive models.",
    employees: 430,
    founded: 2015,
    hq: "San Francisco, CA",
    clients: "Tech companies, Financial services, Retail",
    revenueBase: 110,
    ebitdaMargin: 0.25,
    growthRate: 0.28,
    strengths: ["AI/ML capabilities", "Proprietary data platform", "High-growth trajectory"],
    tags: ["technology", "digital", "analytics", "revenue_synergies", "ebitda_growth", "market_expansion"],
  },
  {
    name: "Vanguard Operations Consulting",
    sector: "Operations & Supply Chain",
    description: "Operations improvement and supply chain optimization firm with proven track record of delivering measurable cost reductions.",
    employees: 890,
    founded: 2005,
    hq: "Dallas, TX",
    clients: "Manufacturing, Logistics, Energy",
    revenueBase: 210,
    ebitdaMargin: 0.16,
    growthRate: 0.08,
    strengths: ["Lean/Six Sigma methodology", "Supply chain expertise", "Implementation capabilities"],
    tags: ["operations", "cost_synergies", "supply_chain", "ebitda_growth", "cost_reduction"],
  },
  {
    name: "NorthStar Financial Advisory",
    sector: "Financial Advisory & Consulting",
    description: "Financial restructuring and performance improvement consultancy serving mid-market companies and PE-backed firms.",
    employees: 320,
    founded: 2010,
    hq: "Boston, MA",
    clients: "Private Equity, Mid-market companies, Distressed assets",
    revenueBase: 95,
    ebitdaMargin: 0.28,
    growthRate: 0.10,
    strengths: ["Financial restructuring", "PE value creation", "Interim management"],
    tags: ["financial", "restructuring", "ebitda_growth", "cost_synergies", "pe_services"],
  },
  {
    name: "Catalyst Change Management",
    sector: "Change Management & Transformation",
    description: "Boutique change management consultancy with proprietary methodology for large-scale organizational transformations.",
    employees: 280,
    founded: 2014,
    hq: "Atlanta, GA",
    clients: "Large enterprises, Government agencies",
    revenueBase: 72,
    ebitdaMargin: 0.20,
    growthRate: 0.18,
    strengths: ["Proprietary change methodology", "Government sector access", "Training capabilities"],
    tags: ["change_management", "transformation", "revenue_synergies", "market_expansion", "government"],
  },
  {
    name: "Pinnacle IT Consulting",
    sector: "Technology & IT Consulting",
    description: "IT strategy and implementation consultancy specializing in cloud migration, cybersecurity, and enterprise architecture.",
    employees: 1500,
    founded: 2003,
    hq: "Seattle, WA",
    clients: "Enterprise, Healthcare, Financial services",
    revenueBase: 380,
    ebitdaMargin: 0.15,
    growthRate: 0.20,
    strengths: ["Cloud migration practice", "Cybersecurity capabilities", "Large delivery team"],
    tags: ["technology", "digital", "cloud", "revenue_synergies", "market_expansion", "ebitda_growth"],
  },
  {
    name: "Bridgewater Risk Advisory",
    sector: "Risk & Compliance Consulting",
    description: "Risk management and regulatory compliance consultancy serving financial institutions and healthcare organizations.",
    employees: 520,
    founded: 2009,
    hq: "Charlotte, NC",
    clients: "Banks, Insurance companies, Healthcare providers",
    revenueBase: 165,
    ebitdaMargin: 0.24,
    growthRate: 0.14,
    strengths: ["Regulatory expertise", "Risk analytics platform", "Deep financial services relationships"],
    tags: ["risk", "compliance", "financial", "cost_synergies", "regulatory"],
  },
  {
    name: "Horizon Sustainability Consulting",
    sector: "ESG & Sustainability",
    description: "ESG strategy and sustainability consulting firm helping organizations meet regulatory requirements and build sustainable practices.",
    employees: 190,
    founded: 2017,
    hq: "Denver, CO",
    clients: "Energy companies, Consumer goods, Asset managers",
    revenueBase: 48,
    ebitdaMargin: 0.19,
    growthRate: 0.35,
    strengths: ["ESG reporting frameworks", "Carbon accounting", "Fastest-growing segment"],
    tags: ["esg", "sustainability", "market_expansion", "revenue_synergies", "ebitda_growth"],
  },
  {
    name: "Granite Healthcare Advisors",
    sector: "Healthcare Consulting",
    description: "Healthcare management consulting firm specializing in revenue cycle optimization, clinical operations, and value-based care.",
    employees: 740,
    founded: 2007,
    hq: "Nashville, TN",
    clients: "Hospital systems, Physician groups, Health plans",
    revenueBase: 195,
    ebitdaMargin: 0.21,
    growthRate: 0.16,
    strengths: ["Revenue cycle expertise", "Clinical operations", "Value-based care models"],
    tags: ["healthcare", "operations", "revenue_synergies", "ebitda_growth", "cost_synergies"],
  },
  {
    name: "Sterling Pricing & Revenue Management",
    sector: "Pricing & Commercial Strategy",
    description: "Pricing strategy and revenue management consultancy delivering margin improvement through commercial excellence programs.",
    employees: 260,
    founded: 2013,
    hq: "Philadelphia, PA",
    clients: "B2B industrials, SaaS companies, Distributors",
    revenueBase: 78,
    ebitdaMargin: 0.26,
    growthRate: 0.22,
    strengths: ["Pricing analytics", "Commercial excellence", "Rapid margin improvement"],
    tags: ["pricing", "revenue_synergies", "ebitda_growth", "commercial", "margin_improvement"],
  },
  {
    name: "Atlas Global Consulting",
    sector: "International Strategy",
    description: "International expansion and market entry consultancy with offices across 12 countries and deep local market knowledge.",
    employees: 980,
    founded: 2006,
    hq: "Washington, DC",
    clients: "Multinationals, Government trade agencies",
    revenueBase: 245,
    ebitdaMargin: 0.14,
    growthRate: 0.09,
    strengths: ["Global presence", "Market entry expertise", "Government relationships"],
    tags: ["international", "market_expansion", "strategy", "government", "revenue_synergies"],
  },
  {
    name: "Ember Digital Solutions",
    sector: "Digital & Marketing Consulting",
    description: "Digital marketing strategy and customer experience consultancy combining management consulting rigor with creative capabilities.",
    employees: 410,
    founded: 2016,
    hq: "Austin, TX",
    clients: "Consumer brands, Retail, D2C companies",
    revenueBase: 98,
    ebitdaMargin: 0.17,
    growthRate: 0.30,
    strengths: ["Customer experience design", "Marketing analytics", "Creative + strategy hybrid"],
    tags: ["digital", "marketing", "revenue_synergies", "market_expansion", "ebitda_growth"],
  },
  {
    name: "Redwood Implementation Partners",
    sector: "Implementation & Program Management",
    description: "Hands-on implementation and program management consultancy focused on executing complex transformation programs.",
    employees: 1100,
    founded: 2004,
    hq: "Minneapolis, MN",
    clients: "Fortune 1000, PE portfolio companies",
    revenueBase: 310,
    ebitdaMargin: 0.13,
    growthRate: 0.07,
    strengths: ["Implementation track record", "Large bench strength", "PE relationships"],
    tags: ["implementation", "operations", "cost_synergies", "cost_reduction", "pe_services"],
  },
  {
    name: "Summit Talent & Leadership",
    sector: "Executive Search & Leadership",
    description: "Executive search and leadership development consultancy with proprietary assessment methodology and C-suite network.",
    employees: 180,
    founded: 2011,
    hq: "Los Angeles, CA",
    clients: "Boards, C-suite, PE operating partners",
    revenueBase: 55,
    ebitdaMargin: 0.30,
    growthRate: 0.13,
    strengths: ["C-suite network", "Assessment methodology", "Board advisory"],
    tags: ["talent", "leadership", "hr", "revenue_synergies", "pe_services"],
  },
];

const OBJECTIVE_TAG_MAP = {
  "Increase EBITDA": ["ebitda_growth", "margin_improvement", "cost_reduction"],
  "Cost Synergies": ["cost_synergies", "cost_reduction", "operations"],
  "Revenue Synergies": ["revenue_synergies", "market_expansion", "commercial"],
  "Digital Transformation": ["digital", "technology", "analytics"],
  "Market Expansion": ["market_expansion", "international", "revenue_synergies"],
  "Talent Acquisition": ["talent", "hr", "leadership"],
  "Technology Capabilities": ["technology", "digital", "cloud", "analytics"],
  "Operational Excellence": ["operations", "cost_reduction", "implementation"],
  "Regulatory/Compliance": ["risk", "compliance", "regulatory"],
  "ESG/Sustainability": ["esg", "sustainability"],
  "Healthcare Specialization": ["healthcare", "operations"],
  "PE Services Enhancement": ["pe_services", "financial", "restructuring"],
};

function scoreTarget(target, objectives, budget) {
  const budgetM = budget;
  const estimatedEV = target.revenueBase * (2.0 + target.ebitdaMargin * 8);
  if (estimatedEV > budgetM * 1.3) return -1;

  let relevanceScore = 0;
  const objectiveTags = objectives.flatMap((obj) => OBJECTIVE_TAG_MAP[obj] || []);
  for (const tag of objectiveTags) {
    if (target.tags.includes(tag)) relevanceScore += 10;
  }

  relevanceScore += target.ebitdaMargin * 30;
  relevanceScore += target.growthRate * 20;

  const budgetFit = 1 - Math.abs(estimatedEV - budgetM * 0.6) / budgetM;
  relevanceScore += Math.max(0, budgetFit * 15);

  return relevanceScore;
}

function generateEVMultiple(target) {
  const baseMultiple = 8 + target.ebitdaMargin * 10 + target.growthRate * 8;
  return Math.round(baseMultiple * 10) / 10;
}

function generateFinancials(target, budget) {
  const revenue = target.revenueBase;
  const ebitda = Math.round(revenue * target.ebitdaMargin);
  const evMultiple = generateEVMultiple(target);
  const enterpriseValue = Math.round(ebitda * evMultiple);
  const netDebt = Math.round(revenue * 0.15);
  const equityValue = enterpriseValue - netDebt;

  const cogs = Math.round(revenue * 0.45);
  const grossProfit = revenue - cogs;
  const sgna = Math.round(revenue * (1 - target.ebitdaMargin - 0.45) * 0.6);
  const otherOpex = grossProfit - sgna - ebitda;
  const da = Math.round(revenue * 0.03);
  const ebit = ebitda - da;
  const interestExpense = Math.round(netDebt * 0.05);
  const ebt = ebit - interestExpense;
  const taxes = Math.round(ebt * 0.25);
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
    revenue,
    cogs,
    grossProfit,
    grossMargin: grossProfit / revenue,
    sgna,
    otherOpex,
    ebitda,
    ebitdaMargin: target.ebitdaMargin,
    da,
    ebit,
    interestExpense,
    ebt,
    taxes,
    netIncome,
    netDebt,
    enterpriseValue,
    equityValue,
    evMultiple,
    evRevenue: Math.round((enterpriseValue / revenue) * 10) / 10,
    projections,
    growthRate: target.growthRate,
  };
}

function generateSynergies(target, objectives, budget) {
  const revenue = target.revenueBase;
  const synergies = {
    costSynergies: [],
    revenueSynergies: [],
    totalCostSynergy: 0,
    totalRevenueSynergy: 0,
    integrationCost: 0,
    timeToRealize: "",
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
      { item: "Combined Service Offerings", value: Math.round(revenue * 0.04), timeline: "Year 2" },
      { item: "Brand & Reputation Leverage", value: Math.round(revenue * 0.02), timeline: "Year 1-3" }
    );
  } else {
    synergies.revenueSynergies.push(
      { item: "Cross-Selling to Existing Clients", value: Math.round(revenue * 0.05), timeline: "Year 1-2" },
      { item: "Combined Service Offerings", value: Math.round(revenue * 0.03), timeline: "Year 2" }
    );
  }

  synergies.totalCostSynergy = synergies.costSynergies.reduce((s, i) => s + i.value, 0);
  synergies.totalRevenueSynergy = synergies.revenueSynergies.reduce((s, i) => s + i.value, 0);
  synergies.integrationCost = Math.round((synergies.totalCostSynergy + synergies.totalRevenueSynergy) * 0.8);
  synergies.timeToRealize = "18-24 months for full run-rate";

  return synergies;
}

function generateRationale(target, objectives) {
  const reasons = [];

  if (objectives.includes("Increase EBITDA") && target.ebitdaMargin > 0.18) {
    reasons.push(
      `Strong EBITDA margin of ${(target.ebitdaMargin * 100).toFixed(0)}% provides immediate earnings accretion and demonstrates pricing power in the market.`
    );
  }
  if (objectives.includes("Increase EBITDA") && target.growthRate > 0.15) {
    reasons.push(
      `High organic growth rate of ${(target.growthRate * 100).toFixed(0)}% offers significant EBITDA expansion potential through operating leverage.`
    );
  }
  if (objectives.includes("Cost Synergies")) {
    reasons.push(
      `Overlapping G&A functions and technology platforms present clear cost synergy opportunities estimated at 4-7% of combined revenue.`
    );
  }
  if (objectives.includes("Revenue Synergies")) {
    reasons.push(
      `Complementary client base and service offerings create cross-selling opportunities, with estimated revenue synergies of 8-12% within 24 months.`
    );
  }
  if (objectives.includes("Digital Transformation") && target.tags.includes("digital")) {
    reasons.push(
      `Proprietary digital capabilities and analytics talent pool accelerate the acquirer's digital transformation agenda.`
    );
  }
  if (objectives.includes("Market Expansion") && target.tags.includes("market_expansion")) {
    reasons.push(
      `Geographic and sector diversification reduces concentration risk and opens access to new addressable markets.`
    );
  }
  if (objectives.includes("Talent Acquisition") && target.tags.includes("talent")) {
    reasons.push(
      `Experienced consulting talent pool of ${target.employees} professionals addresses key capability gaps and reduces recruitment costs.`
    );
  }
  if (objectives.includes("Technology Capabilities") && target.tags.includes("technology")) {
    reasons.push(
      `Advanced technology capabilities, including proprietary platforms and tools, provide competitive differentiation and higher-margin service delivery.`
    );
  }

  reasons.push(
    `${target.name} has demonstrated consistent performance with ${target.employees} employees and a strong client roster including ${target.clients}.`
  );

  if (target.growthRate > 0.2) {
    reasons.push(
      `Exceptional growth trajectory positions the combined entity for market leadership in the ${target.sector} segment.`
    );
  }

  return reasons;
}

export function generateTargets(acquirerName, budget, objectives) {
  const scored = CONSULTING_TARGETS.map((target) => ({
    ...target,
    score: scoreTarget(target, objectives, budget),
  }))
    .filter((t) => t.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  if (scored.length < 5) {
    const remaining = CONSULTING_TARGETS.filter((t) => !scored.find((s) => s.name === t.name))
      .sort((a, b) => b.ebitdaMargin * b.growthRate - a.ebitdaMargin * a.growthRate)
      .slice(0, 5 - scored.length);
    scored.push(...remaining.map((t) => ({ ...t, score: 5 })));
  }

  return scored.map((target) => {
    const financials = generateFinancials(target, budget);
    const synergies = generateSynergies(target, objectives, budget);
    const rationale = generateRationale(target, objectives);

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
