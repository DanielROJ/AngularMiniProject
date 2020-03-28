//Modulo Encargado de la Conexion Con la base de datos e Inicio de ORM 

const Sequelize = require('sequelize');
const config = require('../Config/variablesEntorno');

//Conexion con La Base de Datos POSTGRESQL
//La base de datos Fue creada Localmente
const seq =new Sequelize('vortexprueba','postgres','pass',
    {dialect:'postgres',host:'localhost', pool:{max:18, min:0, require:30000, idle:10000}, logging:false})


    seq
    .authenticate()
    .then(() => {
      console.log('> Conexion Correcta Con la BASE de DATOS');
    })
    .catch(err => {
      console.error('> Error al Conectar a la BASE DE DATOS: ', err);
    });   

module.exports.seq = seq; 