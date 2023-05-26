const gameController = require("../../controllers/game.controller");
module.exports = [
  {
    method: "POST",
    url: "/on-game-finished",
    handler: gameController.getResultGame,
  },
];
