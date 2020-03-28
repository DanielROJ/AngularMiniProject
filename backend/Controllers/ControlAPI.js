'use strict'
//Modulo encargado del procesamiento de la logica del negocio;
const Empleado = require('../Model/Empleado').Empleado;

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function CreateEmpleado(req, res) {
    (async function () {
        try {
            Empleado.create(req.body).then(data => {
                res.status(200).send({
                    "Success": true
                })
            }
            ).catch(err => {
                console.log('Error al crear Empleado ' + err)
                res.status(400).send({ "error": "Error Validation" });
            })

        } catch (error) {
            console.log('Error en el controlador Crear Empleado');
        }

    })()
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function UpdateEmpleado(req, res) {
    (async function () {
        try {
            let { idEmpleado } = req.body;

            Empleado.update(req.body, {
                where: {
                    idEmpleado
                }
            }).then(Emp => {
                res.status(200).send({
                    "Success": true
                })
            }).catch(err => {
                console.log('Error en UpdateEmpleado ' + err);
                res.status(400).send({ "error": "Error Validation" });
            });
        } catch (error) {
            console.log('Error controlado Update empleado' + error)
            res.status(500).send({})
        }

    })()
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function ReadEmpleado(req, res) {
    (async function () {
        try {
            let { id,type } = req.params;

            Empleado.findOne({
                where:{
                    idEmpleado: id,
                    tipoIdentificacion: type
                }
            }).then(Emp => {
                if (!Emp) {
                    res.status(404).send({});
                } else {
                    let js = JSON.stringify(Emp)
                    res.status(200).send(js);
                }
            }).catch(err => {
                console.log('Error al Consultar Empleado' + err);
                res.status(400).send({ "error": "Error Validation" });
            })
        } catch (error) {
            console.log('Error controlado READ empleado' + error)
            res.status(500).send({})
        }

    })()
}


/**
 * Metodo Que Permite Eliminar Empleados
 * @param {*} req 
 * @param {*} res 
 */
function DeleteEmpleado(req, res) {
    (async function () {
        try {
            let { id, type } = req.params;
            Empleado.findOne({where:{
                idEmpleado:id,
                tipoIdentificacion:type
            }}).then(Emp => {
                if (!Emp) {
                    res.status(404).send({});
                } else {

                    Emp.destroy().then(data => {
                        res.status(200).send({
                            "Success": true
                        })
                    }).catch(err => {
                        res.status(404).send({});
                    })
                }
            }).catch(err => {
                console.log('Error al Eliminar Empleado' + err);
                res.status(400).send({ "error": "Error Validation" });
            })
        } catch (error) {
            console.log('Error controlado READ empleado' + error)
            res.status(500).send({})
        }
    })()
}


function getListEmpleado(req,res){
(async function(){
   try {
    Empleado.findAll().then(data=>{
        if(data){
            let js = JSON.stringify(data);
            res.status(200).send(js);
        }
    }).catch(err=>{
     console.log('Error al Traer lista Empleados' + err);
     res.status(400).send({ "error": "Error Validation" });
    })
   } catch (error) {
    console.log('Error controlado LIST empleados' + error)
    res.status(500).send({})
   }
})()
}

module.exports = {
    CreateEmpleado,
    ReadEmpleado,
    UpdateEmpleado,
    DeleteEmpleado,
    getListEmpleado
}