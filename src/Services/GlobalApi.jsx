import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "ad8cb43f3eef7608124e5925723d96cf";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=ad8cb43f3eef7608124e5925723d96cf";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
