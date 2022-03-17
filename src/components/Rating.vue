<template>
  <form>
    <p class="clasificacion">
      <template v-for="index in length" :key="index">
        <input
          :id="'radio'+index"
          type="radio"
          name="starts"
          @click="selectedValue(index)"
          :checked="value === index"
          :value="index"
        />
        <label :for="'radio'+index">★</label>
      </template>
    </p>
  </form>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { LocalStorageItem } from '@/model/local-storage.model';

@Options({
  props: {
    length: {
      type: Number,
      default: 5,
    },
    id: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
    },
  },
  emits: ['saveValue'],
  methods: {
    selectedValue(value: number): void {
      this.$emit('saveValue', value);
      let item;
      const list = localStorage.getItem('comic');
      if (list && this.id) {
        const temporyArray = JSON.parse(list);
        item = temporyArray.some((itemList: LocalStorageItem) => itemList.id === this.id)
          ? temporyArray.map((itemListOn: LocalStorageItem) => {
            if (itemListOn.id === this.id) {
              // eslint-disable-next-line no-param-reassign
              itemListOn.value = value;
            }
            return itemListOn;
          })
          : [...temporyArray, {
            id: this.id,
            value,
          }];
      } else {
        item = [{
          id: this.id,
          value,
        }];
      }
      localStorage.setItem('comic', JSON.stringify(item));
    },
  },
})

export default class Rating extends Vue {
}
</script>
<style lang="scss">
@import '../style';
input[type="radio"] {
  display: none;

  &:checked ~ label {
    color: $orange-color;
  }
}
label {
  color: darken($gray-color, 25);
  cursor: pointer;

  &:hover,
  &:hover ~ label {
    color: $orange-color;
  }
}
.clasificacion {
  direction: rtl;
  unicode-bidi: bidi-override;
  font-size: 62px;
}
</style>
