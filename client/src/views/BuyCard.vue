<template>
  <div class="App" onload="login">
    <TaskBar />
    <div class="ml-25">
      <div
        class="min-h-screen bg-gray-300 dark:bg-gray-900 py-6 flex flex-col justify-center sm:py-s"
      >
        <div
          class="ml-140 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-2"
        >
          <div>
            
          </div>

          <div
            class="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-30 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500"
          >
         <div class="relative inline-flex">
          
          <img v-if="selected == 'Coche 1'" v-bind:src="require(`../assets/Coches/Coche1.png`)" alt="" />
          <img v-if="selected == 'Coche 2'" v-bind:src="require(`../assets/Coches/Coche2.png`)" alt="" />
          <img v-if="selected == 'Coche 3'" v-bind:src="require(`../assets/Coches/Coche3.png`)" alt="" />
          <img v-if="selected == 'Coche 4'" v-bind:src="require(`../assets/Coches/Coche4.png`)" alt="" />
          <img v-if="selected == 'Coche 5'" v-bind:src="require(`../assets/Coches/Coche5.png`)" alt="" />
          <img v-if="selected == 'Coche 6'" v-bind:src="require(`../assets/Coches/Coche6.png`)" alt="" />
          <img v-if="selected == 'Coche 7'" v-bind:src="require(`../assets/Coches/Coche7.png`)" alt="" />
          <img v-if="selected == 'Coche 8'" v-bind:src="require(`../assets/Coches/Coche8.png`)" alt="" />
          <img v-if="selected == 'Coche 9'" v-bind:src="require(`../assets/Coches/Coche9.png`)" alt="" />
          <img v-if="selected == 'Coche 10'" v-bind:src="require(`../assets/Coches/Coche10.png`)" alt="" />
          <img v-if="selected == 'Pokemon 1'" v-bind:src="require(`../assets/Pokemons/Pokemon1.png`)" alt="" />
          <img v-if="selected == 'Pokemon 2'" v-bind:src="require(`../assets/Pokemons/Pokemon2.png`)" alt="" />
          <img v-if="selected == 'Pokemon 3'" v-bind:src="require(`../assets/Pokemons/Pokemon3.png`)" alt="" />
          <img v-if="selected == 'Pokemon 4'" v-bind:src="require(`../assets/Pokemons/Pokemon4.png`)" alt="" />
          <img v-if="selected == 'Pokemon 5'" v-bind:src="require(`../assets/Pokemons/Pokemon5.png`)" alt="" />
          <img v-if="selected == 'Pokemon 6'" v-bind:src="require(`../assets/Pokemons/Pokemon6.jpg`)" alt="" />
          <img v-if="selected == 'Pokemon 7'" v-bind:src="require(`../assets/Pokemons/Pokemon7.jpg`)" alt="" />
          <img v-if="selected == 'Pokemon 8'" v-bind:src="require(`../assets/Pokemons/Pokemon8.jpg`)" alt="" />
          <img v-if="selected == 'Pokemon 9'" v-bind:src="require(`../assets/Pokemons/Pokemon9.jpg`)" alt="" />
          <img v-if="selected == 'Pokemon 10'" v-bind:src="require(`../assets/Pokemons/Pokemon10.jpg`)" alt="" />


          


</div>
          </div>
          <!-- END SMALL CARD ROUNDED -->

          <!-- SMALL CARD ROUNDED -->
          <div
            class="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | "
          >
                      <div class="flex justify-center m-6">

           <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
          <select v-model="selected" class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
            <option>Coche 1</option>
            <option>Coche 2</option>
            <option>Coche 3</option>
            <option>Coche 4</option>
            <option>Coche 5</option>
            <option>Coche 6</option>
            <option>Coche 7</option>
            <option>Coche 8</option>
            <option>Coche 9</option>
            <option>Coche 10</option>
            <option>Pokemon 1</option>
            <option>Pokemon 2</option>
            <option>Pokemon 3</option>
            <option>Pokemon 4</option>
            <option>Pokemon 5</option>
            <option>Pokemon 6</option>
            <option>Pokemon 7</option>
            <option>Pokemon 8</option>
            <option>Pokemon 9</option>
            <option>Pokemon 10</option>

          </select>
                      </div>
            <h4
              class="text-black dark:text-gray-100 text-justify font-semibold"
            >
              Precio:
            </h4>
            <span class="datas">{{ priceCard }}</span
            ><br />
            <h4
              class="text-black dark:text-gray-100 text-justify font-semibold"
            >
              Mis puntos:
            </h4>
            <span class="datas">{{ myPoints }}</span
            ><br />
            <div class="flex justify-center m-6">
              <div>
                <button
                  v-on:click.prevent="decrement"
                  class="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6"
                >
                  -
                </button>
              </div>
              <div>
                <span class=" line-height-username3 text-5xl">{{ count }}</span>
              </div>
              <div>
                <button
                  v-on:click.prevent="increment"
                  class="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6"
                >
                  +</button
                ><br />
              </div>
            </div>

            <div class="flex flex-col justify-center">
              <button
                v-on:click.prevent="buy"
                class="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600"
              >
                Comprar
              </button>
            </div>
          </div>
          <!-- END SMALL CARD ROUNDED -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskBar from "../views/TaskBar.vue";
import { loginUser } from '../services/Api'

export default {
  name: "Gallery",
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
    
    buy() {
      if (this.myPoints >= this.priceCard * this.count) {
        this.myPoints = this.myPoints - this.count * this.priceCard;
      }
    },
    async login(){
      const username = "cr7";
      const passwd = "1234";

      const response = await loginUser(username,passwd)

      //Vista socio
      if(response.status === 200){
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
      count:0,
      selected:"Coche 1",
      priceCard: 200,
      myPoints: 0,
    }
  },
  beforeMount(){
    this.login()
 },
 

    
  
};
</script>

<style></style>
