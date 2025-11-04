import { useTodo } from "../context/useTodo";
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import FilterButtons from './FilterButtons';

function TodoList() {
  const { todosFiltradas } = useTodo();

  return (
    <div className="todo-list">
      <AddTodo />
      <FilterButtons />
      <ul>
        {todosFiltradas.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
      {todosFiltradas.length === 0 && (
        <p>
          Nenhuma tarefa a exibir.
        </p>
      )}
    </div>
  )
}

export default TodoList;