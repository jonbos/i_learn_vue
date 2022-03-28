<template>
  <div>
    <button @click="increment">{{ count }}</button>
    <button @click="increase('a')">{{ numbers.a }}</button>
    <button @click="increase('b')">{{ numbers.b }}</button>
    <p>{{ total }}</p>
  </div>
</template>

<script>
import {
  ref, reactive, computed, watch, watchEffect,
} from 'vue';

export default {
  setup() {
    // ref good for number or string
    const count = ref(0);

    // reactive good for obj
    const numbers = reactive({ a: 1, b: 2 });

    const increment = () => {
      count.value += 1;
    };
    const increase = (n) => {
      numbers[n] += 1;
    };
    const total = computed(() => count.value + numbers.a + numbers.b);
    // useful for route params
    // watch(
    //   count,
    //   (newVal) => {
    //     console.log(`${newVal}`);
    //   },
    //   {
    //     immediate: true,
    //   },
    // );

    watchEffect(() => {
      console.log(count.value);
    });
    return {
      count,
      total,
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
p {
  font-size: 40px;
}
</style>
