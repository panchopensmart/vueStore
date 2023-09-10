<template>
  <div class="categoryList">
    <div class="categoryList__mainItem">
      <span class="categoryList__label--title">Название категории</span>
      <span class="categoryList__label--count">3</span>
    </div>
    <div class="categoryList__otherItem">
      <span class="categoryList__label--title">Название категории</span>
      <span class="categoryList__label--count">3</span>
    </div>
    <div class="categoryList__otherItem">
      <span class="categoryList__label--title">Название категории</span>
      <span class="categoryList__label--count">3</span>
    </div>
    <div class="categoryList__otherItem">
      <span class="categoryList__label--title">Название категории</span>
      <span class="categoryList__label--count">3</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList"
}
</script>

<style scoped lang="scss">
.categoryList {
  @mixin allItems {
    cursor: pointer;
    height: 30px;
    padding-right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  }

  @mixin hoverItem {
    background-color: #E2EFFF;
    span {
      color: #333333;
    }
  }

  &__mainItem {
    @include allItems;
    padding-left: 8px;
  }

  &__otherItem:hover {
    @include hoverItem;
  }

  &__mainItem:hover {
    @include hoverItem;
  }

  &__otherItem {
    @include allItems;
    padding-left: 32px;
  }

  &__label--count {
    color: #AAAAAA;
  }
}
</style>
