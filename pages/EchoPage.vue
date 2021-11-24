<template>
  <div class="m-3">
    <div class="mb-3">
      <label for="inputField" class="form-label">Input</label>
      <input id="inputField" class="form-control" placeholder="Word here" v-model="echoInput"/>
    </div>
    <button class="btn btn-primary mb-4" id="echoButton" :disabled="isDisabled" @click="onEcho">Echo</button>
    <div class="alert alert-secondary text-center" id="outputField" v-if="shouldShow">{{ echoWord }}</div>
  </div>

</template>

<script>
export default {
  name: "EchoPage",
  data() {
    return {
      echoInput: "",
      echoWord: "",
      isClicked: false,
      shouldShow: false,
    }
  },
  computed: {
    isDisabled() {
      return !this.echoInput
    }
  },
  methods: {
    onEcho() {
      this.isClicked = true;
      this.echoWord = this.echoInput;
      this.echoInput = "";
      this.isClicked = false;
      this.shouldShow = true;
    }
  }
}
</script>

<style scoped>

</style>
