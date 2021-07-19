<template>
  <SectionInner/>
  <SectionMain class="container" :datas="this.datas" title="What's Popular" :selectors="popularselector"/>
  <SectionMain class="container" :datas="this.trendingDatas" title="Trending" :selectors="trendingselector" />
</template>

<script>
import SectionInner from '@/components/SectionInner.vue'
import SectionMain from '@/components/SectionMain.vue'
import { mapActions, mapMutations, mapState } from 'vuex'

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
      ]
    }
  },
  name: 'home',
  components: {
    SectionInner,
    SectionMain,
  },
  created () {
    this.getMovies();
  },
  methods: {
    ...mapActions(['fetchMovies','fetchTrending']),
    ...mapMutations(['CARD_LOADED']),
    getMovies(){
      this.CARD_LOADED();
      this.fetchMovies({ 
        media: 'movie', 
        category: 'popular',
      });
      this.fetchTrending('day');
    },
  },
  computed: {
    ...mapState(["datas","trendingDatas"]),
  }
}
</script>
