<template>
<SectionInner/>
<SectionMain :datas="datas" title="Movies" />

</template>

<script>
import axios from 'axios';
import SectionInner from '@/components/SectionInner.vue'
import SectionMain from '@/components/SectionMain.vue'
import { mapActions, mapMutations, mapState } from 'vuex'

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
  created () {
    this.getMovies();
  },
  methods: {
    ...mapActions(['fetchMovies']),
    ...mapMutations(['CARD_LOADED']),
    getMovies(){
      this.CARD_LOADED();
      this.fetchMovies({ 
        media: 'movie', 
        category: 'popular',
    });
    },
  },
  computed: {
    ...mapState(["datas"]),
  }
}
</script>
