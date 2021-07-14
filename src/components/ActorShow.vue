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
        <div class="profile-content-info">
            <div class="content-title">
                <h2>
                    Scarlett Johansson
                </h2>
                <span class="bio">
                    <h3>Biography</h3>
                    <p>
                        Scarlett Johansson, born November 22, 1984, is an American actress, model and singer. She made her film debut in North (1994) and was later nominated for the Independent Spirit Award for Best Female Lead for her performance in Manny &amp; Lo (1996), garnering further acclaim and prominence with roles in The Horse Whisperer (1998) and Ghost World (2001). She shifted to adult roles with her performances in Girl with a Pearl Earring (2003) and Sofia Coppola's Lost in Translation (2003), for which she won a BAFTA award for Best Actress in a Leading Role; both films earned her Golden Globe Award nominations as well.</p><p>A role in A Love Song for Bobby Long (2004) earned Johansson her third Golden Globe for Best Actress nomination. Johansson garnered another Golden Globe nomination for Best Supporting Actress with her role in Woody Allen's Match Point (2005). She has played the Marvel comic book character Black Widow/Natasha Romanoff in Iron Man 2 (2010), The Avengers (2012), and Captain America: The Winter Soldier (2014), Avengers: Age of Ultron (2015), Captain America: Civil War (2016), Avengers: Infinity War (2018), Avengers: Endgame (2019), and Black Widow (2020). The 2010 Broadway revival of Arthur Miller's A View From the Bridge won Johansson the Tony Award for Best Performance by a Featured Actress in a Play. As a singer, Johansson has released two albums, Anywhere I Lay My Head and Break Up.</p><p>Johansson was nominated for two Academy Awards in 2020 for her work in Marriage Story (2019), and Jojo Rabbit (2019).  Johansson was born in New York City. Her father, Karsten Johansson, is a Danish-born architect, and her paternal grandfather, Ejner Johansson, was a screenwriter and director. Her mother, Melanie Sloan, a producer, comes from an Ashkenazi Jewish family from the Bronx. Johansson has an older sister, Vanessa, who is an actress; an older brother, Adrian; a twin brother, Hunter (who appeared in the film Manny &amp; Lo with Scarlett); and a half-brother, Christian, from her father's re-marriage .
                    </p>
                </span>
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