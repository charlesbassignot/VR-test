const GameService = require("../services/game.service");
const Trick = require("../services/trick.service");
class Game {
  manageGame = (str) => {
    const strSplit = str.split("#");
    const trump = strSplit[0];
    const state = strSplit[1];
    const players = strSplit[2];
    const game = new GameService(trump, players);
    let tricks = [];

    const rounds = state.split("-");
    for (let i = 0; i < rounds.length; i += 4) {
      const round = rounds.slice(i, i + 4);
      tricks.push(round);
    }
    let startTrickPosition = "N";
    tricks.forEach((trick) => {
      if (trick.length != 4) return;
      const resultTrick = Trick.getResult(
        game.trump,
        trick,
        startTrickPosition
      );
      game.setScore(resultTrick);
      startTrickPosition = resultTrick.playerDirectionWin;
    });
    const result = game.getResultat();
    return { result: result };
  };
}

module.exports = new Game();
