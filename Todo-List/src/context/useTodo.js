import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export function useTodo() {
  const context = useContext(TodoContext);
  return context;
}