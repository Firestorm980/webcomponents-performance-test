<template>
	<div class="counter">
		<input type="count" v-model="count" readonly />
		<button type="button" @click="count += 1">+</button>
		<button type="button" @click="count -= 1">-</button>
	</div>
</template>

<script>
export default {
  name: "Counter",
  data() {
	  return {
		  count: 0
	  }
  },
};
</script>
