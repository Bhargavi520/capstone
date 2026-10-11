import { BookOpen, CheckCircle2, FileText, Target } from "lucide-react";
import { activities } from "../data/demoData";

const icons = { check: CheckCircle2, book: BookOpen, target: Target, file: FileText };

export default function AgentActivity({ compact = false }) {
  return (
    <div className="activity-list">
      {activities.slice(0, compact ? 3 : activities.length).map((item) => {
        const Icon = icons[item.icon] || CheckCircle2;
        return (
          <div className="activity-item" key={`${item.time}-${item.title}`}>
            <div className="activity-icon"><Icon size={16} /></div>
            <div className="activity-copy">
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
              <small>{item.time}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
}
