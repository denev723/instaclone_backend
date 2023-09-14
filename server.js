require("dotenv").config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./schema";
import { getUser } from "./users/users.utils";

const server = new ApolloServer({ schema });
const PORT = process.env.PORT;

(async function () {
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
    context: async ({ req }) => {
      return {
        loggedInUser: await getUser(req.headers.token),
      };
    },
  });
  console.log(`🚀  Server ready at: ${url}`);
})();
