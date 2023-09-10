<template>
  <div class="cardContainer">
    <div class="cardContainer__upperBlock">
      <CardImg :srcImg="product.img" :inStock="product.inStock"/>
      <CardDesc :descr="product.desc"/>
      <ProductPrice :inStock="product.inStock"/>
    </div>
    <BottomNavigator :inStock="product.inStock"/>
  </div>
</template>

<script>
import CardImg from "./UI/CardImg/CardImg.vue";
import CardDesc from "./UI/CardDesc/CardDesc.vue";
import BottomNavigator from "./UI/BottomNavigator/BottomNavigator.vue";
import ProductPrice from "./UI/ProductPrice/ProductPrice.vue";

export default {
  name: "ProductCard",
  components: {
    CardImg,
    CardDesc,
    BottomNavigator,
    ProductPrice
  },
  props: [
    'product'
  ]
}
</script>

<style scoped>
  .cardContainer {
    display: flex;
    flex-direction: column;
    max-width: 333px;
    justify-content: space-between;
  }

</style>
