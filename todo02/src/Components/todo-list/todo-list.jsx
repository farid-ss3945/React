import TodoListItem from "../todo-list-item";
import "./todo-list.css"
const TodoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {
    return (
        <ul className="list-group todo-list">
            {todos.map(item => (
                <li key={item.id} className="list-group-item">
                    <TodoListItem
                        {...item}
                        onDeleted={() => onDeleted(item.id)}
                        onToggleDone={() => onToggleDone(item.id)}
                        onToggleImportant={() => onToggleImportant(item.id)}
                    />
                </li>
            ))}
        </ul>
    )
}

export default TodoList;