<template>
  <div v-if="card" class="card-wrap animate" :class="{ dealer, player }">
    <card-flip :back="true">
      <card-back></card-back>
    </card-flip>
    <card-flip :face="true" :card="card">
      <card-face :card="card"></card-face>
    </card-flip>
  </div>
</template>

<script>
import CardFace from "./CardFace.vue";
import CardFlip from "./CardFlip.vue";
import CardBack from "./CardBack.vue";
export default {
  props: ["card", "dealer", "player"],
  components: {
    CardFace,
    CardFlip,
    CardBack,
  },
};
</script>

<style scoped>
.card-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  perspective: 800px;
}

.animate.dealer {
  animation: dealer 0.5s ease-out forwards;
}
.animate.player {
  animation: player 0.5s ease-out forwards;
}

@keyframes dealer {
  0% {
    transform: translateX(-8px) translateY(-8px);
  }
  100% {
    transform: translateX(-44vw) translateY(0);
  }
}
@keyframes player {
  0% {
    transform: translateX(-8px) translateY(-8px);
  }
  100% {
    transform: translateX(-44vw) translateY(50vh);
  }
}
</style>