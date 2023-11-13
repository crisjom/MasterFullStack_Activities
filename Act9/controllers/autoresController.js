const Autor = require('../models/autor');

exports.listarAutores = async (req, res) => {
    try {
        const autores = await Autor.findAll();
        res.json(autores);
    } catch (error) {
        res.status(500).send(error.message);
    }
};