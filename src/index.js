import * as Vue from "vue/dist/vue.esm-bundler.js";
const Num = {
  template: `
    <button     
      v-bind:class="getClass(number)" 
      v-on:click="click"
      >
    {{number}}
    </button>
    `,
  props: ["number"],
  methods: {
    click(n) {
      this.$emit("chosen", this.number);
      console.log(this.number);
    },
    isEven(val) {
      return val % 2 == 0;
    },
    getClass(number) {
      return this.isEven(number) ? "blue" : "red";
    },
  },
};

const app = Vue.createApp({
  components: {
    Num,
  },
  template: `
  <div>

  <num 
    v-bind:number="number" 
    v-for="number in numbers"
    v-on:chosen="addNumber"
    />
  </div>
  <hr/>
  <num 
    v-bind:number="number" 
    v-for="number in chosenNumbers"
    v-on:chosen="addNumber"
  />
  `,
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      chosenNumbers: []
    };
  },
  methods: {
    addNumber(num) {
      this.chosenNumbers.push(num)
    }
  },
  computed: {
    evenList() {
      return this.numbers.filter((x) => this.isEven(x));
    },
  },
});
app.mount("#app");
