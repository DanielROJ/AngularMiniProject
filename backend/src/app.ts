/**
 * Aplicación principal - Servidor Express con TypeScript
 */
import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { envConfig } from './config/environment.js';
import sequelize from './database/config.js';
import routes from './routes/index.js';

const app: Express = express();

/**
 * Middlewares
 */
// Parseo de JSON
app.use(express.json());

// Logging de peticiones HTTP
app.use(morgan('dev'));

// CORS - Permitir intercambio de recursos entre diferentes dominios
app.use(cors());

/**
 * Sincronización de la base de datos
 */
const initializeDatabase = async (): Promise<void> => {
  try {
    await sequelize.sync({ alter: true });
    console.log('✓ Base de datos sincronizada');
  } catch (error) {
    console.error('✗ Error al sincronizar la base de datos:', error);
    process.exit(1);
  }
};

/**
 * Rutas de la API
 */
app.use('/', routes);

/**
 * Manejo de rutas no encontradas
 */
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

/**
 * Iniciar servidor
 */
const startServer = async (): Promise<void> => {
  try {
    await initializeDatabase();

    app.listen(envConfig.port, 'localhost', () => {
      console.log(`✓ Servidor corriendo correctamente en PORT: ${envConfig.port}`);
      console.log(`✓ Ambiente: ${envConfig.nodeEnv}`);
    });
  } catch (error) {
    console.error('✗ Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

startServer();

export default app;
