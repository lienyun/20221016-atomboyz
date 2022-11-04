<template>
  <div class="container">
    <div class="title">
      <h3 v-if="pickedBoyz.length !== 0">你的pick！</h3>
      <div v-else class="noPicked">
        <h3>快去選擇你的pick吧</h3>
        <router-link class="btn" to="/">回到首頁</router-link>
      </div>

    </div>

    <div class="cards-container">
      <div class="cards" v-for="atomboy in pickedBoyz" :key="atomboy.id">
        <router-link class="card-router" :to="`/${atomboy.id}`">
          <div class="card" :data-content="atomboy.name">
            <img :src="atomboy.pics[0]" :alt="atomboy.name">
          </div>
        </router-link>
        <h3 class="rwd-name">{{ atomboy.name }}</h3>

        <div class="pick" :class="{ picked: this.pickedBoyz.indexOf(atomboy.id) === -1 }"
          @click="deleteFavorite(atomboy.id)">
          <font-awesome-icon icon="fa-solid fa-heart" />
        </div>
      </div>
    </div>
  </div>

</template>


<script>

export default {
  name: 'Favorite',
  data() {
    return {
      allBoyz: [],
      pickedId: JSON.parse(localStorage.getItem('pickedId')) || [],
      pickedBoyz: []
    }
  },
  async mounted() {
    await this.axios.get('../namelist.json')
      .then((res) => {
        this.allBoyz = res.data
        console.log('this.allBoyz', this.allBoyz)
      })
    console.log('this.pickedId', this.pickedId)
    this.pickedBoyz = this.allBoyz.filter((el) => {
      return this.pickedId.includes(el.id)
    })
  },
  methods: {
    deleteFavorite(pickedId) {
      // console.log(pickedId)
      var result = this.pickedBoyz.filter((e) => {
        return e.id !== pickedId
      })
      this.pickedBoyz = result
      alert('他不是你的pickㄌ')
      var idResult = this.pickedId.filter((e) => {
        return e !== pickedId
      })
      this.pickedId = idResult
      console.log('this.pickedId', this.pickedId)
      localStorage.setItem('pickedId', JSON.stringify(this.pickedId))
    }
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
  z-index: 999;
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

.title,
.noPicked {
  display: flex;
  justify-content: center;
}

.noPicked {
  flex-direction: column;

  & a {
    text-decoration: none;
    color: white;
    text-align: center;
  }

  & .btn {
    background-color: #F06060;
    padding: 10px 20px;
    border-radius: 10px;
    border: 0px;
    margin-top: 20px;

    &:hover {
      transform: translate(-5px, -5px);
      cursor: pointer;
    }
  }
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