// models/autor.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbConfig');

const Autor = sequelize.define('Autor', {
    // Define los atributos del modelo
    autorID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING
        // Considera almacenar solo la URL de la imagen
    }
}, {
    // Opciones adicionales
    tableName: 'Autores',
    timestamps: false
});

module.exports = Autor;