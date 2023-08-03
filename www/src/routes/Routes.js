import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MovieDetailsPage from '../pages/MovieDetailsPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
    );
}

export default AppRoutes;

















