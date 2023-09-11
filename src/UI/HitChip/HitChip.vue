<template>
  <div class="hitChip">
    <div class="hitChip__chip">Хит продаж</div>
    <img class="hitChip__icon" src="@/assets/iconsKit/fireIcon.png" alt="fire">
  </div>
</template>

<script>
export default {
  name: "HitChip"
}
</script>

<style scoped lang="scss">
.hitChip {
  margin-top: 12px;
  margin-left: 12px;
  display: flex;
  width: 112px;
  height: 32px;
  justify-content: center;
  align-items: center;

  &__chip {
    margin-right: 7.33px;
  }

  &__icon {
    width: 13.33px;
    height: 15px;
  }
}
</style>
