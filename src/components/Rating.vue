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
<script>
export default {
  name: 'Rating',
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
  methods: {
    selectedValue(value) {
      let item;
      const list = localStorage.getItem('comic');
      if (list && this.id) {
        const temporyArray = JSON.parse(list);
        item = temporyArray.some((itemList) => itemList.id === this.id)
          ? temporyArray.map((itemList) => {
            if (itemList.id === this.id) {
              itemList.value = value;
            }
            return itemList;
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
};
</script>
<style scoped>
#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;
}

#form p {
  text-align: center;
}

#form label {
  font-size: 20px;
}

input[type="radio"] {
  display: none;
}
label {
  color: grey;
  cursor: pointer;
}
.clasificacion {
  direction: rtl;
  unicode-bidi: bidi-override;
  font-size: 62px;
}
label:hover,
label:hover ~ label {
  color: orange;
}
input[type="radio"]:checked ~ label {
  color: orange;
}
</style>
