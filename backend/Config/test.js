const connection = require('./ConfigORM_Database');

connection.seq
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});


//Un archivo que permite COmprobar la conexion del ORM  con la base de datos.
