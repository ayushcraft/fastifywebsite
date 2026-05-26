import { useState } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { sections, lessons } from './data/lessons';
import { useProgress } from './contexts/ProgressContext';
import Sidebar from './components/Sidebar';
import LessonViewer from './components/LessonViewer';
import Glossary from './components/Glossary';

function Home({ navigate }) {
  const { progress } = useProgress();

  const totalLessons = lessons.length;
  const completedLessons = Object.values(progress).filter(p => p.completed).length;
  const pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="home">
      <header className="home-hero">
        <h1>Learn Fastify</h1>
        <p className="home-subtitle">
          An interactive guide to backend development with Fastify — built for computer science students with zero backend experience.
        </p>
        <div className="home-stats">
          <div className="stat">
            <span className="stat-num">{totalLessons}</span>
            <span className="stat-label">Lessons</span>
          </div>
          <div className="stat">
            <span className="stat-num">{sections.length}</span>
            <span className="stat-label">Sections</span>
          </div>
          <div className="stat">
            <span className="stat-num">{pct}%</span>
            <span className="stat-label">Complete</span>
          </div>
        </div>
      </header>

      <div className="home-path">
        <h2>Your Learning Path</h2>
        <div className="path-progress">
          <div className="path-bar">
            <div className="path-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <div className="path-sections">
          {sections.map((section, si) => (
            <div key={section.id} className="path-section">
              <div className="path-section-header">
                <span className="path-section-num">{si + 1}</span>
                <h3>{section.name}</h3>
              </div>
              <div className="path-lessons">
                {section.lessons.map(lessonId => {
                  const lesson = lessons.find(l => l.id === lessonId);
                  const isDone = progress[lessonId]?.completed;
                  return (
                    <button
                      key={lessonId}
                      className={`path-lesson-card ${isDone ? 'done' : ''}`}
                      onClick={() => navigate(`/lesson/${lessonId}`)}
                    >
                      <div className="path-lesson-top">
                        <span className={`badge badge-${lesson.difficulty}`}>{lesson.difficulty}</span>
                        <span className="path-lesson-status">{isDone ? '✓' : '→'}</span>
                      </div>
                      <h4>{lesson.title}</h4>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const closeSidebar = () => setSidebarOpen(false);

  const handleNavigate = (to) => {
    closeSidebar();
    navigate(to);
  };

  return (
    <div className="app">
      <header className="topbar">
        <button className="hamburger" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
          ☰
        </button>
        <span className="topbar-logo" onClick={() => handleNavigate('/')}>Learn Fastify</span>
      </header>
      <div className="app-body">
        <Sidebar open={sidebarOpen} onClose={closeSidebar} onNavigate={handleNavigate} />
        {sidebarOpen && <div className="overlay" onClick={closeSidebar} />}
        <main className="main" onClick={closeSidebar}>
          <Routes>
            <Route path="/" element={<Home navigate={handleNavigate} />} />
            <Route path="/lesson/:id" element={<LessonRoute navigate={handleNavigate} />} />
            <Route path="/glossary" element={<Glossary navigate={handleNavigate} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function LessonRoute({ navigate }) {
  const { id: lessonId } = useParams();
  const lesson = lessons.find(l => l.id === lessonId);

  if (!lesson) {
    return (
      <div className="not-found">
        <h2>Lesson not found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const idx = lessons.indexOf(lesson);
  const prev = idx > 0 ? lessons[idx - 1] : null;
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;

  return (
    <>
      <div className="lesson-nav">
        {prev ? (
          <button className="btn btn-outline btn-sm" onClick={() => navigate(`/lesson/${prev.id}`)}>
            ← {prev.title}
          </button>
        ) : <span />}
        {next ? (
          <button className="btn btn-outline btn-sm" onClick={() => navigate(`/lesson/${next.id}`)}>
            {next.title} →
          </button>
        ) : <span />}
      </div>
      <LessonViewer lesson={lesson} onComplete={() => {}} />
      <div className="lesson-nav lesson-nav-bottom">
        {prev ? (
          <button className="btn btn-outline btn-sm" onClick={() => navigate(`/lesson/${prev.id}`)}>
            ← Previous
          </button>
        ) : <span />}
        {next ? (
          <button className="btn btn-primary btn-sm" onClick={() => navigate(`/lesson/${next.id}`)}>
            Next Lesson →
          </button>
        ) : <span />}
      </div>
    </>
  );
}
