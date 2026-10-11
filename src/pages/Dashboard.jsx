import { ArrowRight, CalendarDays, CheckCircle2, CircleAlert, Sparkles, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { activities, agentSteps, careerRoles, learningItems, skills, stats, student, weeklyProgress } from "../data/demoData";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import ProgressBar from "../components/ProgressBar";
import SkillBar from "../components/SkillBar";
import AgentActivity from "../components/AgentActivity";

function MiniBars() {
  return (
    <div className="mini-chart">
      {weeklyProgress.map((item) => (
        <div className="mini-chart-col" key={item.day}>
          <div className="mini-bar-wrap">
            <div className="mini-bar" style={{ height: `${item.value}%` }} />
          </div>
          <span>{item.day}</span>
        </div>
      ))}
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="page">
      <div className="welcome-banner">
        <div>
          <div className="eyebrow light">PERSONALIZED PLACEMENT JOURNEY</div>
          <h2>Good morning, {student.name.split(" ")[0]} <span>✦</span></h2>
          <p>Your AI guidance workspace is focused on becoming a {student.targetRole}.</p>
        </div>
        <Link to="/career" className="button button-white">View career fit <ArrowRight size={16} /></Link>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
      </div>

      <div className="dashboard-grid">
        <SectionCard
          title="Your skill profile"
          subtitle="Current proficiency across your priority skills"
          action={<Link to="/career" className="text-link">View all <ArrowRight size={14} /></Link>}
        >
          <div className="skill-list">
            {skills.slice(0, 5).map((skill) => (
              <SkillBar key={skill.name} name={skill.name} value={skill.level} />
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Learning progress"
          subtitle="Weekly activity"
          action={<Link to="/learning" className="text-link">Roadmap <ArrowRight size={14} /></Link>}
        >
          <div className="chart-summary">
            <div><strong>61%</strong><span>overall completion</span></div>
            <div className="chart-positive"><TrendingUp size={14} /> +14%</div>
          </div>
          <MiniBars />
        </SectionCard>
      </div>

      <div className="dashboard-grid lower">
        <SectionCard
          title="Priority skill gaps"
          subtitle="Skills with the highest impact on your target role"
          action={<Link to="/career" className="text-link">Analyze <ArrowRight size={14} /></Link>}
        >
          <div className="gap-list">
            {[
              ["System Design", 38, 65, "High priority"],
              ["SQL", 58, 72, "High priority"],
              ["Node.js", 62, 75, "Medium priority"],
            ].map(([name, current, target, priority]) => (
              <div className="gap-item" key={name}>
                <div className="gap-main">
                  <div className="gap-icon"><CircleAlert size={16} /></div>
                  <div><strong>{name}</strong><span>{priority}</span></div>
                </div>
                <div className="gap-score">
                  <strong>{current}%</strong>
                  <span>Target {target}%</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Recommended next steps" subtitle="Based on your current profile">
          <div className="next-step-list">
            <Link to="/learning" className="next-step">
              <div className="next-step-number">01</div>
              <div><strong>Complete SQL practice</strong><span>~35 min · High impact</span></div>
              <ArrowRight size={16} />
            </Link>
            <Link to="/interview" className="next-step">
              <div className="next-step-number">02</div>
              <div><strong>Take a Java mock interview</strong><span>~15 min · Medium impact</span></div>
              <ArrowRight size={16} />
            </Link>
            <Link to="/resume" className="next-step">
              <div className="next-step-number">03</div>
              <div><strong>Improve resume projects</strong><span>~20 min · Profile quality</span></div>
              <ArrowRight size={16} />
            </Link>
          </div>
        </SectionCard>
      </div>

      <div className="dashboard-grid lower">
        <SectionCard title="Agent workflow" subtitle="How your guidance pipeline is progressing">
          <div className="agent-pipeline">
            {agentSteps.map((step, index) => (
              <div className={`agent-step ${step.state}`} key={step.label}>
                <div className="agent-step-node">
                  {step.state === "complete" ? <CheckCircle2 size={16} /> : step.state === "active" ? <Sparkles size={16} /> : <Target size={16} />}
                </div>
                <div className="agent-step-copy">
                  <strong>{step.label}</strong>
                  <span>{step.text}</span>
                </div>
                {index < agentSteps.length - 1 && <div className="agent-connector" />}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Recent agent activity" subtitle="Latest updates in your workspace">
          <AgentActivity compact />
        </SectionCard>
      </div>

      <div className="demo-note">
        <Sparkles size={16} />
        <span><strong>UI prototype:</strong> all values on this screen are sample data. AI agents, APIs and database connections will be added in later phases.</span>
      </div>
    </div>
  );
}
