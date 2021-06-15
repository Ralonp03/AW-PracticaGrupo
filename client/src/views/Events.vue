<template>
  <div class="flex">
    <TaskBar :points="myPoints"/>
    <div class="container">
      <div class="cajaGlobal h-full flex justify-center items-center">
        <div class="flex-column">
          <div class="bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="lg:text-center">
                <h2
                  class="
                    text-base text-indigo-600
                    font-semibold
                    tracking-wide
                    uppercase
                  "
                >
                  Bienvenido a la pestaña eventos {{ myUser }} !
                </h2>
                <h2
                  class="
                    text-base text-indigo-600
                    font-semibold
                    tracking-wide
                    uppercase
                  "
                >
                  Tienes ahora mismo
                  <span class="font-bold underline">{{ myPoints }}</span> puntos
                </h2>
                <p
                  class="
                    mt-2
                    text-3xl
                    leading-8
                    font-extrabold
                    tracking-tight
                    text-gray-900
                    sm:text-4xl
                  "
                >
                  ¡ Gana puntos teniendo éxito en los eventos !
                </p>
                <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  El máximo número de intentos es uno!
                </p>
              </div>
            </div>
          </div>

          <form class="w-100 flex flex-col justify-center content-center">
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Evento 1: Preguntas!
            </p>
            <br />
            <div>
              <select
                v-model="selected"
                class="
                  w-full
                  text-center
                  border border-gray-300
                  rounded-full
                  text-gray-600
                  h-10
                  bg-white
                  hover:border-gray-400
                  focus:outline-none
                  appearance-none
                "
                required
              >
                <option>¿De que tipo pokemon es pikachu?</option>
                <option>
                  ¿Cual es el resultado de la siguiente operacion? 2x(2+2)/4
                </option>
                <option>¿De que color es el caballo blanco de santiago?</option>
                <option>
                  ¿Qué marca de deportivos usa un caballo como logo?
                </option>
                <option>¿Cuánto es la mitad de 2, mas 2?</option>
              </select>
            </div>
            <br />
            <div>
              <select
                v-model="selected2"
                @change="compruebaEvento"
                class="
                  w-full
                  text-center
                  border border-gray-300
                  rounded-full
                  text-gray-600
                  h-10
                  bg-white
                  hover:border-gray-400
                  focus:outline-none
                  appearance-none
                "
              >
                <option>eléctrico</option>
                <option>ferrari</option>
                <option>2</option>
                <option>3</option>
                <option>blanco</option>
              </select>
            </div>
          </form>
          <form
            @submit.prevent="adivinanza"
            class="w-100 flex flex-col justify-center content-center"
          >
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Evento 2: Adivinanza!
            </p>
            <br />
            <div>
              <select
                v-model="selectedAd"
                class="
                  w-full
                  text-center
                  border border-gray-300
                  rounded-full
                  text-gray-600
                  h-10
                  bg-white
                  hover:border-gray-400
                  focus:outline-none
                  appearance-none
                "
                required
              >
                <option>
                  Para ser más elegante no usa guante ni chaqué, solo cambia en
                  un instante por una efe la ge
                </option>
                <option>
                  El roer es mi trabajo,el queso mi aperitivo y el gato ha sido
                  siempre mi más temido enemigo
                </option>
              </select>
            </div>
            <br />

            <div class="">
              <label for="radio-1" class="">
                <span class="">
                  <input
                    id="radio-1"
                    v-model="checkedNames"
                    value="Elefante"
                    type="radio"
                    name="radio"
                    class=""
                  />
                </span>
                <span for="radio-1" class=""> Elefante</span>
              </label>
              <br />
              <label for="radio-2" class="">
                <span class="">
                  <input
                    id="radio-2"
                    v-model="checkedNames"
                    value="Jirafa"
                    type="radio"
                    name="radio"
                    class=""
                  />
                </span>
                <span for="radio-2" class=""> Jirafa</span>
              </label>
              <br />
              <label for="radio-2" class="">
                <span class="">
                  <input
                    id="radio-3"
                    v-model="checkedNames"
                    value="Raton"
                    type="radio"
                    name="radio"
                    class=""
                  />
                </span>
                <span for="radio-3" class=""> Raton</span>
              </label>
            </div>
            <br />

            <button
              type="submit"
              class="
                bg-transparent
                hover:bg-yellow-300
                text-yellow-700
                font-semibold
                hover:text-white
                py-2
                px-4
                border border-yellow-300
                hover:border-transparent
                rounded
              "
            >
              Comprobar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import TaskBar from "./TaskBar.vue";
import { useStore } from "vuex";
import { ref } from "vue";
import {
  getInfoUser,
  comprobarPregunta,
  comprueboUsuario,
  bonificacionEvento,
  updateAdivinanza,
} from "../services/Api";

export default {
  name: "Events",
  components: {
    TaskBar,
  },
  setup() {
    const selected = ref("");
    const selected2 = ref("");
    const myPoints = ref(0);
    const myUser = ref("");
    const checkedNames = ref(0);
    const store = useStore();
    const selectedAd = ref("");

    onMounted(async () => {
      const response = await getInfoUser(store.getters.getUserName);
      myPoints.value = response;
    });

    const compruebaEvento = async () => {
      const nameUser = store.getters.getUserName;
      const question = selected.value;
      const answer = selected2.value;
      try {
        const responsePregunta = await comprobarPregunta(question, answer);
        if (responsePregunta.status === 200) {
          //Datos actualizados
          if (responsePregunta.data.state == "correct") {
            if (responsePregunta.data.pointsWin !== 0) {
              const userExist = await comprueboUsuario(
                nameUser,
                question,
                "Event1"
              );
              if (userExist.status === 200) {
                if (userExist.data.state === false) {
                  alert(
                    "Lo sentimos, usted ya esta registrado como ganador de este evento. Vuelva a intentarlo en 1 semana"
                  );
                } else {
                  //Comprobacion de respuesta
                  alert(
                    "Enhorabuena!!! Acabas de obtener 100 puntos mas para tus compras"
                  );
                  const pointsUser =
                    myPoints.value + responsePregunta.data.pointsWin;
                  await bonificacionEvento(nameUser, pointsUser);
                }
              }
            }
          } else {
            alert("Has fallado!!");
          }
        }
      } catch (err) {
        console.log("ERROR: ", err.message);
      }
    };

    const adivinanza = async () => {
      const nameUser = store.getters.getUserName;
      const question = selectedAd.value;
      const answer = checkedNames.value;
      const response = await updateAdivinanza(question, answer);
      if (response.status === 200) {
        //Datos actualizados
        if (response.data.state == "correct") {
          const userExist = await comprueboUsuario(
            nameUser,
            question,
            "Event2"
          );
          if (userExist.status === 200) {
            if (userExist.data.state === false) {
              alert(
                "Lo sentimos, usted ya esta registrado como ganador de este evento. Vuelva a intentarlo en 1 semana"
              );
            } else {
              alert(
                "Enhorabuena!!! Acabas de obtener 100 puntos mas para tus compras"
              );
              const pointsUser = myPoints.value + response.data.pointsWin;
              await bonificacionEvento(nameUser, pointsUser);
            }
          }
        } else {
          window.alert("Has fallado!!");
        }
      } else {
        //Error al actualizar los datos
      }
    };

    return {
      selected,
      selected2,
      myPoints,
      myUser,
      compruebaEvento,
      adivinanza,
      checkedNames,
      selectedAd,
    };
  },
};
</script>
