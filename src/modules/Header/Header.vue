<template>
  <div class="headerContainer">
    <logoChip :label="titleLogo"></logoChip>
    <Button
        :variant="VariantCatalogBtn"
        :label="CatalogLabel"
    ></Button>
    <SearchInput></SearchInput>
    <MenuList></MenuList>
  </div>
</template>

<script>
import MenuList from "./components/MenuList.vue";
import LogoChip from "../../UI/LogoChip/LogoChip.vue";
import Button from "../../UI/Button/Button.vue";
import SearchInput from "../../UI/SearchInput/SearchInput.vue";
import LinkedMenuItems from "../../UI/LinkedMenuItems/LinkedMenuItems.vue";

export default {
  name: "Header",
  components: {
    LogoChip,
    Button,
    SearchInput,
    LinkedMenuItems,
    MenuList
  },
  data() {
    return {
      titleLogo: 'Логотип',
      VariantCatalogBtn: 'main', // main active disabled
      CatalogLabel: 'Каталог',
    };
  },
}
</script>

<style scoped>
  .headerContainer {
    max-width: 1720px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 24px;
  }
</style>
