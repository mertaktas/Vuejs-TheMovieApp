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
    getMediaShow(id,media) {
        return apiClient.get(`/${media}/${id}`+apiKey)
    },
    getActorShow(id) {
        return apiClient.get(`/person/${id}`+apiKey)
    },
    getMovies(med,cat) {
        return apiClient.get(`/${med}/${cat}`+apiKey)
    },
    getTodayTrending() {
        return apiClient.get('/trending/all/day'+apiKey)
    },
    getWeekTrending() {
        return apiClient.get('/trending/all/week'+apiKey)
    },
    getSearchData(search) {
        return apiClient.get('/search/multi'+ apiKey + '&query=' + search)
    }
}