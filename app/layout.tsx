import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";

import options from "@/app/api/auth/options";
import SessionProvider from "@/components/providers/session";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "scratch",
  description: "Your notes and documents in one place."
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
