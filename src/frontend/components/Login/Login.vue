<template>
  <div class="modal">
      <div class="container">
          <form action="">
              <label for="usename">Nombre de usuario</label>
              <input type="text" name="username">
               <label for="password">Contraseña</label>
              <input type="password" name="username">
          </form>
      </div>
  </div>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style>
    .modal {
        height: 20rem;
        border: 1px solid black;
    }

    .container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction:column;
        background-color: blue;
    }
</style>