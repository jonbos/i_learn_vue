<template>
  <div>
    <button @click="increment">{{ count }}</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value += 1;
    };
    return { count, increment };
  },
};
</script>

<style scoped>
button {
  height: 100px;
  width: 100px;
  font-size: 2rem;
}
</style>
