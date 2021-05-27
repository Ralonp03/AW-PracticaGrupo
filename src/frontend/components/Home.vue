<template>
  <div>
    <TaskBar/>
    <div class="Background">
      <div class="Collections">
        <h1>Colecciones</h1>
        <p>Logo 1</p>
        <!-- img v-bind:src="require('../images/Logo.png')" alt=""> -->
        &nbsp;
        <p>Logo 2</p>
        <!-- img v-bind:src="require('../images/Logo.png')" alt=""> -->
      </div>
      <div class="Events">
        <h1 class="Title">Eventos</h1>
        <p>Responde esta pregunta y gana puntos!</p>
        &nbsp;
        <p>¿De que elemento es el pokemon Pikachu?</p>
        <p>Imagen de pikachu</p>
        &nbsp;
        <input type="text" name="respuestaPregunta">
        <p>Link captcha</p>
        &nbsp;
        <p>Resuelve este sencillo Captcha semanal!</p>
        <p><a href="https:/google.com/">Captcha</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import TaskBar from "../components/TaskBar.vue"
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
    }
    .Events {
        border: 1px solid black;
    }
</style>