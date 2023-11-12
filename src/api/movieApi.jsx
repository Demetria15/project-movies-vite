const apiKey = 'c0295e663a49c7348a199dd4c2ec1b1b';
const apiUrl = 'https://api.themoviedb.org/3';

// Helper function to handle API requests
async function makeApiRequest(path, params = {}) {
  try {
    const queryParams = new URLSearchParams({ api_key: apiKey, language: 'en-US', ...params });
    const response = await fetch(`${apiUrl}${path}?${queryParams}`);
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}

// Fetch a list of popular movies
export const fetchPopularMovies = () => {
  return makeApiRequest('/movie/popular', { page: 1 })
    .then((data) => data.results)
    .catch((error) => {
      throw error;
    });
};

// Fetch details for a specific movie by movie ID
export const fetchMovieDetails = (movieId) => {
  return makeApiRequest(`/movie/${movieId}`)
    .catch((error) => {
      throw error;
    });
};

// Fetch TMDb image configuration
export const fetchImageConfiguration = () => {
  return makeApiRequest('/configuration')
    .then((data) => data.images)
    .catch((error) => {
      throw error;
    });
};
