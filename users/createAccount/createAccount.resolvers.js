import client from "../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });
        if (existingUser) {
          throw new Error("This username/email is already taken.");
        }
        const verifiedPassword = await bcrypt.hash(password, 10);
        await client.user.create({
          data: {
            firstName,
            lastName,
            email,
            username,
            password: verifiedPassword,
          },
        });
        return {
          ok: true,
        };
      } catch (error) {
        return {
          ok: false,
          error: "Can't create account.",
        };
      }
    },
  },
};
