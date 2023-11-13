const Post = require('../models/post');
const Autor = require('../models/autor');

exports.listarPostsConAutores = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [{ model: Autor, as: 'Autor' }]
        });
        res.json(posts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.listarPostsPorAutor = async (req, res) => {
    try {
        const autorId = req.params.autorId;
        const posts = await Post.findAll({
            where: { autorID: autorId }
        });
        res.json(posts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.crearPost = async (req, res) => {
    try {
        const { titulo, descripcion, fechaCreacion, categoria, autor } = req.body;
        
        let autorEncontrado = await Autor.findOne({ where: { email: autor.email } });

        if (!autorEncontrado) {
            autorEncontrado = await Autor.create({ nombre: autor.nombre, email: autor.email, imagen: autor.imagen });
        }

        const nuevoPost = await Post.create({
            titulo,
            descripcion,
            fechaCreacion,
            categoria,
            autorID: autorEncontrado.id
        });

        res.status(201).json(nuevoPost);
    } catch (error) {
        res.status(500).send(error.message);
    }
};