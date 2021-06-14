<template>
  <div class="bg-yellow-100 flex">
    <TaskbarAdmin />
    <div class="editWindow m-auto bg-white">
      <header>
        <button
          class="button border-2 border-black rounded-t-lg"
          @click="(create = true), (edit = false), (title = false)"
        >
          CREAR COLECCIÓN
        </button>
        <button
          class="button ml-1 border-2 border-black rounded-t-lg"
          @click="(create = false), (edit = true), (title = false)"
        >
          EDITAR COLECCION
        </button>
      </header>
      <div v-if="title" class="h-full w-full flex justify-center items-center text-2xl underline">
        <h1>SELECCIONE UNA OPCIÓN</h1>
      </div>

      <div v-else-if="create" class="createWindow h-full w-full border-2 border-black border-opacity-10">
        <div class="bg-white h-full w-full my-auto">
          <form class="form flex flex-col justify-center shadow-2xl">
                <div  class="shadow-2xl ml-4 my-4 flex">
                    <label for="nameCollection">Nombre de la colección: </label>
                    <input type="text" name="nameCollection" class="ml-4 border-2 border-black shadow-lg"/>
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
        </div>
      </div>
      <div v-else-if="edit">
        <h1>Vista editar</h1>
      </div>
    </div>
  </div>
</template>

<script>
import TaskbarAdmin from "./TaskbarAdmin.vue";
import { ref } from "vue";
export default {
  name: "CollectionsEdit",
  components: {
    TaskbarAdmin,
  },
  setup() {
    const create = ref(false);
    const edit = ref(false);
    const title = ref(true);

    return {
      create,
      edit,
      title,
    };
  },
};
</script>

<style>
.editWindow {
  height: 40rem;
  width: 50rem;
}

.button:hover {
  transform: scale(0.95);
}

.form{
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;
    

    height: 20rem;
    width: 30rem;
}
.numberField {
    margin-left: 3.5rem;
}
.submitBtn{
    margin-left: 2rem;
}
.submitBtn:hover{
    transform: scale(0.95);
}
</style>