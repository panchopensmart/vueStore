<template>
  <div class="productPrice">
    <div class="productPrice__price">5990</div>
    <div class="productPrice__oldPrice">5990</div>
  </div>
</template>

<script>
export default {
  name: "ProductPrice"
}
</script>

<style scoped lang="scss">
  .productPrice {
    display: flex;
    margin-bottom: 16px;
    &__price {
      margin-right: 8px;
      font-size: 16px;
    }
    &__oldPrice {
      text-decoration: line-through;
      font-size: 12px;
      color: #AAAAAA;
    }
  }
</style>
