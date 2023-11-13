require('dotenv').config();

const express = require('express');
const app = express();

// Utilizar la variable de entorno PORT o un puerto por defecto
const port = process.env.PORT || 3000;

// Importar Sequelize y modelos
const sequelize = require('./dbConfig');
const Autor = require('./models/autor');
const Post = require('./models/post');

// Importar rutas
const autoresRoutes = require('./routes/autoresRoutes');
const postsRoutes = require('./routes/postsRoutes');

// Middleware para parsear JSON
app.use(express.json());

// Usar rutas
app.use('/api', autoresRoutes);
app.use('/api', postsRoutes);

// Manejo básico de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal!');
});

// Sincronizar modelos con la base de datos
sequelize.sync().then(() => {
    console.log('Modelos sincronizados con la base de datos.');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
