<template>
<SectionInner/>

<SectionMain class="container" :datas="this.datas" title="What's Popular" :selectors="popularselector"/>
<SectionMain class="container" :datas="this.trendingDatas" title="Trending" :selectors="trendingselector" />

</template>

<script>
import MediaService from '@/Services/MediaService.js'
import SectionInner from '@/components/SectionInner.vue'
import SectionMain from '@/components/SectionMain.vue'
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      popularselector: [
        'Movies',
        'On TV',
        'Actors'
      ],
      trendingselector: [
        'Today',
        'This Week',
      ],
      payload: {
        med : 'movie',
        cat : 'popular'
      }
    }
  },
  name: 'home',
  components: {
    SectionInner,
    SectionMain,
    MediaService
  },
  created () {
    this.getPopularMovies();
  },
  methods: {
    ...mapActions(['fetchMovies','fetchTodayTrending']),
    getPopularMovies(){
      this.fetchMovies({ 
        media: 'movie', 
        category: 'popular',
    });
      this.fetchTodayTrending();
    },
  },
  computed: {
    ...mapState(["datas","trendingDatas"]),
  }
}
</script>
