<template>
  <my-input
    name="Username"
    v-bind:rules="{ required: true, min: 5 }"
    :value="username.value"
    @update="update"
  />
  <my-input
    name="Password"
    :rules="{ required: true, min: 10 }"
    :value="password.value"
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
        valid: false,
      },
      password: {
        value: "pass",
        valid: false,
      },
    };
  },
  methods: {
    update({ name, value }) {
      console.log(name, value);
      this[name].value = value;
    },
  },
};
</script>
<style scoped></style>
