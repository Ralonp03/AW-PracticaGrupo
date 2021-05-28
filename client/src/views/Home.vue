<template>
  <div>
    <TaskBar/>
    <div class="Background">
      <div class="Collections">
          <h1>COLECCIONES</h1>
          <img v-bind:src="require('../assets/LogoCoches.png')" alt="">
          &nbsp;
          <img v-bind:src="require('../assets/LogoPokemon.jpg')" alt="">
      </div>
      <div class="Events">
        <h1 class="Title">EVENTOS</h1>
        <p>Responde esta pregunta y gana puntos!</p>
        <p>¿De que elemento es el pokemon Pikachu?</p>
        <img v-bind:src="require('../assets/Pikachu.jpg')" alt="">
        <input type="text" name="respuestaPregunta">
        <p>Resuelve este sencillo Captcha semanal!</p>
        <p><a href="https:/google.com/">Captcha</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import TaskBar from "../views/TaskBar.vue"
  export default {
    components: {
    TaskBar
  }
}
</script>

<style>
    body {
      margin: 0;
    }
    .Background {
      margin-left:15%;
      background-color:gray
    }
    .Collections {
        border: 1px solid black;
        text-align:center;
    }
    .Events {
        border: 1px solid black;
        text-align:center;
    }
</style>