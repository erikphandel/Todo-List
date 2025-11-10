import { createContext, useState, useEffect, useMemo, useCallback } from "react";

export const TodoContext = createContext();

export function TodoProvider ({ children }) {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [filtro, setFiltro] = useState('todas');

  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error('Erro ao salvar todos no localStorage:', error);
    }
  }, [todos]);

  const adicionarTarefa = useCallback((texto) => {
    const novaTarefa = {
      id: crypto.randomUUID(),
      texto,
      completa: false,
    };
    setTodos((prev) => {
      const newTodos = [...prev, novaTarefa];
      return newTodos;
    });
  }, []);

  const toggleCompleta = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? {...todo, completa: !todo.completa } : todo
      )
    );
  }, []);

  const deletarTarefa = useCallback((id) => {
    setTodos((prev) => {
      const newTodos = prev.filter((todo) => todo.id !== id);
      return newTodos
    });
  }, []);

  const todosFiltradas = useMemo(() =>  
    todos.filter((todo) => {
      if (filtro === 'pendentes') return !todo.completa;
      if (filtro === 'concluidas') return todo.completa;
      return true;
  }), [todos, filtro]);

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