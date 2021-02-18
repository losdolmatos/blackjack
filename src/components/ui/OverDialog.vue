<template>
  <teleport to="body">
    <div v-if="show" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <header>
          <slot name="header">
            <h2>{{ over ? "Welcome" : "Game Over" }}</h2>
          </slot>
        </header>
        <section>
          <slot></slot>
        </section>
        <menu>
          <game-button @click="close">{{
            over ? "Start" : "Continue"
          }}</game-button>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
import GameButton from "./GameButton.vue";

export default {
  props: ["show", "over"],
  emits: ["close"],
  components: {
    GameButton,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 1rem;
  border: 5px solid #3a2e1c;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-shadow: 1px 1px 5px rgb(75, 67, 67);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  background-color: #ecb25b;
  color: white;
  width: auto;
  text-align: center;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
  font-size: 3rem;
  text-align: center;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin: 0;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>