<template>
  <div class="flex bg-gray-300 dark:bg-gray-900">
    <TaskBar :points="pointsUser" />
    <div class="w-full">
      <div class="min-h-screen bg-gray-300 dark:bg-gray-900 py-6 flex flex-col text-center sm:py-s">
        <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
        <h1>Bienvenido a tu tablero</h1>
        <span style="font-size: 60%" class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Cartas Pokemon: {{ cartas1 }}/10 ({{ estateCollection1 }}) </span><br />
        <span style="font-size: 60%" class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Cartas Coches: {{ cartas2 }}/10 ({{ estateCollection2 }})</span>
        </h1>
        <div class="ml-10 grid lg:grid-cols-5 gap-5">
          <div v-for="selected in cartasUser" :key="selected">
            <img
              v-if="selected == 'Coche1'"
              v-bind:src="require(`../assets/Coches/Coche1.png`)"
              alt=""
            />
              <img
              v-if="selected == 'Coche2'"
              v-bind:src="require(`../assets/Coches/Coche2.png`)"
              alt=""
              />
            <img
              v-if="selected == 'Coche3'"
              v-bind:src="require(`../assets/Coches/Coche3.png`)"
              alt=""
            />
            <img
              v-if="selected == 'Coche4'"
              v-bind:src="require(`../assets/Coches/Coche4.png`)"
              alt=""
            />
            <img
              v-if="selected == 'Coche5'"
              v-bind:src="require(`../assets/Coches/Coche5.png`)"
              alt=""
            />
            <img
              v-if="selected == 'Coche6'"
              v-bind:src="require(`../assets/Coches/Coche6.png`)"
              alt=""
            />
            <img
              v-if="selected == 'Coche7'"
              v-bind:src="require(`../assets/Coches/Coche7.png`)"
              alt=""
            />
            <img
              v-if="selected == 'Coche8'"
              v-bind:src="require(`../assets/Coches/Coche8.png`)"
              alt=""
            />
            <img
              v-if="selected == 'Coche9'"
              v-bind:src="require(`../assets/Coches/Coche9.png`)"
              alt=""
            />
            <img
              v-if="selected == 'Coche10'"
              v-bind:src="require(`../assets/Coches/Coche10.png`)"
              alt=""
            />
            <img
              v-if="selected == 'Pokemon1'"
              v-bind:src="require(`../assets/Pokemons/Pokemon1.png`)"
              alt=""
            />
            <img
              v-if="selected == 'Pokemon2'"
              v-bind:src="require(`../assets/Pokemons/Pokemon2.png`)"
              alt=""
            />
            <img
              v-if="selected == 'Pokemon3'"
              v-bind:src="require(`../assets/Pokemons/Pokemon3.png`)"
              alt=""
            />
            <img
              v-if="selected == 'Pokemon4'"
              v-bind:src="require(`../assets/Pokemons/Pokemon4.png`)"
              alt=""
            />
            <img
              v-if="selected == 'Pokemon5'"
              v-bind:src="require(`../assets/Pokemons/Pokemon5.png`)"
              alt=""
            />
            <img
              v-if="selected == 'Pokemon6'"
              v-bind:src="require(`../assets/Pokemons/Pokemon6.jpg`)"
              alt=""
            />
            <img
              v-if="selected == 'Pokemon7'"
              v-bind:src="require(`../assets/Pokemons/Pokemon7.jpg`)"
              alt=""
            />
            <img
              v-if="selected == 'Pokemon8'"
              v-bind:src="require(`../assets/Pokemons/Pokemon8.jpg`)"
              alt=""
            />
            <img
              v-if="selected == 'Pokemon9'"
              v-bind:src="require(`../assets/Pokemons/Pokemon9.jpg`)"
              alt=""
            />
            <img
              v-if="selected == 'Pokemon10'"
              v-bind:src="require(`../assets/Pokemons/Pokemon10.jpg`)"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskBar from "./TaskBar.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";
import { getInfoUser, getAllCards, getInfoCardById } from "../services/Api";

export default {
  name: "MyCollections",
  components: {
    TaskBar,
  },
  setup() {
    const pointsUser = ref(0);
    const cartasUser = ref([]);
    const cartas1 = ref(0);
    const cartas2 = ref(0);
    const estateCollection1 = ref("No iniciada");
    const estateCollection2 = ref("No iniciada");
    const store = useStore();

    onMounted(async () => {
      pointsUser.value = await getInfoUser(store.getters.getUserName);
      try {
        let allCards = await getAllCards(store.getters.getUserName);
        const cards = allCards.data[0].cards;
        for (let card of cards) {
          let cardElement = await getInfoCardById(card);
          const { data } = cardElement;
          cartasUser.value.push(data.name);
          if (data.name.search("Coche")) {
            cartas1.value++;
            if (cartas1.value == 0) {
              estateCollection1.value = "No iniciada";
            } else if (cartas1.value == 10) {
              estateCollection1.value = "Finallizada";
            } else if (cartas1.value < 10) {
              estateCollection1.value = "Completada parcialmente";
            }
          } else {
            cartas2.value++;
            if (cartas2.value == 0){
              estateCollection2.value = "No iniciada";
            } else if (cartas2.value == 10) {
              estateCollection2.value = "Finallizada";
            } else if (cartas2.value < 10) {
              estateCollection2.value = "Completada parcialmente";
            }
          }
        }
      } catch (err) {
        console.log("error: ", err);
      }
    });

    return {
      pointsUser,
      cartasUser,
      cartas1,
      cartas2,
      estateCollection1,
      estateCollection2,
    };
  },
};
</script>

<style></style>
