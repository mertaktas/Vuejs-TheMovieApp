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

      }
    }
  }
}





</style>