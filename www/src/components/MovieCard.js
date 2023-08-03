import React from 'react';

function MovieCard({ movie }) {
    if (!movie.poster_path) {
        // Manejo de caso en que no hay imagen disponible
        return (
            <div className="movie-card">
                <div className="movie-details">
                    <h2 className="movie-title">{movie.title}</h2>
                    <p className="movie-overview">{movie.overview}</p>
                    <p className="movie-release-date">Release Date: {movie.release_date}</p>
                    <p className="movie-popularity">Popularity: {movie.popularity}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="movie-card">
            <div className="movie-image">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="movie-details">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-overview">{movie.overview}</p>
                <p className="movie-release-date">Release Date: {movie.release_date}</p>
                <p className="movie-popularity">Popularity: {movie.popularity}</p>
            </div>
        </div>
    );
}


export default MovieCard;


