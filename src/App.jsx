import { useState } from "react";
import InputForm from "./components/InputForm";
import TargetList from "./components/TargetList";
import FinancialModel from "./components/FinancialModel";
import SlateChat from "./components/SlateChat";
import { generateTargets } from "./utils/targetGenerator";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("slate");

  // M&A tracker state
  const [step, setStep] = useState("input");
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState(null);
  const [targets, setTargets] = useState([]);
  const [selectedTarget, setSelectedTarget] = useState(null);

  const handleSubmit = (formData) => {
    setIsLoading(true);
    setInputs(formData);
    setTimeout(() => {
      const results = generateTargets(
        formData.acquirerName,
        formData.budget,
        formData.objectives,
        formData.industry,
        formData.additionalContext
      );
      setTargets(results);
      setStep("results");
      setIsLoading(false);
    }, 1500);
  };

  const handleSelectTarget = (target) => {
    setSelectedTarget(target);
    setStep("model");
    window.scrollTo(0, 0);
  };

  const handleBackToResults = () => {
    setSelectedTarget(null);
    setStep("results");
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    setStep("input");
    setInputs(null);
    setTargets([]);
    setSelectedTarget(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">{activeTab === "slate" ? "CRM" : "M&A"}</div>
            <div>
              <h1>{activeTab === "slate" ? "Slate CRM Assistant" : "Investment Opportunity Tracker"}</h1>
              <p className="tagline">
                {activeTab === "slate" ? "Admissions & Enrollment · Powered by Claude" : "M&A Advisory Platform"}
              </p>
            </div>
          </div>
          <div className="header-actions">
            <div className="tab-switcher">
              <button
                className={`tab-btn ${activeTab === "slate" ? "active" : ""}`}
                onClick={() => setActiveTab("slate")}
              >
                Slate CRM
              </button>
              <button
                className={`tab-btn ${activeTab === "ma" ? "active" : ""}`}
                onClick={() => setActiveTab("ma")}
              >
                M&A Tracker
              </button>
            </div>
            {activeTab === "ma" && step !== "input" && (
              <button className="reset-btn" onClick={handleReset}>
                New Search
              </button>
            )}
          </div>
        </div>
      </header>

      <main className={`app-main ${activeTab === "slate" ? "slate-main" : ""}`}>
        {activeTab === "slate" && <SlateChat />}

        {activeTab === "ma" && (
          <>
            {step === "input" && (
              <InputForm onSubmit={handleSubmit} isLoading={isLoading} />
            )}
            {step === "results" && inputs && (
              <TargetList
                targets={targets}
                onSelect={handleSelectTarget}
                acquirerName={inputs.acquirerName}
              />
            )}
            {step === "model" && selectedTarget && inputs && (
              <FinancialModel
                target={selectedTarget}
                acquirerName={inputs.acquirerName}
                onBack={handleBackToResults}
              />
            )}
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>
          {activeTab === "slate"
            ? "Slate CRM Assistant — Connects to your institution's Slate instance via the Slate API."
            : "Investment Opportunity Tracker — For illustrative and screening purposes only. Not investment advice."}
        </p>
      </footer>
    </div>
  );
}

export default App;
