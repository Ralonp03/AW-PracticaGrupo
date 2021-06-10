<template>
  <div>
    <TaskBar/>
    <div class="Background">
      <div class="Collections">
          <h1 class="font-bold">COLECCIONES</h1>
          <CarCollection title="Car Brand Collection" class="font-bold"/>
          <PokemonCollection title="Pokemon Collection" class="font-bold"/>
      </div>
      <div class="Events">
        <h1 class="font-bold">EVENTOS</h1>
        <p>Responde esta pregunta y gana puntos!</p>
        <p>¿De que elemento es el pokemon Pikachu?</p>
        <input type="text" name="respuestaPregunta">
        <p>Resuelve este sencillo Captcha semanal!</p>
        <p><a href="https:/google.com/">Captcha</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import TaskBar from "../views/TaskBar.vue"
import CarCollection from './Car-collection.vue'
import PokemonCollection from './Pokemon-collection.vue'
  export default {
    name: 'Home',
    components: {
      TaskBar,
      CarCollection,
      PokemonCollection
  }
}
</script>

<style>
    .Background {
      margin-left:10%;
    }
    .Collections {
        text-align:center;
    }
    .Events {
        text-align:center;
    }
</style>