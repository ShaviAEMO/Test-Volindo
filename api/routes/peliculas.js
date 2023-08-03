const {Router} = require('express');
const {moviesGet, searchMovie, movieDetails} = require('../controllers/peliculas')

const router = Router();


router.get('/', moviesGet);

router.get('/buscar', searchMovie);

router.get('/movieDetails', movieDetails);

module.exports = router;