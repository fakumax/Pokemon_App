// Importar las dependencias
import express from 'express';
// import routes from './routes/index';

// Crear una instancia de Express
const app = express();

const port = process.env.PORT || 3001; // Puerto en el que el servidor escuchará las solicitudes

// Middleware para analizar las solicitudes con contenido JSON
app.use(express.json());

// Middleware para analizar las solicitudes con contenido URL-encoded
app.use(express.urlencoded({ extended: true }));

// Ruta de ejemplo para una solicitud GET
// app.use('/', routes);

// // Ruta de ejemplo para una solicitud POST
// app.post('/saludo', (req, res) => {
//   const { nombre } = req.body;
//   res.json({ mensaje: `¡Hola, ${nombre}! Esta es una solicitud POST en Express.js` });
// });

// // Ruta de ejemplo con parámetros en la URL
// app.get('/usuario/:id', (req, res) => {
//   const userId = req.params.id;
//   res.send(`Esta es la página del usuario con ID: ${userId}`);
// });

// // Manejo de otras rutas no definidas
// app.use((req, res, next) => {
//   res.status(404).send('Ruta no encontrada');
// });

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
