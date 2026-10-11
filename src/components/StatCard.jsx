import { ArrowUpRight, BarChart3, BookOpen, BriefcaseBusiness, Target } from "lucide-react";

const icons = {
  blue: BarChart3,
  violet: Target,
  green: BookOpen,
  orange: BriefcaseBusiness,
};

export default function StatCard({ label, value, change, tone = "blue" }) {
  const Icon = icons[tone] || BarChart3;
  return (
    <div className="stat-card">
      <div className={`stat-icon ${tone}`}><Icon size={19} /></div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-change"><ArrowUpRight size={14} /> {change} this month</div>
    </div>
  );
}
