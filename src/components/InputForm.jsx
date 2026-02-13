import { useState } from "react";
import { AVAILABLE_OBJECTIVES, AVAILABLE_INDUSTRIES } from "../utils/targetGenerator";

export default function InputForm({ onSubmit, isLoading }) {
  const [acquirerName, setAcquirerName] = useState("");
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedObjectives, setSelectedObjectives] = useState([]);

  const toggleObjective = (obj) => {
    setSelectedObjectives((prev) =>
      prev.includes(obj) ? prev.filter((o) => o !== obj) : [...prev, obj]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acquirerName || !industry || !budget || selectedObjectives.length === 0) return;
    onSubmit({
      acquirerName,
      industry,
      budget: parseFloat(budget),
      objectives: selectedObjectives,
    });
  };

  const isValid = acquirerName && industry && budget && selectedObjectives.length > 0;

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>Acquisition Screening Parameters</h2>
        <p className="form-subtitle">
          Define your acquisition criteria to generate a targeted list of
          potential acquisition opportunities across any industry.
        </p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="acquirer">Acquiring Company Name</label>
          <input
            id="acquirer"
            type="text"
            value={acquirerName}
            onChange={(e) => setAcquirerName(e.target.value)}
            placeholder="e.g., Acme Corporation"
          />
        </div>

        <div className="form-group">
          <label htmlFor="budget">Acquisition Budget ($M)</label>
          <div className="input-with-prefix">
            <span className="input-prefix">$</span>
            <input
              id="budget"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="e.g., 500"
              min="10"
            />
            <span className="input-suffix">M</span>
          </div>
        </div>
      </div>

      <div className="form-group industry-group">
        <label>Target Industry</label>
        <div className="industry-grid">
          {AVAILABLE_INDUSTRIES.map((ind) => (
            <button
              key={ind}
              type="button"
              className={`industry-chip ${industry === ind ? "selected" : ""}`}
              onClick={() => setIndustry(ind)}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group objectives-group">
        <label>Strategic Objectives (select all that apply)</label>
        <div className="objectives-grid">
          {AVAILABLE_OBJECTIVES.map((obj) => (
            <button
              key={obj}
              type="button"
              className={`objective-chip ${
                selectedObjectives.includes(obj) ? "selected" : ""
              }`}
              onClick={() => toggleObjective(obj)}
            >
              {obj}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={!isValid || isLoading}
      >
        {isLoading ? (
          <span className="loading-text">
            <span className="spinner" /> Generating Targets...
          </span>
        ) : (
          "Generate Acquisition Targets"
        )}
      </button>
    </form>
  );
}
