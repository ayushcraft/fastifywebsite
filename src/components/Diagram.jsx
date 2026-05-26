export default function Diagram({ alt, label }) {
  return (
    <div className="diagram" role="figure" aria-label={alt}>
      <div className="diagram-box">
        <pre className="diagram-text">{label}</pre>
      </div>
      <div className="diagram-caption">{alt}</div>
    </div>
  );
}
