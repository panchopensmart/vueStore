<template>
  <div>
    <MobileTitle/>
    <div class="productCard">
      <ProductCard :key="generateUniqueId" v-for="product in productList" :product="product"></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from "../../components/ProductCard/ProductCard.vue";
import {fakeData} from "../../fakeDB.js";
import {v4 as uuidv4} from 'uuid';
import MobileTitle from "../../components/MobileNameCategory/MobileTitle.vue";
export default {
  name: "ProductList",
  components: {ProductCard, MobileTitle},
  data() {
    return {
      productList: fakeData
    }
  },
  methods: {
    generateUniqueId() {
      return uuidv4();
    },
  },
}
</script>

<style scoped>
.productCard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-right: -24px;
}

@media (max-width: 1280px) {
  .productCard {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-right: -24px;
  }
}

@media (max-width: 820px) {
  .productCard {
    flex-direction: column;
  }
}
</style>
