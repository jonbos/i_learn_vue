<template>
  <my-input name="Username" v-bind:rules="{ required: true, min: 5 }" />
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
    };
  },
};
</script>
<style scoped></style>
