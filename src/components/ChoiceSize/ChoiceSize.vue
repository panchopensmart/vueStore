<template>
  <div class="choiceSize">
    <div class="choiceSize__title">Размер</div>
    <ChoiceList/>
  </div>
</template>

<script>
import ChoiceList from "../ChoiceBrand/UI/ChoiceList.vue";

export default {
  name: "ChoiceSize",
  components: {
    ChoiceList
  }
}
</script>

<style scoped lang="scss">
.choiceSize {
  &__title {
    display: flex;
    justify-content: center;
    font-weight: bold;
  }
}
</style>
