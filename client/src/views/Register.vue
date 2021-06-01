<template>
  <div class="container h-3/6 m-40 bg-red-200 "></div>

</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: "Login",
  setup(){
      const router = useRouter()
      const register = () => {
          router.push('/register')
      }

      return { 
          register
      }
  }
};
</script>

<style>

</style>
