import React from "react";
import { useTodo } from "../context/useTodo";

function TodoItem({ todo }) {
  const { toggleCompleta, deletarTarefa } = useTodo();

  return (
    <li className='list-group-item d-flex align-items-center'>
      <input
        type="checkbox"
        checked={todo.completa}
        onChange={() => toggleCompleta(todo.id)}
        className='form-check-input me-2'
      />
      <span>{todo.texto}</span>
      <button onClick={() => deletarTarefa(todo.id)} className="btn btn-danger btn-sm ms-2">
        X
      </button>
    </li>
  );
};

export default React.memo(TodoItem);