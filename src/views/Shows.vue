<template>
  <SectionInner/>
  <SectionMain :datas="datas" title="Shows" />
</template>

<script>
import SectionInner from '@/components/SectionInner.vue'
import SectionMain from '@/components/SectionMain.vue'
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  name: 'Shows',
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
        media: 'tv', 
        category: 'popular',
    });
    },
  },
  computed: {
    ...mapState(["datas"]),
  }
}
</script>
