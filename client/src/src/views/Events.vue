<template>
  <div class="flex">
    <TaskBar />

    <div class="py-12 bg-white ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="absolute inset-x-0 top-7 h-15 lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Bienvenido a la pestaña eventos {{ username }} !</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          ¡ Gana puntos teniendo éxito en los eventos !
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          El máximo número de intentos es uno!
        </p>
      </div>
    </div>
  </div>

   <div class="container">
      <div class="cajaGlobal h-full flex justify-center items-center">
          <div class="flex-column">

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

      </div>
   </div>
    </div>

  </div>
</template>

<script>
import TaskBar from "./TaskBar.vue";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref } from "vue";
import { compruebaEvento } from '../services/Api';
export default {
  name: "Events",
  components: {
    TaskBar
  },
  methods:{
    setup() {
      const store = useStore();
      const username = ref("");
      const userPoints = ref("");

      onMounted(() => {
        username.value = store.getters.getUserName;
        userPoints.value = store.getters.getUserPoints;
      });

      return { username, userPoints };
    }, 
     async compruebaEvento(){
        console.log("paso");
        //const question = this.selected;
        //const answer = this.selected2;
        const question = "prueba";
        const answer = "prueba";
        console.log(question);
        console.log(answer);
        const response = await compruebaEvento(question,answer)

        if(response.status === 200){
            //Datos actualizados
            console.log("gucci")
        } else {
            //Error al actualizar los datos
        }
        return {
            compruebaEvento, 
            question,
            answer
        }
    },
  },
  data: () => {
    return {
      selected: "",
      selected2: ""
    };
  },
};

</script>