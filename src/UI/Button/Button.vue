<template>
  <button
      :style="customStyles"
      class="btn"
  >
    {{label}}
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
            (this.variant === 'main' && '1px solid #73AFF4') ||
            (this.variant === 'active' && '1px solid  #7397F5') ||
            (this.variant === 'disabled' && '1px solid  #AAAAAA'),
        color:
            (this.variant === 'main' && 'black') ||
            (this.variant === 'active' && '#7397F5') ||
            (this.variant === 'disabled' && '#AAAAAA'),
        height:
            (this.variant === 'main' && '48px') ||
            '38px',
        fontWeight:
            (this.variant !== 'active' && 'bold'),
        padding:
            (this.variant === 'main' && '0 24px')

      };
    },
  },
  methods: {
    isDisabled() {
      return this.variant === 'productNoStock';
    }
  },
  props: [
      'variant',
      'borderColor',
      'label'
  ]
}
</script>

<style scoped>

.btn:hover {
  transition: background-color 0.3s ease;
  background-color: #7397F5 !important;
  color: white !important;
  cursor: pointer;
}

.btn:not(:hover){
  transition: background-color 0.3s ease;
  background-color: white !important;
}

.btn:focus {
  outline: none;
}
</style>
