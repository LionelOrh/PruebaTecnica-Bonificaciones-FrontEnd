import { useState } from 'react'
import './App.css'
import ProductoForm from './componentes/ProductoForm.jsx' // Asegúrate de que la ruta sea correcta
import ProductoTable from './componentes/ProductoTable.jsx';
import BonificacionTable from './componentes/BonificacionTable.jsx'
import { simularBonificaciones } from './services/apiService.js'; // Asegúrate de que la ruta sea correcta

function App() {
  const [productos, setProductos] = useState([]);
  const [bonificaciones, setBonificaciones] = useState([]);

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
    console.log("Producto agregado:", nuevoProducto);
  };

  // Esta función se ejecuta al hacer clic en "Calcular Bonificación"
  const calcularBonificaciones = async () => {
    try {
      const data = await simularBonificaciones(productos);
      setBonificaciones(data); // ⬅️ Muestra la respuesta en tabla
      console.log("Productos enviados al backend:", productos);
      console.log("Respuesta del backend:", data);
    } catch (error) {
      alert("Error al calcular bonificaciones");
      console.error(error);
    }
  };

  // Esta función limpia todos los datos (productos y bonificaciones)
  const limpiarTodo = () => {
    setProductos([]);
    setBonificaciones([]);
  };

  return (
    <>
      <header>
        <div className="header-container">
          <h1 className='header-title'>TIC-Technologies</h1>
          <h2 className='header-subtitle'>Calculador de Bonificaciones</h2>
        </div>
      </header>
      <div className="main-container">
        <ProductoForm onAgregar={agregarProducto} />

        <div className="tables-container">
          <ProductoTable productos={productos} onCalcular={calcularBonificaciones} />
          <BonificacionTable bonificaciones={bonificaciones} onLimpiarTodo={limpiarTodo} />
        </div>
      </div>

    </>
  )
}

export default App
