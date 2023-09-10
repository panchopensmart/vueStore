<template>
  <div class="headerContainer">
    <logo-chip :label="titleLogo"></logo-chip>
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
