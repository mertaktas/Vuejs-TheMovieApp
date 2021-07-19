<template>
  <!--Section Main-->
<div class="section-main container">
   <div class="content-inner">
      <div class="content-header">
         <h2>{{ title }}</h2>
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
import { mapActions, mapMutations, mapState } from 'vuex'

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
      ...mapActions(['fetchMovies','fetchTrending']),
      ...mapMutations(['CARD_LOADED']),
      event(e) {
        if(e == 'Movies') {
          this.CARD_LOADED();
          this.fetchMovies({ 
            media: 'movie', 
            category: 'popular',
          });
        }
        else if(e == 'On TV') {
          this.CARD_LOADED();
          this.fetchMovies({ 
            media: 'tv', 
            category: 'popular',
          });
        }
        else if(e == 'Actors') {
          this.CARD_LOADED();
          this.fetchMovies({ 
            media: 'person', 
            category: 'popular',
          });
        }
        else if(e == 'Today') {
          this.CARD_LOADED();
          this.fetchTrending('day')
        }
        else if(e == 'This Week') {
          this.CARD_LOADED();
          this.fetchTrending('week')
        }
      }
    },
    computed: {
      ...mapState(["datas"]),
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
          a {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>