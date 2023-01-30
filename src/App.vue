<template>
  <PageLoader v-if="!isLoaded"></PageLoader>
  
  <mainNav></mainNav>
  <!-- <Carousel></Carousel> -->
  <router-view v-if="isLoaded"></router-view>
  <PickBtn></PickBtn>
</template>

<script>
import mainNav from './components/Nav.vue'
import PageLoader from './components/PageLoader.vue'
import PickBtn from './components/PickBtn.vue'
import Carousel from './components/Carousel.vue'


export default {
  name: 'MyApp',
  components: {
    mainNav,
    PageLoader,
    PickBtn,
    Carousel
  },
  data(){
    return{
      isLoaded: false
    }
  },
   mounted(){
    setTimeout(()=>{
      console.log('loaded')
      this.isLoaded = true
    },3000)
    this.$store.dispatch('getAllBoyz')
  },
}

</script>

<style lang="scss">
$colorRed: #F06060;

::selection {
  background-color: $colorRed;
  color: white;
}

</style>