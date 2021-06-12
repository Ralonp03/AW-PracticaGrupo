<template>
  <div class="flex">
    <TaskBar />
    <div class="container">
      <div class="cajaGlobal h-full flex justify-center items-center">
        <div
          class="cartaContainer h-3/6 w-3/12 p-4 mr-16 bg-gray-100 border-solid rounded-3xl border-4 shadow-2xl"
        >
          <div class="card h-full w-full">
            <img
              v-if="selected == 'Coche1'"
              v-bind:src="require(`../assets/Coches/Coche1.png`)"
              alt=""
              class="card"
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
        <div class="seccionCompra h-3/6 w-3/12 p-4 bg-gray-100 border-green-600 border-solid rounded-3xl border-4 flex flex-col items-center">
          <div class="justify-center w-full">
            <span>
              <img src="../assets/down-arrow.png" class="absolute h-8 w-8 ml-4 mt-2">
            </span>
            <select
              v-model="selected"
              @change="recopilar()"
              class="w-full text-center border border-gray-300 rounded-full text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none "
            >
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
          <div class="mt-4">
            <p class="w-full text-black text-xl">Precio: <span class="font-bold">{{ priceCard }} </span></p>
          </div>
          <div class="mt-4">
            <p class="w-full text-black text-xl">Mis puntos: <span class="font-bold">{{ myPoints }} </span></p>
          </div>
          <div class="mt-4">
            <p class="w-full text-black text-xl"> Unidades disponibles: <span class="font-bold">{{ units }}</span></p>
          </div>
          <div class="buttons mt-4 flex justify-center items-center w-full">
          <button
            v-on:click.prevent="increment" class="bg-blue-500 h-8 w-16 rounded-full font-bold text-white hover:bg-blue-600">
            +
          </button>
          <span class="text-3xl ml-4 mr-4">{{ count }}</span>
          <button
            v-on:click.prevent="decrement"
            class="bg-blue-500 rounded-full font-bold text-white h-8 w-16 hover:bg-blue-600"
          >
            -
          </button>

          </div>
          <div class="mt-8 w-full">
            <button
              v-on:click.prevent="buy"
              class="h-12 bg-blue-500 rounded-full font-bold text-white w-full hover:bg-blue-600"
            >
              Comprar
            </button>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskBar from "../views/TaskBar.vue";
import { loginUser } from "../services/Api";
import { consultaPrueba } from "../services/Api";
import { deleteUnitsOfCard } from "../services/Api";
import { recopilar } from "../services/Api";

export default {
  name: "Gallery",
  methods: {
    async recopilar() {
      var name = this.selected;
      const response = await recopilar(name);
      if (response.status === 200) {
        this.priceCard = response.data.price;
        this.units = response.data.units;
      }
    },

    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },

    async buy() {
      if (
        this.units >= this.count &&
        this.myPoints >= this.priceCard * this.count
      ) {
        this.myPoints = this.myPoints - this.count * this.priceCard;
        if (this.units >= this.count) {
          this.units = this.units - this.count;
        }

        var nameUsuario = "cr7";
        var userPoints = this.myPoints;
        var cardName = this.selected;
        var name = this.selected;
        var cardUnits = this.count;
        const response = await consultaPrueba(nameUsuario, userPoints, name);
        if (response.status === 200) {
          //Bien realizado la compra
        }
        const response2 = await deleteUnitsOfCard(cardName, this.units);
        if (response2.status === 200) {
          //Bien realizada la actualizacion de unidades
        }
        return {
          consultaPrueba,
          deleteUnitsOfCard,
          nameUsuario,
          userPoints,
          cardName,
          cardUnits,
        };
      }
    },

    async login() {
      const username = "cr7";
      const passwd = "1234";

      const response = await loginUser(username, passwd);

      //Vista socio
      if (response.status === 200) {
        this.myPoints = response.data.points;
        // response.data.role === "admin" && router.push('/AdminHome')
      }
    },
  },
  components: {
    TaskBar,
  },
  data: () => {
    return {
      units: 0,
      count: 0,
      selected: "Coche1",
      priceCard: 0,
      myPoints: 0,
    };
  },
  beforeMount() {
    this.login(), this.recopilar();
  },
};
</script>

<style>
img.card {
  margin-left: auto;
  margin-right: auto;
  width: 17.3rem;
  height: 27rem;
  border-radius: 1.3rem;
  border: 4px solid rgba(0, 128, 0, 0.452);
}
</style>
