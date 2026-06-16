/**
 * Configuración de la conexión ORM con PostgreSQL usando Sequelize
 */
import { Sequelize } from 'sequelize';
import { envConfig } from '../config/environment.js';

export const sequelize = new Sequelize(
  envConfig.database,
  envConfig.userDB,
  envConfig.password,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    pool: {
      max: 18,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: envConfig.nodeEnv === 'development' ? console.log : false,
  }
);

/**
 * Autenticación y validación de conexión
 */
sequelize
  .authenticate()
  .then(() => {
    console.log('✓ Conexión correcta con la BASE DE DATOS');
  })
  .catch((err) => {
    console.error('✗ Error al conectar a la BASE DE DATOS:', err);
    process.exit(1);
  });

export default sequelize;
