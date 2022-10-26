<template>
  <div class="container">
    <div class="title">
      <h3>大部分的原子少年</h3>
      <p>並不是全體少年，依照個人喜好還有淘汰先後順序、網路聲浪等選出42位！</p>
    </div>
    <PlanetNav @changePlanet="getPlanet"></PlanetNav>
    <!-- <div>
      <button @click="selectPlanet()">水星</button>

    </div> -->

    <div class="cards-container">
      <div class="cards" v-for="atomboy in nameList" :key="atomboy.id">
        <router-link class="card-router" :to="`/${atomboy.id}`">
          <div class="card" :data-content="atomboy.name">
            <img :src="atomboy.pic" :alt="atomboy.name">
          </div>
        </router-link>
        <h3 class="rwd-name">{{ atomboy.name }}</h3>
      </div>
    </div>
  </div>

</template>
<script>
import PlanetNav from '../components/PlanetNav.vue'

export default {
  name: 'Artist',
  data() {
    return {
      nameList: [],
    }
  },
  mounted() {
    this.axios.get('../namelist.json')
      .then((res) => {
        this.nameList = res.data
      })
  },
  methods: {
    getPlanet(planet){
      console.log('AtomBoyzView',planet)
      var planetList = this.nameList.filter((e)=>{
        return e.planet === planet
      })
      // console.log('planetList',planetList)
      this.nameList = planetList
      //TODO: 如何重製陣列
    }
  },
  components: {
    PlanetNav
  }
}

</script>
<style lang="scss" scoped>
$colorRed: #5C4B51;

* {
  font-family: 'Contrail One', 'Noto Sans TC';
}

h1,
h3,p {
  margin: 0;
  text-align: center;
}

h1 {
  color: $colorRed;
  font-size: 36px;
  margin: 24px 0px;
}

h3 {
  color: rgba(black, 0.6)
}
p {
  color: rgba(black, 0.6);
  padding: 10px 0;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(1.05);
}

.container {
  padding: 40px;
}

.cards-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
}

.card-router {
  display: block;
}

.cards {
  padding: 10px;
}

.card {
  width: 250px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  background-size: cover;
  cursor: pointer;
  transition: 0.5s;
  position: relative;
  box-shadow: 0px 0px 5px rgba(black,0.5);

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
  }

  &::before {
    opacity: 0;
    transition: 0.5s;
    background-color: rgb(75, 75, 75);
    z-index: 1;
  }

  &:hover::before {
    transition: 0.5s;
    opacity: 0.5;
  }

  &::after {
    font-size: 24px;
    top: calc(50% - 12px);
    color: white;

  }

  &:hover::after {
    transition: .5s;
    background: transparent;
    z-index: 2;
    content: attr(data-content);
    text-align: center;
  }
}

.rwd-name {
  display: none;
}

//螢幕縮小時的畫面：
@media(max-width: 540px) {

  .cards {
    padding: 20px 0;
  }

  .rwd-name {
    display: block;
    margin-top: 10px;
  }
  .card::before {
    background-color: rgba(white, 0.5);
  }
  .card::after {
    display: none;
  }

}
</style>