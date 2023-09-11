<template>
  <div class="choiceBrand__header">
    <nav class="choiceBrand__brand-title">Бренд</nav>
    <nav class="choiceBrand__clearBtn">Очистить</nav>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
.choiceBrand {
  &__brand-title {
    font-weight: bold;
  }

  &__header {
    display: flex;
    margin-bottom: 16px;
    height: 20px;
    align-items: flex-end;
  }

  &__clearBtn {
    font-size: 12px;
    text-decoration: underline;
    color: #AAAAAA;
  }
}
</style>
