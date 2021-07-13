<template>
  <div class="footer">
         <div class="nav">
            <div class="join">
               <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="">
            </div>
            <div>
               <h3>The Basics</h3>
               <ul>
                  <li><a >About TMDb</a></li>
                  <li><a >Contact Us</a></li>
                  <li><a >Support Forums</a></li>
                  <li><a >API</a></li>
                  <li><a >System Status</a></li>
               </ul>
            </div>
            <div>
               <h3>The Basics</h3>
               <ul>
                  <li><a >About TMDb</a></li>
                  <li><a >Contact Us</a></li>
                  <li><a >Support Forums</a></li>
                  <li><a >API</a></li>
                  <li><a >System Status</a></li>
               </ul>
            </div>
            <div>
               <h3>The Basics</h3>
               <ul>
                  <li><a >About TMDb</a></li>
                  <li><a >Contact Us</a></li>
                  <li><a >Support Forums</a></li>
                  <li><a >API</a></li>
                  <li><a >System Status</a></li>
               </ul>
            </div>
            <div>
               <h3>The Basics</h3>
               <ul>
                  <li><a >About TMDb</a></li>
                  <li><a >Contact Us</a></li>
                  <li><a >Support Forums</a></li>
                  <li><a >API</a></li>
                  <li><a >System Status</a></li>
               </ul>
            </div>
         </div>
      </div>
</template>

<script>
export default {
    name: 'footer',

}
</script>

<style lang="scss" scoped>
.footer {
  max-width: 100%;
  width: 100vw;
  background-image: radial-gradient(at 30% top, #031d33 0%, #032541 70%);
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-line-pack: justify;
  align-content: space-between;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  .nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    padding-top: 80px;
    padding-bottom: 80px;
    color: #fff;
    font-size: 0.9em;

    .join {
      margin-right: 40px;
    }
      img {
        width: 130px;
      }
    div {
      margin-right: 40px;
    
      h3 {
        font-weight: bold;
        font-size: 1.4em;
        line-height: 1.4em;
        text-transform: uppercase;
        color: #fff;
        white-space: nowrap;
      }
      ul {
        list-style-type: none;

        li {
          line-height: 1.6em;
          max-width: 260px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #fff;
          font-size: .9em;

          a {
            font-size: 1.2em;
            line-height: 1.6em;
          }
        }
      }
    }
  }
}
</style>