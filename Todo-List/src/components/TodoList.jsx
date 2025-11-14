import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import FilterButtons from './FilterButtons';
import { useRecoilValue } from 'recoil';
import { todosFiltradasState } from '../assets/todoSelectors';

function TodoList() {
  const todosFiltradas = useRecoilValue(todosFiltradasState);

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <AddTodo />
        <FilterButtons />
        <ul className='list-group list-group-flush'>
          {todosFiltradas.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
        {todosFiltradas.length === 0 && (
          <p className='text-muted text-center mt-3'>
            Nenhuma tarefa a exibir.
          </p>
        )}
      </div>
    </div>
  );
}

export default TodoList;