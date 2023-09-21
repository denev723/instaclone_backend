import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    toggleLike: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const checkedPhoto = await client.photo.findUnique({
        where: { id },
      });
      if (!checkedPhoto) {
        return {
          ok: false,
          error: "Photo not found.",
        };
      }
      const likeLocation = {
        photoId_userId: {
          userId: loggedInUser.id,
          photoId: id,
        },
      };
      const like = await client.like.findUnique({
        where: likeLocation,
      });
      if (like) {
        await client.like.delete({
          where: likeLocation,
        });
      } else {
        await client.like.create({
          data: {
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            photo: {
              connect: {
                id: checkedPhoto.id,
              },
            },
          },
        });
      }
      return {
        ok: true,
      };
    }),
  },
};
