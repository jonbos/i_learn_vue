<template>
  <my-input
    name="Username"
    v-bind:rules="{ required: true, min: 5 }"
    :value="username.value"
    :error="username.error"
    @update="update"
  />
  <my-input
    name="Password"
    :rules="{ required: true, min: 10 }"
    :value="password.value"
    :error="password.error"
    @update="update"
  />

  <my-button background="darkslateblue" color="white" :disabled="valid" />
</template>

<script>
import MyInput from "./MyInput.vue";
import MyButton from "./MyButton.vue";

export default {
  components: {
    MyInput,
    MyButton,
  },
  data() {
    return {
      valid: true,
      username: {
        value: "user",
        error: false,
      },
      password: {
        value: "pass",
        error: false,
      },
    };
  },
  methods: {
    update({ name, value, error }) {
      this[name].value = value;
      this[name].error = error;
    },
  },
};
</script>
<style scoped></style>
