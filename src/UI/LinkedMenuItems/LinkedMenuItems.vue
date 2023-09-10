<template>
  <nav class="menuItem">
    <a href="#">{{title.title}}</a>
  </nav>
</template>

<script>
export default {
  name: "LinkedMenuItems",
  props: [
      'title'
  ]
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #393939;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
