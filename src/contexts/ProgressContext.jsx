import { createContext, useContext, useReducer, useEffect } from 'react';

const ProgressContext = createContext(null);

function loadProgress() {
  try {
    const saved = localStorage.getItem('fastify-progress');
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'COMPLETE_LESSON': {
      const next = { ...state, [action.id]: { completed: true, completedAt: Date.now() } };
      localStorage.setItem('fastify-progress', JSON.stringify(next));
      return next;
    }
    case 'MARK_QUIZ_DONE': {
      const next = { ...state, [action.id]: { ...state[action.id], quizDone: true, quizScore: action.score } };
      localStorage.setItem('fastify-progress', JSON.stringify(next));
      return next;
    }
    case 'RESET':
      localStorage.removeItem('fastify-progress');
      return {};
    default:
      return state;
  }
}

export function ProgressProvider({ children }) {
  const [progress, dispatch] = useReducer(reducer, null, loadProgress);

  useEffect(() => {
    localStorage.setItem('fastify-progress', JSON.stringify(progress));
  }, [progress]);

  return (
    <ProgressContext.Provider value={{ progress, dispatch }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
