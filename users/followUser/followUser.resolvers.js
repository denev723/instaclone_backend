import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    followUser: protectedResolver(async (_, { username }, { loggedInUser }) => {
      const checkUser = await client.user.findUnique({ where: { username } });
      if (!checkUser) {
        return {
          ok: false,
          error: "That user does not exist.",
        };
      }
      await client.user.update({
        where: {
          id: loggedInUser.id,
        },
        data: {
          following: {
            connect: {
              username,
            },
          },
        },
      });
      return {
        ok: true,
      };
    }),
  },
};
