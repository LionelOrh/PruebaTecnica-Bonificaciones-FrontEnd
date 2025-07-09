import { useState, useMemo } from 'react';
import './styles/ProductoTable.css';

function ProductoTable({ productos, onCalcular }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Calcular paginación
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return productos.slice(startIndex, endIndex);
    }, [productos, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(productos.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1); // Resetear a la primera página
    };

    return (
        <div>
            <div className="producto-header">
                <h2>Productos Agregados</h2>
            </div>
            <div className="producto-table-container">
                <table className="producto-table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Grupo</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.length === 0 ? (
                            <tr>
                                <td colSpan="3" className="empty-message">No hay productos</td>
                            </tr>
                        ) : (
                            paginatedData.map((p, i) => (
                                <tr key={i}>
                                    <td>{p.codigo}</td>
                                    <td>{p.grupo}</td>
                                    <td>{p.cantidad}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                {productos.length > 0 && (
                    <>
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
                                Página {currentPage} de {totalPages} | Total: {productos.length} productos
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

                        <button className="calcular-button" onClick={onCalcular}>
                            ⚡ Calcular Bonificación
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default ProductoTable;
