<template>
  <div class="cardDescr">
    <div class="cardDescr__title">бренд</div>
    <div class="cardDescr__descr">{{ addDots }}</div>
  </div>
</template>

<script>
import addDots from "../../helpers/addDots.js";

export default {
  name: "CardDesc",
  computed: {
    addDots() {
      return addDots(this.descr)
    }
  },
  props: [
    'descr'
  ]
}
</script>

<style scoped lang="scss">
.cardDescr {
  margin-top: 16px;
  &__title {
    margin-bottom: 8px;
    color: #AAAAAA;
  }

  &__descr {
    margin-bottom: 16px;
  }

  &__descr:hover {
    color: #125BAE;
    cursor: pointer;
  }
}
</style>
