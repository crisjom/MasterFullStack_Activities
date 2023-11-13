// controllers/inmueblesController.js
const Inmueble = require('../models/inmueble');

exports.getAllInmuebles = async (req, res) => {
    try {
        const inmuebles = await Inmueble.find();
        res.status(200).json(inmuebles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createInmueble = async (req, res) => {
    const inmueble = new Inmueble({
        piso: req.body.piso,
        letra: req.body.letra,
        extension: req.body.extension,
        numHabitaciones: req.body.numHabitaciones,
        alquilado: req.body.alquilado,
        propietario: {
            nombre: req.body.propietario.nombre,
            email: req.body.propietario.email
        }
    });

    try {
        const nuevoInmueble = await inmueble.save();
        res.status(201).json(nuevoInmueble);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateInmueble = async (req, res) => {
    try {
        const inmueble = await Inmueble.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!inmueble) {
            return res.status(404).json({ message: "Inmueble no encontrado" });
        }
        res.status(200).json(inmueble);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteInmueble = async (req, res) => {
    try {
        const inmueble = await Inmueble.findByIdAndDelete(req.params.id);
        if (!inmueble) {
            return res.status(404).json({ message: "Inmueble no encontrado" });
        }
        res.status(200).json({ message: "Inmueble eliminado" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};