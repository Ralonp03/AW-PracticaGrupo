<template>
  <div class="container w-2/5 h-96 mt-56 ml-auto mr-auto flex shadow-2xl">
    <div
      class="register-section bg-green-400 flex flex-col justify-center content-center rounded-l-lg"
    >
      <div class="container text-center">
        <h2 class="text-white font-bold text-3xl mb-10">Bienvenido de nuevo!</h2>
        <p class="break-words mb-10">
          Para acceder a su información inicie sesion con sus datos personales
        </p>
        <button class="h-12 w-48 bg-green-400 rounded-full text-white ml-auto mr-auto hover:border-white-500" @click='singUp'>
          Iniciar sesión
        </button>
      </div>
    </div>

    <div class="form-section w-3/4 bg-white-500 rounded-r-lg flex flex-col justify-center content-center">
      <h2 class="mb-10 text-center">CREAR CUENTA</h2>

      <form @submit.prevent="register" class="w-100 flex flex-col justify-center content-center">
        <div class="form__field text-center h-100  flex items-stretch ml-auto mr-auto">
          <span class="flex justify-center w-full">
            <svg class=" mr-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          <input
            class="ml-auto mr-auto mb-10"
            type="text"
            name="username"
            placeholder="Usuario o email"
            autocomplete="false"
            v-model="usernameForm"
            required
          />
          </span>

        </div>
          <div class="mt -4 form__field text-center h-100  flex items-stretch ml-auto mr-auto">
             <span class="flex justify-center w-full">
               <svg class="mr-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
             </span>
          <input
            class="ml-auto mr-auto mb-10"
            type="password"
            placeholder="Contraseña"
            autocomplete="false"
            v-model="passwordForm"
            required
          />
        </div>
      <button type="submit" class="h-12 w-48 bg-green-400 rounded-full text-white ml-auto mr-auto">
        Registrarse
      </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const store = useStore()
    const usernameForm = ref("")
    const passwordForm = ref("")

    const register = async () => {
      const data = {
        form: {
          name: usernameForm.value,
          password : passwordForm.value
        }
      }
      const response = await store.dispatch('register', data.form)

      response.status === 200 && router.push('/Home')
    };

    const singUp = () => {
      router.push('/login')
    }

    return {
      usernameForm,
      passwordForm,
      register,
      singUp
    };
  },
};
</script>

<style></style>

