<template>
  <div class="z-0">
    <div
      class="
        bg-gradient-to-br
        from-indigo-900
        to-green-900
        min-h-screen
        overflow-auto
      "
    >
      <nav class="flex items-center justify-between">
        <h2 class="text-gray-200 font-bold text-2xl m-8">Home</h2>
        <div class="auth flex items-center">
          <button
            @click="login"
            class="
              m-8
              bg-transparent
              text-gray-200
              p-2
              rounded
              border border-gray-300
              mr-4
              hover:bg-gray-100
              hover:text-gray-700
            "
          >
            Iniciar Sesion
          </button>
          <button
            @click="register"
            class="
              m-8
              bg-gray-900
              text-gray-200
              py-2
              px-3
              rounded
              hover:bg-gray-800
              hover:text-gray-100
            "
          >
            Registrarse Gratis
          </button>
        </div>
      </nav>
      <div class="container max-w-5xl mx-auto px-4">
        <div class="w-4/5">
          <h1 class="mt-32 text-white text-6xl font-bold">
            Bienvenido al Kiosko Ventur<br /><span class="text-blue-400"
              >Su kiosko de confianza</span
            >
          </h1>
        </div>
        <div class="w-5/6 my-10 ml-6">
          <h3 class="text-gray-300">
            Colecionar cartas nunca a sido tan facil <br />
            <strong class="text-white"
              >Creado, Editado & Desarollado por el Grupo 10 de AW</strong
            >
          </h3>
        </div>
        <div class="hidden sm:block opacity-50 z-0">
          <div class="shadow-2xl w-96 h-96 rounded-full -mt-72"></div>
          <div class="shadow-2xl w-96 h-96 rounded-full -mt-96"></div>
          <div class="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96"></div>
        </div>
        <div class="text-white relative">
          <h3 class="text-uppercase font-semibold">Coleciones disponibles</h3>
          <div
            class="
              grid
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-1
              sm:gap-5
              uppercase
            "
          >
            <div
              class="
                h-72
                group
                flex
                items-center
                bg-indigo-900 bg-opacity-40
                shadow-xl
                gap-5
                px-6
                py-5
                rounded-lg
                ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700
                mt-5
                cursor-pointer
                hover:bg-blue-900 hover:bg-opacity-100
                transition
              "
            >
              <img
                class="h-40"
                v-bind:src="require(`../assets/Coches/Coche3.png`)"
                alt=""
              />
              <div>
                <span>Cartas Coches</span>
                <span class="text-xs text-blue-300 block">Colecion 1</span>
              </div>
              <div>
                <i
                  class="
                    fa fa-chevron-right
                    opacity-0
                    group-hover:opacity-100
                    transform
                    -translate-x-1
                    group-hover:translate-x-0
                    block
                    transition
                  "
                ></i>
              </div>
            </div>

            <div
              class="
                h-72
                group
                flex
                items-center
                bg-indigo-900 bg-opacity-40
                shadow-xl
                gap-5
                px-6
                py-5
                rounded-lg
                ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700
                mt-5
                cursor-pointer
                hover:bg-blue-900 hover:bg-opacity-100
                transition
              "
            >
              <img
                class="h-40"
                v-bind:src="require(`../assets/Pokemons/Pokemon7.jpg`)"
                alt=""
              />
              <div>
                <span>Cartas Poekmon</span>
                <span class="text-xs text-blue-300 block">Colecion 2</span>
              </div>
              <div>
                <i
                  class="
                    fa fa-chevron-right
                    opacity-0
                    group-hover:opacity-100
                    transform
                    -translate-x-1
                    group-hover:translate-x-0
                    block
                    transition
                  "
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "HomeVisitante",

  setup() {
    const route = useRouter();
    const login = () => {
      route.push("/login");
    };
    const register = () => {
      route.push("/register");
    };

    return {
      login,
      register,
    };
  },
};
</script>
