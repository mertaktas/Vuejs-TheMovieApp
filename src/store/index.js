import { createStore } from 'vuex'
import MediaService from '@/Services/MediaService';
import axios from 'axios';

export default createStore({
  state: {
    searchData: null,
    popularDatas: null,
    trendingDatas: null,
    movieDatas: null,
    showDatas: null,
  },
  mutations: {
    SET_SEARCH_DATA(state, payload) {
      state.searchData = payload;
      console.log(payload);
    },
    SET_POPULAR(state, payload) {
      state.popularDatas = payload;
      console.log(state.popularDatas);
    },
    SET_TRENDİNG(state,payload) {
      state.trendingDatas = payload;
    },
    SET_MOVIE(state,payload) {
      state.movieDatas = payload;
    },
    SET_SHOW(state,payload) {
      state.showDatas = payload;
    },
  },
  actions: {
    async getSearchData({ commit }, payload) {
      axios
        .get(`https://api.themoviedb.org/3/search/multi?query=${payload}&api_key=75019398caf1e5d87c0e4198fc9f17e2`)
        .then(response => {
            commit('SET_SEARCH_DATA', response.data.results)
      })
    },
    async fetchPopular({ commit }) {
      MediaService.getPopularMovies()
        .then(res => {
          commit('SET_POPULAR', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchPopularShows({ commit }) {
      MediaService.getPopularShows()
        .then(res => {
          commit('SET_POPULAR', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchPopularActors({ commit }) {
      MediaService.getPopularActors()
        .then(res => {
          commit('SET_POPULAR', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchTodayTrending({ commit }) {
      MediaService.getTodayTrending()
        .then(res => {
          commit('SET_TRENDİNG', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchWeekTrending({ commit }) {
      MediaService.getWeekTrending()
        .then(res => {
          commit('SET_TRENDİNG', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchNowPlayingMovies({ commit }) {
      MediaService.getNowPlayingMovies()
        .then(res => {
          commit('SET_MOVIE', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchTopRatedMovies({ commit }) {
      MediaService.getTopRatedMovies()
        .then(res => {
          commit('SET_MOVIE', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchUpComingMovies({ commit }) {
      MediaService.getUpComingMovies()
        .then(res => {
          commit('SET_MOVIE', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchTopRatedShows({ commit }) {
      MediaService.getTopRatedShows()
        .then(res => {
          commit('SET_SHOW', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchAiringTodayShows({ commit }) {
      MediaService.getAiringTodayShows()
        .then(res => {
          commit('SET_SHOW', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchOnTheAirShows({ commit }) {
      MediaService.getOnTheAirShows()
        .then(res => {
          commit('SET_SHOW', res.data.results)
        })
        .catch(err => console.log(err)) 
    }
  },
  modules: {
  }
})
