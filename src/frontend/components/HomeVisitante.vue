<template>
  <h1>Soy la pagina principal de la apliacion</h1>
  <button @click="login">Ir la pagina de usuario registrado</button>

</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name: 'HomeVisitante',
    setup(){
        const route = useRouter()
        const login = () => {
            route.push('/home')
        }

        return {
            login
        }
    }
}
</script>

<style>

</style>