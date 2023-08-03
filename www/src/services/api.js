const API_BASE_URL = 'http://localhost:8080/api';

export async function getPopularMovies() {
    try {
        const response = await fetch(`${API_BASE_URL}/peliculas`);
        const responseData = await response.json();

        if (responseData.success) {
            const popularMovies = responseData.data;
            return popularMovies;
        } else {
            console.error('Error obteniendo películas populares:', responseData.message);
            throw new Error(responseData.message);
        }
    } catch (error) {
        console.error('getPopularMovies error:', error);
        throw error;
    }
}


export async function searchMovies(query) {
    try {
        const response = await fetch(`${API_BASE_URL}/peliculas/buscar?titulo=${query}`);
        const responseData = await response.json();

        if (responseData.success) {
            const matchingMovies = responseData.data;
            return matchingMovies;
        } else {
            console.error('Error buscando películas:', responseData.message);
            throw new Error(responseData.message);
        }
    } catch (error) {
        console.error('searchMovies error:', error);
        throw error;
    }
}

export async function getMovieDetails(movieId) {
    try {
        const response = await fetch(`${API_BASE_URL}/peliculas/movieDetails?id=${movieId}`);
        const responseData = await response.json();

        if (responseData.success) {
            const movieDetails = responseData.data;
            return movieDetails;
        } else {
            console.error('Error obteniendo detalles de la película:', responseData.message);
            throw new Error(responseData.message);
        }
    } catch (error) {
        console.error('getMovieDetails error:', error);
        throw error;
    }
}



