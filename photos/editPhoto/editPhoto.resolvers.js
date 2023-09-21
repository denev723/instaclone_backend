import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { processHashtag } from "../photos.util";

export default {
  Mutation: {
    editPhoto: protectedResolver(
      async (_, { id, caption }, { loggedInUser }) => {
        const checkedPhoto = await client.photo.findFirst({
          where: {
            id,
            userId: loggedInUser.id,
          },
          include: {
            hashtags: {
              select: {
                hashtag: true,
              },
            },
          },
        });
        console.log(checkedPhoto);
        if (!checkedPhoto) {
          return {
            ok: false,
            error: "Photo not found.",
          };
        }
        await client.photo.update({
          where: {
            id,
          },
          data: {
            caption,
            hashtags: {
              disconnect: checkedPhoto.hashtags,
              connectOrCreate: processHashtag(caption),
            },
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};
