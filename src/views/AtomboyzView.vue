<template>
  <RWDPlanetNav @changePlanet="getPlanet" :currentPlanet="selectedPlanet" v-if="windowWidth<540"></RWDPlanetNav>
  <div class="container">
    <div class="title">
      <h3>原子少年</h3>
      <p>
        原子少年是台灣男團選秀節目，80名被徵選上的少年們會被分入八大行星中，演繹各式各樣風格的歌舞表演，陳嘉樺Ella、周湯豪、坤達、田一德負責主持，還有流星導師JPM王子、GEmma吳映潔等陪著少年們成長；最後會選出兩組五人音樂組合出道。（雖然後來好多團都出道，根本參加獎）
        <hr>
        以下並不是全體少年，依照個人喜好還有淘汰先後順序、網路聲浪等選出42位！
      </p>
    </div>
    <PlanetNav @changePlanet="getPlanet" :currentPlanet="selectedPlanet" v-if="windowWidth>540"></PlanetNav>

    <div class="cards-container">
      <div class="cards" v-for="atomboy in selectedPlanetList" :key="atomboy.id">
        <router-link class="card-router" :to="`/${atomboy.id}`">
          <div class="card" :data-content="atomboy.name">
            <img :src="atomboy.pics[0]" :alt="atomboy.name">
          </div>
        </router-link>
        <h3 class="rwd-name">{{ atomboy.name }}</h3>

        <div class="pick" :class="{ picked: this.pickedBoyz.indexOf(atomboy.id) !== -1 }"
          @click="addFavorite(atomboy.id)">
          <font-awesome-icon icon="fa-solid fa-heart" />
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import PlanetNav from '../components/PlanetNav.vue'
import RWDPlanetNav from '../components/RwdPlanetNav.vue'

export default {
  name: 'Artist',
  data() {
    return {
      allBoyz: [],
      selectedPlanetList: [],
      selectedPlanet: '太陽系',
      pickedBoyz: [],
      windowWidth: 0
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth

    window.onresize = () => {
      this.windowWidth = window.innerWidth
      
    }

    this.axios.get('https://raw.githubusercontent.com/lienyun/20221016-atomboyz/gh-pages/namelist.json')
      .then((res) => {
        this.allBoyz = res.data
        this.selectedPlanetList = this.allBoyz
      })

    if (localStorage.getItem('pickedId') === null) {
      this.pickedBoyz = []
    } else {
      this.pickedBoyz = [...JSON.parse(localStorage.getItem('pickedId'))]
    }
  },
  methods: {
    getPlanet(planet) {

      if (planet === '太陽系') {
        this.selectedPlanetList = this.allBoyz
      } else {
        var selectedBoyz = this.allBoyz.filter((e) => {
          return e.planet === planet
        })
        this.selectedPlanetList = selectedBoyz
        this.selectedPlanet = planet
      }
    },
    addFavorite(pickedId) {

      if (this.pickedBoyz.indexOf(pickedId) === -1) {
        this.pickedBoyz.push(pickedId)
        alert('成功加入你的pick')

      } else {
        var deleteArr = this.pickedBoyz.filter((e) => {
          return e !== pickedId
        })
        this.pickedBoyz = deleteArr
        console.log('this.pickedBoyz', this.pickedBoyz)
        alert('他不是你的pickㄌ')
      }
      localStorage.setItem('pickedId', JSON.stringify(this.pickedBoyz))
    },
  },
  components: {
    PlanetNav,
    RWDPlanetNav
  }
}

</script>
<style lang="scss" scoped>
$colorRed: #5C4B51;

* {
  font-family: 'Contrail One', 'Noto Sans TC';
}

h1,
h3,
p {
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
  position: relative;
}

.card {
  width: 250px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s;
  position: relative;
  box-shadow: 0px 0px 5px rgba(black, 0.5);

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.05);
  }

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

.pick {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 2;
  color: white;

  & svg {
    width: 25px;
    height: 25px;
  }

  &.picked {
    color: #F06060;
  }

  &:hover {
    cursor: pointer;
  }
}

//螢幕縮小時的畫面：
@media(max-width: 540px) {

  .cards {
    padding: 20px 0;
    & .pick {
      bottom: 80px;
      right: 30px;
    }
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