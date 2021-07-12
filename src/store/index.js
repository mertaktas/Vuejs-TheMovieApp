import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    searchData: null,
  },
  mutations: {
    SET_SEARCH_DATA(state, payload) {
      state.searchData = payload;
      console.log(payload);
    },
  },
  actions: {
    async getSearchData({ commit }, payload) {
      axios
        .get(`https://api.themoviedb.org/3/search/multi?query=${payload}&api_key=75019398caf1e5d87c0e4198fc9f17e2`)
        .then(response => {
            commit('SET_SEARCH_DATA', response.data.results)
      })
    }
  },
  modules: {
  }
})
