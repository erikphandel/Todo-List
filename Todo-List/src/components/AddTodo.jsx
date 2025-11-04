import { useState } from "react";
import { useTodo } from "../context/useTodo";

function AddTodo() {
  const [texto, setTexto] = useState('');
  const { adicionarTarefa } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      adicionarTarefa(texto);
      setTexto('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddTodo