<template>
  <router-view />
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class App extends Vue {}
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
