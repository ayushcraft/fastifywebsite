import { useEffect } from 'react';
import { useProgress } from '../contexts/ProgressContext';
import CodeBlock from './CodeBlock';
import Diagram from './Diagram';
import Quiz from './Quiz';
import CodeExercise from './CodeExercise';

export default function LessonViewer({ lesson, onComplete }) {
  const { progress, dispatch } = useProgress();

  useEffect(() => {
    dispatch({ type: 'COMPLETE_LESSON', id: lesson.id });
  }, [lesson.id, dispatch]);

  const renderContent = (block, i) => {
    switch (block.type) {
      case 'heading':
        return <h3 key={i} className="lesson-heading">{block.text}</h3>;
      case 'text':
        return <p key={i} className="lesson-text">{block.text}</p>;
      case 'list':
        return (
          <ul key={i} className="lesson-list">
            {block.items.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        );
      case 'code':
        return <CodeBlock key={i} code={block.code} lang={block.lang} />;
      case 'diagram':
        return <Diagram key={i} alt={block.alt} label={block.label} />;
      case 'note':
        return (
          <div key={i} className={`note ${block.variant || 'info'}`}>
            <strong className="note-label">{block.label || 'Note'}:</strong>{' '}
            {block.text}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="lesson-viewer">
      <div className="lesson-header">
        <span className={`badge badge-${lesson.difficulty}`}>{lesson.difficulty}</span>
        <h1>{lesson.title}</h1>
      </div>
      <div className="lesson-body">
        {lesson.content.map((block, i) => renderContent(block, i))}
      </div>
      {lesson.quiz && <Quiz questions={lesson.quiz} lessonId={lesson.id} />}
      {lesson.exercise && <CodeExercise exercise={lesson.exercise} />}
      <div className="lesson-complete">
        <button className="btn btn-primary" onClick={onComplete}>
          {progress[lesson.id]?.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
      </div>
    </div>
  );
}
