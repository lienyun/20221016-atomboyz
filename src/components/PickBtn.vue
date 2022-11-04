<template>
  <router-link to="/favorite" class="stick-footer">My Pick</router-link>
</template>

<script>
export default {
  name: 'PickBtn',
}
</script>

<style lang="scss" scoped>

* {
  font-family: 'Contrail One', cursive;
}
.stick-footer {
  background-color: #F06060;
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 99;
  box-shadow: 0px 0px 5px rgba(black, 0.5);
  display: flex;

}

a {
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>