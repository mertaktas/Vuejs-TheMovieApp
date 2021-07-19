<template>
  <SectionInner/>
  <SectionMain :datas="datas" title="Actors" />
</template>

<script>
import SectionInner from '@/components/SectionInner.vue'
import SectionMain from '@/components/SectionMain.vue'
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  name: 'Actor',
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
        media: 'person', 
        category: 'popular',
    });
    },
  },
  computed: {
    ...mapState(["datas"]),
  }
}
</script>
