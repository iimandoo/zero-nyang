import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Action } from "./components/Action";
import { FinalCTA } from "./components/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Problem />
      <Solution />
      <Action />
      <FinalCTA />
    </div>
  );
}