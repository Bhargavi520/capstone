import { Sparkles } from "lucide-react";

export default function EmptyState({ title, text, action }) {
  return (
    <div className="empty-state">
      <div className="empty-icon"><Sparkles size={21} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
      {action}
    </div>
  );
}
