class Card {
  convertCardToValue = (value) => {
    try {
      const converterValue = {
        A: 13,
        K: 12,
        Q: 11,
        J: 10,
        T: 9,
        9: 8,
        8: 7,
        7: 6,
        6: 5,
        5: 4,
        4: 3,
        3: 2,
        2: 1,
      };
      return converterValue[value];
    } catch (error) {
      throw error;
    }
  };
  convertCardToObject = (str) => {
    try {
      const strArr = str.split("");
      const valueCard = this.convertCardToValue(strArr[0]);
      if (!(["S", "H", "D", "C"].includes(strArr[1]) || !valueCard))
        return undefined;
      return { value: valueCard, color: strArr[1] };
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new Card();
