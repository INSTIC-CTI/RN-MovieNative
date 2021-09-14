import axios from "axios";

const api_url = "https://api.themoviedb.org/3";
const api_key = "api_key=4e2a93812004fddd622fb5e91194b8a9"

export const getPopularMovies = async () => {
  const result = await axios.get(
    `${api_url}/movie/popular?${api_key}`
  );
  return result.data.results;
};


export const getUpcomingMovies = async () => {
  const result = await axios.get(
    `${api_url}/movie/upcoming?${api_key}`
  );
  return result.data.results;
};
export const getPopularTv = async () => {
  const result = await axios.get(
    `${api_url}/tv/popular?${api_key}`
  );
  return result.data.results;
};
