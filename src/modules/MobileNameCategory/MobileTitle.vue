<template>
  <div class="mobileTitle">
    Название категории
  </div>
</template>

<script>
export default {
  name: "MobileTitle"
}
</script>

<style scoped>
.mobileTitle {
  font-size: 24px;
  padding-left: 24px;
  padding-bottom: 12px;
  margin-top: 12px;
}

@media (min-width: 900px) {
  .mobileTitle {
    display: none;

  }
}
</style>
