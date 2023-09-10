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
    height: 30px;
    padding-right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__mainItem {
    @include allItems;
    padding-left: 8px;
  }

  &__otherItem {
    @include allItems;
    padding-left: 32px;
  }
}
</style>
