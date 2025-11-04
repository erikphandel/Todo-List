import { createContext, useState, useEffect, useMemo } from "react";

export const TodoContext = createContext();

export function TodoProvider ({ children }) {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [filtro, setFiltro] = useState('todas');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: crypto.randomUUID(),
      texto,
      completa: false,
    };
    setTodos([...todos, novaTarefa]);
  };

  const toggleCompleta = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, completa: !todo.completa } : todo
      )
    );
  };

  const deletarTarefa = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todosFiltradas = useMemo(() =>  
    todos.filter((todo) => {
      if (filtro === 'pendentes') return !todo.completa;
      if (filtro === 'concluidas') return todo.completa;
      return true;
  }));

  const value = useMemo(() => ({
    todos,
    todosFiltradas,
    filtro,
    setFiltro,
    adicionarTarefa,
    toggleCompleta,
    deletarTarefa,
  }), [todos, todosFiltradas, filtro, setFiltro]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}