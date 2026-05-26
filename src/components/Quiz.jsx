import { useState } from 'react';
import { useProgress } from '../contexts/ProgressContext';

export default function Quiz({ questions, lessonId }) {
  const { progress, dispatch } = useProgress();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const quizDone = progress[lessonId]?.quizDone;

  const handleSelect = (qIndex, optIndex) => {
    if (submitted || quizDone) return;
    setAnswers(prev => ({ ...prev, [qIndex]: optIndex }));
  };

  const handleSubmit = () => {
    const correct = questions.reduce((acc, q, i) =>
      acc + (answers[i] === q.correct ? 1 : 0), 0);
    setScore(correct);
    setSubmitted(true);
    dispatch({ type: 'MARK_QUIZ_DONE', id: lessonId, score: correct });
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(null);
  };

  const allAnswered = questions.every((_, i) => answers[i] !== undefined);

  return (
    <div className="quiz">
      <h2>Knowledge Check</h2>
      {questions.map((q, qIndex) => {
        const userAnswer = answers[qIndex];
        const isCorrect = submitted && userAnswer === q.correct;
        const isWrong = submitted && userAnswer !== undefined && !isCorrect;

        return (
          <div key={qIndex} className={`quiz-question ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}>
            <p className="quiz-q-text">
              <span className="quiz-num">{qIndex + 1}.</span> {q.question}
            </p>
            <div className="quiz-options">
              {q.options.map((opt, optIndex) => {
                let cls = 'quiz-option';
                if (userAnswer === optIndex) cls += ' selected';
                if (submitted && optIndex === q.correct) cls += ' correct-answer';
                if (isWrong && optIndex === userAnswer) cls += ' wrong-answer';
                return (
                  <button
                    key={optIndex}
                    className={cls}
                    onClick={() => handleSelect(qIndex, optIndex)}
                    disabled={submitted || quizDone}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
      {quizDone && !submitted ? (
        <p className="quiz-done-msg">Quiz completed! Score: {progress[lessonId].quizScore}/{questions.length}</p>
      ) : !submitted ? (
        <button className="btn btn-primary" onClick={handleSubmit} disabled={!allAnswered}>
          Submit Answers
        </button>
      ) : (
        <div className="quiz-result">
          <p>You scored <strong>{score}/{questions.length}</strong></p>
          <button className="btn btn-outline" onClick={handleRetry}>Retry Quiz</button>
        </div>
      )}
    </div>
  );
}
