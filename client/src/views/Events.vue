<template>
  <div class="flex">
    <TaskBar />

    

   <div class="container">
      <div class="cajaGlobal h-full flex justify-center items-center">
          <div class="flex-column">
            <div class="py-12 bg-white ">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="lg:text-center">
                  <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Bienvenido a la pestaña eventos {{ myUser }} !</h2>
                  <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Tienes ahora mismo {{ myPoints }} puntos</h2>
                  <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    ¡ Gana puntos teniendo éxito en los eventos !
                  </p>
                  <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    El máximo número de intentos es uno!
                  </p>
                </div>
              </div>
            </div>

               <form
        class="w-100 flex flex-col justify-center content-center"
      >

            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Evento 1: Preguntas!
            </p>
            <br>
    <div>
     <select
              v-model="selected"
              class="w-full text-center border border-gray-300 rounded-full text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none "
              required
            >
              <option>¿De que tipo pokemon es pikachu?</option>
              <option>¿Cual es el resultado de la siguiente operacion?
 2x(2+2)/4</option>
              <option>¿De que color es el caballo blanco de santiago?</option>
              <option>¿Qué marca de deportivos usa un caballo como logo?</option>
              <option>¿Cuánto es la mitad de 2, mas 2?</option>
            </select>
  </div>
  <br>
        <div>
          <select v-model="selected2" @change="compruebaEvento()" class="w-full text-center border border-gray-300 rounded-full text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none ">
            <option>eléctrico</option>
            <option>ferrari</option>
            <option>2</option>
            <option>3</option>
            <option>blanco</option>
          </select>
        </div>
 
               </form>
            <form @submit.prevent="adivinanza" class="w-100 flex flex-col justify-center content-center">

                  <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                      Evento 2: Adivinanza!
                  </p>
                  <br>
          <div>
          <select
                    v-model="selectedAd"
                    class="w-full text-center border border-gray-300 rounded-full text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none "
                    required
                  >
                    <option>Para ser más elegante no usa guante ni chaqué, solo cambia en un instante por una efe la ge</option>
                    <option>El roer es mi trabajo,el queso mi aperitivo y el gato ha sido siempre mi más temido enemigo</option>
                  </select>
          </div>
        <br>

        <div class="">
        <label for="radio-1" class="">
          <span class="">
            <input id="radio-1" v-model="checkedNames" value="Elefante" type="radio" name="radio" class="">
          </span>
          <span for="radio-1" class=""> Elefante</span>
        </label>
        <br>
        <label for="radio-2" class="">
          <span class="">
            <input id="radio-2" v-model="checkedNames" value="Jirafa" type="radio" name="radio" class="">
          </span>
          <span for="radio-2" class=""> Jirafa</span>
        </label>
          <br>
        <label for="radio-2" class="">
          <span class="">
            <input id="radio-3" v-model="checkedNames" value="Raton" type="radio" name="radio" class="">
          </span>
          <span for="radio-3" class=""> Raton</span>
        </label>
      </div>
      <br>

          <button type="submit" class="bg-transparent hover:bg-yellow-300 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded">
              Comprobar
      </button>
      
                    </form>
      </div>
   </div>
    </div>

  </div>
</template>

<script>
import TaskBar from "./TaskBar.vue";
import { useStore } from "vuex";
import { loginON } from '../services/Api';
import { comprobarEvento } from '../services/Api';
import { bonificacionEvento } from '../services/Api';
import { updateAdivinanza } from '../services/Api';
export default {
  name: "Events",
  components: {
    TaskBar
  },
  methods:{
      async login(){
          const store = useStore();
          const response = await loginON(store.getters.getUserName)
          this.myUser  =  store.getters.getUserName;

          if(response.status === 200){
            this.myPoints  = response.data.points;
          }
      },
     async compruebaEvento(){
        const question = this.selected;
        const answer = this.selected2;
        const response = await comprobarEvento(question,answer)

        if(response.status === 200){
            //Datos actualizados
            if(response.data.pointsWin === 0){
                //Respuesta erronea, no se obteniene modificacion
            } else {
                window.alert("Enhorabuena!!! Acabas de obtener 100 puntos mas para tus compras")
                var pointsUser = this.myPoints + response.data.pointsWin;
                var nameUser = this.myUser;
                const response2 = await bonificacionEvento(nameUser, pointsUser);
                if(response2.status === 200){
                  //Bonificacion sumada
                }
            }
        } else {
            //Error al actualizar los datos
        }
        return {
            comprobarEvento, 
            question,
            answer
        }
    },
    async adivinanza(){

        const question = this.selectedAd;
        const answer = this.checkedNames;
        const response = await updateAdivinanza(question,answer)
        if(response.status === 200){
            //Datos actualizados 
            if(response.data.state == "true") {
                window.alert("Enhorabuena!!! Acabas de obtener 100 puntos mas para tus compras");
                var pointsUser = this.myPoints + response.data.pointsWin;
                var nameUser = this.myUser;
                const response2 = await bonificacionEvento(nameUser, pointsUser);
                if(response2.status === 200){
                  //Bonificacion sumada
                }
            }else {
                 window.alert("Has fallado!!");
            }
        } else {   
            //Error al actualizar los datos
        }   
        return {  
            updateAdivinanza,    
            question, 
            answer 
        }  
    },
  },
  data: () => {
    return {
      selected: "",
      selected2: "",
      myPoints: 0,
      myUser: ''
    };
  },
  beforeMount(){
    this.login()
  }
};

</script>