<template>
<router-link  :to="{name: 'media-show', params:{ id: data.id , media: data.media_type } }">
      <div class="card">
        <div v-show="cardLoading" class="wrapper">
          <div class="card-loader card-loader--tabs">
          <div class="card-paragh"></div>
          <div class="card-date"></div>
          </div>
        </div>

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
        cardLoading : false
      }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
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