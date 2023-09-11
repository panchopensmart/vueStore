<template>
  <div class="mobileSearch">
    <img class="mobileSearch__arrow" src="@/assets/iconsKit/arrow.png" alt="arrow">
    <input type="text" class="mobileSearch__input" placeholder="Запрос">
    <div class="mobileSearch__interaction">
      <img class="mobileSearch__clearBtn" src="@/assets/iconsKit/clear.png" alt="clear">
      <MobileSearchButton/>
    </div>
  </div>
</template>

<script>
import MobileSearchButton from "../Button/MobileSearchButton.vue";

export default {
  name: "MobileSearchInput",
  components: {
    MobileSearchButton
  }
}
</script>

<style scoped lang="scss">
.mobileSearch {
  display: flex;
  align-items: center;
  margin-left: 16px;
  &__input {
    position: relative;
    height: 53px;
    margin-left: 16px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #D5D5D5;
    outline: none;
  }

  &__arrow {
    width: 20px;
    height: 20px;
  }

  &__clearBtn {
    width: 17px;
    height: 17px;
    opacity: 50%;
    margin-right: 16px;
    cursor: pointer;
  }

  &__input-container {
    display: flex;
    width: 100%;

  }

  &__interaction {
    z-index: 101;
    margin-left: -100px;
    display: flex;
    align-items: center;
  }
  @media (min-width: 900px) {
    display: none;
  }
}

</style>
