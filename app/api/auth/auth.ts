import NextAuth from "next-auth";
import options from "@/app/api/auth/options";

export const { auth, handlers, signIn, signOut } = NextAuth(options);
