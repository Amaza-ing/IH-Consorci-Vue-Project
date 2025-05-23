<script setup>
import ProductCard from "./ProductCard.vue";
import { useProductStore } from "../stores/product";

const productStore = useProductStore();
</script>

<template>
  <ul class="product-list">
    <li v-for="product in productStore.products" :key="product.id">
      <ProductCard :product="product" />
    </li>
  </ul>
</template>

<style>
.product-list {
  list-style: none;
  margin: 0 20px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
