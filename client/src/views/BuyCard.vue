<template>
  <div class="flex">
    <TaskBar :points="myPoints"/>
    <div class="container">
      <div class="cajaGlobal h-full flex justify-center items-center">
        <div
          class="cartaContainer h-3/6 w-3/12 p-4 mr-16 bg-gray-100 border-solid rounded-3xl border-4 shadow-2xl"
        >
          <div class="card h-full w-full">
            <img
              id="Coche1"
              v-if="selected == 'Coche1'"
              v-bind:src="require(`../assets/Coches/Coche1.png`)"
              alt=""
              class="card"
            />
            <img
             id="Coche2"
              v-if="selected == 'Coche2'"
              v-bind:src="require(`../assets/Coches/Coche2.png`)"
              alt=""
              class="card"
            />
            <img
             id="Coche3"
              v-if="selected == 'Coche3'"
              v-bind:src="require(`../assets/Coches/Coche3.png`)"
              alt=""
              class="card"
            />
            <img
                         id="Coche4"

              v-if="selected == 'Coche4'"
              v-bind:src="require(`../assets/Coches/Coche4.png`)"
              alt=""
              class="card"
            />
            <img
                         id="Coche5"
              v-if="selected == 'Coche5'"
              v-bind:src="require(`../assets/Coches/Coche5.png`)"
              alt=""
              class="card"
            />
            <img
                                     id="Coche6"

              v-if="selected == 'Coche6'"
              v-bind:src="require(`../assets/Coches/Coche6.png`)"
              alt=""
              class="card"
            />
            <img
                                     id="Coche7"

              v-if="selected == 'Coche7'"
              v-bind:src="require(`../assets/Coches/Coche7.png`)"
              alt=""
              class="card"
            />
            <img
                                                 id="Coche8"
              v-if="selected == 'Coche8'"
              v-bind:src="require(`../assets/Coches/Coche8.png`)"
              alt=""
              class="card"
            />
            <img
            id="Coche9"
              v-if="selected == 'Coche9'"
              v-bind:src="require(`../assets/Coches/Coche9.png`)"
              alt=""
              class="card"
            />
            <img
             id="Coche10"
              v-if="selected == 'Coche10'"
              v-bind:src="require(`../assets/Coches/Coche10.png`)"
              alt=""
              class="card" 
            />
            <img
                         id="Pokemon1"
              v-if="selected == 'Pokemon1'"
              v-bind:src="require(`../assets/Pokemons/Pokemon1.png`)"
              alt="" 
              class="card"
            />
            <img
                                     id="Pokemon2"

              v-if="selected == 'Pokemon2'"
              v-bind:src="require(`../assets/Pokemons/Pokemon2.png`)"
              alt="" 
              class="card"
            />
            <img
                                     id="Pokemon3"

              v-if="selected == 'Pokemon3'"
              v-bind:src="require(`../assets/Pokemons/Pokemon3.png`)"
              alt="" 
              class="card"
            />
            <img
                                     id="Pokemon4"

              v-if="selected == 'Pokemon4'"
              v-bind:src="require(`../assets/Pokemons/Pokemon4.png`)"
              alt="" 
              class="card"
            />
            <img
                                     id="Pokemon5"

              v-if="selected == 'Pokemon5'"
              v-bind:src="require(`../assets/Pokemons/Pokemon5.png`)"
              alt="" 
              class="card"
            />
            <img
                                     id="Pokemon6"

              v-if="selected == 'Pokemon6'"
              v-bind:src="require(`../assets/Pokemons/Pokemon6.jpg`)"
              alt="" 
              class="card"
            />
            <img
                                     id="Pokemon7"

              v-if="selected == 'Pokemon7'"
              v-bind:src="require(`../assets/Pokemons/Pokemon7.jpg`)"
              alt=""
              class="card"
            />
            <img
                                     id="Pokemon8"

              v-if="selected == 'Pokemon8'"
              v-bind:src="require(`../assets/Pokemons/Pokemon8.jpg`)"
              alt=""
              class="card"
            />
            <img
                                     id="Pokemon9"

              v-if="selected == 'Pokemon9'"
              v-bind:src="require(`../assets/Pokemons/Pokemon9.jpg`)"
              alt=""
              class="card"
            />
            <img
                                     id="Pokemon10"

              v-if="selected == 'Pokemon10'"
              v-bind:src="require(`../assets/Pokemons/Pokemon10.jpg`)"
              alt=""
              class="card"
            />
          </div>
        </div>
        <div
          class="seccionCompra h-3/6 w-3/12 p-4 bg-gray-100 border-green-600 border-solid rounded-3xl border-4 flex flex-col items-center"
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
              <option value="Coche1">Abadal</option>
              <option value="Coche2">Abarath</option>
              <option value="Coche3">Abbolt-Detroit</option>
              <option value="Coche4">ABT</option>
              <option value="Coche5">AC</option>
              <option value="Coche6">Acura</option>
              <option value="Coche7">Aixam</option>
              <option value="Coche8">Alfa Romeo</option>
              <option value="Coche9">Alpina</option>
              <option value="Coche10">Alrine</option>
              <option value="Pokemon1">Articuno(Basico)</option>
              <option value="Pokemon2">Venusaur(Fase 2)</option>
              <option value="Pokemon3">Charizard(Fase 3)</option>
              <option value="Pokemon4">Blastoise(Fase 2)</option>
              <option value="Pokemon5">Mew(Basico)</option>
              <option value="Pokemon6">Lapras(Basico)</option>
              <option value="Pokemon7">Zapdos(Basico)</option>
              <option value="Pokemon8">Pikachu(Basico)</option>
              <option value="Pokemon9">Moltres(Basico)</option>
              <option value="Pokemon10">MewTwo(Basico)</option>
            </select>
          </div>
          <div  > 
          <div class="mt-4">
            <p class="w-full text-black text-xl">
              Precio: <span class="font-bold">{{ priceCard }} </span>
            </p>
          </div>
          <div class="mt-4">
            <p class="w-full text-black text-xl">
              Mis puntos: <span class="font-bold">{{ myPoints }} </span>
            </p>
          </div>
          <div class="mt-4">
            <p class="w-full text-black text-xl">
              Unidades disponibles: <span class="font-bold">{{ units }}</span>
            </p>
          </div>
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
          <div class="mt-8 w-full">
            <button id="botn"
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
  </div>
