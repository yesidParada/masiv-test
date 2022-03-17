<template>
  <div class="card">
    <h1>{{ data.title }}</h1>
    <span>{{ data.year }}</span>
    <img :alt="data.alt" :src="data.img" />
    <Rating :id="data.num" :value="value" @saveValue="saveValue" :length="5"/>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { LocalStorageItem } from '@/model/local-storage.model';
import { mapState } from 'vuex';
import Rating from './Rating.vue';

@Options({
  components: {
    Rating,
  },
  computed: {
    ...mapState(['data']),
  },
  updated() {
    this.getValue();
  },
  methods: {
    getValue(): void {
      const list = localStorage.getItem('comic');
      if (list && this.data.num) {
        const item = JSON.parse(list).filter(
          (itemList: LocalStorageItem) => itemList.id === this.data.num,
        );
        this.value = item.length > 0 ? item[0].value : 0;
      }
    },
    saveValue(value: number): void {
      this.value = value;
    },
  },
})
export default class Card extends Vue {
  value = 0;
}
</script>
<style lang="scss">
@import '../style';

.card {
  display: flex;
  border: $border;
  flex-direction: column;
  box-sizing: border-box;
  padding: 18px;
  width: fit-content;
  align-items: center;
  justify-content: center;
  background: $gray-color;
  border-radius: 4px;
}
.card img {
  max-width: 100%;
  height: 50vh;
  image-rendering: pixelated;
}
</style>
