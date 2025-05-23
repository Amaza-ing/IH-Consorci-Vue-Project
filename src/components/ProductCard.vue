<script setup>
import { useProductStore } from '../stores/product';

defineProps({
  product: Object
})

const productStore = useProductStore();
</script>

<template>
  <article class="product-card">
    <h3>{{ product.name }}</h3>
    <img :src="product.img" alt="Product Image" height="100">
    <h4>{{ product.price }}€</h4>
    <button @click="productStore.deleteProduct(product.id)">Eliminar</button>
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