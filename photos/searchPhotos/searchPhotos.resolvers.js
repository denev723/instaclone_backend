import client from "../../client";

export default {
  Query: {
    searchPhotos: (_, { keyword }) =>
      client.photo.findMany({
        where: {
          OR: [
            { caption: { startsWith: keyword } },
            { caption: { contains: keyword } },
          ],
        },
      }),
  },
};
