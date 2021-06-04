<template>
  <div class="container ml-10 my-16">
    <h2 class="w-full">{{ title }}</h2>
    <div class="p-4 grid gap-4 grid-flow-col auto-cols-max border-gray-800">
      <img v-bind:src="require('../assets/LogoCoches.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/Coche1.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/Coche2.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/Coche3.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/Coche4.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/Coche5.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/Coche6.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/Coche7.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/Coche8.png')" alt="" />
    </div>
    <div class="p-4 grid gap-4 grid-flow-col auto-cols-max border-gray-800">
      <img v-bind:src="require('../assets/Coches/Coche9.png')" alt="" />
      <img v-bind:src="require('../assets/Coches/Coche10.png')" alt="" />
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
