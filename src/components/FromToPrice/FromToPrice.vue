<template>
  <div class="fromToPrice">
    <nav>Цена</nav>
    <div class="fromToPrice__inputs">
      <FromToPriceInput/>
      <nav>-</nav>
      <FromToPriceInput/>
    </div>
  </div>
</template>

<script>
import FromToPriceInput from "../../UI/FromToPriceInput/FromToPriceInput.vue";
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

    &__inputs {
      margin-top: 16px;
      display: flex;
      align-items: center;
      justify-content: start;
    }
  }
</style>
