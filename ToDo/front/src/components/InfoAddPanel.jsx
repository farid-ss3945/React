import { useState, useEffect } from 'react';

export default function InfoAddPanel({ mode, selectedTodo, onCreate }) {
  const [description, setDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');

  useEffect(() => {
    if (mode === 'add') {
      setDescription('');
      setFullDescription('');
    }
  }, [mode]);

  if (mode === 'info' && selectedTodo) {
    return (
      <div className="panel">
        <h3>{selectedTodo.description}</h3>
        <p>{selectedTodo.fullDescription || 'No details provided.'}</p>
        <p>Status: {selectedTodo.done ? 'Done' : 'Not done'}</p>
      </div>
    );
  }

  if (mode === 'add') {
    return (
      <div className="panel">
        <h3>Add new item</h3>
        <input
          placeholder="short description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <textarea
          placeholder="full description"
          value={fullDescription}
          onChange={e => setFullDescription(e.target.value)}
        />
        <button
          onClick={() => {
            if (!description.trim()) return;
            onCreate({ description, fullDescription });
          }}
        >
          Save
        </button>
      </div>
    );
  }

  return <div className="panel">Select an item or click Add</div>;
}