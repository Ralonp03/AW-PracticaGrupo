<template>
  <button class="btn btn-login" @click="login">Iniciar Sesión</button>
  <button class="btn btn-register" @click="register">Registrarse</button>
  <button @click="home">Inicio</button>
  <button @click="buyCard">Comprar</button>
  <div class="collections__container">
      <!-- <Collections /> -->
  </div>

</template>

<script>
import { useRouter } from 'vue-router'
// import Collections from './Collections.vue'
export default {
    name: 'HomeVisitante',
    // components: {
    //     Collections,
    // },
    setup(){
        const route = useRouter()
        const login = () => {
            route.push('/login')
        }
        const register = () => {
            route.push('/register')
        }
        const home = () => {
            route.push('/home')
        }
        const buyCard = () => {
            route.push('/buyCard')
        }
        return {
            login,
            register,
            home,
            buyCard
        }
    }
}
</script>

<style scoped lang="css">
    .btn {
        color: white;
        border: 1px solid black;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.623);
    }
    .btn-login{
        margin-right: 20px;
        height: 30px;
        background-color: rgb(14, 137, 194);
    }

    .btn-register{
        height: 25px;
        background-color: rgb(14, 194, 38);

    }
</style>