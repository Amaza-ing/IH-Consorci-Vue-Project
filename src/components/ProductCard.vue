<script setup>
defineProps({
  product: Object
})
</script>

<template>
  <article class="product-card">
    <h3>{{ product.name }}</h3>
    <img :src="product.img" alt="Product Image" width="200">
    <h4>{{ product.price }}€</h4>
  </article>
</template>

<style>
.product-card {
  background-color: lightgreen;
  padding: 10px;
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>