const axios = require("axios");

const moviesGet = async (req, res) => {
    try {
        const response =
            await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.APIKEY}`);
        const popularMovies = response.data.results;
        res.json({
            success: true,
            message: "Películas populares obtenidas exitosamente",
            data: popularMovies
        });
    } catch (error) {
        console.error('Error al obtener las películas populares:', error.message);
        res.status(500).json({ error: 'Ocurrió un error al obtener las películas populares' });
    }
}

const searchMovie = async (req, res) => {
    const { titulo } = req.query;

    if (!titulo) {
        return res.status(400).json({ error: 'Debes proporcionar un título de película para buscar' });
    }

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.APIKEY}&query=${encodeURIComponent(titulo)}`
        );
        const matchingMovies = response.data.results;
        res.json({
            success: true,
            message: `Resultados de búsqueda para '${titulo}'`,
            data: matchingMovies
        });
    } catch (error) {
        console.error('Error al buscar películas:', error.message);
        res.status(500).json({ error: 'Ocurrió un error al buscar películas' });
    }
}
const movieDetails = async (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'Debes proporcionar un ID de película para obtener los detalles' });
    }

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.APIKEY}`
        );
        const movieDetails = response.data;
        res.json({
            success: true,
            message: `Detalles de la película con ID ${id}`,
            data: movieDetails
        });
    } catch (error) {
        console.error('Error al obtener los detalles de la película:', error.message);
        res.status(500).json({ error: 'Ocurrió un error al obtener los detalles de la película' });
    }
};



module.exports = {
    moviesGet,
    searchMovie,
    movieDetails
};

