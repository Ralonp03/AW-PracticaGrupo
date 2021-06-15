<template>
  <div>
    <div class="flex">
      <TaskBar :points="points" />
      <main
        class="grid place-items-center  bg-gradient-to-t from-blue-200 to-indigo-900 p-5 w-screen"
      >
        <div>
          <h1
            class="text-4xl text-center sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5 "
          >
            Kiosko VENTUR <br />Tu kiosko de confianza desde 2020
          </h1>
          <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <!-- CARD 1 -->
            <div class="bg-gray-900 shadow-lg rounded p-3">
              <div class="group relative">
                <CarCollection title="Car Collection" />
              </div>
              <div class="p-5">
                <h3 class="text-white text-lg">Colección de Coches</h3>
                <p class="text-gray-400">
                  La carta Alpine esta aumentando de valor, seria buen momento
                  para comprarla.
                </p>
              </div>
            </div>

            <div class="bg-gray-900 shadow-lg rounded p-3">
              <div class="group relative">
                <PokemonCollection title="Pokemon Collection" />
              </div>
              <div class="p-5">
                <h3 class="text-white text-lg">Colección Pokemon</h3>
                <p class="text-gray-400">
                  El charizard es la carta que mas valor tiene, ademas es
                  preciosa, puedes adquirirla en nuestra tienda.
                </p>
              </div>
            </div>
          </section>
        </div>
        <h1
          class="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-020 mb-5 "
        >
          Tu felicidad es nuestro principal objetivo
        </h1>
      </main>
    </div>
  </div>
</template>

<script>
import TaskBar from "./TaskBar.vue";
import { getInfoUser } from "../services/Api";
import PokemonCollection from "./PokemonCollection.vue";
import CarCollection from "./CarCollection.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    TaskBar,
    PokemonCollection,
    CarCollection,
  },

  setup() {
    const router = useRouter();
    const store = useStore();
    const points = ref(0);

    onMounted(async () => {
      !store.state.auth && router.push("/login");
      points.value = await getInfoUser(store.getters.getUserName);
    });

    return { points };
  },
};
</script>

<style></style>
