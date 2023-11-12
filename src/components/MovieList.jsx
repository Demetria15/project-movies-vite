import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { fetchPopularMovies } from '../api/movieApi';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch popular movies
    fetchPopularMovies()
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  // Function to construct image URLs 
  const getImageUrl = (path) => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const size = 'w780'; 
    return `${baseUrl}${size}${path}`;
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <Link to={`/movie/${movie.id}`} className="link">
              <img
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;




