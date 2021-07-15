<template>
  <SectionInner />
    <ul v-show="searchData" class="search-section">
      <li :key="data.id" v-for="data in searchData" class="card-search">
        <img class="image-search" :src="'https://image.tmdb.org/t/p/w500'+ (data.poster_path || data.profile_path)">
        <div class="content-search">
          <div class="title-search">
            <div class="title">
              {{ data.name || data.title }}
            </div>
            <div class="release_date">
              {{ data.release_date || data.first_air_date }}
            </div>
          </div>
          <div class="overview">
            <p>
              {{ data.overview }}
            </p>
          </div>
        </div>
      </li>
    </ul>
</template>

<script>
import SectionInner from '@/components/SectionInner.vue'
import { mapState } from "vuex";
export default {
  components: {
    SectionInner,
  },
  computed: {
    ...mapState(['searchData'])
  }

}
</script>

<style lang="scss" scoped>
.search-section {
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: #000;
  flex-wrap: wrap;
  margin: 0 auto;
  .card-search {
    width: 47%;
    min-width: 500px;
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    border: 1px solid rgba( 227,227,227, 1);
    background-color: #fff;
    margin: 10px;
    .image-search {
      width: 150px;
      height: 225px;
    }
    .content-search {
      width: 100%;
      padding: 10px 15px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .title-search {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        overflow: hidden;
        color: #000;
        .title {
          width: 100%;
          font-size: 1.2em;
          line-height: 1.2em;
          margin-bottom: 0;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          overflow: hidden;
          margin: 0 0 4px 0;
          font-weight: 600;
        }
        .release_date {
          white-space: nowrap;
          color: #999;
        }
      }
      .overview {
        margin-top: 10px;
        height: auto;
        font-size: 1em;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        margin: 0;
        color: #000;
      }
    }
  }
}
</style>