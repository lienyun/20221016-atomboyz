<template>
  <div class="buttons">
    <div class="button" v-for="(planet,i) in planetList" :key="i">
      <button @click="changePlanet(planet)">{{ planet }}</button>
    </div>

  </div>


</template>

<script>
export default {
  name: 'planetVue',
  data() {
    return {
      planetList: ['水星', '金星', '木星', '土星', '火星', '地球', '天王星', '海王星']
    }
  },
  mounted() {

  },
  methods: {
    changePlanet(planet){
      this.$emit('changePlanet',planet)
    }
  }
}
</script>

<style lang="scss" scoped>

$colorOrange: #F3B562;
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & button{
    background-color: $colorOrange;
    border: 0px;
    margin: 10px;
    padding: 10px 20px;
    color: white;
    font-weight: 600;
    font-size: 16px;
    border-radius: 10px;
    transition: .5s;
    &:hover {
      box-shadow: 0px 0px 10px rgba($colorOrange,0.8);
      transition: .5s;
      cursor: pointer;
    }
  }
}



</style>