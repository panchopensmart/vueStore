<template>
  <div class="productCard">
    <ProductCard v-for="product in productList" :product="product"></ProductCard>
  </div>
</template>

<script>
import ProductCard from "../../components/ProductCard/ProductCard.vue";
import {fakeData} from "../../fakeDB.js";

export default {
  name: "ProductList",
  components: {ProductCard},
  data() {
    return {
      productList: fakeData
    }
  }
}
</script>

<style scoped>
  .productCard {
    display: flex;
  }
</style>
