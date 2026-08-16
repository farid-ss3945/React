export default function ToDoList({ todos, selectedId, onSelect, onToggle }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <div
          key={todo.id}
          className={`todo-row ${selectedId === todo.id ? 'selected' : ''}`}
        >
          <input
            className="todo-input"
            value={todo.description}
            readOnly
            onClick={() => onSelect(todo.id)}
          />
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo)}
          />
        </div>
      ))}
    </div>
  );
}