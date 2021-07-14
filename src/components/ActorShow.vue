<template>
  <div class="actor-page">
    <div class="content">
        <div class="profile_column">
            <div class="image">
                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg" alt="" srcset="">
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
                            Acting
                        </p>
                        <p>
                            <strong>
                                <bdi>Known Credits</bdi>
                            </strong>
                            <br> 
                            142
                        </p>
                        <p>
                            <strong>
                                <bdi>Gender</bdi>
                            </strong>
                            <br> 
                            Female
                        </p>
                        <p>
                            <strong>
                                <bdi>Birthday</bdi>
                            </strong>
                            <br> 
                            1984-11-22 (36 years old)
                        </p>
                        <p>
                            <strong>
                                <bdi>Place of Birth</bdi>
                            </strong>
                            <br> 
                            New York City, New York, USA
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'actor-show'
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
    }
}
</style>