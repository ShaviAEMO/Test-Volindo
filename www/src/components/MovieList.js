import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                    <MovieCard movie={movie} />
                </Link>
            ))}
        </div>
    );
}

export default MovieList;


