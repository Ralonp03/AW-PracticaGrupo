<template>
  <div class="flex">
    <TaskBar />
     <div class="collections h-3/6 flex">
      <PokemonCollection title="Pokemon Collection" />
      <CarCollection title="Car Collection"/>
    </div>
    <!-- <div class="Events">
      <h1 class="Title">EVENTOS [*] Terminar de estilizar vista</h1>
      <p>Responde esta pregunta y gana puntos!</p>
      <p>¿De que elemento es el pokemon Pikachu?</p>
      <img v-bind:src="require('../assets/Pokemons/Pokemon1.png')" alt="" />
      <input type="text" name="respuestaPregunta" />
      <p>Resuelve este sencillo Captcha semanal!</p>
      <p><a href="https:/google.com/">Captcha</a></p>
    </div> --> 
  </div>
</template>

<script>
import TaskBar from "./TaskBar.vue";
import PokemonCollection from "./PokemonCollection.vue";
import CarCollection from "./CarCollection.vue";

import{ useStore } from 'vuex'
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    TaskBar,
    PokemonCollection,
    CarCollection,
  },
  setup() {
    const router = useRouter()
    const store = useStore()

    onMounted(() => {
      !store.state.auth && router.push('/login')
    })
  },
};
</script>

<style></style>
