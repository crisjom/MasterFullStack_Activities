// models/post.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbConfig');
const Autor = require('./autor');

const Post = sequelize.define('Post', {
    // Define los atributos del modelo
    postID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fechaCreacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Opciones adicionales
    tableName: 'Posts',
    timestamps: false
});

// Relación con el modelo Autor
Post.belongsTo(Autor, {
    foreignKey: 'autorID',
    as: 'Autor'
});

module.exports = Post;