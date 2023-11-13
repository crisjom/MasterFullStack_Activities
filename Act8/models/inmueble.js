const mongoose = require('mongoose');

const inmuebleSchema = new mongoose.Schema({
    piso: {
        type: Number,
        required: true
    },
    letra: {
        type: String,
        required: true
    },
    extension: {
        type: Number,
        required: true
    },
    numHabitaciones: {
        type: Number,
        required: true
    },
    alquilado: {
        type: Boolean,
        default: false,
    },
    propietario: {
        nombre: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            match: /.+\@.+\..+/
        }
    }
});

module.exports = mongoose.model('Inmueble', inmuebleSchema);
