<template>
  <div class="content">
    <PaginationButton />
    <Card/>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Card from '../components/Card.vue';
import PaginationButton from '../components/PaginationButton.vue';

@Options({
  components: {
    Card,
    PaginationButton,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss">
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    flex-direction: column-reverse;
    gap: 24px;
  }
</style>
