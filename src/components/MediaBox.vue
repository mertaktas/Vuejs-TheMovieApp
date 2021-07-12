<template>
  <div class="media">
    <Card v-for="(data, index) in datas" :data="data" :key="index" />
   </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
    name: 'mediaBox',
    props: {
      datas: Object,
    },
    components: {
        Card,
    }
}
</script>

<style lang="scss" scoped>

  .media {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 40px;
    margin-bottom: 10px;
  }
</style>