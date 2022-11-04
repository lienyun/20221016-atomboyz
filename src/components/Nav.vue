<template>
  <nav>
    <div class="nav-left">
      <h5>MENU</h5>
    </div>
    <router-link to="/" class="nav-center">
      <h3>ATOM BOYZ</h3>
    </router-link>
    <div class="favorite">

      <router-link to="/favorite">
        <h5>
          <font-awesome-icon icon="fa-solid fa-heart" /> My pick
          <font-awesome-icon icon="fa-solid fa-heart" />
        </h5>
      </router-link>

    </div>

  </nav>


</template>

<style lang="scss" scoped>
$colorRed: #F06060;

* {
  // border: 1px solid #000;
  font-family: 'Contrail One', cursive;
}

nav {
  background: $colorRed;
  color: white;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 20px 80px;
}

.nav-left,
.favorite,
.nav-center {
  display: flex;
  width: 150px;
}

.nav-center {
  justify-content: center;
}

.favorite {
  justify-content: end;
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
    flex-direction: column;

    & .nav-center,.favorite {
      margin: 0;
      width: 100%;
      justify-content: center;
    }
    & .favorite {
      margin-top: 10px;
    }
    & h3 {
      font-size: 24px;
      margin: 0;
    }

    & h5 {
      font-size: 18px;
      margin: 0;

    }
  }

  .nav-left {
    display: none;
  }



  a {
    text-decoration: none;
    color: white
  }
}
</style>