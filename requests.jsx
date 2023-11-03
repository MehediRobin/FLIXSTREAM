const key = "c35ad119967ac4612b3dffe8d6e611a9";

const requests = {
  popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  tvShows: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US`,
};

export default requests;
