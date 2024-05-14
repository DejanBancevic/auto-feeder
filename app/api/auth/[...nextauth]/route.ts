import NextAuth, {AuthOptions} from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '../../../../lib/prisma';
import { authOptions } from "../../../../lib/authOp";


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

