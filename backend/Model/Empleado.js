//Modulo Encargado de Definir El modelo de Empleados en Sintaxis ORM

const Sequelize = require('sequelize'); //Modulo que importa El ORM
const ConnectionORM = require('../database/ConfigORM_Database'); //Modulo Que realiza La conexion Con La base de Datos

class Empleado extends Sequelize.Model {}

Empleado.init({

    idEmpleado:{type:Sequelize.BIGINT, primaryKey:true, allowNull:false, field:'idempleado'},
    tipoIdentificacion:{type:Sequelize.STRING,allowNull:false, field:'tipoidentificacion', dialectTypes:"postgres"},
    nombres:{type:Sequelize.STRING, allowNull:false},
    apellidos:{type:Sequelize.STRING, allowNull:false},
    correoElectronico:{type:Sequelize.STRING,allowNull:false, field:'correoelectronico', validate:{
        isEmail:true   //Este campo necesariamente Solo recibe Emails.
    }},
    tel1:{type:Sequelize.STRING,allowNull:true},
    tel2:{type:Sequelize.STRING,allowNull:true},
    tel3:{type:Sequelize.STRING,allowNull:true},
    salarioMensual:{type:Sequelize.INTEGER, allowNull:false, field:'salariomensual'}


},{
    sequelize:ConnectionORM.seq,
    tableName:'empleado',
    timestamps: false
});

module.exports.Empleado =Empleado;