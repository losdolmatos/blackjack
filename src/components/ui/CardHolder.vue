<template>
  <div class="card-holder-wrap">
    <div class="card-holder-title">
      <slot></slot>
      <div :class="{ overflow }">{{ points }}</div>
    </div>
    <div
      v-for="(card, index) in cards"
      :key="card.id"
      :style="getCardOffset(index, total)"
      class="card-wrap"
    >
      <card-face :card="card"></card-face>
    </div>
  </div>
</template>

<script>
import CardFace from "../card/CardFace.vue";

export default {
  props: ["cards", "total", "points"],
  components: {
    CardFace,
  },
  computed: {
    overflow() {
      return this.points > 21;
    },
  },
  methods: {
    getCardOffset(index, total) {
      const unit = window.innerWidth > window.innerHeight ? "vh" : "vw";
      return `transform: translateX(-${(total - index - 1) * 3}${unit});`;
    },
  },
};
</script>

<style scoped>
.card-holder-wrap {
  display: flex;
  align-items: center;
}

.card-wrap {
  position: absolute;
  top: 50%;
  left: 60%;
  transition: all 0.5s ease-out;
}

.card-holder-title {
  text-align: center;
  font-size: 3vw;
  padding: 1rem;
  text-shadow: 1px 1px 5px black;
}

.overflow {
  color: red;
}
</style>