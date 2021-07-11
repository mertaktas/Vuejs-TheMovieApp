<template>
<SectionInner/>
<SectionMain :datas="showsdata" title="Shows" />

</template>

<script>
import axios from 'axios';
import SectionInner from '@/components/SectionInner.vue'
import SectionMain from '@/components/SectionMain.vue'

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
  mounted () {
    axios
      .get('https://api.themoviedb.org/3/tv/popular?api_key=75019398caf1e5d87c0e4198fc9f17e2')
      .then(response => (this.showsdata = response.data.results))
  }
}
</script>
