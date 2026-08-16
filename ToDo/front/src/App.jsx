import { useState, useEffect } from 'react';
import ToDoList from './components/ToDoList';
import InfoAddPanel from './components/InfoAddPanel';
import { getTodos, createTodo, updateTodo, deleteTodo } from './api';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [mode, setMode] = useState(null); // 'info' | 'add' | null

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const selectedTodo = todos.find(t => t.id === selectedId) || null;

  function handleSelect(id) {
    setSelectedId(id);
    setMode('info');
  }

  async function handleToggle(todo) {
    const updated = await updateTodo(todo.id, { done: !todo.done });
    setTodos(prev => prev.map(t => (t.id === updated.id ? updated : t)));
  }

  async function handleAdd() {
    setSelectedId(null);
    setMode('add');
  }

  async function handleCreate(data) {
    const newTodo = await createTodo(data);
    setTodos(prev => [...prev, newTodo]);
    setSelectedId(newTodo.id);
    setMode('info');
  }

  async function handleRemove() {
    if (!selectedId) return;
    await deleteTodo(selectedId);
    setTodos(prev => prev.filter(t => t.id !== selectedId));
    setSelectedId(null);
    setMode(null);
  }

  return (
    <div className="app">
      <div className="left">
        <ToDoList
          todos={todos}
          selectedId={selectedId}
          onSelect={handleSelect}
          onToggle={handleToggle}
        />
        <div className="buttons">
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
      <div className="right">
        <InfoAddPanel mode={mode} selectedTodo={selectedTodo} onCreate={handleCreate} />
      </div>
    </div>
  );
}