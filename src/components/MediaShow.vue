<template>
  <div v-if="showData" class="header" :style="{backgroundImage:`url(${backgroundImg}${showData.backdrop_path})`}" >
        <div class="custom_bg">
          <div class="original_header">
            <div class="poster_wrapper">
              <div class="poster">
                <img class="poster_img" :src="'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'+ (showData.poster_path || showData.profile_path)">
              </div>
              <div class="other">
                <div class="button">
                  <div class="provider">
                    <img src="https://www.themoviedb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg">
                  </div>
                  <div class="text">
                    <span>
                      <h4>Now Streaming</h4>
                      <h3>
                        <a href="#">
                          Watch Now
                        </a>
                      </h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="header_wrapper">
              <div class="header-section">
                <div class="header-title">
                  <h2>
                    <a href=""> {{ showData.original_title }} </a>
                    <span class="tag_release_date">({{ showData.release_date.slice(0, 4) }})</span>
                  </h2>
                  <div class="facts">
                    <span class="release">
                      {{ showData.release_date }} ({{ showData.production_companies[0].origin_country }})
                    </span>
                    <span class="genre">
                      {{ showData.genres[0].name }}
                    </span>
                    <span class="runtime">
                      {{ showData.runtime }}m
                    </span>
                  </div>
                </div>
                <div class="score">
                  <div class="consensus">
                    {{ showData.vote_average * 10 }}
                  </div>
                  <div class="text">
                    User Score
                  </div>
                </div>
                <div class="header-info">
                  <h3 class="tagline">
                    Survivors take all.
                  </h3>
                  <h3 class="auto">
                    Overview
                  </h3>
                  <div class="overview">
                    <p> {{ showData.overview }} </p>
                   </div>
                  <!--<ul class="people">
                    <div class="profile">
                      <p>
                        Zack Synder
                      </p>
                      <p>
                        Director, Screenplay, Story
                      </p>
                    </div>
                    <div class="profile">
                      <p>
                        Zack Synder
                      </p>
                      <p>
                        Director, Screenplay, Story
                      </p>
                    </div>
                    <div class="profile">
                      <p>
                        Zack Synder
                      </p>
                      <p>
                        Director, Screenplay, Story
                      </p>
                    </div>
                  </ul> -->
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
  <!-- <div class="cast-section">
        <div class="column">
          <div class="top-billed">
            <h3>Top Billed Cast</h3>
            <ul>
              <li>
                <a href="">
                  <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/ymn6iQBJbQZN6BYI60YJDXVP4gF.jpg" alt="">
                </a>
                <p>Dave Bautista</p>
                <p class="character">Scott Ward</p>
              </li>
              <li>
                <a href="">
                  <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/ymn6iQBJbQZN6BYI60YJDXVP4gF.jpg" alt="">
                </a>
                <p>Dave Bautista</p>
                <p class="character">Scott Ward</p>
              </li>
              <li>
                <a href="">
                  <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/ymn6iQBJbQZN6BYI60YJDXVP4gF.jpg" alt="">
                </a>
                <p>Dave Bautista</p>
                <p class="character">Scott Ward</p>
              </li>
              <li>
                <a href="">
                  <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/ymn6iQBJbQZN6BYI60YJDXVP4gF.jpg" alt="">
                </a>
                <p>Dave Bautista</p>
                <p class="character">Scott Ward</p>
              </li>
              <li>
                <a href="">
                  <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/ymn6iQBJbQZN6BYI60YJDXVP4gF.jpg" alt="">
                </a>
                <p>Dave Bautista</p>
                <p class="character">Scott Ward</p>
              </li>
              <li>
                <a href="">
                  <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/ymn6iQBJbQZN6BYI60YJDXVP4gF.jpg" alt="">
                </a>
                <p>Dave Bautista</p>
                <p class="character">Scott Ward</p>
              </li>
              <li>
                <a href="">
                  <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/ymn6iQBJbQZN6BYI60YJDXVP4gF.jpg" alt="">
                </a>
                <p>Dave Bautista</p>
                <p class="character">Scott Ward</p>
              </li>
            </ul>
          </div>
        </div>
      </div> -->
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data () {
    return {
      backgroundImg: 'https://image.tmdb.org/t/p/w500',
      value: {
        id: this.$route.params.id,
        cat: this.$route.params.cat,
      }
    }
  },
  created () {
    this.showingMediaData();
  },
  methods: {
    ...mapActions(['fetchMediaShow']),
    showingMediaData() {
      this.fetchMediaShow(this.value);
    }
  },
  computed: {
    ...mapState(['showData'])
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: block;
  width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 1px solid #120d14;
  .custom_bg {
    height: 100%;
    background-image: linear-gradient(to right, rgba(7.06%, 5.10%, 7.84%, 1.00) 150px, rgba(7.06%, 5.10%, 7.84%, 0.84) 100%);
    .original_header {
      margin: 0 auto;
      max-width: 1200px;
      height: auto;
      padding: 30px 40px;
      display: flex;
      .poster_wrapper {
        display: block;
        min-width: 300px;
        width: 300px;
        height: auto;
        position: relative;
        top: 0;
        left: 0;
        border-radius: 8px;
        .poster {
          width: 100%;
          min-width: 100%;
          height: auto;
          .poster_img {
            display: block;
            width: 100%;
            min-width: 100%;
            height: 100%;
            min-height: 100%;
            border-width: 0px;
            outline: none;
            border: 0;
            border-radius: 8px;
          }
        }
        .other {
          top: 0;
          left: 0;
          width: 100%;
          background-color: rgba(3,37,65, 1);
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom-right-radius: 8px;
          border-bottom-left-radius: 8px;
          color: #fff;
          box-sizing: border-box;
          .button {
            display: flex;
            justify-content: center;
            height: 60px;
            width: 100%;
            .provider {
              display: flex;
              align-content: center;
              align-items: center;
              padding-right: 8px;
              img {
                border-radius: 4px;
                width: 36px;
                height: 36px;
                margin-right: 4px;
              }
            }
            .text {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              align-content: center;
              color: #fff;
              span {
                width: 100%;
                h4 {
                  line-height: 1em;
                  display: block;
                  opacity: 0.8;
                  font-weight: 400;
                  margin: 0;
                }
                h3 {
                  display: block;
                  font-size: 1em;
                  line-height: 1em;
                  margin: 0;
                  font-weight: 600;
                  color: #fff;
                  a {
                    text-decoration: none;
                    color: #fff;
                    font-size: 1em;
                    line-height: 1em;
                  }
                }
              }
            }
          }
        }
      }
      .header_wrapper {
        color: #fff;
        display: flex;
        font-size: 1em;
        .header-section {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          align-content: center;
          box-sizing: border-box;
          padding-left: 40px;
          .header-title {
            width: 100%;
            margin-bottom: 24px;
            display: flex;
            flex-wrap: wrap;
            h2 {
              width: 100%;
              margin: 0;
              padding: 0;
              font-size: 2.2rem;
              a {
                font-weight: 700;
                color: #fff;
                text-decoration: none;
                background: transparent;
                font-size: 2.2rem;
                margin-right: 4px;

              }
              .tag_release_date {
                opacity: 0.8;
                font-weight: 400;
                font-size: 2.2rem;
              }
            }
            .facts {
              display: flex;
              color:#fff;
              font-size: 1em;
              .sertification {
                border: 1px solid rgba(255,255,255,0.6);
                color: rgba(255,255,255,0.6);
                display: inline-flex;
                white-space: nowrap;
                align-items: center;
                align-content: center;
                padding: 0.06em 4px 0.15em 4px !important;
                line-height: 1;
                border-radius: 2px;
                margin-right: 7px;
              }
              .release {
                color: #fff;
                font-size: 1em;
              }
              .genre {
                padding-left: 20px;
                color: #fff;

              }
              .runtime {
                padding-left: 20px;

              }
            }
          }
          .score {
            margin-bottom: 20px;
            width: 100%;
            height: 68px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .consensus {
            font-size: 1em;
            color: #fff;
            text-align: center;
            font-weight: normal;
            position: relative;
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
            font-weight: 700;

            &::before {
              content: '%';
              position: absolute;
              top: 7px;
              right: 4px;
              font-size: 0.5em;
              }
            }
            .text {
              font-weight: 700;
              margin-left: 10px;
              white-space: pre-line;
              color: #fff;
            }
          }
          .header-info {
            color: #fff;
            width: 100%;
            .tagline {
              color: #fff;
              margin-bottom: 0;
              font-size: 1.1em;
              font-weight: 400;
              font-style: italic;
              opacity: 0.7;
              width: 100%;
              margin: 0 0 8px 0;
            }
            .auto {
              margin-top: 10px;
              width: 100%;
              margin: 0 0 8px 0;
              color: #fff;
              font-weight: 600;
              font-size: 1.3em;
            }
            .overview {
              color: #fff;
              font-size: 1em;
            }
            .people {
              color: #fff;
              margin-top: 20px;
              justify-content: flex-start;
              flex-wrap: wrap;
              list-style-type: none;
              list-style-position: inside;
              display: flex;
              position: relative;
              .profile {
                background: transparent;
                height: auto;
                width: 33%;
                flex-basis: 33%;
                text-align: left;
                margin-bottom: 14px;
                margin-right: 0;
                padding-right: 20px;
                p:nth-child(1) {
                  font-weight: 700;
                }
              }
            }
          }
        }
      }
    }
  }
}
.cast-section {
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0 auto;
  .column {
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    .top-billed {
        width: 100%;
        display: block;
      h3 {
        font-weight: 600;
        font-size: 1.4em;
        margin-bottom: 20px;
      }
      ul {
        padding-bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        li {
          margin-top: 10px;
          margin-bottom: 10px;
          margin-right: 4px;
          border: 1px solid rgba(227,227,227, 1);
          padding-bottom: 10px;
          border-radius: 8px;
          overflow: hidden;
          min-width: 140px;
          width: 140px;
          background-color: #fff;
          margin-right: 10px;
          a {
            min-width: 138px;
            width: 138px;
            height: 175px;
            display: block;
            background: transparent;
            img {
              width: 100%;
              height: 100%;
            }
          }
          p {
            padding: 10px 10px 0 10px;
            font-size: 1em;
            color: #000;
          }
          .character {
            font-size: 0.9em;
            padding: 0 10px;
          }
        }
      }
    }
  }
}

</style>