import { formatCurrency, formatPercent } from "../utils/format";

export default function TargetList({ targets, onSelect, acquirerName }) {
  return (
    <div className="target-list">
      <div className="section-header">
        <h2>Potential Acquisition Targets for {acquirerName}</h2>
        <p className="section-subtitle">
          Ranked by strategic fit score. Select a target to view the full
          financial model and cost analysis.
        </p>
      </div>

      <div className="targets-grid">
        {targets.map((target, idx) => (
          <div key={target.name} className="target-card">
            <div className="target-card-header">
              <div className="target-rank">#{idx + 1}</div>
              <div className="target-title">
                <h3>{target.name}</h3>
                <span className="target-sector">{target.sector}</span>
              </div>
              <div className="fit-score">
                <div className="fit-score-value">{target.fitScore}%</div>
                <div className="fit-score-label">Fit Score</div>
              </div>
            </div>

            <p className="target-description">{target.description}</p>

            <div className="target-metrics">
              <div className="metric">
                <span className="metric-label">Revenue</span>
                <span className="metric-value">
                  {formatCurrency(target.financials.revenue)}M
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">EBITDA</span>
                <span className="metric-value">
                  {formatCurrency(target.financials.ebitda)}M
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">EBITDA Margin</span>
                <span className="metric-value">
                  {formatPercent(target.financials.ebitdaMargin)}
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">EV / EBITDA</span>
                <span className="metric-value">
                  {target.financials.evMultiple}x
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">Enterprise Value</span>
                <span className="metric-value">
                  {formatCurrency(target.financials.enterpriseValue)}M
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">Growth Rate</span>
                <span className="metric-value">
                  {formatPercent(target.financials.growthRate)}
                </span>
              </div>
            </div>

            <div className="target-rationale">
              <h4>Investment Rationale</h4>
              <ul>
                {target.rationale.slice(0, 3).map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="target-strengths">
              {target.strengths.map((s) => (
                <span key={s} className="strength-tag">
                  {s}
                </span>
              ))}
            </div>

            <div className="target-meta">
              <span>{target.employees} employees</span>
              <span>Founded {target.founded}</span>
              <span>{target.hq}</span>
            </div>

            <button
              className="select-btn"
              onClick={() => onSelect(target)}
            >
              View Full Financial Model →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
