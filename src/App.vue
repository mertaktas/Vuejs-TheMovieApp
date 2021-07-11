<template>

   <Navigation/>
   <Home />
   <Footer />

</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/views/Home.vue'
export default {
   components: {
      Navigation,
      Home,
      Footer,
   }
}
</script>

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

</style>
