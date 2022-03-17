<template>
  <router-view />
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class App extends Vue {}
</script>
<style lang="scss">
@import './style';
* {
  padding: 0;
  margin: 0;
}
#app {
  background: $primary-color;
  font-family: $font;
}
</style>
