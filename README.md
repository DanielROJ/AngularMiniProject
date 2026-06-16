# Full Stack Angular - Node.js (Express) - PosgreSQL

A modern full-stack employee management application featuring a **CRUD (Create, Read, Update, Delete)** system for user profiles. Built with Angular 20 frontend and Node.js 20+ backend using TypeScript.

## Technology Stack

### Frontend
- **Framework**: Angular 20 (Standalone Components)
- **Language**: TypeScript 5.9+
- **Package Manager**: pnpm
- **UI Components**: Angular Material
- **Styling**: SCSS
- **HTTP Client**: RxJS with Angular HttpClient
- **Routing**: Angular Router with lazy loading support

### Backend
- **Runtime**: Node.js 20+
- **Framework**: Express.js 4.22+
- **Language**: TypeScript 5.9+
- **Package Manager**: pnpm
- **ORM**: Sequelize 6.37+
- **Database**: PostgreSQL 10.1+
- **API Protocol**: REST (HTTP/JSON)

### Database
- **Type**: PostgreSQL 10.1+
- **ORM**: Sequelize for data modeling and migration

### Media Format
- **API Response**: JSON

## Project Structure

```
AngularMiniProject/
├── backend/                          # Node.js + Express + Sequelize
│   ├── src/
│   │   ├── config/                  # Database configuration
│   │   ├── controllers/             # API route handlers
│   │   ├── database/                # Database initialization
│   │   ├── model/                   # Sequelize models
│   │   ├── routes/                  # API endpoints
│   │   └── app.ts                   # Express application entry point
│   ├── dist/                        # Compiled JavaScript
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
├── frontend/                         # Angular 20 standalone components
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/          # Reusable UI components
│   │   │   ├── Model/               # Data models
│   │   │   ├── Services/            # API communication services
│   │   │   ├── app.component.ts     # Root component (standalone)
│   │   │   └── app-routing.module.ts # Routes configuration
│   │   ├── assets/                  # Static assets
│   │   ├── index.html
│   │   ├── main.ts                  # Application bootstrap
│   │   ├── polyfills.ts             # Browser polyfills
│   │   └── styles.scss              # Global styles
│   ├── dist/                        # Production build output
│   ├── angular.json                 # Angular CLI configuration
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
├── .gitignore                        # Git ignore rules
├── README.md                         # This file
├── MIGRATION_SUMMARY.md              # Migration notes
└── CLEANUP_COMPLETE.md               # Cleanup documentation

```

## Prerequisites

- **Node.js**: v20.0.0 or higher
- **pnpm**: v8.0.0 or higher (package manager)
- **PostgreSQL**: v10.1 or higher
- **Git**: For version control

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/DanielROJ/AngularMiniProject.git
cd AngularMiniProject
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
pnpm install

# Build TypeScript
pnpm build

# Configure environment variables (create .env file)
# DATABASE_URL=postgresql://user:password@localhost:5432/empleados_db
# PORT=3000

# Run development server
pnpm run dev

# Or run production build
pnpm run start
```

### 3. Frontend Setup
```bash
cd ../frontend

# Install dependencies
pnpm install

# Run development server
pnpm start
# Application runs on http://localhost:4200

# Build for production
pnpm build:prod
```

## API Endpoints

All endpoints follow RESTful conventions and return JSON responses.

### Employee Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/empleado/all` | Get all employees |
| `GET` | `/api/empleado/read/:id/:type` | Get specific employee by ID |
| `POST` | `/api/empleado/create` | Create new employee |
| `PUT` | `/api/empleado/update` | Update employee information |
| `DELETE` | `/api/empleado/delete/:id/:type` | Delete employee |

### Request/Response Examples

**Create Employee (POST)**
```json
{
  "idEmpleado": 12345,
  "nombres": "John",
  "apellidos": "Doe",
  "type": "cc",
  "correo": "john.doe@example.com",
  "tel1": "+57-123-456-7890",
  "salario": 50000
}
```

**Response (Success)**
```json
{
  "id": 1,
  "idEmpleado": 12345,
  "nombres": "John",
  "apellidos": "Doe",
  "correo": "john.doe@example.com",
  "createdAt": "2026-06-16T00:00:00Z"
}
```

