<template>
  <div :class="{ back, face }" class="flip-card animation">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["card", "back", "face"],
};
</script>

<style scoped>
.flip-card {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.face {
  transform: rotateY(180deg);
}
.back {
  transform: rotateY(0deg);
}
.animation.face {
  animation: flip-face 0.5s linear forwards;
}
.animation.back {
  animation: flip-back 0.5s linear forwards;
}
@keyframes flip-back {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-180deg);
  }
}
@keyframes flip-face {
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
</style>