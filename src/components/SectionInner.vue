<template>
  <div class="section-inner-content">
   <div class="media">
      <div class="content">
         <div class="title">
            <h2>Welcome.</h2>
            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
         </div>
         <div class="search">
            <form id="inner_search_form">
               <label>
               <input id="inner_search" v-model="query" name="query" type="text"  placeholder="Search for a movie, tv show, person......">
               </label>
               <router-link :to="{name: 'Search' }">
                <input @click="searchData" class="submit" type="submit" value="Search">
               </router-link>
            </form>
         </div>
      </div>
   </div>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name:'sectionInner',
    data() {
      return {
        query: null
      }
    },
    methods: {
      ...mapActions(["getSearchData"]),
      searchData() {
        this.getSearchData(this.query);
      }
    }

}
</script>

<style lang="scss" scoped>
.section-inner-content {
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(3, 37, 65, 0.8)), to(rgba(3, 37, 65, 0))), url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/kSNojkWwSZWsYv0Xj1gcq88okzY.jpg");
  background-image: linear-gradient(to right, rgba(3, 37, 65, 0.8) 0%, rgba(3, 37, 65, 0) 100%), url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/kSNojkWwSZWsYv0Xj1gcq88okzY.jpg");
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 300px;
  height: calc(100vh / 2.5);
  max-height: 360px;
  background-position: 20px center -20px center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;

  .media {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-line-pack: center;
    align-content: center;

    .content {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      width: 100%;
      padding: 30px 60px;

      .title {
        margin-bottom: 20px;
        color: #fff;

        h2 {
          font-size: 3em;
          font-weight: 700;
          line-height: 1;
        }
        h3 {
          font-size: 2em;
          font-weight: 600;
          margin: 0;
        }
      }
      .search {
        margin-top: 30px;
        width: 100%;

        #inner_search_form {
          position: relative;

          label {
            color: #fff;

            #inner_search {
              width: 100%;
              height: 46px;
              line-height: 46px;
              font-size: 1.1em;
              color: rgba(0, 0, 0, 0.5);
              border: none;
              border-radius: 30px;
              padding: 10px 20px;
            }
          }
          .submit {
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-line-pack: center;
            align-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 46px;
            padding: 10px 26px;
            border: none;
            background: -webkit-gradient(linear, left top, right top, from(#1ed5a9), to(#01b4e4));
            background: linear-gradient(to right, #1ed5a9 0%, #01b4e4 100%);
            border-radius: 30px;
            position: absolute;
            top: 0;
            right: -1px;
            color: #fff;
            font-weight: 700;
            cursor: pointer;
          }
        }
      }
    }
  }
}

</style>