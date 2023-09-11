<template>
  <div class="inputContainer">
    <nav class="inputContainer__title">от</nav>
    <input type="text" class="inputContainer__input">
  </div>
</template>

<script>
export default {
  name: "FromToPriceInput"
}
</script>

<style scoped lang="scss">
.inputContainer {
  display: flex;

  &__title {
    z-index: 99;
    position: relative;
    right: -10px;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #AAAAAA;
  }

  &__input {
    padding-left: 26px;
    width: 119px - 26px - 4.96px; //чтобы убрать дополнительную ширину после padding
    height: 36px - 4.96px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    margin-left: 118px - 129px; //убрать отступы после определения flex на контейнере
  }
}
</style>
