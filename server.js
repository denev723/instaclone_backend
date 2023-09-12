require("dotenv").config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./schema";

const server = new ApolloServer({ schema });
const PORT = process.env.PORT;

(async function () {
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });
  console.log(`🚀  Server ready at: ${url}`);
})();
