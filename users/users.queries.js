import client from "../client";

export default {
  Query: {
    seeProfile: (_, { username }) => {
      return client.user.findFirst({ where: { username } });
    },
  },
};
