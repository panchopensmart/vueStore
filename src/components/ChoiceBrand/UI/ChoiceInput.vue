<template>
  <div class="choiceBrand__input-container">
    <img
        src="@/assets/iconsKit/searchBrandIcon.png"
        alt="find"
        class="choiceBrand__icon"
    >
    <input
        type="text"
        class="choiceBrand__input"
        placeholder="Поиск"
    >
  </div>
</template>

<script>
export default {
  name: "ChoiceInput"
}
</script>

<style scoped lang="scss">
.choiceBrand {
  &__input-container {
    display: flex;
    align-items: center;
  }


  &__input {
    border-radius: 4px;
    width: 100%;
    height: 36px;
    border: 1px solid #D5D5D5;
    padding-left: 36px;
    margin-left: 254px - 270px ; //удалить отступ который возник после padding-left
  }

  &__icon {
    width: 16px;
    height: 16px;
    z-index: 99;
    position: relative;
    left: 12px;
  }

  input[type="text"]::placeholder {
    color: #AAAAAA; /* Изменение цвета placeholder */
  }
}


.choiceBrand__icon {

}

</style>
