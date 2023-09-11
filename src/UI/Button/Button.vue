<template>
  <button
      :style="customStyles"
      class="btn"

  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  computed: {
    customStyles() {
      return {
        backgroundColor: 'white',
        borderRadius:
            (this.variant === 'main' && '8px') ||
            ('4px'),
        border:
            (!this.inStock
                && this.variant === 'active'
                && '1px solid #AAAAAA') ||
            (this.variant === 'main' && '1px solid #73AFF4') ||
            (this.variant === 'active' && '1px solid  #7397F5') ||
            (this.variant === 'disabled' && '1px solid  #AAAAAA'),
        color:
            (!this.inStock
                && this.variant === 'active'
                && '#AAAAAA') ||
            (this.variant === 'main' && 'black') ||
            (this.variant === 'active' && '#7397F5') ||
            (this.variant === 'disabled' && '#AAAAAA'),
        height:
            (this.variant === 'main' && '48px') ||
            '38px',
        padding:
            (this.variant === 'main' && '0 24px') ||
            (this.variant === 'active' && '0 12px'),
        width:
            (this.variant === 'main' && 'auto') ||
            (!this.inStock ? '100%' : 'auto')

      };
    },
  },
  props: [
    'variant',
    'borderColor',
    'label',
    'inStock'
  ]
}
</script>

<style scoped>
.btn {
  font-weight: bold;
}

.btn:hover {
  transition: background-color 0.3s ease;
  background-color: #7397F5 !important;
  color: white !important;
  cursor: pointer;
}

.btn:not(:hover) {
  transition: background-color 0.3s ease;
  background-color: white !important;
}

.btn:focus {
  outline: none;
}
</style>
