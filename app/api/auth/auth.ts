import NextAuth from "next-auth/next";
import type { NextApiRequest, NextApiResponse } from "next";

import options from "@/app/api/auth/options";

const handler = async (req: NextApiRequest, res: NextApiResponse) =>
  await NextAuth(req, res, options);

export default handler;
