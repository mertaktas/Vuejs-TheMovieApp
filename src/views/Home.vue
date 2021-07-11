<template>
<SectionInner/>
<SectionMain :datas="popularData" title="What's Popular" :selectors="popularselector"/>
<SectionMain :datas="trendingData" title="Trending" :selectors="trendingselector" />

</template>

<script>
import axios from 'axios';
import SectionInner from '@/components/SectionInner.vue'
import SectionMain from '@/components/SectionMain.vue'

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
      popularData: null,
      trendingData: null,
    }
  },
  name: 'home',
  components: {
    SectionInner,
    SectionMain
  },
  mounted () {
    axios
      .get('https://api.themoviedb.org/3/trending/movie/week?api_key=75019398caf1e5d87c0e4198fc9f17e2')
      .then(response => (this.popularData = response.data.results)),
    axios
      .get('https://api.themoviedb.org/3/trending/all/day?api_key=75019398caf1e5d87c0e4198fc9f17e2')
      .then(response => (this.trendingData = response.data.results))
  }
}
</script>
