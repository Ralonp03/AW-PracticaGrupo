<template>
  <div class="container w-2/5 h-96 mt-56 ml-auto mr-auto flex shadow-2xl">
    <div
      class="form-section w-3/4 bg-white-500 rounded-l-lg flex flex-col justify-center content-center"
    >
      <h2 class="mb-10 text-center">INICIE SESIÓN</h2>
      <form action="" class="w-100 flex flex-col justify-center content-center">
        <label for="username">
        </label>
          <input
            class="ml-auto mr-auto mb-10"
            type="text"
            name="username"
            placeholder="Usuario o email"
            autocomplete="false"
            required
          />
        <label for="password">
        </label>
          <input
            class="ml-auto mr-auto mb-10"
            type="password"
            placeholder="Contraseña"
            autocomplete="false"
            required
          />
      </form>
      <button class="h-12 w-48 bg-green-400 rounded-full text-white ml-auto mr-auto">
        INICIAR SESIÓN
      </button>
    </div>
    <div
      class="register-section bg-green-400 flex flex-col justify-center content-center rounded-r-lg"
    >
      <div class="container text-center">
        <h2 class="text-white font-bold text-3xl mb-10">Bienvenido, amigo!</h2>
        <p class="break-words mb-10">
          Introduzca sus datos personales y comience a coleccionar con nosotros
        </p>
        <button class="h-12 w-48 bg-green-400 rounded-full text-white ml-auto mr-auto border-white-900">
          Registrarse
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const register = () => {
      router.push("/register");
    };

    return {
      register,
    };
  },
};
</script>

<style></style>
