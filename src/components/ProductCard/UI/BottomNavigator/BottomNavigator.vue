<template>
  <div>
    <Button :label="
                  inStock ? 'Купить' : 'Сообщить о поступлении'
            "
            variant="active"
            :inStock="inStock"
    />
  </div>
</template>

<script>
import Button from "@/UI/Button/Button.vue";

export default {
  name: "BottomNavigator",
  components: {Button},
  data() {
    return {
      isActive: this.inStock ? 'active' : 'disabled'
    }
  },
  props: [
    'inStock'
  ]
}
</script>

<style scoped>

</style>
