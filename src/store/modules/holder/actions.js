const timeout = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(ms), ms);
  });

export default {
  async clear(context) {
    console.log('убираем карты');
    context.commit('clearCards');
  },
  async getCard(context) {
    console.log('снимаем карту');
    try {
      await context.dispatch('deck/takeCard', null, { root: true });
      const card = context.rootGetters['deck/card'];
      context.commit('updateCard', card);
      context.commit('addTotal');
      await timeout(600);
      context.commit('addCard', { id: +new Date(), ...card });
      context.commit('updateCard', null);
    } catch (err) {
      console.log(err);
    }
  },
};
