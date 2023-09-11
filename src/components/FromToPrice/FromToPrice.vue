<template>
  <div class="fromToPrice">
    <nav class="fromToPrice__title-price">Цена</nav>
    <div class="fromToPrice__inputs">
      <FromToPriceInput/>
      <nav class="fromToPrice__between-border">-</nav>
      <FromToPriceInput/>
    </div>
  </div>
</template>

<script>
import FromToPriceInput from "@/UI/FromToPriceInput/FromToPriceInput.vue";

export default {
  name: "FromToPrice",
  components: {
    FromToPriceInput
  }
}
</script>

<style scoped lang="scss">
.fromToPrice {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 280px;

  &__title-price {
    display: flex;
    justify-content: center;
    font-weight: bold;
  }

  &__between-border {
    color: #D5D5D5;
  }

  &__inputs {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
