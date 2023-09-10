<template>
  <div class="productImg">
    <HitChip/>
    <img class="productImg__img" :src="srcImg" alt="img">
    <PercentChip/>
  </div>
</template>

<script>

import PercentChip from "../../../../UI/PercentChip/PercentChip.vue";
import HitChip from "../../../../UI/HitChip/HitChip.vue";

export default {
  name: "CardImg",
  components: {
    PercentChip,
    HitChip
  },
  props: [
    'srcImg',
  ]
}
</script>

<style scoped lang="scss">

.productImg {
  max-width: 333px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  margin: 0;
  &__img {
      margin: 0 auto;

  }
}
</style>
