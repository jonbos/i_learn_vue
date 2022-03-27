<template>
  <form @submit.prevent="submit">
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
      type="password"
      :error="password.error"
      @update="update"
    />
    <my-button
      :name="'Submit'"
      background="darkslateblue"
      color="white"
      :disabled="valid"
    />
  </form>
</template>

<script>
import MyInput from "./MyInput.vue";
import MyButton from "./MyButton.vue";

export default {
  components: {
    MyInput,
    MyButton,
  },
  computed: {
    valid() {
      return !(this.username.error || this.password.error);
    },
  },
  data() {
    return {
      username: {
        value: "user",
        error: "",
      },
      password: {
        value: "pass",
        error: "",
      },
    };
  },
  methods: {
    update({ name, value, error }) {
      this[name].value = value;
      this[name].error = error;
    },
    submit($event) {
       console.log($event);
    },
  },
};
</script>
<style scoped></style>
