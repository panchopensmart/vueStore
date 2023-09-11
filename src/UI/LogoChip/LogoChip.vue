<template>
  <div class="logoChip">
    <img class="logoChip__img" src="@/assets/iconsKit/logoIcon.png" alt="logo">
    <div>{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "LogoChip.vue",
  props: [
    'label'
  ]
}
</script>

<style
    scoped
    lang="scss"
>
.logoChip {
  width: 145px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  &__img {
    padding-right: 11px;

  }

}
</style>
