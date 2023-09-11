<template>
  <div class="MobileSearchBtn">
    <button class="MobileSearchBtn__button">Найти</button>
  </div>
</template>

<script>
export default {
  name: "MobileSearchButton"
}
</script>

<style scoped lang="scss">
  .MobileSearchBtn {
    &__button {
      background-color: #7397F5;
      border: 0;
      height: 38px;
      border-radius: 5px;
      padding-left: 16px;
      padding-right: 16px;
      color: white;
    }
  }
</style>
