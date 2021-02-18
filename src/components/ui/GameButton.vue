<template>
  <div class="button" :class="{ disabled }" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["disabled"],
  emits: ["click"],
  methods: {
    onClick() {
      if (this.disabled) return;
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.button {
  padding: 0.75rem 1.5rem;
  font-weight: 900;
  font-size: 4vh;
  font-family: Tahoma, sans-serif;
  background-color: #ecb25b;
  border: 5px solid #3a2e1c;
  min-width: 25vh;
  color: white;
  cursor: pointer;
  border-radius: 1rem;
  text-align: center;
  margin: 1rem;
  text-shadow: 1px 1px 5px rgb(75, 67, 67);
  box-shadow: 10px 5px 50px rgb(0, 0, 0, 0.5);
  display: inline-block;
  transition: 0.1s all ease-in;
}

@media screen and (orientation: portrait) {
  .button {
    font-size: 4vw;
    min-width: 25vw;
  }
}

.button:hover,
.button:active {
  background-color: #a87e3f;
  border-color: #ecb25b;
  color: #3a2e1c;
}

.button.disabled {
  background-color: #a3a3a3;
  border: 5px solid #535353;
  color: #e1e1e1;
  opacity: 0.4;
}
</style>