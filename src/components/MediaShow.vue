<template>
  <div class="header">
    <div class="custom_bg">
      <div class="original_header">
        <div class="poster_wrapper">
          <div class="poster">
            <img class="poster_img" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/z8CExJekGrEThbpMXAmCFvvgoJR.jpg">
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
                <a href="/movie/503736-army-of-the-dead">Army of the Dead</a>
                <span class="tag_release_date">(2021)</span>
              </h2>
              <div class="facts">
                <span class="sertification">
                  R
                </span>
                <span class="release">
                  05/14/2021 (US)
                </span>
                <span class="genre">
                  Action,Crime,Science
                </span>
                <span class="runtime">
                  2h 28m
                </span>
              </div>
            </div>
            <div class="score">
              <div class="consensus">
                65
              </div>
              <div class="text">
                User <br> Score
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
                <p>
                  Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.
                </p>
              </div>
              <ul class="people">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  display: block;
  width: 100%;
  height: 800px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/9WlJFhOSCPnaaSmsrv0B4zA8iUb.jpg");
  border-bottom: 1px solid #120d14;
  position: relative;
  .custom_bg {
    height: 100%;
    background-image: linear-gradient(to right, rgba(7.06%, 5.10%, 7.84%, 1.00) 150px, rgba(7.06%, 5.10%, 7.84%, 0.84) 100%);
    .original_header {
      max-width: 1200px;
      padding: 30px 40px;
      display: flex;
      flex-wrap: nowrap;
      .poster_wrapper {
        display: block;
        min-width: 300px;
        width: 300px;
        height: 450px;
        position: relative;
        top: 0;
        left: 0;
        border-radius: 8px;
        .poster {
          width: 100%;
          min-width: 100%;
          height: 100%;
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
          position: relative;
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
            .tagline {

            }
            .auto {

            }
            .overview {
              p {

              }
            }
            .people {
              .profile {
                p {

                }
              }
            }
          }
        }
      }
    }
  }
}





</style>