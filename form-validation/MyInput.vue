<template>
  <div class="label">
    <label :for="name"> {{ name }} </label>
    <div class="error">{{ error }}</div>
  </div>
  <input @input="input" :type="type" :id="name" :value="value" />
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
    value: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: "text"
    },
  },
  computed: {},
  methods: {
    input($event) {
      this.$emit("update", {
        name: this.name.toLowerCase(),
        value: $event.target.value,
        error: this.validate($event.target.value),
      });
    },
    validate(value) {
      if (this.rules.required && value.length === 0) {
        return "This field is required";
      }
      if (this.rules.min && value.length < this.rules.min) {
        return `Length must be longer than ${this.rules.min}`;
      }
    },
  },
  created() {
    this.$emit("update", {
      name: this.name.toLowerCase(),
      value: this.value,
      error: this.validate(this.value),
    });
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