<template>
<!-- Header  -->
<div class="header">
   <div class="navbar">
       <router-link class="logo"  to='/'>

        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="">
       </router-link>
      <ul class="menu-links">
            <li class="menu-link">
                <router-link class="logo"  to='/movies'>
                    Movies
                </router-link>
            </li>
            <li class="menu-link">
                <router-link class="logo"  to='/shows'>
                    Tv Shows
                </router-link>
            </li>
            <li class="menu-link">
                <router-link class="logo"  to='/actors'>
                    Actors
                </router-link>
            </li>
      </ul>
   </div>
</div>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style lang="scss" scoped>

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

</style>