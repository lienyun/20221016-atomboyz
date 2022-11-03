<template>
  <div class="container">
    <div class="title">
      <h3>你的pick！</h3>
      <p>把你的pick收藏起來！</p>
    </div>

    <div class="cards-container">
      <div class="cards" v-for="atomboy in allBoyz" :key="atomboy.id">
        <router-link class="card-router" :to="`/${atomboy.id}`">
          <div class="card" :data-content="atomboy.name">
            <img :src="atomboy.pics[0]" :alt="atomboy.name">
          </div>
        </router-link>
        <h3 class="rwd-name">{{ atomboy.name }}</h3>
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
      pickedId: JSON.parse(localStorage.getItem('pickedId'))||[],
      pickedBoyz:[]
    }
  },
  mounted() {
    this.axios.get('../namelist.json')
      .then((res) => {
        this.allBoyz = res.data
        console.log('this.allBoyz',...this.allBoyz)
      })
      

  },

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