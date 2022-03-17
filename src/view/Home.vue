<template>
    <div class="content">
    <div>
      <button class="btn" @click="changeComic(1)">
        <i class="fas fa-angle-double-left"></i>
      </button>
      <button class="btn" v-if="numberComic !== 1" @click="changeComic(numberComic - 1)">
        <i class="fas fa-angle-left"></i>
      </button>
    </div>
    <Card/>
    <div>
      <button class="btn" v-if="numberComic !== lastComic"
        @click="changeComic(numberComic + 1)">
        <i class="fas fa-chevron-right"></i>
      </button>
      <button class="btn" @click="getLastComic()">
        <i class="fas fa-angle-double-right"></i>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import Card from '../components/Card.vue';

@Options({
  components: {
    Card,
  },
  data() {
    return {
      data: {},
      proxyCors: 'https://thingproxy.freeboard.io/fetch/',
    };
  },
  mounted() {
    this.getLastComic();
    const random = Math.floor(Math.random() * (this.lastComic - 1)) + 1;
    this.getData(this.url.replace('#', random));
  },
  methods: {
    ...mapActions(['getLastComic', 'getData']),
    changeComic(number: number): void {
      const urlInfo = this.url.replace('#', number);
      this.getData(urlInfo);
    },
  },
  computed: {
    ...mapState(['lastComic', 'numberComic']),
  },
})
export default class Home extends Vue {
  url = 'http://xkcd.com/#/info.0.json';
}
</script>
