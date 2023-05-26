const Card = require("./card.service");

class Trick {
  getReoderdDirections = (startPosition) => {
    const directions = ["N", "E", "S", "W"];
    const startIndex = directions.indexOf(startPosition);
    const reorderedDirections = directions
      .slice(startIndex)
      .concat(directions.slice(0, startIndex));
    return reorderedDirections;
  };
  getResult = (trump, cardsPlayed, startPosition) => {
    const cards = cardsPlayed
      .map((card) => Card.convertCardToObject(card))
      .filter((value) => value.value);
    const reorderedDirections = this.getReoderdDirections(startPosition);
    let trickColor = cards[0].color;
    let bestValue = 0;
    let bestPlayerIndex = 0;
    let scoreTrick = 0;
    cards.forEach((card, index) => {
      if (card.color === trump) {
        if (trickColor != trump) {
          bestValue = 0;
          trickColor = card.color;
        }
        if (card.value > bestValue) {
          bestValue = card.value;
          bestPlayerIndex = index;
        }
        scoreTrick += card.value;
      } else if (card.color === trickColor) {
        if (card.value > bestValue) {
          bestValue = card.value;
          bestPlayerIndex = index;
        }
      }
      scoreTrick += card.value;
    });
    scoreTrick -= (cards[0].color === trump ? 2 : 1) * cards[0].value;

    return {
      score: scoreTrick,
      playerDirectionWin: reorderedDirections[bestPlayerIndex],
    };
  };
}

module.exports = new Trick();
