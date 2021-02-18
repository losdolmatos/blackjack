<template>
  <div class="card-back">
    <div><slot></slot></div>
  </div>
</template>

<style scoped>
.card-back {
  position: absolute;
}
@media screen and (orientation: landscape) {
  .card-back {
    width: 21vh;
    height: 30vh;
    left: -10.5vh;
    top: -15vh;
  }
}
@media screen and (orientation: portrait) {
  .card-back {
    width: 21vw;
    height: 30vw;
    left: -10.5vw;
    top: -15vw;
  }
}
.card-back div {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(../../assets/back.svg);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>

