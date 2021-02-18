<template>
  <div class="deck-area">
    <div class="card">
      <card-back>
        <card-back>
          <card-back>
            <card-back></card-back>
          </card-back>
        </card-back>
      </card-back>
    </div>
  </div>
</template>

<script>
import CardBack from "../card/CardBack.vue";
export default {
  components: { CardBack },
};
</script>

<style scoped>
.deck-area {
  position: absolute;
  left: 50%;
  top: 50%;
}

.card {
  position: absolute;
}

@media screen and (orientation: landscape) {
  .card {
    width: 21vh;
    height: 30vh;
    left: -10.5vh;
    top: -15vh;
  }
}
@media screen and (orientation: portrait) {
  .card {
    width: 21vw;
    height: 30vw;
    left: -10.5vw;
    top: -15vw;
  }
}
.card div {
  left: -2px;
  top: -2px;
}
</style>