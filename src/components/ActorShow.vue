<template>
  <div v-if="showData" class="actor-page">
    <div class="content">
        <div class="profile_column">
            <div class="image">
                <img :src="'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'+ (showData.poster_path || showData.profile_path)" alt="" srcset="">
            </div>
            <div class="profile_info">
                <div class="info">
                    <h3 class="title">
                        Personal Info
                    </h3>
                    <div class="description">
                        <p>
                            <strong>
                                <bdi>Known For</bdi>
                            </strong>
                            <br> 
                            {{ showData.known_for_department }}
                        </p>
                        <!-- <p>
                            <strong>
                                <bdi>Known Credits</bdi>
                            </strong>
                            <br> 
                            142
                        </p> -->
                        <p>
                            <strong>
                                <bdi>Gender</bdi>
                            </strong>
                            <br> 
                            {{ showData.gender == 2 ? 'Male' : 'Female' }}
                        </p>
                        <p>
                            <strong>
                                <bdi>Birthday</bdi>
                            </strong>
                            <br>
                            {{ showData.birthday }}
                        </p>
                        <p>
                            <strong>
                                <bdi>Place of Birth</bdi>
                            </strong>
                            <br>
                            {{ showData.place_of_birth }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="profile-content-info">
            <div class="content-title">
                <h2>
                    {{ showData.name }}
                </h2>
                <span class="bio">
                    <h3>Biography</h3>
                    <p>
                        {{ showData.biography }}
                    </p>
                </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data () {
    return {
      data: this.showData,
    }
  },
  created () {
    this.showingActorData();
  },
  methods: {
    ...mapActions(['fetchActorShow']),
    showingActorData() {
      this.fetchActorShow(this.$route.params.id);
    }
  },
  computed: {
    ...mapState(['showData'])
  }
}
</script>

<style lang="scss" scoped>
.actor-page {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    color: #000;
    font-size: 1em;
    .content {
        max-width: 1200px;
        width: 100%;
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        padding: 30px 40px;
        .profile_column {
            min-width: 300px;
            width: 300px;
            justify-content: flex-end;
            display: flex;
            flex-wrap: wrap;
            .image {
                img {
                    display: block;
                    border-radius: 8px;
                    width: 100%;
                    min-width: 100%;
                    height: 100%;
                    min-height: 100%;
                    border-width: 0px;
                    outline: none;
                }
            }
            .profile_info {
                width: 100%;
                margin-top: 30px;
                .info {
                    color:#000;
                    .title {
                        font-weight: 600;
                        font-size: 1.3em;
                        margin-bottom: 8px;

                    }
                    .description {
                        display: block;
                        p {
                            margin: 0 0 20px 0;
                            font-size: 1em;
                            color: #000;
                        }
                    }
                }
            }
        }
        .profile-content-info {
            max-width: 920px;
            width: calc(100vw - 80px - 300px);
            padding-left: 30px;
            display: flex;
            flex-wrap: wrap;
            .content-title {
                width: 100%;
                color: #000;
                h2 {
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: #000;
                }
                .bio {
                    color:#000;
                    margin-top: 30px;
                    width: 100%;
                    h3 {
                        font-weight: 600;
                        font-size: 1.3em;
                        margin-bottom: 8px;
                    }
                    p {
                        max-height: 222px;
                        line-height: 1.4em;
                    }
                }
            }
        }
    }
}
</style>