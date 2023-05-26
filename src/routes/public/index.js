let routes = [];

routes = routes.concat(require("./game.routes"));

module.exports = async (instace) => {
  routes.forEach((route, index) => {
    instace.route(route);
  });
};
