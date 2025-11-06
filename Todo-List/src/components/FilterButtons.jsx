import { useTodo } from "../context/useTodo";

function FilterButtons() {
  const { filtro, setFiltro } = useTodo();

  return (
    <div className="btn-group mb-3" role="group">
      {['todas', 'pendentes', 'concluidas'].map((tipo) => (
        <button
          key={tipo}
          onClick={() => setFiltro(tipo)}
          className={`btn ${filtro === tipo ? 'btn-primary' : 'btn-outline-primary'}`}
        >
          {tipo === 'todas' ? 'Todas' : tipo === 'pendentes' ?  'Pendentes' : 'Concluídas'}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;