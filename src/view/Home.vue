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
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import Card from '../components/Card.vue';

@Options({
  components: {
    Card,
  },
  data() {
    return {
      data: {},
      proxyCors: 'https://thingproxy.freeboard.io/fetch/',
      url: 'http://xkcd.com/#/info.0.json',
      lastUrl: 'http://xkcd.com/info.0.json',
    };
  },
  mounted() {
    const random = Math.floor(Math.random() * (2465 - 1)) + 1;
    this.getData(this.url.replace('#', random));
  },
  methods: {
    changeComic(number: any) {
      const urlInfo = this.url.replace('#', number);
      this.getData(urlInfo);
    },
    getData(endpoint: any) {
      axios.get(`${this.proxyCors}${endpoint}`).then((result) => {
        if (result) {
          this.data = result.data;
        }
      });
    },
  },
})
export default class Home extends Vue {
    name = 'text';
}
</script>
