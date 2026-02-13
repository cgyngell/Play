import { useMemo } from "react";
import { generateFullModel } from "../utils/targetGenerator";
import { formatCurrency, formatPercent } from "../utils/format";

export default function FinancialModel({ target, acquirerName, onBack }) {
  const model = useMemo(
    () => generateFullModel(target, acquirerName),
    [target, acquirerName]
  );

  const f = target.financials;
  const s = target.synergies;

  return (
    <div className="financial-model">
      <button className="back-btn" onClick={onBack}>
        ← Back to Target List
      </button>

      <div className="model-header">
        <div>
          <h2>{target.name}</h2>
          <p className="model-subtitle">
            Confidential Investment Memorandum — Prepared for {acquirerName}
          </p>
        </div>
        <div className="model-header-metrics">
          <div className="header-metric">
            <span className="hm-value">{formatCurrency(f.enterpriseValue)}M</span>
            <span className="hm-label">Enterprise Value</span>
          </div>
          <div className="header-metric">
            <span className="hm-value">{f.evMultiple}x</span>
            <span className="hm-label">EV / EBITDA</span>
          </div>
          <div className="header-metric">
            <span className="hm-value">{formatPercent(f.ebitdaMargin)}</span>
            <span className="hm-label">EBITDA Margin</span>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <section className="model-section">
        <h3>Executive Summary</h3>
        <div className="exec-summary">
          <div className="summary-card">
            <h4>Transaction Overview</h4>
            <table className="summary-table">
              <tbody>
                <tr><td>Target</td><td>{target.name}</td></tr>
                <tr><td>Sector</td><td>{target.sector}</td></tr>
                <tr><td>Headquarters</td><td>{target.hq}</td></tr>
                <tr><td>Employees</td><td>{target.employees.toLocaleString()}</td></tr>
                <tr><td>LTM Revenue</td><td>{formatCurrency(f.revenue)}M</td></tr>
                <tr><td>LTM EBITDA</td><td>{formatCurrency(f.ebitda)}M</td></tr>
                <tr><td>Enterprise Value</td><td>{formatCurrency(f.enterpriseValue)}M</td></tr>
                <tr><td>Equity Value</td><td>{formatCurrency(f.equityValue)}M</td></tr>
              </tbody>
            </table>
          </div>
          <div className="summary-card">
            <h4>Key Investment Highlights</h4>
            <ul className="highlights-list">
              {target.rationale.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Income Statement */}
      <section className="model-section">
        <h3>Income Statement (LTM, $M)</h3>
        <table className="financial-table">
          <thead>
            <tr>
              <th>Line Item</th>
              <th className="num">Amount ($M)</th>
              <th className="num">% of Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row-bold">
              <td>Revenue</td>
              <td className="num">{f.revenue}</td>
              <td className="num">100.0%</td>
            </tr>
            <tr>
              <td>Cost of Services</td>
              <td className="num">({f.cogs})</td>
              <td className="num">{formatPercent(f.cogs / f.revenue)}</td>
            </tr>
            <tr className="row-bold row-border">
              <td>Gross Profit</td>
              <td className="num">{f.grossProfit}</td>
              <td className="num">{formatPercent(f.grossMargin)}</td>
            </tr>
            <tr>
              <td>SG&A Expenses</td>
              <td className="num">({f.sgna})</td>
              <td className="num">{formatPercent(f.sgna / f.revenue)}</td>
            </tr>
            <tr>
              <td>Other Operating Expenses</td>
              <td className="num">({f.otherOpex})</td>
              <td className="num">{formatPercent(f.otherOpex / f.revenue)}</td>
            </tr>
            <tr className="row-bold row-highlight row-border">
              <td>EBITDA</td>
              <td className="num">{f.ebitda}</td>
              <td className="num">{formatPercent(f.ebitdaMargin)}</td>
            </tr>
            <tr>
              <td>Depreciation & Amortization</td>
              <td className="num">({f.da})</td>
              <td className="num">{formatPercent(f.da / f.revenue)}</td>
            </tr>
            <tr className="row-bold row-border">
              <td>EBIT</td>
              <td className="num">{f.ebit}</td>
              <td className="num">{formatPercent(f.ebit / f.revenue)}</td>
            </tr>
            <tr>
              <td>Interest Expense</td>
              <td className="num">({f.interestExpense})</td>
              <td className="num">{formatPercent(f.interestExpense / f.revenue)}</td>
            </tr>
            <tr className="row-border">
              <td>Pre-Tax Income</td>
              <td className="num">{f.ebt}</td>
              <td className="num">{formatPercent(f.ebt / f.revenue)}</td>
            </tr>
            <tr>
              <td>Income Taxes (25%)</td>
              <td className="num">({f.taxes})</td>
              <td className="num">{formatPercent(f.taxes / f.revenue)}</td>
            </tr>
            <tr className="row-bold row-highlight row-border">
              <td>Net Income</td>
              <td className="num">{f.netIncome}</td>
              <td className="num">{formatPercent(f.netIncome / f.revenue)}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Financial Projections */}
      <section className="model-section">
        <h3>5-Year Financial Projections ($M)</h3>
        <table className="financial-table projections-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th className="num">LTM</th>
              {f.projections.map((p) => (
                <th key={p.year} className="num">{p.year}E</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="row-bold">
              <td>Revenue</td>
              <td className="num">{f.revenue}</td>
              {f.projections.map((p) => (
                <td key={p.year} className="num">{p.revenue}</td>
              ))}
            </tr>
            <tr>
              <td>Growth %</td>
              <td className="num">—</td>
              {f.projections.map((p, i) => (
                <td key={p.year} className="num">
                  {formatPercent((p.revenue - (i === 0 ? f.revenue : f.projections[i - 1].revenue)) /
                    (i === 0 ? f.revenue : f.projections[i - 1].revenue))}
                </td>
              ))}
            </tr>
            <tr className="row-bold row-highlight">
              <td>EBITDA</td>
              <td className="num">{f.ebitda}</td>
              {f.projections.map((p) => (
                <td key={p.year} className="num">{p.ebitda}</td>
              ))}
            </tr>
            <tr>
              <td>EBITDA Margin</td>
              <td className="num">{formatPercent(f.ebitdaMargin)}</td>
              {f.projections.map((p) => (
                <td key={p.year} className="num">{formatPercent(p.ebitdaMargin)}</td>
              ))}
            </tr>
            <tr className="row-bold">
              <td>Free Cash Flow</td>
              <td className="num">—</td>
              {f.projections.map((p) => (
                <td key={p.year} className="num">{p.fcf}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      {/* Valuation */}
      <section className="model-section">
        <h3>Valuation Summary</h3>
        <div className="valuation-grid">
          <div className="val-card">
            <h4>DCF Valuation</h4>
            <div className="val-big-number">{formatCurrency(model.dcfValue)}M</div>
            <p className="val-detail">WACC: 10.0% | Terminal Growth: 2.5%</p>
            <p className="val-detail">PV of Terminal Value: {formatCurrency(model.terminalValue)}M</p>
          </div>
          <div className="val-card">
            <h4>Comparable Companies</h4>
            <div className="val-big-number">{formatCurrency(model.footballField.comparables.mid)}M</div>
            <p className="val-detail">
              Range: {formatCurrency(model.footballField.comparables.low)}M –{" "}
              {formatCurrency(model.footballField.comparables.high)}M
            </p>
          </div>
          <div className="val-card">
            <h4>Precedent Transactions</h4>
            <div className="val-big-number">{formatCurrency(model.footballField.precedent.mid)}M</div>
            <p className="val-detail">
              Range: {formatCurrency(model.footballField.precedent.low)}M –{" "}
              {formatCurrency(model.footballField.precedent.high)}M
            </p>
          </div>
          <div className="val-card">
            <h4>LBO Analysis</h4>
            <div className="val-big-number">{formatCurrency(model.footballField.lbo.mid)}M</div>
            <p className="val-detail">
              Range: {formatCurrency(model.footballField.lbo.low)}M –{" "}
              {formatCurrency(model.footballField.lbo.high)}M
            </p>
          </div>
        </div>
      </section>

      {/* Football Field */}
      <section className="model-section">
        <h3>Valuation Football Field ($M)</h3>
        <div className="football-field">
          {Object.entries(model.footballField).map(([method, range]) => {
            const allValues = Object.values(model.footballField).flatMap((r) => [r.low, r.high]);
            const minVal = Math.min(...allValues);
            const maxVal = Math.max(...allValues);
            const scale = (v) => ((v - minVal) / (maxVal - minVal)) * 100;

            const labels = {
              dcf: "DCF Analysis",
              comparables: "Comparable Companies",
              precedent: "Precedent Transactions",
              lbo: "LBO Analysis",
            };

            return (
              <div key={method} className="ff-row">
                <div className="ff-label">{labels[method]}</div>
                <div className="ff-bar-container">
                  <div
                    className="ff-bar"
                    style={{
                      left: `${scale(range.low)}%`,
                      width: `${scale(range.high) - scale(range.low)}%`,
                    }}
                  >
                    <span className="ff-low">{formatCurrency(range.low)}M</span>
                    <span className="ff-mid">{formatCurrency(range.mid)}M</span>
                    <span className="ff-high">{formatCurrency(range.high)}M</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Synergy Analysis */}
      <section className="model-section">
        <h3>Synergy Analysis ($M)</h3>
        <div className="synergy-grid">
          <div>
            <h4>Cost Synergies</h4>
            <table className="financial-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="num">Value ($M)</th>
                  <th>Timeline</th>
                </tr>
              </thead>
              <tbody>
                {s.costSynergies.map((item) => (
                  <tr key={item.item}>
                    <td>{item.item}</td>
                    <td className="num">{item.value}</td>
                    <td>{item.timeline}</td>
                  </tr>
                ))}
                <tr className="row-bold row-border">
                  <td>Total Cost Synergies</td>
                  <td className="num">{s.totalCostSynergy}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4>Revenue Synergies</h4>
            <table className="financial-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="num">Value ($M)</th>
                  <th>Timeline</th>
                </tr>
              </thead>
              <tbody>
                {s.revenueSynergies.map((item) => (
                  <tr key={item.item}>
                    <td>{item.item}</td>
                    <td className="num">{item.value}</td>
                    <td>{item.timeline}</td>
                  </tr>
                ))}
                <tr className="row-bold row-border">
                  <td>Total Revenue Synergies</td>
                  <td className="num">{s.totalRevenueSynergy}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="synergy-summary">
          <div className="synergy-total">
            <span>One-Time Integration Costs:</span>
            <span className="neg">${s.integrationCost}M</span>
          </div>
          <div className="synergy-total">
            <span>Net Synergy Value (Annual Run-Rate):</span>
            <span>${s.totalCostSynergy + s.totalRevenueSynergy}M</span>
          </div>
          <div className="synergy-total">
            <span>Time to Full Realization:</span>
            <span>{s.timeToRealize}</span>
          </div>
        </div>
      </section>

      {/* Sources & Uses */}
      <section className="model-section">
        <h3>Sources & Uses ($M)</h3>
        <div className="synergy-grid">
          <div>
            <h4>Sources</h4>
            <table className="financial-table">
              <thead>
                <tr>
                  <th>Source</th>
                  <th className="num">Amount ($M)</th>
                  <th className="num">% of Total</th>
                </tr>
              </thead>
              <tbody>
                {model.sourcesUses.sources.map((item) => {
                  const total = model.sourcesUses.sources.reduce(
                    (s, i) => s + i.value,
                    0
                  );
                  return (
                    <tr key={item.item}>
                      <td>{item.item}</td>
                      <td className="num">{item.value}</td>
                      <td className="num">
                        {formatPercent(item.value / total)}
                      </td>
                    </tr>
                  );
                })}
                <tr className="row-bold row-border">
                  <td>Total Sources</td>
                  <td className="num">
                    {model.sourcesUses.sources.reduce(
                      (s, i) => s + i.value,
                      0
                    )}
                  </td>
                  <td className="num">100.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4>Uses</h4>
            <table className="financial-table">
              <thead>
                <tr>
                  <th>Use</th>
                  <th className="num">Amount ($M)</th>
                  <th className="num">% of Total</th>
                </tr>
              </thead>
              <tbody>
                {model.sourcesUses.uses.map((item) => {
                  const total = model.sourcesUses.uses.reduce(
                    (s, i) => s + i.value,
                    0
                  );
                  return (
                    <tr key={item.item}>
                      <td>{item.item}</td>
                      <td className="num">{item.value}</td>
                      <td className="num">
                        {formatPercent(item.value / total)}
                      </td>
                    </tr>
                  );
                })}
                <tr className="row-bold row-border">
                  <td>Total Uses</td>
                  <td className="num">
                    {model.sourcesUses.uses.reduce((s, i) => s + i.value, 0)}
                  </td>
                  <td className="num">100.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Accretion / Dilution */}
      <section className="model-section">
        <h3>Accretion / Dilution Analysis</h3>
        <div className="accretion-box">
          <div className={`accretion-indicator ${model.accretionDilution.isAccretive ? "accretive" : "dilutive"}`}>
            <span className="accretion-badge">
              {model.accretionDilution.isAccretive ? "ACCRETIVE" : "DILUTIVE"}
            </span>
            <span className="accretion-pct">
              {model.accretionDilution.impactPercent > 0 ? "+" : ""}
              {model.accretionDilution.impactPercent}% to EPS
            </span>
          </div>
          <table className="financial-table">
            <tbody>
              <tr>
                <td>Target Net Income (LTM)</td>
                <td className="num">${f.netIncome}M</td>
              </tr>
              <tr>
                <td>After-Tax Cost Synergies</td>
                <td className="num">${model.accretionDilution.synergiesAfterTax}M</td>
              </tr>
              <tr>
                <td>Additional Interest Expense</td>
                <td className="num neg">(${ model.accretionDilution.additionalInterest}M)</td>
              </tr>
              <tr className="row-bold row-border">
                <td>Pro Forma Income Contribution</td>
                <td className="num">${model.accretionDilution.proFormaIncome}M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sensitivity */}
      <section className="model-section">
        <h3>DCF Sensitivity Analysis — Enterprise Value ($M)</h3>
        <div className="sensitivity-wrapper">
          <table className="sensitivity-table">
            <thead>
              <tr>
                <th className="corner-cell">WACC \ Terminal Growth</th>
                {model.sensitivityTable.growthValues.map((g) => (
                  <th key={g} className="num">{g}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {model.sensitivityTable.waccValues.map((w, wi) => (
                <tr key={w}>
                  <td className="row-header">{w}</td>
                  {model.sensitivityTable.values[wi].map((val, gi) => (
                    <td
                      key={gi}
                      className={`num ${
                        wi === 2 && gi === 2 ? "cell-highlight" : ""
                      }`}
                    >
                      {formatCurrency(val)}M
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">
          Base case highlighted. WACC range: 8.0% – 12.0%. Terminal growth
          range: 1.5% – 3.5%.
        </p>
      </section>

      <div className="model-disclaimer">
        <p>
          <strong>Disclaimer:</strong> This analysis is for illustrative and
          screening purposes only. All financial data is estimated based on
          publicly available information and industry benchmarks. Actual values
          may differ materially. This does not constitute investment advice. A
          thorough due diligence process should be conducted before any
          investment decision.
        </p>
      </div>
    </div>
  );
}
