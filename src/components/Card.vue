<template>
<router-link  :to="{name: 'media-show', params:{ id: data.id , media: data.media_type } }">
      <div class="card">
         <div class="image">
            <a href="#">
            <img class="poster" :src="'https://image.tmdb.org/t/p/w500'+ (data.poster_path || data.profile_path)">
            </a>
         </div>
         <div class="content">
            <div v-show="data.vote_average" class="voting">
               <span class="percent">{{ data.vote_average }}</span>
            </div>
            <h2>
               <a>
               {{ data.title || data.original_name || data.name }}
               </a>
            </h2>
            <p>{{ data.release_date || data.first_air_date || data.known_for_department }}</p>
         </div>
      </div>
</router-link>
</template>

<script>
export default {
    name: 'card',
    props: {
      data: Object,
    },
    data () {
      return {
        cardLoading : true
      }
    },
    mounted() {
      if(this.data) {
        this.cardLoading = false
        console.log(this.data)
      }
    }
}
</script>

<style lang="scss" scoped>

    .card {
      position: relative;
      margin-left: 20px;
      width: 150px;
      min-width: 150px;
      background: transparent;

      .image {
        border-radius: 8px;
        width: 100%;
        min-height: calc(150px * 1.5);
        height: calc(150px * 1.5);
        background: #dbdbdb;
        overflow: hidden;

        a {
          display: inline-block;
          width: 100%;
          height: 100%;

          .poster {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
      }
      .content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-line-pack: start;
        align-content: flex-start;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        color: #000;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        width: 100%;
        padding: 26px 10px 12px 10px;

        .voting {
          position: absolute;
          top: -19px;
          left: 10px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #081c22;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          z-index: 2;
          padding: 2px;
          white-space: normal;

          .percent {
            font-size: 1em;
            color: #fff;
            text-align: center;
            font-weight: normal;

            &::before {
              content: '%';
              position: absolute;
              top: 5px;
              right: 5px;
              font-size: 0.5em;
            }
          }
        }
        h2 {
          font-size: 1em;
          overflow-wrap: break-word;
          white-space: normal;

          a {
            font-weight: 700;
            color: #000;
            text-decoration: none;
          }
        }
        p {
          font-size: 1em;
          color: rgba(0, 0, 0, 0.6);
          white-space: normal;
        }
      }
    }
</style>