const fastify = require("fastify")({ logger: true });

fastify.register(require("./routes/public"));
fastify.get("/", (request, reply) => {
  reply.send({ api: "run" });
});
const start = async () => {
  try {
    const address = "0.0.0.0";
    const port = 21000;

    await fastify.listen({
      host: address,
      port: port,
    });
    console.log(`Serveur démarré sur ${address}:${port}`);
  } catch (err) {
    console.log("err: ", err);
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
