import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTAxOTM5OGNhZjFlNWQ4N2MwZTQxOThmYzlmMTdlMiIsInN1YiI6IjVkZDgxYTdlYjViYzIxMDAxNmM0MTcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LML6ufgIYqpdUkFYgvGS6UxjqKrnnFBRC1Ef3sulIlA'
const apiKey = '?api_key=75019398caf1e5d87c0e4198fc9f17e2';
const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${token}`
    }
})

export default {
    getPopularMovies() {
        return apiClient.get('/movie/popular'+apiKey)
    },
    getPopularShows() {
        return apiClient.get('/tv/popular'+apiKey)
    },
    getPopularActors() {
        return apiClient.get('/person/popular'+apiKey)
    },
    getTodayTrending() {
        return apiClient.get('/trending/all/day'+apiKey)
    },
    getWeekTrending() {
        return apiClient.get('/trending/all/week'+apiKey)
    },
    getNowPlayingMovies() {
        return apiClient.get('/movie/now_playing'+apiKey)
    },
    getTopRatedMovies() {
        return apiClient.get('/movie/top_rated'+apiKey)
    },
    getUpComingMovies() {
        return apiClient.get('/movie/upcoming'+apiKey)
    },
    getTopRatedShows() {
        return apiClient.get('/tv/top_rated'+apiKey)
    },
    getAiringTodayShows() {
        return apiClient.get('/tv/airing_today'+apiKey)
    },
    getOnTheAirShows() {
        return apiClient.get('/tv/on_the_air'+apiKey)
    }
}