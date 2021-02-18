export default {
  cards(state) {
    return state.cards;
  },
  total(state) {
    return state.total;
  },
  card(state) {
    return state.card;
  },
  points(state) {
    return state.cards.map((i) => i.value).reduce((a, b) => a + b, 0);
  },
};
