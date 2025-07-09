// src/components/ProductoForm.jsx
import { useState } from "react";
// Asegúrate de que la ruta sea correcta
import './styles/ProductoForm.css';

function ProductoForm({ onAgregar }) {
    const [producto, setProducto] = useState({
        codigo: "",
        grupo: "JUGOS",
        cantidad: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto((prev) => ({
            ...prev,
            [name]: name === "cantidad" ? parseInt(value) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (producto.codigo.trim() === "") return alert("Código es obligatorio");
        if (producto.cantidad <= 0) return alert("Cantidad debe ser mayor a 0");

        onAgregar(producto);         
        setProducto({                
            codigo: "",
            grupo: "JUGOS",
            cantidad: 1,
        });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="producto-form">
                <div className="field-group">
                    <label className="field-label">🏷️ Código del Producto</label>
                    <input
                        type="text"
                        name="codigo"
                        placeholder="Ej: PROD_A"
                        value={producto.codigo}
                        onChange={handleChange}
                        className="input-codigo"
                    />
                </div>

                <div className="field-group">
                    <label className="field-label">📁 Grupo</label>
                    <select
                        name="grupo"
                        value={producto.grupo}
                        onChange={handleChange}
                        className="input-grupo"
                    >
                        <option value="JUGOS">🧃 JUGOS</option>
                        <option value="AGUA">💧 AGUA</option>
                        <option value="GASEOSA">🥤 GASEOSA</option>
                    </select>
                </div>

                <div className="field-group">
                    <label className="field-label">🔢 Cantidad</label>
                    <input
                        type="number"
                        name="cantidad"
                        min={1}
                        value={producto.cantidad}
                        onChange={handleChange}
                        className="input-cantidad"
                        placeholder="1"
                    />
                </div>

                <button type="submit" className="btn-agregar">
                    ✨ Agregar Producto
                </button>
            </form>
        </div>
    );
}

export default ProductoForm;

