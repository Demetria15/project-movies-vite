import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from "../components/MovieList";
import MovieDetails from '../components/MovieDetails';

function AppRoutes() {
  return (
    <Routes>
      {/* Routes for application */}
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default AppRoutes;