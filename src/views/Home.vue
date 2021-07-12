<template>
<SectionInner/>
<SectionMain :datas="this.popularDatas" title="What's Popular" :selectors="popularselector"/>
<SectionMain :datas="this.trendingDatas" title="Trending" :selectors="trendingselector" />

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
    ...mapActions(['fetchPopular','fetchTodayTrending']),
    getPopularMovies(){
      this.fetchPopular();
      this.fetchTodayTrending();
    },
  },
  computed: {
    ...mapState(["popularDatas","trendingDatas"]),
  }
}
</script>
