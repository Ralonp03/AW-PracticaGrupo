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
      <div v-else-if="edit" class="edit w-full flex flex-col">
        <div class="edit__selection bg-white h-full mx-8 my-8">
          <label for="collectionsChoose">Selecciona una colección: </label>
          <select v-model="selected" name="collectionsChoose" class="border-2">
            <option value="Coches">Car Collection</option>
            <option value="Pokemon">Pokemon Collection</option>
          </select>

          <div v-if="selected" class="edit__collection">
            <div class="selection__side flex mt-4">
              <label for="cardChoose">Elija la carta a editar: </label>
              <div v-if="selected == 'Pokemon'">
                <select v-model="cardSelected" name="cardChoose" class="ml-8clas border border-gray-300" @change="setUnits(cardSelected)">
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
                <select v-model="cardSelected" name="cardChoose" class="ml-8  " @change="setUnits(cardSelected)">
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
            <div class="unitsEdit flex mt-4">
              <br /><label> Copias que desea añadir: </label> <br />
              <div class="flex text-center">
                <button
                  @click.prevent="decrement"
                  class="
                    bg-blue-500
                    ml-4
                    h-8
                    w-16
                    rounded-full
                    font-bold
                    text-white
                    hover:bg-blue-600
                    text-xl
                  "
                >
                  -
                </button>
                <span class="text-3xl ml-4 mr-4">{{ unitsCard }}</span>
                <button
                  @click.prevent="increment"
                  class="
                    bg-blue-500
                    h-8
                    w-16
                    rounded-full
                    font-bold
                    text-whitehover:bg-blue-600 text-xl
                  "
                >
                  +
                </button>
              </div>
              
            </div>
            <button @click.prevent="actualizar" class="h-12 bg-blue-500 rounded-full font-bold text-white w-full hover:bg-blue-600 m-2">ACTUALIZAR</button>
            <br><div
              v-if="selected == 'Coches'"
              class="h-full flex justify-center items-center"
            ><br>
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
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Coche4'"
                v-bind:src="require(`../../assets/Coches/Coche4.png`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Coche5'"
                v-bind:src="require(`../../assets/Coches/Coche5.png`)"
                alt=""
                class="card"
              />
              <img
                v-if="cardSelected == 'Coche6'"
                v-bind:src="require(`../../assets/Coches/Coche6.png`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Coche7'"
                v-bind:src="require(`../../assets/Coches/Coche7.png`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Coche8'"
                v-bind:src="require(`../../assets/Coches/Coche8.png`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Coche9'"
                v-bind:src="require(`../../assets/Coches/Coche9.png`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Coche10'"
                v-bind:src="require(`../../assets/Coches/Coche10.png`)"
                alt=""
                class="h-96 w-64"
              />
            </div>
            <div
              v-if="selected == 'Pokemon'"
              class="h-full flex justify-center items-center"
            >
              <img
                v-if="cardSelected == 'Pokemon1'"
                v-bind:src="require(`../../assets/Pokemons/Pokemon1.png`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Pokemon2'"
                v-bind:src="require(`../../assets/Pokemons/Pokemon2.png`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Pokemon3'"
                v-bind:src="require(`../../assets/Pokemons/Pokemon3.png`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Pokemon4'"
                v-bind:src="require(`../../assets/Pokemons/Pokemon4.png`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Pokemon5'"
                v-bind:src="require(`../../assets/Pokemons/Pokemon5.png`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Pokemon6'"
                v-bind:src="require(`../../assets/Pokemons/Pokemon6.jpg`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Pokemon7'"
                v-bind:src="require(`../../assets/Pokemons/Pokemon7.jpg`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Pokemon8'"
                v-bind:src="require(`../../assets/Pokemons/Pokemon8.jpg`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Pokemon9'"
                v-bind:src="require(`../../assets/Pokemons/Pokemon9.jpg`)"
                alt=""
                class="h-96 w-64"
              />
              <img
                v-if="cardSelected == 'Pokemon10'"
                v-bind:src="require(`../../assets/Pokemons/Pokemon10.jpg`)"
                alt=""
                class="h-96 w-64"
              />
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
import { getInfoCard, updateUnitsOfCard,deleteUnitsOfCard } from '../../services/Api'
export default {
  name: "CollectionsEdit",
  components: {
    TaskbarAdmin,
  },
  setup() {
    const create = ref(false);
    const unitsCard = ref(0)
    const edit = ref(false);
    const title = ref(true);
    const selected = ref("");
    const cardSelected = ref("");


    const setUnits = async (cardSelected) => {
      const response = await getInfoCard(cardSelected)
      const { units } = response.data
      unitsCard.value = units
    }

    const increment = () => {
      unitsCard.value ++;
    };
    const decrement = () => {
      unitsCard.value --;
      if (unitsCard.value < 0) unitsCard.value = 0;
    };

    const actualizar = async () => {
      const cardName = cardSelected.value;
      const cardUnits = unitsCard.value;
      await deleteUnitsOfCard(cardName, unitsCard.value);
      await updateUnitsOfCard(cardUnits, cardName);
    };


    return {
      create,
      unitsCard,
      edit,
      title,
      selected,
      cardSelected,
      setUnits,
      increment, 
      decrement,
      actualizar
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