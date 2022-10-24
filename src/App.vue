<template>
  <mainNav></mainNav>
  <router-view></router-view>
</template>

<script>
import mainNav from './components/Nav.vue'


export default {
  name: 'MyApp',
  components:{
    mainNav
}
}

</script>