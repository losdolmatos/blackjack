// количество карт в колоде
const numberOfCards = 52;
// количество колод на раздачу
const numberOfDecks = 6;
// количество мастей
const numberOfSuites = 4;
// количество карт каждой масти
const numberOfCardsPerSuit = numberOfCards / numberOfSuites;
// соотвествие очков номеру карты
const values = [
  11, // Tуз
  2, // 2
  3, // 3
  4, // 4
  5, // 5
  6, // 6
  7, // 7
  8, // 8
  9, // 9
  10, // 10
  10, // Валет
  10, // Дама
  10, // Король
];

function getRandomCards() {
  const cards = [];
  for (var j = 0; j < numberOfDecks; j++) {
    for (var i = 0; i < numberOfCards; i++) {
      cards.push({
        suit: Math.floor(i / numberOfCardsPerSuit),
        index: i % numberOfCardsPerSuit,
        value: values[i % numberOfCardsPerSuit],
      });
    }
  }
  return shuffle(cards);
}

function shuffle(array) {
  var i = array.length,
    j,
    temp;

  if (i) {
    while (--i) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  return array;
}

export default {
  async shakeDeck(context) {
    console.log('тусуем колоду');
    context.commit('updateDeck', { deck: getRandomCards() });
  },
  async takeCard(context) {
    console.log('снимаем карту');
    const deck = context.getters.deck;
    const card = deck.pop();
    context.commit('updateDeck', { deck: deck });
    context.commit('updateCard', { card: card });
  },
};
