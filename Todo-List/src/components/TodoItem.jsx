import React from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtoms";

function TodoItem({ todo }) {
  const setTodos = useSetRecoilState(todoListState);

  const toggleCompleta = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completa: !t.completa } : t
      )
    );
  };

  const deletarTarefa = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <li className='list-group-item d-flex align-items-center'>
      <input
        type="checkbox"
        checked={todo.completa}
        onChange={toggleCompleta}
        className='form-check-input me-2'
      />
      <span>{todo.texto}</span>
      <button onClick={deletarTarefa} className="btn btn-danger btn-sm ms-2">
        X
      </button>
    </li>
  );
}

export default React.memo(TodoItem);