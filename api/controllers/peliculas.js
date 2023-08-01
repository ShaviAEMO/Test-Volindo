const axios = require("axios");


const peliculasGet = async (req, res) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.APIKEY}`);
        const popularMovies = response.data.results;
        res.json(popularMovies);
    } catch (error) {
        console.error('Error al obtener las películas populares:', error.message);
        res.status(500).json({ error: 'Ocurrió un error al obtener las películas populares' });
    }
}

const  buscadorPeliculas = async (req, res) => {
    const { titulo } = req.query;

    if (!titulo) {
        return res.status(400).json({ error: 'Debes proporcionar un título de película para buscar' });
    }

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.APIKEY}&query=${encodeURIComponent(titulo)}`
        );
        const matchingMovies = response.data.results;
        res.json(matchingMovies);
    } catch (error) {
        console.error('Error al buscar películas:', error.message);
        res.status(500).json({ error: 'Ocurrió un error al buscar películas' });
    }
}

module.exports = {
    peliculasGet,
    buscadorPeliculas
}

