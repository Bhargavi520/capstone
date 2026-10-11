import { ArrowRight, Check, ChevronDown, CircleAlert, Sparkles, TrendingUp } from "lucide-react";
import { useState } from "react";
import { careerRoles, requiredSkills } from "../data/demoData";
import PageHeader from "../components/PageHeader";
import SectionCard from "../components/SectionCard";
import ProgressBar from "../components/ProgressBar";

export default function CareerGuidance() {
  const [selectedRole, setSelectedRole] = useState(careerRoles[0].title);
  const role = careerRoles.find((item) => item.title === selectedRole) || careerRoles[0];

  return (
    <div className="page">
      <PageHeader
        eyebrow="COGNITION LAYER"
        title="Career & Skill Gap"
        description="Compare your current profile with role requirements and turn the differences into clear priorities."
        action={
          <label className="select-wrap">
            <span>Target role</span>
            <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
              {careerRoles.map((item) => <option key={item.title}>{item.title}</option>)}
            </select>
            <ChevronDown size={15} />
          </label>
        }
      />

      <div className="career-hero">
        <div className="career-hero-main">
          <div className="role-icon"><Sparkles size={23} /></div>
          <div>
            <span className="eyebrow light">BEST MATCH</span>
            <h2>{role.title}</h2>
            <p>{role.description}</p>
            <div className="role-tags">{role.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </div>
        <div className="match-score">
          <span>Role match</span>
          <strong>{role.match}%</strong>
          <div className="match-trend"><TrendingUp size={14} /> Strong fit</div>
        </div>
      </div>

      <div className="content-grid career-grid">
        <SectionCard title="Skill gap analysis" subtitle="Current proficiency vs. target proficiency">
          <div className="comparison-list">
            {requiredSkills.map((skill) => (
              <div className="comparison-row" key={skill.name}>
                <div className="comparison-name"><strong>{skill.name}</strong><span>{skill.current >= skill.required ? "Target met" : `${skill.required - skill.current}% gap`}</span></div>
                <div className="comparison-bars">
                  <div className="comparison-line"><span>Current</span><ProgressBar value={skill.current} tone={skill.current >= skill.required ? "green" : "orange"} /></div>
                  <div className="comparison-line"><span>Target</span><ProgressBar value={skill.required} tone="muted" /></div>
                </div>
                {skill.current >= skill.required ? <Check className="comparison-check" size={17} /> : <CircleAlert className="comparison-alert" size={17} />}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Priority gaps" subtitle="Focus here first for the selected role">
          <div className="priority-cards">
            {[
              ["System Design", "27% gap", "High"],
              ["SQL", "14% gap", "High"],
              ["Node.js", "13% gap", "Medium"],
            ].map(([name, gap, priority]) => (
              <div className="priority-card" key={name}>
                <div className="priority-top"><span className={`priority-dot ${priority.toLowerCase()}`} /> {priority} priority</div>
                <strong>{name}</strong>
                <span>{gap} to target</span>
                <button className="text-link">Build this skill <ArrowRight size={13} /></button>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Career recommendations" subtitle="Other roles that match your current profile">
          <div className="role-list">
            {careerRoles.map((item) => (
              <button className={`role-list-item ${item.title === selectedRole ? "selected" : ""}`} onClick={() => setSelectedRole(item.title)} key={item.title}>
                <div className="role-mini-icon"><Sparkles size={16} /></div>
                <div><strong>{item.title}</strong><span>{item.demand} · {item.match}% match</span></div>
                <ArrowRight size={16} />
              </button>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="How this supports the student" subtitle="Prototype workflow">
          <div className="workflow-note">
            <div className="workflow-number">01</div>
            <p><strong>Understand</strong> your resume and existing skills.</p>
            <div className="workflow-number">02</div>
            <p><strong>Compare</strong> them against the selected role.</p>
            <div className="workflow-number">03</div>
            <p><strong>Prioritize</strong> the gaps with the highest impact.</p>
            <div className="workflow-number">04</div>
            <p><strong>Act</strong> through the personalized learning roadmap.</p>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
