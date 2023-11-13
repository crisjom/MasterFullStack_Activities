const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');


router.get('/posts', postsController.listarPostsConAutores);
router.get('/posts/autor/:autorId', postsController.listarPostsPorAutor);

router.post('/posts', postsController.crearPost);

module.exports = router;