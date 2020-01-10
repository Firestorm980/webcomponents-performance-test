<template>
  <div id="app">
    <Counter v-for="index in 1000" :key="index" />
  </div>
</template>

<script>
import Counter from "./Counter";

export default {
  name: "App",
  components: {
    Counter
  }
};
</script>
