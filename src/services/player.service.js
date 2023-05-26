class Player {
  constructor(name, position) {
    if (!["N", "S", "E", "W"].includes(position)) {
      throw Error("no cardinal position");
    }
    (this.name = name), (this.personalScore = 0), (this.position = position);
  }

  addScore = (addScore) => {
    this.personalScore += addScore;
  };
}
module.exports = Player;
