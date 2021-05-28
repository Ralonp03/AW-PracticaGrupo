<template>
  <div>
    <TaskBar/>
    <div class="Background">
    <img v-bind:src="require('../assets/LoG.png')" alt="">
    <img v-bind:src="require('../assets/Coches/c1.png')" alt="">
    <img v-bind:src="require('../assets/Coches/c2.png')" alt="">
    <img v-bind:src="require('../assets/Coches/c3.png')" alt="">
    <img v-bind:src="require('../assets/Coches/c4.png')" alt="">
    <img v-bind:src="require('../assets/Coches/c5.png')" alt="">
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
</style>