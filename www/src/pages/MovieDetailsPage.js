// MovieDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPopularMovies, searchMovies } from '../services/api';
import MovieDetails from '../components/MovieDetails';

function MovieDetailsPage() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                let fetchedMovies = [];
                if (searchTerm) {
                    fetchedMovies = await searchMovies(searchTerm);
                } else {
                    fetchedMovies = await getPopularMovies();
                }
                setMovies(fetchedMovies);

                // Find the selected movie based on the ID
                const selectedMovie = fetchedMovies.find(movie => movie.id.toString() === id);
                if (selectedMovie) {
                    setMovieDetails(selectedMovie);
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        }
        fetchData();
    }, [id, searchTerm]);

    return (
        <div className="movie-details-page">
            <MovieDetails movie={movieDetails} />
        </div>
    );
}

export default MovieDetailsPage;



