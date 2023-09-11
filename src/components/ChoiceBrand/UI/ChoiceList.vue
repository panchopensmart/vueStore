<template>
  <div class="choiceBrand__attrs-list">
    <ul class="choiceBrand__attrs-list-ul" >
      <li class="choiceBrand__attrs-item-li" v-for="ChoiceItem in choiceList">
        <div class="choiceBrand__attrs-item-div">
          <input type="checkbox" class="choiceBrand__checkBox"/>
<!--          <CheckBox/>-->
          <nav class="choiceBrand__attr">Атрибут</nav>
          <div class="choiceBrand__count">3</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CheckBox from "../../../UI/CheckBox/CheckBox.vue";

export default {
  name: "ChoiceList",
  components: {
    CheckBox
  },
  data() {
    return {
      choiceList:  [...new Array(6)] //список из пустых позиций для списка
    }
  }
}
</script>

<style scoped lang="scss">
  .choiceBrand {
    &__count {
      color: #AAAAAA;
    }
    &__attrs-list {
      margin-top: 16px;
    }
    &__attr {
      margin-left: 12px; //отступ с учетом ширины чекбокса
      flex: 1;
    }
    &__attrs-list-ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    &__left-box {
      height: 20px;
    }
    &__checkBox {

    }
    &__attrs-item-div {
      width: 270px - 16px; //отступ margin справа от count
      display: flex;
      justify-content: space-between;
      align-items: center;

    }

    &__attrs-item-li {
      padding-right: 13px;
    }

    &__attrs-item-li:not(:last-child) {
      margin-bottom: 12px;
    }
  }
</style>
