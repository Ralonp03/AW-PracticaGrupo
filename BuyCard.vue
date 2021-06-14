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
              <option>Coleccion1</option>
              <option>Coleccion2</option>
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
    const store = useStore();

    onMounted(async () => {
      myPoints.value = await getInfoUser(store.getters.getUserName);
    });

    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
      if (count.value < 0) count.value = 0;
    };

    const recopilar = async () => {
      if(selected.value == "Coleccion1" || selected.value == "Coleccion2") 
      {

      if(selected.value == "Coleccion1")
      {
        var auxiliar = ["Coche1","Coche2","Coche3","Coche4","Coche5","Coche6","Coche7","Coche8","Coche9","Coche10"];
        var aux = "";
        for(var i = 0;i < auxiliar.length;i++)
        {
            const response = await getInfoCard(auxiliar[i]);
            if (response.status === 200) 
            {

            if(response.data.state == "active")
            {
              aux = "true";
            }else
            {
              aux = "false";
              break;
            }

          } 
        }

        if(aux == "false")
        {
          alert("Collecion no disponible")
          priceCard.value = 1000;
          document.getElementById("botn").style.visibility  = "hidden";
        }else if(aux == "true")
        {
           priceCard.value = 1000;
           alert("Collecion disponible")
           document.getElementById("botn").style.visibility  = "visible";
        }

      }else  if(selected.value == "Coleccion2")
      {
        const auxiliar1 = ["Pokemon1","Pokemon2","Pokemon3","Pokemon4","Pokemon5","Pokemon6","Pokemon7","Pokemon8","Pokemon9","Pokemon10"];
        var aux1 = "";
        for(var k = 0;k < auxiliar1.length;k++)
        {

            const response = await getInfoCard(auxiliar1[k]); 
            if (response.status === 200) 
            {

            if(response.data.state == "active")
            {
              aux1 = "true";   
            }else
            {
              aux1 = "false";
              break; 
            } 
   
          }
        }

        if(aux1 == "false")
        {
          priceCard.value = 1000;
          alert("Collecion no disponible")
          document.getElementById("botn").style.visibility  = "hidden";
        }else if(aux1 == "true") 
        { 
          priceCard.value = 1000;
          alert("Collecion disponible")
           document.getElementById("botn").style.visibility  = "visible";
        } 
  
      }
      }else
      {
      const response = await getInfoCard(selected.value);
      if (response.status === 200) {
          if(response.data.state == "active"){
            document.getElementById("botn").style.visibility  = "visible";
            priceCard.value = response.data.price;
            units.value = response.data.units;
          }else{
            alert("Carta no disponible")
            priceCard.value = response.data.price;
            units.value = response.data.units;
            document.getElementById("botn").style.visibility  = "hidden";
          }
      }
      }
    };

    const buy = async () => { 
      if (
        units.value >= count.value && 
        myPoints.value >= priceCard.value * count.value
      ) {
        myPoints.value = myPoints.value - count.value * priceCard.value;
        if (units.value >= count.value) units.value = units.value - count.value;

        const nameUsuario = store.getters.getUserName;
        const userPoints = myPoints.value;
        const cardName = selected.value;

        await compraCarta(nameUsuario, userPoints, cardName);
        if(cardName == "Coleccion1" || cardName == "Coleccion2")
        {
          if(cardName == "Coleccion1")
          {
            var listaCoches = ["Coche1","Coche2","Coche3","Coche4","Coche5","Coche6","Coche7","Coche8","Coche9","Coche10"];
            for(var i = 0;i < listaCoches.length;i++)
            {
             await deleteUnitsOfCard(listaCoches[i], units.value); 
            }
          }else if(cardName == "Coleccion2")
          {
             var listaPokemones = ["Pokemon1","Pokemon2","Pokemon3","Pokemon4","Pokemon5","Pokemon6","Pokemon7","Pokemon8","Pokemon9","Pokemon10"];
            for(var j = 0;j < listaPokemones.length;j++)
            {
             await deleteUnitsOfCard(listaPokemones[j], units.value); 
            }
          } 
        }else 
        { 
          await deleteUnitsOfCard(cardName, units.value);
        }
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
  border: 4px solid rgba(0, 128, 0, 0.452);
}
</style>
