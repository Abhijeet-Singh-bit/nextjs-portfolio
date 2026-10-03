import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const email = process.env.ADMIN_EMAIL;
        const password = process.env.ADMIN_PASSWORD;

        if (
          credentials?.email === email &&
          credentials?.password === password
        ) {
          return {
            id: "1",
            name: "Admin",
            email: email,
          };
        }

        return null;
      },
    }),
  ],
});