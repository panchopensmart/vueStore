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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-right: -24px;
  }
</style>
