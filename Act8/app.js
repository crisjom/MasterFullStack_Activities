// app.js
const express = require('express');
const mongoose = require('mongoose');
const inmueblesRoutes = require('./routes/inmueblesRoutes');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, {
}).then(() => {
    console.log('Conexión exitosa a MongoDB');
}).catch(err => {
    console.error('Error al conectar con MongoDB', err);
});

app.use(express.json());
app.use('/api/inmuebles', inmueblesRoutes);

app.listen(port, () => console.log('Servidor corriendo en puerto 3000'));