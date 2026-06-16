/**
 * Definición de rutas de la API REST
 */
import { Router, type Router as ExpressRouter } from 'express';
import {
  readEmpleado,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado,
  getListEmpleados,
} from '../controllers/controlApi.js';

const router: ExpressRouter = Router();

/**
 * Rutas CRUD de Empleados
 */

// Obtener todos los empleados
router.get('/all', getListEmpleados);

// Obtener un empleado específico
router.get('/read/:id/:type', readEmpleado);

// Crear un nuevo empleado
router.post('/create', createEmpleado);

// Actualizar un empleado
router.put('/update', updateEmpleado);

// Eliminar un empleado
router.delete('/delete/:id/:type', deleteEmpleado);

export default router;
