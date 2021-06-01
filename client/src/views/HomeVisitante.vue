<template>
<div>
  <button class="bg-blue-400 text-black font-bold my-2 mx-5 py-2 px-4 rounded" @click="login">Iniciar Sesión</button>
  <button class="btn btn-register" @click="register">Registrarse</button>
  <button @click="home">Inicio</button>
  <button @click="buyCard">Comprar</button>
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

</style>