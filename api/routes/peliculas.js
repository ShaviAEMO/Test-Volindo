
const {Router} = require('express');
const {peliculasGet, buscadorPeliculas} = require('../controllers/peliculas')

const router = Router();


router.get('/', peliculasGet);

router.get('/buscar', buscadorPeliculas);

module.exports = router;