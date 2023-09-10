<template>
 <div class="searchBox">
   <img
       src="@/assets/iconsKit/searchIcon.png"
       alt="find"
       class="searchBox__icon"
   >
   <input type="text" class="searchBox__input" placeholder="Поиск по 100 000 товаров ">
 </div>
</template>

<script>
export default {
  name: "SearchInput"
}
</script>

<style scoped lang="scss">
    .searchBox {
      align-items: center;
      display: flex;
      &__input {
        padding-left: 17.49px + 19px + 11px;
        height: 44px;
        border-radius: 10px;
        border: 1px solid #73AFF4
      }

      &__icon {
        z-index: 99;
        width: 17.49px;
        height: 17.49px;
        position: relative;
        left: 17.49px + 19px;
      }
    }
</style>
