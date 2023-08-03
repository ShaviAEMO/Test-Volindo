import React from 'react';

function MovieDetails({ movie }) {
    if (!movie.title) {
        return (
            <div className="movie-details-container">
                <div className="movie-details">
                    Loading...
                </div>
            </div>
        );
    }

    const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : '';

    return (
        <div className="movie-details-container">
            <button onClick={() => window.history.back()} className="back-button">
                Back
            </button>
            <div className="movie-details">
                <h2>{movie.title}</h2>
                {posterUrl && (
                    <img src={posterUrl} alt={movie.title} className="movie-poster" />
                )}
                <p>Overview: {movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>Popularity: {movie.popularity}</p>
                <p>Original Language: {movie.original_language}</p>
                <p>Vote Average: {movie.vote_average}</p>
                <p>Vote Count: {movie.vote_count}</p>
                {/* ... Other movie details */}
            </div>
        </div>
    );
}

export default MovieDetails;
