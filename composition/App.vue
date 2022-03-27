<template>
  <div>
    <button @click="increment">{{ count }}</button>
    <button @click="increase('a')">{{ numbers.a }}</button>
    <button @click="increase('b')">{{ numbers.b }}</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    // ref good for number or string
    const count = ref(0);

    // reactive good for obj
    const numbers = reactive({ a: 0, b: 0 });

    const increment = () => {
      count.value += 1;
    };
    const increase = (n) => {
      numbers[n] += 1;
    };
    return {
      count,
      increment,
      numbers,
      increase,
    };
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
