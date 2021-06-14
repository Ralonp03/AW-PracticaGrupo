<template>
  <div class="bg-yellow-100 flex relative">
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
          EDITAR COLECCIÓN
        </button>
      </header>
      <div
        v-if="title"
        class="
          h-full
          w-full
          flex
          justify-center
          items-center
          text-2xl
          underline
        "
      >
        <h1>SELECCIONE UNA OPCIÓN</h1>
      </div>

      <div
        v-else-if="create"
        class="
          createWindow
          h-full
          w-full
          border-2 border-black border-opacity-10
        "
      >
        <div class="bg-white h-full w-full my-auto">
          <form class="form flex flex-col justify-center shadow-2xl">
            <div class="shadow-2xl ml-4 my-4 flex">
              <label for="nameCollection">Nombre de la colección: </label>
              <input
                type="text"
                name="nameCollection"
                class="ml-4 border-2 border-black shadow-lg"
              />
            </div>
            <div class="shadow-2xl ml-4 my-4 flex">
              <label for="nameCollection">Número de cartas: </label>
              <input
                type="text"
                name="nameCollection"
                class="numberField border-2 border-black shadow-lg"
              />
            </div>
            <div class="shadow-2xl ml-4 my-4 flex">
              <label for="nameCollection">Nombre de la colección: </label>
              <input
                type="text"
                name="nameCollection"
                class="ml-4 border-2 border-black shadow-lg"
              />
            </div>
            <button
              @click.prevent=""
              class="
                submitBtn
                border-4 border-blue-600
                bg-white
                rounded-full
                w-96
              "
            >
              CREAR
            </button>
          </form>
        </div>
      </div>
      <div v-else-if="edit" class="edit w-full">
        <div class="edit__selection bg-white h-full mx-8 my-8">
          <label for="collectionsChoose">Selecciona una colección: </label>
          <select v-model="selected" name="collectionsChoose" class="border-2">
            <option value="Coches">Car Collection</option>
            <option value="Pokemon">Pokemon Collection</option>
          </select>

          <div v-if="selected" class="edit__collection flex">
            <div class="selection__side flex mt-4">
              <label for="cardChoose">Elija la carta a editar: </label>
              <div v-if="selected == 'Pokemon'">
                <select v-model="cardSelected" name="cardChoose" class="ml-8">
                  <option>Pokemon1</option>
                  <option>Pokemon2</option>
                  <option>Pokemon3</option>
                  <option>Pokemon4</option>
                  <option>Pokemon5</option>
                  <option>Pokemon6</option>
                  <option>Pokemon7</option>
                  <option>Pokemon8</option>
                  <option>Pokemon9</option>
                  <option>Pokemon10</option>
                </select>
              </div>
              <div v-else-if="selected == 'Coches'">
                <select v-model="cardSelected" name="cardChoose" class="ml-8">
                  <option>Coche1</option>
                  <option>Coche2</option>
                  <option>Coche3</option>
                  <option>Coche4</option>
                  <option>Coche5</option>
                  <option>Coche6</option>
                  <option>Coche7</option>
                  <option>Coche8</option>
                  <option>Coche9</option>
                  <option>Coche10</option>
                </select>
              </div>
            </div>
            <div v-if="selected == 'Coches'" class="image__side bg-red-600 h-96 w-64 absolute right-40">
              <img
                v-if="cardSelected == 'Coche1'"
                v-bind:src="require(`../../assets/Coches/Coche1.png`)"
                alt=""
                class="h-96 w-64"
              />
              <img
              v-if="cardSelected == 'Coche2'"
              v-bind:src="require(`../../assets/Coches/Coche2.png`)"
              alt=""
              class="h-96 w-64"
            />
             <img
              v-if="cardSelected == 'Coche3'"
              v-bind:src="require(`../../assets/Coches/Coche3.png`)"
              alt=""
              class="card"
            />
            <!--
            <img
              v-if="selected == 'Coche4'"
              v-bind:src="require(`../assets/Coches/Coche4.png`)"
              alt=""
              class="card"
            />
            <img
              v-if="selected == 'Coche5'"
              v-bind:src="require(`../assets/Coches/Coche5.png`)"
              alt=""
              class="card"
            />
            <img
              v-if="selected == 'Coche6'"
              v-bind:src="require(`../assets/Coches/Coche6.png`)"
              alt=""
              class="card"
            />
            <img
              v-if="selected == 'Coche7'"
              v-bind:src="require(`../assets/Coches/Coche7.png`)"
              alt=""
              class="card"
            />
            <img
              v-if="selected == 'Coche8'"
              v-bind:src="require(`../assets/Coches/Coche8.png`)"
              alt=""
              class="card"
            />
            <img
              v-if="selected == 'Coche9'"
              v-bind:src="require(`../assets/Coches/Coche9.png`)"
              alt=""
              class="card"
            />
            <img
              v-if="selected == 'Coche10'"
              v-bind:src="require(`../assets/Coches/Coche10.png`)"
              alt=""
              class="card" 
            /> -->
            </div>
          </div>
        </div>
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
    const selected = ref("");
    const cardSelected = ref("");

    return {
      create,
      edit,
      title,
      selected,
      cardSelected,
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

.form {
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;

  height: 20rem;
  width: 30rem;
}
.numberField {
  margin-left: 3.5rem;
}
.submitBtn {
  margin-left: 2rem;
}
.submitBtn:hover {
  transform: scale(0.95);
}

.edit__section {
  width: 100%;
  height: 100%;
  background-color: red;
}
</style>