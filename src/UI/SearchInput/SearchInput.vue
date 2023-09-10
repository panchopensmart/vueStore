<template>
 <div class="searchBox">
   <img
       src="@/assets/iconsKit/searchIcon.png"
       alt="find"
       class="searchBox__icon"
   >
   <input type="text" class="searchBox__input"  :placeholder="placeholder">
 </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      text: 'Поиск по 100 000 товаров',
      placeholder: '',
    };
  },
  created() {
    this.animatePlaceholder();
  },
  methods: {

    animatePlaceholder() {
      let currentIndex = 0;
      const placeholderText = this.text;

      const interval = setInterval(() => {
        this.placeholder = placeholderText.slice(0, currentIndex);
        currentIndex++;

        if (currentIndex > placeholderText.length) {
          clearInterval(interval);
        }
      }, 100);
    },
  },
}
</script>

<style scoped lang="scss">
    .searchBox {
      flex-grow: 1;
      flex-basis: 0;
      align-items: center;
      display: flex;
      margin-left: 24px;
      margin-right: 24px;

      &__input {
        padding-left: 17.49px + 19px + 11px;
        height: 44px;
        border-radius: 10px;
        border: 1px solid #73AFF4;
        width: 100%;
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
