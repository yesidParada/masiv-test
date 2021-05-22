<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <span>{{ subtitle }}</span>
    <img :alt="title" :src="img" />
    <Rating :id="idCard" :value="value" :length="5"/>
  </div>
</template>
<script>
import Rating from "./Rating.vue";
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default: 'title Example'
    },
    img: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    },
    idCard: {
      type: Number,
      default: 0
    }
  },
  components: {
    Rating,
  },
  data() {
    return {
      value: 0
    }
  },
  beforeUpdate(){
    this.getValue();
  },
  methods: {
    getValue() {
      const list = localStorage.getItem('comic');
      if(list && this.idCard) {
        const item = JSON.parse(list).filter((itemList) => itemList.id === this.idCard);
        this.value = item.length > 0 ? item[0].value : 0;
      }
    }
  },
}
</script>
<style scoped>
.card {
  width: 70%;
  text-align: center;
  height: 80vh;
  background: #969696;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 8px 8px 11px 9px #000;
}
.card img {
  width: 70%;
  height: 50vh;
  image-rendering: pixelated;
}
</style>