import { Activity, ArrowUpRight, CheckCircle2, Clock3, Sparkles, Target, TrendingUp } from "lucide-react";
import { agentSteps, activities, weeklyProgress } from "../data/demoData";
import PageHeader from "../components/PageHeader";
import SectionCard from "../components/SectionCard";
import ProgressBar from "../components/ProgressBar";
import AgentActivity from "../components/AgentActivity";

function WeeklyChart() {
  return (
    <div className="weekly-chart">
      {weeklyProgress.map((item) => (
        <div className="weekly-col" key={item.day}>
          <div className="weekly-value">{item.value}%</div>
          <div className="weekly-track"><div className="weekly-fill" style={{ height: `${item.value}%` }} /></div>
          <span>{item.day}</span>
        </div>
      ))}
    </div>
  );
}

export default function Progress() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="REFLECTION & MEMORY"
        title="Progress & Insights"
        description="See how learning, interviews and skill development feed the next stage of personalized guidance."
      />

      <div className="progress-highlight">
        <div><div className="eyebrow light">PLACEMENT READINESS</div><h2>68%</h2><p>+9% from your previous review</p></div>
        <div className="highlight-actions"><span><CheckCircle2 size={15} /> 12 activities completed</span><span><Clock3 size={15} /> 6h 20m learning time</span></div>
      </div>

      <div className="content-grid">
        <SectionCard title="Weekly learning activity" subtitle="Sample activity score by day">
          <WeeklyChart />
        </SectionCard>

        <SectionCard title="Skill growth" subtitle="Current progress toward role readiness">
          <div className="growth-list">
            {[
              ["Java", 82, "+8%"],
              ["React.js", 76, "+6%"],
              ["DSA", 70, "+12%"],
              ["SQL", 58, "+18%"],
              ["Node.js", 62, "+11%"],
            ].map(([name, value, change]) => (
              <div className="growth-item" key={name}>
                <div><strong>{name}</strong><span><TrendingUp size={12} /> {change}</span></div>
                <ProgressBar value={value} tone="blue" />
                <small>{value}% proficiency</small>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Agent activity" subtitle="The proposed system's decision and feedback trail" action={<span className="live-label"><Activity size={13} /> Live prototype</span>}>
          <AgentActivity />
        </SectionCard>

        <SectionCard title="Guidance loop" subtitle="How progress can influence future recommendations">
          <div className="guidance-loop">
            {agentSteps.map((step, index) => (
              <div className="guidance-step" key={step.label}>
                <div className={`guidance-node ${step.state}`}><span>{index + 1}</span></div>
                <div><strong>{step.label}</strong><p>{step.text}</p></div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="insight-banner">
        <div className="insight-icon"><Sparkles size={19} /></div>
        <div><strong>Sample insight</strong><p>Your SQL and Node.js gaps are improving faster than System Design. The next roadmap version could increase System Design practice after your current backend module.</p></div>
        <div className="insight-score"><Target size={15} /> Priority update</div>
      </div>

      <div className="demo-note"><ArrowUpRight size={15} /><span>All charts and agent events are mock data for the UI skeleton. Real progress memory will be connected to the backend later.</span></div>
    </div>
  );
}
