const Player = require("./player.service");
class Game {
  constructor(trump, playersName) {
    this.trump = trump;
    this.players = {};
    const cardinal = ["N", "E", "S", "W"];
    playersName.split(",").forEach((playerName, index) => {
      this.players[cardinal[index]] = new Player(playerName, cardinal[index]);
    });
    this.teamScore = {
      lat: 0,
      lon: 0,
    };
  }
  getTeam = (direction) => {
    let team = "lon";
    if (direction == "E" || direction == "W") {
      team = "lat";
    }
    return team;
  };
  getDirs = (support) => {
    return support === "lon" ? ["N", "S"] : ["E", "W"];
  };
  addScoreTeam = (team, score) => {
    this.teamScore[team] += score;
  };
  getTeamOrder = () => {
    return this.teamScore.lat > this.teamScore.lon
      ? ["lat", "lon"]
      : ["lon", "lat"];
  };

  setScore = ({ score, playerDirectionWin }) => {
    const teamWin = this.getTeam(playerDirectionWin);
    this.addScoreTeam(teamWin, score);
    this.players[playerDirectionWin].addScore(score);
  };

  getResultat = () => {
    const orderScore = (players, support) => {
      let dirs = this.getDirs(support);
      let result =
        players[dirs[1]].personalScore > players[dirs[0]].personalScore
          ? `${players[dirs[1]].name},${players[dirs[0]].name}`
          : `${players[dirs[0]].name},${players[dirs[1]].name}`;
      return result;
    };
    let teamOrder = this.getTeamOrder();

    const order1 = orderScore(this.players, teamOrder[0]);
    const order2 = orderScore(this.players, teamOrder[1]);
    const result = `${this.teamScore[teamOrder[0]]}-${
      this.teamScore[teamOrder[1]]
    }#${order1}-${order2}`;
    return result;
  };
}

module.exports = Game;
