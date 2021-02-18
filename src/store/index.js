import { createStore } from 'vuex';

import dealerModule from './modules/holder/index.js';
import playerModule from './modules/holder/index.js';
import deckModule from './modules/deck/index.js';

const store = createStore({
  modules: {
    dealer: dealerModule,
    player: playerModule,
    deck: deckModule,
  },
});

export default store;
