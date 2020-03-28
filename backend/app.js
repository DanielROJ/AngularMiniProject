//Modulo que me permite iniciar las caracteriristicas de l servidor de aplicaciones.

const Express = require('express'); // Framework de desarrollo en node js 
const app = Express(); // Inicializo instacia dependencia servidor
const config = require('./Config/variablesEntorno');
const pg =require('pg'); // Modulo Necesario Para conectar con BDs Postgresql
const pgHstore = require('pg-hstore');
let  indexRoutes = require('./Routes/index');//Modulo que tiene Definidas Las RUSTAS DEL Servicio REST
const morgan = require('morgan');
const cors = require('cors');
//MIDDELWARES
//Lectura de los formatos que pueden entrar al servidor tipo JSON
app.use(Express.json());
app.use(morgan('dev')); //permite visualizar las peticiones en Consola
app.use(cors());  // Configurar de cors // Permite Hacer intercambio de recursos entre diferentes dominios y configurar privacidad de la API



app.use('/',indexRoutes); // Modulo de redireccionamiento de la API REST




//Correr El servidor
app.listen(config.port,'localhost',(err)=>{
if(err){
    console.log('Error En correr el servidor '+ err);
}else{

    console.log('> Servidor corriendo de Forma Correcta PORT : '+config.port);    
}
})