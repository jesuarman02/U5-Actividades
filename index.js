const connect = require('./database/config');
const express  = require('express');
const {obtenerContactos, crearContactos, actualizarContactos, eliminarContactos} = require('./controllers/contacto');

const app = express();



connect();

app.use(express.json());

app.get('/', obtenerContactos);

app.post('/', crearContactos);

app.put('/:id', actualizarContactos);

app.delete('/:id', eliminarContactos);



app.listen(3001, () => {
    console.log('Servidor corriendo en puerto 3001');
});

