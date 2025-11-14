import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
  effects: [
    ({ onSet }) => {
      onSet((newTodos) => {
        try {
          localStorage.setItem('todos', JSON.stringify(newTodos));
        } catch (error) {
          console.error('Erro ao salvar no localStorage:', error);
        }
      });
    },
    ({ setSelf }) => {
      try {
        const saved = localStorage.getItem('todos');
        if (saved) setSelf(JSON.parse(saved));
      } catch (error) {
        console.error('Erro ao carregar do localStorage:', error);
      }
    },
  ],
});

export const filtroState = atom({
  key: 'filtroState',
  default: 'todas',
});

