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
    position: relative;
    padding: 20px 40px;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 340px;
    margin-bottom: 10px;

    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #dbdbdb;
      border-radius: 20px;
    }
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
  }
</style>