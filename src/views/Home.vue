<template>
<SectionInner/>
<SectionMain title="What's Popular" :selectors="popularselector"/>
<SectionMain title="Trending" :selectors="trendingselector" />

</template>

<script>
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
      ]
    }
  },
  name: 'home',
  components: {
    SectionInner,
    SectionMain
  }
}
</script>
