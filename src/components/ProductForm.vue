<script setup>
import { useProductStore } from "../stores/product";
import { ref } from "vue";

const productStore = useProductStore();

const newProduct = ref({
  id: null,
  name: "",
  price: null,
  img: "",
});

function handleSubmit() {
  newProduct.value.id = Math.floor(Math.random() * 1000);

  productStore.addNewProduct({ ...newProduct.value });

  newProduct.value.id = null;
  newProduct.value.name = "";
  newProduct.value.price = null;
  newProduct.value.img = "";
}
</script>

<template>
  <section>
    <form @submit.prevent="handleSubmit">
      <fieldset>
        <label for="product-name">Nombre del Producto: </label>
        <input type="text" id="product-name" v-model="newProduct.name" />
      </fieldset>
      <fieldset>
        <label for="product-price">Precio del Producto: </label>
        <input type="number" id="product-price" v-model="newProduct.price" />
      </fieldset>
      <fieldset>
        <label for="product-img">Imagen del Producto: </label>
        <input type="text" id="product-img" v-model="newProduct.img" />
      </fieldset>

      <button>Crear Producto</button>
    </form>
  </section>
</template>

<style></style>
