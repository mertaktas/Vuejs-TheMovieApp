<template>
  <SectionInner />
  <div>
    <ul>
      <li v-for="search in this.$store.state.searchData" :key="search.id">
        <h4>

      {{ search.name }}
        </h4>
        <p>

      {{ search.overview }}
        </p>
      </li>
    </ul>
      Query : 
  </div>
</template>

<script>
import SectionInner from '@/components/SectionInner.vue'
export default {
  components: {
    SectionInner,
  },

}
</script>

<style>

</style>