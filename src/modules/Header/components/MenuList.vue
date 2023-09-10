<template>
  <div class="menuListBox">
    <LinkedMenuItems v-for="label in labelsMenu" :title="label"></LinkedMenuItems>
  </div>
</template>

<script>
import LinkedMenuItems from "../../../UI/LinkedMenuItems/LinkedMenuItems.vue";

export default {
  name: "MenuList",
  components: {
    LinkedMenuItems
  },
  data() {
    return {
       labelsMenu: [
         {title: 'Информация о компании', link: '#'},
         {title: 'Контакты', link: '#'},
         {title: 'Полезные ссылки', link: '#'},
       ]
    }
  }

}
</script>

<style scoped lang="scss">
 .menuListBox {
   display: flex;
 }
</style>
