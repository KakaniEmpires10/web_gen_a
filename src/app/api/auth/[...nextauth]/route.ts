import { prisma } from "@/lib/Prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const authOption: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credential",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "your password" },
      },
      async authorize(credentials) {

        if (!credentials?.username && credentials?.password) {
            return null
        }

        const user = await prisma.user.findFirst({
          where: {
            username : credentials?.username,
          },
        });

        if (!user) {
          return null;
        }

        const passwordMatch = bcrypt.compare(credentials?.password!, user.hashedPassword);

        if (!passwordMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
