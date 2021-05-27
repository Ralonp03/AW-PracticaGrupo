<template>
  <div class="modal">
    <div class="welcome-section">
      <h2>Bienvenido!!</h2>
      <button @click="register">Register</button>
    </div>
    <div class="form-section">
      <h2>Inicio de sesión</h2>

      <form action="" class="form">
        <label for="usename">Nombre de usuario</label>
        <input type="text" name="username" />
        <label for="password">Contraseña</label>
        <input type="password" name="username" />
      </form>
    </div>
  </div>
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
.modal {
  margin: 10rem auto;
  height: 500px;
  width: 800px;
  border: 1px solid black;
  display: flex;
}
.welcome-section {
  width: 350px;
  display: flex;
  flex-direction: column;
  background-color: rgba(34, 192, 231, 0.767);
}

.form-section {
  background-color: brown;
}
.form {
  height: 100%;
  width: 100%;
}
</style>
