<script setup>
const userNames = ["Alberto", "Beatriz", "Carlos"];
</script>

<template>
  <p v-for="(name, index) in userNames" :key="index">
    {{ index }} - {{ name }}
  </p>
</template>

<style></style>
