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
