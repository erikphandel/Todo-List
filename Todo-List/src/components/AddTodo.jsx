import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtoms";

function AddTodo() {
  const [texto, setTexto] = useState('');
  const setTodos = useSetRecoilState(todoListState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      setTodos((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          texto: texto.trim(),
          completa: false,
        },
      ]);
      setTexto('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mb-3">
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className='form-control'
      />
      <button type="submit" className="btn btn-primary">Adicionar</button>
    </form>
  );
}

export default AddTodo;