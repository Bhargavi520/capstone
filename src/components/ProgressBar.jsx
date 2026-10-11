export default function ProgressBar({ value, tone = "blue", height = 7 }) {
  return (
    <div className="progress-track" style={{ height }}>
      <div
        className={`progress-fill ${tone}`}
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
