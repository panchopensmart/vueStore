<template>
  <div class="featuresContainer">
    <CategoryList/>
    <FromToPrice/>
    <ChoiceBrand/>
    <ChoiceSize/>
  </div>
</template>

<script>
import CategoryList from "../../components/CategoryList/CategoryList.vue";
import FromToPrice from "../../components/FromToPrice/FromToPrice.vue";
import ChoiceBrand from "../../components/ChoiceBrand/ChoiceBrand.vue";
import ChoiceSize from "../../components/ChoiceSize/ChoiceSize.vue";

export default {
  name: "ProductFeatures",
  components: {
    CategoryList,
    FromToPrice,
    ChoiceBrand,
    ChoiceSize
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

@media (max-width: 900px) {
  .featuresContainer {
    display: none;
  }
}
</style>
