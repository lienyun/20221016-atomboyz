<template>
  <PageLoader v-if="!isLoaded"></PageLoader>
  <mainNav></mainNav>
  <router-view v-if="isLoaded"></router-view>
  <PickBtn></PickBtn>
</template>

<script>
import mainNav from './components/Nav.vue'
import PageLoader from './components/PageLoader.vue'
import PickBtn from './components/PickBtn.vue'

export default {
  name: 'MyApp',
  components: {
    mainNav,
    PageLoader,
    PickBtn
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