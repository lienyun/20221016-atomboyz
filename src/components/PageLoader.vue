<template>

  <div class="pageLoader">
    <h3>少年降落中...</h3>
    <div class="cubes">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'PageLoader',
  data() {
    return {
      
    }
  },
  mounted() {
    

  }
}
</script>

<style lang="scss" scoped>
$colors: #BC0300, #8CBEB2, #F2EBBF, #F3B562, #F06060;

.pageLoader {
  background-color: #5C4B51;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 999;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &>h3 {
    color: white
  }
}
.cubes {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cube {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;

  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }

  &:first-child {
    animation: left 1s infinite
  }

  &:last-child {
    animation: right 1s infinite .5s
  }

  @keyframes left {
    40% {
      transform: translateX(-60px);
    }

    50% {
      transform: translateX(0);
    }
  }

  @keyframes right {
    40% {
      transform: translateX(60px);
    }

    50% {
      transform: translateX(0);
    }
  }

}
</style>