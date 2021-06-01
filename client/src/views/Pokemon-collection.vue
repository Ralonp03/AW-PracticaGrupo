<template>
  <div class="container ml-10 my-16">
    <h2 class="w-full">{{ title }}</h2>
    <div class="p-4 grid gap-4 grid-flow-col auto-cols-max border-gray-800">
      <img v-bind:src="require('../assets/LoG.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/c1.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/c2.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/c3.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/c4.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/c5.png')" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  setup() {
    
  },
};
</script>

<style></style>
