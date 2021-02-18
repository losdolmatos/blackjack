export default {
  updateDeck(state, payload) {
    state.deck = payload.deck;
  },
  updateCard(state, payload) {
    state.card = payload.card;
  },
};
