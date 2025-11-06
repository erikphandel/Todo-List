import './App.css'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Lista de Tarefas</h1>
      <TodoList />
    </div>
  )
}

export default App
