import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  ChevronRight,
  FileText,
  LayoutDashboard,
  MessageSquareText,
  Sparkles,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { student } from "../data/demoData";

const items = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/resume", label: "Resume Analyzer", icon: FileText },
  { to: "/career", label: "Career & Skill Gap", icon: BriefcaseBusiness },
  { to: "/learning", label: "Learning Roadmap", icon: BookOpen },
  { to: "/interview", label: "Mock Interview", icon: MessageSquareText },
  { to: "/progress", label: "Progress & Insights", icon: BarChart3 },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark"><Sparkles size={19} /></div>
        <div>
          <div className="brand-name">CareerPilot</div>
          <div className="brand-sub">AI Placement Assistant</div>
        </div>
      </div>

      <div className="sidebar-section-label">WORKSPACE</div>
      <nav className="sidebar-nav">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icon size={18} strokeWidth={1.9} />
            <span>{label}</span>
            <ChevronRight className="nav-chevron" size={15} />
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-spacer" />

      <div className="sidebar-profile" onClick={() => window.location.href = "/profile"}>
        <div className="avatar avatar-sm">{student.initials}</div>
        <div className="sidebar-profile-copy">
          <strong>{student.name}</strong>
          <span>{student.targetRole}</span>
        </div>
        <UserRound size={16} />
      </div>

      <div className="sidebar-footer">
        <span className="status-dot" />
        <span>Demo workspace</span>
      </div>
    </aside>
  );
}
