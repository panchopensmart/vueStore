<template>
  <div class="featuresContainer">
    <CategoryList/>
    <FromToPrice/>
  </div>
</template>

<script>
import CategoryList from "../../components/CategoryList/CategoryList.vue";
import FromToPrice from "../../components/FromToPrice/FromToPrice.vue";

export default {
  name: "ProductFeatures",
  components: {
    CategoryList,
    FromToPrice
  },
}
</script>

<style scoped lang="scss">
  .featuresContainer {
    width: 280px;
    div {
      margin-bottom: 28px;
    }
  }
</style>
