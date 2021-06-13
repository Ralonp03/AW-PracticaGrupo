<template>
<div>
  <button class="bg-blue-400 text-black font-bold my-2 mx-5 py-2 px-4 rounded" @click="login">Iniciar Sesión</button>
  <button class="bg-green-400 text-black font-bold my-2 py-2 px-4 rounded" @click="register">Registrarse</button>
    <section class="flex">
        <article><CarCollection title="Car Brand Collection" class="font-bold"/></article>
        <article><PokemonCollection title="Pokemon Collection" class="font-bold"/></article>
    </section>
 
  
</div>
</template>

<script>
import { useRouter } from 'vue-router'
import CarCollection from './CarCollection.vue'
import PokemonCollection from './PokemonCollection.vue'
export default {
    name: 'HomeVisitante',
    components: {
        CarCollection,
        PokemonCollection
    },
    setup(){
        const route = useRouter()
        const login = () => {
            route.push('/login')
        }
        const register = () => {
            route.push('/register')
        }

        return {
            login,
            register,
        }
    }
}
</script>

<style scoped lang="css">

</style>