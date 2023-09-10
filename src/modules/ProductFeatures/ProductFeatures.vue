<template>
  <div class="featuresContainer">
    <BreadCrumbs :breadcrumbs="breadcrumbs"/>
  </div>
</template>

<script>
import BreadCrumbs from "../../components/CategoryList/CategoryList.vue";
export default {
  name: "ProductFeatures",
  components: {
    BreadCrumbs
  },
  data() {
    return {
      breadcrumbs: [
        { label: 'Главная', url: '/' },
        { label: 'Категория', url: '/category' },
        { label: 'Товар', url: '/category/product' },
      ],
    };
  },
}
</script>

<style scoped>
  .featuresContainer {
    width: 280px;
  }
</style>
