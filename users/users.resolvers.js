import client from "../client";

export default {
  User: {
    totalFollowing: ({ id }) =>
      client.user.count({
        where: {
          followers: {
            some: {
              id,
            },
          },
        },
      }),
    totalFollowers: ({ id }) =>
      client.user.count({
        where: {
          following: {
            some: {
              id,
            },
          },
        },
      }),
    isMe: ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return id === loggedInUser.id;
    },
    isFollowing: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      const checkFollowing = await client.user.count({
        where: {
          following: {
            some: {
              id,
            },
          },
        },
      });
      return Boolean(checkFollowing);
    },
    photos: ({ id }) =>
      client.user
        .findUnique({
          where: { id },
        })
        .photos(),
  },
};
