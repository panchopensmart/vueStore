<template>
  <div class="featuresContainer">
    <CategoryList/>
    <FromToPrice/>
    <ChoiceBrand/>
  </div>
</template>

<script>
import CategoryList from "../../components/CategoryList/CategoryList.vue";
import FromToPrice from "../../components/FromToPrice/FromToPrice.vue";
import ChoiceBrand from "../../components/ChoiceBrand/ChoiceBrand.vue";

export default {
  name: "ProductFeatures",
  components: {
    CategoryList,
    FromToPrice,
    ChoiceBrand
  },
}
</script>

<style scoped lang="scss">
  .featuresContainer {
    margin-right: 36px;
    width: 280px;
    div {
      margin-bottom: 28px;
    }
  }
</style>
