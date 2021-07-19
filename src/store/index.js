import { createStore } from 'vuex'
import MediaService from '@/Services/MediaService';
import axios from 'axios';

export default createStore({
  state: {
    searchData: null,
    datas: null,
    cardLoading: true,
    trendingDatas: null,
    movieDatas: null,
    showDatas: null,
    showData: null,
  },
  mutations: {
    SET_SEARCH_DATA(state, payload) {
      state.searchData = null;
      state.searchData = payload;
    },
    SET_DATAS(state, payload) {
      state.datas = payload;
      state.cardLoading = false;
    },
    CARD_LOADED(state) {
      state.cardLoading = true;
    },
    SET_TRENDİNG(state,payload) {
      state.trendingDatas = payload;
      state.cardLoading = false;
    },
    SET_MOVIE(state,payload) {
      state.movieDatas = payload;
    },
    SET_SHOW(state,payload) {
      state.showDatas = payload;
    },
    GET_SHOW(state, payload) {
      state.showData = payload;
    }
  },
  actions: {
    async fetchGetSearchData({ commit }, payload) {
      MediaService.getSearchData(payload)
        .then(res => {
          commit('SET_SEARCH_DATA', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchMovies(context, { media, category }) {
      setTimeout(() => {
        MediaService.getMovies(media, category)
        .then(res => {
          context.commit('SET_DATAS', res.data.results)
        })
        .catch(err => console.log(err)) 
      }, 1000)

    },
    async fetchTrending({ commit }, time) {
      setTimeout(() => {
        MediaService.getTrending(time)
        .then(res => {
          commit('SET_TRENDİNG', res.data.results)
        })
        .catch(err => console.log(err)) 
      }, 1000)
      
    },
    async fetchMediaShow({ commit }, value) {
      MediaService.getMediaShow(value.id, value.cat)
        .then(res => {
          commit('GET_SHOW', res.data)
        })
        .catch(err => console.log(err)) 
    },
    async fetchActorShow({ commit }, id) {
      MediaService.getActorShow(id)
        .then(res => {
          commit('GET_SHOW', res.data)
        })
        .catch(err => console.log(err)) 
    }
  },
  modules: {
  }
})
