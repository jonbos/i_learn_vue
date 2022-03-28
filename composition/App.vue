<template>
  <div>
    <button @click="increment">{{ count }}</button>
    <button @click="a++">{{ a }}</button>
    <button @click="b++">{{ b }}</button>
    <p>{{ total }}</p>
    <div v-for="msg in history" :key="msg">{{ msg }}</div>
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
    const a = ref(0);
    const b = ref(0);
    const history = ref([]);
    const increment = () => {
      count.value += 1;
    };
    const total = computed(() => count.value + a.value + b.value);

    watch([a, b], ([newA, newB], [oldA, oldB]) => {
      if (newA !== oldA) {
        history.value.push(`A: ${oldA} -> ${newA}`);
      }
      if (newB !== oldB) {
        history.value.push(`B: ${oldB} -> ${newB}`);
      }
    });

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

    // watchEffect(() => {
    //   console.log(count.value);
    // });
    return {
      count,
      total,
      history,
      increment,
      a,
      b,
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
