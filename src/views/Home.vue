<template>
<SectionInner/>
<SectionMain />

</template>

<script>
import SectionInner from '@/components/SectionInner.vue'
import SectionMain from '@/components/SectionMain.vue'

export default {
  name: 'home',
  components: {
    SectionInner,
    SectionMain
  }
}
</script>
