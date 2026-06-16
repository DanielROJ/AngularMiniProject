/**
 * Configuración de variables de entorno
 */
export interface EnvConfig {
  port: number;
  database: string;
  password: string;
  userDB: string;
  nodeEnv: string;
}

export const envConfig: EnvConfig = {
  port: parseInt(process.env.PORT || '3000', 10),
  database: process.env.DATABASE || 'vortexprueba',
  password: process.env.PASSWORD || 'pass',
  userDB: process.env.USERDB || 'postgres',
  nodeEnv: process.env.NODE_ENV || 'development',
};
