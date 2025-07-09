import { useState, useMemo } from 'react';
import './styles/BonificacionTable.css';

function BonificacionTable({ bonificaciones, onLimpiarTodo }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Calcular paginación
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return bonificaciones.slice(startIndex, endIndex);
  }, [bonificaciones, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(bonificaciones.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Resetear a la primera página
  };

  return (
    <div>
      <div className="bonificacion-header">
        <h2>Bonificaciones Calculadas</h2>
        {(bonificaciones.length > 0) && (
          <button 
            className="clear-button"
            onClick={onLimpiarTodo}
            title="Limpiar todos los productos y bonificaciones"
          >
            � Empezar de nuevo
          </button>
        )}
      </div>
      <div className="bonificacion-table-container">
        <table className="bonificacion-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Bonificación</th>
            </tr>
          </thead>
          <tbody>
            {bonificaciones.length === 0 ? (
              <tr>
                <td colSpan="2" className="empty-message">
                  Ningún producto recibió bonificación
                </td>
              </tr>
            ) : (
              paginatedData.map((b, i) => (
                <tr key={i}>
                  <td>{b.codigo}</td>
                  <td>{b.bonificacion}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {bonificaciones.length > 0 && (
          <div className="pagination-container">
            <div className="items-per-page">
              Mostrar:
              <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                <option value={3}>3</option>
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
              </select>
              elementos por página
            </div>
            
            <div className="pagination-info">
              Página {currentPage} de {totalPages} | Total: {bonificaciones.length} bonificaciones
            </div>
            
            <div className="pagination-controls">
              <button 
                className="pagination-button"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                &lt;&lt;
              </button>
              <button 
                className="pagination-button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              <button 
                className="pagination-button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
              <button 
                className="pagination-button"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                &gt;&gt;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BonificacionTable;
