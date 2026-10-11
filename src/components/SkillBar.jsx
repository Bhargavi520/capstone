import ProgressBar from "./ProgressBar";

export default function SkillBar({ name, value, required, showRequired = false }) {
  return (
    <div className="skill-row">
      <div className="skill-row-top">
        <span>{name}</span>
        <span>{value}%{showRequired ? ` / ${required}%` : ""}</span>
      </div>
      <ProgressBar value={value} tone={value >= (required || 70) ? "green" : value >= 55 ? "orange" : "red"} />
      {showRequired && (
        <div className="skill-required">Target proficiency: {required}%</div>
      )}
    </div>
  );
}
