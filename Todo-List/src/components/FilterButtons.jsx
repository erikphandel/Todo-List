import { useTodo } from "../context/useTodo";

function FilterButtons() {
  const { filtro, setFiltro } = useTodo();

  return (
    <div>
      {['todas', 'pendentes', 'concluidas'].map((tipo) => (
        <button
          key={tipo}
          onClick={() => setFiltro(tipo)}
          style = {{background: filtro === tipo ? '#e3f2fd' : 'white'}}
        >
          {tipo === 'todas' ? 'Todas' : tipo === 'pendentes' ?  'Pendentes' : 'Concluídas'}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;