<template>
  <div class="media">
    <CardLoading v-show="!datas"  :key="i" v-for="i in 20" />
      
    <Card v-for="(data, index) in datas" :data="data" :key="index" />
   </div>
</template>

<script>
import Card from '@/components/Card.vue'
import CardLoading from '@/components/CardLoading.vue'
export default {
    name: 'mediaBox',
    props: {
      datas: Object,
    },
    components: {
        Card,
        CardLoading,
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