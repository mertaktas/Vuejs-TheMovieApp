<template>
  <!--Section Main-->
<div class="section-main">
   <div class="content-inner">
      <div class="content-header">
         <h2>{{ title }}</h2>
         <div> {{ selectors }} </div>
          <div v-if="selectors" class="selector" >
              <h3 class="selector-item" :key="sel" v-for="sel in selectors">
                <a @click="event(sel)" >{{ sel }}</a>
              </h3>
          </div>
      </div>
   </div>
   <MediaBox :datas="datas" />
</div>
<div>
</div>
</template>

<script>
import MediaBox from '@/components/MediaBox.vue'
import { mapActions } from 'vuex';
export default {
    name: 'sectionMain',
    props: {
      title : String,
      selectors: Array,
      datas: Object
    },
    components: {
        MediaBox,
    },
    methods: {
      ...mapActions(['fetchPopular','fetchPopularShows','fetchPopularActors','fetchTodayTrending','fetchWeekTrending']),
      event(e) {
        if(e == 'Movies') {
          console.log(e)
          this.fetchPopular();
        }
        else if(e == 'On TV') {
          console.log(e)
          this.fetchPopularShows();
        }
        else if(e == 'Actors') {
          console.log(e)
          this.fetchPopularActors();
        }
        else if(e == 'Today') {
          console.log(e)
          this.fetchTodayTrending();
        }
        
        else if(e == 'This Week') {
          console.log(e)
          this.fetchWeekTrending();
        }
      }
    }
}
</script>

<style lang='scss' scoped>
// Section Main
.section-main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-top: 30px;
  font-size: 1em;
  width: 100%;

  .content-inner {
    width: 100%;

    .content-header {
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      padding: 0 60px;

      h2 {
        margin-right: 20px;
        white-space: nowrap;
        font-size: 1.5em;
        font-weight: 600;
        color: #000;
      }
      .selector {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        -ms-flex-line-pack: center;
        align-content: center;
        border: 1px solid #032541;
        border-radius: 30px;
        color: #000;

        .selector-item {
          display: -webkit-inline-box;
          display: -ms-inline-flexbox;
          display: inline-flex;
          -ms-flex-line-pack: center;
          align-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          font-size: 1em;
          padding: 4px 20px;
          margin-bottom: 0;
          white-space: nowrap;
          font-weight: 600;
          background: transparent;
        }
      }
    }
  }
}
</style>