## Available Scripts

### Backend
```bash
# Development mode with auto-reload
pnpm run dev

# Build to JavaScript
pnpm build

# Run compiled application
pnpm start

# Run linting
pnpm lint
```

### Frontend
```bash
# Development server (hot reload)
pnpm start

# Build for production (optimized)
pnpm build:prod

# Run linting
pnpm lint

# Format code
pnpm format
```

## Build Output

### Frontend Optimization
- **Production bundle**: ~123 KB (gzip)
- **Tree-shaking**: All unused code removed
- **Minification**: Enabled
- **Source maps**: Disabled in production

### Build Verification
Both backend and frontend compile successfully without errors:
- ✅ TypeScript compilation: No errors
- ✅ Angular build: Optimization enabled
- ✅ Bundle size: Within performance budgets

## Key Features

### Implemented
- ✅ Full CRUD operations for employee management
- ✅ RESTful API with Express.js
- ✅ Modern Angular 20 with standalone components
- ✅ Type-safe TypeScript throughout
- ✅ PostgreSQL database integration with Sequelize ORM
- ✅ Responsive Angular Material UI
- ✅ Form validation with reactive forms
- ✅ Error handling and user notifications (Snack Bar)

### Architecture Highlights
- **Standalone Components**: No NgModules, modern Angular approach
- **Services**: Centralized API communication through injectable services
- **Separation of Concerns**: Clean separation between frontend, backend, and database layers
- **Type Safety**: Full TypeScript typing for all layers
- **Environment Configuration**: Configurable backend connection

## Development Workflow

### 1. Start Backend
```bash
cd backend
pnpm install
pnpm run dev
# Server runs on http://localhost:3000
```

### 2. Start Frontend (in new terminal)
```bash
cd frontend
pnpm install
pnpm start
# Application runs on http://localhost:4200
```

### 3. Access Application
- Frontend UI: http://localhost:4200
- Backend API: http://localhost:3000

## Database Setup

### Create PostgreSQL Database
```sql
CREATE DATABASE empleados_db;
```

### Configure Connection
Update backend environment variables:
```
DATABASE_URL=postgresql://user:password@localhost:5432/empleados_db
```

Sequelize models automatically create tables on initialization.

## Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/empleados_db
DIALECT=postgres
```

## Recent Updates (Migration to Modern Stack)

- ✅ Upgraded to Angular 20 with standalone components
- ✅ Upgraded to Node.js 20+ with TypeScript
- ✅ Migrated to pnpm package manager
- ✅ Updated to Sequelize 6.37+
- ✅ Removed deprecated Karma/Jasmine test configuration
- ✅ Cleaned up project structure
- ✅ Standardized file naming conventions
- ✅ Optimized production bundle size

See `MIGRATION_SUMMARY.md` and `CLEANUP_COMPLETE.md` for detailed migration notes.

## Performance Metrics

### Frontend
- **Initial load time**: < 2.5 seconds
- **Bundle size**: 494.71 KB (uncompressed) → 123.32 KB (gzip)
- **Polyfill size**: 34.84 KB (uncompressed)
- **Main app bundle**: 457.50 KB (uncompressed)

### Backend
- **Startup time**: < 1 second
- **Database connection pool**: Active connection management
- **Memory footprint**: Optimized for production

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**German Daniel Rojas**

## Support & Issues

For bug reports and feature requests, please use the GitHub issues page:
- [GitHub Repository](https://github.com/DanielROJ/AngularMiniProject)

## Deployment

### Frontend Deployment (Static hosting)
```bash
pnpm build:prod
# Upload dist/frontend to your hosting service (Vercel, Netlify, GitHub Pages, etc.)
```

### Backend Deployment (Node.js hosting)
```bash
pnpm build
# Deploy dist/ folder to your Node.js hosting (Heroku, AWS, DigitalOcean, etc.)
# Ensure PostgreSQL database is available in your hosting environment
```

## Version History

- **Current**: 2.0.0 (Node.js 20+, Angular 20, TypeScript)
- **Previous**: 1.0.0 (Legacy Angular 6, Express.js)

---

**Last Updated**: June 2026  
**Status**: Production Ready ✅
