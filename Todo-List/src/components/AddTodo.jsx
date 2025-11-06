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
};

export default AddTodo