<template>
  <div class="choiceBrand">
    <ChoiceHeader/>
    <ChoiceInput/>
    <div class="choiceBrand__attrs-list">
      <ul>
        <li class="choiceBrand__attrs-item-li">
          <div class="choiceBrand__attrs-item-div">
            <div>
              <CheckBox/>
              Атрибут
            </div>
            <div>3</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CheckBox from "../../UI/CheckBox/CheckBox.vue";
import ChoiceHeader from "./UI/ChoiceHeader.vue";
import ChoiceInput from "./UI/ChoiceInput.vue";

export default {
  name: "ChoiceBrand",
  components: {
    CheckBox,
    ChoiceHeader,
    ChoiceInput
  }
}
</script>

<style scoped lang="scss">
.choiceBrand {
  width: 270px;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__input {
    border-radius: 4px;
    width: 100%;
    height: 36px;
    border: 1px solid #D5D5D5;
    padding-left: 36px;
  }

  &__input-container {
    display: flex;
    align-items: center;
  }

}
</style>
