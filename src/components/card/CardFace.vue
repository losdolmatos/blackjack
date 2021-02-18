<template>
  <div class="card-face">
    <div :style="cardPosition"></div>
  </div>
</template>

<script>
export default {
  props: ["card"],
  computed: {
    cardPosition() {
      return this.getCardPosition(this.card);
    },
  },
  methods: {
    getCardPosition(card) {
      if (card) {
        const w = -(273 * card.index) / 13;
        const h = -(120 * card.suit) / 4;
        if (window.innerWidth < window.innerHeight) {
          return `background-position: ${w}vw ${h}vw;`;
        } else {
          return `background-position: ${w}vh ${h}vh;`;
        }
      }
      return "";
    },
  },
};
</script>

<style scoped>
.card-face {
  position: absolute;
}
@media screen and (orientation: landscape) {
  .card-face {
    width: 21vh;
    height: 30vh;
    left: -10.5vh;
    top: -15vh;
  }
  .card-face div {
    background-size: 273vh 120vh;
  }
}
@media screen and (orientation: portrait) {
  .card-face {
    width: 21vw;
    height: 30vw;
    left: -10.5vw;
    top: -15vw;
  }
  .card-face div {
    background-size: 273vw 120vw;
  }
}

.card-face div {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background-image: url(../../assets/cards.png);
  background-position: 0 0;
  background-repeat: no-repeat;
}
</style>