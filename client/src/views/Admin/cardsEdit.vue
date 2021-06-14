<template>
  <div class="bg-yellow-100 flex">
    <TaskbarAdmin />
    <div class="editWindow m-auto bg-white">
      <header>
        <h2 class="w-full text-center text-xl">Editar Precio</h2>
      </header>
      <div class="card h-full w-full">
        <img
          v-if="selected == 'Coche1'"
          v-bind:src="require(`../../assets/Coches/Coche1.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Coche2'"
          v-bind:src="require(`../../assets/Coches/Coche2.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Coche3'"
          v-bind:src="require(`../../assets/Coches/Coche3.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Coche4'"
          v-bind:src="require(`../../assets/Coches/Coche4.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Coche5'"
          v-bind:src="require(`../../assets/Coches/Coche5.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Coche6'"
          v-bind:src="require(`../../assets/Coches/Coche6.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Coche7'"
          v-bind:src="require(`../../assets/Coches/Coche7.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Coche8'"
          v-bind:src="require(`../../assets/Coches/Coche8.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Coche9'"
          v-bind:src="require(`../../assets/Coches/Coche9.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Coche10'"
          v-bind:src="require(`../../assets/Coches/Coche10.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Pokemon1'"
          v-bind:src="require(`../../assets/Pokemons/Pokemon1.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Pokemon2'"
          v-bind:src="require(`../../assets/Pokemons/Pokemon2.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Pokemon3'"
          v-bind:src="require(`../../assets/Pokemons/Pokemon3.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Pokemon4'"
          v-bind:src="require(`../../assets/Pokemons/Pokemon4.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Pokemon5'"
          v-bind:src="require(`../../assets/Pokemons/Pokemon5.png`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Pokemon6'"
          v-bind:src="require(`../../assets/Pokemons/Pokemon6.jpg`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Pokemon7'"
          v-bind:src="require(`../../assets/Pokemons/Pokemon7.jpg`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Pokemon8'"
          v-bind:src="require(`../../assets/Pokemons/Pokemon8.jpg`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Pokemon9'"
          v-bind:src="require(`../../assets/Pokemons/Pokemon9.jpg`)"
          alt=""
          class="card"
        />
        <img
          v-if="selected == 'Pokemon10'"
          v-bind:src="require(`../../assets/Pokemons/Pokemon10.jpg`)"
          alt=""
          class="card"
        />
        <div class="text-center">
          <button
            @click.prevent="decrement"
            class="
              bg-blue-500
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
          <span class="text-3xl ml-4 mr-4">{{ count }}</span>
          <button
            @click.prevent="increment"
            class="
              bg-blue-500
              h-8
              w-16
              rounded-full
              font-bold
              text-white
              hover:bg-blue-600
              text-xl
            "
          >
            +
          </button>
        </div>
        <div class="seleccion text-center">
          <label for="cardSelection">Selecciona la carta a editar: </label>
          <select v-model="selected" @change="recopilar()">
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
        <div class="mt-8 w-full text-center">
          Precio actual: <span class="font-bold">{{ priceCard }}</span>
          <button
            id="botn"
            v-on:click.prevent="actualizar"
            class="
              h-12
              bg-blue-500
              rounded-full
              font-bold
              text-white
              w-full
              hover:bg-blue-600
            "
          >
            Actualizar Precio
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskbarAdmin from "./TaskbarAdmin.vue";
import { ref } from "vue";
import { getInfoCard } from "../../services/Api";
export default {
  name: "cardsEdit",
  components: {
    TaskbarAdmin,
  },
  setup() {
    const selected = ref("");
    const priceCard = ref(0);
    const units = ref(0);
    const count = ref(0);

    const recopilar = async () => {
      const response = await getInfoCard(selected.value);
      if (response.status === 200) {
        if (response.data.state == "active") {
          document.getElementById("botn").style.visibility = "visible";
          priceCard.value = response.data.price;
          units.value = response.data.units;
          count.value = priceCard.value
        } else {
          alert("Carta no disponible");
          priceCard.value = response.data.price;
          units.value = response.data.units;
          document.getElementById("botn").style.visibility = "hidden";
        }
        
      }
    };
    const increment = () => {
      count.value += 5;
    };
    const decrement = () => {
      count.value -= 5;
      if (count.value < 0) count.value = 0;
    };
    const actualizar = async () => {
      //const cardName = selected.value;
      //const cardPrice = count.value;
      //await updateDatas(cardPrice, cardName);
    };
    return {
      recopilar,
      selected,
      increment,
      decrement,
      count,
      actualizar,
      priceCard,
    };
  },
};
</script>

<style>
</style>