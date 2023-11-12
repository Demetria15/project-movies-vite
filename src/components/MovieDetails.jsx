import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/movieApi';
import { Link } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id)
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  const imageSize = 'w780';

  const getImageUrl = (path) => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    return `${baseUrl}${imageSize}${path}`;
  };

  return (
    <div className="movie-details-container">
      {movie ? (
        <div className="movie-details">
          <div className="movie-content">
            <div className="movie-image">
              <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
            </div>
            <div className="movie-info">
              <h1>{movie.title}</h1>
              <p>Release Date: {movie.release_date}</p>
              <p>Overview: {movie.overview}</p>
              <button className="button">
                <Link to="/" className="link">
                  Back to Movies
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetails;



