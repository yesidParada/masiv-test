<template>
  <div class="btn__content">
    <button class="btn" @click="changeComic(1)">
      <i class="fas fa-angle-double-left"></i>
    </button>
    <button class="btn" v-if="numberComic !== 1" @click="changeComic(numberComic - 1)">
      <i class="fas fa-angle-left"></i>
    </button>
    <button class="btn" v-if="numberComic !== lastComic"
      @click="changeComic(numberComic + 1)">
      <i class="fas fa-angle-right"></i>
    </button>
    <button class="btn" @click="getLastComic()">
      <i class="fas fa-angle-double-right"></i>
    </button>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
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
export default class PaginationButton extends Vue {
  url = 'http://xkcd.com/#/info.0.json';
}
</script>
<style lang="scss">
@import '../style';
.btn {
  background: $gray-color;
  border: $border;
  cursor: pointer;
  width: 60px;
  height: 40px;
  border-radius: 4px;
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    transition:  all 1s;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background: darken($gray-color, 25);
  }
}
</style>
