<script setup>
import { ref } from "vue";

const isLoggedIn = ref(false);

function login() {
  isLoggedIn.value = true;
}
</script>

<template>
  <button @click="login">Login</button>
  <div>
    <h3 v-if="isLoggedIn">Bienvenido usuario</h3>
    <h3 v-else>No estás logado</h3>
  </div>
</template>

<style></style>
