<template>
  <div class="buttons" :class="{sticky: isSticky}">
    <button v-for="(planet, i) in planetList" :key="i" :class="{ isSelected: currentPlanet === planet }"
      @click="changePlanet(planet)">{{ planet }}</button>
  </div>

</template>

<script>
export default {
  name: 'RWDplanetVue',
  data() {
    return {
      planetList: ['太陽系', '水星', '金星', '木星', '土星', '火星', '地球', '天王星', '海王星'],
      isSticky: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  methods: {
    changePlanet(planet) {
      this.$emit('changePlanet', planet)
    },
    handleScroll() {
      this.isSticky = window.scrollY > 744 ? true : false;
    }
  },
  props: ['currentPlanet']
}
</script>

<style lang="scss" scoped>
$colorOrange: #F3B562;
$colorGreen: #8CBEB2;

.buttons {
  display: flex;
  align-items: center;
  overflow-x: scroll;


  & button {
    flex-shrink: 0;
    background-color: $colorOrange;
    border: 0px;
    padding: 25px 30px;
    color: white;
    font-weight: 600;
    font-size: 16px;

    &.isSelected {
      background-color: $colorGreen;
    }
  }
}

.sticky {
  position: fixed;
  top: 0;
  z-index: 10;
}
</style>