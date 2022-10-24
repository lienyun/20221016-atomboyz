<template>
  <div class="container">
    <div class="title">
      <h1>ATOMBOYZ</h1>
      <h3>大部分的原子少年</h3>
    </div>
    <div class="cards-container">
      <div class="cards" v-for="atomboy in nameList" :key="atomboy.id">
        <router-link class="card-router" :to="`/${atomboy.id}`">

          <div class="card" :data-content="atomboy.name">
            <img :src="atomboy.pic" :alt="atomboy.name">
          </div>
        </router-link>
      </div>
      
    </div>


  </div>

</template>
<script>

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
  }
}

</script>
<style lang="scss" scoped>
$colorRed: #BC0300;

* {
  font-family: 'Contrail One', 'Noto Sans TC';
}

h1,
h3 {
  margin: 0;
}

h1 {
  color: $colorRed;
  font-size: 36px;
  margin: 24px 0px;
}

h3 {
  color: rgba(black, 0.6)
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.container {
  padding: 40px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
.card-router {
  display: block;
}
.cards {
  padding: 0 20px 20px 0;
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
</style>