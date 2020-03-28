const Express = require('express');
const routes =  Express.Router();
const controlllers = require('../Controllers/ControlAPI');

//Modulo Encargado de Definir las rutas de la API REST


//Ruta de consulta y lectura
routes.get('/read/:id/:type',controlllers.ReadEmpleado);

//Ruta de Creacion
routes.post('/create',controlllers.CreateEmpleado);

//Ruta de Actualizacion
routes.put('/update',controlllers.UpdateEmpleado);

//Ruta para realizar Eliminaciones
routes.delete('/delete/:id/:type',controlllers.DeleteEmpleado);

//Ruta para Consultar Listas de Empleados
routes.get('/all',controlllers.getListEmpleado);


module.exports = routes;


