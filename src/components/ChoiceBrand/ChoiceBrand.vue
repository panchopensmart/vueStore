<template>
  <div class="choiceBrand">
    <ChoiceHeader/>
    <ChoiceInput/>
    <ChoiceList/>
  </div>
</template>

<script>
import CheckBox from "../../UI/CheckBox/CheckBox.vue";
import ChoiceHeader from "./UI/ChoiceHeader.vue";
import ChoiceInput from "./UI/ChoiceInput.vue";
import ChoiceList from "./UI/ChoiceList.vue";

export default {
  name: "ChoiceBrand",
  components: {
    CheckBox,
    ChoiceHeader,
    ChoiceInput,
    ChoiceList
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
