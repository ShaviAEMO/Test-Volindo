const {Router} = require('express');
const {peliculasGet, buscadorPeliculas, movieDetails} = require('../controllers/peliculas')

const router = Router();


router.get('/', peliculasGet);

router.get('/buscar', buscadorPeliculas);

router.get('/movieDetails', movieDetails);

module.exports = router;