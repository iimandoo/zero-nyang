import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Action } from "./components/Action";
import { FinalCTA } from "./components/FinalCTA";
import { SimpleGoogleAnalytics } from "../components/GoogleAnalytics";

export default function App() {
  // Google Analytics 측정 ID (환경 변수에서 가져오거나 직접 입력)
  const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

  return (
    <div className="min-h-screen bg-slate-950">
      {gaMeasurementId && <SimpleGoogleAnalytics measurementId={gaMeasurementId} />}
      <Hero />
      <Problem />
      <Solution />
      <Action />
      <FinalCTA />
    </div>
  );
}