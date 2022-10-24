<template>
  <h3>ID: {{$route.params.atomId}}</h3>
  <h1>郎哩？</h1>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route.params.atomId)
    //TODO: 不會導頁^^
  }
}
</script>