</template>

<script>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import TaskBar from "../views/TaskBar.vue";
import {
  getInfoUser,
  getInfoCard,
  compraCarta,
  deleteUnitsOfCard,
} from "../services/Api";

export default {
  name: "Gallery",
  components: {
    TaskBar,
  },
  setup() {
    const selected = ref("");
    const priceCard = ref(0);
    const units = ref(0);
    const myPoints = ref(0);
    const count = ref(0);
    const primeraVez = ref("false");
    const store = useStore();

    onMounted(async () => {
      myPoints.value = await getInfoUser(store.getters.getUserName);
    });

    const increment = () => {
      if(count.value != units.value){ 
      
      count.value++;
      }
    };
    const decrement = () => {
      count.value--;
      if (count.value < 0) count.value = 0;
    };

    const recopilar = async () => {
      const response = await getInfoCard(selected.value);

      if (response.status === 200) {
          primeraVez.value = "true";
          if(response.data.state == "active"){
            document.getElementById(selected.value).className = "card"
            document.getElementById("botn").style.visibility  = "visible";
            priceCard.value = response.data.price;
            units.value = response.data.units;
            if(units.value == 0){
                 document.getElementById(selected.value).className = "cardGris"
                 alert("No hay mas unidades de esa carta")
                 document.getElementById("botn").style.visibility  = "hidden";
            }
          }else{
        priceCard.value = response.data.price;
        units.value = response.data.units;
        document.getElementById(selected.value).className = "cardGris"
        alert("No se puede completar la accion")
        document.getElementById("botn").style.visibility  = "hidden";
            
          }
      }
    };

    const buy = async () => {
      if (
        units.value >= count.value &&
        myPoints.value >= priceCard.value * count.value && count.value != 0
      ) {
        myPoints.value = myPoints.value - count.value * priceCard.value;
        if (units.value >= count.value) units.value = units.value - count.value;

        const nameUsuario = store.getters.getUserName;
        const userPoints = myPoints.value;
        const cardName = selected.value;
        if(units.value == 0){
             document.getElementById("botn").style.visibility  = "hidden";
             document.getElementById(selected.value).className = "cardGris"
        }
        await compraCarta(nameUsuario, userPoints, cardName);
        await deleteUnitsOfCard(cardName, units.value);
      }else{
               alert("No se puede completar la accion")
      }
    };

    return {
      recopilar,
      selected,
      priceCard,
      units,
      myPoints,
      increment,
      decrement,
      count,
      buy,
      primeraVez
    };
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
  filter: grayscale(0);
  border: 4px solid rgba(0, 128, 0, 0.452);
}
img.cardGris {
  margin-left: auto;
  margin-right: auto;
  width: 17.3rem;
  height: 27rem;
  border-radius: 1.3rem;
  filter: grayscale(1);
  border: 4px solid rgba(0, 128, 0, 0.452);
}

</style>
