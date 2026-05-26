import { useLocation } from 'react-router-dom';
import { sections, lessons } from '../data/lessons';
import { useProgress } from '../contexts/ProgressContext';

export default function Sidebar({ open, onClose, onNavigate }) {
  const location = useLocation();
  const { progress } = useProgress();

  const currentLessonId = location.pathname.replace('/lesson/', '');
  const totalLessons = lessons.length;
  const completedLessons = Object.values(progress).filter(p => p.completed).length;
  const pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const goTo = (path) => {
    onNavigate?.(path);
  };

  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <nav className="sidebar-nav">
        <div className="sidebar-header">
          <h2>Contents</h2>
          <button className="sidebar-close" onClick={onClose} aria-label="Close sidebar">×</button>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="progress-text">{pct}% complete</span>
        </div>
        {sections.map(section => (
          <div key={section.id} className="sidebar-section">
            <h3 className="section-title">{section.name}</h3>
            {section.lessons.map(lessonId => {
              const lesson = lessons.find(l => l.id === lessonId);
              const isActive = currentLessonId === lessonId;
              const isDone = progress[lessonId]?.completed;
              return (
                <button
                  key={lessonId}
                  className={`sidebar-link ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
                  onClick={() => goTo(`/lesson/${lessonId}`)}
                >
                  <span className="sidebar-link-icon">{isDone ? '✓' : '○'}</span>
                  <span className="sidebar-link-text">{lesson.title}</span>
                  <span className={`sidebar-difficulty ${lesson.difficulty}`}>{lesson.difficulty}</span>
                </button>
              );
            })}
          </div>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button className="btn btn-outline btn-sm" onClick={() => goTo('/glossary')}>
          Glossary
        </button>
      </div>
    </aside>
  );
}
