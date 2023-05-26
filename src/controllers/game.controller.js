const Game = require("../managers/game.manager");
class gameController {
  getResultGame(req, reply) {
    try {
      const body = JSON.parse(req.body);
      const result = Game.manageGame(body.game);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new gameController();
