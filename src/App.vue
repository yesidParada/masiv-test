<template>
  <div class="content">
    <div>
      <button class="btn" @click="changeComic(1)">
        <i class="fas fa-angle-double-left"></i>
      </button>
      <button class="btn" :disabled="data.num === 1" @click="changeComic(data.num - 1)">
        <i class="fas fa-angle-left"></i>
      </button>
    </div>
    <Card 
      :idCard="data.num"
      :title="data.title"
      :subtitle="data.year"
      :img="data.img"
    />
    <div>
      <button class="btn" :disabled="data.num === 2465" @click="changeComic(data.num + 1)">
        <i class="fas fa-chevron-right"></i>
      </button>
      <button class="btn" @click="getData(lastUrl)">
        <i class="fas fa-angle-double-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./components/Card.vue";
export default {
  name: 'App',
  components: {
    Card,
  },
  data() {
    return {
      data: {},
      proxyCors: 'https://thingproxy.freeboard.io/fetch/',
      url: 'http://xkcd.com/#/info.0.json',
      lastUrl: 'http://xkcd.com/info.0.json'
    };
  },
  mounted() {
    const random = Math.floor(Math.random() * (2465 - 1) ) + 1;
    this.getData(this.url.replace('#', random));
  },
  methods: {
    changeComic(number) {
      const urlInfo = this.url.replace('#', number);
      this.getData(urlInfo);
    },
    getData(endpoint) {
      axios.get(`${this.proxyCors}${endpoint}`).then((result) => {
        if(result) {
          this.data = result.data;
        }
      });
    }
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap");
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Coming Soon", cursive;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #03375d;
}
.content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 40px;
  padding: 7px 10px 7px 10px;
  margin: 0 10px;
  transition: color 0.3s ease;
}
.btn:focus {
  outline: none;
}
.btn:hover {
  color: #ffffff;
  opacity: 0.8;
}
</style>
