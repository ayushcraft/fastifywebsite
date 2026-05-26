import { useState } from 'react';
import { glossary } from '../data/lessons';

export default function Glossary({ navigate }) {
  const [filter, setFilter] = useState('');

  const filtered = glossary.filter(
    item =>
      item.term.toLowerCase().includes(filter.toLowerCase()) ||
      item.definition.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="glossary-page">
      <button className="btn btn-outline back-btn" onClick={() => navigate('/')}>
        ← Back to Lessons
      </button>
      <h1>Glossary</h1>
      <input
        type="text"
        className="glossary-search"
        placeholder="Search terms..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <div className="glossary-list">
        {filtered.map((item, i) => (
          <div key={i} className="glossary-item">
            <dt>{item.term}</dt>
            <dd>{item.definition}</dd>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="no-results">No terms match your search.</p>
        )}
      </div>
    </div>
  );
}
