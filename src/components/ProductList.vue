<script setup>
import ProductCard from './ProductCard.vue';

const products = [
  {
    id: 1,
    name: "Computer",
    price: 1000,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/2560px-Desktop_computer_clipart_-_Yellow_theme.svg.png",
  },
  {
    id: 2,
    name: "Keyboard",
    price: 50,
    img: "https://m.media-amazon.com/images/I/81jzKMs8npL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Mouse",
    price: 20,
    img: "https://media.ldlc.com/r1600/ld/products/00/06/12/25/LD0006122524.jpg",
  },
];
</script>

<template>
  <ul class="product-list">
    <li v-for="product in products" :key="product.id">
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
  gap: 20px;
}
</style>
