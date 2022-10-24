<template>
  <!-- <h3>ID: {{$route.params.atomId}}</h3> -->
  <div class="container">
    <h1>ATOMBOYZ</h1>
    <div class="info">
      <div class="img-matte">
        <img :src=pic alt="">

      </div>
      <div class="right-info">
        <div class="right-up">
          <h3>{{ name }}</h3>
          <h5>{{ introText }}</h5>
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
        <div class="right-bottom">
          <button>連結</button>
          <button>連結</button>
          <button>連結</button>
          <button>連結</button>

        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      name: '',
      pic: '',
      introText: '',
      instagram: '',
      birthday: '',
      planet: '',
      group: ''
    }
  },
  mounted() {
    console.log(this.$route.params.atomId)
    this.axios.get('../namelist.json')
      .then((res) => {
        // console.log(res.data)
        var allBoyz = res.data
        const atomboyInfo = allBoyz.find((e) => e.id === this.$route.params.atomId)
        console.log('atomboyInfo', atomboyInfo)
        this.name = atomboyInfo.name
        this.pic = atomboyInfo.pic
        this.introText = atomboyInfo.introText
        this.instagram = atomboyInfo.instagram
        this.birthday = atomboyInfo.birthday
        this.planet = atomboyInfo.planet
        this.group = atomboyInfo.group
      })
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
  color: black;
  font-size: 36px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

a {
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

.container {
  padding: 40px;
}

.info {
  display: flex;
  justify-content: center;
  width: 100%;
}

.img-matte {
  width: 50%;
  height: 50%;
  border-radius: 10px;
  overflow: hidden;
}

.right-info {
  width: 50%;
  margin-left: 20px;
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
    color: white
  }
}
</style>