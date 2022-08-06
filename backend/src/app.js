const express = requiere('express');
const server = express();
server.set('port',8080);
server.set('host','localhost');
//Middlewares
server.use(express.json());
server.use('/tiendas', require('./routes/stores.js'));

//Rutas
/*server.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})*/

server.get('*', (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h2>Página no encontrada</h2>")
}) 
module.exports = server;
