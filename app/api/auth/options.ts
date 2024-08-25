import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";

import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/libs/prisma";

const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  session: {
    strategy: "jwt"
  }
};

export default options;
