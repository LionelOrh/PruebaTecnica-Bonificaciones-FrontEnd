# 🧃 TIC-Technologies - Calculador de Bonificaciones

Sistema web moderno para gestionar productos y calcular bonificaciones automáticamente. Desarrollado con React y Vite para una experiencia de usuario fluida y eficiente.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [API Backend](#-api-backend)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Scripts Disponibles](#-scripts-disponibles)

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
- **Backend API** ejecutándose en `http://localhost:8000`

### Instalación de PNPM (si no lo tienes)

```bash
npm install -g pnpm
```

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd Frontend
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

## 📖 Uso

### Paso a Paso para Probar el Proyecto

#### 1. Asegurar Backend Activo
- El backend debe estar ejecutándose en `http://localhost:8000`
- El endpoint debe responder en: `http://localhost:8000/api/pedido/bonificaciones`

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

### Endpoint Principal

```
POST http://localhost:8000/api/pedido/bonificaciones
```

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

**Solución:**
1. Verificar que el backend esté ejecutándose en `http://localhost:8000`
2. Comprobar que el endpoint `/api/pedido/bonificaciones` esté disponible
3. Revisar CORS en el backend si es necesario

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

## 🎯 Próximos Pasos

- [ ] Agregar tests unitarios
- [ ] Implementar TypeScript
- [ ] Añadir más validaciones
- [ ] Mejorar manejo de estados
- [ ] Agregar documentación de API

---

**Desarrollado con ❤️ para TIC-Technologies**
