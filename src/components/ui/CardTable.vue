<template>
  <div class="card-table">
    <slot></slot>
  </div>
</template>

<style scoped>
.card-table {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/table.jpg);
  background-size: cover;
  background-position: center center;
}
</style>