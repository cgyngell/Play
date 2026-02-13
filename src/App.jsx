import { useState } from "react";
import InputForm from "./components/InputForm";
import TargetList from "./components/TargetList";
import FinancialModel from "./components/FinancialModel";
import { generateTargets } from "./utils/targetGenerator";
import "./App.css";

function App() {
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
        formData.industry
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
            <div className="logo-icon">M&A</div>
            <div>
              <h1>Investment Opportunity Tracker</h1>
              <p className="tagline">M&A Advisory Platform</p>
            </div>
          </div>
          {step !== "input" && (
            <button className="reset-btn" onClick={handleReset}>
              New Search
            </button>
          )}
        </div>
      </header>

      <main className="app-main">
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
      </main>

      <footer className="app-footer">
        <p>
          Investment Opportunity Tracker — For illustrative and screening purposes only.
          Not investment advice.
        </p>
      </footer>
    </div>
  );
}

export default App;
