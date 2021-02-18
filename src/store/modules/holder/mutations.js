export default {
  addCard(state, payload) {
    if (payload) {
      state.cards.push(payload);
      state.total = state.cards.length;
    }
  },
  addTotal(state) {
    state.total = state.cards.length + 1;
  },
  updateCard(state, payload) {
    state.card = payload;
  },
  clearCards(state) {
    state.cards = [];
    state.total = 0;
  },
};
