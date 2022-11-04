<template>

  <div class="container">
    <h1>ATOMBOYZ</h1>
    <div class="rwd-name">
      <div class="name">
        <h3>{{ name }}</h3>
        <font-awesome-icon :class="{ isPicked: this.pickedId.indexOf(id) === 1 }" @click="addFavorite(id)"
          icon="fa-solid fa-heart" />
      </div>
      <h5>{{ nickName }}</h5>

    </div>
    <div class="info">
      <div class="img-group">

        <div class="img-matte">
          <img :src="mainPic" alt="">
        </div>

        <div class="small-pics">
          <div class="img-s-matte" @click="changePic(i)" v-for="(pic, i) in pics" :key="i">
            <img :src="pic" alt="">
          </div>
        </div>


      </div>


      <div class="right-info">
        <div class="right-up">

          <div class="name">
            <h3>{{ name }}</h3>
            <font-awesome-icon :class="{ isPicked: this.pickedId.indexOf(id) === 1 }" @click="addFavorite(id)"
          icon="fa-solid fa-heart" />
          </div>
          <h5>{{ nickName }}</h5>
          <p>{{ introText }}</p>

          <table>
            <tbody>
              <tr>
                <td>生日</td>
                <td>{{ birthday }}</td>
              </tr>
              <tr>
                <td>星球</td>
                <td>{{ planet }}</td>
              </tr>
              <tr v-if="group">
                <td>所屬團體</td>
                <td>{{ group }}</td>
              </tr>
            </tbody>
          </table>
          <a :href=instagram target="_blank">Instagram</a>
        </div>
        <div class="right-bottom" v-if="videoTitle">
          <button><a :href="video" target="_blank">{{ videoTitle }}</a></button>
        </div>
      </div>
      <div class="rwd-info">
        <table>
          <tbody>
            <tr>
              <td>生日</td>
              <td>{{ birthday }}</td>
            </tr>
            <tr>
              <td>星球</td>
              <td>{{ planet }}</td>
            </tr>
            <tr v-if="group">
              <td>所屬團體</td>
              <td>{{ group }}</td>
            </tr>
          </tbody>
        </table>
        <a :href=instagram target="_blank">Instagram</a>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      id: '',
      name: '',
      nickName: '',
      pics: [],
      mainPic: '',
      introText: '',
      instagram: '',
      birthday: '',
      planet: '',
      group: '',
      videoTitle: '',
      video: '',
      pickedId: JSON.parse(localStorage.getItem('pickedId')) || [],
      pickedBoyz: []
    }
  },
  mounted() {
    console.log(this.$route.params.atomId)
    this.axios.get('../namelist.json')
      .then((res) => {
        // console.log(res.data)
        var allBoyz = res.data
        const atomboyInfo = allBoyz.find((e) => e.id === this.$route.params.atomId)
        this.id = atomboyInfo.id
        this.name = atomboyInfo.name
        this.pics = atomboyInfo.pics
        this.mainPic = atomboyInfo.pics[0]
        this.introText = atomboyInfo.introText
        this.instagram = atomboyInfo.instagram
        this.birthday = atomboyInfo.birthday
        this.planet = atomboyInfo.planet
        this.group = atomboyInfo.group
        this.video = atomboyInfo.video
        this.videoTitle = atomboyInfo.videoTitle
        this.nickName = atomboyInfo.nickName
      })
  },
  methods: {
    changePic(i) {
      console.log('changePic', i)
      console.log(this.pics)
      this.mainPic = this.pics[i]
    },
    addFavorite(id) {
      console.log(id)
      if (this.pickedId.indexOf(id) === -1) {
        this.pickedId.push(id)
        alert('成功加入你的pick')
        localStorage.setItem('pickedId', JSON.stringify(this.pickedId))
      } else {
        var deleteArr = this.pickedId.filter((e) => {
          return e !== id
        })
        this.pickedId = deleteArr
        localStorage.setItem('pickedId', JSON.stringify(this.pickedId))
        alert('他不是你的pickㄌ')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$colorRed: #F06060;

* {
  font-family: 'Contrail One', 'Noto Sans TC';
}

h1,
h3,
h5 {
  margin: 0;
}

h1 {
  color: $colorRed;
  font-size: 36px;
  margin: 24px 0px;
}

h3 {
  color: black;
  font-size: 36px;
}

h5 {
  color: rgba(black, 0.7);
  font-size: 20px;
}



.right-up>a {
  text-decoration: none;
  color: $colorRed;
}

table {
  width: 100%;
  border: 0px;
  margin: 15px 0;

}

td,
th {
  border-bottom: rgba($colorRed, 0.3) 1px solid;
}

td {
  padding: 5px 0;

  &:first-of-type {
    width: 30%;
  }
}

.rwd-name,
.rwd-info {
  display: none;
}


.container {
  padding: 40px;
}

.info {
  display: flex;
  justify-content: center;
  width: 100%;
}

.img-group {
  width: 50%;
  height: 50%;
}

.img-matte {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1/1;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.05);
  }
}

.small-pics {
  display: flex;
  overflow-x: scroll;
}

.img-s-matte {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
  margin-right: 10px;
  flex-shrink: 0;

  & img {
    width: 100%;
    height: 100%;
    // aspect-ratio: 1/1;
    object-fit: cover;
    transform: scale(1.05);

    &:hover {
      cursor: pointer;
    }
  }
}

.right-info {
  width: 50%;
  margin-left: 20px;

}

.name {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    width: 30px;
    height: 30px;
    color: white;
    stroke: rgba(black, 0.7);
    stroke-width: 10px;

    &:hover {
      cursor: pointer;
    }

    &.isPicked {
      color: #F06060;
      stroke: none;

    }
  }
}

.right-up {

  padding: 20px;
  border-radius: 10px;
  border: 1px solid $colorRed;
  letter-spacing: 1px;
}

.right-bottom>button {
  margin-top: 10px;
  padding: 20px;
  width: 100%;
  background-color: white;
  border: 0px;
  color: black;
  font-size: 16px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: $colorRed;

  }

  &>a {
    text-decoration: none;
    color: black;
  }
}

//螢幕縮小時的畫面：
@media(max-width: 540px) {
  h1 {
    display: none;
  }

  .rwd-name {
    display: block;
    text-align: center;
    margin-bottom: 20px;
    opacity: 0.7;

    &>h5 {
      font-size: 20px;
      margin: 0;
    }

    .name {
      justify-content: center;

      & h3 {
        margin-right: 10px;
      }
    }
  }

  .rwd-info {
    display: block;

    &>a {
      text-decoration: none;
      color: $colorRed;

    }
  }

  .info {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
  }

  .img-group {
    width: auto;

  }

  .img-matte {
    width: 100%;
    min-width: 250px;

  }

  .rwd-info {
    width: 100%;
  }

  .right-info {
    display: none;
  }

}
</style>