import { useState } from 'react';
import CodeBlock from './CodeBlock';

export default function CodeExercise({ exercise }) {
  const [showHint, setShowHint] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const nextHint = () => {
    if (hintLevel < exercise.hints.length - 1) {
      setHintLevel(prev => prev + 1);
    }
    setShowHint(true);
  };

  return (
    <div className="exercise">
      <h2>Try It Yourself</h2>
      <p className="exercise-instruction">{exercise.instruction}</p>
      <div className="exercise-actions">
        <button className="btn btn-outline" onClick={nextHint}>
          {showHint ? 'Next Hint' : 'Show Hint'}
        </button>
        <button
          className="btn btn-outline"
          onClick={() => setShowSolution(prev => !prev)}
        >
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>
      </div>
      {showHint && exercise.hints.slice(0, hintLevel + 1).map((hint, i) => (
        <div key={i} className="hint">
          <span className="hint-label">Hint {i + 1}:</span> {hint}
        </div>
      ))}
      {showSolution && (
        <div className="solution">
          <h3>Solution</h3>
          <CodeBlock code={exercise.solution} lang="javascript" />
        </div>
      )}
    </div>
  );
}
