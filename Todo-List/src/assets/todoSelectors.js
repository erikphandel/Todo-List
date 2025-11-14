import { selector } from "recoil";
import { todoListState, filtroState } from "../atoms/todoAtoms";

export const todosFiltradasState = selector({
  key: 'todosFiltradasState',
  get: ({ get }) => {
    const todos = get(todoListState);
    const filtro = get(filtroState);

    if (filtro === 'pendentes') return todos.filter(t => !t.completa);
    if (filtro === 'concluidas') return todos.filter(t => t.completa);
    return todos;
  },
});