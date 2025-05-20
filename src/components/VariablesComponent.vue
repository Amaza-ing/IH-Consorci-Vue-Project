<script setup>
import { ref } from "vue";

const counter = ref(0);
const counter2 = ref(0);
const message = ref("Esto es un mensaje");

setInterval(() => {
  counter.value = counter.value + 1;
}, 1000);

function changeMsg() {
  message.value = "Ahora es otro mensaje";
}

function modifyCounter2(number) {
  counter2.value = counter2.value + number;
}
</script>

<template>
  <h2>Counter: {{ counter }}</h2>
  <h2>
    Counter2:
    <button @click="modifyCounter2(-1)">-</button>
    {{ counter2 }}
    <button @click="modifyCounter2(1)">+</button>
  </h2>
  <p>{{ message }}</p>
  <button @click="changeMsg">Cambiar Mensaje</button>
</template>

<style></style>
