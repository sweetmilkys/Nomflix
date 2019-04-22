import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const api = axios.create({
  baseURL: process.THEMOVIEDB_API_URL,
  params: {
    api_key: process.THEMOVIEDB_API_KEY,
    language: "en-US"
  }
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_palying"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => api.get("tv.top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  tvDetail: id =>
    api.get(`tv${id}`, { params: { append_to_response: "videos" } }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export default api;