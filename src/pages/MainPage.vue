<template>
  <Header/>
  <div class="appContainer">
    <ProductFeatures/>
    <ProductList/>
  </div>
</template>

<script>
import Header from "../modules/Header/Header.vue";
import ProductList from "../modules/ProductList/ProductList.vue";
import ProductFeatures from "../modules/ProductFeatures/ProductFeatures.vue";

export default {
  name: "MainPage",
  components: {
    Header,
    ProductList,
    ProductFeatures
  }
}
</script>

<style scoped>
.appContainer {
  display: flex;
  justify-content: center;
}
</style>
