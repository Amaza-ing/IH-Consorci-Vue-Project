<script setup>
import ChildComponent from "./ChildComponent.vue";

const msg = "Otro mensaje desde una variable en el padre";
</script>

<template>
  <section class="parent">
    <h2>Parent Component</h2>

    <ChildComponent message="Esto es un mensaje desde el padre" />
    <ChildComponent :message="msg" />
  </section>
</template>

<style>
.parent {
  margin: 10px;
  padding: 10px;
  border: 3px dashed black;
}
</style>
