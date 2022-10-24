<template>
  <nav>
    <div class="nav-left">
      <h5>MENU</h5>
    </div>
    <router-link to="/" class="nav-center">
      <h3>ATOM BOYZ</h3>
    </router-link>
    <div class="author">
      <h5>Wendy Chang</h5>
    </div>

  </nav>


</template>

<style lang="scss" scoped>
$colorRed: #BC0300;

* {
  // border: 1px solid #000;
  font-family: 'Contrail One', cursive;
}

nav {
    background-color: $colorRed;
    color: white;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 20px 80px;
  }

  .nav-left,
  .author {
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: 24px;
  }

  h5 {
    font-size: 18px;
  }

  a {
    text-decoration: none;
    color: white
  }
//螢幕縮小時的畫面：
@media(max-width: 540px) {
  nav {
    background-color: $colorRed;
    color: white;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 20px 80px;
  }

  .nav-left,.author{
    display: none;
    // align-items: center;
  }

  h3 {
    font-size: 24px;
  }

  h5 {
    font-size: 18px;

  }

  a {
    text-decoration: none;
    color: white
  }
}


</style>