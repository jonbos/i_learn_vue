<template>
  <div>
    <div>{{ msg }}</div>
    <input type="text" v-model="msg" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('Hello World');
    return { msg };
  },
};
</script>

<style scoped>
</style>
