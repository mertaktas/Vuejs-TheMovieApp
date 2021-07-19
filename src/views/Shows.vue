<template>
<SectionInner/>
<SectionMain :datas="datas" title="Shows" />

</template>

<script>
import axios from 'axios';
import SectionInner from '@/components/SectionInner.vue'
import SectionMain from '@/components/SectionMain.vue'
import { mapActions, mapState } from 'vuex'


export default {
  data() {
    return {
      showsdata: null,
    }
  },
  name: 'Shows',
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
