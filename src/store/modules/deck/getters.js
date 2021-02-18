export default {
  card(state) {
    return state.card;
  },
  deck(state) {
    return state.deck;
  },
  cardsLeft(state) {
    if (state.deck) {
      return state.deck.length;
    } else {
      return 0;
    }
  },
};
