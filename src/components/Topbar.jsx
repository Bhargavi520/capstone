import { Bell, ChevronDown, Search } from "lucide-react";
import { student } from "../data/demoData";

const titles = {
  "/dashboard": ["Dashboard", "Your placement preparation at a glance"],
  "/resume": ["Resume Analyzer", "Build a structured student profile from your resume"],
  "/career": ["Career & Skill Gap", "Explore career fit and identify priority skills"],
  "/learning": ["Learning Roadmap", "Turn skill gaps into an actionable learning plan"],
  "/interview": ["Mock Interview", "Practice role-specific questions and receive feedback"],
  "/progress": ["Progress & Insights", "Track improvement and see what your agents are doing"],
  "/profile": ["My Profile", "Manage your academic goals and career preferences"],
};

export default function Topbar({ pathname, onProfile }) {
  const [title, subtitle] = titles[pathname] || titles["/dashboard"];

  return (
    <header className="topbar">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="topbar-actions">
        <div className="search-box">
          <Search size={17} />
          <input placeholder="Search..." aria-label="Search" />
          <span className="search-shortcut">⌘ K</span>
        </div>
        <button className="icon-button notification" aria-label="Notifications">
          <Bell size={19} />
          <span />
        </button>
        <button className="top-profile" onClick={onProfile}>
          <div className="avatar avatar-sm">{student.initials}</div>
          <div className="top-profile-copy">
            <strong>{student.name.split(" ")[0]}</strong>
            <span>Student</span>
          </div>
          <ChevronDown size={15} />
        </button>
      </div>
    </header>
  );
}
