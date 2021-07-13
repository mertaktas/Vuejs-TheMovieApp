<template>
  <div class="media">
      <div v-show="!datas" class="loading" :key="i" v-for="i in 20">
        <div class="wrapper">
          <div class="card-loader card-loader--tabs">
          <div class="card-paragh"></div>
          <div class="card-date"></div>
          </div>
        </div>
      </div>
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
.loading {
  display: flex;
  flex-wrap: wrap;
      margin-left: 20px;

}
.wrapper {
  display: block;
  margin: 0 auto;
  margin-bottom: 40px;
}
.card-paragh {
  margin-top: 10px;
  border-radius: 8px;
  width: 150px;
  content: '';
  height: 10px;
  display: block;
  background-color: #ededed;
}
.card-date {
  margin-top: 10px;
  border-radius: 8px;
  width: 70px;
  content: '';
  height: 10px;
  display: block;
  background-color: #ededed;
}
.card-loader {
  background-color: #fff;
  position: relative;
  border-radius: 2px;
  margin-bottom: 0;
  height: 310px;
  width: 150px;
  overflow: hidden;

  &:only-child {
    margin-top:0;
  }

  &:before {
    border-radius: 8px;
    width: 150px;
    content: '';
    height: 220px;
    display: block;
    background-color: #ededed;
  }

  &:after {
    content: '';
    background-color: #333;
    width: 100%;
    height: 310px;
    position: absolute;
    top: 0;
    left: 0;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-name: loader-animate;
    animation-timing-function: linear;
    background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 81%);
    background: -o-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 81%);
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 81%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#00ffffff',GradientType=1 );
  }
}
 

// Loader animation
@keyframes loader-animate{
 0%{
    transform: translate3d(-100%, 0, 0);
  }
 100%{
    transform: translate3d(100%, 0, 0);
  }
}
.media {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 40px;
    margin-bottom: 10px;
  }
</style>