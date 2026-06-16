/**
 * Controlador de la API - Operaciones CRUD de Empleados
 */
import { Request, Response } from 'express';
import Empleado, { IEmpleado } from '../model/empleado.js';

/**
 * Crear un nuevo empleado
 */
export const createEmpleado = async (req: Request, res: Response): Promise<void> => {
  try {
    const empleadoData: IEmpleado = req.body;
    const empleado = await Empleado.create(empleadoData);
    res.status(201).json({ success: true, data: empleado });
  } catch (error) {
    console.error('Error al crear Empleado:', error);
    res.status(400).json({ error: 'Error en validación de datos' });
  }
};

/**
 * Obtener un empleado por ID y tipo de identificación
 */
export const readEmpleado = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, type } = req.params;

    const empleado = await Empleado.findOne({
      where: {
        idEmpleado: id,
        tipoIdentificacion: type,
      },
    });

    if (!empleado) {
      res.status(404).json({ error: 'Empleado no encontrado' });
      return;
    }

    res.status(200).json(empleado);
  } catch (error) {
    console.error('Error al consultar Empleado:', error);
    res.status(400).json({ error: 'Error en validación de datos' });
  }
};

/**
 * Actualizar un empleado
 */
export const updateEmpleado = async (req: Request, res: Response): Promise<void> => {
  try {
    const { idEmpleado, ...updateData } = req.body;

    if (!idEmpleado) {
      res.status(400).json({ error: 'ID de empleado requerido' });
      return;
    }

    const [updatedCount] = await Empleado.update(updateData, {
      where: { idEmpleado },
    });

    if (updatedCount === 0) {
      res.status(404).json({ error: 'Empleado no encontrado' });
      return;
    }

    res.status(200).json({ success: true, message: 'Empleado actualizado correctamente' });
  } catch (error) {
    console.error('Error en updateEmpleado:', error);
    res.status(400).json({ error: 'Error en validación de datos' });
  }
};

/**
 * Eliminar un empleado
 */
export const deleteEmpleado = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, type } = req.params;

    const empleado = await Empleado.findOne({
      where: {
        idEmpleado: id,
        tipoIdentificacion: type,
      },
    });

    if (!empleado) {
      res.status(404).json({ error: 'Empleado no encontrado' });
      return;
    }

    await empleado.destroy();
    res.status(200).json({ success: true, message: 'Empleado eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar Empleado:', error);
    res.status(400).json({ error: 'Error en validación de datos' });
  }
};

/**
 * Obtener lista de todos los empleados
 */
export const getListEmpleados = async (req: Request, res: Response): Promise<void> => {
  try {
    const empleados = await Empleado.findAll();
    res.status(200).json(empleados);
  } catch (error) {
    console.error('Error al traer lista de Empleados:', error);
    res.status(400).json({ error: 'Error en validación de datos' });
  }
};
