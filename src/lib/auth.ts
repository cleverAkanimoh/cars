import { NextAuthOptions, User, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";

import { prisma } from "@/lib";
import { comparePass } from "@/utils";
import { redirect } from "next/navigation";

export const authConfig: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "log in",
      credentials: {},
      async authorize(credentials) {
        const { email, passcode } = credentials as {
          email: string;
          passcode: string;
        };

        if (!credentials || !email || !passcode)
          throw new Error("invalid credentials");

        const dbUser = await prisma.user.findUnique({
          where: { email },
        });

        if (email === dbUser?.email) throw new Error("Email already exist");

        // if (dbUser && comparePass(passcode, dbUser.passcode))
        //   return dbUser as User;

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      console.log("jwt token", { token, user, session, trigger });
      
      if (trigger === "update" && session?.name) {
        token.name = session.name
      }
      
      // pass in user id and address to token
      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log("session token", { token, user, session });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
      // return session;
    },
  },
  // pages: {
  //   signIn: "/",
  //   signOut: "/",
  // },
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) {
    return redirect("/");
  }
}
