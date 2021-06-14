<template>
  <div class="flex">
    <div class="container">
      <div class="cajaGlobal h-full flex justify-center items-center">
        <div
          class="cartaContainer h-3/9 w-3/12 p-4 mr-16 bg-gray-100 border-solid rounded-3xl border-4 shadow-2xl"
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
              class="card"
            />
            <img
              v-if="selected == 'Coche3'"
              v-bind:src="require(`../assets/Coches/Coche3.png`)"
              alt=""
              class="card"
            />
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
            />
            <img
              v-if="selected == 'Pokemon1'"
              v-bind:src="require(`../assets/Pokemons/Pokemon1.png`)"
              alt="" 
              class="card"
            />
            <img
              v-if="selected == 'Pokemon2'"
              v-bind:src="require(`../assets/Pokemons/Pokemon2.png`)"
              alt="" 
              class="card"
            />
            <img
              v-if="selected == 'Pokemon3'"
              v-bind:src="require(`../assets/Pokemons/Pokemon3.png`)"
              alt="" 
              class="card"
            />
            <img
              v-if="selected == 'Pokemon4'"
              v-bind:src="require(`../assets/Pokemons/Pokemon4.png`)"
              alt="" 
              class="card"
            />
            <img
              v-if="selected == 'Pokemon5'"
              v-bind:src="require(`../assets/Pokemons/Pokemon5.png`)"
              alt="" 
              class="card"
            />
            <img
              v-if="selected == 'Pokemon6'"
              v-bind:src="require(`../assets/Pokemons/Pokemon6.jpg`)"
              alt="" 
              class="card"
            />
            <img
              v-if="selected == 'Pokemon7'"
              v-bind:src="require(`../assets/Pokemons/Pokemon7.jpg`)"
              alt=""
              class="card"
            />
            <img
              v-if="selected == 'Pokemon8'"
              v-bind:src="require(`../assets/Pokemons/Pokemon8.jpg`)"
              alt=""
              class="card"
            />
            <img
              v-if="selected == 'Pokemon9'"
              v-bind:src="require(`../assets/Pokemons/Pokemon9.jpg`)"
              alt=""
              class="card"
            />
            <img
              v-if="selected == 'Pokemon10'"
              v-bind:src="require(`../assets/Pokemons/Pokemon10.jpg`)"
              alt=""
              class="card"
            />
          </div>
        </div>
        <div
          class="seccionCompra h-3/9 w-3/12 p-4 bg-gray-100 border-green-600 border-solid rounded-3xl border-4 flex flex-col items-center"
        >
          <div class="justify-center w-full">
            <span>
              <img
                src="../assets/down-arrow.png"
                class="absolute h-8 w-8 ml-4 mt-2"
              />
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
            <p class="w-full text-black text-xl">
              Precio: <span class="font-bold">{{ priceCard }} </span>
            </p>
          </div>
          <div class="mt-4">
            <p class="w-full text-black text-xl">
              Unidades: <span class="font-bold">{{ units }} </span>
            </p>
          </div>
          <h4 class="text-black dark:text-gray-100 text-justify font-semibold">
                Incremente o decremente el número de unidades disponibles de esta carta
          </h4>
          <div class="buttons mt-4 flex justify-center items-center w-full">
            <button
              @click.prevent="decrement"
              class="bg-blue-500 rounded-full font-bold text-white h-8 w-16 hover:bg-blue-600 text-xl"
            >
              -
            </button>
            <span class="text-3xl ml-4 mr-4">{{ count }}</span>
            <button
              @click.prevent="increment"
              class="bg-blue-500 h-8 w-16 rounded-full font-bold text-white hover:bg-blue-600 text-xl"
            >
              +
            </button>
          </div>
          <h4 class="text-black dark:text-gray-100 text-justify font-semibold">
              Incremente o decremente el precio de la carta que desee
          </h4>
          <div class="buttons mt-4 flex justify-center items-center w-full">
            <button
              @click.prevent="decrementPrice"
              class="bg-blue-500 rounded-full font-bold text-white h-8 w-16 hover:bg-blue-600 text-xl"
            >
              -
            </button>
            <span class="text-3xl ml-4 mr-4">{{ countPrice }}</span>
            <button
              @click.prevent="incrementPrice"
              class="bg-blue-500 h-8 w-16 rounded-full font-bold text-white hover:bg-blue-600 text-xl"
            >
              +
            </button>
          </div>
          <div class="mt-8 w-full">
            <button id="botn"
              v-on:click.prevent="addOrDelete"
              class="h-12 bg-blue-500 rounded-full font-bold text-white w-full hover:bg-blue-600"
            >
              Modificar Unidades
            </button>
          </div>
          <div class="mt-8 w-full">
            <button id="botn"
              v-on:click.prevent="price"
              class="h-12 bg-blue-500 rounded-full font-bold text-white w-full hover:bg-blue-600"
            >
              Modificar Precio
            </button>
          </div>
          <div class="mt-8 w-full">
            <button id="botn"
              v-on:click.prevent="actualizar"
              class="h-12 bg-blue-500 rounded-full font-bold text-white w-full hover:bg-blue-600"
            >
              Actualizar Stock
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUser } from '../services/Api';
import { updateDatas } from '../services/Api';
import { recopilar } from '../services/Api';

export default {
  name: "Gallery",
  methods: {

    async recopilar(){
      var name = this.selected;
      const response = await recopilar(name)
      if(response.status === 200){
        this.priceCard = response.data.price;
        this.units = response.data.units;
      }
    },

    increment() {
      this.count = this.count + 1;
    },

    decrement() {
      if (this.units > this.count) {
        this.count = this.count - 1;
      }
    },

    incrementPrice() {
      this.countPrice = this.countPrice + 50;
    },
    decrementPrice() {
      if (this.countPrice > -200) {
        this.countPrice = this.countPrice - 50;
      }
    },
    
    price() {
      if (this.priceCard >= this.countPrice) {
        this.priceCard = this.priceCard + this.countPrice;
      } else {
          if(this.countPrice > 0){
              this.priceCard = this.priceCard + this.countPrice;
          }
      }
    },

    addOrDelete() {
        if((this.units + this.count) < 0){
            this.units = 0;
        } else {
            this.units = this.units + this.count;
        }
    },

    async actualizar(){
        const cardUnits = this.units;
        const cardPrice = this.priceCard;
        const cardName = this.selected;
        const response = await updateDatas(cardUnits, cardPrice, cardName)

        if(response.status === 200){
            //Datos actualizados
        } else {
            //Error al actualizar los datos
        }
        return {
            updateDatas,
            cardUnits,
            cardPrice,
            cardName
        }
    },

    async login(){
      const username = "test";
      const passwd = "1234";

      const response = await loginUser(username,passwd)

      //Vista socio
      if(response.status === 200){
        // response.data.role === "admin" && router.push('/AdminHome')
      }
    },
  },
  data: () => {
    return {
        units: 5,
        countPrice:0,
        count:0,
        selected:"Coche 1",
        priceCard: 200,
    }
  },
  beforeMount(){
    this.login()
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