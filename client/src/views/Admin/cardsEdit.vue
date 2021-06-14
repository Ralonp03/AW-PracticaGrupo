<template>
  <div class="bg-yellow-100 flex">
    <TaskbarAdmin />
    <div class="editWindow m-auto bg-white">
      <header>
          <h2 class="w-full text-center text-xl">EDITAR CARTA</h2>
      </header>
      <div class="editWindow h-96 w-full border-2 border-black border-opacity-10 flex items-center justify-evenly">
        <div class="seleccion">
          <label for="cardSelection">Selecciona la carta a editar: </label>
          <select name="cardSelection">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div>
          <button>+</button>
          <span class="ml-8 mr-8 ">20</span>
          <button> - </button>
        </div>
        <!-- <div class="bg-white h-full w-full my-auto">
          <form class="form flex flex-col justify-center shadow-2xl">
                <div  class="shadow-2xl ml-4 my-4 flex">
                    <label for="nameCollection">Carta: </label>
                    <select name="nameCollection"></select>
                </div>
                <div  class="shadow-2xl ml-4 my-4 flex">
                    <label for="nameCollection">Número de cartas: </label>
                    <input type="text" name="nameCollection" class="numberField border-2 border-black shadow-lg"/>
                </div>
                <div  class="shadow-2xl ml-4 my-4 flex">
                    <label for="nameCollection">Nombre de la colección: </label>
                    <input type="text" name="nameCollection" class="ml-4 border-2 border-black shadow-lg"/>
                </div>
                <button @click.prevent="" class=" submitBtn border-4 border-blue-600 bg-white rounded-full w-96 ">CREAR</button>
            
          </form>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import TaskbarAdmin from "./TaskbarAdmin.vue";
// import { ref } from "vue";
export default {
  name: "cardsEdit",
  components: {
    TaskbarAdmin,
  },
}
</script>

<style>

</style>