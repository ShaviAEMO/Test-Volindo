import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPopularMovies, searchMovies, getMovieDetails } from '../services/api';
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

                if (id) {
                    if (!movieDetails.id || movieDetails.id.toString() !== id) {
                        const selectedMovieDetails = await getMovieDetails(id);
                        setMovieDetails(selectedMovieDetails);
                    }
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        }
        fetchData();
    }, [id, searchTerm, movieDetails]);

    return (
        <div className="movie-details-page">
            <MovieDetails movie={movieDetails} />
        </div>
    );
}

export default MovieDetailsPage;




