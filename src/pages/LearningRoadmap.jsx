import { BookOpen, CheckCircle2, Clock3, Filter, LockKeyhole, Play, Sparkles } from "lucide-react";
import { useState } from "react";
import { learningItems } from "../data/demoData";
import PageHeader from "../components/PageHeader";
import SectionCard from "../components/SectionCard";
import ProgressBar from "../components/ProgressBar";

export default function LearningRoadmap() {
  const [items, setItems] = useState(learningItems);
  const [filter, setFilter] = useState("All");

  const visible = filter === "All" ? items : items.filter((item) => item.priority === filter);

  const completeItem = (id) => {
    setItems((current) =>
      current.map((item) => item.id === id ? { ...item, progress: Math.min(100, item.progress + 20) } : item)
    );
  };

  return (
    <div className="page">
      <PageHeader
        eyebrow="ACTION LAYER"
        title="Personalized Learning Roadmap"
        description="A sample roadmap that turns identified skill gaps into prioritized learning actions."
        action={
          <div className="filter-buttons">
            {["All", "High", "Medium"].map((value) => (
              <button key={value} className={`filter-button ${filter === value ? "active" : ""}`} onClick={() => setFilter(value)}>
                {value === "All" ? "All" : `${value} priority`}
              </button>
            ))}
          </div>
        }
      />

      <div className="roadmap-summary">
        <div className="roadmap-summary-main">
          <div className="roadmap-spark"><Sparkles size={20} /></div>
          <div><span className="eyebrow light">THIS WEEK</span><h2>Close your top 3 skill gaps</h2><p>Estimated effort: 8h 40m · 61% completed</p></div>
        </div>
        <div className="roadmap-summary-score"><strong>61%</strong><ProgressBar value={61} tone="white" /></div>
      </div>

      <div className="roadmap-layout">
        <SectionCard title="Your learning path" subtitle={`${visible.length} recommended activities`}>
          <div className="learning-list">
            {visible.map((item, index) => (
              <div className="learning-card" key={item.id}>
                <div className="learning-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="learning-main">
                  <div className="learning-meta"><span className="learning-type">{item.type}</span><span>•</span><span>{item.skill}</span><span>•</span><span><Clock3 size={13} /> {item.duration}</span></div>
                  <h3>{item.title}</h3>
                  <div className="learning-progress-line"><ProgressBar value={item.progress} /><span>{item.progress}%</span></div>
                </div>
                <button className={`button ${item.progress >= 100 ? "button-success" : "button-secondary"}`} onClick={() => completeItem(item.id)}>
                  {item.progress >= 100 ? <CheckCircle2 size={15} /> : <Play size={14} />}
                  {item.progress >= 100 ? "Completed" : "Continue"}
                </button>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="roadmap-side">
          <SectionCard title="Why this order?" subtitle="Sample agent reasoning">
            <div className="reason-list">
              <div><span className="reason-icon">1</span><p><strong>SQL first</strong> because it is a high-impact gap for your selected role.</p></div>
              <div><span className="reason-icon">2</span><p><strong>Node.js next</strong> builds on your existing React knowledge.</p></div>
              <div><span className="reason-icon">3</span><p><strong>System Design</strong> is scheduled after backend fundamentals.</p></div>
            </div>
          </SectionCard>

          <SectionCard title="Locked next steps" subtitle="Unlock as your progress improves">
            <div className="locked-item"><LockKeyhole size={16} /><div><strong>Advanced System Design</strong><span>Complete current module</span></div></div>
            <div className="locked-item"><LockKeyhole size={16} /><div><strong>Architecture Interview</strong><span>Complete 2 mock interviews</span></div></div>
          </SectionCard>
        </div>
      </div>

      <div className="demo-note"><Filter size={15} /><span>Demo interaction: clicking “Continue” updates local sample progress only. No backend persistence is connected.</span></div>
    </div>
  );
}
