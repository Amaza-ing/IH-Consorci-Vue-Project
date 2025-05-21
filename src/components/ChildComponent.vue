<script setup>
defineProps({
  message: String
})
</script>

<template>
  <section class="child">
    <h3>Child Component</h3>
    <h4>{{ message }}</h4>
  </section>
</template>

<style>
  .child {
    margin: 10px;
    padding: 10px;
    border: 2px dotted blue;
  }
</style>