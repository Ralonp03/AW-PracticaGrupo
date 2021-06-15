<template >
  <div class="w-2/5 h-96 mt-56 ml-auto mr-auto flex shadow-2xl">
    <div
      class="
        form-section
        w-3/4
        bg-white-500
        rounded-l-xl
        flex flex-col
        justify-center
        content-center
        bg-white
        shadow-2xl
      "
    >
      <h2 class="mb-10 text-center">INICIE SESIÓN</h2>
      <form
        @submit.prevent="login"
        class="w-100 flex flex-col justify-center content-center"
      >
        <div
          class="
            form__field
            text-center
            h-100
            flex
            items-stretch
            ml-auto
            mr-auto
          "
        >
          <span class="flex justify-center w-full">
            <svg
              class="mr-4 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </span>
          <input
            class="
              ml-auto
              mr-auto
              mb-10
              border-2 border-black border-opacity-10
            "
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            autocomplete="false"
            v-model="usernameForm"
            required
          />
        </div>
        <div
          class="
            mt
            -4
            form__field
            text-center
            h-100
            flex
            items-stretch
            ml-auto
            mr-auto
          "
        >
          <span class="flex justify-center w-full">
            <svg
              class="mr-4 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              ></path>
            </svg>
          </span>
          <input
            class="
              ml-auto
              mr-auto
              mb-10
              border-2 border-black border-opacity-10
            "
            type="password"
            placeholder="Contraseña"
            autocomplete="false"
            v-model="passwdForm"
            required
          />
        </div>
        <button
          class="h-12 w-48 bg-green-400 rounded-full text-white ml-auto mr-auto"
          type="submit"
        >
          INICIAR SESIÓN
        </button>
      </form>
    </div>
    <div
      class="
        register-section
        bg-green-400
        flex flex-col
        justify-center
        content-center
        rounded-r-lg
      "
    >
      <div class="container text-center">
        <h2 class="text-white font-bold text-3xl mb-10">Bienvenido, amigo!</h2>
        <p class="break-words mb-10">
          Introduzca sus datos personales y comience a coleccionar con nosotros
        </p>
        <button
          class="
            h-12
            w-48
            bg-green-400
            rounded-full
            text-white
            ml-auto
            mr-auto
            border-2 border-white-900
          "
          @click="register"
        >
          Registrarse
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const usernameForm = ref("");
    const passwdForm = ref("");
    const store = useStore();

    const register = () => {
      router.push("/register");
    };

    const login = async () => {
      const data = {
        form: {
          name: usernameForm.value,
          password: passwdForm.value,
        },
      };

      const response = await store.dispatch("login", data.form);
      console.log(response);
      if (response.data.error.startsWith("Invalid")) {
        alert("Invalid user or password");
      } else {
        if (store.state.auth && response.status === 200) {
          response.data.role === "socio" && router.push("/home");
          response.data.role === "admin" && router.push("/dashboard");
        }
      }
      //   //Vista socio
    };

    return {
      register,
      login,
      usernameForm,
      passwdForm,
    };
  },
};
</script>

<style></style>
