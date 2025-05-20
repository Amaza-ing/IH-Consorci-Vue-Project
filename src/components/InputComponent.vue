<script setup>
import { ref } from 'vue';

const myPlaceholder = ref("Mensaje desde una variable");
const info = ref("");
</script>

<template>
  <div class="input-container">
    <h3>{{ info }}</h3>
    <input type="text" :placeholder="myPlaceholder" v-model="info">
  </div>
</template>

<style>
.input-container {
  margin: 20px;
}
</style>