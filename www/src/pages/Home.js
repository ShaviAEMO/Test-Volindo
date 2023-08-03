import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import { getPopularMovies, searchMovies } from '../services/api';

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchMovies() {
            try {
                let fetchedMovies = [];
                if (searchTerm) {
                    fetchedMovies = await searchMovies(searchTerm);
                } else {
                    fetchedMovies = await getPopularMovies();
                }
                setMovies(fetchedMovies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        }
        fetchMovies();
    }, [searchTerm]);

    return (
        <div className="home">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <MovieList movies={movies} />
        </div>
    );
}

export default Home;



