import * as Vue from "vue/dist/vue.esm-bundler.js";
const app = Vue.createApp({
  template: `
  <div>
  <button v-on:click="increment">Increment</button>
  <p> {{ count }} </p>
  <div v-bind:class="getClass(number)" v-for="number in numbers"> 
    {{number}}
  </div>
  <input
    v-model="value"
  />
  <div class='red'>
    {{error}}
  </div>
  {{value}}
  <input
  type="checkbox"
  v-model="value"
  value="a"
/>
<input
  type="checkbox"
  v-model="value"
  value="b"
/>

  </div>
  `,
  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: ['a'],
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    isEven(val) {
      return val % 2 == 0;
    },
    getClass(number) {
      return this.isEven(number) ? "blue" : "red";
    },
  },
  computed: {
    evenList() {
      return this.numbers.filter((x) => this.isEven(x));
    },
    error() {
      if (this.value.length < 5){
        return 'Must be 5 characters'
      }
    }

  },
});
app.mount("#app");
