<template>
<SectionInner/>
<SectionMain :datas="datas" title="Actors" />

</template>

<script>
import axios from 'axios';
import SectionInner from '@/components/SectionInner.vue'
import SectionMain from '@/components/SectionMain.vue'
import { mapActions, mapState } from 'vuex'


export default {
  data() {
    return {
      actorsData: null,
    }
  },
  name: 'Actor',
  components: {
    SectionInner,
    SectionMain
  },
  created () {
    this.getMovies();
  },
  methods: {
    ...mapActions(['fetchMovies',]),
    getMovies(){
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
