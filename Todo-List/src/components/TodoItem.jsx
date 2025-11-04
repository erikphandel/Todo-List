import { useTodo } from "../context/useTodo";

function TodoItem({ todo }) {
  const { toggleCompleta, deletarTarefa } = useTodo();

  return (
    <li className={`todo-item ${todo.completa ? 'completa' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completa}
        onChange={() => toggleCompleta(todo.id)}
      />
      <span>{todo.texto}</span>
      <button onClick={() => deletarTarefa(todo.id)} className="delete-btn">
        X
      </button>
    </li>
  );
};

export default TodoItem;