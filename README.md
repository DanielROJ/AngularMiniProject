# Full Stack Angular - Node.js (Express) - PosgreSQL

Aplicación full-stack moderna para gestionar empleados. Permite **registrar, actualizar, consultar, listar y eliminar empleados** usando un frontend en Angular, una API REST en Node.js y una base de datos PostgreSQL.

## Qué demuestra este proyecto

- Desarrollo full-stack con frontend, backend y base de datos.
- Uso de Angular moderno con componentes standalone.
- API REST construida con Express y TypeScript.
- Persistencia de datos con PostgreSQL y Sequelize.
- Formularios reactivos con validaciones.
- Interfaz responsive, limpia y profesional con Bootstrap.
- Código organizado, mantenible y fácil de entender.

## Tecnologías

### Frontend

![Angular Frontend](ImagesWiki/angularNeon.png)


- Angular 20
- TypeScript
- Reactive Forms
- Angular Router
- Bootstrap 4
- SCSS
- pnpm

### Backend

![Node Backend](ImagesWiki/neonNode.png)

- Node.js 20+
- Express
- TypeScript
- Sequelize
- PostgreSQL
- REST API
- pnpm

## Funcionalidades

- Crear empleados.
- Actualizar información de empleados.
- Consultar empleados por identificación y tipo de documento.
- Ver todos los empleados registrados.
- Eliminar empleados.
- Validar campos obligatorios del formulario.
- Mostrar resultados en una tabla responsive.

## Estructura Principal

```text
AngularMiniProject/
├── backend/      # API REST con Node.js, Express y Sequelize
├── frontend/     # Aplicación Angular 20
├── ImagesWiki/   # Imágenes usadas en este README
└── README.md
```

## Cómo Ejecutarlo

### Requisitos

- Node.js 20+
- pnpm 8+
- PostgreSQL

### Backend

```bash
cd backend
pnpm install
pnpm run dev
```

API disponible en:

```text
http://localhost:3000
```

### Frontend

```bash
cd frontend
pnpm install
pnpm start
```

Aplicación disponible en:

```text
http://localhost:4200
```

## Base de Datos

Crear la base de datos en PostgreSQL:

```sql
CREATE DATABASE empleados_db;
```

Variables de entorno sugeridas para el backend:

```env
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/empleados_db
DIALECT=postgres
```

## API Principal

| Método | Endpoint | Acción |
| --- | --- | --- |
| `GET` | `/api/empleado/all` | Lista todos los empleados |
| `GET` | `/api/empleado/read/:id/:type` | Consulta un empleado |
| `POST` | `/api/empleado/create` | Crea un empleado |
| `PUT` | `/api/empleado/update` | Actualiza un empleado |
| `DELETE` | `/api/empleado/delete/:id/:type` | Elimina un empleado |

## Builds Verificados

```bash
cd backend
pnpm build
```

```bash
cd frontend
pnpm build
```

Ambos proyectos compilan correctamente.

## Autor

**Daniel Roj**

[GitHub Repository](https://github.com/DanielROJ/AngularMiniProject)

---

Proyecto modernizado con Angular 20, Node.js 20+, TypeScript y pnpm.
