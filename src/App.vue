<template>
  <mainNav></mainNav>
  <Artist></Artist>
</template>

<script>
import mainNav from './components/Nav.vue'
import Artist from './components/artists.vue';


export default {
  name: 'MyApp',
  components:{
    mainNav,
    Artist
}
}

</script>