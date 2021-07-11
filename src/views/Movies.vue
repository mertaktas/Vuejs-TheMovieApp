<template>
<SectionInner/>
<SectionMain :datas="moviesdata" title="Movies" />

</template>

<script>
import axios from 'axios';
import SectionInner from '@/components/SectionInner.vue'
import SectionMain from '@/components/SectionMain.vue'

export default {
  data() {
    return {
      moviesdata: null,
    }
  },
  name: 'Movies',
  components: {
    SectionInner,
    SectionMain
  },
  mounted () {
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=75019398caf1e5d87c0e4198fc9f17e2')
      .then(response => (this.moviesdata = response.data.results))
  }
}
</script>
