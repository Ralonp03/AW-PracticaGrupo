<template>
  <div class="container ml-10 my-16">
    <h2 class="w-full">{{ title }}</h2>
    <div class="p-4 grid gap-4 grid-flow-col auto-cols-max border-gray-800">
      <img v-bind:src="require('../assets/LogoPokemon.jpg')" alt="" />
      <img v-bind:src="require('../assets/Pokemons/Pokemon1.png')" alt="" />
      <img v-bind:src="require('../assets/Pokemons/Pokemon2.png')" alt="" />
      <img v-bind:src="require('../assets/Pokemons/Pokemon3.png')" alt="" />
      <img v-bind:src="require('../assets/Pokemons/Pokemon4.jpg')" alt="" />
      <img v-bind:src="require('../assets/Pokemons/Pokemon5.png')" alt="" />
      <img v-bind:src="require('../assets/Pokemons/Pokemon6.jpg')" alt="" />
      <img v-bind:src="require('../assets/Pokemons/Pokemon7.jpg')" alt="" />
      <img v-bind:src="require('../assets/Pokemons/Pokemon8.jpg')" alt="" />
    </div>
    <div class="p-4 grid gap-4 grid-flow-col auto-cols-max border-gray-800">
      <img v-bind:src="require('../assets/Pokemons/Pokemon9.png')" alt="" />
      <img v-bind:src="require('../assets/Pokemons/Pokemon10.jpg')" alt="" />
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
