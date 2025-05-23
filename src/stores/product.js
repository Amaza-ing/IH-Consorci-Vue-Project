import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = ref([
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
  ]);

  function addNewProduct(newProduct) {
    products.value.push(newProduct);
  }

  function deleteProduct(id) {
    products.value = products.value.filter((product) => product.id != id);
  }

  return {
    products,
    addNewProduct,
    deleteProduct
  }
});
