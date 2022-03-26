import * as Vue from "vue/dist/vue.esm-bundler.js";
const Num = {
  template: `
    <div     v-bind:class="getClass(number)" >
    {{number}}
    </div>
    `,
  props: ["number"],
  methods: {
    isEven(val) {
      return val % 2 == 0;
    },
    getClass(number) {
      return this.isEven(number) ? "blue" : "red";
    },

  } 
};

const app = Vue.createApp({
  components: {
    Num,
  },
  template: `
  <div>

  <hello greeting="Hello"/>
  <button v-on:click="increment">Increment</button>
  <p> {{ count }} </p>
  <div 
    v-for="number in numbers"> 
      <num v-bind:number="number" />
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
      value: ["a"],
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
  computed: {
    evenList() {
      return this.numbers.filter((x) => this.isEven(x));
    },
    error() {
      if (this.value.length < 5) {
        return "Must be 5 characters";
      }
    },
  },
});
app.mount("#app");
