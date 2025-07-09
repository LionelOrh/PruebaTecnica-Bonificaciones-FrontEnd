# 🧃 TIC-Technologies - Calculador de Bonificaciones (Prueba Técnica)

Sistema web moderno para gestionar productos y calcular bonificaciones automáticamente. Desarrollado con React y Vite para una experiencia de usuario fluida y eficiente como parte de una prueba técnica.

## 🌐 Demo en Vivo

🚀 **Prueba la aplicación aquí**: [https://prueba-tecnica-bonificaciones-front.vercel.app/](https://prueba-tecnica-bonificaciones-front.vercel.app/)

> ✨ **Aplicación desplegada en Vercel** - Lista para usar sin instalación

## 📋 Tabla de Contenidos

- [Demo en Vivo](#-demo-en-vivo)
- [Sobre la Prueba Técnica](#-sobre-la-prueba-técnica)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración de API](#️-configuración-de-api)
- [Uso](#-uso)
- [API Backend](#-api-backend)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Scripts Disponibles](#-scripts-disponibles)

## 📝 Sobre la Prueba Técnica

Este proyecto fue desarrollado como parte de una **prueba técnica para TIC-Technologies**. El objetivo es demostrar habilidades en:

- **React** y desarrollo frontend moderno
- **Integración con APIs** REST
- **Gestión de estado** en aplicaciones
- **Diseño de interfaces** responsivas
- **Mejores prácticas** de desarrollo

### Objetivos Específicos
- ✅ Crear formulario para gestión de productos
- ✅ Implementar tabla con paginación
- ✅ Conectar con API backend para cálculo de bonificaciones
- ✅ Manejo de errores y validaciones
- ✅ Interfaz moderna y responsive

## ✨ Características

- **Gestión de Productos**: Añade productos con código, grupo y cantidad
- **Cálculo de Bonificaciones**: Calcula bonificaciones automáticamente mediante API
- **Interfaz Intuitiva**: Diseño moderno y fácil de usar
- **Paginación**: Manejo eficiente de grandes cantidades de datos
- **Responsive**: Adaptado para diferentes tamaños de pantalla
- **Validaciones**: Control de errores y validaciones en tiempo real

## 🛠️ Tecnologías

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.3
- **Gestor de Paquetes**: PNPM
- **Linting**: ESLint
- **Estilo**: CSS modules

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **PNPM** (recomendado) o npm
- **Backend API** (ver [Configuración de API](#-configuración-de-api))

### Instalación de PNPM (si no lo tienes)

```bash
npm install -g pnpm
```

## 🚀 Instalación

> 💡 **¿Quieres probar rápidamente?** Visita el [Demo en Vivo](https://prueba-tecnica-bonificaciones-front.vercel.app/) sin necesidad de instalación.

### Opción 1: Usar Demo en Vivo (Recomendado)
Simplemente visita: **[https://prueba-tecnica-bonificaciones-front.vercel.app/](https://prueba-tecnica-bonificaciones-front.vercel.app/)**

### Opción 2: Instalación Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/LionelOrh/PruebaTecnica-Bonificaciones-FrontEnd.git
cd PruebaTecnica-Bonificaciones-FrontEnd
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Ejecutar el servidor de desarrollo

```bash
pnpm dev
```

La aplicación estará disponible en: `http://localhost:5173`

## ⚙️ Configuración de API

### 🌐 Backend en Producción (Configuración Actual)
Por defecto, la aplicación está configurada para usar el **backend en producción**:

```
https://pruebatecnica-bonificaciones-backend.onrender.com/api/pedido/bonificaciones
```

### 🏠 Backend Local (Para Desarrollo)
Si quieres usar un backend local, edita el archivo `src/services/apiService.js`:

```javascript
// Comentar la URL de producción
// const API_URL = "https://pruebatecnica-bonificaciones-backend.onrender.com/api/pedido/bonificaciones";

// Descomentar la URL local
const API_URL = "http://localhost:8000/api/pedido/bonificaciones";
```

**Nota**: Asegúrate de que tu backend local esté ejecutándose en `http://localhost:8000`

## 📖 Uso

> 🎯 **Acceso Directo**: Puedes probar todas las funcionalidades en el [Demo en Vivo](https://prueba-tecnica-bonificaciones-front.vercel.app/) sin instalación.

### Paso a Paso para Probar el Proyecto

#### 1. Backend Configurado ✅
- **Producción**: La aplicación ya está configurada para usar el backend en producción
- **URL**: `https://pruebatecnica-bonificaciones-backend.onrender.com/api/pedido/bonificaciones`
- **Estado**: ✅ Listo para usar sin configuración adicional

> 💡 **Nota**: Si quieres usar un backend local, consulta la sección [Configuración de API](#️-configuración-de-api)

#### 2. Agregar Productos
1. Completa el formulario con:
   - **Código**: Identificador único del producto (ej: PROD_A)
   - **Grupo**: Selecciona entre JUGOS 🧃, AGUA 💧, o GASEOSA 🥤
   - **Cantidad**: Número entero mayor a 0
2. Haz clic en "✨ Agregar Producto"

#### 3. Visualizar Productos
- Los productos aparecerán en la tabla "Productos Agregados"
- Usa la paginación para navegar entre productos
- Cambia el número de elementos por página (3, 6, 9, 12)

#### 4. Calcular Bonificaciones
1. Con productos en la lista, haz clic en "⚡ Calcular Bonificación"
2. El sistema enviará los productos al backend
3. Las bonificaciones aparecerán en la tabla "Bonificaciones Calculadas"

#### 5. Gestión de Datos
- **Limpiar todo**: Botón "🔄 Empezar de nuevo" para reiniciar
- **Consola del navegador**: Revisa logs para debugging

### Grupos de Productos Disponibles

| Grupo | Emoji | Descripción |
|-------|--------|-------------|
| JUGOS | 🧃 | Productos de jugos naturales |
| AGUA | 💧 | Productos de agua |
| GASEOSA | 🥤 | Bebidas gaseosas |

## 🔌 API Backend

### Endpoints Disponibles

#### 🌐 Producción (Configuración Actual)
```
POST https://pruebatecnica-bonificaciones-backend.onrender.com/api/pedido/bonificaciones
```

#### 🏠 Desarrollo Local (Comentado en código)
```
POST http://localhost:8000/api/pedido/bonificaciones
```

> 📍 **Ubicación de configuración**: `src/services/apiService.js`

### Formato de Datos

**Request Body:**
```json
[
  {
    "codigo": "PROD_A",
    "grupo": "JUGOS",
    "cantidad": 5
  },
  {
    "codigo": "PROD_B",
    "grupo": "AGUA",
    "cantidad": 3
  }
]
```

**Response:**
```json
[
  {
    "codigo": "PROD_BONUS_1",
    "bonificacion": 2
  },
  {
    "codigo": "PROD_BONUS_2",
    "bonificacion": 1
  }
]
```

### Manejo de Errores

- **Error de conexión**: Mensaje de alerta al usuario
- **Validaciones**: Control en formularios antes del envío
- **Logs**: Información detallada en consola del navegador

## 📁 Estructura del Proyecto

```
Frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── componentes/
│   │   ├── BonificacionTable.jsx    # Tabla de bonificaciones
│   │   ├── ProductoForm.jsx         # Formulario de productos
│   │   ├── ProductoTable.jsx        # Tabla de productos
│   │   └── styles/                  # Estilos CSS
│   │       ├── BonificacionTable.css
│   │       ├── ProductoForm.css
│   │       └── ProductoTable.css
│   ├── services/
│   │   └── apiService.js            # Servicios API
│   ├── App.jsx                      # Componente principal
│   ├── App.css                      # Estilos globales
│   ├── index.css                    # Estilos base
│   └── main.jsx                     # Punto de entrada
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── vite.config.js
└── README.md
```

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia servidor de desarrollo |
| `pnpm build` | Construye la aplicación para producción |
| `pnpm preview` | Preview de la build de producción |
| `pnpm lint` | Ejecuta ESLint para revisar código |

### Comandos Detallados

```bash
# Desarrollo
pnpm dev

# Construcción
pnpm build

# Preview de producción
pnpm preview

# Linting
pnpm lint
```

## 🐛 Solución de Problemas

### Error de Conexión con Backend

```
Error al calcular bonificaciones
```

**Soluciones posibles:**

#### 🌐 Con Backend de Producción (configuración actual)
1. Verificar conexión a internet
2. El backend en Render puede tardar unos segundos en "despertar" si ha estado inactivo
3. Intentar nuevamente en caso de timeout inicial

#### 🏠 Con Backend Local (si lo cambias)
1. Verificar que el backend esté ejecutándose en `http://localhost:8000`
2. Comprobar que el endpoint `/api/pedido/bonificaciones` esté disponible
3. Revisar CORS en el backend si es necesario
4. Asegurarse de haber cambiado la URL en `src/services/apiService.js`

### Cambiar entre Producción y Local

Para cambiar a backend local, edita `src/services/apiService.js`:

```javascript
// Comentar línea de producción
// const API_URL = "https://pruebatecnica-bonificaciones-backend.onrender.com/api/pedido/bonificaciones";

// Descomentar línea local
const API_URL = "http://localhost:8000/api/pedido/bonificaciones";
```

### Error al Agregar Productos

**Problemas comunes:**
- Código vacío: "Código es obligatorio"
- Cantidad inválida: "Cantidad debe ser mayor a 0"

### Puerto Ocupado

Si el puerto 5173 está ocupado:

```bash
# Vite automáticamente usará el siguiente puerto disponible
pnpm dev
```

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork del repositorio
2. Crear rama para feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit de cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crear Pull Request

## 📝 Notas Adicionales

- **Hot Reload**: Los cambios se reflejan automáticamente en desarrollo
- **TypeScript**: El proyecto está configurado para soportar TypeScript si se necesita
- **ESLint**: Configurado con reglas para React y hooks
- **Vite**: Optimizado para desarrollo rápido y builds eficientes

---

## 🎯 Características Implementadas (Prueba Técnica)

### ✅ Completadas
- [x] **Formulario de Productos**: Añadir productos con validaciones
- [x] **Tabla de Productos**: Visualización con paginación
- [x] **Integración API**: Conexión con backend para bonificaciones
- [x] **Tabla de Bonificaciones**: Mostrar resultados calculados
- [x] **Manejo de Errores**: Validaciones y alertas de usuario
- [x] **Interfaz Responsiva**: Diseño adaptativo y moderno
- [x] **Estados de Loading**: Feedback visual durante operaciones

### 🔮 Mejoras Futuras
- [ ] Agregar tests unitarios
- [ ] Implementar TypeScript
- [ ] Añadir más validaciones
- [ ] Mejorar manejo de estados con Context/Redux
- [ ] Agregar documentación de API con Swagger

---

## 👨‍💻 Sobre la Implementación

Este proyecto demuestra:
- **Arquitectura de componentes** bien estructurada
- **Separación de responsabilidades** (servicios, componentes, estilos)
- **Manejo de estados** con React Hooks
- **Comunicación con APIs** externas
- **Experiencia de usuario** optimizada
- **Despliegue en producción** con Vercel y Render

### 🚀 Entornos de Despliegue
- **Frontend**: [Vercel](https://prueba-tecnica-bonificaciones-front.vercel.app/) 
- **Backend**: [Render](https://pruebatecnica-bonificaciones-backend.onrender.com/)
- **Integración**: Comunicación entre servicios en la nube

---

**Desarrollado como Prueba Técnica para TIC-Technologies** 🚀

📌 **Enlaces importantes:**
- 🌐 **Demo**: [https://prueba-tecnica-bonificaciones-front.vercel.app/](https://prueba-tecnica-bonificaciones-front.vercel.app/)
- 💻 **Código Frontend**: [GitHub Repository](https://github.com/LionelOrh/PruebaTecnica-Bonificaciones-FrontEnd)
- 🔧 **API Backend**: [https://pruebatecnica-bonificaciones-backend.onrender.com/](https://pruebatecnica-bonificaciones-backend.onrender.com/)
