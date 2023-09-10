<template>
  <div class="cardContainer">
    <CardImg :srcImg="product.img"/>
    <CardDesc :descr="product.desc"/>
    <ProductPrice/>
    <BottomNavigator/>
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
  }

  .cardContainer::after {
    content: "";
    display: block;
    padding-bottom: 24px; /* Отступ снизу для каждой карточки */
  }

</style>
