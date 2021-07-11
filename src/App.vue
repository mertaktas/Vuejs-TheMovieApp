<template>
<!-- Header  -->
<div class="header">
   <div class="navbar">
      <a href="#" class="logo">
      <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="">
      </a>
      <ul class="menu-links">
         <li class="menu-link"><a href="#">Movies</a></li>
         <li class="menu-link"><a href="#">Movies</a></li>
         <li class="menu-link"><a href="#">Movies</a></li>
         <li class="menu-link"><a href="#">Movies</a></li>
      </ul>
   </div>
</div>
<!-- Section İnner -->
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
               <input id="inner_search" name="query" type="text"  placeholder="Search for a movie, tv show, person......" value="">
               </label>
               <input class="submit" type="submit" value="Search">
            </form>
         </div>
      </div>
   </div>
</div>
<!--Section Main-->
<div class="section-main">
   <div class="content-inner">
      <div class="content-header">
         <h2>What's Popular</h2>
         <div class="selector">
            <h3 class="selector-item">
               <a href="#">Streaming</a>
            </h3>
            <h3 class="selector-item">
               <a href="#">Streaming</a>
            </h3>
            <h3 class="selector-item">
               <a href="#">Streaming</a>
            </h3>
            <h3 class="selector-item">
               <a href="#">Streaming</a>
            </h3>
         </div>
      </div>
   </div>
   <div class="media">
      <div class="card">
         <div class="image">
            <a href="#">
            <img class="poster" src="https://www.themoviedb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg">
            </a>
         </div>
         <div class="content">
            <div class="voting">
               <span class="percent">84</span>
            </div>
            <h2>
               <a href="#">
               Game of Thrones
               </a>
            </h2>
            <p>Apr 17, 2011</p>
         </div>
      </div>
      <div class="card">
         <div class="image">
            <a href="#">
            <img class="poster" src="https://www.themoviedb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg">
            </a>
         </div>
         <div class="content">
            <div class="voting">
               <span class="percent">84</span>
            </div>
            <h2>
               <a href="#">
               Game of Thrones
               </a>
            </h2>
            <p>Apr 17, 2011</p>
         </div>
      </div>
      <div class="card">
         <div class="image">
            <a href="#">
            <img class="poster" src="https://www.themoviedb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg">
            </a>
         </div>
         <div class="content">
            <div class="voting">
               <span class="percent">84</span>
            </div>
            <h2>
               <a href="#">
               Game of Thrones
               </a>
            </h2>
            <p>Apr 17, 2011</p>
         </div>
      </div>
      <div class="card">
         <div class="image">
            <a href="#">
            <img class="poster" src="https://www.themoviedb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg">
            </a>
         </div>
         <div class="content">
            <div class="voting">
               <span class="percent">84</span>
            </div>
            <h2>
               <a href="#">
               Game of Thrones
               </a>
            </h2>
            <p>Apr 17, 2011</p>
         </div>
      </div>
      <div class="card">
         <div class="image">
            <a href="#">
            <img class="poster" src="https://www.themoviedb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg">
            </a>
         </div>
         <div class="content">
            <div class="voting">
               <span class="percent">84</span>
            </div>
            <h2>
               <a href="#">
               Game of Thrones
               </a>
            </h2>
            <p>Apr 17, 2011</p>
         </div>
      </div>
      <div class="card">
         <div class="image">
            <a href="#">
            <img class="poster" src="https://www.themoviedb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg">
            </a>
         </div>
         <div class="content">
            <div class="voting">
               <span class="percent">84</span>
            </div>
            <h2>
               <a href="#">
               Game of Thrones
               </a>
            </h2>
            <p>Apr 17, 2011</p>
         </div>
      </div>
      <div class="card">
         <div class="image">
            <a href="#">
            <img class="poster" src="https://www.themoviedb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg">
            </a>
         </div>
         <div class="content">
            <div class="voting">
               <span class="percent">84</span>
            </div>
            <h2>
               <a href="#">
               Game of Thrones
               </a>
            </h2>
            <p>Apr 17, 2011</p>
         </div>
      </div>
   </div>
</div>

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');

* {
    padding: 0;
    margin: 0;
    list-style: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    font-family: 'Source Sans Pro', sans-serif;
    &:focus {
        outline: 0;
    }
}

body {
    color: #000;
    font-size: 1em;
    width: 100%;
    height: 100%;
}
// Header css
.header {
    display: flex;
    align-items: center;
    position: block;
    z-index: 10;
    background-color: rgba(3,37,65,1);
    height: 64px;
    width: 100%;
}
.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 60px;
    .logo {
        img {
            height: 20px;
            display: block;
            margin-right: 1em;
        }
    }
}
    .menu-links {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1.5em;
        .menu-link {
            margin-right: 14px;
            a {
                font-weight: 600;
                color: #fff;
                padding: 0.5em;
            }
        }
}
// Section İnner Css
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
// Section Main
.section-main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-top: 30px;
  font-size: 1em;
  width: 100%;

  .content-inner {
    width: 100%;

    .content-header {
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      padding: 0 60px;

      h2 {
        margin-right: 20px;
        white-space: nowrap;
        font-size: 1.5em;
        font-weight: 600;
        color: #000;
      }
      .selector {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        -ms-flex-line-pack: center;
        align-content: center;
        border: 1px solid #032541;
        border-radius: 30px;
        color: #000;

        .selector-item {
          display: -webkit-inline-box;
          display: -ms-inline-flexbox;
          display: inline-flex;
          -ms-flex-line-pack: center;
          align-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          font-size: 1em;
          padding: 4px 20px;
          margin-bottom: 0;
          white-space: nowrap;
          font-weight: 600;
          background: transparent;
        }
      }
    }
  }
  .media {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    padding: 20px 40px;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 340px;
    margin-bottom: 10px;

    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #dbdbdb;
      border-radius: 20px;
    }
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
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
  }
}

</style>
