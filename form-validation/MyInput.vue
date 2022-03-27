<template>
  <div class="label">
    <label :for="name"> {{ name }} </label>
    <div class="error">{{ error }}</div>
  </div>
  <input type="text" v-bind:id="name" v-model="value" />
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    rules: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      value: "",
    };
  },
  computed: {
    error() {
      if (this.rules.required && this.value.length === 0) {
        return "This field is required";
      }

      if (this.rules.min && this.value.length < this.rules.min) {
        return `Length must be longer than ${this.rules.min}`;
      }
    },
  },
};
</script>
<style scoped>
.input {
  display: flex;
  flex-direction: column;
}

.label {
  display: flex;
  justify-content: space-between;
}

.error {
  color: red;
}

.input {
  width: 100%;
}

input {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid silver;
  margin: 2px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
}
</style>