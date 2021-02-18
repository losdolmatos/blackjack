<template>
  <div class="pixel"></div>
  <over-dialog :show="!!endGame" :over="!!endOfCards" @close="continueGame">
    {{ endGame }}
  </over-dialog>
  <card-table>
    <div class="left-column">
      <dealer class="cards-container dealer">Dealer</dealer>
      <player class="cards-container player">Player</player>
    </div>
    <div class="right-column">
      <div class="deck-container">
        <deck-area></deck-area>
        <card v-if="dealerCard" :card="dealerCard" :dealer="true"></card>
        <card v-if="playerCard" :card="playerCard" :player="true"></card>
      </div>
      <div class="controls-container">
        <game-button
          :disabled="loading || !playerCanHit || !!endGame"
          @click="hit('player')"
          >Hit</game-button
        >
        <game-button
          :disabled="loading || !playerCanHold || !!endGame"
          @click="hit('dealer')"
          >Stand</game-button
        >
      </div>
    </div>
  </card-table>
</template>

<script>
import CardTable from "./ui/CardTable.vue";
import DeckArea from "./ui/DeckArea.vue";
import GameButton from "./ui/GameButton.vue";
import Player from "./ui/Player.vue";
import Dealer from "./ui/Dealer.vue";
import OverDialog from "./ui/OverDialog.vue";
import Card from "./card/Card.vue";

export default {
  name: "BlackJackApp",
  components: {
    CardTable,
    DeckArea,
    Card,
    GameButton,
    Player,
    Dealer,
    OverDialog,
  },
  data() {
    return {
      loading: false,
      error: false,
    };
  },
  computed: {
    cardsLeft() {
      return this.$store.getters["deck/cardsLeft"];
    },
    playerCard() {
      return this.$store.getters["player/card"];
    },
    playerPoints() {
      return this.$store.getters["player/points"];
    },
    dealerCard() {
      return this.$store.getters["dealer/card"];
    },
    dealerPoints() {
      return this.$store.getters["dealer/points"];
    },
    dealerCanHit() {
      return this.dealerPoints <= 16;
    },
    dealerLoose() {
      return (
        this.dealerPoints > 21 ||
        (this.playerPoints > this.dealerPoints &&
          !this.dealerCanHit &&
          !this.playerLoose)
      );
    },
    playerLoose() {
      return (
        this.playerPoints > 21 ||
        (this.playerPoints == 20 && this.dealerPoints == 21)
      );
    },
    playerCanHold() {
      return this.playerPoints > this.dealerPoints;
    },
    playerCanHit() {
      return this.playerPoints < 20;
    },
    endOfCards() {
      if (this.cardsLeft == 0) {
        if (this.dealerPoints == 0 && this.playerPoints == 0) {
          return "Blackjack!";
        }
        return this.dealerPoints == this.playerPoints
          ? "Split!"
          : this.dealerPoints > this.playerPoints
          ? "You Loose!"
          : "You Win!";
      }
      return null;
    },
    endGame() {
      if (this.endOfCards) {
        return this.endOfCards;
      } else if (this.dealerLoose || this.playerLoose) {
        return this.dealerLoose ? "You Win!" : "You Loose!";
      } else if (
        this.playerPoints == this.dealerPoints &&
        !this.playerCanHit &&
        !this.dealerCanHit
      ) {
        return "Split!";
      } else {
        return null;
      }
    },
  },
  methods: {
    async getCard(holder) {
      try {
        await this.$store.dispatch(holder + "/getCard");
      } catch (err) {
        console.log(err);
      }
    },
    async start(over) {
      if (this.loading) return;
      this.loading = true;
      try {
        if (over) {
          await this.$store.dispatch("deck/shakeDeck");
        }
        await this.getCard("player");
        await this.getCard("dealer");
        await this.getCard("player");
        await this.getCard("dealer");
      } catch (err) {
        console.log(err);
      }
      this.loading = false;
    },
    async hit(holder) {
      if (this.loading) return;
      this.loading = true;
      try {
        await this.getCard(holder);
      } catch (err) {
        console.log(err);
      }
      this.loading = false;
    },
    async continueGame() {
      try {
        console.log("cards left", this.cardsLeft);
        await this.$store.dispatch("player/clear");
        await this.$store.dispatch("dealer/clear");
        await this.start(this.cardsLeft < 5);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.left-column {
  position: absolute;
  width: 60%;
  height: 100%;
}
.right-column {
  position: absolute;
  left: 60%;
  width: 40%;
  height: 100%;
}

.cards-container {
  position: absolute;
  width: 100%;
  height: 50%;
}

.player.cards-container {
  top: 50%;
}

.deck-container {
  position: absolute;
  width: 100%;
  height: 50%;
  display: flex;
  z-index: 10;
}
.controls-container {
  position: absolute;
  width: 100%;
  top: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.pixel {
  position: absolute;
  width: 1px;
  height: 1px;
  background-image: url(../assets/cards.png);
}
</style>